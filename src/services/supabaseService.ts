import { supabase, isSupabaseConfigured } from '@/lib/supabase';
import type { Restaurant, Review, AuditLogEntry } from '@/types/restaurant';

export interface ContactInquiry {
  id?: string;
  name: string;
  email: string;
  phone?: string;
  category: string;
  message: string;
  status?: 'New' | 'Reviewed' | 'Archived';
  createdAt?: unknown;
}

export interface SupabaseRestaurantRow {
  id: string;
  name: string;
  area: string;
  city: string;
  description: string;
  categories: unknown;
  cuisines: unknown;
  popular_dishes: unknown;
  cost_for_two: number;
  average_rating: number;
  review_count: number;
  image_url: string | null;
  is_demo: boolean;
  phone?: string | null;
  address?: string | null;
  open_time?: string | null;
  close_time?: string | null;
  open_days?: unknown;
  diet?: string | null;
  status?: string | null;
  owner_name?: string | null;
  owner_email?: string | null;
  facilities?: unknown;
  menu?: unknown;
  ratings_breakdown?: unknown;
  price_range?: unknown;
  logo_url?: string | null;
  distance_km?: number | null;
  created_at?: string;
  updated_at?: string;
}

export interface SupabaseReviewRow {
  id: string;
  restaurant_id: string;
  restaurant_name?: string | null;
  user_name: string;
  user_email?: string | null;
  rating: number;
  text: string;
  tags?: unknown;
  photo_url?: string | null;
  date: string;
  is_demo?: boolean;
  is_flagged?: boolean;
  owner_reply?: unknown;
  created_at?: string;
  updated_at?: string;
}

export function toRestaurantRow(r: Restaurant): Record<string, unknown> {
  return {
    id: r.id,
    name: r.name,
    area: r.area,
    city: r.city,
    description: r.description,
    categories: r.categories ?? [],
    cuisines: r.cuisines ?? [],
    popular_dishes: r.popularDishes ?? [],
    cost_for_two: r.costForTwo,
    average_rating: r.averageRating,
    review_count: r.reviewCount,
    image_url: r.imageUrl ?? null,
    is_demo: Boolean(r.isDemo),
    phone: r.phone ?? null,
    address: r.address ?? null,
    open_time: r.openTime ?? null,
    close_time: r.closeTime ?? null,
    open_days: r.openDays ?? null,
    diet: r.diet ?? 'both',
    status: r.status ?? 'Active',
    owner_name: r.ownerName ?? null,
    owner_email: r.ownerEmail ?? null,
    facilities: r.facilities ?? null,
    menu: r.menu ?? [],
    ratings_breakdown: r.ratingsBreakdown ?? null,
    price_range: r.priceRange ?? null,
    logo_url: r.logoUrl ?? null,
    distance_km: r.distanceKm != null ? Number(r.distanceKm) : null,
    updated_at: new Date().toISOString(),
  };
}

export function fromRestaurantRow(row: Record<string, unknown>): Restaurant {
  return {
    id: String(row.id),
    name: String(row.name || ''),
    area: String(row.area || ''),
    city: String(row.city || 'Gorakhpur'),
    description: String(row.description || ''),
    categories: (Array.isArray(row.categories) ? row.categories : []) as Restaurant['categories'],
    cuisines: (Array.isArray(row.cuisines) ? row.cuisines : []) as string[],
    popularDishes: (Array.isArray(row.popular_dishes)
      ? row.popular_dishes
      : Array.isArray(row.popularDishes)
        ? row.popularDishes
        : []) as string[],
    costForTwo: Number(row.cost_for_two ?? row.costForTwo ?? 0),
    averageRating: Number(row.average_rating ?? row.averageRating ?? 0),
    reviewCount: Number(row.review_count ?? row.reviewCount ?? 0),
    imageUrl: (row.image_url ?? row.imageUrl ?? null) as string | null,
    isDemo: Boolean(row.is_demo ?? row.isDemo),
    phone: (row.phone as string) || undefined,
    address: (row.address as string) || undefined,
    openTime: (row.open_time ?? row.openTime) as string | undefined,
    closeTime: (row.close_time ?? row.closeTime) as string | undefined,
    openDays: (row.open_days ?? row.openDays) as string[] | undefined,
    diet: ((row.diet as string) || 'both') as Restaurant['diet'],
    status: ((row.status as string) || 'Active') as Restaurant['status'],
    ownerName: (row.owner_name ?? row.ownerName) as string | undefined,
    ownerEmail: (row.owner_email ?? row.ownerEmail) as string | undefined,
    facilities: (row.facilities as string[]) || undefined,
    menu: (Array.isArray(row.menu) ? row.menu : []) as Restaurant['menu'],
    ratingsBreakdown: (row.ratings_breakdown ?? row.ratingsBreakdown) as Restaurant['ratingsBreakdown'],
    priceRange: (row.price_range ?? row.priceRange) as Restaurant['priceRange'],
    logoUrl: (row.logo_url ?? row.logoUrl) as string | undefined,
    distanceKm:
      row.distance_km != null
        ? Number(row.distance_km)
        : row.distanceKm != null
          ? Number(row.distanceKm)
          : undefined,
  };
}

export function toReviewRow(rev: Review): Record<string, unknown> {
  return {
    id: String(rev.id),
    restaurant_id: rev.restaurantId,
    restaurant_name: rev.restaurantName ?? null,
    user_name: rev.userName,
    user_email: rev.userEmail ?? null,
    rating: rev.rating,
    text: rev.text,
    tags: rev.tags ?? [],
    photo_url: rev.photoUrl ?? null,
    date: rev.date,
    is_demo: Boolean(rev.isDemo),
    is_flagged: Boolean(rev.isFlagged),
    owner_reply: rev.ownerReply ?? null,
    updated_at: new Date().toISOString(),
  };
}

export function fromReviewRow(row: Record<string, unknown>): Review {
  return {
    id: String(row.id),
    restaurantId: String(row.restaurant_id ?? row.restaurantId ?? ''),
    restaurantName: (row.restaurant_name ?? row.restaurantName ?? undefined) as string | undefined,
    userName: String(row.user_name ?? row.userName ?? 'Anonymous'),
    userEmail: (row.user_email ?? row.userEmail ?? undefined) as string | undefined,
    rating: Number(row.rating ?? 5),
    text: String(row.text ?? ''),
    tags: (Array.isArray(row.tags) ? row.tags : []) as string[],
    photoUrl: (row.photo_url ?? row.photoUrl ?? undefined) as string | undefined,
    date: String(row.date || new Date().toISOString().slice(0, 10)),
    isDemo: Boolean(row.is_demo ?? row.isDemo),
    isFlagged: Boolean(row.is_flagged ?? row.isFlagged),
    ownerReply: (row.owner_reply ?? row.ownerReply ?? undefined) as Review['ownerReply'],
  };
}

/**
 * Checks whether Supabase instance is active and connected.
 */
export function isSupabaseActive(): boolean {
  return supabase !== null;
}

/**
 * Fetch all restaurants from Supabase.
 */
export async function getSupabaseRestaurants(): Promise<Restaurant[]> {
  if (!supabase) return [];
  try {
    const { data, error } = await supabase
      .from('restaurants')
      .select('*')
      .order('name', { ascending: true });

    if (error) {
      console.error('[Supabase] Error fetching restaurants:', error.message);
      return [];
    }

    return (data || []).map((row) => fromRestaurantRow(row as Record<string, unknown>));
  } catch (err) {
    console.error('[Supabase] Exception fetching restaurants:', err);
    return [];
  }
}

/**
 * Fetch a single restaurant by ID from Supabase.
 */
export async function getSupabaseRestaurantById(id: string): Promise<Restaurant | null> {
  if (!supabase || !id) return null;
  try {
    const { data, error } = await supabase
      .from('restaurants')
      .select('*')
      .eq('id', id)
      .maybeSingle();

    if (error) {
      console.error(`[Supabase] Error fetching restaurant ${id}:`, error.message);
      return null;
    }

    if (!data) return null;
    return fromRestaurantRow(data as Record<string, unknown>);
  } catch (err) {
    console.error(`[Supabase] Exception fetching restaurant ${id}:`, err);
    return null;
  }
}

/**
 * Save or update a restaurant in Supabase.
 */
export async function saveSupabaseRestaurant(restaurant: Restaurant): Promise<void> {
  if (!supabase || !restaurant.id) return;
  try {
    const payload = toRestaurantRow(restaurant);
    const { error } = await supabase
      .from('restaurants')
      .upsert(payload, { onConflict: 'id' });

    if (error) {
      console.error(`[Supabase] Error saving restaurant ${restaurant.id}:`, error.message);
      throw error;
    }
  } catch (err) {
    console.error(`[Supabase] Exception saving restaurant ${restaurant.id}:`, err);
    throw err;
  }
}

/**
 * Delete a restaurant from Supabase.
 */
export async function deleteSupabaseRestaurant(id: string): Promise<void> {
  if (!supabase || !id) return;
  try {
    const { error } = await supabase
      .from('restaurants')
      .delete()
      .eq('id', id);

    if (error) {
      console.error(`[Supabase] Error deleting restaurant ${id}:`, error.message);
      throw error;
    }
  } catch (err) {
    console.error(`[Supabase] Exception deleting restaurant ${id}:`, err);
    throw err;
  }
}

/**
 * Fetch reviews from Supabase, optionally filtered by restaurant ID.
 */
export async function getSupabaseReviews(restaurantId?: string): Promise<Review[]> {
  if (!supabase) return [];
  try {
    let query = supabase
      .from('reviews')
      .select('*')
      .order('date', { ascending: false });

    if (restaurantId) {
      query = query.eq('restaurant_id', restaurantId);
    }

    const { data, error } = await query;
    if (error) {
      console.error('[Supabase] Error fetching reviews:', error.message);
      return [];
    }

    return (data || []).map((row) => fromReviewRow(row as Record<string, unknown>));
  } catch (err) {
    console.error('[Supabase] Exception fetching reviews:', err);
    return [];
  }
}

/**
 * Add or update a review in Supabase.
 */
export async function saveSupabaseReview(review: Review): Promise<void> {
  if (!supabase || !review.id) return;
  try {
    const payload = toReviewRow(review);
    const { error } = await supabase
      .from('reviews')
      .upsert(payload, { onConflict: 'id' });

    if (error) {
      console.error(`[Supabase] Error saving review ${review.id}:`, error.message);
      throw error;
    }
  } catch (err) {
    console.error(`[Supabase] Exception saving review ${review.id}:`, err);
    throw err;
  }
}

/**
 * Update specific fields in a review (e.g. ownerReply or isFlagged).
 */
export async function updateSupabaseReview(id: string | number, updates: Partial<Review>): Promise<void> {
  if (!supabase) return;
  try {
    const rowUpdates: Record<string, unknown> = {
      updated_at: new Date().toISOString(),
    };
    if (updates.userName !== undefined) rowUpdates.user_name = updates.userName;
    if (updates.userEmail !== undefined) rowUpdates.user_email = updates.userEmail;
    if (updates.rating !== undefined) rowUpdates.rating = updates.rating;
    if (updates.text !== undefined) rowUpdates.text = updates.text;
    if (updates.tags !== undefined) rowUpdates.tags = updates.tags;
    if (updates.photoUrl !== undefined) rowUpdates.photo_url = updates.photoUrl;
    if (updates.date !== undefined) rowUpdates.date = updates.date;
    if (updates.isDemo !== undefined) rowUpdates.is_demo = updates.isDemo;
    if (updates.isFlagged !== undefined) rowUpdates.is_flagged = updates.isFlagged;
    if (updates.ownerReply !== undefined) rowUpdates.owner_reply = updates.ownerReply;

    const { error } = await supabase
      .from('reviews')
      .update(rowUpdates)
      .eq('id', String(id));

    if (error) {
      console.error(`[Supabase] Error updating review ${id}:`, error.message);
      throw error;
    }
  } catch (err) {
    console.error(`[Supabase] Exception updating review ${id}:`, err);
    throw err;
  }
}

/**
 * Delete a review from Supabase.
 */
export async function deleteSupabaseReview(id: string | number): Promise<void> {
  if (!supabase) return;
  try {
    const { error } = await supabase
      .from('reviews')
      .delete()
      .eq('id', String(id));

    if (error) {
      console.error(`[Supabase] Error deleting review ${id}:`, error.message);
      throw error;
    }
  } catch (err) {
    console.error(`[Supabase] Exception deleting review ${id}:`, err);
    throw err;
  }
}

/**
 * Save customer inquiry from Contact page to Supabase inquiries table.
 */
export async function saveSupabaseInquiry(
  inquiry: Omit<ContactInquiry, 'id' | 'createdAt' | 'status'>,
): Promise<string> {
  if (!supabase) return 'local-mock-id';
  try {
    const id = `inq-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`;
    const { error } = await supabase.from('inquiries').insert({
      id,
      name: inquiry.name,
      email: inquiry.email,
      phone: inquiry.phone ?? null,
      category: inquiry.category,
      message: inquiry.message,
      status: 'New',
      created_at: new Date().toISOString(),
    });

    if (error) {
      console.error('[Supabase] Error saving inquiry:', error.message);
      return 'inquiry-error';
    }
    return id;
  } catch (err) {
    console.error('[Supabase] Exception saving inquiry:', err);
    return 'inquiry-error';
  }
}

/**
 * Log administrative audit action to Supabase audit_logs table.
 */
export async function logSupabaseAudit(entry: AuditLogEntry): Promise<void> {
  if (!supabase) return;
  try {
    const { error } = await supabase.from('audit_logs').insert({
      id: String(entry.id),
      action: entry.action,
      target: entry.target ?? null,
      details: entry.details ?? null,
      timestamp: entry.timestamp,
      created_at: new Date().toISOString(),
    });

    if (error) {
      console.error('[Supabase] Error saving audit log:', error.message);
    }
  } catch (err) {
    console.error('[Supabase] Exception saving audit log:', err);
  }
}

/**
 * Batch upload existing local restaurants and reviews to populate Supabase tables.
 */
export async function seedSupabase(
  restaurants: Restaurant[],
  reviews: Review[],
): Promise<{ restaurantsCount: number; reviewsCount: number }> {
  if (!supabase) return { restaurantsCount: 0, reviewsCount: 0 };
  try {
    const restRows = restaurants.map(toRestaurantRow);
    const revRows = reviews.map(toReviewRow);

    if (restRows.length > 0) {
      const { error: restError } = await supabase
        .from('restaurants')
        .upsert(restRows, { onConflict: 'id' });
      if (restError) throw restError;
    }

    if (revRows.length > 0) {
      const { error: revError } = await supabase
        .from('reviews')
        .upsert(revRows, { onConflict: 'id' });
      if (revError) throw revError;
    }

    return { restaurantsCount: restaurants.length, reviewsCount: reviews.length };
  } catch (err) {
    console.error('[Supabase] Batch seeding error:', err);
    throw err;
  }
}

/**
 * Subscribe to real-time review updates for a restaurant via Supabase Realtime channel.
 */
export function subscribeToSupabaseReviews(
  restaurantId: string | undefined,
  onUpdate: (reviews: Review[]) => void,
): () => void {
  if (!supabase) return () => {};
  try {
    const channelName = `reviews-realtime-${restaurantId || 'all'}-${Math.random().toString(36).slice(2, 7)}`;
    const channel = supabase
      .channel(channelName)
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'reviews',
          filter: restaurantId ? `restaurant_id=eq.${restaurantId}` : undefined,
        },
        async () => {
          const updated = await getSupabaseReviews(restaurantId);
          onUpdate(updated);
        },
      )
      .subscribe((status) => {
        if (status === 'CHANNEL_ERROR') {
          console.warn('[Supabase] Reviews realtime subscription error');
        }
      });

    return () => {
      supabase?.removeChannel(channel);
    };
  } catch (err) {
    console.warn('[Supabase] Failed to register reviews realtime listener:', err);
    return () => {};
  }
}

export const supabaseService = {
  isConfigured: isSupabaseConfigured,
  isActive: isSupabaseActive,
  getRestaurants: getSupabaseRestaurants,
  getRestaurantById: getSupabaseRestaurantById,
  saveRestaurant: saveSupabaseRestaurant,
  deleteRestaurant: deleteSupabaseRestaurant,
  getReviews: getSupabaseReviews,
  saveReview: saveSupabaseReview,
  updateReview: updateSupabaseReview,
  deleteReview: deleteSupabaseReview,
  saveInquiry: saveSupabaseInquiry,
  logAudit: logSupabaseAudit,
  seed: seedSupabase,
  subscribeReviews: subscribeToSupabaseReviews,
};

