import { useEffect } from 'react';
import { useAsyncData } from '@/hooks/useAsyncData';
import { restaurantService } from '@/services/restaurantService';

/** All restaurants for the listing section. Automatically updates on storage change. */
export function useRestaurants() {
  const result = useAsyncData(() => restaurantService.list(), []);

  useEffect(() => {
    const handleStorageChange = () => {
      result.reload();
    };
    window.addEventListener('rateit-storage-change', handleStorageChange);
    return () => window.removeEventListener('rateit-storage-change', handleStorageChange);
  }, [result]);

  return result;
}

/** A single restaurant for the details route (`null` data = not found). */
export function useRestaurant(id: string | undefined) {
  const result = useAsyncData(
    () => (id ? restaurantService.getById(id) : Promise.resolve(null)),
    [id],
  );

  useEffect(() => {
    const handleStorageChange = () => {
      result.reload();
    };
    window.addEventListener('rateit-storage-change', handleStorageChange);
    return () => window.removeEventListener('rateit-storage-change', handleStorageChange);
  }, [result]);

  return result;
}

