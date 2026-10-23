import { useCallback, useState } from 'react';
import { DEFAULT_FILTERS } from '@/lib/restaurantFilters';
import type { CategoryId, RestaurantFilters } from '@/types/restaurant';

/** Updates one filter at a time; `null` (or an empty query) clears it. */
export type SetFilter = <K extends keyof RestaurantFilters>(key: K, value: RestaurantFilters[K]) => void;

/** Owns the search / category / cuisine / budget / rating state for the home page. */
export function useRestaurantFilters() {
  const [filters, setFilters] = useState<RestaurantFilters>(DEFAULT_FILTERS);

  const setFilter = useCallback(
    <K extends keyof RestaurantFilters>(key: K, value: RestaurantFilters[K]) => {
      setFilters((previous) => ({ ...previous, [key]: value }));
    },
    [],
  );

  /** Selecting the active category again clears it. */
  const toggleCategory = useCallback((category: CategoryId) => {
    setFilters((previous) => ({
      ...previous,
      category: previous.category === category ? null : category,
    }));
  }, []);

  const resetFilters = useCallback(() => setFilters(DEFAULT_FILTERS), []);

  return { filters, setFilter, toggleCategory, resetFilters };
}
