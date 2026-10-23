import type { Category } from '@/types/restaurant';

/** Category cards on the home page. Icons live in the UI layer (components/home/categoryIcons.ts). */
export const CATEGORIES: readonly Category[] = [
  { id: 'north-indian', label: 'North Indian' },
  { id: 'chinese', label: 'Chinese' },
  { id: 'fast-food', label: 'Fast Food' },
  { id: 'cafe', label: 'Cafe' },
  { id: 'sweets', label: 'Sweets' },
  { id: 'street-food', label: 'Street Food' },
];
