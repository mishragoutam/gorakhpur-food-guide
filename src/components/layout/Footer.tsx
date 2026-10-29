import { Link } from 'react-router-dom';
import { BRAND_NAME, Logo } from '@/components/layout/Logo';
import { Container } from '@/components/ui/Container';
import { ROUTES } from '@/lib/routes';

const FOOTER_LINKS = [
  { label: 'About', to: ROUTES.about },
  { label: 'Contact', to: ROUTES.contact },
  { label: 'Privacy Policy', to: ROUTES.privacy },
  { label: 'Terms', to: ROUTES.terms },
  { label: 'Decide Together', to: ROUTES.groupDining },
  { label: 'My Reviews', to: ROUTES.myReviews },
  { label: 'Owner Dashboard', to: ROUTES.ownerDashboard },
  { label: 'Admin Panel', to: ROUTES.admin },
] as const;

const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="border-t border-cream-300 bg-cream-50 pb-[env(safe-area-inset-bottom)]">
      <Container className="py-10 sm:py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <Logo />
            <p className="mt-4 text-sm text-ink-600">
              Discover local restaurants in Gorakhpur, Uttar Pradesh, read what customers say, and submit verified table reviews.
            </p>
          </div>

          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-ink-800">
              {FOOTER_LINKS.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="rounded-md py-1 transition-colors hover:text-accent-700">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-8 flex flex-col gap-2 border-t border-cream-300 pt-6 text-sm text-ink-500 sm:flex-row sm:justify-between">
          <p>
            © {CURRENT_YEAR} {BRAND_NAME}. All rights reserved.
          </p>
          <p>Discover authentic tastes, local favorites, and verified diner ratings across Gorakhpur.</p>
        </div>
      </Container>
    </footer>
  );
}
