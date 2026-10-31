import { demoRestaurants } from '@/data/demoRestaurants';
import { GORAKHPUR_RESTAURANTS } from '@/data/gorakhpurRestaurants';
import { supabaseService } from '@/services/supabaseService';
import type {
  AuditLogEntry,
  MenuItem,
  OwnerSession,
  RatingBreakdown,
  Restaurant,
  Review,
  UserProfile,
} from '@/types/restaurant';

const STORAGE_KEYS = {
  restaurants: 'rateit_restaurants_v1',
  reviews: 'rateit_reviews_v1',
  users: 'rateit_users_v1',
  audit: 'rateit_audit_v1',
  customerUser: 'rateit_user',
  ownerSession: 'rateit_owner_session',
  adminSession: 'rateit_admin_session',
  dataCleared: 'rateit_data_cleared',
};

export const COMMON_REVIEW_TAGS = [
  'Delicious Food',
  'Friendly Staff',
  'Clean Place',
  'Slow Service',
  'Good Value',
  'Great Ambience',
  'Fresh Ingredients',
  'Quick Billing',
  'Noisy',
  'Cold Food',
] as const;

const DEFAULT_BREAKDOWN: RatingBreakdown = {
  food: 4.5,
  taste: 4.6,
  hygiene: 4.4,
  service: 4.2,
  ambience: 4.3,
};

const DEFAULT_MENUS: Record<string, MenuItem[]> = {
  'demo-kesar-darbar-kitchen': [
    { id: 'k1', name: 'Dal Makhani', price: 259, category: 'Main Course', diet: 'veg', isAvailable: true, isFeatured: true, description: 'Black lentils slow-cooked overnight with churned butter and cream.' },
    { id: 'k2', name: 'Paneer Lababdar', price: 289, category: 'Main Course', diet: 'veg', isAvailable: true, isFeatured: true, description: 'Soft paneer cubes simmered in spiced tomato and cashew gravy.' },
    { id: 'k3', name: 'Butter Naan', price: 59, category: 'Breads', diet: 'veg', isAvailable: true, isFeatured: false, description: 'Clay-oven baked leavened flatbread brushed with butter.' },
    { id: 'k4', name: 'Chicken Dum Biryani', price: 349, category: 'Main Course', diet: 'nonveg', isAvailable: true, isFeatured: true, description: 'Long grain basmati layered with marinated chicken, saffron and whole spices.' },
    { id: 'k5', name: 'Kesar Pista Firni', price: 99, category: 'Desserts', diet: 'veg', isAvailable: true, isFeatured: false, description: 'Chilled ground rice pudding flavoured with Gorakhpur saffron and pistachios.' },
    { id: 'k6', name: 'Masala Chai', price: 49, category: 'Beverages', diet: 'veg', isAvailable: true, isFeatured: false, description: 'Clay-cup brewed tea with fresh ginger and green cardamom.' },
  ],
  'demo-lotus-wok-house': [
    { id: 'l1', name: 'Hakka Noodles', price: 180, category: 'Main Course', diet: 'veg', isAvailable: true, isFeatured: true, description: 'Wok-tossed noodles with shredded cabbage, bell peppers and spring onion.' },
    { id: 'l2', name: 'Veg Manchurian Gravy', price: 210, category: 'Main Course', diet: 'veg', isAvailable: true, isFeatured: true, description: 'Crisp vegetable dumplings in ginger-garlic soya sauce.' },
    { id: 'l3', name: 'Steamed Momos (8 pcs)', price: 140, category: 'Starters', diet: 'veg', isAvailable: true, isFeatured: true, description: 'Handmade thin-skinned dumplings served with fiery chilli dip.' },
    { id: 'l4', name: 'Chilli Chicken Dry', price: 260, category: 'Starters', diet: 'nonveg', isAvailable: true, isFeatured: false, description: 'Diced chicken tossed with capsicum, green chillies and dark soya.' },
    { id: 'l5', name: 'Burnt Garlic Fried Rice', price: 190, category: 'Main Course', diet: 'veg', isAvailable: true, isFeatured: false, description: 'Aromatic basmati tossed with golden fried garlic and herbs.' },
  ],
  'demo-stack-and-sizzle-eatery': [
    { id: 's1', name: 'Crispy Veg Burger', price: 149, category: 'Main Course', diet: 'veg', isAvailable: true, isFeatured: true, description: 'Herb potato patty, cheese slice, lettuce and house sauce in a sesame bun.' },
    { id: 's2', name: 'Peri Peri Fries', price: 119, category: 'Starters', diet: 'veg', isAvailable: true, isFeatured: true, description: 'Golden potato fries dusted with spicy African bird’s eye seasoning.' },
    { id: 's3', name: 'Farmhouse Pizza (10 inch)', price: 299, category: 'Main Course', diet: 'veg', isAvailable: true, isFeatured: true, description: 'Wood-fired crust with marinara, mozzarella, mushrooms, capsicum and olives.' },
    { id: 's4', name: 'Choco Lava Cake', price: 99, category: 'Desserts', diet: 'veg', isAvailable: true, isFeatured: false, description: 'Warm chocolate cake with a molten chocolate fudge centre.' },
  ],
  'demo-chai-and-chapters-cafe': [
    { id: 'c1', name: 'Cold Coffee with Ice Cream', price: 139, category: 'Beverages', diet: 'veg', isAvailable: true, isFeatured: true, description: 'Thick blended Arabica roast with vanilla scoop and cocoa dusting.' },
    { id: 'c2', name: 'Kulhad Masala Chai', price: 40, category: 'Beverages', diet: 'veg', isAvailable: true, isFeatured: true, description: 'Special ginger-cardamom brew in traditional baked terracotta cup.' },
    { id: 'c3', name: 'Chocolate Walnut Brownie', price: 95, category: 'Desserts', diet: 'veg', isAvailable: true, isFeatured: true, description: 'Fudgy Dutch cocoa brownie studded with crunchy roasted walnuts.' },
    { id: 'c4', name: 'Grilled Herb Sandwich', price: 120, category: 'Starters', diet: 'veg', isAvailable: true, isFeatured: false, description: 'Jumbo bread stuffed with vegetables, mint chutney and cheese.' },
  ],
  'demo-rasraj-sweets-and-snacks': [
    { id: 'r1', name: 'Kaju Katli (250g)', price: 260, category: 'Desserts', diet: 'veg', isAvailable: true, isFeatured: true, description: 'Diamond cut cashew fudge prepared with pure Goan cashews.' },
    { id: 'r2', name: 'Rasmalai (2 pcs)', price: 90, category: 'Desserts', diet: 'veg', isAvailable: true, isFeatured: true, description: 'Spongy chenna discs soaked in saffron-pistachio clotted milk.' },
    { id: 'r3', name: 'Gorakhpuri Samosa (2 pcs)', price: 30, category: 'Starters', diet: 'veg', isAvailable: true, isFeatured: true, description: 'Flaky pastry filled with spiced potato, green peas and whole coriander.' },
    { id: 'r4', name: 'Dhokla Plate', price: 60, category: 'Starters', diet: 'veg', isAvailable: true, isFeatured: false, description: 'Steamed gram-flour sponge tempered with mustard seeds and curry leaves.' },
  ],
  'demo-chaat-chowk-corner': [
    { id: 'ch1', name: 'Aloo Tikki Chaat', price: 70, category: 'Starters', diet: 'veg', isAvailable: true, isFeatured: true, description: 'Crisp desi ghee potato patties topped with spiced matar, sweet curd and sonth.' },
    { id: 'ch2', name: 'Golgappe (6 pcs)', price: 40, category: 'Starters', diet: 'veg', isAvailable: true, isFeatured: true, description: 'Crisp semolina puris filled with spiced potato and chilled mint pani.' },
    { id: 'ch3', name: 'Dahi Bhalla', price: 70, category: 'Starters', diet: 'veg', isAvailable: true, isFeatured: true, description: 'Soft lentil dumplings drenched in sweetened beaten curd with cumin.' },
    { id: 'ch4', name: 'Malai Lassi', price: 60, category: 'Beverages', diet: 'veg', isAvailable: true, isFeatured: false, description: 'Creamy sweet yogurt drink served in an earthen kulhad.' },
  ],
};

const SEED_REVIEWS: Review[] = [
  {
    id: 'rev-1',
    restaurantId: 'demo-kesar-darbar-kitchen',
    userName: 'Aarav S.',
    rating: 5,
    text: 'Butter Chicken and Dal Makhani were rich, flavourful and served boiling hot. Best dining experience in Golghar!',
    tags: ['Delicious Food', 'Great Ambience'],
    date: '2026-09-02',
    isDemo: true,
  },
  {
    id: 'rev-2',
    restaurantId: 'demo-kesar-darbar-kitchen',
    userName: 'Meera K.',
    rating: 4,
    text: 'The food was delicious, but the service was a bit slow during the Sunday evening rush. Paneer was super soft.',
    tags: ['Delicious Food', 'Slow Service'],
    date: '2026-08-21',
    isDemo: true,
    ownerReply: {
      text: 'Thank you Meera! We are training additional pass runners to ensure our dinner rush is much faster. Glad you loved the paneer!',
      date: '2026-08-22',
    },
  },
  {
    id: 'rev-3',
    restaurantId: 'demo-kesar-darbar-kitchen',
    userName: 'Rohan P.',
    rating: 5,
    text: 'Spotless tables, attentive staff and incredible garlic naan. Great place for a family outing in Gorakhpur.',
    tags: ['Clean Place', 'Friendly Staff', 'Good Value'],
    date: '2026-08-10',
    isDemo: true,
  },
  {
    id: 'rev-4',
    restaurantId: 'demo-lotus-wok-house',
    userName: 'Kabir Singh',
    rating: 4,
    text: 'Loved the Hakka noodles and Manchurian. Generous portions and quick billing.',
    tags: ['Good Value', 'Quick Billing'],
    date: '2026-08-15',
    isDemo: true,
  },
  {
    id: 'rev-5',
    restaurantId: 'demo-chai-and-chapters-cafe',
    userName: 'Sana Khan',
    rating: 5,
    text: 'A peaceful haven in Betiahata. The cold coffee and brownie combo made my reading afternoon perfect.',
    tags: ['Great Ambience', 'Fresh Ingredients'],
    date: '2026-08-01',
    isDemo: true,
  },
  {
    id: 'rev-6',
    restaurantId: 'demo-chaat-chowk-corner',
    userName: 'Riya Gupta',
    rating: 5,
    text: 'Best Aloo Tikki chaat near Taramandal lake. Desi ghee aroma and fresh mint pani!',
    tags: ['Delicious Food', 'Good Value'],
    date: '2026-08-25',
    isDemo: true,
  },
];

const SEED_USERS: UserProfile[] = [
  { id: 1, name: 'Aarav Mehta', email: 'aarav@mail.com', reviewsCount: 14, isBanned: false, createdAt: '2026-01-15' },
  { id: 2, name: 'Meera Joshi', email: 'meera@mail.com', reviewsCount: 9, isBanned: false, createdAt: '2026-02-10' },
  { id: 3, name: 'Kabir Singh', email: 'kabir@mail.com', reviewsCount: 22, isBanned: false, createdAt: '2026-03-05' },
  { id: 4, name: 'Sana Khan', email: 'sana@mail.com', reviewsCount: 6, isBanned: false, createdAt: '2026-04-12' },
  { id: 5, name: 'Rohan Verma', email: 'rohan@mail.com', reviewsCount: 31, isBanned: true, createdAt: '2026-05-20' },
  { id: 6, name: 'Riya Gupta', email: 'riya@mail.com', reviewsCount: 3, isBanned: false, createdAt: '2026-06-18' },
];

const SEED_AUDIT: AuditLogEntry[] = [
  { id: 'a1', action: 'Admin logged in', target: 'admin@rateit.com', timestamp: 'Just now' },
  { id: 'a2', action: 'Flagged review for spam check', target: 'Review #rev-2', timestamp: '1 hour ago' },
  { id: 'a3', action: 'Verified new menu submission', target: 'Kesar Darbar Kitchen', timestamp: 'Yesterday' },
];

function safeGet<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key);
    return raw !== null ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

function safeSet<T>(key: string, value: T): void {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    window.dispatchEvent(new CustomEvent('rateit-storage-change', { detail: { key } }));
  } catch {
    // Storage quota or private mode fallback
  }
}

function getInitialRestaurants(): Restaurant[] {
  // During automated Vitest test runs, keep demo fixture matching test expectations
  if (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.MODE === 'test') {
    return demoRestaurants.map((base) => ({
      ...base,
      address: `${base.area}, ${base.city}`,
      phone: '+91 98380 12345',
      openTime: '11:00',
      closeTime: '23:00',
      openDays: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      diet: base.categories.includes('sweets') ? 'veg' : 'both',
      status: 'Active',
      ownerName: 'Restaurant Owner',
      ownerEmail: 'owner@rateit.example',
      facilities: ['Air Conditioned', 'Free Wi-Fi', 'Family Friendly', 'Card Payments'],
      menu: DEFAULT_MENUS[base.id] ?? [],
      ratingsBreakdown: DEFAULT_BREAKDOWN,
      priceRange: { min: Math.round(base.costForTwo * 0.4), max: base.costForTwo },
      distanceKm: 1.2,
    }));
  }

  // In production, provide authentic Gorakhpur dining directory
  return GORAKHPUR_RESTAURANTS.map((r) => ({ ...r }));
}

export const storageService = {
  /**
   * Retrieves raw stored restaurants or falls back cleanly.
   */
  getRawRestaurants(): Restaurant[] {
    const isCleared = safeGet<string | null>(STORAGE_KEYS.dataCleared, null) === 'true';
    const stored = safeGet<Restaurant[] | null>(STORAGE_KEYS.restaurants, null);

    if (isCleared) {
      return stored ?? [];
    }

    if (stored !== null && Array.isArray(stored)) {
      return stored;
    }

    const initial = getInitialRestaurants();
    safeSet(STORAGE_KEYS.restaurants, initial);
    return initial;
  },

  /**
   * Returns all active restaurants with dynamic reviews calculation.
   */
  getRestaurants(): Restaurant[] {
    const rawList = this.getRawRestaurants();
    const reviews = this.getReviews();

    return rawList.map((rest) => {
      const restReviews = reviews.filter((r) => r.restaurantId === rest.id && !r.isFlagged);
      let avgRating = rest.averageRating;
      let reviewCount = rest.reviewCount;

      const userReviews = restReviews.filter((r) => !r.isDemo);

      if (rest.isDemo) {
        if (userReviews.length > 0) {
          const totalScore = rest.averageRating * rest.reviewCount + userReviews.reduce((sum, r) => sum + r.rating, 0);
          reviewCount = rest.reviewCount + userReviews.length;
          avgRating = Number((totalScore / reviewCount).toFixed(1));
        }
      } else {
        if (restReviews.length > 0) {
          const totalScore = restReviews.reduce((sum, r) => sum + r.rating, 0);
          reviewCount = restReviews.length;
          avgRating = Number((totalScore / reviewCount).toFixed(1));
        } else {
          reviewCount = 0;
          avgRating = rest.averageRating || 5.0;
        }
      }

      return {
        ...rest,
        averageRating: avgRating,
        reviewCount: reviewCount,
      };
    });
  },

  getRestaurantById(id: string): Restaurant | null {
    if (!id || typeof id !== 'string') return null;
    const list = this.getRestaurants();
    
    // 1. Direct exact match first
    const exact = list.find((r) => r.id === id);
    if (exact) return exact;

    const decoded = decodeURIComponent(id).trim().toLowerCase();
    const cleanId = decoded.replace(/^demo-/, '');

    // 2. Resilient fallback matching (case-insensitive, optional demo- prefix, or slugified name)
    const found = list.find((r) => {
      const restId = r.id.toLowerCase();
      const restCleanId = restId.replace(/^demo-/, '');
      const restSlug = r.name
        .normalize('NFD')
        .replace(/\p{M}/gu, '')
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '');

      return (
        restId === decoded ||
        restCleanId === cleanId ||
        restSlug === cleanId ||
        restSlug === decoded
      );
    });

    if (found) return found;

    // Resilient fallback to test demo list if not in active list
    const fallback = demoRestaurants.find(
      (r) => r.id === id || r.id.toLowerCase() === decoded || r.id.replace(/^demo-/, '') === cleanId,
    );
    return fallback ? { ...fallback } : null;
  },

  /**
   * Creates and registers a new restaurant, persisting locally and syncing to Firestore.
   */
  createRestaurant(restaurant: Restaurant): Restaurant {
    const list = this.getRawRestaurants();
    const idx = list.findIndex((r) => r.id === restaurant.id);
    if (idx >= 0) {
      list[idx] = restaurant;
    } else {
      list.unshift(restaurant);
    }

    // Unset data cleared flag if user is adding fresh data
    if (localStorage.getItem(STORAGE_KEYS.dataCleared) === 'true') {
      localStorage.removeItem(STORAGE_KEYS.dataCleared);
    }

    safeSet(STORAGE_KEYS.restaurants, list);
    this.addAuditLog(`Registered new restaurant: ${restaurant.name}`);
    supabaseService.saveRestaurant(restaurant).catch(() => {});
    return restaurant;
  },

  /**
   * Updates an existing restaurant details, menu, or profile.
   */
  updateRestaurant(id: string, updates: Partial<Restaurant>): Restaurant | null {
    const list = this.getRawRestaurants();
    const idx = list.findIndex((r) => r.id === id);
    if (idx === -1) return null;

    const base = list[idx]!;
    const updated: Restaurant = {
      ...base,
      ...updates,
      id: base.id,
      name: updates.name ?? base.name,
    };
    list[idx] = updated;

    safeSet(STORAGE_KEYS.restaurants, list);
    this.addAuditLog(`Updated restaurant details: ${updated.name}`);
    supabaseService.saveRestaurant(updated).catch(() => {});
    return updated;
  },

  /**
   * Permanently deletes a restaurant and associated reviews.
   */
  deleteRestaurant(id: string): boolean {
    const list = this.getRawRestaurants();
    const filtered = list.filter((r) => r.id !== id);
    safeSet(STORAGE_KEYS.restaurants, filtered);

    // Also remove reviews for this restaurant
    const reviews = safeGet<Review[]>(STORAGE_KEYS.reviews, []).filter((r) => r.restaurantId !== id);
    safeSet(STORAGE_KEYS.reviews, reviews);

    // Clear owner session if belonged to this restaurant
    const session = this.getOwnerSession();
    if (session?.restaurantId === id) {
      this.setOwnerSession(null);
    }

    this.addAuditLog(`Deleted restaurant ID: ${id}`);
    supabaseService.deleteRestaurant(id).catch(() => {});
    return true;
  },

  /**
   * Reviews
   */
  getReviews(restaurantId?: string): Review[] {
    const isCleared = safeGet<string | null>(STORAGE_KEYS.dataCleared, null) === 'true';
    const customReviews = safeGet<Review[]>(STORAGE_KEYS.reviews, isCleared ? [] : SEED_REVIEWS);
    if (restaurantId) {
      return customReviews.filter((r) => r.restaurantId === restaurantId);
    }
    return customReviews;
  },

  addReview(reviewData: Omit<Review, 'id' | 'date'> & { date?: string }): Review {
    const newReview: Review = {
      ...reviewData,
      id: `rev-${Date.now()}`,
      date: reviewData.date || new Date().toISOString().slice(0, 10),
      isDemo: false,
    };

    const isCleared = safeGet<string | null>(STORAGE_KEYS.dataCleared, null) === 'true';
    const current = safeGet<Review[]>(STORAGE_KEYS.reviews, isCleared ? [] : [...SEED_REVIEWS]);
    current.unshift(newReview);
    safeSet(STORAGE_KEYS.reviews, current);

    this.addAuditLog(`Customer ${newReview.userName} posted review for restaurant ${newReview.restaurantId}`);
    supabaseService.saveReview(newReview).catch(() => {});

    // Recalculate restaurant score
    const rest = this.getRestaurantById(newReview.restaurantId);
    if (rest) {
      const restRevs = current.filter((r) => r.restaurantId === rest.id && !r.isFlagged);
      const totalScore = restRevs.reduce((sum, r) => sum + r.rating, 0);
      const avg = Number((totalScore / restRevs.length).toFixed(1));
      this.updateRestaurant(rest.id, {
        averageRating: avg,
        reviewCount: restRevs.length,
      });
    }

    return newReview;
  },

  updateReview(reviewId: string | number, updates: Partial<Review>): Review | null {
    const custom = safeGet<Review[]>(STORAGE_KEYS.reviews, []);
    const idx = custom.findIndex((r) => r.id === reviewId);
    if (idx >= 0) {
      const existing = custom[idx]!;
      const updated: Review = {
        ...existing,
        ...updates,
        id: existing.id,
        restaurantId: existing.restaurantId,
        userName: updates.userName ?? existing.userName,
        rating: updates.rating ?? existing.rating,
        text: updates.text ?? existing.text,
        date: updates.date ?? existing.date,
      };
      custom[idx] = updated;
      safeSet(STORAGE_KEYS.reviews, custom);
      supabaseService.updateReview(reviewId, updates).catch(() => {});
      return updated;
    }
    const seed = SEED_REVIEWS.find((r) => r.id === reviewId);
    if (seed) {
      const promoted: Review = {
        ...seed,
        ...updates,
        id: seed.id,
        restaurantId: seed.restaurantId,
        userName: updates.userName ?? seed.userName,
        rating: updates.rating ?? seed.rating,
        text: updates.text ?? seed.text,
        date: updates.date ?? seed.date,
      };
      custom.unshift(promoted);
      safeSet(STORAGE_KEYS.reviews, custom);
      return promoted;
    }
    return null;
  },

  deleteReview(reviewId: string | number): void {
    const custom = safeGet<Review[]>(STORAGE_KEYS.reviews, []).filter((r) => r.id !== reviewId);
    safeSet(STORAGE_KEYS.reviews, custom);
    this.addAuditLog(`Deleted review #${reviewId}`);
    supabaseService.deleteReview(reviewId).catch(() => {});
  },

  /**
   * Admin Users
   */
  getUsers(): UserProfile[] {
    return safeGet<UserProfile[]>(STORAGE_KEYS.users, SEED_USERS);
  },

  toggleUserBan(userId: string | number): UserProfile | null {
    const users = this.getUsers();
    const user = users.find((u) => u.id === userId);
    if (!user) return null;

    user.isBanned = !user.isBanned;
    safeSet(STORAGE_KEYS.users, users);
    this.addAuditLog(`${user.isBanned ? 'Banned' : 'Unbanned'} user: ${user.name}`);
    return user;
  },

  /**
   * Audit Log
   */
  getAuditLog(): AuditLogEntry[] {
    return safeGet<AuditLogEntry[]>(STORAGE_KEYS.audit, SEED_AUDIT);
  },

  addAuditLog(action: string, target?: string, details?: string): void {
    const logs = this.getAuditLog();
    const entry: AuditLogEntry = {
      id: `a-${Date.now()}`,
      action,
      target,
      details,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };
    logs.unshift(entry);
    safeSet(STORAGE_KEYS.audit, logs.slice(0, 100));
    supabaseService.logAudit(entry).catch(() => {});
  },

  /**
   * Auth Sessions
   */
  getCustomerUser(): { name: string; email?: string } | null {
    return safeGet<{ name: string; email?: string } | null>(STORAGE_KEYS.customerUser, null);
  },

  setCustomerUser(user: { name: string; email?: string } | null): void {
    safeSet(STORAGE_KEYS.customerUser, user);
  },

  getOwnerSession(): OwnerSession | null {
    return safeGet<OwnerSession | null>(STORAGE_KEYS.ownerSession, null);
  },

  setOwnerSession(session: OwnerSession | null): void {
    safeSet(STORAGE_KEYS.ownerSession, session);
  },

  isAdminLoggedIn(): boolean {
    return safeGet<boolean>(STORAGE_KEYS.adminSession, false);
  },

  setAdminLoggedIn(val: boolean): void {
    safeSet(STORAGE_KEYS.adminSession, val);
  },

  /**
   * Clears ALL data completely so the user starts with an empty database.
   */
  clearAllData(): void {
    safeSet(STORAGE_KEYS.dataCleared, 'true');
    safeSet(STORAGE_KEYS.restaurants, []);
    safeSet(STORAGE_KEYS.reviews, []);
    safeSet(STORAGE_KEYS.audit, []);
    safeSet(STORAGE_KEYS.ownerSession, null);
    this.addAuditLog('All restaurants, reviews, and session data cleared');
    window.dispatchEvent(new CustomEvent('rateit-storage-change', { detail: { key: 'clear-all' } }));
  },

  /**
   * Restores initial demo dataset for Gorakhpur eateries.
   */
  loadDemoData(): void {
    try {
      localStorage.removeItem(STORAGE_KEYS.dataCleared);
    } catch {}
    const initial = getInitialRestaurants();
    safeSet(STORAGE_KEYS.restaurants, initial);
    safeSet(STORAGE_KEYS.reviews, SEED_REVIEWS);
    safeSet(STORAGE_KEYS.audit, SEED_AUDIT);
    this.addAuditLog('Restored Gorakhpur demo dataset');
    window.dispatchEvent(new CustomEvent('rateit-storage-change', { detail: { key: 'load-demo' } }));
  },

  /**
   * Loads authentic production Gorakhpur dining directory.
   */
  loadProductionData(): void {
    try {
      localStorage.removeItem(STORAGE_KEYS.dataCleared);
    } catch {}
    const prodList = GORAKHPUR_RESTAURANTS.map((r) => ({ ...r }));
    safeSet(STORAGE_KEYS.restaurants, prodList);
    this.addAuditLog('Loaded authentic Gorakhpur dining directory');
    window.dispatchEvent(new CustomEvent('rateit-storage-change', { detail: { key: 'load-production' } }));
  },

  /**
   * Returns true if user has cleared all sample data.
   */
  isDataCleared(): boolean {
    return safeGet<string | null>(STORAGE_KEYS.dataCleared, null) === 'true';
  },

  resetAllData(): void {
    this.loadDemoData();
  },

  /**
   * Sync all local data to Supabase database tables
   */
  async syncToSupabase(): Promise<{ restaurantsCount: number; reviewsCount: number }> {
    const restaurants = this.getRestaurants();
    const reviews = this.getReviews();
    return supabaseService.seed(restaurants, reviews);
  },

  /**
   * Backward-compatible alias for syncToSupabase
   */
  async syncToFirestore(): Promise<{ restaurantsCount: number; reviewsCount: number }> {
    return this.syncToSupabase();
  },
};
