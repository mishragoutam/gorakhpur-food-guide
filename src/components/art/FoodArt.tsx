import type { ComponentType } from 'react';
import { CafeScene } from '@/components/art/scenes/CafeScene';
import { ChineseScene } from '@/components/art/scenes/ChineseScene';
import { FastFoodScene } from '@/components/art/scenes/FastFoodScene';
import { NorthIndianScene } from '@/components/art/scenes/NorthIndianScene';
import { StreetFoodScene } from '@/components/art/scenes/StreetFoodScene';
import { SweetsScene } from '@/components/art/scenes/SweetsScene';
import { cn } from '@/lib/cn';
import type { CategoryId } from '@/types/restaurant';

interface ArtStyle {
  Scene: ComponentType;
  /** Flat backdrop colour (full class names so Tailwind can see them). */
  backdrop: string;
}

const ART: Record<CategoryId, ArtStyle> = {
  'north-indian': { Scene: NorthIndianScene, backdrop: 'bg-accent-200' },
  chinese: { Scene: ChineseScene, backdrop: 'bg-tint-leaf-200' },
  'fast-food': { Scene: FastFoodScene, backdrop: 'bg-tint-sun-200' },
  cafe: { Scene: CafeScene, backdrop: 'bg-tint-sand-200' },
  sweets: { Scene: SweetsScene, backdrop: 'bg-tint-rose-200' },
  'street-food': { Scene: StreetFoodScene, backdrop: 'bg-tint-mint-200' },
};

interface FoodArtProps {
  category: CategoryId;
  className?: string;
}

/**
 * Original, locally drawn illustration used wherever a restaurant has no photo yet.
 * Purely decorative (hidden from assistive tech) and needs no network request.
 */
export function FoodArt({ category, className }: FoodArtProps) {
  const { Scene, backdrop } = ART[category];

  return (
    <div className={cn('overflow-hidden', backdrop, className)}>
      <svg
        viewBox="0 0 320 200"
        preserveAspectRatio="xMidYMid slice"
        className="size-full"
        aria-hidden="true"
        focusable="false"
      >
        <Scene />
      </svg>
    </div>
  );
}
