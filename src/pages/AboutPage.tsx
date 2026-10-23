import {
  UtensilsCrossed,
  QrCode,
  Sparkles,
  Heart,
  ShieldCheck,
  Store,
} from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { ButtonLink } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { usePageTitle } from '@/hooks/usePageTitle';
import { ROUTES } from '@/lib/routes';

export default function AboutPage() {
  usePageTitle('About');

  const pillars = [
    {
      icon: QrCode,
      title: 'Table QR Standees',
      description:
        'Guests scan an official RateIt table standee with their camera to view dishes and submit ratings right from their dining table.',
      color: 'bg-forest-100 text-forest-700',
    },
    {
      icon: UtensilsCrossed,
      title: 'Deep Local Discovery',
      description:
        'From legendary Awadhi biryanis in Golghar to Betiahata sweet shops and lakeside cafes at Ramgarh Taal, find Gorakhpur’s best eats.',
      color: 'bg-accent-100 text-accent-700',
    },
    {
      icon: Sparkles,
      title: 'AI Sentiment Intelligence',
      description:
        'Reviews are analyzed in real time across food taste, cleanliness, and service speed so restaurant owners can take prompt action.',
      color: 'bg-blue-100 text-blue-700',
    },
    {
      icon: ShieldCheck,
      title: 'Authentic & Scam-Free',
      description:
        'Zero pay-for-placement bias. Rankings and average ratings are driven purely by honest diner visits and verified customer feedback.',
      color: 'bg-emerald-100 text-emerald-700',
    },
  ];

  const stats = [
    { value: '150+', label: 'Local Eateries Curated' },
    { value: '8', label: 'Gorakhpur Zones Covered' },
    { value: '10k+', label: 'Food Lovers Helped' },
    { value: '4.8★', label: 'Community Trust Score' },
  ];

  return (
    <div className="py-10 sm:py-16">
      <Container>
        {/* Hero Section */}
        <div className="mx-auto max-w-3xl text-center">
          <Badge tone="accent">Our Mission & Story</Badge>
          <h1 className="mt-4 text-3xl font-extrabold text-ink-900 sm:text-5xl leading-tight">
            Celebrating the Flavors & Culinary Heritage of Gorakhpur
          </h1>
          <p className="mt-5 text-base sm:text-xl text-ink-600 leading-relaxed">
            Gorakhpur Food Guide is dedicated to connecting hungry food lovers with iconic local kitchens, vibrant street food stalls, and hidden culinary gems across Uttar Pradesh.
          </p>
        </div>

        {/* Stats Strip */}
        <div className="mt-12 grid grid-cols-2 gap-4 rounded-3xl border border-cream-300 bg-white p-6 sm:grid-cols-4 sm:p-8 shadow-xs">
          {stats.map((s) => (
            <div key={s.label} className="text-center p-2">
              <div className="font-display text-3xl sm:text-4xl font-extrabold text-forest-700">
                {s.value}
              </div>
              <div className="mt-1 text-xs sm:text-sm font-semibold text-ink-600">{s.label}</div>
            </div>
          ))}
        </div>

        {/* The Gorakhpur Story Section */}
        <div className="mt-16 grid items-center gap-10 lg:grid-cols-2">
          <div className="space-y-4 text-base sm:text-lg text-ink-700 leading-relaxed">
            <h2 className="text-2xl font-bold text-ink-900 sm:text-3xl">
              Rooted in Eastern UP's Gastronomic Heart
            </h2>
            <p>
              Gorakhpur is more than a historic railway city—it is a crossroad of vibrant culinary cultures. From the delicate aromas of Mughlai kormas and melt-in-the-mouth galawati kebabs around Golghar to crispy samosas and rich rabri jalebis in Betiahata, our city has a story behind every recipe.
            </p>
            <p>
              In recent years, Gorakhpur's dining landscape has flourished with modern lakeside cafes along Ramgarh Taal, artisan bakeries, and bustling multi-cuisine family restaurants. Yet, finding reliable, honest ratings without paid hype remained a challenge.
            </p>
            <p className="font-medium text-forest-800">
              Gorakhpur Food Guide and RateIt bridge that gap: providing transparent table-side feedback for diners, and intuitive digital tools for local restaurant owners to grow their business.
            </p>
          </div>

          <div className="rounded-3xl border border-cream-300 bg-gradient-to-br from-forest-800 via-forest-700 to-forest-900 p-8 text-white shadow-xl flex flex-col justify-between gap-6">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-bold text-emerald-200">
                <Heart size={14} className="fill-emerald-200" />
                Community First
              </span>
              <h3 className="mt-4 text-2xl font-bold">Our Foodie Promise</h3>
              <p className="mt-3 text-sm text-cream-100/90 leading-relaxed">
                We believe great food deserves to be discovered, whether served in a fine dining restaurant in Civil Lines or a humble chaat cart outside Asuran Chowk.
              </p>
            </div>

            <div className="space-y-3 border-t border-white/20 pt-4 text-xs sm:text-sm">
              <div className="flex items-center gap-2.5">
                <span className="size-2 rounded-full bg-emerald-400"></span>
                <span>100% Free search, filters, and dining guides for everyone</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="size-2 rounded-full bg-emerald-400"></span>
                <span>No pay-to-rank sponsorship; genuine community-led ratings</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="size-2 rounded-full bg-emerald-400"></span>
                <span>Direct table feedback that helps chefs maintain quality</span>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Pillars Section */}
        <div className="mt-20">
          <div className="mx-auto max-w-2xl text-center">
            <Badge tone="neutral">How We Make Dining Better</Badge>
            <h2 className="mt-3 text-2xl font-bold text-ink-900 sm:text-3xl">
              Built for Diners & Restaurant Owners Alike
            </h2>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="rounded-3xl border border-cream-300 bg-white p-6 shadow-xs transition hover:-translate-y-1 hover:shadow-md"
                >
                  <div className={`mb-4 flex size-12 items-center justify-center rounded-2xl ${pillar.color}`}>
                    <Icon size={24} />
                  </div>
                  <h3 className="text-base font-bold text-ink-900">{pillar.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-ink-600 sm:text-sm">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Call to action boxes */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {/* Diner CTA */}
          <div className="rounded-3xl border border-cream-300 bg-cream-50 p-8 text-center flex flex-col justify-between items-center">
            <div>
              <div className="mx-auto flex size-12 items-center justify-center rounded-2xl bg-accent-100 text-accent-700">
                <UtensilsCrossed size={24} />
              </div>
              <h3 className="mt-4 text-xl font-bold text-ink-900">Hungry in Gorakhpur?</h3>
              <p className="mt-2 text-sm text-ink-600 max-w-sm">
                Explore local eateries, filter by budget and cuisine, and find the perfect table for your next meal.
              </p>
            </div>
            <div className="mt-6">
              <ButtonLink to={ROUTES.explore}>Explore Restaurants</ButtonLink>
            </div>
          </div>

          {/* Owner CTA */}
          <div className="rounded-3xl border border-forest-200 bg-forest-50/70 p-8 text-center flex flex-col justify-between items-center">
            <div>
              <div className="mx-auto flex size-12 items-center justify-center rounded-2xl bg-forest-200 text-forest-800">
                <Store size={24} />
              </div>
              <h3 className="mt-4 text-xl font-bold text-ink-900">Own an Eatery in Gorakhpur?</h3>
              <p className="mt-2 text-sm text-ink-600 max-w-sm">
                Register your restaurant, print custom table QR standees, and unlock AI customer sentiment insights today.
              </p>
            </div>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <ButtonLink to={ROUTES.ownerRegister}>Register Your Restaurant</ButtonLink>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
