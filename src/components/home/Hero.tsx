import { HeroArt } from '@/components/home/HeroArt';
import { SearchBar } from '@/components/home/SearchBar';
import { Container } from '@/components/ui/Container';

/** Quick-start searches that match words in the demo data. */
const SUGGESTED_SEARCHES = ['Momos', 'Chaat', 'Coffee', 'Mithai'] as const;

interface HeroProps {
  query: string;
  onQueryChange: (query: string) => void;
  /** Jump to the listing (Enter / Search button). */
  onSearch: () => void;
  /** Apply a suggested search and jump to the listing. */
  onSuggestionSelect: (term: string) => void;
}

export function Hero({ query, onQueryChange, onSearch, onSuggestionSelect }: HeroProps) {
  return (
    <section aria-labelledby="hero-heading" className="relative isolate overflow-hidden">
      <Container className="grid items-center gap-12 py-12 sm:py-16 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-10 lg:py-24">
        <div>
          <h1
            id="hero-heading"
            className="text-[2.5rem] leading-[1.05] font-extrabold text-ink-900 sm:text-6xl lg:text-[4.25rem]"
          >
            Discover the Best Food in Gorakhpur
          </h1>
          <p className="mt-5 max-w-xl text-lg text-ink-600 sm:text-xl">
            Explore local restaurants, compare ratings, and find your next favourite meal.
          </p>

          <div className="mt-8 max-w-2xl">
            <SearchBar value={query} onChange={onQueryChange} onSubmit={onSearch} />
          </div>

          <div className="mt-5 flex flex-wrap items-center gap-2 text-sm">
            <span className="text-ink-600">Popular:</span>
            {SUGGESTED_SEARCHES.map((term) => (
              <button
                key={term}
                type="button"
                onClick={() => onSuggestionSelect(term)}
                className="inline-flex min-h-10 items-center rounded-full bg-white/80 px-4 font-medium text-ink-800 ring-1 ring-cream-300 transition-colors hover:bg-white hover:ring-cream-400"
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
