/**
 * Domain types for the restaurant directory, reviews, owner management and admin panel.
 */

export type CategoryId =
  | 'north-indian'
  | 'chinese'
  | 'fast-food'
  | 'cafe'
  | 'sweets'
  | 'street-food';

export interface Category {
  id: CategoryId;
  label: string;
}

/** Price bands are derived from `Restaurant.costForTwo` (see lib/budget.ts). */
export type BudgetBand = 'budget' | 'mid' | 'premium';

export interface MenuItem {
  id: string | number;
  restaurantId?: string;
  name: string;
  description: string;
  price: number;
  category: string;
  diet: 'veg' | 'nonveg' | 'both';
  isAvailable: boolean;
  isFeatured: boolean;
  emoji?: string;
  imageUrl?: string;
}

export interface RatingBreakdown {
  food: number;
  taste: number;
  hygiene: number;
  service: number;
  ambience: number;
}

export interface Review {
  id: string | number;
  restaurantId: string;
  restaurantName?: string;
  userName: string;
  userEmail?: string;
  rating: number;
  text: string;
  tags?: string[];
  photoUrl?: string;
  date: string;
  isDemo?: boolean;
  isFlagged?: boolean;
  ownerReply?: {
    text: string;
    date: string;
  };
}

export interface Restaurant {
  id: string;
  name: string;
  /** Neighbourhood inside the city, e.g. "Golghar". */
  area: string;
  city: string;
  description: string;
  /** Broad buckets used by the category cards. A restaurant can sit in several. */
  categories: CategoryId[];
  /** Specific cuisines shown on the card and used by the cuisine filter. */
  cuisines: string[];
  popularDishes: string[];
  /** Approximate cost for two people, in INR. */
  costForTwo: number;
  /** Average of customer ratings, 0-5 (one decimal). */
  averageRating: number;
  reviewCount: number;
  /** Photo URL once real uploads exist. `null` falls back to a local illustration. */
  imageUrl: string | null;
  /** True while the record is fictional sample content. */
  isDemo: boolean;

  // Rich metadata for restaurant profile and dining insights:
  phone?: string;
  address?: string;
  openTime?: string; // e.g. "11:00"
  closeTime?: string; // e.g. "23:00"
  openDays?: string[]; // e.g. ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  diet?: 'veg' | 'both' | 'nonveg';
  status?: 'Active' | 'Suspended' | 'Flagged';
  ownerName?: string;
  ownerEmail?: string;
  facilities?: string[];
  menu?: MenuItem[];
  ratingsBreakdown?: RatingBreakdown;
  priceRange?: { min: number; max: number };
  logoUrl?: string;
  distanceKm?: number;
}

/** `null` means "no restriction" for every filter. */
export interface RestaurantFilters {
  query: string;
  category: CategoryId | null;
  cuisine: string | null;
  budget: BudgetBand | null;
  minRating: number | null;
  area?: string | null;
}

export interface UserProfile {
  id: string | number;
  name: string;
  email: string;
  reviewsCount: number;
  isBanned: boolean;
  createdAt?: string;
}

export interface AuditLogEntry {
  id: string | number;
  action: string;
  target?: string;
  details?: string;
  timestamp: string;
}

export interface OwnerSession {
  restaurantId: string;
  restaurantName: string;
  ownerEmail: string;
  ownerName: string;
}
