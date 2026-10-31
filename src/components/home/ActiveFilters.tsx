import { X } from 'lucide-react';
import { CATEGORIES } from '@/data/categories';
import type { SetFilter } from '@/hooks/useRestaurantFilters';
import type { RestaurantFilters } from '@/types/restaurant';

interface ActiveFiltersProps {
  filters: RestaurantFilters;
  onFilterChange: SetFilter;
}

function FilterChip({ label, onRemove }: { label: string; onRemove: () => void }) {
  return (
    <button
      type="button"
      onClick={onRemove}
      aria-label={`Remove filter: ${label}`}
      className="inline-flex min-h-9 items-center gap-1.5 rounded-full bg-accent-50 py-1.5 pr-2.5 pl-3.5 text-sm font-semibold text-accent-700 ring-1 ring-accent-200 transition-colors hover:bg-accent-100"
    >
      {label}
      <X aria-hidden="true" size={14} strokeWidth={2.5} />
    </button>
  );
}

/**
 * Chips for the filters that are set far from the listing (the hero search and the
 * category cards), so people can see why the list is short and remove them in place.
 * The cuisine / budget / rating dropdowns already show their own state.
 */
export function ActiveFilters({ filters, onFilterChange }: ActiveFiltersProps) {
  const query = filters.query.trim();
  const category = CATEGORIES.find((item) => item.id === filters.category);
  const area = filters.area?.trim();

  if (!query && !category && !area) return null;

  return (
    <ul role="list" aria-label="Active filters" className="flex flex-wrap gap-2">
      {category ? (
        <li>
          <FilterChip label={category.label} onRemove={() => onFilterChange('category', null)} />
        </li>
      ) : null}
      {area ? (
        <li>
          <FilterChip label={`Area: ${area}`} onRemove={() => onFilterChange('area', null)} />
        </li>
      ) : null}
      {query ? (
        <li>
          <FilterChip label={`Search: "${query}"`} onRemove={() => onFilterChange('query', '')} />
        </li>
      ) : null}
    </ul>
  );
}
