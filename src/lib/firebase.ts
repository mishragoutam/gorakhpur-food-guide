/**
 * @deprecated Database backend has been migrated to Supabase.
 * Use `@/lib/supabase` and `@/services/supabaseService` instead.
 */

export interface FirebaseConfig {
  apiKey?: string;
  authDomain?: string;
  projectId?: string;
  storageBucket?: string;
  messagingSenderId?: string;
  appId?: string;
  measurementId?: string;
}

export const firebaseConfig: FirebaseConfig = {};

/**
 * Checks whether valid Firebase credentials have been configured.
 * Always returns false now that backend is migrated to Supabase.
 */
export function isFirebaseConfigured(): boolean {
  return false;
}

export const app = null;
export const db = null;
