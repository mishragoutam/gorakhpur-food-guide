import { FlaskConical, SearchX, TriangleAlert } from 'lucide-react';
import { useMemo } from 'react';
import { ActiveFilters } from '@/components/home/ActiveFilters';
import { FilterBar } from '@/components/home/FilterBar';
import { RestaurantCard } from '@/components/home/RestaurantCard';
import { RestaurantCardSkeleton } from '@/components/home/RestaurantCardSkeleton';
import { Button, ButtonLink } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { StatePanel } from '@/components/ui/StatePanel';
import { useRestaurants } from '@/hooks/useRestaurants';
import type { SetFilter } from '@/hooks/useRestaurantFilters';
import { RESULTS_HEADING_ID, RESULTS_SECTION_ID, ROUTES } from '@/lib/routes';
import { filterRestaurants, getCuisineOptions, hasActiveFilters } from '@/lib/restaurantFilters';
import { storageService } from '@/services/storageService';
import type { Restaurant, RestaurantFilters } from '@/types/restaurant';

const NO_RESTAURANTS: readonly Restaurant[] = [];
const SKELETON_COUNT = 3;
const GRID = 'grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6';

interface RestaurantListingProps {
  filters: RestaurantFilters;
  onFilterChange: SetFilter;
  onResetFilters: () => void;
}

/** Keeps the fictional data honest: nobody should mistake these ratings for live reviews. */
function DemoNotice() {
  return (
    <p className="mt-5 flex max-w-2xl items-start gap-3 rounded-2xl bg-accent-50 px-4 py-3 text-sm text-accent-700 ring-1 ring-accent-200">
      <FlaskConical aria-hidden="true" size={18} className="mt-0.5 shrink-0" />
      <span>
        <strong className="font-semibold">Demo preview.</strong> The restaurants, ratings and reviews below are
        fictional samples that show how the site will look. Real listings and live customer reviews are coming
        later.
      </span>
    </p>
  );
}

export function RestaurantListing({ filters, onFilterChange, onResetFilters }: RestaurantListingProps) {
  const restaurants = useRestaurants();
  const all = restaurants.status === 'ready' ? restaurants.data : NO_RESTAURANTS;

  const cuisineOptions = useMemo(() => getCuisineOptions(all), [all]);
  const visible = useMemo(() => filterRestaurants(all, filters), [all, filters]);

  const isFiltering = hasActiveFilters(filters);
  const isSampleData = all.length > 0 && all.every((restaurant) => restaurant.isDemo);
  const showDemoNotice = restaurants.status !== 'ready' || all.some((restaurant) => restaurant.isDemo);

  return (
    <section id={RESULTS_SECTION_ID} aria-labelledby={RESULTS_HEADING_ID} className="py-12 sm:py-16">
      <Container>
        <SectionHeading id={RESULTS_HEADING_ID} title="Explore Restaurants in Gorakhpur" focusable />
        {showDemoNotice ? <DemoNotice /> : null}

        <div className="mt-8">
          <FilterBar filters={filters} cuisineOptions={cuisineOptions} onFilterChange={onFilterChange} />
        </div>

        {restaurants.status === 'ready' ? (
          <>
            <div className="mt-6 flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
              <p role="status" className="text-sm font-medium text-ink-600">
                Showing {visible.length} of {all.length} {isSampleData ? 'sample restaurants' : 'restaurants'}
              </p>
              {isFiltering ? (
                <Button variant="ghost" size="sm" onClick={onResetFilters}>
                  Clear all filters
                </Button>
              ) : null}
            </div>

            <div className="mt-3 empty:mt-0">
              <ActiveFilters filters={filters} onFilterChange={onFilterChange} />
            </div>

            <div className="mt-6">
              {visible.length > 0 ? (
                <ul role="list" className={GRID}>
                  {visible.map((restaurant) => (
                    <li key={restaurant.id}>
                      <RestaurantCard restaurant={restaurant} />
                    </li>
                  ))}
                </ul>
              ) : (
                <StatePanel
                  icon={SearchX}
                  title={all.length === 0 ? 'No restaurants yet' : 'No restaurants match your filters'}
                  description={
                    all.length === 0
                      ? 'All restaurant data has been cleared. Register your eatery to get started, or restore sample data.'
                      : 'Try a different search term, or clear a filter to see every restaurant again.'
                  }
                  action={
                    all.length === 0 ? (
                      <div className="flex flex-wrap items-center justify-center gap-3">
                        <ButtonLink to={ROUTES.ownerRegister}>Register Your Restaurant</ButtonLink>
                        <Button
                          variant="secondary"
                          onClick={() => {
                            storageService.loadDemoData();
                          }}
                        >
                          Load Sample Data
                        </Button>
                      </div>
                    ) : isFiltering ? (
                      <Button onClick={onResetFilters}>Clear all filters</Button>
                    ) : undefined
                  }
                />
              )}
            </div>
          </>
        ) : null}

        {restaurants.status === 'loading' ? (
          <div className="mt-8">
            <p role="status" className="sr-only">
              Loading restaurants…
            </p>
            <div aria-busy="true" className={GRID}>
              {Array.from({ length: SKELETON_COUNT }, (_, index) => (
                <RestaurantCardSkeleton key={index} />
              ))}
            </div>
          </div>
        ) : null}

        {restaurants.status === 'error' ? (
          <div className="mt-8">
            <StatePanel
              icon={TriangleAlert}
              title="We couldn't load the restaurants"
              description="Something went wrong while loading the list. Please try again."
              action={<Button onClick={restaurants.reload}>Try again</Button>}
            />
          </div>
        ) : null}
      </Container>
    </section>
  );
}
