import type { Restaurant } from '@/types/restaurant';

export type DietaryPreference = 'veg' | 'nonveg' | 'vegan' | 'flexible';

export type SpicePreference = 'mild' | 'medium' | 'spicy' | 'any';

export interface ParticipantPreference {
  participantId: string;
  name: string;
  diet: DietaryPreference;
  maxBudgetPerPerson: number; // in INR
  cuisines: string[];
  spiceLevel: SpicePreference;
  preferredAreas?: string[];
  mustHaves?: string[];
  avoidFoods?: string[];
  wantsDessert?: boolean;
  allergyNotes?: string;
  submittedAt: string;
}

export interface GroupVote {
  participantId: string;
  participantName: string;
  restaurantId: string;
  votedAt: string;
}

export interface ScoredRecommendation {
  restaurant: Restaurant;
  score: number; // 0 - 100
  matchPercentage: number;
  estimatedCostPerPerson: number;
  matchedPreferences: string[];
  compromises: string[];
  dietaryFit: 'full' | 'partial' | 'uncertain';
  budgetFit: 'under' | 'match' | 'over';
  explanation: string;
}

export type GroupSessionStatus = 'collecting' | 'voting' | 'decided' | 'expired';

export interface GroupSession {
  id: string;
  title: string;
  creatorId: string;
  creatorName: string;
  targetBudget?: number;
  targetArea?: string;
  status: GroupSessionStatus;
  participants: ParticipantPreference[];
  recommendations: ScoredRecommendation[];
  votes: GroupVote[];
  winningRestaurantId?: string;
  createdAt: string;
  updatedAt: string;
}
