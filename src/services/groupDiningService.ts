import {
  doc,
  getDoc,
  setDoc,
  onSnapshot,
  serverTimestamp,
} from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { recommendGroupRestaurants } from '@/lib/groupRecommendation';
import type {
  GroupSession,
  GroupVote,
  ParticipantPreference,
} from '@/types/groupDining';
import type { Restaurant } from '@/types/restaurant';

const STORAGE_KEY_SESSIONS = 'rateit_group_sessions_v1';
const STORAGE_KEY_CURRENT_PARTICIPANT = 'rateit_group_participant_id';
const FIRESTORE_COLLECTION = 'group_sessions';

function safeGetSessions(): Record<string, GroupSession> {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_SESSIONS);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function safeSaveSession(session: GroupSession): void {
  try {
    const map = safeGetSessions();
    map[session.id] = session;
    localStorage.setItem(STORAGE_KEY_SESSIONS, JSON.stringify(map));
    window.dispatchEvent(
      new CustomEvent('rateit-group-change', { detail: { sessionId: session.id } }),
    );
  } catch {
    // quota fallback
  }
}

function cleanFirestoreObject(obj: Record<string, unknown>): Record<string, unknown> {
  const result: Record<string, unknown> = {};
  for (const [key, value] of Object.entries(obj)) {
    if (value !== undefined) {
      if (Array.isArray(value)) {
        result[key] = value.map((item) =>
          typeof item === 'object' && item !== null
            ? cleanFirestoreObject(item as Record<string, unknown>)
            : item,
        );
      } else if (typeof value === 'object' && value !== null) {
        result[key] = cleanFirestoreObject(value as Record<string, unknown>);
      } else {
        result[key] = value;
      }
    }
  }
  return result;
}

export function getCurrentParticipantId(): string {
  try {
    let id = localStorage.getItem(STORAGE_KEY_CURRENT_PARTICIPANT);
    if (!id) {
      id = `user-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 6)}`;
      localStorage.setItem(STORAGE_KEY_CURRENT_PARTICIPANT, id);
    }
    return id;
  } catch {
    return `user-${Date.now()}`;
  }
}

export const groupDiningService = {
  /**
   * Creates a new Group Dining session.
   */
  async createSession(params: {
    title: string;
    creatorName: string;
    targetBudget?: number;
    targetArea?: string;
  }): Promise<GroupSession> {
    const creatorId = getCurrentParticipantId();
    const sessionId = `grp-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 6)}`;
    const nowIso = new Date().toISOString();

    const session: GroupSession = {
      id: sessionId,
      title: params.title.trim() || 'Gorakhpur Dining Outing',
      creatorId,
      creatorName: params.creatorName.trim() || 'Host',
      targetBudget: params.targetBudget,
      targetArea: params.targetArea,
      status: 'collecting',
      participants: [],
      recommendations: [],
      votes: [],
      createdAt: nowIso,
      updatedAt: nowIso,
    };

    // Save locally
    safeSaveSession(session);

    // Save to Firestore if connected
    if (db) {
      try {
        const docRef = doc(db, FIRESTORE_COLLECTION, sessionId);
        await setDoc(docRef, {
          ...cleanFirestoreObject(session as unknown as Record<string, unknown>),
          firestoreCreatedAt: serverTimestamp(),
        });
      } catch (err) {
        console.warn('[GroupDining] Firestore save warning:', err);
      }
    }

    return session;
  },

  /**
   * Fetches an existing session by ID.
   */
  async getSession(sessionId: string): Promise<GroupSession | null> {
    if (!sessionId) return null;

    // Check cloud first if connected
    if (db) {
      try {
        const docRef = doc(db, FIRESTORE_COLLECTION, sessionId);
        const snap = await getDoc(docRef);
        if (snap.exists()) {
          const cloudSession = snap.data() as GroupSession;
          safeSaveSession(cloudSession);
          return cloudSession;
        }
      } catch (err) {
        console.warn('[GroupDining] Firestore fetch warning:', err);
      }
    }

    // Fall back to local storage
    const map = safeGetSessions();
    return map[sessionId] ?? null;
  },

  /**
   * Submits or updates preferences for a group participant.
   */
  async submitPreferences(
    sessionId: string,
    preference: ParticipantPreference,
  ): Promise<GroupSession> {
    let session = await this.getSession(sessionId);
    if (!session) {
      throw new Error(`Group session "${sessionId}" not found.`);
    }

    const updatedParticipants = session.participants.filter(
      (p) => p.participantId !== preference.participantId,
    );
    updatedParticipants.push(preference);

    session = {
      ...session,
      participants: updatedParticipants,
      updatedAt: new Date().toISOString(),
    };

    safeSaveSession(session);

    if (db) {
      try {
        const docRef = doc(db, FIRESTORE_COLLECTION, sessionId);
        await setDoc(docRef, cleanFirestoreObject(session as unknown as Record<string, unknown>), { merge: true });
      } catch (err) {
        console.warn('[GroupDining] Firestore update warning:', err);
      }
    }

    return session;
  },

  /**
   * Generates and locks in recommendations from current participants.
   */
  async generateRecommendations(
    sessionId: string,
    restaurants: readonly Restaurant[],
  ): Promise<GroupSession> {
    let session = await this.getSession(sessionId);
    if (!session) {
      throw new Error(`Group session "${sessionId}" not found.`);
    }

    const recommendations = recommendGroupRestaurants(restaurants, session.participants);

    session = {
      ...session,
      recommendations,
      status: 'voting',
      updatedAt: new Date().toISOString(),
    };

    safeSaveSession(session);

    if (db) {
      try {
        const docRef = doc(db, FIRESTORE_COLLECTION, sessionId);
        await setDoc(docRef, cleanFirestoreObject(session as unknown as Record<string, unknown>), { merge: true });
      } catch (err) {
        console.warn('[GroupDining] Firestore update warning:', err);
      }
    }

    return session;
  },

  /**
   * Casts or modifies a vote for a candidate restaurant.
   */
  async castVote(sessionId: string, vote: GroupVote): Promise<GroupSession> {
    let session = await this.getSession(sessionId);
    if (!session) {
      throw new Error(`Group session "${sessionId}" not found.`);
    }

    // One active vote per participant
    const updatedVotes = session.votes.filter(
      (v) => v.participantId !== vote.participantId,
    );
    updatedVotes.push(vote);

    session = {
      ...session,
      votes: updatedVotes,
      updatedAt: new Date().toISOString(),
    };

    safeSaveSession(session);

    if (db) {
      try {
        const docRef = doc(db, FIRESTORE_COLLECTION, sessionId);
        await setDoc(docRef, cleanFirestoreObject(session as unknown as Record<string, unknown>), { merge: true });
      } catch (err) {
        console.warn('[GroupDining] Firestore vote warning:', err);
      }
    }

    return session;
  },

  /**
   * Finalizes the group decision.
   * Resolves ties by highest recommendation compatibility score.
   */
  async finalizeDecision(sessionId: string): Promise<GroupSession> {
    let session = await this.getSession(sessionId);
    if (!session) {
      throw new Error(`Group session "${sessionId}" not found.`);
    }

    // Tally votes
    const tally: Record<string, number> = {};
    for (const v of session.votes) {
      tally[v.restaurantId] = (tally[v.restaurantId] || 0) + 1;
    }

    // Find restaurant with most votes
    let winningId: string | undefined;
    let highestCount = -1;

    for (const [restId, count] of Object.entries(tally)) {
      if (count > highestCount) {
        highestCount = count;
        winningId = restId;
      } else if (count === highestCount && winningId) {
        // Tie-breaker: choose whichever has the higher recommendation score
        const scoreA = session.recommendations.find((r) => r.restaurant.id === winningId)?.score || 0;
        const scoreB = session.recommendations.find((r) => r.restaurant.id === restId)?.score || 0;
        if (scoreB > scoreA) {
          winningId = restId;
        }
      }
    }

    // Fallback if no votes cast yet
    if (!winningId && session.recommendations.length > 0) {
      winningId = session.recommendations[0]?.restaurant.id;
    }

    session = {
      ...session,
      status: 'decided',
      winningRestaurantId: winningId,
      updatedAt: new Date().toISOString(),
    };

    safeSaveSession(session);

    if (db) {
      try {
        const docRef = doc(db, FIRESTORE_COLLECTION, sessionId);
        await setDoc(docRef, cleanFirestoreObject(session as unknown as Record<string, unknown>), { merge: true });
      } catch (err) {
        console.warn('[GroupDining] Firestore decision warning:', err);
      }
    }

    return session;
  },

  /**
   * Resets voting to let the group revote.
   */
  async resetVoting(sessionId: string): Promise<GroupSession> {
    let session = await this.getSession(sessionId);
    if (!session) {
      throw new Error(`Group session "${sessionId}" not found.`);
    }

    session = {
      ...session,
      status: 'voting',
      votes: [],
      winningRestaurantId: undefined,
      updatedAt: new Date().toISOString(),
    };

    safeSaveSession(session);

    if (db) {
      try {
        const docRef = doc(db, FIRESTORE_COLLECTION, sessionId);
        await setDoc(docRef, cleanFirestoreObject(session as unknown as Record<string, unknown>), { merge: true });
      } catch (err) {
        console.warn('[GroupDining] Firestore reset warning:', err);
      }
    }

    return session;
  },

  /**
   * Subscribes to real-time changes on this session.
   */
  subscribe(sessionId: string, onUpdate: (session: GroupSession) => void): () => void {
    let unsubFirestore: (() => void) | undefined;

    if (db) {
      try {
        const docRef = doc(db, FIRESTORE_COLLECTION, sessionId);
        unsubFirestore = onSnapshot(docRef, (snap) => {
          if (snap.exists()) {
            const data = snap.data() as GroupSession;
            safeSaveSession(data);
            onUpdate(data);
          }
        });
      } catch (err) {
        console.warn('[GroupDining] Real-time subscribe warning:', err);
      }
    }

    const handleLocal = (e: Event) => {
      const customEvent = e as CustomEvent<{ sessionId: string }>;
      if (customEvent.detail?.sessionId === sessionId) {
        const map = safeGetSessions();
        if (map[sessionId]) {
          onUpdate(map[sessionId]!);
        }
      }
    };

    window.addEventListener('rateit-group-change', handleLocal);

    return () => {
      if (unsubFirestore) unsubFirestore();
      window.removeEventListener('rateit-group-change', handleLocal);
    };
  },
};
