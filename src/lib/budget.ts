import type { BudgetBand } from '@/types/restaurant';

export interface BudgetBandInfo {
  id: BudgetBand;
  /** Short rupee symbols shown on cards. */
  symbol: string;
  /** Label used in the budget filter (cost for two people). */
  label: string;
  min: number;
  max: number;
}

const BUDGET: BudgetBandInfo = { id: 'budget', symbol: '₹', label: 'Under ₹300', min: 0, max: 299 };
const MID: BudgetBandInfo = { id: 'mid', symbol: '₹₹', label: '₹300 – ₹700', min: 300, max: 700 };
const PREMIUM: BudgetBandInfo = {
  id: 'premium',
  symbol: '₹₹₹',
  label: 'Above ₹700',
  min: 701,
  max: Number.POSITIVE_INFINITY,
};

export const BUDGET_BANDS: readonly BudgetBandInfo[] = [BUDGET, MID, PREMIUM];

/** Maps an approximate cost for two (INR) to its price band. */
export function getBudgetBand(costForTwo: number): BudgetBandInfo {
  return BUDGET_BANDS.find((band) => costForTwo >= band.min && costForTwo <= band.max) ?? PREMIUM;
}
