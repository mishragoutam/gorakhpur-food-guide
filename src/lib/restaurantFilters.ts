import { getBudgetBand } from '@/lib/budget';
import type { Restaurant, RestaurantFilters } from '@/types/restaurant';

export const DEFAULT_FILTERS: RestaurantFilters = {
  query: '',
  category: null,
  cuisine: null,
  budget: null,
  minRating: null,
  area: null,
};

export const RATING_OPTIONS = [
  { value: 3.5, label: '3.5 & above' },
  { value: 4, label: '4.0 & above' },
  { value: 4.5, label: '4.5 & above' },
] as const;

/** Lower-cases and strips accents so "cafe" finds "Café". */
export function normalizeText(value: string): string {
  return value.normalize('NFD').replace(/\p{M}/gu, '').toLowerCase().trim();
}

function matchesQuery(restaurant: Restaurant, tokens: string[]): boolean {
  if (tokens.length === 0) return true;

  // Name, cuisine, dishes and area are searchable. Every word typed must match something.
  const haystack = normalizeText(
    [restaurant.name, restaurant.area, ...restaurant.cuisines, ...restaurant.popularDishes].join(' '),
  );
  return tokens.every((token) => haystack.includes(token));
}

export function filterRestaurants(
  restaurants: readonly Restaurant[],
  filters: RestaurantFilters,
): Restaurant[] {
  const tokens = normalizeText(filters.query).split(/\s+/).filter(Boolean);

  return restaurants.filter((restaurant) => {
    if (!matchesQuery(restaurant, tokens)) return false;
    if (filters.category && !restaurant.categories.includes(filters.category)) return false;
    if (filters.cuisine && !restaurant.cuisines.includes(filters.cuisine)) return false;
    if (filters.budget && getBudgetBand(restaurant.costForTwo).id !== filters.budget) return false;
    if (filters.minRating !== null && restaurant.averageRating < filters.minRating) return false;
    if (filters.area && !restaurant.area.toLowerCase().includes(filters.area.toLowerCase())) return false;
    return true;
  });
}

/** Sorted, de-duplicated list of cuisines present in the data (feeds the cuisine filter). */
export function getCuisineOptions(restaurants: readonly Restaurant[]): string[] {
  const cuisines = new Set(restaurants.flatMap((restaurant) => restaurant.cuisines));
  return [...cuisines].sort((a, b) => a.localeCompare(b, 'en-IN'));
}

export function hasActiveFilters(filters: RestaurantFilters): boolean {
  return (
    filters.query.trim() !== '' ||
    filters.category !== null ||
    filters.cuisine !== null ||
    filters.budget !== null ||
    filters.minRating !== null ||
    (filters.area != null && filters.area !== '')
  );
}
