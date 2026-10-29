import { describe, expect, it } from 'vitest';
import {
  DEFAULT_PRODUCTION_ORIGIN,
  getPublicBaseUrl,
  getRestaurantIdentifier,
  getRestaurantPublicUrl,
  getRestaurantQrFilename,
  sanitizeRestaurantSlug,
} from '@/lib/restaurantUrl';
import type { Restaurant } from '@/types/restaurant';

const mockRestaurant1: Restaurant = {
  id: 'demo-kesar-darbar-kitchen',
  name: 'Kesar Darbar Kitchen',
  area: 'Golghar',
  city: 'Gorakhpur',
  description: 'Slow-cooked curries and tandoor breads.',
  categories: ['north-indian'],
  cuisines: ['North Indian', 'Mughlai'],
  popularDishes: ['Dal Makhani', 'Paneer Lababdar'],
  costForTwo: 900,
  averageRating: 4.6,
  reviewCount: 214,
  imageUrl: null,
  isDemo: true,
};

const mockRestaurant2: Restaurant = {
  id: 'demo-lotus-wok-house',
  name: 'Lotus Wok House',
  area: 'Civil Lines',
  city: 'Gorakhpur',
  description: 'Wok-tossed noodles and dim sums.',
  categories: ['chinese'],
  cuisines: ['Chinese'],
  popularDishes: ['Hakka Noodles'],
  costForTwo: 600,
  averageRating: 4.3,
  reviewCount: 168,
  imageUrl: null,
  isDemo: true,
};

describe('restaurantUrl utility', () => {
  it('1. Two different restaurants generate different destination payloads', () => {
    const url1 = getRestaurantPublicUrl(mockRestaurant1);
    const url2 = getRestaurantPublicUrl(mockRestaurant2);

    expect(url1).not.toEqual(url2);
    expect(url1).toContain('demo-kesar-darbar-kitchen');
    expect(url2).toContain('demo-lotus-wok-house');
  });

  it('2. Each payload resolves to its correct restaurant route', () => {
    const url = getRestaurantPublicUrl(mockRestaurant1);
    expect(url).toMatch(/\/restaurants\/demo-kesar-darbar-kitchen$/);
  });

  it('3. Handles missing or custom slugs cleanly', () => {
    expect(sanitizeRestaurantSlug('demo-chaat-chowk-corner')).toBe('chaat-chowk-corner');
    expect(sanitizeRestaurantSlug('Grand Heritage Café & Bakery!')).toBe('grand-heritage-cafe-bakery');
    expect(sanitizeRestaurantSlug('')).toBe('restaurant');
  });

  it('4. A missing or invalid restaurant produces a clear error', () => {
    expect(() => getRestaurantPublicUrl(null)).toThrow('invalid or missing restaurant identifier');
    expect(() => getRestaurantPublicUrl('')).toThrow('invalid or missing restaurant identifier');
  });

  it('5. QR URLs do not accidentally contain localhost when enforcing production domain', () => {
    const prodOrigin = getPublicBaseUrl({ enforceProductionDomain: true });
    expect(prodOrigin).toBe(DEFAULT_PRODUCTION_ORIGIN);

    const prodUrl = getRestaurantPublicUrl(mockRestaurant1, { enforceProductionDomain: true });
    expect(prodUrl).not.toContain('localhost');
    expect(prodUrl).not.toContain('127.0.0.1');
    expect(prodUrl.startsWith(DEFAULT_PRODUCTION_ORIGIN)).toBe(true);
  });

  it('6. Download filenames are valid, sanitized and restaurant-specific', () => {
    const filename1 = getRestaurantQrFilename(mockRestaurant1, 'png');
    const filename2 = getRestaurantQrFilename(mockRestaurant2, 'svg');

    expect(filename1).toBe('gorakhpur-food-guide-kesar-darbar-kitchen-qr.png');
    expect(filename2).toBe('gorakhpur-food-guide-lotus-wok-house-qr.svg');
    expect(filename1).not.toContain('rateit');
  });

  it('7. Supports optional query parameters without duplicating separators', () => {
    const url = getRestaurantPublicUrl(mockRestaurant1, {
      queryParams: { qr: 'table', table: 5 },
    });
    expect(url).toContain('qr=table');
    expect(url).toContain('table=5');
    expect(url).toMatch(/\/restaurants\/demo-kesar-darbar-kitchen\?qr=table&table=5/);
  });

  it('8. Extracts stable identifier from string or object', () => {
    expect(getRestaurantIdentifier('rest-99')).toBe('rest-99');
    expect(getRestaurantIdentifier(mockRestaurant1)).toBe('demo-kesar-darbar-kitchen');
  });

  it('9. Resilient restaurant lookup matches by exact ID, stripped demo prefix, or slug', async () => {
    const { storageService } = await import('@/services/storageService');
    const byExact = storageService.getRestaurantById('demo-kesar-darbar-kitchen');
    expect(byExact).not.toBeNull();
    expect(byExact?.name).toBe('Kesar Darbar Kitchen');

    const byStripped = storageService.getRestaurantById('kesar-darbar-kitchen');
    expect(byStripped).not.toBeNull();
    expect(byStripped?.id).toBe('demo-kesar-darbar-kitchen');

    const byCaseInsensitive = storageService.getRestaurantById('DEMO-KESAR-DARBAR-KITCHEN');
    expect(byCaseInsensitive).not.toBeNull();
    expect(byCaseInsensitive?.id).toBe('demo-kesar-darbar-kitchen');

    const notFound = storageService.getRestaurantById('completely-non-existent-xyz');
    expect(notFound).toBeNull();
  });
});
