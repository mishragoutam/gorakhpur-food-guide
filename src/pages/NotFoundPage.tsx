import { SearchX, Utensils, Home, Compass } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ButtonLink } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { usePageTitle } from '@/hooks/usePageTitle';
import { ROUTES } from '@/lib/routes';

export default function NotFoundPage() {
  usePageTitle('Page Not Found');

  return (
    <section className="py-16 sm:py-24">
      <Container>
        <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
          {/* Visual 404 Artwork Badge */}
          <div className="relative mb-6">
            <span className="grid size-20 place-items-center rounded-3xl bg-accent-50 text-accent-700 ring-1 ring-accent-200 shadow-sm">
              <SearchX aria-hidden="true" size={38} />
            </span>
            <span className="absolute -bottom-2 -right-2 flex size-8 items-center justify-center rounded-full bg-forest-600 text-white shadow-md">
              <Utensils size={14} />
            </span>
          </div>

          <span className="font-display text-5xl font-extrabold tracking-tight text-accent-700 sm:text-6xl">
            404
          </span>

          <h1 className="mt-4 text-3xl font-extrabold text-ink-900 sm:text-4xl">
            Page not found
          </h1>

          <p className="mt-3 text-base text-ink-600 sm:text-lg max-w-md">
            Looks like this dish isn't on the menu! The page you are looking for does not exist or may have been moved.
          </p>

          {/* Quick suggestions */}
          <div className="mt-8 rounded-2xl border border-cream-200 bg-cream-50/70 p-4 text-xs text-ink-600 max-w-sm w-full">
            <p className="font-bold text-ink-800 mb-2">Popular searches in Gorakhpur:</p>
            <div className="flex flex-wrap justify-center gap-1.5">
              {['Golghar Cafes', 'North Indian', 'Pure Veg Thali', 'Betiahata Sweets'].map((tag) => (
                <Link
                  key={tag}
                  to={`${ROUTES.home}#search`}
                  className="rounded-full bg-white px-2.5 py-1 font-semibold text-ink-800 border border-cream-300 hover:border-forest-600 transition"
                >
                  {tag}
                </Link>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <ButtonLink to={ROUTES.home}>
              <Home size={16} className="mr-1.5" />
              Back to home
            </ButtonLink>
            <ButtonLink to={ROUTES.explore} variant="secondary">
              <Compass size={16} className="mr-1.5" />
              Explore Restaurants
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
