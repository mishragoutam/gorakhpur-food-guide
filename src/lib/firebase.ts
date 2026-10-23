import { initializeApp, getApps, getApp, type FirebaseApp } from 'firebase/app';
import { getFirestore, type Firestore } from 'firebase/firestore';

export interface FirebaseConfig {
  apiKey?: string;
  authDomain?: string;
  projectId?: string;
  storageBucket?: string;
  messagingSenderId?: string;
  appId?: string;
  measurementId?: string;
}

const env = import.meta.env;

export const firebaseConfig: FirebaseConfig = {
  apiKey: env.VITE_FIREBASE_API_KEY || '',
  authDomain: env.VITE_FIREBASE_AUTH_DOMAIN || '',
  projectId: env.VITE_FIREBASE_PROJECT_ID || '',
  storageBucket: env.VITE_FIREBASE_STORAGE_BUCKET || '',
  messagingSenderId: env.VITE_FIREBASE_MESSAGING_SENDER_ID || '',
  appId: env.VITE_FIREBASE_APP_ID || '',
  measurementId: env.VITE_FIREBASE_MEASUREMENT_ID || '',
};

/**
 * Checks whether valid Firebase credentials have been configured in environment variables.
 */
export function isFirebaseConfigured(): boolean {
  return Boolean(
    firebaseConfig.apiKey &&
    firebaseConfig.projectId &&
    firebaseConfig.appId
  );
}

let appInstance: FirebaseApp | null = null;
let dbInstance: Firestore | null = null;

try {
  // Always initialize or retrieve Firebase app instance
  if (getApps().length > 0) {
    appInstance = getApp();
  } else if (isFirebaseConfigured()) {
    appInstance = initializeApp(firebaseConfig);
  } else {
    // Development fallback configuration so the SDK can initialize safely
    appInstance = initializeApp({
      apiKey: 'AIzaSyDemoGorakhpurKeyForDevelopmentOnly',
      authDomain: 'gorakhpur-food-guide.firebaseapp.com',
      projectId: 'gorakhpur-food-guide',
      storageBucket: 'gorakhpur-food-guide.appspot.com',
      messagingSenderId: '123456789012',
      appId: '1:123456789012:web:abcdef1234567890',
    });
  }

  if (appInstance) {
    dbInstance = getFirestore(appInstance);
  }
} catch (error) {
  console.warn('[Firebase] Initialization notice:', error);
}

export const app: FirebaseApp | null = appInstance;
export const db: Firestore | null = dbInstance;
