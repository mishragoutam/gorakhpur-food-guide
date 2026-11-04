import { describe, it, expect, beforeEach } from 'vitest';
import { storageService } from '@/services/storageService';

describe('Table Booking System', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('creates a table reservation with SMS and email notifications', () => {
    const booking = storageService.createBooking({
      restaurantId: 'chaudhary-sweet-house',
      restaurantName: 'Chaudhary Sweet House & Restaurant',
      guestName: 'Ankit Mishra',
      mobile: '+91 9838012345',
      email: 'ankit.mishra@gmail.com',
      date: '2026-11-05',
      time: '08:30 PM',
      guests: 4,
      seatingArea: 'Indoor AC Dining',
      specialRequests: 'Anniversary cake arrangement',
    });

    expect(booking.id).toMatch(/^TB-/);
    expect(booking.status).toBe('Confirmed');
    expect(booking.confirmationCode).toHaveLength(6);
    expect(booking.notifications.smsSent).toBe(true);
    expect(booking.notifications.smsDeliveredTo).toBe('+91 9838012345');
    expect(booking.notifications.emailSent).toBe(true);
    expect(booking.notifications.emailDeliveredTo).toBe('ankit.mishra@gmail.com');
    expect(booking.notifications.smsText).toContain('Chaudhary Sweet House & Restaurant');
    expect(booking.notifications.smsText).toContain('CONFIRMED');
  });

  it('filters reservations per restaurant and updates status', () => {
    storageService.createBooking({
      restaurantId: 'bobis-restaurant',
      restaurantName: 'Bobis Restaurant',
      guestName: 'Rohan Sharma',
      mobile: '+91 9838099999',
      email: 'rohan@gmail.com',
      date: '2026-11-06',
      time: '01:00 PM',
      guests: 2,
    });

    storageService.createBooking({
      restaurantId: 'lakefront-lounge',
      restaurantName: 'Lakefront Lounge',
      guestName: 'Sneha Verma',
      mobile: '+91 9838088888',
      email: 'sneha@gmail.com',
      date: '2026-11-06',
      time: '07:00 PM',
      guests: 6,
    });

    const bobisBookings = storageService.getBookings('bobis-restaurant');
    expect(bobisBookings).toHaveLength(1);
    expect(bobisBookings[0]?.guestName).toBe('Rohan Sharma');

    const updated = storageService.updateBookingStatus(bobisBookings[0]?.id || '', 'Completed');
    expect(updated?.status).toBe('Completed');

    const all = storageService.getBookings();
    expect(all).toHaveLength(2);
  });

  it('matches bookings resiliently by slug, demo- prefix, or restaurant name', () => {
    storageService.createBooking({
      restaurantId: 'rest-1793732616313',
      restaurantName: 'KIPM Cafe',
      guestName: 'Goutam Mishra',
      mobile: '+91 7275099317',
      email: 'goutam@gmail.com',
      date: '2026-11-04',
      time: '08:00 PM',
      guests: 2,
    });

    // Match by exact ID
    expect(storageService.getBookings('rest-1793732616313')).toHaveLength(1);
    // Match by restaurant name
    expect(storageService.getBookings(undefined, 'KIPM Cafe')).toHaveLength(1);
    // Match by slugified name
    expect(storageService.getBookings('kipm-cafe', 'KIPM Cafe')).toHaveLength(1);
  });

  it('deletes a table reservation correctly', () => {
    const booking = storageService.createBooking({
      restaurantId: 'rest-1793732616313',
      restaurantName: 'KIPM Cafe',
      guestName: 'Test Diner',
      mobile: '+91 7275000000',
      email: 'test@gmail.com',
      date: '2026-11-04',
      time: '07:00 PM',
      guests: 2,
    });

    expect(storageService.getBookings('rest-1793732616313')).toHaveLength(1);
    const deleted = storageService.deleteBooking(booking.id);
    expect(deleted).toBe(true);
    expect(storageService.getBookings('rest-1793732616313')).toHaveLength(0);
  });
});
