import { MapPin, Search, X } from 'lucide-react';
import { useId, useRef } from 'react';
import type { FormEvent } from 'react';
import { Button } from '@/components/ui/Button';

export const LOCATION_LABEL = 'Gorakhpur, Uttar Pradesh';
export const SEARCH_PLACEHOLDER = 'Search restaurants or dishes';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  area?: string | null;
  onAreaChange?: (area: string | null) => void;
  /** Called on Enter or when the Search button is pressed. */
  onSubmit: () => void;
}

export function SearchBar({ value, onChange, area, onAreaChange, onSubmit }: SearchBarProps) {
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
        <div className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-ink-800 @md:col-span-2 @md:py-1.5 @2xl:col-span-1 @2xl:border-r @2xl:border-cream-300 @2xl:py-0 @2xl:pr-4">
          <MapPin aria-hidden="true" size={18} className="shrink-0 text-accent-600" />
          <select
            aria-label="Gorakhpur locality"
            value={area ?? ''}
            onChange={(e) => onAreaChange?.(e.target.value || null)}
            className="w-full bg-transparent text-xs sm:text-sm font-bold text-ink-900 focus:outline-none cursor-pointer pr-1"
          >
            <option value="">All Gorakhpur Areas</option>
            <option value="Golghar">Golghar</option>
            <option value="Civil Lines">Civil Lines</option>
            <option value="Taramandal">Taramandal (Lakefront)</option>
            <option value="Betiahata">Betiahata</option>
            <option value="Medical College Road">Medical College Road</option>
            <option value="Asuran Chowk">Asuran Chowk</option>
            <option value="Mohaddipur">Mohaddipur</option>
            <option value="Bank Road">Bank Road</option>
            <option value="Shahpur">Shahpur</option>
          </select>
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
