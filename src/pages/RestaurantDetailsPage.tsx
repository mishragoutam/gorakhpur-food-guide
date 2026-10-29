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
} from 'lucide-react';
import { useEffect, useState } from 'react';
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
  const restaurant = restaurantQuery.status === 'ready' ? restaurantQuery.data : null;

  usePageTitle(restaurant ? restaurant.name : 'Restaurant details');

  const [reviews, setReviews] = useState<Review[]>(() =>
    restaurantId ? storageService.getReviews(restaurantId) : [],
  );
  const [writeModalOpen, setWriteModalOpen] = useState(false);
  const [qrModalOpen, setQrModalOpen] = useState(false);
  const [standeeModalOpen, setStandeeModalOpen] = useState(false);

  useEffect(() => {
    const handleStorageChange = () => {
      if (restaurantId) {
        setReviews(storageService.getReviews(restaurantId));
      }
    };

    window.addEventListener('rateit-storage-change', handleStorageChange);
    return () => window.removeEventListener('rateit-storage-change', handleStorageChange);
  }, [restaurantId]);

  if (restaurantQuery.status === 'loading') {
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

        {/* QR Scan Welcome Notice */}
        {Boolean(isQrScanned || tableNumber) && (
          <div className="mt-4 flex items-center gap-3 rounded-2xl border border-forest-300 bg-forest-50/90 px-4 py-3 text-xs text-forest-900 sm:text-sm shadow-xs">
            <QrCode size={20} className="shrink-0 text-forest-700" />
            <p>
              <strong className="font-semibold">Welcome to {restaurant.name}!</strong> Scanned via QR code{tableNumber ? ` (Table ${tableNumber})` : ''}. Explore the menu, view verified dining ratings, or tap &ldquo;Write a review&rdquo; below.
            </p>
          </div>
        )}

        {/* Informative notice preserving backward-compatible placeholder indicator */}
        <div className="mt-4 flex items-center justify-between gap-4 rounded-2xl border border-cream-300 bg-amber-50/80 px-4 py-3 text-xs text-amber-950 sm:text-sm">
          <div className="flex items-center gap-2">
            <Sparkles size={16} className="shrink-0 text-amber-700" />
            <p>
              <strong className="font-semibold">Full details and reviews are coming soon</strong> — preview the interactive menu highlights, ratings breakdown, table QR code, and reviews below.
            </p>
          </div>
          {restaurant.isDemo ? <Badge tone="accent">Sample listing</Badge> : null}
        </div>

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
                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-bold text-emerald-800">
                  <Leaf size={12} /> Pure Veg
                </span>
              ) : (
                <span className="inline-flex items-center gap-1 rounded-full bg-cream-200 px-2.5 py-0.5 text-xs font-bold text-ink-800">
                  Veg & Non-veg options
                </span>
              )}
            </div>

            <h1 className="mt-3 text-3xl font-extrabold text-ink-900 sm:text-4xl">{restaurant.name}</h1>
            <p className="mt-2 font-medium text-ink-600">{restaurant.cuisines.join(' · ')}</p>

            <p className="mt-1 flex items-center gap-1.5 text-sm text-ink-600">
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

            <div className="mt-5 flex items-center gap-3 text-sm text-ink-700">
              <span className="font-bold text-ink-900">{budget.symbol}</span>
              <span>About {formatRupees(restaurant.costForTwo)} for two</span>
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
                onClick={() => setWriteModalOpen(true)}
                className="inline-flex items-center gap-2 rounded-full bg-accent-600 px-6 py-3 text-sm font-bold text-white shadow-md transition hover:bg-accent-700 hover:shadow-lg"
              >
                <PenLine size={16} />
                Write a Review
              </button>
              <button
                type="button"
                onClick={() => setStandeeModalOpen(true)}
                className="inline-flex items-center gap-2 rounded-full border border-forest-600 bg-forest-50 px-5 py-3 text-sm font-bold text-forest-800 transition hover:bg-forest-100"
              >
                <QrCode size={16} />
                View QR Standee
              </button>
              <button
                type="button"
                onClick={() => setQrModalOpen(true)}
                className="inline-flex items-center gap-2 rounded-full border border-cream-300 bg-white px-4 py-3 text-sm font-semibold text-ink-700 transition hover:bg-cream-100"
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

            <h2 className="mt-8 text-sm font-semibold tracking-wide text-ink-600 uppercase">Popular dishes</h2>
            <ul role="list" className="mt-3 flex flex-wrap gap-2">
              {restaurant.popularDishes.map((dish: string) => (
                <li key={dish}>
                  <Badge className="px-3 py-1.5 text-sm">{dish}</Badge>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Detailed Sections: Menu, Breakdown, Reviews & Contact */}
        <div className="mt-14 grid gap-10 lg:grid-cols-3">
          {/* Main 2 Cols: Menu Highlights + Reviews */}
          <div className="space-y-10 lg:col-span-2">
            {/* Menu Highlights */}
            <div className="rounded-3xl border border-cream-300 bg-white p-6 sm:p-8 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold text-ink-900">Menu Highlights</h3>
                  <p className="text-xs text-ink-500">Curated dishes from {restaurant.name}</p>
                </div>
                <span className="rounded-full bg-cream-100 px-3 py-1 text-xs font-semibold text-ink-700">
                  {restaurant.menu?.length || 0} items
                </span>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {restaurant.menu && restaurant.menu.length > 0 ? (
                  restaurant.menu.map((item: MenuItem) => (
                    <div
                      key={item.id}
                      className="flex flex-col justify-between rounded-2xl border border-cream-200 bg-cream-50/50 p-4 transition hover:bg-cream-50"
                    >
                      <div>
                        <div className="flex items-start justify-between gap-2">
                          <h4 className="text-sm font-bold text-ink-900">{item.name}</h4>
                          <span className="shrink-0 text-sm font-bold text-accent-700">₹{item.price}</span>
                        </div>
                        <p className="mt-1 text-xs text-ink-600 line-clamp-2">{item.description}</p>
                      </div>
                      <div className="mt-3 flex items-center justify-between text-[11px] font-semibold">
                        <span
                          className={
                            item.diet === 'veg' ? 'text-emerald-700' : 'text-rose-700'
                          }
                        >
                          {item.diet === 'veg' ? '● Pure Veg' : '▲ Non-Veg'}
                        </span>
                        <span className="text-ink-500">{item.category}</span>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-sm text-ink-500">Menu items being updated by owner.</p>
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
                        className="h-full rounded-full bg-forest-600 transition-all duration-500"
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
                          <div className="flex size-9 items-center justify-center rounded-full bg-accent-100 font-bold text-accent-800">
                            {rev.userName[0]?.toUpperCase() || 'U'}
                          </div>
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
                        <div className="mt-3.5 flex gap-2.5 rounded-2xl border border-forest-200 bg-forest-50/70 p-3.5 text-xs">
                          <MessageSquareReply size={18} className="shrink-0 text-forest-700 mt-0.5" />
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="font-bold text-forest-900">Owner Response</span>
                              <span className="text-[10px] text-forest-600">{rev.ownerReply.date}</span>
                            </div>
                            <p className="mt-1 text-forest-800">{rev.ownerReply.text}</p>
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
              <div className="relative mt-4 flex h-36 items-center justify-center rounded-2xl bg-gradient-to-br from-forest-50 to-cream-200 border border-forest-200 text-forest-800">
                <MapPin size={32} className="text-forest-700 animate-bounce" />
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
                    <span className="font-bold text-ink-900">Contact</span>
                    <p className="text-ink-600">{restaurant.phone || '+91 98380 12345'}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick QR Table Standee Card */}
            <div className="rounded-3xl border border-forest-300/80 bg-forest-50 p-6 text-center shadow-sm">
              <div className="mx-auto mb-3 flex size-12 items-center justify-center rounded-2xl bg-forest-600 text-white">
                <QrCode size={24} />
              </div>
              <h4 className="text-base font-bold text-forest-900">Dining at the Table?</h4>
              <p className="mt-1 text-xs text-forest-700">
                Scan the table QR code to write a review or preview the digital menu standee.
              </p>
              <button
                type="button"
                onClick={() => setStandeeModalOpen(true)}
                className="mt-4 inline-flex w-full items-center justify-center rounded-xl bg-forest-600 py-2.5 text-xs font-bold text-white shadow-xs transition hover:bg-forest-700"
              >
                Launch QR Standee
              </button>
            </div>
          </div>
        </div>
      </Container>

      {/* Modals */}
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
    </section>
  );
}
