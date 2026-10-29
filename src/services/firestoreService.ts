import {
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
  updateDoc,
  deleteDoc,
  query,
  where,
  orderBy,
  onSnapshot,
  serverTimestamp,
  writeBatch,
} from 'firebase/firestore';
import { db, isFirebaseConfigured } from '@/lib/firebase';
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

const COLLECTIONS = {
  restaurants: 'restaurants',
  reviews: 'reviews',
  inquiries: 'inquiries',
  auditLogs: 'audit_logs',
};

/**
 * Checks whether Firestore instance is available for read/write operations.
 */
export function isFirestoreActive(): boolean {
  return db !== null;
}

/**
 * Fetch all restaurants from Firestore.
 */
export async function getFirestoreRestaurants(): Promise<Restaurant[]> {
  if (!db) return [];
  try {
    const colRef = collection(db, COLLECTIONS.restaurants);
    const snap = await getDocs(colRef);
    const list: Restaurant[] = [];
    snap.forEach((d) => {
      list.push(d.data() as Restaurant);
    });
    return list;
  } catch (err) {
    console.error('[Firestore] Error fetching restaurants:', err);
    return [];
  }
}

/**
 * Fetch a single restaurant by ID from Firestore.
 */
export async function getFirestoreRestaurantById(id: string): Promise<Restaurant | null> {
  if (!db || !id) return null;
  try {
    const docRef = doc(db, COLLECTIONS.restaurants, id);
    const snap = await getDoc(docRef);
    if (!snap.exists()) return null;
    return snap.data() as Restaurant;
  } catch (err) {
    console.error(`[Firestore] Error fetching restaurant ${id}:`, err);
    return null;
  }
}

/**
 * Save or update a restaurant document in Firestore.
 */
export async function saveFirestoreRestaurant(restaurant: Restaurant): Promise<void> {
  if (!db || !restaurant.id) return;
  try {
    const docRef = doc(db, COLLECTIONS.restaurants, restaurant.id);
    await setDoc(docRef, {
      ...restaurant,
      updatedAt: serverTimestamp(),
    }, { merge: true });
  } catch (err) {
    console.error(`[Firestore] Error saving restaurant ${restaurant.id}:`, err);
    throw err;
  }
}

/**
 * Delete a restaurant document from Firestore.
 */
export async function deleteFirestoreRestaurant(id: string): Promise<void> {
  if (!db || !id) return;
  try {
    const docRef = doc(db, COLLECTIONS.restaurants, id);
    await deleteDoc(docRef);
  } catch (err) {
    console.error(`[Firestore] Error deleting restaurant ${id}:`, err);
    throw err;
  }
}

/**
 * Fetch reviews from Firestore, optionally filtered by restaurant ID.
 */
export async function getFirestoreReviews(restaurantId?: string): Promise<Review[]> {
  if (!db) return [];
  try {
    const colRef = collection(db, COLLECTIONS.reviews);
    let q = query(colRef, orderBy('date', 'desc'));
    if (restaurantId) {
      q = query(colRef, where('restaurantId', '==', restaurantId));
    }
    const snap = await getDocs(q);
    const reviews: Review[] = [];
    snap.forEach((d) => {
      reviews.push(d.data() as Review);
    });
    return reviews;
  } catch (err) {
    console.error('[Firestore] Error fetching reviews:', err);
    return [];
  }
}

/**
 * Add or update a review document in Firestore.
 */
export async function saveFirestoreReview(review: Review): Promise<void> {
  if (!db || !review.id) return;
  try {
    const docRef = doc(db, COLLECTIONS.reviews, String(review.id));
    await setDoc(docRef, {
      ...review,
      updatedAt: serverTimestamp(),
    }, { merge: true });
  } catch (err) {
    console.error(`[Firestore] Error saving review ${review.id}:`, err);
    throw err;
  }
}

/**
 * Update specific fields in a review document (e.g. ownerReply or isFlagged).
 */
export async function updateFirestoreReview(id: string | number, updates: Partial<Review>): Promise<void> {
  if (!db) return;
  try {
    const docRef = doc(db, COLLECTIONS.reviews, String(id));
    await updateDoc(docRef, {
      ...updates,
      updatedAt: serverTimestamp(),
    });
  } catch (err) {
    console.error(`[Firestore] Error updating review ${id}:`, err);
    throw err;
  }
}

/**
 * Delete a review document from Firestore.
 */
export async function deleteFirestoreReview(id: string | number): Promise<void> {
  if (!db) return;
  try {
    const docRef = doc(db, COLLECTIONS.reviews, String(id));
    await deleteDoc(docRef);
  } catch (err) {
    console.error(`[Firestore] Error deleting review ${id}:`, err);
    throw err;
  }
}

/**
 * Save customer message from Contact page to Firestore inquiries collection.
 */
export async function saveFirestoreInquiry(inquiry: Omit<ContactInquiry, 'id' | 'createdAt' | 'status'>): Promise<string> {
  if (!db) return 'local-mock-id';
  try {
    const id = `inq-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`;
    const docRef = doc(db, COLLECTIONS.inquiries, id);
    await setDoc(docRef, {
      id,
      ...inquiry,
      status: 'New',
      createdAt: serverTimestamp(),
    });
    return id;
  } catch (err) {
    console.error('[Firestore] Error saving inquiry:', err);
    return 'inquiry-error';
  }
}

/**
 * Log administrative audit action to Firestore.
 */
export async function logFirestoreAudit(entry: AuditLogEntry): Promise<void> {
  if (!db) return;
  try {
    const docRef = doc(db, COLLECTIONS.auditLogs, String(entry.id));
    const payload: Record<string, unknown> = {
      id: String(entry.id),
      action: entry.action,
      timestamp: entry.timestamp,
      createdAt: serverTimestamp(),
    };
    if (entry.target !== undefined) payload.target = entry.target;
    if (entry.details !== undefined) payload.details = entry.details;
    await setDoc(docRef, payload);
  } catch (err) {
    console.error('[Firestore] Error saving audit log:', err);
  }
}

/**
 * Batch upload existing local restaurants and reviews to populate Firestore collection.
 */
export async function seedFirestore(
  restaurants: Restaurant[],
  reviews: Review[],
): Promise<{ restaurantsCount: number; reviewsCount: number }> {
  if (!db) return { restaurantsCount: 0, reviewsCount: 0 };
  try {
    const batch = writeBatch(db);

    for (const rest of restaurants) {
      const restDoc = doc(db, COLLECTIONS.restaurants, rest.id);
      batch.set(restDoc, rest, { merge: true });
    }

    for (const rev of reviews) {
      const revDoc = doc(db, COLLECTIONS.reviews, String(rev.id));
      batch.set(revDoc, rev, { merge: true });
    }

    await batch.commit();
    return { restaurantsCount: restaurants.length, reviewsCount: reviews.length };
  } catch (err) {
    console.error('[Firestore] Batch seeding error:', err);
    throw err;
  }
}

/**
 * Subscribe to real-time review updates for a restaurant.
 */
export function subscribeToFirestoreReviews(
  restaurantId: string | undefined,
  onUpdate: (reviews: Review[]) => void,
): () => void {
  if (!db) return () => {};
  try {
    const colRef = collection(db, COLLECTIONS.reviews);
    let q = query(colRef, orderBy('date', 'desc'));
    if (restaurantId) {
      q = query(colRef, where('restaurantId', '==', restaurantId));
    }
    return onSnapshot(q, (snapshot) => {
      const list: Review[] = [];
      snapshot.forEach((d) => list.push(d.data() as Review));
      onUpdate(list);
    }, (error) => {
      console.warn('[Firestore] Real-time review listener warning:', error);
    });
  } catch (err) {
    console.warn('[Firestore] Listener registration skipped:', err);
    return () => {};
  }
}

export const firestoreService = {
  isConfigured: isFirebaseConfigured,
  isActive: isFirestoreActive,
  getRestaurants: getFirestoreRestaurants,
  getRestaurantById: getFirestoreRestaurantById,
  saveRestaurant: saveFirestoreRestaurant,
  deleteRestaurant: deleteFirestoreRestaurant,
  getReviews: getFirestoreReviews,
  saveReview: saveFirestoreReview,
  updateReview: updateFirestoreReview,
  deleteReview: deleteFirestoreReview,
  saveInquiry: saveFirestoreInquiry,
  logAudit: logFirestoreAudit,
  seed: seedFirestore,
  subscribeReviews: subscribeToFirestoreReviews,
};
