import { LogIn, Menu, X, User } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import type { Location } from 'react-router-dom';
import { Logo } from '@/components/layout/Logo';
import { ButtonLink } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { CustomerAuthModal } from '@/components/auth/CustomerAuthModal';
import { cn } from '@/lib/cn';
import { RESULTS_SECTION_ID, ROUTES } from '@/lib/routes';
import { storageService } from '@/services/storageService';

interface NavItem {
  label: string;
  to: string;
  isActive: (location: Location) => boolean;
}

const onHome = (location: Location) => location.pathname === ROUTES.home;
const onResults = (location: Location) => onHome(location) && location.hash === `#${RESULTS_SECTION_ID}`;

const NAV_ITEMS: readonly NavItem[] = [
  { label: 'Home', to: ROUTES.home, isActive: (location) => onHome(location) && !onResults(location) },
  { label: 'Explore Restaurants', to: ROUTES.explore, isActive: onResults },
  { label: 'My Reviews', to: ROUTES.myReviews, isActive: (location) => location.pathname === ROUTES.myReviews },
  { label: 'About', to: ROUTES.about, isActive: (location) => location.pathname === ROUTES.about },
  { label: 'Contact', to: ROUTES.contact, isActive: (location) => location.pathname === ROUTES.contact },
];

const MOBILE_MENU_ID = 'mobile-menu';

function OwnerLoginLink({ className, onClick }: { className?: string; onClick?: () => void }) {
  return (
    <Link
      to={ROUTES.ownerLogin}
      onClick={onClick}
      className={cn('inline-flex items-center gap-2 rounded-full text-sm text-ink-600 transition-colors hover:text-ink-900', className)}
    >
      <LogIn aria-hidden="true" size={16} className="text-accent-700" />
      <span>
        Restaurant Owner? <span className="font-semibold text-ink-900 underline decoration-accent-400 decoration-2 underline-offset-4">Login</span>
      </span>
    </Link>
  );
}

export function Header() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState<{ name: string; email?: string } | null>(() =>
    storageService.getCustomerUser(),
  );

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const handleStorageChange = () => {
      setCurrentUser(storageService.getCustomerUser());
    };
    window.addEventListener('rateit-storage-change', handleStorageChange);
    return () => window.removeEventListener('rateit-storage-change', handleStorageChange);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [menuOpen]);

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-cream-300/80 bg-cream-100/90 pt-[env(safe-area-inset-top)] backdrop-blur-md">
        <Container className="flex h-16 items-center justify-between gap-4 sm:h-[4.5rem]">
          <Logo />

          <nav aria-label="Main" className="hidden items-center gap-1 xl:flex">
            {NAV_ITEMS.map((item) => {
              const active = item.isActive(location);
              return (
                <Link
                  key={item.label}
                  to={item.to}
                  aria-current={active ? 'page' : undefined}
                  className={cn(
                    'rounded-full px-4 py-2 text-sm font-medium transition-colors',
                    active ? 'bg-cream-200 text-ink-900' : 'text-ink-600 hover:bg-cream-200/70 hover:text-ink-900',
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2 xl:gap-4">
            {/* Customer User Chip / Login Button */}
            {currentUser ? (
              <div className="hidden sm:flex items-center gap-2 rounded-full border border-cream-300 bg-white px-3 py-1.5 text-xs font-bold text-ink-900 shadow-xs">
                <span className="flex size-5 items-center justify-center rounded-full bg-accent-600 text-[10px] text-white">
                  {currentUser.name[0]?.toUpperCase() || 'U'}
                </span>
                <span className="max-w-[100px] truncate">{currentUser.name}</span>
                <button
                  type="button"
                  onClick={() => storageService.setCustomerUser(null)}
                  className="ml-1 text-[10px] font-semibold text-ink-500 hover:text-red-600"
                  title="Sign out"
                >
                  (logout)
                </button>
              </div>
            ) : (
              <button
                type="button"
                onClick={() => setAuthModalOpen(true)}
                className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-cream-300 bg-white px-3.5 py-1.5 text-xs font-semibold text-ink-800 transition hover:bg-cream-100"
              >
                <User size={14} className="text-accent-600" />
                Customer Login
              </button>
            )}

            <OwnerLoginLink className="max-xl:hidden" />
            <ButtonLink to={ROUTES.ownerRegister} size="md" className="max-sm:hidden">
              Register Your Restaurant
            </ButtonLink>
            <button
              type="button"
              aria-expanded={menuOpen}
              aria-controls={MOBILE_MENU_ID}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              onClick={() => setMenuOpen((open) => !open)}
              className="grid size-11 place-items-center rounded-full text-ink-900 transition-colors hover:bg-cream-200 xl:hidden"
            >
              {menuOpen ? <X aria-hidden="true" size={24} /> : <Menu aria-hidden="true" size={24} />}
            </button>
          </div>
        </Container>

        {menuOpen ? (
          <div id={MOBILE_MENU_ID} className="border-t border-cream-300/80 bg-cream-50 shadow-card xl:hidden">
            <Container className="py-4">
              <nav aria-label="Mobile">
                <ul className="flex flex-col">
                  {NAV_ITEMS.map((item) => {
                    const active = item.isActive(location);
                    return (
                      <li key={item.label}>
                        <Link
                          to={item.to}
                          onClick={closeMenu}
                          aria-current={active ? 'page' : undefined}
                          className={cn(
                            'flex min-h-12 items-center rounded-xl px-3 text-base font-medium',
                            active ? 'bg-cream-200 text-ink-900' : 'text-ink-800 hover:bg-cream-100',
                          )}
                        >
                          {item.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </nav>

              <div className="mt-3 flex flex-col gap-3 border-t border-cream-300 pt-4">
                {currentUser ? (
                  <div className="flex items-center justify-between rounded-xl bg-cream-200/50 p-3 text-xs font-bold text-ink-900">
                    <span>Signed in as {currentUser.name}</span>
                    <button
                      type="button"
                      onClick={() => storageService.setCustomerUser(null)}
                      className="text-red-600 font-semibold"
                    >
                      Sign Out
                    </button>
                  </div>
                ) : (
                  <button
                    type="button"
                    onClick={() => {
                      closeMenu();
                      setAuthModalOpen(true);
                    }}
                    className="flex min-h-11 items-center justify-center gap-2 rounded-xl border border-cream-300 bg-white text-sm font-bold text-ink-900"
                  >
                    <User size={16} className="text-accent-600" />
                    Customer Login / Register
                  </button>
                )}

                <OwnerLoginLink onClick={closeMenu} className="min-h-11 px-3" />
                <ButtonLink to={ROUTES.ownerRegister} size="lg" fullWidth onClick={closeMenu} className="sm:hidden">
                  Register Your Restaurant
                </ButtonLink>
              </div>
            </Container>
          </div>
        ) : null}
      </header>

      <CustomerAuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        onSuccess={() => setCurrentUser(storageService.getCustomerUser())}
      />
    </>
  );
}
