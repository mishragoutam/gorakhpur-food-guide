import { FoodArt } from '@/components/art/FoodArt';
import { cn } from '@/lib/cn';
import type { Restaurant } from '@/types/restaurant';

interface RestaurantImageProps {
  restaurant: Restaurant;
  className?: string;
  priority?: boolean;
}

function getOptimizedImageUrl(url: string, width = 600): string {
  if (url.includes('unsplash.com')) {
    if (url.includes('w=')) {
      return url.replace(/w=\d+/, `w=${width}`).replace(/q=\d+/, 'q=80');
    }
    return `${url}&w=${width}&q=80&auto=format&fit=crop`;
  }
  return url;
}

/** Shows the restaurant's photo when one exists, otherwise a themed illustration. */
export function RestaurantImage({ restaurant, className, priority = false }: RestaurantImageProps) {
  if (restaurant.imageUrl) {
    const isUnsplash = restaurant.imageUrl.includes('unsplash.com');
    if (!isUnsplash) {
      return (
        <img
          src={restaurant.imageUrl}
          alt={`${restaurant.name} in ${restaurant.area}, ${restaurant.city}`}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          className={cn('size-full object-cover transition-opacity duration-300', className)}
        />
      );
    }

    const srcSmall = getOptimizedImageUrl(restaurant.imageUrl, 400);
    const srcMed = getOptimizedImageUrl(restaurant.imageUrl, 750);
    const srcLarge = getOptimizedImageUrl(restaurant.imageUrl, 1100);

    return (
      <img
        src={srcMed}
        srcSet={`${srcSmall} 400w, ${srcMed} 750w, ${srcLarge} 1100w`}
        sizes="(max-width: 640px) 92vw, (max-width: 1024px) 46vw, 380px"
        alt={`${restaurant.name} in ${restaurant.area}, ${restaurant.city}`}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        className={cn('size-full object-cover transition-opacity duration-300', className)}
      />
    );
  }

  return <FoodArt category={restaurant.categories[0] ?? 'north-indian'} className={className} />;
}
