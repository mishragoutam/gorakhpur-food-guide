import { MapPin, QrCode } from 'lucide-react';
import { useState } from 'react';
import { RestaurantImage } from '@/components/art/RestaurantImage';
import { Badge } from '@/components/ui/Badge';
import { ButtonLink } from '@/components/ui/Button';
import { StarRating } from '@/components/ui/StarRating';
import { RestaurantQrModal } from '@/components/qr/RestaurantQrModal';
import { getBudgetBand } from '@/lib/budget';
import { formatRating, formatReviewCount, formatRupees } from '@/lib/format';
import { ROUTES } from '@/lib/routes';
import type { Restaurant } from '@/types/restaurant';

interface RestaurantCardProps {
  restaurant: Restaurant;
}

export function RestaurantCard({ restaurant }: RestaurantCardProps) {
  const [qrModalOpen, setQrModalOpen] = useState(false);
  const budget = getBudgetBand(restaurant.costForTwo);
  const hasReviews = restaurant.reviewCount > 0;

  return (
    <>
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

          {/* Compact QR Action */}
          <div className="absolute top-3 right-3 z-10">
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setQrModalOpen(true);
              }}
              aria-label={`View QR code for ${restaurant.name}`}
              className="inline-flex items-center gap-1 rounded-full bg-white/95 px-2.5 py-1 text-xs font-bold text-ink-800 shadow-sm backdrop-blur-xs transition hover:bg-white hover:text-accent-700 cursor-pointer"
            >
              <QrCode size={13} className="text-accent-700" />
              <span>QR</span>
            </button>
          </div>
        </div>

        <div className="flex flex-1 flex-col p-5">
          <div className="flex items-start gap-3">
            {restaurant.logoUrl ? (
              <img
                src={restaurant.logoUrl}
                alt={`${restaurant.name} logo`}
                className="size-11 shrink-0 rounded-2xl border border-cream-200 bg-white shadow-2xs object-cover"
                loading="lazy"
              />
            ) : null}
            <div className="min-w-0 flex-1">
              <h3 className="text-lg font-bold text-ink-900 leading-snug line-clamp-1">{restaurant.name}</h3>
              <p className="mt-0.5 text-xs font-medium text-ink-600 truncate">{restaurant.cuisines.join(' · ')}</p>
            </div>
          </div>
          <p className="mt-2.5 flex items-center gap-1.5 text-xs text-ink-600">
            <MapPin aria-hidden="true" size={14} className="shrink-0 text-accent-700" />
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

          <div className="mt-auto flex items-center justify-between gap-2 border-t border-cream-200/80 pt-4">
            <div className="min-w-0">
              <div className="flex items-center gap-1.5">
                <span aria-hidden="true" className="text-xs font-bold text-ink-900 sm:text-sm">
                  {budget.symbol}
                </span>
                <span className="text-xs font-bold text-accent-800 sm:text-sm">
                  {formatRupees(restaurant.costForTwo)}
                </span>
              </div>
              <p className="text-[11px] font-medium text-ink-500">for two people</p>
            </div>
            {/* The ::after layer stretches this link over the whole card, so the card is one tap target. */}
            <ButtonLink
              to={ROUTES.restaurant(restaurant.id)}
              size="sm"
              aria-label={`View details for ${restaurant.name}`}
              className="shrink-0 px-3.5 py-1.5 text-xs font-bold after:absolute after:inset-0"
            >
              View Details
            </ButtonLink>
          </div>
        </div>
      </article>

      <RestaurantQrModal
        isOpen={qrModalOpen}
        restaurant={restaurant}
        onClose={() => setQrModalOpen(false)}
      />
    </>
  );
}
