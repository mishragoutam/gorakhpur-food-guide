import { SelectField } from '@/components/ui/SelectField';
import type { SetFilter } from '@/hooks/useRestaurantFilters';
import { BUDGET_BANDS } from '@/lib/budget';
import { RATING_OPTIONS } from '@/lib/restaurantFilters';
import type { BudgetBand, RestaurantFilters } from '@/types/restaurant';

interface FilterBarProps {
  filters: RestaurantFilters;
  cuisineOptions: readonly string[];
  onFilterChange: SetFilter;
}

/** Select values are strings; an empty string means "no restriction". */
function parseBudget(value: string): BudgetBand | null {
  return BUDGET_BANDS.find((band) => band.id === value)?.id ?? null;
}

function parseRating(value: string): number | null {
  const rating = Number(value);
  return RATING_OPTIONS.some((option) => option.value === rating) ? rating : null;
}

export function FilterBar({ filters, cuisineOptions, onFilterChange }: FilterBarProps) {
  return (
    <div
      role="group"
      aria-label="Filter restaurants"
      className="grid grid-cols-2 gap-3 rounded-3xl bg-white p-4 shadow-card ring-1 ring-ink-900/5 sm:grid-cols-3 sm:gap-4 sm:p-5"
    >
      <SelectField
        label="Cuisine"
        value={filters.cuisine ?? ''}
        onChange={(event) => onFilterChange('cuisine', event.target.value || null)}
        className="col-span-2 sm:col-span-1"
      >
        <option value="">All cuisines</option>
        {cuisineOptions.map((cuisine) => (
          <option key={cuisine} value={cuisine}>
            {cuisine}
          </option>
        ))}
      </SelectField>

      <SelectField
        label="Budget for two"
        value={filters.budget ?? ''}
        onChange={(event) => onFilterChange('budget', parseBudget(event.target.value))}
      >
        <option value="">Any budget</option>
        {BUDGET_BANDS.map((band) => (
          <option key={band.id} value={band.id}>
            {band.symbol} · {band.label}
          </option>
        ))}
      </SelectField>

      <SelectField
        label="Minimum rating"
        value={filters.minRating === null ? '' : String(filters.minRating)}
        onChange={(event) => onFilterChange('minRating', parseRating(event.target.value))}
      >
        <option value="">Any rating</option>
        {RATING_OPTIONS.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </SelectField>
    </div>
  );
}
