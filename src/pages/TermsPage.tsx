import { CheckCircle, AlertCircle, Scale, ArrowLeft, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/Badge';
import { Container } from '@/components/ui/Container';
import { usePageTitle } from '@/hooks/usePageTitle';
import { ROUTES } from '@/lib/routes';

export default function TermsPage() {
  usePageTitle('Terms of Use');

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
          <Badge tone="accent">Agreement</Badge>
          <h1 className="mt-3 text-3xl font-extrabold text-ink-900 sm:text-5xl">
            Terms of Use
          </h1>
          <p className="mt-4 text-base text-ink-600 sm:text-lg leading-relaxed">
            Effective Date: October 2026. Please read these Terms of Use carefully before accessing or using the Gorakhpur Food Guide and RateIt web platform. By browsing restaurant listings, posting reviews, or managing an eatery profile, you agree to be bound by these terms.
          </p>

          {/* Key Highlights */}
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-forest-200 bg-forest-50/60 p-4">
              <div className="flex items-center gap-2 text-forest-700 font-bold text-sm">
                <CheckCircle size={18} />
                <span>Authentic Reviews</span>
              </div>
              <p className="mt-1 text-xs text-forest-900/80 leading-relaxed">
                Reviews must reflect first-hand dining visits. Spam, paid reviews, and commercial extortion are prohibited.
              </p>
            </div>

            <div className="rounded-2xl border border-amber-200 bg-amber-50/60 p-4">
              <div className="flex items-center gap-2 text-amber-700 font-bold text-sm">
                <AlertCircle size={18} />
                <span>Food Safety</span>
              </div>
              <p className="mt-1 text-xs text-amber-900/80 leading-relaxed">
                Eateries are independently operated and strictly responsible for FSSAI hygiene standards and food quality.
              </p>
            </div>

            <div className="rounded-2xl border border-blue-200 bg-blue-50/60 p-4">
              <div className="flex items-center gap-2 text-blue-700 font-bold text-sm">
                <Scale size={18} />
                <span>Local Governance</span>
              </div>
              <p className="mt-1 text-xs text-blue-900/80 leading-relaxed">
                Governed under the laws of India with exclusive legal jurisdiction in Gorakhpur, Uttar Pradesh.
              </p>
            </div>
          </div>

          {/* Structured Policy Content */}
          <div className="mt-12 space-y-10 rounded-3xl border border-cream-300 bg-white p-6 sm:p-12 shadow-sm text-ink-700">
            {/* 1. Acceptance */}
            <section className="space-y-3">
              <div className="flex items-center gap-2.5 text-ink-900">
                <span className="flex size-8 items-center justify-center rounded-xl bg-forest-100 text-xs font-bold text-forest-800">
                  1
                </span>
                <h2 className="text-xl font-bold">Acceptance of Terms</h2>
              </div>
              <p className="text-sm leading-relaxed">
                By visiting, viewing, or interacting with Gorakhpur Food Guide ("Platform"), you acknowledge that you have read, understood, and agreed to these Terms of Use and our Privacy Policy. If you do not accept these terms, you should discontinue use of the platform immediately.
              </p>
            </section>

            {/* 2. Platform Description */}
            <section className="space-y-3">
              <div className="flex items-center gap-2.5 text-ink-900">
                <span className="flex size-8 items-center justify-center rounded-xl bg-forest-100 text-xs font-bold text-forest-800">
                  2
                </span>
                <h2 className="text-xl font-bold">Platform Purpose & Scope</h2>
              </div>
              <p className="text-sm leading-relaxed">
                Gorakhpur Food Guide operates as a local restaurant discovery directory and dining feedback system serving Gorakhpur, Uttar Pradesh. We provide search filters, dish information, table standee QR generation, and verified customer reviews. We do not operate culinary kitchens or offer third-party delivery dispatch services.
              </p>
            </section>

            {/* 3. Diner Reviews & Code of Conduct */}
            <section className="space-y-3">
              <div className="flex items-center gap-2.5 text-ink-900">
                <span className="flex size-8 items-center justify-center rounded-xl bg-forest-100 text-xs font-bold text-forest-800">
                  3
                </span>
                <h2 className="text-xl font-bold">Diner Reviews & Community Guidelines</h2>
              </div>
              <p className="text-sm leading-relaxed">
                Honesty and civility form the backbone of our foodie community. By submitting a dining rating or review, you represent and agree that:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-sm leading-relaxed">
                <li>Your review reflects an actual dining experience at the restaurant.</li>
                <li>You are not an owner, employee, or direct commercial competitor of the restaurant attempting to artificially alter ratings.</li>
                <li>Your feedback does not contain hate speech, profanity, harassment, or defamatory remarks.</li>
                <li>You grant Gorakhpur Food Guide a non-exclusive, royalty-free, worldwide license to display and format your review on the platform.</li>
              </ul>
            </section>

            {/* 4. Restaurant Partner Standards */}
            <section className="space-y-3">
              <div className="flex items-center gap-2.5 text-ink-900">
                <span className="flex size-8 items-center justify-center rounded-xl bg-forest-100 text-xs font-bold text-forest-800">
                  4
                </span>
                <h2 className="text-xl font-bold">Restaurant Partner Obligations</h2>
              </div>
              <p className="text-sm leading-relaxed">
                Restaurant owners and managers registering on Gorakhpur Food Guide agree to:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-sm leading-relaxed">
                <li>Provide accurate business details, including address, contact information, operating hours, and average cost for two.</li>
                <li>Display table QR standees accurately without misleading diners or enforcing biased review submissions.</li>
                <li>Respond politely and constructively through the official management reply feature in the Owner Dashboard.</li>
                <li>Comply with applicable local municipal and Food Safety and Standards Authority of India (FSSAI) guidelines.</li>
              </ul>
            </section>

            {/* 5. Intellectual Property */}
            <section className="space-y-3">
              <div className="flex items-center gap-2.5 text-ink-900">
                <span className="flex size-8 items-center justify-center rounded-xl bg-forest-100 text-xs font-bold text-forest-800">
                  5
                </span>
                <h2 className="text-xl font-bold">Intellectual Property Rights</h2>
              </div>
              <p className="text-sm leading-relaxed">
                The visual design, brand logos, custom QR generator algorithms, layout, and content across Gorakhpur Food Guide are the proprietary property of the platform. You may not scrape, reproduce, reverse engineer, or redistribute our code or database without explicit written authorization.
              </p>
            </section>

            {/* 6. Disclaimers & Food Safety */}
            <section className="space-y-3">
              <div className="flex items-center gap-2.5 text-ink-900">
                <span className="flex size-8 items-center justify-center rounded-xl bg-forest-100 text-xs font-bold text-forest-800">
                  6
                </span>
                <h2 className="text-xl font-bold">Disclaimer of Warranties & Food Safety</h2>
              </div>
              <p className="text-sm leading-relaxed">
                The platform is provided on an "as is" and "as available" basis. While we strive to ensure that restaurant listings and menu highlights are updated and accurate:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-sm leading-relaxed">
                <li>We do not guarantee the current availability of specific dishes, ingredients, or exact menu pricing.</li>
                <li>Restaurants are solely responsible for culinary hygiene, allergen disclosures (e.g., nuts, gluten, dairy), and food freshness.</li>
                <li>Diners are encouraged to verify vegetarian or dietary restrictions directly with restaurant staff before placing orders.</li>
              </ul>
            </section>

            {/* 7. Limitation of Liability */}
            <section className="space-y-3">
              <div className="flex items-center gap-2.5 text-ink-900">
                <span className="flex size-8 items-center justify-center rounded-xl bg-forest-100 text-xs font-bold text-forest-800">
                  7
                </span>
                <h2 className="text-xl font-bold">Limitation of Liability</h2>
              </div>
              <p className="text-sm leading-relaxed">
                To the fullest extent permissible by applicable law, Gorakhpur Food Guide and its contributors shall not be held liable for any direct, indirect, incidental, or consequential damages resulting from restaurant visits, food consumption, or reliance on customer reviews.
              </p>
            </section>

            {/* 8. Governing Law */}
            <section className="space-y-3">
              <div className="flex items-center gap-2.5 text-ink-900">
                <span className="flex size-8 items-center justify-center rounded-xl bg-forest-100 text-xs font-bold text-forest-800">
                  8
                </span>
                <h2 className="text-xl font-bold">Governing Law & Jurisdiction</h2>
              </div>
              <p className="text-sm leading-relaxed">
                These Terms of Use shall be governed by and interpreted in accordance with the laws of the Republic of India. Any legal dispute, arbitration, or proceeding arising under these terms shall be subject to the exclusive jurisdiction of the competent courts in Gorakhpur, Uttar Pradesh.
              </p>
            </section>

            {/* 9. Contact */}
            <section className="space-y-3">
              <div className="flex items-center gap-2.5 text-ink-900">
                <span className="flex size-8 items-center justify-center rounded-xl bg-forest-100 text-xs font-bold text-forest-800">
                  9
                </span>
                <h2 className="text-xl font-bold">Questions Regarding Terms</h2>
              </div>
              <p className="text-sm leading-relaxed">
                For questions, clarifications, or reporting violations of these Terms of Use, please reach out to our legal and support team:
              </p>
              <div className="mt-3 rounded-2xl bg-cream-50 p-4 text-xs sm:text-sm space-y-1 border border-cream-200">
                <p><strong className="text-ink-900">Legal Department:</strong> Gorakhpur Food Guide</p>
                <p><strong className="text-ink-900">Email:</strong> <a href="mailto:legal@gorakhpurfoodguide.in" className="text-forest-700 hover:underline">legal@gorakhpurfoodguide.in</a></p>
                <p><strong className="text-ink-900">Address:</strong> Civil Lines, Gorakhpur, Uttar Pradesh 273001</p>
              </div>
            </section>
          </div>

          {/* Footer Navigation */}
          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-cream-300 pt-6">
            <Link
              to={ROUTES.privacy}
              className="inline-flex items-center gap-1.5 text-sm font-bold text-forest-700 hover:text-forest-800"
            >
              Read Privacy Policy
              <ArrowUpRight size={16} />
            </Link>
            <Link
              to={ROUTES.contact}
              className="inline-flex items-center gap-1.5 text-sm font-bold text-accent-700 hover:text-accent-800"
            >
              Contact Legal & Support
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
