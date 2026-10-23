import { Star } from 'lucide-react';
import { formatRating } from '@/lib/format';

interface StarRatingProps {
  rating: number;
  max?: number;
  size?: number;
}

/** Five stars with a fractional fill (4.6 fills 92% of the row). Read by screen readers as text. */
export function StarRating({ rating, max = 5, size = 16 }: StarRatingProps) {
  const fill = Math.min(Math.max(rating / max, 0), 1) * 100;
  const stars = Array.from({ length: max }, (_, index) => index);

  return (
    <span role="img" aria-label={`Rated ${formatRating(rating)} out of ${max}`} className="relative inline-flex">
      <span aria-hidden="true" className="flex text-cream-400">
        {stars.map((index) => (
          <Star key={index} size={size} className="shrink-0" />
        ))}
      </span>
      <span
        aria-hidden="true"
        className="absolute inset-y-0 left-0 flex overflow-hidden text-star"
        style={{ width: `${fill}%` }}
      >
        {stars.map((index) => (
          <Star key={index} size={size} fill="currentColor" className="shrink-0" />
        ))}
      </span>
    </span>
  );
}
