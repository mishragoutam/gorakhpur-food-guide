import { supabase } from '@/lib/supabase';
import { recommendGroupRestaurants } from '@/lib/groupRecommendation';
import type {
  GroupSession,
  GroupSessionStatus,
  GroupVote,
  ParticipantPreference,
  ScoredRecommendation,
} from '@/types/groupDining';
import type { Restaurant } from '@/types/restaurant';

const STORAGE_KEY_SESSIONS = 'rateit_group_sessions_v1';
const STORAGE_KEY_CURRENT_PARTICIPANT = 'rateit_group_participant_id';
const SUPABASE_TABLE = 'group_sessions';

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

export function toGroupSessionRow(session: GroupSession): Record<string, unknown> {
  return {
    id: session.id,
    title: session.title,
    creator_id: session.creatorId,
    creator_name: session.creatorName,
    target_budget: session.targetBudget ?? null,
    target_area: session.targetArea ?? null,
    status: session.status,
    participants: session.participants,
    recommendations: session.recommendations,
    votes: session.votes,
    winning_restaurant_id: session.winningRestaurantId ?? null,
    created_at: session.createdAt,
    updated_at: session.updatedAt,
  };
}

export function fromGroupSessionRow(row: Record<string, unknown>): GroupSession {
  return {
    id: String(row.id),
    title: String(row.title || ''),
    creatorId: String(row.creator_id ?? row.creatorId ?? ''),
    creatorName: String(row.creator_name ?? row.creatorName ?? 'Host'),
    targetBudget:
      row.target_budget != null
        ? Number(row.target_budget)
        : row.targetBudget != null
          ? Number(row.targetBudget)
          : undefined,
    targetArea: (row.target_area ?? row.targetArea ?? undefined) as string | undefined,
    status: ((row.status as string) || 'collecting') as GroupSessionStatus,
    participants: (Array.isArray(row.participants) ? row.participants : []) as ParticipantPreference[],
    recommendations: (Array.isArray(row.recommendations) ? row.recommendations : []) as ScoredRecommendation[],
    votes: (Array.isArray(row.votes) ? row.votes : []) as GroupVote[],
    winningRestaurantId: (row.winning_restaurant_id ?? row.winningRestaurantId ?? undefined) as string | undefined,
    createdAt: String(row.created_at ?? row.createdAt ?? new Date().toISOString()),
    updatedAt: String(row.updated_at ?? row.updatedAt ?? new Date().toISOString()),
  };
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

async function persistSessionToSupabase(session: GroupSession): Promise<void> {
  if (!supabase) return;
  try {
    const row = toGroupSessionRow(session);
    const { error } = await supabase
      .from(SUPABASE_TABLE)
      .upsert(row, { onConflict: 'id' });
    if (error) {
      console.warn('[GroupDining] Supabase save warning:', error.message);
    }
  } catch (err) {
    console.warn('[GroupDining] Supabase save error:', err);
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

    // Save to Supabase if connected
    await persistSessionToSupabase(session);

    return session;
  },

  /**
   * Fetches an existing session by ID.
   */
  async getSession(sessionId: string): Promise<GroupSession | null> {
    if (!sessionId) return null;

    // Check cloud first if connected
    if (supabase) {
      try {
        const { data, error } = await supabase
          .from(SUPABASE_TABLE)
          .select('*')
          .eq('id', sessionId)
          .maybeSingle();

        if (!error && data) {
          const cloudSession = fromGroupSessionRow(data as Record<string, unknown>);
          safeSaveSession(cloudSession);
          return cloudSession;
        }
      } catch (err) {
        console.warn('[GroupDining] Supabase fetch warning:', err);
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
    await persistSessionToSupabase(session);

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
    await persistSessionToSupabase(session);

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
    await persistSessionToSupabase(session);

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
    await persistSessionToSupabase(session);

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
    await persistSessionToSupabase(session);

    return session;
  },

  /**
   * Subscribes to real-time changes on this session via Supabase Realtime channel.
   */
  subscribe(sessionId: string, onUpdate: (session: GroupSession) => void): () => void {
    let channel: ReturnType<NonNullable<typeof supabase>['channel']> | undefined;

    if (supabase) {
      try {
        const channelName = `group-session-${sessionId}-${Math.random().toString(36).slice(2, 7)}`;
        channel = supabase
          .channel(channelName)
          .on(
            'postgres_changes',
            {
              event: '*',
              schema: 'public',
              table: SUPABASE_TABLE,
              filter: `id=eq.${sessionId}`,
            },
            (payload) => {
              if (payload.new && (payload.new as Record<string, unknown>).id) {
                const cloudSession = fromGroupSessionRow(payload.new as Record<string, unknown>);
                safeSaveSession(cloudSession);
                onUpdate(cloudSession);
              }
            },
          )
          .subscribe((status) => {
            if (status === 'CHANNEL_ERROR') {
              console.warn('[GroupDining] Realtime group session subscription error');
            }
          });
      } catch (err) {
        console.warn('[GroupDining] Supabase real-time subscribe warning:', err);
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
      if (channel && supabase) {
        supabase.removeChannel(channel);
      }
      window.removeEventListener('rateit-group-change', handleLocal);
    };
  },
};
