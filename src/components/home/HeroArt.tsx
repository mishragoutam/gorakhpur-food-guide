import { FoodArt } from '@/components/art/FoodArt';

const TILE = 'absolute aspect-[16/11] rounded-3xl shadow-card-hover ring-4 ring-white/80';

/** Decorative collage for large screens. Purely illustrative; not tied to any listing. */
export function HeroArt() {
  return (
    <div aria-hidden="true" className="relative mx-auto hidden h-[27rem] w-full max-w-md lg:block">
      {/* One flat disc behind the tiles, like a plate under the dishes. */}
      <div className="absolute top-1/2 left-1/2 size-[25rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-100" />
      <FoodArt category="north-indian" className={`${TILE} top-6 left-0 w-60 -rotate-6`} />
      <FoodArt category="chinese" className={`${TILE} top-0 right-0 w-52 rotate-3`} />
      <FoodArt category="sweets" className={`${TILE} top-[11.5rem] right-4 w-56 rotate-2`} />
      <FoodArt category="cafe" className={`${TILE} bottom-0 left-6 w-52 -rotate-3`} />
    </div>
  );
}
