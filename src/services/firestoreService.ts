/**
 * @deprecated Database backend has been transferred to Supabase.
 * Please import from `@/services/supabaseService` directly.
 * This module is maintained for backward compatibility.
 */

import {
  supabaseService,
  type ContactInquiry,
} from '@/services/supabaseService';
import type { Restaurant, Review } from '@/types/restaurant';

export type { ContactInquiry };

export const isFirestoreActive = supabaseService.isActive;
export const getFirestoreRestaurants = supabaseService.getRestaurants;
export const getFirestoreRestaurantById = supabaseService.getRestaurantById;
export const saveFirestoreRestaurant = supabaseService.saveRestaurant;
export const deleteFirestoreRestaurant = supabaseService.deleteRestaurant;
export const getFirestoreReviews = supabaseService.getReviews;
export const saveFirestoreReview = supabaseService.saveReview;
export const updateFirestoreReview = supabaseService.updateReview;
export const deleteFirestoreReview = supabaseService.deleteReview;
export const saveFirestoreInquiry = supabaseService.saveInquiry;
export const logFirestoreAudit = supabaseService.logAudit;
export const seedFirestore = supabaseService.seed;
export const subscribeToFirestoreReviews = supabaseService.subscribeReviews;

export const firestoreService = {
  isConfigured: supabaseService.isConfigured,
  isActive: supabaseService.isActive,
  getRestaurants: supabaseService.getRestaurants,
  getRestaurantById: supabaseService.getRestaurantById,
  saveRestaurant: supabaseService.saveRestaurant,
  deleteRestaurant: supabaseService.deleteRestaurant,
  getReviews: supabaseService.getReviews,
  saveReview: supabaseService.saveReview,
  updateReview: supabaseService.updateReview,
  deleteReview: supabaseService.deleteReview,
  saveInquiry: supabaseService.saveInquiry,
  logAudit: supabaseService.logAudit,
  seed: (restaurants: Restaurant[], reviews: Review[]) =>
    supabaseService.seed(restaurants, reviews),
  subscribeReviews: supabaseService.subscribeReviews,
};
