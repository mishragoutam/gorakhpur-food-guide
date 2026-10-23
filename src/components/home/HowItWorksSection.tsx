import { Search, QrCode, HeartHandshake } from 'lucide-react';
import { Container } from '@/components/ui/Container';

export function HowItWorksSection() {
  const steps = [
    {
      icon: Search,
      title: '1. Discover a restaurant',
      description:
        'Browse local favourites across Gorakhpur. Filter by cuisine, budget, area, or vegetarian preferences.',
      color: 'bg-accent-100 text-accent-700',
    },
    {
      icon: QrCode,
      title: '2. Scan table QR & review',
      description:
        'Scan the RateIt QR standee at your table or billing counter to share ratings, photos, and highlight tags in seconds.',
      color: 'bg-forest-100 text-forest-700',
    },
    {
      icon: HeartHandshake,
      title: '3. Help others choose better',
      description:
        'Your verified feedback guides the food community and helps restaurant owners improve their dishes and service.',
      color: 'bg-amber-100 text-amber-700',
    },
  ];

  return (
    <section className="border-t border-cream-300/80 bg-cream-50/60 py-16 sm:py-20">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-accent-700">Simple & Transparent</span>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-ink-900 sm:text-3xl">
            How RateIt Works
          </h2>
          <p className="mt-3 text-sm text-ink-600 sm:text-base">
            Connecting diners and local restaurant owners through honest, verified feedback and smart table QR reviews.
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.title}
                className="relative flex flex-col rounded-3xl border border-cream-300 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className={`mb-5 flex size-14 items-center justify-center rounded-2xl ${step.color}`}>
                  <Icon size={28} />
                </div>
                <h3 className="text-lg font-bold text-ink-900">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">{step.description}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
