import { MapPin, Search, X } from 'lucide-react';
import { useId, useRef } from 'react';
import type { FormEvent } from 'react';
import { Button } from '@/components/ui/Button';

export const LOCATION_LABEL = 'Gorakhpur, Uttar Pradesh';
export const SEARCH_PLACEHOLDER = 'Search restaurants or dishes';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  /** Called on Enter or when the Search button is pressed. */
  onSubmit: () => void;
}

/**
 * Results update as you type; submitting jumps down to the listing.
 * The city is fixed for now, so the location is a label rather than a picker.
 *
 * The layout follows the bar's own width (container queries), not the viewport: the hero column is
 * narrower on a desktop than on a tablet, and the full placeholder must always stay readable.
 *   - under 28rem: location, field and full-width button stacked (phones)
 *   - 28rem to 42rem: location line on top, field and button side by side (desktop hero column)
 *   - 42rem and up: a single pill with location, field and button in one row
 */
export function SearchBar({ value, onChange, onSubmit }: SearchBarProps) {
  const inputId = useId();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClear = () => {
    onChange('');
    inputRef.current?.focus();
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit();
  };

  return (
    <div className="@container">
      <form
        role="search"
        onSubmit={handleSubmit}
        className="grid grid-cols-1 gap-1 rounded-3xl bg-white p-2 shadow-search ring-1 ring-ink-900/5 @md:grid-cols-[minmax(0,1fr)_auto] @md:gap-x-2 @md:p-2.5 @2xl:grid-cols-[auto_minmax(0,1fr)_auto] @2xl:items-center @2xl:rounded-full"
      >
        <div className="flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-ink-800 @md:col-span-2 @md:py-1.5 @2xl:col-span-1 @2xl:border-r @2xl:border-cream-300 @2xl:py-0 @2xl:pr-5">
          <MapPin aria-hidden="true" size={18} className="shrink-0 text-accent-600" />
          <span className="whitespace-nowrap">{LOCATION_LABEL}</span>
        </div>

        <div className="flex min-w-0 items-center gap-3 rounded-2xl border-t border-cream-300 px-4 focus-within:ring-2 focus-within:ring-accent-600 @md:border @md:bg-cream-50 @2xl:rounded-full @2xl:border-0 @2xl:bg-transparent">
          <Search aria-hidden="true" size={20} className="shrink-0 text-ink-500" />
          <label htmlFor={inputId} className="sr-only">
            {SEARCH_PLACEHOLDER}
          </label>
          {/*
            The browser's own clear (x) is hidden: Chromium reserves ~16px for it even while the field is
            empty, which clipped the placeholder on 320px screens. Our button below only exists while
            there is text to clear, and looks the same in every browser.
          */}
          <input
            ref={inputRef}
            id={inputId}
            name="q"
            type="search"
            value={value}
            onChange={(event) => onChange(event.target.value)}
            placeholder={SEARCH_PLACEHOLDER}
            autoComplete="off"
            enterKeyHint="search"
            className="h-12 min-w-0 flex-1 bg-transparent text-base text-ink-900 placeholder:text-ink-500 focus:outline-none [&::-webkit-search-cancel-button]:hidden"
          />
          {value ? (
            <button
              type="button"
              aria-label="Clear search"
              onClick={handleClear}
              className="-mr-2 grid size-10 shrink-0 place-items-center rounded-full text-ink-500 transition-colors hover:bg-cream-200 hover:text-ink-900"
            >
              <X aria-hidden="true" size={18} />
            </button>
          ) : null}
        </div>

        <Button type="submit" size="lg" className="@2xl:px-8">
          <Search aria-hidden="true" size={18} className="@md:hidden" />
          Search
        </Button>
      </form>
    </div>
  );
}
