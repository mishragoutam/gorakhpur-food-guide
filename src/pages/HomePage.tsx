import { CategorySection } from '@/components/home/CategorySection';
import { Hero } from '@/components/home/Hero';
import { OwnerCta } from '@/components/home/OwnerCta';
import { RestaurantListing } from '@/components/home/RestaurantListing';
import { HowItWorksSection } from '@/components/home/HowItWorksSection';
import { AiInsightsSection } from '@/components/home/AiInsightsSection';
import { GroupDiningBanner } from '@/components/home/GroupDiningBanner';
import { FoodTrailsSection } from '@/components/home/FoodTrailsSection';
import { useRestaurantFilters } from '@/hooks/useRestaurantFilters';
import { usePageTitle } from '@/hooks/usePageTitle';
import { RESULTS_HEADING_ID } from '@/lib/routes';
import { scrollToId } from '@/lib/scroll';
import type { CategoryId } from '@/types/restaurant';

/** Brings the listing into view and moves focus to its heading, so results are announced. */
function jumpToResults() {
  scrollToId(RESULTS_HEADING_ID, { focus: true });
}

export default function HomePage() {
  usePageTitle();
  const { filters, setFilter, toggleCategory, resetFilters } = useRestaurantFilters();

  const handleCategorySelect = (category: CategoryId) => {
    const isSelecting = filters.category !== category;
    toggleCategory(category);
    // Clearing a category keeps the reader where they are; choosing one takes them to the results.
    if (isSelecting) jumpToResults();
  };

  const handleSuggestion = (term: string) => {
    setFilter('query', term);
    jumpToResults();
  };

  return (
    <>
      <Hero
        query={filters.query}
        onQueryChange={(query) => setFilter('query', query)}
        area={filters.area}
        onAreaChange={(area) => setFilter('area', area)}
        onSearch={jumpToResults}
        onSuggestionSelect={handleSuggestion}
      />
      <CategorySection selected={filters.category} onSelect={handleCategorySelect} />
      <GroupDiningBanner />
      <RestaurantListing filters={filters} onFilterChange={setFilter} onResetFilters={resetFilters} />
      <FoodTrailsSection onSelectTrail={handleSuggestion} />
      <HowItWorksSection />
      <AiInsightsSection />
      <OwnerCta />
    </>
  );
}
