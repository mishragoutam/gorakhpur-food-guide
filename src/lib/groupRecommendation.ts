import type { ParticipantPreference, ScoredRecommendation } from '@/types/groupDining';
import type { Restaurant } from '@/types/restaurant';

/**
 * Deterministic recommendation engine for group dining.
 * Applies hard dietary/budget constraints first, then evaluates multi-member
 * satisfaction with fair compromise balancing (weighted harmonic/minimum score penalty)
 * so individual preferences are respected without majority tyranny.
 */
export function recommendGroupRestaurants(
  restaurants: readonly Restaurant[],
  participants: ParticipantPreference[],
): ScoredRecommendation[] {
  if (!restaurants.length || !participants.length) {
    return [];
  }

  // 1. HARD CONSTRAINTS FILTER
  const hasStrictVeg = participants.some((p) => p.diet === 'veg');
  const hasStrictVegan = participants.some((p) => p.diet === 'vegan');
  const maxAllowableBudget = Math.max(...participants.map((p) => p.maxBudgetPerPerson || 1000));

  const eligible = restaurants.filter((r) => {
    // Exclude suspended restaurants
    if (r.status === 'Suspended') return false;

    // Hard dietary constraint: If any participant is strictly veg,
    // the venue MUST support vegetarian dining (diet: 'veg' or 'both').
    if (hasStrictVeg && r.diet === 'nonveg') {
      return false;
    }

    // Hard budget constraint: Per-person cost (costForTwo / 2) cannot exceed
    // the most lenient member's max budget by more than 40%.
    const estCostPerPerson = Math.round(r.costForTwo / 2);
    if (estCostPerPerson > maxAllowableBudget * 1.4) {
      return false;
    }

    return true;
  });

  if (!eligible.length) {
    return [];
  }

  // 2. MULTI-MEMBER SCORING
  const scoredList: ScoredRecommendation[] = eligible.map((r) => {
    const estCostPerPerson = Math.round(r.costForTwo / 2);
    const memberScores: number[] = [];
    const matchedPreferences: string[] = [];
    const compromises: string[] = [];

    // Tally dietary fit
    let dietaryFit: 'full' | 'partial' | 'uncertain' = 'full';
    if (hasStrictVegan) {
      // Gorakhpur listings typically don't have explicit vegan certification
      dietaryFit = 'uncertain';
      compromises.push('Vegan options must be verified with restaurant staff');
    }

    for (const p of participants) {
      let pScore = 0;

      // A. Diet Match (30 pts)
      if (p.diet === 'flexible') {
        pScore += 30;
      } else if (p.diet === 'veg') {
        if (r.diet === 'veg') {
          pScore += 30;
          if (!matchedPreferences.includes('100% Pure Vegetarian')) {
            matchedPreferences.push('100% Pure Vegetarian');
          }
        } else if (r.diet === 'both') {
          pScore += 24;
          if (!matchedPreferences.includes('Dedicated vegetarian options available')) {
            matchedPreferences.push('Dedicated vegetarian options available');
          }
        }
      } else if (p.diet === 'nonveg') {
        if (r.diet === 'both' || r.diet === 'nonveg') {
          pScore += 30;
        } else {
          pScore += 12; // Vegetarian venue for a non-veg diner is acceptable but not optimal
          compromises.push(`Pure veg menu for ${p.name} (no non-veg options)`);
        }
      } else if (p.diet === 'vegan') {
        pScore += r.diet === 'veg' ? 22 : 18;
      }

      // B. Cuisine & Dish Match (25 pts)
      const userCuisines = (p.cuisines || []).map((c) => c.toLowerCase());
      const restCuisines = r.cuisines.map((c) => c.toLowerCase());
      const restDishes = (r.popularDishes || []).map((d) => d.toLowerCase());

      let cuisineMatched = false;
      for (const uc of userCuisines) {
        if (restCuisines.some((rc) => rc.includes(uc) || uc.includes(rc))) {
          pScore += 25;
          cuisineMatched = true;
          const matchLabel = `Matches ${p.name}'s craving for ${uc}`;
          if (!matchedPreferences.includes(matchLabel)) {
            matchedPreferences.push(matchLabel);
          }
          break;
        }
      }

      if (!cuisineMatched && userCuisines.length > 0) {
        // Check popular dishes
        const matchedDish = restDishes.find((rd) =>
          userCuisines.some((uc) => rd.includes(uc) || uc.includes(rd)),
        );
        if (matchedDish) {
          pScore += 18;
          matchedPreferences.push(`Offers ${matchedDish} for ${p.name}`);
        } else {
          pScore += 8; // Multi-cuisine baseline
        }
      } else if (userCuisines.length === 0) {
        pScore += 20; // Open to any cuisine
      }

      // C. Budget Fit (20 pts)
      const pBudget = p.maxBudgetPerPerson || 500;
      if (estCostPerPerson <= pBudget) {
        pScore += 20;
      } else if (estCostPerPerson <= pBudget * 1.15) {
        pScore += 14;
        compromises.push(`Slightly above ${p.name}'s budget (₹${estCostPerPerson} vs ₹${pBudget})`);
      } else {
        pScore += 6;
        compromises.push(`Exceeds ${p.name}'s preferred budget of ₹${pBudget}`);
      }

      // D. Locality & Area Match (15 pts)
      const preferredAreas = (p.preferredAreas || []).map((a) => a.toLowerCase());
      if (preferredAreas.length === 0) {
        pScore += 15;
      } else if (preferredAreas.some((pa) => r.area.toLowerCase().includes(pa))) {
        pScore += 15;
        const areaLabel = `Located in ${r.area}`;
        if (!matchedPreferences.includes(areaLabel)) {
          matchedPreferences.push(areaLabel);
        }
      } else {
        pScore += 8;
      }

      // E. Ambience, Dessert & Rating (10 pts)
      let bonus = 0;
      if (p.wantsDessert) {
        const hasDessert =
          r.categories.includes('sweets') ||
          (r.menu || []).some((m) => m.category.toLowerCase().includes('dessert'));
        if (hasDessert) {
          bonus += 5;
          if (!matchedPreferences.includes('Dessert options on menu')) {
            matchedPreferences.push('Dessert options on menu');
          }
        }
      } else {
        bonus += 3;
      }

      // Quality rating baseline bonus (up to 5 pts based on averageRating)
      bonus += Math.min(5, Math.round(((r.averageRating - 3.5) / 1.5) * 5));
      pScore += Math.max(0, bonus);

      memberScores.push(Math.min(100, pScore));
    }

    // 3. BALANCED FAIRNESS COMPUTATION
    // Calculate mean and minimum member satisfaction
    const sum = memberScores.reduce((acc, s) => acc + s, 0);
    const avgScore = sum / memberScores.length;
    const minScore = Math.min(...memberScores);

    // Weighted consensus: 60% average score, 40% minimum score
    // This penalizes candidates that leave any member heavily dissatisfied
    const compositeScore = Math.round(0.6 * avgScore + 0.4 * minScore);

    // Budget fit category
    let budgetFit: 'under' | 'match' | 'over' = 'match';
    const avgBudget =
      participants.reduce((a, b) => a + (b.maxBudgetPerPerson || 500), 0) / participants.length;
    if (estCostPerPerson < avgBudget * 0.85) {
      budgetFit = 'under';
      matchedPreferences.push(`Under group budget (~₹${estCostPerPerson}/person)`);
    } else if (estCostPerPerson > avgBudget * 1.1) {
      budgetFit = 'over';
    } else {
      budgetFit = 'match';
      matchedPreferences.push(`Fits average group budget (~₹${estCostPerPerson}/person)`);
    }

    // High rating highlight
    if (r.averageRating >= 4.4) {
      matchedPreferences.push(`High diner rating (${r.averageRating}★)`);
    }

    // Explanation formulation
    let explanation = `${r.name} scored ${compositeScore}% overall match for your group of ${participants.length}. `;
    if (matchedPreferences.length) {
      explanation += `Key fits: ${matchedPreferences.slice(0, 3).join(', ')}. `;
    }
    if (compromises.length) {
      explanation += `Note: ${compromises.slice(0, 2).join(', ')}.`;
    }

    return {
      restaurant: r,
      score: compositeScore,
      matchPercentage: compositeScore,
      estimatedCostPerPerson: estCostPerPerson,
      matchedPreferences: Array.from(new Set(matchedPreferences)),
      compromises: Array.from(new Set(compromises)),
      dietaryFit,
      budgetFit,
      explanation: explanation.trim(),
    };
  });

  // Sort descending by balanced composite score
  scoredList.sort((a, b) => b.score - a.score || b.restaurant.averageRating - a.restaurant.averageRating);

  // Return the best 3 (or fewer if fewer qualify)
  return scoredList.slice(0, 3);
}
