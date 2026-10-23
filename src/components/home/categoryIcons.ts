import { Candy, Coffee, CookingPot, Hamburger, Popcorn, Soup } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import type { CategoryId } from '@/types/restaurant';

/** One icon per category card. Kept out of data/ so the data layer has no UI imports. */
export const CATEGORY_ICONS: Record<CategoryId, LucideIcon> = {
  'north-indian': CookingPot,
  chinese: Soup,
  'fast-food': Hamburger,
  cafe: Coffee,
  sweets: Candy,
  'street-food': Popcorn,
};
