import type { TableBooking } from '@/types/restaurant';

/**
 * Vyora Notification Service
 * Handles multi-channel delivery: WhatsApp, SMS, Email (Gmail Web & Native Mailto),
 * Web Share API, Clipboard copy, and Browser Push Notifications.
 */

export interface NotificationResult {
  whatsappUrl: string;
  smsUrl: string;
  gmailUrl: string;
  mailtoUrl: string;
  formattedText: string;
}

export function formatBookingPass(booking: TableBooking): string {
  return [
    `*VYORA TABLE RESERVATION CONFIRMED*`,
    `--------------------------------------`,
    `*Restaurant:* ${booking.restaurantName}`,
    `*Booking Code:* ${booking.confirmationCode}`,
    `*Booking Ref:* ${booking.id}`,
    `*Guest Name:* ${booking.guestName}`,
    `*Party Size:* ${booking.guests} Guests`,
    `*Date & Time:* ${booking.date} at ${booking.time}`,
    `*Seating Area:* ${booking.seatingArea}`,
    booking.specialRequests ? `*Special Request:* ${booking.specialRequests}` : null,
    `--------------------------------------`,
    `Show this pass at the restaurant reception desk upon arrival.`,
    `Powered by Vyora • Gorakhpur Dining`,
  ]
    .filter(Boolean)
    .join('\n');
}

export function formatSmsPass(booking: TableBooking): string {
  return `Vyora Booking Confirmed: Table for ${booking.guests} at ${booking.restaurantName} on ${booking.date} (${booking.time}). Code: ${booking.confirmationCode}. Ref: ${booking.id}. Please present at entry.`;
}

export function formatEmailVoucher(booking: TableBooking): { subject: string; body: string } {
  const subject = `Vyora Table Pass: ${booking.restaurantName} on ${booking.date} (${booking.time}) - Code ${booking.confirmationCode}`;
  const body = [
    `Hello ${booking.guestName},`,
    ``,
    `Your table reservation at ${booking.restaurantName} is CONFIRMED!`,
    ``,
    `RESERVATION SUMMARY:`,
    `-----------------------------------------`,
    `• Restaurant: ${booking.restaurantName}`,
    `• Confirmation Code: ${booking.confirmationCode}`,
    `• Booking Reference: ${booking.id}`,
    `• Guest Name: ${booking.guestName}`,
    `• Guests: ${booking.guests} People`,
    `• Date: ${booking.date}`,
    `• Time: ${booking.time}`,
    `• Seating: ${booking.seatingArea}`,
    booking.specialRequests ? `• Special Requests: ${booking.specialRequests}` : '',
    `-----------------------------------------`,
    ``,
    `Please present this booking voucher or your confirmation code (${booking.confirmationCode}) upon arrival at the restaurant.`,
    ``,
    `Warm regards,`,
    `Team Vyora • Gorakhpur Food Guide`,
    `Need help? Helpline: +91 98380 91234 | contact@vyora.in`,
  ]
    .filter((line) => line !== null)
    .join('\n');

  return { subject, body };
}

/**
 * Generate 1-click delivery URLs
 */
export function getBookingNotificationUrls(booking: TableBooking): NotificationResult {
  const cleanMobile = booking.mobile.replace(/\D/g, '').slice(-10);
  const text = formatBookingPass(booking);
  const smsText = formatSmsPass(booking);
  const { subject, body } = formatEmailVoucher(booking);

  // WhatsApp: direct send to user's phone or restaurant
  const whatsappUrl = `https://wa.me/91${cleanMobile}?text=${encodeURIComponent(text)}`;

  // SMS: universal cross-platform format for iOS and Android
  const smsUrl = `sms:+91${cleanMobile}?&body=${encodeURIComponent(smsText)}`;

  // Gmail Web Composer URL
  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(booking.email)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  // Native mailto URL
  const mailtoUrl = `mailto:${encodeURIComponent(booking.email)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  return {
    whatsappUrl,
    smsUrl,
    gmailUrl,
    mailtoUrl,
    formattedText: text,
  };
}

/**
 * Web Share API (mobile devices)
 */
export async function shareBookingPassViaWebShare(booking: TableBooking): Promise<boolean> {
  const text = formatBookingPass(booking);
  if (typeof navigator !== 'undefined' && navigator.share) {
    try {
      await navigator.share({
        title: `Vyora Table Pass: ${booking.restaurantName}`,
        text: text,
      });
      return true;
    } catch {
      // User cancelled share
      return false;
    }
  }
  return false;
}

/**
 * Copy Pass to Clipboard
 */
export async function copyBookingPassToClipboard(booking: TableBooking): Promise<boolean> {
  const text = formatBookingPass(booking);
  try {
    if (typeof navigator !== 'undefined' && navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(text);
      return true;
    }
  } catch {
    // fallback
  }
  return false;
}

/**
 * Download Booking Pass as Text File
 */
export function downloadBookingPassFile(booking: TableBooking): void {
  const text = formatBookingPass(booking);
  const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement('a');
  anchor.href = url;
  anchor.download = `Vyora_Booking_${booking.confirmationCode}.txt`;
  document.body.appendChild(anchor);
  anchor.click();
  document.body.removeChild(anchor);
  URL.revokeObjectURL(url);
}

/**
 * Browser push notification (if permitted)
 */
export async function requestAndTriggerPushNotification(title: string, body: string): Promise<boolean> {
  if (typeof window === 'undefined' || !('Notification' in window)) return false;

  try {
    let permission = Notification.permission;
    if (permission === 'default') {
      permission = await Notification.requestPermission();
    }
    if (permission === 'granted') {
      new Notification(title, {
        body,
        icon: '/favicon.svg',
      });
      return true;
    }
  } catch {
    // ignore
  }
  return false;
}
