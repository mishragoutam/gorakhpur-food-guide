import { MapPin } from 'lucide-react';
import { HeroArt } from '@/components/home/HeroArt';
import { SearchBar } from '@/components/home/SearchBar';
import { Container } from '@/components/ui/Container';

/** Quick-start searches that match popular culinary highlights. */
const SUGGESTED_SEARCHES = ['Momos', 'Chaat', 'Coffee', 'Mithai', 'Biryani', 'Tandoori'] as const;

interface HeroProps {
  query: string;
  onQueryChange: (query: string) => void;
  area?: string | null;
  onAreaChange?: (area: string | null) => void;
  /** Jump to the listing (Enter / Search button). */
  onSearch: () => void;
  /** Apply a suggested search and jump to the listing. */
  onSuggestionSelect: (term: string) => void;
}

export function Hero({
  query,
  onQueryChange,
  area,
  onAreaChange,
  onSearch,
  onSuggestionSelect,
}: HeroProps) {
  return (
    <section aria-labelledby="hero-heading" className="relative isolate overflow-hidden">
      <Container className="grid items-center gap-12 py-12 sm:py-16 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-10 lg:py-24">
        <div>
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-forest-200 bg-forest-50/90 px-3.5 py-1 text-xs font-bold text-forest-800 shadow-2xs">
            <MapPin size={13} className="text-forest-600 shrink-0" />
            <span>Gorakhpur, Uttar Pradesh</span>
          </div>

          <h1
            id="hero-heading"
            className="text-[2.5rem] leading-[1.05] font-extrabold text-ink-900 sm:text-6xl lg:text-[4.25rem]"
          >
            Discover the Best Food in Gorakhpur
          </h1>
          <p className="mt-5 max-w-xl text-lg text-ink-600 sm:text-xl">
            Explore authentic eateries, lakefront cafes, table QR reviews, and decide group meals together across Gorakhpur.
          </p>

          <div className="mt-8 max-w-2xl">
            <SearchBar
              value={query}
              onChange={onQueryChange}
              area={area}
              onAreaChange={onAreaChange}
              onSubmit={onSearch}
            />
          </div>

          <div className="mt-5 flex flex-wrap items-center gap-2 text-sm">
            <span className="text-ink-600 font-medium">Popular:</span>
            {SUGGESTED_SEARCHES.map((term) => (
              <button
                key={term}
                type="button"
                onClick={() => onSuggestionSelect(term)}
                className="inline-flex min-h-10 items-center rounded-full bg-white/90 px-4 font-semibold text-ink-800 ring-1 ring-cream-300 transition-colors hover:bg-white hover:ring-cream-400 hover:text-accent-700 active:scale-95"
              >
                {term}
              </button>
            ))}
          </div>
        </div>

        <HeroArt />
      </Container>
    </section>
  );
}
