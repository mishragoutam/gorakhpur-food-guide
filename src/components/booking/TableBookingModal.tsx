import {
  Calendar,
  Clock,
  Users,
  X,
  CheckCircle2,
  Phone,
  Mail,
  MessageSquare,
  Sparkles,
  Share2,
  Armchair,
  Copy,
  Download,
  Send,
  ExternalLink,
} from 'lucide-react';
import { useState } from 'react';
import { storageService } from '@/services/storageService';
import { showToast } from '@/lib/toast';
import type { Restaurant, TableBooking } from '@/types/restaurant';
import {
  getBookingNotificationUrls,
  shareBookingPassViaWebShare,
  copyBookingPassToClipboard,
  downloadBookingPassFile,
  requestAndTriggerPushNotification,
} from '@/services/notificationService';

interface TableBookingModalProps {
  isOpen: boolean;
  restaurant: Restaurant | null;
  onClose: () => void;
  onBookingCreated?: (booking: TableBooking) => void;
}

const GUEST_OPTIONS = [2, 3, 4, 5, 6, 8, 10, 12];

const TIME_SLOTS = [
  '12:30 PM',
  '01:00 PM',
  '01:30 PM',
  '02:00 PM',
  '07:00 PM',
  '07:30 PM',
  '08:00 PM',
  '08:30 PM',
  '09:00 PM',
  '09:30 PM',
];

const SEATING_AREAS = [
  'Indoor AC Dining',
  'Outdoor Rooftop / Garden',
  'Family Dining Hall',
  'Quiet Corner Booth',
];

const TODAY_DATE_STR = new Date().toISOString().slice(0, 10);

export function TableBookingModal({
  isOpen,
  restaurant,
  onClose,
  onBookingCreated,
}: TableBookingModalProps) {
  const currentUser = storageService.getCustomerUser();

  const [guests, setGuests] = useState<number>(2);
  const [date, setDate] = useState<string>(TODAY_DATE_STR);
  const [time, setTime] = useState<string>('08:00 PM');
  const [seatingArea, setSeatingArea] = useState<string>('Indoor AC Dining');
  const [guestName, setGuestName] = useState<string>(currentUser?.name || '');
  const [mobile, setMobile] = useState<string>('');
  const [email, setEmail] = useState<string>(currentUser?.email || '');
  const [specialRequests, setSpecialRequests] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [confirmedBooking, setConfirmedBooking] = useState<TableBooking | null>(null);
  const [error, setError] = useState<string>('');

  if (!isOpen || !restaurant) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const cleanName = guestName.trim();
    const cleanMobile = mobile.trim().replace(/\D/g, '');
    const cleanEmail = email.trim();

    if (!cleanName) {
      setError('Please enter your full name.');
      return;
    }

    if (cleanMobile.length < 10) {
      setError('Please enter a valid 10-digit mobile number for SMS confirmation.');
      return;
    }

    if (!cleanEmail || !cleanEmail.includes('@')) {
      setError('Please enter a valid email address for your booking voucher.');
      return;
    }

    setIsSubmitting(true);

    try {
      const newBooking = storageService.createBooking({
        restaurantId: restaurant.id,
        restaurantName: restaurant.name,
        guestName: cleanName,
        mobile: `+91 ${cleanMobile.slice(-10)}`,
        email: cleanEmail,
        date,
        time,
        guests,
        seatingArea,
        specialRequests: specialRequests.trim() || undefined,
      });

      setConfirmedBooking(newBooking);
      showToast(`Table confirmed! Code: ${newBooking.confirmationCode}`);
      requestAndTriggerPushNotification(
        'Vyora Table Reserved!',
        `Table for ${newBooking.guests} at ${newBooking.restaurantName}. Code: ${newBooking.confirmationCode}`,
      ).catch(() => {});
      if (onBookingCreated) onBookingCreated(newBooking);
    } catch {
      setError('Failed to book table. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setConfirmedBooking(null);
    onClose();
  };

  const handleCopyPass = async (booking: TableBooking) => {
    const ok = await copyBookingPassToClipboard(booking);
    if (ok) {
      showToast('Booking pass copied to clipboard!');
    } else {
      showToast('Could not copy pass to clipboard.', 'error');
    }
  };

  const handleSharePass = async (booking: TableBooking) => {
    const ok = await shareBookingPassViaWebShare(booking);
    if (!ok) {
      // Fallback to WhatsApp
      const urls = getBookingNotificationUrls(booking);
      window.open(urls.whatsappUrl, '_blank');
    }
  };

  const handleDownloadPass = (booking: TableBooking) => {
    downloadBookingPassFile(booking);
    showToast('Booking ticket downloaded!');
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-ink-900/60 p-4 backdrop-blur-xs animate-in fade-in overflow-y-auto"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative my-8 w-full max-w-lg rounded-3xl border border-cream-300 bg-white p-6 sm:p-8 shadow-2xl">
        <button
          type="button"
          onClick={handleReset}
          className="absolute right-5 top-5 rounded-full p-2 text-ink-500 hover:bg-cream-100 hover:text-ink-900"
          aria-label="Close booking modal"
        >
          <X size={20} />
        </button>

        {confirmedBooking ? (
          /* CONFIRMED BOOKING SCREEN WITH LIVE MULTI-CHANNEL DISPATCH */
          <div className="text-center py-2 animate-in zoom-in-95">
            <div className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-amber-100 text-amber-700 shadow-xs mb-3">
              <CheckCircle2 size={32} />
            </div>

            <span className="rounded-full bg-accent-100 px-3 py-1 text-xs font-bold text-accent-800">
              Reservation Confirmed
            </span>

            <h2 id="booking-modal-title" className="mt-2 text-2xl font-extrabold text-ink-900">
              Table Reserved at {confirmedBooking.restaurantName}
            </h2>
            <p className="mt-1 text-xs text-ink-600">
              Booking Ref: <strong className="text-accent-800 font-mono text-sm">{confirmedBooking.id}</strong> • Code: <strong className="text-ink-900 font-mono text-sm">{confirmedBooking.confirmationCode}</strong>
            </p>

            {/* Voucher Details Card */}
            <div className="my-5 rounded-2xl border border-cream-200 bg-cream-50/70 p-4 text-left space-y-2 text-xs">
              <div className="flex items-center justify-between border-b border-cream-200 pb-2">
                <span className="text-ink-500">Guest Name:</span>
                <span className="font-bold text-ink-900">{confirmedBooking.guestName}</span>
              </div>
              <div className="flex items-center justify-between border-b border-cream-200 pb-2">
                <span className="text-ink-500">Date & Time:</span>
                <span className="font-bold text-ink-900">
                  {confirmedBooking.date} at {confirmedBooking.time}
                </span>
              </div>
              <div className="flex items-center justify-between border-b border-cream-200 pb-2">
                <span className="text-ink-500">Party Size:</span>
                <span className="font-bold text-ink-900">{confirmedBooking.guests} People</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-ink-500">Seating Preference:</span>
                <span className="font-bold text-ink-900">{confirmedBooking.seatingArea}</span>
              </div>
            </div>

            {/* Live Interactive Notification Dispatch Channels */}
            {(() => {
              const urls = getBookingNotificationUrls(confirmedBooking);
              return (
                <div className="space-y-3 text-left mb-6">
                  <div className="flex items-center justify-between px-1">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-ink-700">
                      Deliver Booking Pass & Voucher:
                    </span>
                    <span className="text-[10px] font-semibold text-accent-700">1-Click Dispatch</span>
                  </div>

                  {/* WhatsApp Channel */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 rounded-2xl border border-cream-300 bg-cream-50/80 p-3 text-xs">
                    <div className="flex items-start gap-2.5">
                      <div className="flex size-8 shrink-0 items-center justify-center rounded-xl bg-emerald-600 text-white font-bold">
                        <MessageSquare size={16} />
                      </div>
                      <div>
                        <div className="font-bold text-ink-900">WhatsApp Notification</div>
                        <p className="text-[11px] text-ink-600">Send pass to <strong>{confirmedBooking.mobile}</strong></p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <a
                        href={urls.whatsappUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-emerald-600 px-3.5 py-2 text-xs font-bold text-white shadow-xs hover:bg-emerald-700 transition"
                      >
                        <Send size={13} />
                        <span>Send WhatsApp</span>
                      </a>
                      <a
                        href={urls.supportWhatsappUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center gap-1 rounded-xl border border-emerald-600 bg-emerald-50 px-2.5 py-2 text-xs font-bold text-emerald-800 shadow-2xs hover:bg-emerald-100 transition"
                        title="Send booking pass to Vyora Helpline +91 8382999557"
                      >
                        <span>Helpline</span>
                      </a>
                    </div>
                  </div>

                  {/* SMS Channel */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 rounded-2xl border border-cream-300 bg-cream-50/80 p-3 text-xs">
                    <div className="flex items-start gap-2.5">
                      <div className="flex size-8 shrink-0 items-center justify-center rounded-xl bg-accent-600 text-white font-bold">
                        <Phone size={16} />
                      </div>
                      <div>
                        <div className="font-bold text-ink-900">Mobile SMS Pass</div>
                        <p className="text-[11px] text-ink-600">Open in phone Messages app</p>
                      </div>
                    </div>
                    <a
                      href={urls.smsUrl}
                      className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-accent-600 px-3.5 py-2 text-xs font-bold text-white shadow-xs hover:bg-accent-700 transition"
                    >
                      <MessageSquare size={13} />
                      <span>Open SMS App</span>
                    </a>
                  </div>

                  {/* Email Channel */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 rounded-2xl border border-cream-300 bg-cream-50/80 p-3 text-xs">
                    <div className="flex items-start gap-2.5">
                      <div className="flex size-8 shrink-0 items-center justify-center rounded-xl bg-ink-900 text-white font-bold">
                        <Mail size={16} />
                      </div>
                      <div>
                        <div className="font-bold text-ink-900">Email Voucher Pass</div>
                        <p className="text-[11px] text-ink-600">Deliver voucher to <strong>{confirmedBooking.email}</strong></p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <a
                        href={urls.gmailUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center gap-1 rounded-xl bg-ink-900 px-3 py-2 text-xs font-bold text-white shadow-xs hover:bg-ink-800 transition"
                        title="Open voucher in Gmail"
                      >
                        <Mail size={13} />
                        <span>Gmail</span>
                      </a>
                      <a
                        href={urls.mailtoUrl}
                        className="inline-flex items-center justify-center gap-1 rounded-xl border border-cream-300 bg-white px-3 py-2 text-xs font-bold text-ink-800 hover:bg-cream-100 transition"
                        title="Open in default mail client"
                      >
                        <ExternalLink size={13} />
                        <span>Mail App</span>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })()}

            {/* Quick Utility Actions: Copy & Download */}
            <div className="mb-6 grid grid-cols-2 sm:grid-cols-3 gap-2">
              <button
                type="button"
                onClick={() => handleCopyPass(confirmedBooking)}
                className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-cream-300 bg-white py-2 text-xs font-bold text-ink-800 hover:bg-cream-100 transition cursor-pointer"
              >
                <Copy size={13} />
                <span>Copy Ticket</span>
              </button>
              <button
                type="button"
                onClick={() => handleDownloadPass(confirmedBooking)}
                className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-cream-300 bg-white py-2 text-xs font-bold text-ink-800 hover:bg-cream-100 transition cursor-pointer"
              >
                <Download size={13} />
                <span>Save Pass</span>
              </button>
              <button
                type="button"
                onClick={() => handleSharePass(confirmedBooking)}
                className="col-span-2 sm:col-span-1 inline-flex items-center justify-center gap-1.5 rounded-xl border border-cream-300 bg-white py-2 text-xs font-bold text-ink-800 hover:bg-cream-100 transition cursor-pointer"
              >
                <Share2 size={13} />
                <span>Share Any App</span>
              </button>
            </div>

            {/* Done Action */}
            <button
              type="button"
              onClick={handleReset}
              className="w-full rounded-2xl bg-ink-900 py-3.5 text-xs font-bold text-white hover:bg-ink-800 transition cursor-pointer shadow-md"
            >
              Done & Return to Restaurant
            </button>
          </div>
        ) : (
          /* RESERVATION FORM */
          <div>
            <div className="mb-5 flex items-center gap-3">
              <div className="flex size-11 items-center justify-center rounded-2xl bg-accent-100 text-accent-700 shadow-2xs">
                <Calendar size={22} />
              </div>
              <div>
                <h2 id="booking-modal-title" className="text-xl font-bold text-ink-900">
                  Book a Table
                </h2>
                <p className="text-xs text-ink-500">at {restaurant.name} • {restaurant.area}</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Guests Count */}
              <div>
                <label className="block text-xs font-bold text-ink-800 mb-1.5">
                  <Users size={14} className="inline mr-1 text-accent-700" />
                  Number of Guests
                </label>
                <div className="flex flex-wrap gap-1.5">
                  {GUEST_OPTIONS.map((num) => (
                    <button
                      key={num}
                      type="button"
                      onClick={() => setGuests(num)}
                      className={`rounded-xl px-3 py-1.5 text-xs font-bold transition cursor-pointer ${
                        guests === num
                          ? 'bg-accent-600 text-white shadow-xs'
                          : 'bg-cream-100 text-ink-700 hover:bg-cream-200'
                      }`}
                    >
                      {num} {num === 1 ? 'Guest' : 'Guests'}
                    </button>
                  ))}
                </div>
              </div>

              {/* Date & Time Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-ink-800 mb-1" htmlFor="book-date">
                    <Calendar size={14} className="inline mr-1 text-accent-700" />
                    Reservation Date
                  </label>
                  <input
                    id="book-date"
                    type="date"
                    required
                    value={date}
                    min={TODAY_DATE_STR}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full rounded-xl border border-cream-300 bg-white px-3 py-2 text-xs font-semibold text-ink-900 outline-none focus:border-accent-600 focus:ring-1 focus:ring-accent-200"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-ink-800 mb-1" htmlFor="book-time">
                    <Clock size={14} className="inline mr-1 text-accent-700" />
                    Time Slot
                  </label>
                  <select
                    id="book-time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="w-full rounded-xl border border-cream-300 bg-white px-3 py-2 text-xs font-semibold text-ink-900 outline-none focus:border-accent-600 cursor-pointer"
                  >
                    {TIME_SLOTS.map((slot) => (
                      <option key={slot} value={slot}>
                        {slot}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Seating Area Preference */}
              <div>
                <label className="block text-xs font-bold text-ink-800 mb-1.5">
                  <Armchair size={14} className="inline mr-1 text-accent-700" />
                  Seating Preference
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {SEATING_AREAS.map((area) => (
                    <button
                      key={area}
                      type="button"
                      onClick={() => setSeatingArea(area)}
                      className={`rounded-xl border p-2 text-left text-xs font-semibold transition cursor-pointer ${
                        seatingArea === area
                          ? 'border-accent-600 bg-accent-50/80 text-accent-950 font-bold'
                          : 'border-cream-200 bg-white text-ink-700 hover:border-cream-300'
                      }`}
                    >
                      {area}
                    </button>
                  ))}
                </div>
              </div>

              {/* Contact Information */}
              <div className="rounded-2xl border border-cream-200 bg-cream-50/60 p-3.5 space-y-3">
                <p className="text-[11px] font-bold text-ink-800 uppercase tracking-wider">
                  Contact Details (For Instant SMS & Email Pass)
                </p>

                <div>
                  <label className="block text-[11px] font-bold text-ink-700 mb-0.5" htmlFor="guest-name">
                    Full Name
                  </label>
                  <input
                    id="guest-name"
                    type="text"
                    required
                    value={guestName}
                    onChange={(e) => setGuestName(e.target.value)}
                    placeholder="e.g. Amit Srivastav"
                    className="w-full rounded-xl border border-cream-300 bg-white px-3 py-1.5 text-xs text-ink-900 outline-none focus:border-accent-600"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <div>
                    <label className="block text-[11px] font-bold text-ink-700 mb-0.5" htmlFor="guest-phone">
                      <Phone size={11} className="inline mr-0.5 text-ink-400" />
                      Mobile Number (SMS notification)
                    </label>
                    <div className="flex">
                      <span className="inline-flex items-center rounded-l-xl border border-r-0 border-cream-300 bg-cream-100 px-2.5 text-xs font-bold text-ink-700">
                        +91
                      </span>
                      <input
                        id="guest-phone"
                        type="tel"
                        required
                        value={mobile}
                        onChange={(e) => setMobile(e.target.value)}
                        placeholder="98380 12345"
                        maxLength={10}
                        className="w-full rounded-r-xl border border-cream-300 bg-white px-3 py-1.5 text-xs text-ink-900 outline-none focus:border-accent-600"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-ink-700 mb-0.5" htmlFor="guest-email">
                      <Mail size={11} className="inline mr-0.5 text-ink-400" />
                      Email Address (Voucher)
                    </label>
                    <input
                      id="guest-email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@gmail.com"
                      className="w-full rounded-xl border border-cream-300 bg-white px-3 py-1.5 text-xs text-ink-900 outline-none focus:border-accent-600"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-ink-700 mb-0.5" htmlFor="guest-notes">
                    Special Requests (Optional)
                  </label>
                  <input
                    id="guest-notes"
                    type="text"
                    value={specialRequests}
                    onChange={(e) => setSpecialRequests(e.target.value)}
                    placeholder="e.g. Birthday decoration, high chair, window view..."
                    className="w-full rounded-xl border border-cream-300 bg-white px-3 py-1.5 text-xs text-ink-900 outline-none focus:border-accent-600"
                  />
                </div>
              </div>

              {error ? <p className="text-xs font-semibold text-red-600">{error}</p> : null}

              <button
                type="submit"
                disabled={isSubmitting}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-accent-600 py-3 text-sm font-bold text-white shadow-md transition hover:bg-accent-700 active:scale-[0.99] disabled:opacity-60 cursor-pointer"
              >
                <Sparkles size={16} />
                <span>{isSubmitting ? 'Confirming Reservation...' : 'Confirm Table Reservation (Instant Free Booking)'}</span>
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
