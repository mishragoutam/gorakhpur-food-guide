import { describe, expect, it } from 'vitest';
import { demoRestaurants } from '@/data/demoRestaurants';
import { getBudgetBand } from '@/lib/budget';
import {
  DEFAULT_FILTERS,
  filterRestaurants,
  getCuisineOptions,
  hasActiveFilters,
} from '@/lib/restaurantFilters';
import type { RestaurantFilters } from '@/types/restaurant';

/** Names of the demo restaurants that survive the given filters, in list order. */
function namesFor(overrides: Partial<RestaurantFilters>): string[] {
  return filterRestaurants(demoRestaurants, { ...DEFAULT_FILTERS, ...overrides }).map(
    (restaurant) => restaurant.name,
  );
}

describe('demo data', () => {
  it('has six restaurants, all flagged as fictional', () => {
    expect(demoRestaurants).toHaveLength(6);
    expect(demoRestaurants.every((restaurant) => restaurant.isDemo)).toBe(true);
  });

  it('uses unique ids and ratings between 0 and 5', () => {
    const ids = demoRestaurants.map((restaurant) => restaurant.id);
    expect(new Set(ids).size).toBe(ids.length);
    for (const restaurant of demoRestaurants) {
      expect(restaurant.averageRating).toBeGreaterThanOrEqual(0);
      expect(restaurant.averageRating).toBeLessThanOrEqual(5);
    }
  });
});

describe('filterRestaurants', () => {
  it('returns everything when no filter is set', () => {
    expect(namesFor({})).toHaveLength(6);
  });

  it('searches restaurant names without caring about case', () => {
    expect(namesFor({ query: 'LOTUS' })).toEqual(['Lotus Wok House']);
  });

  it('searches cuisines', () => {
    expect(namesFor({ query: 'mughlai' })).toEqual(['Kesar Darbar Kitchen']);
  });

  it('searches popular dishes', () => {
    expect(namesFor({ query: 'momos' })).toEqual(['Lotus Wok House', 'Chaat Chowk Corner']);
  });

  it('ignores accents, so "cafe" finds "Café"', () => {
    expect(namesFor({ query: 'cafe' })).toEqual(['Chai & Chapters Café']);
  });

  it('needs every typed word to match', () => {
    expect(namesFor({ query: 'wok noodles' })).toEqual(['Lotus Wok House']);
    expect(namesFor({ query: 'wok burger' })).toEqual([]);
  });

  it('filters by category, including restaurants in more than one', () => {
    expect(namesFor({ category: 'street-food' })).toEqual(['Rasraj Sweets & Snacks', 'Chaat Chowk Corner']);
    expect(namesFor({ category: 'sweets' })).toEqual(['Rasraj Sweets & Snacks']);
  });

  it('filters by cuisine', () => {
    expect(namesFor({ cuisine: 'Pizza' })).toEqual(['Stack & Sizzle Eatery']);
  });

  it('filters by budget band', () => {
    expect(namesFor({ budget: 'budget' })).toEqual(['Rasraj Sweets & Snacks', 'Chaat Chowk Corner']);
    expect(namesFor({ budget: 'mid' })).toEqual(['Lotus Wok House', 'Stack & Sizzle Eatery', 'Chai & Chapters Café']);
    expect(namesFor({ budget: 'premium' })).toEqual(['Kesar Darbar Kitchen']);
  });

  it('filters by minimum rating, inclusive', () => {
    expect(namesFor({ minRating: 4.5 })).toEqual(['Kesar Darbar Kitchen', 'Chai & Chapters Café']);
    expect(namesFor({ minRating: 4 })).not.toContain('Stack & Sizzle Eatery');
    expect(namesFor({ minRating: 4 })).toHaveLength(5);
  });

  it('combines filters', () => {
    expect(namesFor({ category: 'street-food', minRating: 4.3 })).toEqual(['Chaat Chowk Corner']);
  });

  it('returns an empty list when nothing matches', () => {
    expect(namesFor({ query: 'sushi' })).toEqual([]);
  });
});

describe('getCuisineOptions', () => {
  it('lists each cuisine once, sorted', () => {
    const options = getCuisineOptions(demoRestaurants);
    expect(options).toHaveLength(12);
    expect(options).toEqual([...new Set(options)].sort((a, b) => a.localeCompare(b, 'en-IN')));
  });
});

describe('hasActiveFilters', () => {
  it('is false for the defaults and for a blank query', () => {
    expect(hasActiveFilters(DEFAULT_FILTERS)).toBe(false);
    expect(hasActiveFilters({ ...DEFAULT_FILTERS, query: '   ' })).toBe(false);
  });

  it('is true as soon as any filter is set', () => {
    expect(hasActiveFilters({ ...DEFAULT_FILTERS, minRating: 4 })).toBe(true);
    expect(hasActiveFilters({ ...DEFAULT_FILTERS, category: 'cafe' })).toBe(true);
  });
});

describe('getBudgetBand', () => {
  it('splits at the band edges', () => {
    expect(getBudgetBand(299).id).toBe('budget');
    expect(getBudgetBand(300).id).toBe('mid');
    expect(getBudgetBand(700).id).toBe('mid');
    expect(getBudgetBand(701).id).toBe('premium');
  });
});
