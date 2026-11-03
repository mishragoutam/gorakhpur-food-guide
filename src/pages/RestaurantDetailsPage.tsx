import {
  ArrowLeft,
  MapPin,
  Clock,
  Phone,
  QrCode,
  PenLine,
  Leaf,
  Sparkles,
  SearchX,
  MessageSquareReply,
  Navigation,
  CheckCircle2,
  Search,
  Calendar,
  Plus,
  ShoppingBag,
  UtensilsCrossed,
  MessageCircle,
} from 'lucide-react';
import { useEffect, useState, useMemo } from 'react';
import { Link, useParams, useSearchParams } from 'react-router-dom';
import { RestaurantImage } from '@/components/art/RestaurantImage';
import { Badge } from '@/components/ui/Badge';
import { ButtonLink } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { StarRating } from '@/components/ui/StarRating';
import { StatePanel } from '@/components/ui/StatePanel';
import { WriteReviewModal } from '@/components/reviews/WriteReviewModal';
import { QrReviewModal } from '@/components/qr/QrReviewModal';
import { RestaurantQrModal } from '@/components/qr/RestaurantQrModal';
import { CustomerAuthModal } from '@/components/auth/CustomerAuthModal';
import { TableBookingModal } from '@/components/booking/TableBookingModal';
import { DishDetailOrderModal } from '@/components/menu/DishDetailOrderModal';
import { DineInTrayModal, type TrayItem } from '@/components/menu/DineInTrayModal';
import { showToast } from '@/lib/toast';
import { usePageTitle } from '@/hooks/usePageTitle';
import { useRestaurant } from '@/hooks/useRestaurants';
import { getBudgetBand } from '@/lib/budget';
import { formatRating, formatReviewCount, formatRupees } from '@/lib/format';
import { ROUTES } from '@/lib/routes';
import { storageService } from '@/services/storageService';
import type { MenuItem, Review } from '@/types/restaurant';

function BackLink() {
  return (
    <Link
      to={ROUTES.explore}
      className="inline-flex min-h-11 items-center gap-2 rounded-full text-sm font-semibold text-ink-800 transition-colors hover:text-accent-700"
    >
      <ArrowLeft aria-hidden="true" size={18} />
      Back to restaurants
    </Link>
  );
}

function isOpenNow(openTime = '11:00', closeTime = '23:00'): boolean {
  const now = new Date();
  const currentMinutes = now.getHours() * 60 + now.getMinutes();

  const [openH, openM] = openTime.split(':').map(Number);
  const [closeH, closeM] = closeTime.split(':').map(Number);

  const openMinutes = (openH || 11) * 60 + (openM || 0);
  const closeMinutes = (closeH || 23) * 60 + (closeM || 0);

  return currentMinutes >= openMinutes && currentMinutes < closeMinutes;
}

export default function RestaurantDetailsPage() {
  const { restaurantId } = useParams();
  const [searchParams] = useSearchParams();
  const isQrScanned = searchParams.get('qr') === 'true' || searchParams.get('qr') === 'standee';
  const tableNumber = searchParams.get('table');

  const restaurantQuery = useRestaurant(restaurantId);
  const initialLocal = useMemo(
    () => (restaurantId ? storageService.getRestaurantById(restaurantId) : null),
    [restaurantId],
  );
  const restaurant = restaurantQuery.status === 'ready' ? restaurantQuery.data : (initialLocal || null);

  usePageTitle(restaurant ? restaurant.name : 'Restaurant details');

  const [reviews, setReviews] = useState<Review[]>(() =>
    restaurantId ? storageService.getReviews(restaurantId) : [],
  );
  const [currentUser, setCurrentUser] = useState(() => storageService.getCustomerUser());
  const [writeModalOpen, setWriteModalOpen] = useState(false);
  const [qrModalOpen, setQrModalOpen] = useState(false);
  const [standeeModalOpen, setStandeeModalOpen] = useState(false);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authGoogleMode, setAuthGoogleMode] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [dietFilter, setDietFilter] = useState<'all' | 'veg' | 'nonveg'>('all');
  const [menuSearch, setMenuSearch] = useState<string>('');
  const [selectedDishForOrder, setSelectedDishForOrder] = useState<MenuItem | null>(null);
  const [dishOrderModalOpen, setDishOrderModalOpen] = useState(false);
  const [trayItems, setTrayItems] = useState<TrayItem[]>([]);
  const [trayModalOpen, setTrayModalOpen] = useState(false);

  const handleAddToTray = (item: MenuItem, quantity: number) => {
    setTrayItems((prev) => {
      const existing = prev.find((entry) => entry.item.id === item.id);
      if (existing) {
        return prev.map((entry) =>
          entry.item.id === item.id ? { ...entry, quantity: entry.quantity + quantity } : entry,
        );
      }
      return [...prev, { item, quantity }];
    });
    showToast(`Added ${quantity}x ${item.name} to dining tray`);
  };

  const handleUpdateTrayQuantity = (itemId: string | number, delta: number) => {
    setTrayItems((prev) =>
      prev
        .map((entry) => {
          if (entry.item.id === itemId) {
            const nextQty = entry.quantity + delta;
            return nextQty > 0 ? { ...entry, quantity: nextQty } : null;
          }
          return entry;
        })
        .filter((entry): entry is TrayItem => entry !== null),
    );
  };

  const handleRemoveTrayItem = (itemId: string | number) => {
    setTrayItems((prev) => prev.filter((entry) => entry.item.id !== itemId));
  };

  const handleClearTray = () => {
    setTrayItems([]);
  };

  const menuCategories = useMemo(() => {
    if (!restaurant?.menu) return [];
    const set = new Set<string>();
    restaurant.menu.forEach((m) => {
      if (m.category) set.add(m.category);
    });
    return Array.from(set);
  }, [restaurant]);

  const hasNonVeg = useMemo(() => {
    return Boolean(restaurant?.menu?.some((m) => m.diet === 'nonveg'));
  }, [restaurant]);

  const filteredMenu = useMemo(() => {
    if (!restaurant?.menu) return [];
    return restaurant.menu.filter((item) => {
      // Category filter
      if (selectedCategory === 'Bestsellers') {
        const isBestseller =
          item.isFeatured ||
          restaurant.popularDishes.some(
            (p) =>
              p.toLowerCase() === item.name.toLowerCase() ||
              item.name.toLowerCase().includes(p.toLowerCase()) ||
              p.toLowerCase().includes(item.name.toLowerCase()),
          );
        if (!isBestseller) return false;
      } else if (selectedCategory !== 'All' && item.category !== selectedCategory) {
        return false;
      }

      // Diet filter
      if (dietFilter !== 'all') {
        if (dietFilter === 'veg' && item.diet !== 'veg') return false;
        if (dietFilter === 'nonveg' && item.diet !== 'nonveg') return false;
      }

      // Search query
      if (menuSearch.trim()) {
        const q = menuSearch.toLowerCase().trim();
        const matchName = item.name.toLowerCase().includes(q);
        const matchDesc = item.description?.toLowerCase().includes(q);
        const matchCat = item.category?.toLowerCase().includes(q);
        if (!matchName && !matchDesc && !matchCat) return false;
      }

      return true;
    });
  }, [restaurant, selectedCategory, dietFilter, menuSearch]);

  useEffect(() => {
    const handleStorageChange = () => {
      if (restaurantId) {
        setReviews(storageService.getReviews(restaurantId));
      }
      setCurrentUser(storageService.getCustomerUser());
    };

    window.addEventListener('rateit-storage-change', handleStorageChange);
    return () => window.removeEventListener('rateit-storage-change', handleStorageChange);
  }, [restaurantId]);

  if (restaurantQuery.status === 'loading' && !restaurant) {
    return (
      <section className="py-8 sm:py-12">
        <Container>
          <BackLink />
          <div aria-busy="true" className="mt-6 grid animate-pulse gap-8 lg:grid-cols-2 lg:gap-12">
            <div className="aspect-[16/11] rounded-3xl bg-cream-200" />
            <div className="space-y-4">
              <div className="h-8 w-1/3 rounded-full bg-cream-200" />
              <div className="h-10 w-3/4 rounded-2xl bg-cream-200" />
              <div className="h-24 w-full rounded-2xl bg-cream-200" />
            </div>
          </div>
        </Container>
      </section>
    );
  }

  if (!restaurant) {
    return (
      <section className="py-8 sm:py-12">
        <Container>
          <BackLink />
          <div className="mt-6">
            <StatePanel
              icon={SearchX}
              title="Restaurant not found"
              description="We could not find the restaurant you were looking for. It may have been removed, or the link may be outdated."
              action={<ButtonLink to={ROUTES.explore}>Browse restaurants</ButtonLink>}
            />
          </div>
        </Container>
      </section>
    );
  }

  const budget = getBudgetBand(restaurant.costForTwo);
  const open = isOpenNow(restaurant.openTime, restaurant.closeTime);
  const breakdown = restaurant.ratingsBreakdown || {
    food: 4.6,
    taste: 4.6,
    hygiene: 4.4,
    service: 4.2,
    ambience: 4.3,
  };

  return (
    <section className="py-8 sm:py-12">
      <Container>
        <BackLink />

        {/* QR Scan Welcome Notice & Google Login Check-in */}
        {Boolean(isQrScanned || tableNumber) && (
          currentUser ? (
            <div className="mt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 rounded-2xl border border-accent-200 bg-accent-50/90 p-4 text-xs sm:text-sm text-accent-950 shadow-xs">
              <div className="flex items-center gap-3">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-accent-600 text-white shadow-xs font-bold">
                  <CheckCircle2 size={20} />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-accent-950">Table QR Check-In Verified</span>
                    {tableNumber ? (
                      <span className="rounded-md bg-accent-200/80 px-2 py-0.5 text-[11px] font-bold text-accent-800">
                        Table {tableNumber}
                      </span>
                    ) : null}
                  </div>
                  <p className="text-xs text-accent-900">
                    Logged in as <strong>{currentUser.name}</strong> ({currentUser.email}). Your dining review will be saved as a verified diner.
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setWriteModalOpen(true)}
                className="inline-flex items-center gap-1.5 rounded-xl bg-accent-600 px-3.5 py-2 text-xs font-bold text-white shadow-xs hover:bg-accent-700 transition shrink-0 cursor-pointer"
              >
                <PenLine size={13} /> Write Verified Review
              </button>
            </div>
          ) : (
            <div className="mt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 rounded-2xl border border-cream-300 bg-cream-50/95 p-4 text-xs sm:text-sm text-ink-950 shadow-xs">
              <div className="flex items-center gap-3">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-accent-600 text-white shadow-xs font-bold">
                  <QrCode size={20} />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <strong className="font-bold text-ink-950">Welcome to {restaurant.name}!</strong>
                    {tableNumber ? (
                      <span className="rounded-md bg-cream-200 px-2 py-0.5 text-[11px] font-bold text-ink-800">
                        Table {tableNumber}
                      </span>
                    ) : null}
                  </div>
                  <p className="text-xs text-ink-600">
                    Scanned via table QR code. Sign in with your Google email ID to unlock verified diner status and submit reviews.
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => {
                  setAuthGoogleMode(true);
                  setAuthModalOpen(true);
                }}
                className="inline-flex items-center gap-2 rounded-xl bg-ink-900 px-4 py-2 text-xs font-bold text-white shadow-xs hover:bg-ink-800 transition shrink-0 cursor-pointer"
              >
                Sign In with Google
              </button>
            </div>
          )
        )}

        {/* Verified or preview indicator */}
        {restaurant.isDemo ? (
          <div className="mt-4 flex items-center justify-between gap-4 rounded-2xl border border-cream-300 bg-amber-50/80 px-4 py-3 text-xs text-amber-950 sm:text-sm">
            <div className="flex items-center gap-2">
              <Sparkles size={16} className="shrink-0 text-amber-700" />
              <p>
                <strong className="font-semibold">Full details and reviews are coming soon</strong> — preview the interactive menu highlights, ratings breakdown, table QR code, and reviews below.
              </p>
            </div>
            <Badge tone="accent">Sample listing</Badge>
          </div>
        ) : (
          <div className="mt-4 flex items-center gap-2 rounded-2xl border border-cream-300 bg-cream-50/80 px-4 py-2.5 text-xs font-semibold text-ink-800">
            <Sparkles size={15} className="shrink-0 text-accent-600" />
            <span>Verified Restaurant Partner • Gorakhpur Dining Directory</span>
          </div>
        )}

        {/* Hero & Overview */}
        <div className="mt-6 grid gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="relative aspect-[16/11] overflow-hidden rounded-3xl shadow-card ring-1 ring-ink-900/5">
            <RestaurantImage restaurant={restaurant} className="absolute inset-0" />
            <span
              className={`absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-bold shadow-md ${
                open ? 'bg-emerald-600 text-white' : 'bg-red-600 text-white'
              }`}
            >
              {open ? 'Open Now' : 'Closed'}
            </span>
          </div>

          <div>
            <div className="flex flex-wrap items-center gap-2">
              <Badge tone="neutral">{restaurant.cuisines[0] || 'Multi-cuisine'}</Badge>
              {restaurant.diet === 'veg' ? (
                <span className="inline-flex items-center gap-1 rounded-full bg-cream-200 px-2.5 py-0.5 text-xs font-bold text-ink-800">
                  <Leaf size={12} className="text-emerald-600" /> Pure Veg
                </span>
              ) : (
                <span className="inline-flex items-center gap-1 rounded-full bg-cream-200 px-2.5 py-0.5 text-xs font-bold text-ink-800">
                  Veg & Non-veg options
                </span>
              )}
            </div>

            <div className="mt-4 flex items-start gap-3.5">
              {restaurant.logoUrl ? (
                <img
                  src={restaurant.logoUrl}
                  alt={`${restaurant.name} logo`}
                  className="size-16 sm:size-20 shrink-0 rounded-2xl border border-cream-300 bg-white p-0.5 shadow-md object-cover"
                />
              ) : null}
              <div className="min-w-0 flex-1">
                <h1 className="text-2xl font-extrabold text-ink-900 sm:text-4xl leading-tight">{restaurant.name}</h1>
                <p className="mt-1 font-medium text-ink-600">{restaurant.cuisines.join(' · ')}</p>
              </div>
            </div>

            <p className="mt-2 flex items-center gap-1.5 text-sm text-ink-600">
              <MapPin aria-hidden="true" size={16} className="shrink-0 text-accent-700" />
              {restaurant.address || `${restaurant.area}, ${restaurant.city}`}
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1">
              <StarRating rating={restaurant.averageRating} size={20} />
              <span className="text-lg font-bold text-ink-900">{formatRating(restaurant.averageRating)}</span>
              <span className="text-sm text-ink-600">
                ({formatReviewCount(restaurant.reviewCount, restaurant.isDemo)})
              </span>
            </div>

            <p className="mt-5 text-sm leading-relaxed text-ink-600 sm:text-base">{restaurant.description}</p>

            <div className="mt-5 flex flex-wrap items-center gap-2.5 text-sm text-ink-700">
              <span className="rounded-md bg-cream-200 px-2 py-0.5 text-xs font-bold text-ink-900">
                {budget.symbol}
              </span>
              <span className="font-bold text-ink-900">{formatRupees(restaurant.costForTwo)}</span>
              <span className="text-ink-600 font-medium">for two people</span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock size={15} className="text-ink-500" />
                {restaurant.openTime || '11:00 AM'} – {restaurant.closeTime || '11:00 PM'}
              </span>
            </div>

            {/* Action Buttons */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => setBookingModalOpen(true)}
                className="inline-flex items-center gap-2 rounded-full bg-accent-600 px-6 py-3 text-sm font-bold text-white shadow-md transition hover:bg-accent-700 hover:shadow-lg cursor-pointer"
              >
                <Calendar size={16} />
                Book a Table
              </button>
              <button
                type="button"
                onClick={() => setWriteModalOpen(true)}
                className="inline-flex items-center gap-2 rounded-full bg-ink-900 px-6 py-3 text-sm font-bold text-white shadow-md transition hover:bg-ink-800 hover:shadow-lg cursor-pointer"
              >
                <PenLine size={16} />
                Write a Review
              </button>
              <button
                type="button"
                onClick={() => setStandeeModalOpen(true)}
                className="inline-flex items-center gap-2 rounded-full border border-cream-300 bg-white px-5 py-3 text-sm font-bold text-ink-800 transition hover:bg-cream-100 shadow-2xs cursor-pointer"
              >
                <QrCode size={16} className="text-accent-700" />
                View QR Standee
              </button>
              <button
                type="button"
                onClick={() => setQrModalOpen(true)}
                className="inline-flex items-center gap-2 rounded-full border border-cream-300 bg-white px-4 py-3 text-sm font-semibold text-ink-700 transition hover:bg-cream-100 cursor-pointer"
              >
                Try QR Review
              </button>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${restaurant.name}, ${restaurant.address || restaurant.area}, Gorakhpur, Uttar Pradesh`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-cream-300 bg-white px-4 py-3 text-sm font-semibold text-ink-700 transition hover:bg-cream-100"
              >
                <Navigation size={15} className="text-accent-700" />
                Directions
              </a>
            </div>

            <h2 className="mt-8 text-sm font-semibold tracking-wide text-ink-600 uppercase">Popular dishes & rates</h2>
            <ul role="list" className="mt-3 flex flex-wrap gap-2">
              {restaurant.popularDishes.map((dish: string) => {
                const menuItem = restaurant.menu?.find(
                  (m) =>
                    m.name.toLowerCase() === dish.toLowerCase() ||
                    m.name.toLowerCase().includes(dish.toLowerCase()) ||
                    dish.toLowerCase().includes(m.name.toLowerCase()),
                );
                return (
                  <li key={dish}>
                    <button
                      type="button"
                      onClick={() => {
                        if (menuItem) {
                          setSelectedDishForOrder(menuItem);
                          setDishOrderModalOpen(true);
                        }
                      }}
                      className="cursor-pointer transition active:scale-95"
                    >
                      <Badge className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium hover:border-accent-400">
                        <span>{dish}</span>
                        {menuItem?.price ? (
                          <span className="rounded-full bg-accent-100/90 px-2 py-0.5 text-xs font-bold text-accent-800">
                            ₹{menuItem.price}
                          </span>
                        ) : null}
                      </Badge>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Detailed Sections: Menu, Breakdown, Reviews & Contact */}
        <div className="mt-14 grid gap-10 lg:grid-cols-3">
          {/* Main 2 Cols: Menu Highlights + Reviews */}
          <div className="space-y-10 lg:col-span-2">
            {/* Menu Highlights (Zomato & Swiggy Style) */}
            <div className="rounded-3xl border border-cream-300 bg-white p-6 sm:p-8 shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-bold text-ink-900">Restaurant Menu</h3>
                    <span className="rounded-md bg-accent-100 px-2 py-0.5 text-[11px] font-extrabold text-accent-800 tracking-wide uppercase">
                      Zomato & Swiggy Curated
                    </span>
                  </div>
                  <p className="text-xs text-ink-500">Live dish rates, dietary tags and high-res photos from {restaurant.name}</p>
                </div>
                <span className="self-start sm:self-auto rounded-full bg-cream-100 px-3 py-1 text-xs font-semibold text-ink-700">
                  {restaurant.menu?.length || 0} dishes available
                </span>
              </div>

              {/* Menu Filter Controls */}
              <div className="mt-5 space-y-3 border-t border-cream-200/80 pt-4">
                {/* Search Bar + Veg/NonVeg Toggle */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <div className="relative flex-1">
                    <Search size={15} className="absolute left-3.5 top-3 text-ink-400" />
                    <input
                      type="text"
                      value={menuSearch}
                      onChange={(e) => setMenuSearch(e.target.value)}
                      placeholder="Search menu (e.g. paneer, biryani, roll, shake)..."
                      className="w-full rounded-xl border border-cream-200 bg-cream-50/50 pl-10 pr-4 py-2 text-xs text-ink-900 outline-none focus:border-accent-600 focus:bg-white focus:ring-2 focus:ring-accent-100 transition"
                    />
                    {menuSearch ? (
                      <button
                        type="button"
                        onClick={() => setMenuSearch('')}
                        className="absolute right-3 top-2.5 text-xs text-ink-400 hover:text-ink-700"
                      >
                        ✕
                      </button>
                    ) : null}
                  </div>

                  {/* Veg / Non-Veg Quick Selector */}
                  <div className="flex items-center rounded-xl bg-cream-100 p-1 shrink-0 text-xs font-bold">
                    <button
                      type="button"
                      onClick={() => setDietFilter('all')}
                      className={`rounded-lg px-3 py-1.5 transition ${
                        dietFilter === 'all' ? 'bg-white text-ink-900 shadow-2xs' : 'text-ink-600 hover:text-ink-900'
                      }`}
                    >
                      All
                    </button>
                    <button
                      type="button"
                      onClick={() => setDietFilter('veg')}
                      className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 transition ${
                        dietFilter === 'veg' ? 'bg-white text-emerald-800 shadow-2xs font-extrabold' : 'text-emerald-700 hover:text-emerald-900'
                      }`}
                    >
                      <span className="size-2 rounded-full bg-emerald-600 inline-block" />
                      Veg
                    </button>
                    {hasNonVeg ? (
                      <button
                        type="button"
                        onClick={() => setDietFilter('nonveg')}
                        className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 transition ${
                          dietFilter === 'nonveg' ? 'bg-white text-rose-800 shadow-2xs font-extrabold' : 'text-rose-700 hover:text-rose-900'
                        }`}
                      >
                        <span className="size-2 rotate-45 bg-rose-600 inline-block" />
                        Non-Veg
                      </button>
                    ) : null}
                  </div>
                </div>

                {/* Mobile Category Select Dropdown */}
                <div className="sm:hidden">
                  <label htmlFor="mobile-category-select" className="mb-1 block text-[11px] font-bold text-ink-700 uppercase tracking-wider">
                    Select Menu Section
                  </label>
                  <select
                    id="mobile-category-select"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full rounded-xl border border-cream-300 bg-white px-3 py-2 text-xs font-bold text-ink-900 outline-none focus:border-accent-600 shadow-2xs"
                  >
                    <option value="All">All Dishes ({restaurant.menu?.length || 0})</option>
                    <option value="Bestsellers">★ Bestsellers</option>
                    {menuCategories.map((cat) => (
                      <option key={cat} value={cat}>
                        {cat} ({restaurant.menu?.filter((m) => m.category === cat).length || 0})
                      </option>
                    ))}
                  </select>
                </div>

                {/* Horizontal Category Navigation Tabs */}
                <div className="hidden sm:flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar text-xs">
                  <button
                    type="button"
                    onClick={() => setSelectedCategory('All')}
                    className={`shrink-0 rounded-full px-3.5 py-1.5 font-bold transition cursor-pointer ${
                      selectedCategory === 'All'
                        ? 'bg-ink-900 text-white shadow-xs'
                        : 'bg-cream-100 text-ink-700 hover:bg-cream-200'
                    }`}
                  >
                    All ({restaurant.menu?.length || 0})
                  </button>

                  <button
                    type="button"
                    onClick={() => setSelectedCategory('Bestsellers')}
                    className={`shrink-0 flex items-center gap-1 rounded-full px-3.5 py-1.5 font-bold transition cursor-pointer ${
                      selectedCategory === 'Bestsellers'
                        ? 'bg-amber-600 text-white shadow-xs'
                        : 'bg-amber-50 text-amber-800 border border-amber-200/80 hover:bg-amber-100'
                    }`}
                  >
                    <span>★ Bestsellers</span>
                  </button>

                  {menuCategories.map((cat) => {
                    const count = restaurant.menu?.filter((m) => m.category === cat).length || 0;
                    return (
                      <button
                        key={cat}
                        type="button"
                        onClick={() => setSelectedCategory(cat)}
                        className={`shrink-0 rounded-full px-3.5 py-1.5 font-bold transition cursor-pointer ${
                          selectedCategory === cat
                            ? 'bg-ink-900 text-white shadow-xs'
                            : 'bg-cream-100 text-ink-700 hover:bg-cream-200'
                        }`}
                      >
                        {cat} ({count})
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Menu Grid */}
              <div className="mt-6 grid gap-3.5 sm:grid-cols-2">
                {filteredMenu.length > 0 ? (
                  filteredMenu.map((item: MenuItem) => {
                    const isBestseller =
                      item.isFeatured ||
                      restaurant.popularDishes.some(
                        (p) =>
                          p.toLowerCase() === item.name.toLowerCase() ||
                          item.name.toLowerCase().includes(p.toLowerCase()) ||
                          p.toLowerCase().includes(item.name.toLowerCase()),
                      );

                    return (
                      <div
                        key={item.id}
                        onClick={() => {
                          setSelectedDishForOrder(item);
                          setDishOrderModalOpen(true);
                        }}
                        className="group flex flex-col justify-between rounded-2xl border border-cream-200 bg-white p-4 shadow-2xs transition hover:border-accent-300 hover:shadow-md cursor-pointer"
                      >
                        <div>
                          {/* Bestseller Badge */}
                          {isBestseller ? (
                            <div className="mb-2 flex items-center gap-1">
                              <span className="rounded-md bg-amber-100 px-2 py-0.5 text-[10px] font-extrabold text-amber-800 uppercase tracking-wide">
                                ★ Bestseller
                              </span>
                            </div>
                          ) : null}

                          <div className="flex gap-3">
                            {item.imageUrl ? (
                              <img
                                src={item.imageUrl}
                                alt={item.name}
                                className="size-20 shrink-0 rounded-2xl object-cover ring-1 ring-ink-900/5 shadow-2xs group-hover:scale-[1.03] transition-transform duration-200"
                                loading="lazy"
                                onError={(e) => {
                                  e.currentTarget.style.display = 'none';
                                }}
                              />
                            ) : (
                              <div className="flex size-20 shrink-0 flex-col items-center justify-center rounded-2xl border border-cream-200 bg-cream-100/70 text-accent-700/80 shadow-2xs group-hover:scale-[1.03] transition-transform duration-200">
                                <UtensilsCrossed size={22} className="opacity-60" />
                                <span className="mt-1 text-[9px] font-bold text-ink-500">Dish</span>
                              </div>
                            )}
                            <div className="min-w-0 flex-1">
                              <div className="flex items-start justify-between gap-2">
                                <h4 className="text-sm font-bold text-ink-900 leading-snug line-clamp-2 group-hover:text-accent-700 transition">
                                  {item.name}
                                </h4>
                                <span className="shrink-0 rounded-full bg-accent-50 px-2.5 py-0.5 text-xs font-extrabold text-accent-800 ring-1 ring-accent-200">
                                  ₹{item.price}
                                </span>
                              </div>
                              <p className="mt-1.5 text-xs text-ink-600 line-clamp-2 leading-relaxed">
                                {item.description}
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="mt-3 flex items-center justify-between border-t border-cream-100 pt-2.5 text-[11px] font-semibold">
                          <span
                            className={
                              item.diet === 'veg'
                                ? 'flex items-center gap-1 text-emerald-700 font-bold'
                                : 'flex items-center gap-1 text-rose-700 font-bold'
                            }
                          >
                            <span
                              className={`size-2 inline-block ${
                                item.diet === 'veg' ? 'rounded-full bg-emerald-600' : 'rotate-45 bg-rose-600'
                              }`}
                            />
                            {item.diet === 'veg' ? 'Pure Veg' : 'Non-Veg'}
                          </span>

                          <div className="flex items-center gap-2">
                            <span className="rounded-md bg-cream-100 px-2 py-0.5 text-ink-600">{item.category}</span>
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                setSelectedDishForOrder(item);
                                setDishOrderModalOpen(true);
                              }}
                              className="inline-flex items-center gap-1 rounded-full bg-accent-600 px-2.5 py-1 text-[11px] font-bold text-white shadow-2xs hover:bg-accent-700 active:scale-95 transition cursor-pointer"
                            >
                              <Plus size={12} />
                              <span>Order</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <div className="col-span-2 py-10 text-center">
                    <p className="text-sm font-bold text-ink-800">No dishes match your filter</p>
                    <p className="mt-1 text-xs text-ink-500">
                      Try searching another keyword or clear the category and diet filters.
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedCategory('All');
                        setDietFilter('all');
                        setMenuSearch('');
                      }}
                      className="mt-3 rounded-full bg-cream-200 px-4 py-1.5 text-xs font-bold text-ink-800 hover:bg-cream-300"
                    >
                      Reset Menu Filters
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Feedback Breakdown Ratings */}
            <div className="rounded-3xl border border-cream-300 bg-white p-6 sm:p-8 shadow-sm">
              <h3 className="text-xl font-bold text-ink-900">Feedback Breakdown</h3>
              <p className="text-xs text-ink-500">Average sub-ratings based on customer reviews</p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {Object.entries(breakdown).map(([key, val]) => (
                  <div key={key} className="space-y-1.5">
                    <div className="flex justify-between text-xs font-bold text-ink-800 uppercase tracking-wider">
                      <span>{key}</span>
                      <span>{Number(val).toFixed(1)} / 5</span>
                    </div>
                    <div className="h-2.5 w-full overflow-hidden rounded-full bg-cream-200">
                      <div
                        className="h-full rounded-full bg-accent-600 transition-all duration-500"
                        style={{ width: `${(Number(val) / 5) * 100}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Customer Reviews List */}
            <div className="rounded-3xl border border-cream-300 bg-white p-6 sm:p-8 shadow-sm">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-cream-200 pb-5">
                <div>
                  <h3 className="text-xl font-bold text-ink-900">Customer Reviews</h3>
                  <p className="text-xs text-ink-500">{reviews.length} reviews for this restaurant</p>
                </div>
                <button
                  type="button"
                  onClick={() => setWriteModalOpen(true)}
                  className="inline-flex items-center gap-1.5 rounded-full bg-accent-600 px-4 py-2 text-xs font-bold text-white shadow-xs hover:bg-accent-700"
                >
                  <PenLine size={14} />
                  Write Review
                </button>
              </div>

              <div className="mt-6 divide-y divide-cream-200">
                {reviews.length > 0 ? (
                  reviews.map((rev) => (
                    <article key={rev.id} className="py-5 first:pt-0 last:pb-0">
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2.5">
                          {rev.userAvatar ? (
                            <img
                              src={rev.userAvatar}
                              alt={rev.userName}
                              className="size-9 rounded-full object-cover ring-1 ring-ink-900/10 shadow-xs"
                            />
                          ) : (
                            <div className="flex size-9 items-center justify-center rounded-full bg-accent-100 font-bold text-accent-800">
                              {rev.userName[0]?.toUpperCase() || 'U'}
                            </div>
                          )}
                          <div>
                            <span className="text-sm font-bold text-ink-900">{rev.userName}</span>
                            <p className="text-[11px] text-ink-500">{rev.date}</p>
                          </div>
                        </div>
                        <StarRating rating={rev.rating} size={15} />
                      </div>

                      <p className="mt-3 text-sm leading-relaxed text-ink-700">{rev.text}</p>

                      {rev.photoUrl ? (
                        <div className="mt-3">
                          <img
                            src={rev.photoUrl}
                            alt="Diner upload"
                            className="h-32 w-48 rounded-xl object-cover shadow-xs ring-1 ring-ink-900/5"
                          />
                        </div>
                      ) : null}

                      {rev.tags && rev.tags.length > 0 ? (
                        <div className="mt-3 flex flex-wrap gap-1.5">
                          {rev.tags.map((t) => (
                            <span
                              key={t}
                              className="rounded-full bg-cream-100 px-2.5 py-0.5 text-[11px] font-medium text-ink-700"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      ) : null}

                      {/* Owner Management Reply */}
                      {rev.ownerReply ? (
                        <div className="mt-3.5 flex gap-2.5 rounded-2xl border border-cream-200 bg-cream-50/80 p-3.5 text-xs">
                          <MessageSquareReply size={18} className="shrink-0 text-accent-700 mt-0.5" />
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="font-bold text-ink-900">Owner Response</span>
                              <span className="text-[10px] text-ink-500">{rev.ownerReply.date}</span>
                            </div>
                            <p className="mt-1 text-ink-700">{rev.ownerReply.text}</p>
                          </div>
                        </div>
                      ) : null}
                    </article>
                  ))
                ) : (
                  <p className="py-8 text-center text-sm text-ink-500">
                    No reviews yet. Be the first to share your experience!
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Right Col: Location, Hours, Contact, Standee QR */}
          <div className="space-y-6">
            <div className="rounded-3xl border border-cream-300 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-bold text-ink-900">Location & Hours</h3>

              {/* Map Illustration Preview */}
              <div className="relative mt-4 flex h-36 items-center justify-center rounded-2xl bg-gradient-to-br from-cream-100 to-cream-200 border border-cream-300 text-ink-800">
                <MapPin size={32} className="text-accent-700 animate-bounce" />
                <span className="absolute bottom-2 text-[11px] font-semibold text-ink-500">
                  Gorakhpur, Uttar Pradesh
                </span>
              </div>

              <div className="mt-5 space-y-3.5 text-xs">
                <div className="flex items-start gap-2.5">
                  <MapPin size={16} className="shrink-0 text-accent-700 mt-0.5" />
                  <div>
                    <span className="font-bold text-ink-900">Address</span>
                    <p className="text-ink-600">{restaurant.address || `${restaurant.area}, ${restaurant.city}`}</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Clock size={16} className="shrink-0 text-accent-700 mt-0.5" />
                  <div>
                    <span className="font-bold text-ink-900">Hours</span>
                    <p className="text-ink-600">
                      {restaurant.openTime || '11:00 AM'} – {restaurant.closeTime || '11:00 PM'} (Open daily)
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Phone size={16} className="shrink-0 text-accent-700 mt-0.5" />
                  <div>
                    <span className="font-bold text-ink-900">Owner Contact &amp; WhatsApp</span>
                    <div className="flex items-center gap-2 mt-0.5 flex-wrap">
                      <p className="text-ink-600 font-medium">{restaurant.phone || '+91 98380 12345'}</p>
                      {restaurant.phone ? (
                        <a
                          href={`https://wa.me/${(restaurant.whatsappPhone || restaurant.phone).replace(/\D/g, '').length === 10 ? `91${(restaurant.whatsappPhone || restaurant.phone).replace(/\D/g, '')}` : (restaurant.whatsappPhone || restaurant.phone).replace(/\D/g, '')}?text=${encodeURIComponent(`Hello ${restaurant.name}! 👋 I am viewing your menu on VYORA.`)}`}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1 rounded-full bg-emerald-100 px-2 py-0.5 text-[11px] font-bold text-emerald-800 hover:bg-emerald-200 transition"
                        >
                          <MessageCircle size={11} />
                          <span>Chat on WhatsApp</span>
                        </a>
                      ) : null}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick QR Table Standee Card */}
            <div className="rounded-3xl border border-cream-300 bg-white p-6 text-center shadow-sm">
              <div className="mx-auto mb-3 flex size-12 items-center justify-center rounded-2xl bg-accent-600 text-white">
                <QrCode size={24} />
              </div>
              <h4 className="text-base font-bold text-ink-900">Dining at the Table?</h4>
              <p className="mt-1 text-xs text-ink-600">
                Scan the table QR code to write a review or preview the digital menu standee.
              </p>
              <button
                type="button"
                onClick={() => setStandeeModalOpen(true)}
                className="mt-4 inline-flex w-full items-center justify-center rounded-xl bg-accent-600 py-2.5 text-xs font-bold text-white shadow-xs transition hover:bg-accent-700 cursor-pointer"
              >
                Launch QR Standee
              </button>
            </div>
          </div>
        </div>
      </Container>

      {/* Persistent Floating Dining Tray Bar */}
      {trayItems.length > 0 ? (
        <aside
          aria-label="Dining order tray summary"
          className="fixed bottom-4 left-4 right-4 z-40 mx-auto max-w-md rounded-2xl bg-ink-950/95 p-3.5 text-white shadow-2xl backdrop-blur-md ring-1 ring-white/10 animate-in slide-in-from-bottom"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="flex size-9 items-center justify-center rounded-xl bg-accent-600 font-black text-white text-xs">
                {trayItems.reduce((acc, curr) => acc + curr.quantity, 0)}
              </div>
              <div>
                <div className="text-xs font-extrabold text-white">Your Dining Tray</div>
                <div className="text-[11px] text-cream-200">
                  Total: {formatRupees(trayItems.reduce((acc, curr) => acc + curr.item.price * curr.quantity, 0))}
                </div>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setTrayModalOpen(true)}
              className="flex items-center gap-1.5 rounded-xl bg-accent-600 px-4 py-2 text-xs font-bold text-white shadow-md hover:bg-accent-700 active:scale-95 transition cursor-pointer"
            >
              <ShoppingBag size={14} />
              <span>View Order</span>
            </button>
          </div>
        </aside>
      ) : null}

      {/* Modals */}
      <DishDetailOrderModal
        isOpen={dishOrderModalOpen}
        onClose={() => {
          setDishOrderModalOpen(false);
          setSelectedDishForOrder(null);
        }}
        item={selectedDishForOrder}
        restaurant={restaurant}
        onAddToTray={handleAddToTray}
      />

      <DineInTrayModal
        isOpen={trayModalOpen}
        onClose={() => setTrayModalOpen(false)}
        items={trayItems}
        onUpdateQuantity={handleUpdateTrayQuantity}
        onRemoveItem={handleRemoveTrayItem}
        onClearTray={handleClearTray}
        restaurant={restaurant}
      />

      <WriteReviewModal
        isOpen={writeModalOpen}
        restaurant={restaurant}
        onClose={() => setWriteModalOpen(false)}
        onReviewSubmitted={() => {
          if (restaurantId) setReviews(storageService.getReviews(restaurantId));
        }}
      />

      <QrReviewModal
        isOpen={qrModalOpen}
        restaurant={restaurant}
        onClose={() => setQrModalOpen(false)}
        onContinueToReview={() => {
          setWriteModalOpen(true);
        }}
      />

      <RestaurantQrModal
        isOpen={standeeModalOpen}
        restaurant={restaurant}
        onClose={() => setStandeeModalOpen(false)}
      />

      <TableBookingModal
        isOpen={bookingModalOpen}
        restaurant={restaurant}
        onClose={() => setBookingModalOpen(false)}
      />

      <CustomerAuthModal
        isOpen={authModalOpen}
        initialGoogleMode={authGoogleMode}
        onClose={() => {
          setAuthModalOpen(false);
          setAuthGoogleMode(false);
        }}
        onSuccess={(user) => {
          setCurrentUser(user);
          setAuthModalOpen(false);
          setAuthGoogleMode(false);
        }}
      />
    </section>
  );
}
