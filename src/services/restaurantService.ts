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
    // 1. Instant local response
    const localList = storageService.getRestaurants();

    // 2. In non-test mode, background sync from cloud if configured
    if (import.meta.env.MODE !== 'test' && supabaseService.isConfigured()) {
      supabaseService
        .getRestaurants()
        .then((cloudRests) => {
          if (cloudRests && cloudRests.length > 0) {
            storageService.syncRestaurantsFromCloud(cloudRests);
          }
        })
        .catch(() => {});
    }

    return localList;
  },

  async getById(id: string) {
    // In test environment, immediately return local to avoid network timeouts
    if (import.meta.env.MODE === 'test') {
      return storageService.getRestaurantById(id);
    }

    const local = storageService.getRestaurantById(id);

    // If Supabase is configured, fetch fresh data from cloud to guarantee mobile matches desktop
    if (supabaseService.isConfigured()) {
      try {
        const timeoutMs = local ? 1800 : 7000;
        const cloudRest = await Promise.race([
          supabaseService.getRestaurantById(id),
          new Promise<null>((resolve) => setTimeout(() => resolve(null), timeoutMs)),
        ]);
        if (cloudRest) {
          storageService.silentUpsertRestaurant(cloudRest);
          return cloudRest;
        }
      } catch {
        // Fallback gracefully to local
      }
    }

    return local;
  },

  async save(restaurant: Restaurant) {
    storageService.updateRestaurant(restaurant.id, restaurant);
    if (supabaseService.isConfigured()) {
      supabaseService.saveRestaurant(restaurant).catch(() => {});
    }
  },

  async fetchFromCloud() {
    if (!supabaseService.isConfigured()) return [];
    const list = await supabaseService.getRestaurants();
    if (list && list.length > 0) {
      storageService.syncRestaurantsFromCloud(list);
    }
    return list;
  },
};
