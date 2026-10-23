import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  Building,
  Sparkles,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  MessageSquare,
  ArrowRight,
} from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/Badge';
import { Container } from '@/components/ui/Container';
import { usePageTitle } from '@/hooks/usePageTitle';
import { ROUTES } from '@/lib/routes';
import { showToast } from '@/lib/toast';
import { firestoreService } from '@/services/firestoreService';

interface FaqItem {
  q: string;
  a: string;
}

const FAQS: FaqItem[] = [
  {
    q: 'How do restaurant owners get a table QR standee?',
    a: 'Restaurant owners can register their establishment on our platform via the "Register Your Restaurant" page. Once enrolled, you can instantly download or print high-resolution QR standees and tent cards from your Owner Dashboard.',
  },
  {
    q: 'Can I suggest or add an unlisted local food stall or cafe?',
    a: 'Yes! We love spotlighting authentic street eats, hidden gems, and iconic sweet shops across Gorakhpur. Use the contact form below with the category "Suggest a New Spot" and share the stall name, location, and specialty dish.',
  },
  {
    q: 'How are customer reviews and ratings verified?',
    a: 'RateIt utilizes table QR code technology so guests scan directly while dining at the table or paying at the counter. Our system also leverages AI sentiment scoring and human moderation to eliminate spam and paid reviews.',
  },
  {
    q: 'Is there any fee for diners or restaurants to use the platform?',
    a: 'Gorakhpur Food Guide is 100% free for all diners. Basic restaurant discovery profiles and QR code generator access are also complimentary for local restaurant partners.',
  },
];

export default function ContactPage() {
  usePageTitle('Contact Us');

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [category, setCategory] = useState('Restaurant Partnership');
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      showToast('Please fill in your name, email, and message.', 'error');
      return;
    }

    setSubmitting(true);
    firestoreService
      .saveInquiry({
        name: name.trim(),
        email: email.trim(),
        phone: phone.trim() || undefined,
        category,
        message: message.trim(),
      })
      .catch((err) => {
        console.warn('[Contact] Firestore save warning:', err);
      })
      .finally(() => {
        setSubmitting(false);
        setSubmitted(true);
        showToast('Thank you! Your message has been sent to our Gorakhpur team.');
      });
  };

  const handleReset = () => {
    setName('');
    setEmail('');
    setPhone('');
    setCategory('Restaurant Partnership');
    setMessage('');
    setSubmitted(false);
  };

  return (
    <div className="py-10 sm:py-16">
      <Container>
        {/* Header Section */}
        <div className="mx-auto max-w-3xl text-center">
          <Badge tone="accent">Get in Touch</Badge>
          <h1 className="mt-4 text-3xl font-extrabold text-ink-900 sm:text-5xl">
            Contact Gorakhpur Food Guide
          </h1>
          <p className="mt-4 text-base text-ink-600 sm:text-lg">
            Have a question, feedback, or want to list your restaurant? Our local team in Gorakhpur is here to assist you.
          </p>
        </div>

        {/* 3 Contact Info Cards */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-3xl border border-cream-300 bg-white p-6 shadow-xs transition hover:shadow-md">
            <div className="flex size-12 items-center justify-center rounded-2xl bg-forest-100 text-forest-700">
              <MapPin size={24} />
            </div>
            <h3 className="mt-4 text-lg font-bold text-ink-900">Gorakhpur Office</h3>
            <p className="mt-1 text-xs text-ink-500">Visit our local partner hub</p>
            <p className="mt-3 text-sm font-medium text-ink-800 leading-relaxed">
              Park Road, Civil Lines,
              <br />
              Gorakhpur, Uttar Pradesh 273001
            </p>
            <div className="mt-4 flex items-center gap-1.5 text-xs text-forest-700 font-semibold">
              <Clock size={14} />
              <span>Mon – Sat: 9:00 AM – 8:00 PM</span>
            </div>
          </div>

          <div className="rounded-3xl border border-cream-300 bg-white p-6 shadow-xs transition hover:shadow-md">
            <div className="flex size-12 items-center justify-center rounded-2xl bg-accent-100 text-accent-700">
              <Phone size={24} />
            </div>
            <h3 className="mt-4 text-lg font-bold text-ink-900">Call & WhatsApp</h3>
            <p className="mt-1 text-xs text-ink-500">Immediate telephone assistance</p>
            <div className="mt-3 space-y-1.5 text-sm">
              <p className="font-semibold text-ink-800">
                Helpline: <a href="tel:+919838091234" className="text-accent-700 hover:underline">+91 98380 91234</a>
              </p>
              <p className="font-semibold text-ink-800">
                WhatsApp: <a href="https://wa.me/919838091235" target="_blank" rel="noreferrer" className="text-forest-700 hover:underline">+91 98380 91235</a>
              </p>
            </div>
            <p className="mt-4 text-xs text-ink-500">Fast responses during active business hours</p>
          </div>

          <div className="rounded-3xl border border-cream-300 bg-white p-6 shadow-xs transition hover:shadow-md sm:col-span-2 lg:col-span-1">
            <div className="flex size-12 items-center justify-center rounded-2xl bg-blue-100 text-blue-700">
              <Mail size={24} />
            </div>
            <h3 className="mt-4 text-lg font-bold text-ink-900">Email Inboxes</h3>
            <p className="mt-1 text-xs text-ink-500">Direct digital inquiries</p>
            <div className="mt-3 space-y-1.5 text-sm">
              <p className="text-ink-800">
                General:{' '}
                <a href="mailto:support@gorakhpurfoodguide.in" className="font-semibold text-accent-700 hover:underline">
                  support@gorakhpurfoodguide.in
                </a>
              </p>
              <p className="text-ink-800">
                Partners:{' '}
                <a href="mailto:partners@gorakhpurfoodguide.in" className="font-semibold text-forest-700 hover:underline">
                  partners@gorakhpurfoodguide.in
                </a>
              </p>
            </div>
            <p className="mt-4 text-xs text-ink-500">We respond to all tickets within 24 hours</p>
          </div>
        </div>

        {/* Form and Side Info Grid */}
        <div className="mt-12 grid gap-10 lg:grid-cols-12">
          {/* Main Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-cream-300 bg-white p-6 sm:p-10 shadow-sm">
              <div className="mb-6 flex items-center justify-between border-b border-cream-200 pb-4">
                <div>
                  <h2 className="text-xl font-bold text-ink-900 sm:text-2xl">Send Us a Message</h2>
                  <p className="mt-1 text-xs text-ink-500 sm:text-sm">
                    Fill out the form below and our local community coordinator will reach out.
                  </p>
                </div>
                <div className="hidden sm:flex size-10 items-center justify-center rounded-xl bg-forest-50 text-forest-700">
                  <MessageSquare size={20} />
                </div>
              </div>

              {submitted ? (
                <div className="py-10 text-center">
                  <div className="mx-auto flex size-16 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600">
                    <CheckCircle2 size={36} />
                  </div>
                  <h3 className="mt-4 text-2xl font-bold text-ink-900">Message Delivered!</h3>
                  <p className="mt-2 text-sm text-ink-600 max-w-md mx-auto">
                    Thank you for contacting Gorakhpur Food Guide. Our team has received your inquiry and will follow up with you shortly at <span className="font-semibold text-ink-800">{email}</span>.
                  </p>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="mt-6 inline-flex items-center gap-2 rounded-full bg-forest-600 px-6 py-2.5 text-sm font-bold text-white shadow-sm hover:bg-forest-700 transition"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="contact-name" className="mb-1 block text-xs font-bold text-ink-800">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Priyanshu Sharma"
                        className="w-full rounded-xl border border-cream-300 px-3.5 py-2.5 text-sm text-ink-900 outline-none focus:border-forest-600 focus:ring-2 focus:ring-forest-100"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-email" className="mb-1 block text-xs font-bold text-ink-800">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@domain.com"
                        className="w-full rounded-xl border border-cream-300 px-3.5 py-2.5 text-sm text-ink-900 outline-none focus:border-forest-600 focus:ring-2 focus:ring-forest-100"
                      />
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="contact-phone" className="mb-1 block text-xs font-bold text-ink-800">
                        Phone Number (Optional)
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+91 98380 00000"
                        className="w-full rounded-xl border border-cream-300 px-3.5 py-2.5 text-sm text-ink-900 outline-none focus:border-forest-600 focus:ring-2 focus:ring-forest-100"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-category" className="mb-1 block text-xs font-bold text-ink-800">
                        Inquiry Topic <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="contact-category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="w-full rounded-xl border border-cream-300 bg-white px-3.5 py-2.5 text-sm text-ink-900 outline-none focus:border-forest-600 focus:ring-2 focus:ring-forest-100"
                      >
                        <option>Restaurant Partnership</option>
                        <option>Table QR Standee Support</option>
                        <option>Suggest a New Spot</option>
                        <option>Report Incorrect Info / Correction</option>
                        <option>General Feedback / Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-msg" className="mb-1 block text-xs font-bold text-ink-800">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="contact-msg"
                      rows={5}
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tell us what you'd like to share or ask..."
                      className="w-full rounded-xl border border-cream-300 px-3.5 py-2.5 text-sm text-ink-900 outline-none focus:border-forest-600 focus:ring-2 focus:ring-forest-100"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-forest-600 py-3 text-sm font-bold text-white shadow-md transition hover:bg-forest-700 disabled:opacity-75"
                  >
                    {submitting ? (
                      'Sending Message...'
                    ) : (
                      <>
                        <Send size={16} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Side Info & Quick Links (5 cols) */}
          <div className="space-y-6 lg:col-span-5">
            {/* Owner Callout */}
            <div className="rounded-3xl border border-forest-200 bg-gradient-to-br from-forest-50 via-cream-50 to-white p-6 shadow-sm">
              <div className="flex items-center gap-2 text-forest-700">
                <Building size={20} />
                <span className="text-xs font-bold uppercase tracking-wider">Restaurant Owners</span>
              </div>
              <h3 className="mt-2 text-lg font-bold text-ink-900">
                Looking to Claim or Add Your Listing?
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-ink-600 sm:text-sm">
                Get discovered by thousands of diners across Gorakhpur and print official RateIt table standees for customer reviews.
              </p>
              <div className="mt-4 flex flex-wrap gap-2.5">
                <Link
                  to={ROUTES.ownerRegister}
                  className="inline-flex items-center gap-1.5 rounded-full bg-forest-600 px-4 py-2 text-xs font-bold text-white shadow-xs hover:bg-forest-700"
                >
                  <Sparkles size={14} />
                  Register Restaurant
                </Link>
                <Link
                  to={ROUTES.ownerLogin}
                  className="inline-flex items-center gap-1.5 rounded-full border border-forest-300 bg-white px-4 py-2 text-xs font-bold text-forest-800 hover:bg-forest-50"
                >
                  Owner Login
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* Gorakhpur Coverage Highlight */}
            <div className="rounded-3xl border border-cream-300 bg-white p-6 shadow-sm">
              <h3 className="text-sm font-bold uppercase tracking-wider text-accent-700">
                Local Coverage Areas
              </h3>
              <p className="mt-1 text-xs text-ink-500">Active restaurant directories across Gorakhpur</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {[
                  'Golghar',
                  'Civil Lines',
                  'Betiahata',
                  'Medical College Road',
                  'Asuran Chowk',
                  'Taramandal',
                  'Mohaddipur',
                  'Ramgarh Taal Waterfront',
                ].map((area) => (
                  <span
                    key={area}
                    className="inline-flex items-center rounded-full bg-cream-100 border border-cream-200 px-3 py-1 text-xs font-semibold text-ink-800"
                  >
                    📍 {area}
                  </span>
                ))}
              </div>
            </div>

            {/* Quick Community Stats */}
            <div className="rounded-3xl border border-cream-300 bg-white p-6 shadow-sm">
              <h3 className="text-sm font-bold text-ink-900">Community Support Guarantee</h3>
              <ul className="mt-3 space-y-2.5 text-xs text-ink-600">
                <li className="flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-forest-600"></span>
                  <span>Direct response within 24 business hours</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-forest-600"></span>
                  <span>Instant digital QR standee generation</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-forest-600"></span>
                  <span>Authentic, scam-free diner feedback pledge</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Frequently Asked Questions */}
        <div className="mt-16 rounded-3xl border border-cream-300 bg-cream-50/70 p-6 sm:p-12">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mx-auto flex size-12 items-center justify-center rounded-2xl bg-forest-100 text-forest-700">
              <HelpCircle size={24} />
            </div>
            <h2 className="mt-3 text-2xl font-bold text-ink-900 sm:text-3xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-2 text-xs text-ink-600 sm:text-sm">
              Quick answers about Gorakhpur Food Guide and table QR reviews.
            </p>
          </div>

          <div className="mx-auto mt-8 max-w-3xl space-y-3">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={faq.q}
                  className="rounded-2xl border border-cream-300 bg-white shadow-2xs overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="flex w-full items-center justify-between p-4 sm:p-5 text-left text-sm sm:text-base font-bold text-ink-900 hover:bg-cream-50 transition"
                  >
                    <span>{faq.q}</span>
                    {isOpen ? <ChevronUp size={18} className="text-forest-700 shrink-0" /> : <ChevronDown size={18} className="text-ink-400 shrink-0" />}
                  </button>
                  {isOpen ? (
                    <div className="border-t border-cream-200 px-4 pb-4 sm:px-5 sm:pb-5 pt-3 text-xs sm:text-sm leading-relaxed text-ink-600">
                      {faq.a}
                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </div>
  );
}
