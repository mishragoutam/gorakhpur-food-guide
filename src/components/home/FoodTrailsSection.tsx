import { MapPin, ArrowRight, Utensils, Coffee, Flame, HeartHandshake } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { ROUTES } from '@/lib/routes';

interface Trail {
  id: string;
  title: string;
  hindiTitle: string;
  tagline: string;
  area: string;
  icon: typeof Utensils;
  highlights: string[];
  searchTerm: string;
  color: string;
}

const TRAILS: readonly Trail[] = [
  {
    id: 'chaat-taramandal',
    title: 'Taramandal Sunset Chaat & Street Trail',
    hindiTitle: 'तारामंडल झील चाट एवं स्ट्रीट फ़ूड',
    tagline: 'Desi ghee potato tikkis, tangy spiced mint water golgappe, and lake breezes.',
    area: 'Taramandal Lake',
    icon: Flame,
    highlights: ['Desi Ghee Aloo Tikki', 'Fried & Steamed Momos', 'Kulhad Malai Lassi'],
    searchTerm: 'chaat',
    color: 'from-amber-500/10 to-orange-500/5 border-amber-300/60',
  },
  {
    id: 'golghar-heritage',
    title: 'Golghar Heritage North Indian & Mughlai',
    hindiTitle: 'गोलघर मुग़लई और अवधी स्वाद',
    tagline: 'Slow-simmered curries, clay-oven tandoor breads, and celebratory family dining.',
    area: 'Golghar',
    icon: Utensils,
    highlights: ['Dal Makhani', 'Paneer Lababdar', 'Chicken Dum Biryani'],
    searchTerm: 'North Indian',
    color: 'from-forest-500/10 to-emerald-500/5 border-forest-300/60',
  },
  {
    id: 'asuran-sweets',
    title: 'Asuran Chowk Mithai & Morning Samosa',
    hindiTitle: 'असुरन चौक समोसा एवं शुद्ध देसी घी मिठाई',
    tagline: 'Freshly fried crispy Gorakhpur samosas with hing tadka and celebratory mithai.',
    area: 'Asuran Chowk',
    icon: HeartHandshake,
    highlights: ['Gorakhpuri Samosa', 'Kaju Katli', 'Rasmalai'],
    searchTerm: 'mithai',
    color: 'from-rose-500/10 to-pink-500/5 border-rose-300/60',
  },
  {
    id: 'betiahata-cafes',
    title: 'Betiahata Reading Lounges & Artisanal Cafes',
    hindiTitle: 'बेतियाहाता कैफ़े एवं कॉफ़ी लाउंज',
    tagline: 'Quiet reading corners, rich Arabica cold brews, and warm fudgy chocolate brownies.',
    area: 'Betiahata',
    icon: Coffee,
    highlights: ['Cold Brew Coffee', 'Fudgy Walnut Brownie', 'Kulhad Masala Chai'],
    searchTerm: 'coffee',
    color: 'from-sky-500/10 to-indigo-500/5 border-sky-300/60',
  },
];

interface FoodTrailsSectionProps {
  onSelectTrail?: (term: string) => void;
}

export function FoodTrailsSection({ onSelectTrail }: FoodTrailsSectionProps) {
  return (
    <section aria-labelledby="food-trails-heading" className="py-14 sm:py-20 bg-cream-50/70 border-t border-cream-200">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-accent-700">
            Local Food Trails • गोरखपुर के प्रसिद्ध स्वाद
          </span>
          <h2
            id="food-trails-heading"
            className="mt-2 text-2xl font-bold tracking-tight text-ink-900 sm:text-3xl"
          >
            Curated Culinary Trails Across Gorakhpur
          </h2>
          <p className="mt-3 text-sm text-ink-600 sm:text-base">
            From the bustling street counters of Golghar to evening lake walks at Taramandal, experience the distinct food traditions of our city.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TRAILS.map((trail) => {
            const Icon = trail.icon;
            return (
              <div
                key={trail.id}
                className={`flex flex-col justify-between rounded-3xl border bg-gradient-to-br p-6 shadow-xs transition duration-200 hover:-translate-y-1 hover:shadow-md ${trail.color} bg-white`}
              >
                <div>
                  <div className="flex size-11 items-center justify-center rounded-2xl bg-white shadow-xs text-ink-900 mb-4">
                    <Icon size={22} className="text-accent-700" />
                  </div>

                  <span className="text-[11px] font-bold text-accent-700 block mb-0.5">
                    {trail.hindiTitle}
                  </span>
                  <h3 className="text-base font-bold text-ink-900 leading-snug">{trail.title}</h3>
                  <p className="mt-1.5 flex items-center gap-1 text-xs text-ink-500 font-medium">
                    <MapPin size={13} className="text-forest-700 shrink-0" />
                    {trail.area}
                  </p>
                  <p className="mt-2.5 text-xs text-ink-600 leading-relaxed">{trail.tagline}</p>

                  <div className="mt-4 pt-3 border-t border-cream-200">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-ink-500 block mb-1.5">
                      Signature Dishes:
                    </span>
                    <ul className="space-y-1 text-xs text-ink-800">
                      {trail.highlights.map((dish) => (
                        <li key={dish} className="flex items-center gap-1.5">
                          <span className="size-1 rounded-full bg-accent-600 shrink-0" />
                          <span>{dish}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 pt-2">
                  <button
                    type="button"
                    onClick={() => {
                      if (onSelectTrail) {
                        onSelectTrail(trail.searchTerm);
                      } else {
                        window.location.hash = '#restaurants';
                      }
                    }}
                    className="inline-flex w-full items-center justify-center gap-1.5 rounded-full border border-forest-600 bg-white py-2 text-xs font-bold text-forest-800 shadow-2xs transition hover:bg-forest-50"
                  >
                    <span>Explore {trail.searchTerm}</span>
                    <ArrowRight size={13} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Suggestion / Correction Callout */}
        <div className="mt-10 rounded-2xl border border-cream-300 bg-white p-5 text-center sm:flex sm:items-center sm:justify-between sm:text-left">
          <div>
            <h4 className="text-sm font-bold text-ink-900">
              Know an iconic Gorakhpur food spot or want to report an update?
            </h4>
            <p className="text-xs text-ink-500 mt-0.5">
              Help us keep Gorakhpur Food Guide 100% verified and up to date for our community.
            </p>
          </div>
          <div className="mt-4 sm:mt-0 flex gap-2 justify-center sm:justify-end">
            <a
              href={ROUTES.contact}
              className="inline-flex items-center gap-1.5 rounded-full border border-cream-300 px-4 py-2 text-xs font-bold text-ink-800 hover:bg-cream-100"
            >
              Submit Update
            </a>
            <a
              href={ROUTES.ownerRegister}
              className="inline-flex items-center gap-1.5 rounded-full bg-forest-600 px-4 py-2 text-xs font-bold text-white hover:bg-forest-700"
            >
              Register Eatery
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
