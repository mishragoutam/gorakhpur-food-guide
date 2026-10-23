import { FoodArt } from '@/components/art/FoodArt';
import { cn } from '@/lib/cn';
import type { Restaurant } from '@/types/restaurant';

interface RestaurantImageProps {
  restaurant: Restaurant;
  className?: string;
}

/** Shows the restaurant's photo when one exists, otherwise a themed illustration. */
export function RestaurantImage({ restaurant, className }: RestaurantImageProps) {
  if (restaurant.imageUrl) {
    return (
      <img
        src={restaurant.imageUrl}
        alt={`${restaurant.name} in ${restaurant.area}, ${restaurant.city}`}
        loading="lazy"
        decoding="async"
        className={cn('size-full object-cover', className)}
      />
    );
  }

  return <FoodArt category={restaurant.categories[0] ?? 'north-indian'} className={className} />;
}
