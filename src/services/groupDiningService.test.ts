import { describe, expect, it, beforeEach } from 'vitest';
import { demoRestaurants } from '@/data/demoRestaurants';
import { groupDiningService } from '@/services/groupDiningService';
import type { ParticipantPreference } from '@/types/groupDining';

describe('groupDiningService', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('creates a session with initial collecting state', async () => {
    const session = await groupDiningService.createSession({
      title: 'Family Feast',
      creatorName: 'Rohan',
      targetBudget: 500,
      targetArea: 'Golghar',
    });

    expect(session.id.startsWith('grp-')).toBe(true);
    expect(session.title).toBe('Family Feast');
    expect(session.creatorName).toBe('Rohan');
    expect(session.status).toBe('collecting');
    expect(session.participants).toHaveLength(0);
  });

  it('submits preferences and updates existing participant if ID matches', async () => {
    const session = await groupDiningService.createSession({
      title: 'Friends Outing',
      creatorName: 'Host',
    });

    const pref1: ParticipantPreference = {
      participantId: 'user-1',
      name: 'Aarav',
      diet: 'veg',
      maxBudgetPerPerson: 400,
      cuisines: ['North Indian'],
      spiceLevel: 'medium',
      submittedAt: new Date().toISOString(),
    };

    const updated = await groupDiningService.submitPreferences(session.id, pref1);
    expect(updated.participants).toHaveLength(1);
    expect(updated.participants[0]?.name).toBe('Aarav');

    // Updating same user
    const pref1Updated: ParticipantPreference = {
      ...pref1,
      maxBudgetPerPerson: 450,
    };
    const updatedAgain = await groupDiningService.submitPreferences(session.id, pref1Updated);
    expect(updatedAgain.participants).toHaveLength(1);
    expect(updatedAgain.participants[0]?.maxBudgetPerPerson).toBe(450);
  });

  it('generates recommendations and transitions status to voting', async () => {
    const session = await groupDiningService.createSession({
      title: 'Lunch Group',
      creatorName: 'Priya',
    });

    await groupDiningService.submitPreferences(session.id, {
      participantId: 'user-1',
      name: 'Priya',
      diet: 'veg',
      maxBudgetPerPerson: 500,
      cuisines: ['Chinese'],
      spiceLevel: 'medium',
      submittedAt: new Date().toISOString(),
    });

    const votingSession = await groupDiningService.generateRecommendations(
      session.id,
      demoRestaurants,
    );

    expect(votingSession.status).toBe('voting');
    expect(votingSession.recommendations.length).toBeGreaterThan(0);
    expect(votingSession.recommendations.length).toBeLessThanOrEqual(3);
  });

  it('records votes, allows vote modification (1 vote per user), and finalizes consensus', async () => {
    const session = await groupDiningService.createSession({
      title: 'Dinner Vote',
      creatorName: 'Aarav',
    });

    await groupDiningService.submitPreferences(session.id, {
      participantId: 'user-1',
      name: 'Aarav',
      diet: 'flexible',
      maxBudgetPerPerson: 500,
      cuisines: ['Chinese'],
      spiceLevel: 'medium',
      submittedAt: new Date().toISOString(),
    });

    const votingSession = await groupDiningService.generateRecommendations(
      session.id,
      demoRestaurants,
    );
    const rec1 = votingSession.recommendations[0]!.restaurant.id;
    const rec2 = votingSession.recommendations[1]!.restaurant.id;

    // User 1 votes for rec1
    let sess = await groupDiningService.castVote(session.id, {
      participantId: 'user-1',
      participantName: 'Aarav',
      restaurantId: rec1,
      votedAt: new Date().toISOString(),
    });
    expect(sess.votes).toHaveLength(1);
    expect(sess.votes[0]?.restaurantId).toBe(rec1);

    // User 1 changes vote to rec2 (preventing duplicate votes)
    sess = await groupDiningService.castVote(session.id, {
      participantId: 'user-1',
      participantName: 'Aarav',
      restaurantId: rec2,
      votedAt: new Date().toISOString(),
    });
    expect(sess.votes).toHaveLength(1);
    expect(sess.votes[0]?.restaurantId).toBe(rec2);

    // Finalize decision
    const decided = await groupDiningService.finalizeDecision(session.id);
    expect(decided.status).toBe('decided');
    expect(decided.winningRestaurantId).toBe(rec2);
  });
});
