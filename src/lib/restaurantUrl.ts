import { ROUTES } from '@/lib/routes';
import type { Restaurant } from '@/types/restaurant';

/**
 * Fallback production origin used when running in production or generating
 * shareable/printable QR codes where localhost cannot be used.
 */
export const DEFAULT_PRODUCTION_ORIGIN = 'https://gorakhpurfoodguide.in';

/**
 * Returns the effective base URL for public links and QR code payloads.
 * Respects VITE_PUBLIC_SITE_URL and VITE_APP_URL environment variables.
 * In production or when enforceProductionDomain is true, automatically avoids localhost.
 */
export function getPublicBaseUrl(options?: { enforceProductionDomain?: boolean }): string {
  const envUrl =
    (typeof import.meta !== 'undefined' && import.meta.env
      ? (import.meta.env.VITE_PUBLIC_SITE_URL as string | undefined) ||
        (import.meta.env.VITE_APP_URL as string | undefined)
      : undefined)?.trim();

  if (envUrl) {
    return envUrl.replace(/\/+$/, '');
  }

  const isBrowser = typeof window !== 'undefined' && Boolean(window.location?.origin);
  const currentOrigin = isBrowser ? window.location.origin.replace(/\/+$/, '') : '';

  const isLocalhost =
    currentOrigin.includes('localhost') ||
    currentOrigin.includes('127.0.0.1') ||
    currentOrigin.startsWith('http://[::1]');

  const isProd =
    typeof import.meta !== 'undefined' && import.meta.env
      ? import.meta.env.PROD || import.meta.env.MODE === 'production'
      : false;

  if (options?.enforceProductionDomain || (isProd && isLocalhost)) {
    return DEFAULT_PRODUCTION_ORIGIN;
  }

  if (currentOrigin && (!isLocalhost || !options?.enforceProductionDomain)) {
    return currentOrigin;
  }

  return DEFAULT_PRODUCTION_ORIGIN;
}

/**
 * Creates a clean, filesystem- and URL-safe slug from a restaurant name or identifier.
 */
export function sanitizeRestaurantSlug(input: string): string {
  if (!input || typeof input !== 'string') return 'restaurant';
  return (
    input
      .normalize('NFD')
      .replace(/\p{M}/gu, '')
      .toLowerCase()
      .replace(/^demo-/, '') // Clean demo prefix for cleaner URLs/filenames
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '') || 'restaurant'
  );
}

/**
 * Extracts the stable identifier or slug from a restaurant record or id.
 */
export function getRestaurantIdentifier(restaurant: Restaurant | string | null | undefined): string {
  if (!restaurant) return '';
  if (typeof restaurant === 'string') return restaurant.trim();
  return (restaurant.id || sanitizeRestaurantSlug(restaurant.name)).trim();
}

/**
 * Options for generating restaurant public URLs.
 */
export interface RestaurantUrlOptions {
  /** If true, returns a production-ready domain even when running on localhost */
  enforceProductionDomain?: boolean;
  /** Optional query params, e.g. { qr: 'table' } */
  queryParams?: Record<string, string | number | boolean>;
}

/**
 * Constructs the canonical public URL for a specific restaurant.
 * Always resolves to the individual restaurant's detail route (/restaurants/:id).
 */
export function getRestaurantPublicUrl(
  restaurant: Restaurant | string | null | undefined,
  options?: RestaurantUrlOptions,
): string {
  const id = getRestaurantIdentifier(restaurant);
  if (!id) {
    throw new Error('Cannot generate restaurant URL: invalid or missing restaurant identifier');
  }

  const baseUrl = getPublicBaseUrl({ enforceProductionDomain: options?.enforceProductionDomain });
  const path = ROUTES.restaurant(id);

  let url = `${baseUrl}${path}`;

  if (options?.queryParams && Object.keys(options.queryParams).length > 0) {
    const searchParams = new URLSearchParams();
    for (const [key, value] of Object.entries(options.queryParams)) {
      if (value !== undefined && value !== null) {
        searchParams.set(key, String(value));
      }
    }
    const qs = searchParams.toString();
    if (qs) {
      url += (url.includes('?') ? '&' : '?') + qs;
    }
  }

  return url;
}

/**
 * Generates a standard, sanitized filename for restaurant QR downloads.
 * Example: gorakhpur-food-guide-kesar-darbar-kitchen-qr.png
 */
export function getRestaurantQrFilename(
  restaurant: Restaurant | string | null | undefined,
  format: 'png' | 'svg' = 'png',
): string {
  let nameOrId = 'restaurant';
  if (restaurant) {
    if (typeof restaurant === 'string') {
      nameOrId = restaurant;
    } else {
      nameOrId = restaurant.name || restaurant.id;
    }
  }
  const slug = sanitizeRestaurantSlug(nameOrId);
  return `gorakhpur-food-guide-${slug}-qr.${format}`;
}
