import { ArrowRight, QrCode } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ButtonLink } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { ROUTES } from '@/lib/routes';

/** Invitation for restaurant owners. The QR graphic is decorative, not a working code. */
export function OwnerCta() {
  return (
    <section aria-labelledby="owner-cta-heading" className="py-12 sm:py-16">
      <Container>
        <div className="relative isolate overflow-hidden rounded-[2rem] bg-ink-900 px-6 py-12 text-cream-50 shadow-card-hover sm:px-12 sm:py-16 lg:px-16">
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 bg-[radial-gradient(50%_70%_at_100%_0%,rgb(240_104_15/0.28),transparent_70%),radial-gradient(40%_50%_at_0%_100%,rgb(240_104_15/0.12),transparent_70%)]"
          />

          <div className="grid items-center gap-10 md:grid-cols-[minmax(0,1fr)_auto] md:gap-14">
            <div className="max-w-2xl">
              <h2 id="owner-cta-heading" className="text-3xl font-bold text-balance sm:text-4xl lg:text-[2.5rem]">
                Own a Restaurant in Gorakhpur?
              </h2>
              <p className="mt-4 text-lg text-cream-300">
                Create your restaurant profile and collect customer reviews with your own QR code.
              </p>

              <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-6">
                <ButtonLink to={ROUTES.ownerRegister} variant="onDark" size="lg">
                  Register Your Restaurant
                  <ArrowRight aria-hidden="true" size={18} />
                </ButtonLink>
                <Link
                  to={ROUTES.ownerLogin}
                  className="rounded-full py-2 text-sm font-semibold text-cream-100 underline decoration-accent-400 decoration-2 underline-offset-4 transition-colors hover:text-white"
                >
                  Already registered? Log in
                </Link>
              </div>
            </div>

            <div aria-hidden="true" className="hidden md:block">
              <div className="rotate-3 rounded-3xl bg-cream-50 p-6 shadow-card-hover ring-4 ring-white/10">
                <QrCode size={116} strokeWidth={1.5} className="text-ink-900" />
                <p className="mt-3 text-center text-sm font-semibold text-ink-800">Scan to review</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
