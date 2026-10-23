import { Lock, QrCode, UserCheck, ArrowLeft, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/Badge';
import { Container } from '@/components/ui/Container';
import { usePageTitle } from '@/hooks/usePageTitle';
import { ROUTES } from '@/lib/routes';

export default function PrivacyPage() {
  usePageTitle('Privacy Policy');

  return (
    <div className="py-10 sm:py-16">
      <Container>
        {/* Back Link */}
        <Link
          to={ROUTES.home}
          className="inline-flex min-h-11 items-center gap-2 rounded-full text-sm font-semibold text-ink-800 transition-colors hover:text-accent-700"
        >
          <ArrowLeft size={18} />
          Back to home
        </Link>

        {/* Hero */}
        <div className="mt-6 mx-auto max-w-4xl">
          <Badge tone="accent">Legal & Trust</Badge>
          <h1 className="mt-3 text-3xl font-extrabold text-ink-900 sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-4 text-base text-ink-600 sm:text-lg leading-relaxed">
            Effective Date: October 2026. This Privacy Policy details how Gorakhpur Food Guide ("we", "our", or "RateIt") collects, uses, and safeguards information when you explore restaurants, post dining reviews, or manage a restaurant partner dashboard.
          </p>

          {/* Key Principles Banner */}
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-forest-200 bg-forest-50/60 p-4">
              <div className="flex items-center gap-2 text-forest-700 font-bold text-sm">
                <Lock size={18} />
                <span>Zero Data Selling</span>
              </div>
              <p className="mt-1 text-xs text-forest-900/80 leading-relaxed">
                We never monetize or sell personal dining information to external data brokers or advertisers.
              </p>
            </div>

            <div className="rounded-2xl border border-accent-200 bg-accent-50/60 p-4">
              <div className="flex items-center gap-2 text-accent-700 font-bold text-sm">
                <QrCode size={18} />
                <span>Private QR Scans</span>
              </div>
              <p className="mt-1 text-xs text-accent-900/80 leading-relaxed">
                Table QR scans do not require GPS tracking or app downloads to view digital menus and submit reviews.
              </p>
            </div>

            <div className="rounded-2xl border border-blue-200 bg-blue-50/60 p-4">
              <div className="flex items-center gap-2 text-blue-700 font-bold text-sm">
                <UserCheck size={18} />
                <span>Diner Control</span>
              </div>
              <p className="mt-1 text-xs text-blue-900/80 leading-relaxed">
                You can review, modify, or delete your dining reviews and ratings at any time from "My Reviews".
              </p>
            </div>
          </div>

          {/* Structured Policy Content */}
          <div className="mt-12 space-y-10 rounded-3xl border border-cream-300 bg-white p-6 sm:p-12 shadow-sm text-ink-700">
            {/* Section 1 */}
            <section className="space-y-3">
              <div className="flex items-center gap-2.5 text-ink-900">
                <span className="flex size-8 items-center justify-center rounded-xl bg-forest-100 text-xs font-bold text-forest-800">
                  1
                </span>
                <h2 className="text-xl font-bold">Information We Collect</h2>
              </div>
              <p className="text-sm leading-relaxed">
                We collect information directly provided by users and automatically through interactions with the Gorakhpur Food Guide service:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-sm leading-relaxed">
                <li>
                  <strong className="text-ink-900">Diner Profile & Reviews:</strong> Name or nickname, optional email address, dish ratings, dining text reviews, visit dates, and tag selections (e.g., taste, cleanliness, service speed).
                </li>
                <li>
                  <strong className="text-ink-900">Restaurant Partner Information:</strong> Establishment name, owner/manager name, business email, contact phone number, physical address in Gorakhpur, operating hours, and menu data.
                </li>
                <li>
                  <strong className="text-ink-900">Device & Usage Metrics:</strong> Browser type, screen dimensions, anonymous diagnostic logs, and search queries (e.g., searches for "momos", "chaat", "pure veg").
                </li>
              </ul>
            </section>

            {/* Section 2 */}
            <section className="space-y-3">
              <div className="flex items-center gap-2.5 text-ink-900">
                <span className="flex size-8 items-center justify-center rounded-xl bg-forest-100 text-xs font-bold text-forest-800">
                  2
                </span>
                <h2 className="text-xl font-bold">How We Use Your Information</h2>
              </div>
              <p className="text-sm leading-relaxed">
                Your data is exclusively utilized to deliver and enhance the local dining discovery experience:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-sm leading-relaxed">
                <li>To showcase verified reviews and calculate fair, transparent average star ratings.</li>
                <li>To enable table QR code standee feedback loops between diners and kitchen managers.</li>
                <li>To power AI sentiment synthesis that summarizes common food, ambience, and service strengths for restaurant owners.</li>
                <li>To moderate abuse, suppress bot-generated spam, and maintain community safety.</li>
              </ul>
            </section>

            {/* Section 3 */}
            <section className="space-y-3">
              <div className="flex items-center gap-2.5 text-ink-900">
                <span className="flex size-8 items-center justify-center rounded-xl bg-forest-100 text-xs font-bold text-forest-800">
                  3
                </span>
                <h2 className="text-xl font-bold">Table QR Code Review Experience</h2>
              </div>
              <p className="text-sm leading-relaxed">
                When you scan an official RateIt table standee QR code, your smartphone browser opens the restaurant review page directly. We do not require you to grant precise GPS location permissions or install third-party native software. Scan timestamps are recorded anonymously to compute aggregate monthly guest engagement for the eatery.
              </p>
            </section>

            {/* Section 4 */}
            <section className="space-y-3">
              <div className="flex items-center gap-2.5 text-ink-900">
                <span className="flex size-8 items-center justify-center rounded-xl bg-forest-100 text-xs font-bold text-forest-800">
                  4
                </span>
                <h2 className="text-xl font-bold">Local Storage & Cookies</h2>
              </div>
              <p className="text-sm leading-relaxed">
                We use browser <code className="rounded bg-cream-100 px-1.5 py-0.5 text-xs text-ink-900">localStorage</code> to remember your active search filters, keep you signed into your diner or owner session, and store reviews created during your current session. You can clear this stored data at any time via your browser settings or using the Reset button in your account settings.
              </p>
            </section>

            {/* Section 5 */}
            <section className="space-y-3">
              <div className="flex items-center gap-2.5 text-ink-900">
                <span className="flex size-8 items-center justify-center rounded-xl bg-forest-100 text-xs font-bold text-forest-800">
                  5
                </span>
                <h2 className="text-xl font-bold">Data Sharing & Disclosure</h2>
              </div>
              <p className="text-sm leading-relaxed">
                We believe in complete transparency. We do not sell your personal data. We only share information in the following limited situations:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-sm leading-relaxed">
                <li>
                  <strong className="text-ink-900">Public Reviews:</strong> Any review text, rating, and display name you submit is published publicly to assist fellow food lovers.
                </li>
                <li>
                  <strong className="text-ink-900">Owner Feedback:</strong> Restaurant owners receive review scores and feedback tags so they can respond officially and improve customer service.
                </li>
                <li>
                  <strong className="text-ink-900">Legal Compliance:</strong> If required by Indian law, law enforcement, or valid regulatory process in Gorakhpur jurisdiction.
                </li>
              </ul>
            </section>

            {/* Section 6 */}
            <section className="space-y-3">
              <div className="flex items-center gap-2.5 text-ink-900">
                <span className="flex size-8 items-center justify-center rounded-xl bg-forest-100 text-xs font-bold text-forest-800">
                  6
                </span>
                <h2 className="text-xl font-bold">Your Rights & Choices</h2>
              </div>
              <p className="text-sm leading-relaxed">
                As a valued member of the Gorakhpur dining community, you retain full rights over your data:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-sm leading-relaxed">
                <li>Edit or permanently delete your customer reviews through the <Link to={ROUTES.myReviews} className="text-forest-700 font-semibold hover:underline">My Reviews</Link> dashboard.</li>
                <li>Request removal of personal data by contacting our support inbox.</li>
                <li>Opt out of owner review notifications and weekly email digests.</li>
              </ul>
            </section>

            {/* Section 7 */}
            <section className="space-y-3">
              <div className="flex items-center gap-2.5 text-ink-900">
                <span className="flex size-8 items-center justify-center rounded-xl bg-forest-100 text-xs font-bold text-forest-800">
                  7
                </span>
                <h2 className="text-xl font-bold">Contact Our Privacy Team</h2>
              </div>
              <p className="text-sm leading-relaxed">
                If you have questions or concerns regarding this Privacy Policy or data handling practices in Gorakhpur, please contact us:
              </p>
              <div className="mt-3 rounded-2xl bg-cream-50 p-4 text-xs sm:text-sm space-y-1 border border-cream-200">
                <p><strong className="text-ink-900">Data Protection Officer:</strong> Gorakhpur Food Guide Team</p>
                <p><strong className="text-ink-900">Email:</strong> <a href="mailto:privacy@gorakhpurfoodguide.in" className="text-forest-700 hover:underline">privacy@gorakhpurfoodguide.in</a></p>
                <p><strong className="text-ink-900">Office:</strong> Civil Lines, Gorakhpur, Uttar Pradesh 273001</p>
              </div>
            </section>
          </div>

          {/* Footer Navigation */}
          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-cream-300 pt-6">
            <Link
              to={ROUTES.terms}
              className="inline-flex items-center gap-1.5 text-sm font-bold text-forest-700 hover:text-forest-800"
            >
              Read Terms of Use
              <ArrowUpRight size={16} />
            </Link>
            <Link
              to={ROUTES.contact}
              className="inline-flex items-center gap-1.5 text-sm font-bold text-accent-700 hover:text-accent-800"
            >
              Contact Support Team
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
