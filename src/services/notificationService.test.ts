import { describe, expect, it } from 'vitest';
import {
  formatBookingPass,
  formatSmsPass,
  formatEmailVoucher,
  getBookingNotificationUrls,
} from './notificationService';
import type { TableBooking } from '@/types/restaurant';

describe('notificationService', () => {
  const sampleBooking: TableBooking = {
    id: 'TB-98214',
    restaurantId: 'rest-1',
    restaurantName: 'Royal Awadh Rasoi',
    guestName: 'Rahul Verma',
    mobile: '+91 98380 12345',
    email: 'rahul@gmail.com',
    date: '2026-11-10',
    time: '08:00 PM',
    guests: 4,
    seatingArea: 'Indoor AC',
    specialRequests: 'Window table please',
    status: 'Confirmed',
    confirmationCode: '582914',
    createdAt: new Date().toISOString(),
    notifications: {
      smsSent: true,
      smsDeliveredTo: '+91 98380 12345',
      emailSent: true,
      emailDeliveredTo: 'rahul@gmail.com',
      smsText: 'Test SMS',
      emailSubject: 'Test Email',
    },
  };

  it('formats WhatsApp pass with Vyora branding, booking code, and party details', () => {
    const text = formatBookingPass(sampleBooking);
    expect(text).toContain('VYORA TABLE RESERVATION CONFIRMED');
    expect(text).toContain('Royal Awadh Rasoi');
    expect(text).toContain('582914');
    expect(text).toContain('Rahul Verma');
    expect(text).toContain('4 Guests');
    expect(text).toContain('Window table please');
    expect(text).toContain('Powered by Vyora');
  });

  it('formats SMS text compactly for mobile phones', () => {
    const sms = formatSmsPass(sampleBooking);
    expect(sms).toContain('Vyora Booking Confirmed');
    expect(sms).toContain('582914');
    expect(sms).toContain('Royal Awadh Rasoi');
  });

  it('formats email subject and body with full voucher details', () => {
    const email = formatEmailVoucher(sampleBooking);
    expect(email.subject).toContain('Vyora Table Pass');
    expect(email.subject).toContain('582914');
    expect(email.body).toContain('Hello Rahul Verma');
    expect(email.body).toContain('Team Vyora');
    expect(email.body).toContain('8382999557');
    expect(email.body).toContain('lazyotakumg@gmail.com');
  });

  it('generates working 1-click notification URLs for WhatsApp, SMS, Gmail, and mailto', () => {
    const urls = getBookingNotificationUrls(sampleBooking, '9838099887');
    expect(urls.whatsappUrl).toContain('https://wa.me/919838012345');
    expect(urls.ownerWhatsappUrl).toContain('https://wa.me/919838099887');
    expect(urls.supportWhatsappUrl).toContain('https://wa.me/918382999557');
    expect(urls.smsUrl).toContain('sms:+919838012345');
    expect(urls.gmailUrl).toContain('https://mail.google.com/mail/');
    expect(urls.gmailUrl).toContain('to=rahul%40gmail.com');
    expect(urls.mailtoUrl).toContain('mailto:rahul%40gmail.com');
  });
});

