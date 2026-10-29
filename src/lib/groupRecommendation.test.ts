import { describe, expect, it } from 'vitest';
import { demoRestaurants } from '@/data/demoRestaurants';
import { recommendGroupRestaurants } from '@/lib/groupRecommendation';
import type { ParticipantPreference } from '@/types/groupDining';
import type { Restaurant } from '@/types/restaurant';

const mockRestaurants: Restaurant[] = [
  {
    id: 'rest-north-indian',
    name: 'Kesar Darbar Kitchen',
    area: 'Golghar',
    city: 'Gorakhpur',
    description: 'Mughlai & North Indian curries.',
    categories: ['north-indian'],
    cuisines: ['North Indian', 'Mughlai'],
    popularDishes: ['Dal Makhani', 'Paneer Lababdar'],
    costForTwo: 700, // ₹350/person
    averageRating: 4.6,
    reviewCount: 200,
    imageUrl: null,
    isDemo: false,
    diet: 'both',
  },
  {
    id: 'rest-pure-veg-sweets',
    name: 'Rasraj Sweets & Chaat',
    area: 'Asuran Chowk',
    city: 'Gorakhpur',
    description: 'Pure desi ghee sweets & samosas.',
    categories: ['sweets', 'street-food'],
    cuisines: ['Mithai', 'Street Food'],
    popularDishes: ['Samosa', 'Kaju Katli'],
    costForTwo: 300, // ₹150/person
    averageRating: 4.4,
    reviewCount: 150,
    imageUrl: null,
    isDemo: false,
    diet: 'veg',
  },
  {
    id: 'rest-chinese-wok',
    name: 'Lotus Wok House',
    area: 'Civil Lines',
    city: 'Gorakhpur',
    description: 'Noodles, dim sums and momos.',
    categories: ['chinese'],
    cuisines: ['Chinese', 'Indo-Chinese'],
    popularDishes: ['Hakka Noodles', 'Steamed Momos'],
    costForTwo: 600, // ₹300/person
    averageRating: 4.3,
    reviewCount: 180,
    imageUrl: null,
    isDemo: false,
    diet: 'both',
  },
  {
    id: 'rest-pure-nonveg-grill',
    name: 'Strict Nonveg BBQ',
    area: 'Golghar',
    city: 'Gorakhpur',
    description: 'Only meat BBQ, no veg dishes.',
    categories: ['north-indian'],
    cuisines: ['BBQ', 'Nonveg'],
    popularDishes: ['Mutton Seekh'],
    costForTwo: 900, // ₹450/person
    averageRating: 4.5,
    reviewCount: 90,
    imageUrl: null,
    isDemo: false,
    diet: 'nonveg', // Pure non-veg venue
  },
  {
    id: 'rest-super-expensive',
    name: 'Royal Palace Luxury Banquet',
    area: 'Civil Lines',
    city: 'Gorakhpur',
    description: 'High-end fine dining.',
    categories: ['north-indian'],
    cuisines: ['North Indian'],
    popularDishes: ['Royal Thali'],
    costForTwo: 3000, // ₹1500/person
    averageRating: 4.8,
    reviewCount: 50,
    imageUrl: null,
    isDemo: false,
    diet: 'both',
  },
];

describe('groupRecommendation engine', () => {
  it('1. Returns at most 3 recommendations', () => {
    const participants: ParticipantPreference[] = [
      {
        participantId: 'p1',
        name: 'Aarav',
        diet: 'flexible',
        maxBudgetPerPerson: 500,
        cuisines: ['North Indian'],
        spiceLevel: 'medium',
        submittedAt: '2026-10-29',
      },
    ];

    const recs = recommendGroupRestaurants(mockRestaurants, participants);
    expect(recs.length).toBeLessThanOrEqual(3);
    expect(recs.length).toBeGreaterThan(0);
  });

  it('2. Enforces hard dietary constraint: eliminates pure non-veg restaurant if any member is strictly veg', () => {
    const participants: ParticipantPreference[] = [
      {
        participantId: 'p1',
        name: 'Meera',
        diet: 'veg', // Strict veg
        maxBudgetPerPerson: 600,
        cuisines: ['North Indian', 'Chinese'],
        spiceLevel: 'mild',
        submittedAt: '2026-10-29',
      },
      {
        participantId: 'p2',
        name: 'Kabir',
        diet: 'nonveg',
        maxBudgetPerPerson: 800,
        cuisines: ['BBQ'],
        spiceLevel: 'spicy',
        submittedAt: '2026-10-29',
      },
    ];

    const recs = recommendGroupRestaurants(mockRestaurants, participants);
    const recommendedIds = recs.map((r) => r.restaurant.id);

    // The pure non-veg venue MUST NOT be recommended
    expect(recommendedIds).not.toContain('rest-pure-nonveg-grill');
    // But venues offering both veg & non-veg can be recommended
    expect(recs.some((r) => r.restaurant.diet === 'both' || r.restaurant.diet === 'veg')).toBe(true);
  });

  it('3. Enforces hard budget ceiling: eliminates restaurants heavily exceeding member budget', () => {
    const participants: ParticipantPreference[] = [
      {
        participantId: 'p1',
        name: 'Student Rohan',
        diet: 'flexible',
        maxBudgetPerPerson: 400, // ₹400 max
        cuisines: ['North Indian'],
        spiceLevel: 'medium',
        submittedAt: '2026-10-29',
      },
    ];

    const recs = recommendGroupRestaurants(mockRestaurants, participants);
    const recommendedIds = recs.map((r) => r.restaurant.id);

    // ₹1500/person venue must be excluded
    expect(recommendedIds).not.toContain('rest-super-expensive');
  });

  it('4. Provides transparent explanations and compromise details', () => {
    const participants: ParticipantPreference[] = [
      {
        participantId: 'p1',
        name: 'Aarav',
        diet: 'veg',
        maxBudgetPerPerson: 400,
        cuisines: ['North Indian'],
        spiceLevel: 'medium',
        preferredAreas: ['Golghar'],
        submittedAt: '2026-10-29',
      },
    ];

    const recs = recommendGroupRestaurants(mockRestaurants, participants);
    expect(recs.length).toBeGreaterThan(0);

    const top = recs[0]!;
    expect(top.score).toBeGreaterThan(50);
    expect(top.explanation).toContain(top.restaurant.name);
    expect(Array.isArray(top.matchedPreferences)).toBe(true);
    expect(Array.isArray(top.compromises)).toBe(true);
  });

  it('5. Handles empty restaurant lists or empty participants gracefully', () => {
    expect(recommendGroupRestaurants([], [])).toEqual([]);
    expect(recommendGroupRestaurants(demoRestaurants, [])).toEqual([]);
    expect(recommendGroupRestaurants([], [{
      participantId: 'p1',
      name: 'Solo',
      diet: 'flexible',
      maxBudgetPerPerson: 500,
      cuisines: [],
      spiceLevel: 'any',
      submittedAt: '2026-10-29',
    }])).toEqual([]);
  });
});
