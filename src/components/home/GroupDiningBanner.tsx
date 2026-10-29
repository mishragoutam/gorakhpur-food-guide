import { Users, Sparkles, ArrowRight, CheckCircle2, ThumbsUp, QrCode } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Container } from '@/components/ui/Container';
import { ROUTES } from '@/lib/routes';

export function GroupDiningBanner() {
  return (
    <section aria-labelledby="group-dining-heading" className="py-10 sm:py-14">
      <Container>
        <div className="relative overflow-hidden rounded-3xl border-2 border-forest-800/15 bg-gradient-to-br from-forest-900 via-forest-800 to-ink-900 p-8 text-white sm:p-12 shadow-xl">
          {/* Decorative Background Blob */}
          <div className="pointer-events-none absolute -right-16 -top-16 size-80 rounded-full bg-accent-500/15 blur-3xl" />
          <div className="pointer-events-none absolute -left-16 -bottom-16 size-80 rounded-full bg-forest-400/10 blur-3xl" />

          <div className="relative z-10 grid items-center gap-8 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-forest-400/30 bg-forest-700/50 px-3.5 py-1 text-xs font-bold text-emerald-300">
                <Users size={14} />
                <span>New Feature • Decide Together (साथ मिलकर चुनें)</span>
              </div>

              <h2
                id="group-dining-heading"
                className="mt-4 font-display text-2xl font-extrabold text-white sm:text-3xl lg:text-4xl leading-tight"
              >
                Planning Food with Friends or Family?
              </h2>

              <p className="mt-3 text-sm text-cream-200/90 sm:text-base leading-relaxed max-w-2xl">
                One friend is pure veg, one wants momos, another is watching their student budget. Stop the group chat chaos — invite everyone to vote, balance constraints fairly, and pick the winner in 60 seconds.
              </p>

              <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-xs font-semibold text-emerald-200">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 size={15} className="text-emerald-400" />
                  Hard Diet Protection (Pure Veg Guaranteed)
                </span>
                <span className="flex items-center gap-1.5">
                  <ThumbsUp size={15} className="text-emerald-400" />
                  Balanced Compromise Scoring
                </span>
                <span className="flex items-center gap-1.5">
                  <QrCode size={15} className="text-emerald-400" />
                  Table Standee QR Support
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col items-start lg:items-end justify-center gap-3">
              <Link
                to={ROUTES.groupDining}
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-accent-600 px-6 py-4 text-sm font-bold text-white shadow-lg transition duration-200 hover:bg-accent-700 hover:scale-102"
              >
                <Sparkles size={17} />
                Start Group Session
                <ArrowRight size={16} />
              </Link>
              <span className="text-[11px] font-medium text-cream-200/70">
                No sign-up required • Free to share via link
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
