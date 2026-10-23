import { Sparkles, Check, AlertTriangle, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { Container } from '@/components/ui/Container';

const SAMPLES = [
  {
    quote: 'The food was delicious, but the service was slow during the dinner rush.',
    foodTag: 'Positive',
    serviceTag: 'Needs improvement',
    ambienceTag: 'Neutral',
  },
  {
    quote: 'Amazing Dal Makhani and piping hot naan! Tables were spotless and staff was polite.',
    foodTag: 'Highly Positive',
    serviceTag: 'Positive',
    ambienceTag: 'Clean & Welcoming',
  },
  {
    quote: 'Biryani had great flavours, however the music was way too loud to talk.',
    foodTag: 'Positive',
    serviceTag: 'Neutral',
    ambienceTag: 'High Noise Level',
  },
];

export function AiInsightsSection() {
  const [activeIdx, setActiveIdx] = useState(0);
  const active = SAMPLES[activeIdx] ?? SAMPLES[0]!;

  return (
    <section className="border-t border-cream-300/80 bg-ink-900 py-16 text-white sm:py-20">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-forest-500/30 bg-forest-900/60 px-3.5 py-1 text-xs font-semibold text-emerald-300">
              <Sparkles size={14} />
              AI Review Intelligence
            </div>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Turn Customer Words into Instant Actionable Insights.
            </h2>
            <p className="mt-4 text-base text-cream-200/80">
              Instead of manually sorting through hundreds of reviews, RateIt analyzes sentiment across food taste, cleanliness, and service speed in real time.
            </p>

            <div className="mt-8 flex flex-col gap-3">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                Select a diner review to see real-time AI breakdown:
              </span>
              <div className="flex flex-col gap-2">
                {SAMPLES.map((sample, idx) => (
                  <button
                    key={sample.quote}
                    type="button"
                    onClick={() => setActiveIdx(idx)}
                    className={`flex items-center justify-between rounded-2xl border p-3.5 text-left text-sm transition ${
                      activeIdx === idx
                        ? 'border-emerald-500/60 bg-white/10 font-medium text-white'
                        : 'border-white/10 bg-white/5 text-cream-200/60 hover:bg-white/10'
                    }`}
                  >
                    <span className="truncate pr-4">"{sample.quote}"</span>
                    <ArrowRight size={16} className={activeIdx === idx ? 'text-emerald-400 shrink-0' : 'opacity-0'} />
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-white/15 bg-white/5 p-7 backdrop-blur-md">
            <h3 className="text-sm font-bold uppercase tracking-wider text-emerald-400">
              AI Sentiment Extraction
            </h3>

            <blockquote className="my-5 border-l-4 border-emerald-400 pl-4 font-serif text-lg italic text-cream-100 sm:text-xl">
              "{active.quote}"
            </blockquote>

            <div className="space-y-4 pt-2">
              <div className="flex items-center justify-between rounded-xl bg-white/5 p-3.5">
                <span className="text-sm font-medium text-cream-200">Food & Taste Quality</span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-bold text-emerald-300">
                  <Check size={14} />
                  {active.foodTag}
                </span>
              </div>

              <div className="flex items-center justify-between rounded-xl bg-white/5 p-3.5">
                <span className="text-sm font-medium text-cream-200">Service Speed & Staff</span>
                <span
                  className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold ${
                    active.serviceTag.includes('improvement')
                      ? 'bg-amber-500/20 text-amber-300'
                      : 'bg-emerald-500/20 text-emerald-300'
                  }`}
                >
                  {active.serviceTag.includes('improvement') ? <AlertTriangle size={14} /> : <Check size={14} />}
                  {active.serviceTag}
                </span>
              </div>

              <div className="flex items-center justify-between rounded-xl bg-white/5 p-3.5">
                <span className="text-sm font-medium text-cream-200">Ambience & Cleanliness</span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-500/20 px-3 py-1 text-xs font-bold text-blue-300">
                  {active.ambienceTag}
                </span>
              </div>
            </div>

            <p className="mt-6 text-[11px] text-cream-200/60">
              * Instant sentiment intelligence helps restaurant management address customer feedback and improve dining experiences.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
