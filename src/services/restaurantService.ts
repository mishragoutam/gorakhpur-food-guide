import { storageService } from '@/services/storageService';
import { supabaseService } from '@/services/supabaseService';
import type { Restaurant } from '@/types/restaurant';

export interface RestaurantService {
  list(): Promise<readonly Restaurant[]>;
  getById(id: string): Promise<Restaurant | null>;
  save(restaurant: Restaurant): Promise<void>;
  fetchFromCloud(): Promise<Restaurant[]>;
}

export const restaurantService: RestaurantService = {
  async list() {
    // Instant local cache response ensures UI never hangs or waits on slow network
    return storageService.getRestaurants();
  },

  async getById(id: string) {
    const local = storageService.getRestaurantById(id);
    if (local) return local;

    // In test environment, immediately return null to avoid network timeouts
    if (import.meta.env.MODE === 'test') {
      return null;
    }

    // If not found locally and Supabase is configured, attempt fast cloud fetch with 1s timeout
    if (supabaseService.isConfigured()) {
      try {
        const cloudRest = await Promise.race([
          supabaseService.getRestaurantById(id),
          new Promise<null>((resolve) => setTimeout(() => resolve(null), 1000)),
        ]);
        if (cloudRest) return cloudRest;
      } catch {
        // Fallback gracefully
      }
    }
    return null;
  },

  async save(restaurant: Restaurant) {
    storageService.updateRestaurant(restaurant.id, restaurant);
    if (supabaseService.isConfigured()) {
      supabaseService.saveRestaurant(restaurant).catch(() => {});
    }
  },

  async fetchFromCloud() {
    if (!supabaseService.isConfigured()) return [];
    return supabaseService.getRestaurants();
  },
};
