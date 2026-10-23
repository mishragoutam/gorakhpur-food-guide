import { MapPin } from 'lucide-react';
import { RestaurantImage } from '@/components/art/RestaurantImage';
import { Badge } from '@/components/ui/Badge';
import { ButtonLink } from '@/components/ui/Button';
import { StarRating } from '@/components/ui/StarRating';
import { getBudgetBand } from '@/lib/budget';
import { formatRating, formatReviewCount, formatRupees } from '@/lib/format';
import { ROUTES } from '@/lib/routes';
import type { Restaurant } from '@/types/restaurant';

interface RestaurantCardProps {
  restaurant: Restaurant;
}

export function RestaurantCard({ restaurant }: RestaurantCardProps) {
  const budget = getBudgetBand(restaurant.costForTwo);
  const hasReviews = restaurant.reviewCount > 0;

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-card ring-1 ring-ink-900/5 transition duration-200 hover:-translate-y-0.5 hover:shadow-card-hover has-[a:focus-visible]:ring-2 has-[a:focus-visible]:ring-accent-700">
      <div className="relative aspect-[16/10] overflow-hidden">
        <RestaurantImage
          restaurant={restaurant}
          className="absolute inset-0 transition-transform duration-500 group-hover:scale-105"
        />
        {restaurant.isDemo ? (
          <Badge tone="onImage" className="absolute top-3 left-3">
            Sample listing
          </Badge>
        ) : null}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-xl font-bold text-ink-900">{restaurant.name}</h3>
        <p className="mt-1 text-sm font-medium text-ink-600">{restaurant.cuisines.join(' · ')}</p>
        <p className="mt-2 flex items-center gap-1.5 text-sm text-ink-600">
          <MapPin aria-hidden="true" size={15} className="shrink-0 text-accent-700" />
          {restaurant.area}, {restaurant.city}
        </p>

        <div className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-1">
          {hasReviews ? (
            <>
              <StarRating rating={restaurant.averageRating} />
              <span className="text-sm font-bold text-ink-900">{formatRating(restaurant.averageRating)}</span>
              <span className="text-sm text-ink-600">
                ({formatReviewCount(restaurant.reviewCount, restaurant.isDemo)})
              </span>
            </>
          ) : (
            <span className="text-sm text-ink-600">No reviews yet</span>
          )}
        </div>

        <div className="mt-auto flex items-center justify-between gap-3 pt-5">
          <p className="text-sm text-ink-600">
            <span aria-hidden="true" className="mr-1.5 font-semibold text-ink-900">
              {budget.symbol}
            </span>
            About {formatRupees(restaurant.costForTwo)} for two
          </p>
          {/* The ::after layer stretches this link over the whole card, so the card is one tap target. */}
          <ButtonLink
            to={ROUTES.restaurant(restaurant.id)}
            size="sm"
            aria-label={`View details for ${restaurant.name}`}
            className="shrink-0 after:absolute after:inset-0"
          >
            View Details
          </ButtonLink>
        </div>
      </div>
    </article>
  );
}
