import { createClient, type SupabaseClient } from '@supabase/supabase-js';

export interface SupabaseConfig {
  supabaseUrl: string;
  supabaseAnonKey: string;
}

const env = import.meta.env;

export const supabaseUrl: string = env.VITE_SUPABASE_URL || '';
export const supabaseAnonKey: string = env.VITE_SUPABASE_ANON_KEY || '';

/**
 * Checks whether valid Supabase credentials have been configured in environment variables.
 */
export function isSupabaseConfigured(): boolean {
  return Boolean(
    supabaseUrl &&
    supabaseAnonKey &&
    !supabaseUrl.includes('your-project-id') &&
    !supabaseUrl.includes('placeholder')
  );
}

let clientInstance: SupabaseClient | null = null;

if (isSupabaseConfigured()) {
  try {
    clientInstance = createClient(supabaseUrl, supabaseAnonKey, {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
      },
      realtime: {
        params: {
          eventsPerSecond: 10,
        },
      },
    });
  } catch (error) {
    console.warn('[Supabase] Initialization notice:', error);
  }
}

export const supabase: SupabaseClient | null = clientInstance;

