import { Trash2, Edit3, MessageSquarePlus, Store, ArrowLeft } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Container } from '@/components/ui/Container';
import { StarRating } from '@/components/ui/StarRating';
import { WriteReviewModal } from '@/components/reviews/WriteReviewModal';
import { showToast } from '@/lib/toast';
import { usePageTitle } from '@/hooks/usePageTitle';
import { ROUTES } from '@/lib/routes';
import { storageService } from '@/services/storageService';
import type { Restaurant, Review } from '@/types/restaurant';

function getMyReviewsData() {
  const allRest = storageService.getRestaurants();
  const currentUser = storageService.getCustomerUser();
  const allReviews = storageService.getReviews();
  const userReviews = currentUser
    ? allReviews.filter(
        (r) =>
          r.userName.toLowerCase() === currentUser.name.toLowerCase() ||
          (currentUser.email && r.userEmail === currentUser.email) ||
          !r.isDemo,
      )
    : allReviews.filter((r) => !r.isDemo);
  return { reviews: userReviews, restaurants: allRest };
}

export default function MyReviewsPage() {
  usePageTitle('My Reviews');

  const [data, setData] = useState(() => getMyReviewsData());
  const { reviews, restaurants } = data;
  const [editingReview, setEditingReview] = useState<Review | null>(null);
  const [modalRestaurant, setModalRestaurant] = useState<Restaurant | null>(null);
  const [deleteTargetId, setDeleteTargetId] = useState<string | number | null>(null);

  const loadData = () => {
    setData(getMyReviewsData());
  };

  useEffect(() => {
    const handleStorageChange = () => setData(getMyReviewsData());
    window.addEventListener('rateit-storage-change', handleStorageChange);
    return () => window.removeEventListener('rateit-storage-change', handleStorageChange);
  }, []);

  const handleDelete = (id: string | number) => {
    storageService.deleteReview(id);
    showToast('Review deleted');
    setDeleteTargetId(null);
    loadData();
  };

  const startEdit = (review: Review) => {
    const targetRest = restaurants.find((r) => r.id === review.restaurantId);
    if (targetRest) {
      setEditingReview(review);
      setModalRestaurant(targetRest);
    }
  };

  return (
    <section className="py-8 sm:py-12">
      <Container>
        <Link
          to={ROUTES.explore}
          className="inline-flex min-h-11 items-center gap-2 rounded-full text-sm font-semibold text-ink-800 transition-colors hover:text-accent-700"
        >
          <ArrowLeft size={18} />
          Back to restaurants
        </Link>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-b border-cream-300 pb-5">
          <div>
            <h1 className="text-3xl font-extrabold text-ink-900 sm:text-4xl">My Reviews</h1>
            <p className="mt-1 text-sm text-ink-600">
              Reviews written and saved in this browser. You can edit or remove them anytime.
            </p>
          </div>
          <Link
            to={ROUTES.explore}
            className="inline-flex items-center gap-2 rounded-full bg-accent-600 px-5 py-2.5 text-xs font-bold text-white shadow-sm transition hover:bg-accent-700"
          >
            <MessageSquarePlus size={16} />
            Explore & Write Review
          </Link>
        </div>

        <div className="mt-8 space-y-6">
          {reviews.length > 0 ? (
            reviews.map((rev) => {
              const rest = restaurants.find((r) => r.id === rev.restaurantId);
              return (
                <div
                  key={rev.id}
                  className="rounded-3xl border border-cream-300 bg-white p-6 shadow-sm transition hover:shadow-md"
                >
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="flex size-11 items-center justify-center rounded-2xl bg-cream-100 text-accent-700">
                        <Store size={22} />
                      </div>
                      <div>
                        <h2 className="text-base font-bold text-ink-900">
                          {rest?.name || rev.restaurantName || 'Restaurant'}
                        </h2>
                        <div className="mt-0.5 flex items-center gap-2">
                          <StarRating rating={rev.rating} size={14} />
                          <span className="text-xs text-ink-500">• {rev.date}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => startEdit(rev)}
                        className="inline-flex items-center gap-1.5 rounded-full border border-cream-300 bg-cream-50 px-3.5 py-1.5 text-xs font-semibold text-ink-800 transition hover:bg-cream-100"
                      >
                        <Edit3 size={13} />
                        Edit
                      </button>
                      <button
                        type="button"
                        onClick={() => setDeleteTargetId(rev.id)}
                        className="inline-flex items-center gap-1.5 rounded-full border border-red-200 bg-red-50 px-3.5 py-1.5 text-xs font-semibold text-red-700 transition hover:bg-red-100"
                      >
                        <Trash2 size={13} />
                        Delete
                      </button>
                    </div>
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-ink-700">{rev.text}</p>

                  {rev.photoUrl ? (
                    <div className="mt-3">
                      <img
                        src={rev.photoUrl}
                        alt="My uploaded photo"
                        className="h-32 w-48 rounded-2xl object-cover shadow-xs"
                      />
                    </div>
                  ) : null}

                  {rev.tags && rev.tags.length > 0 ? (
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {rev.tags.map((t) => (
                        <span
                          key={t}
                          className="rounded-full bg-cream-100 px-2.5 py-0.5 text-xs font-medium text-ink-700"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  ) : null}

                  {rev.ownerReply ? (
                    <div className="mt-4 rounded-2xl border border-forest-200 bg-forest-50/70 p-3.5 text-xs">
                      <span className="font-bold text-forest-900">Restaurant Owner Response:</span>
                      <p className="mt-1 text-forest-800">{rev.ownerReply.text}</p>
                    </div>
                  ) : null}
                </div>
              );
            })
          ) : (
            <div className="rounded-3xl border-2 border-dashed border-cream-300 py-16 text-center">
              <div className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-cream-100 text-ink-400">
                <MessageSquarePlus size={28} />
              </div>
              <h2 className="mt-4 text-lg font-bold text-ink-900">No Reviews Written Yet</h2>
              <p className="mt-1 text-sm text-ink-600">
                Explore local Gorakhpur restaurants and share your authentic dining feedback or scan a table QR code.
              </p>
              <div className="mt-6">
                <Link
                  to={ROUTES.explore}
                  className="rounded-full bg-accent-600 px-6 py-2.5 text-sm font-bold text-white shadow-sm transition hover:bg-accent-700"
                >
                  Discover Restaurants
                </Link>
              </div>
            </div>
          )}
        </div>
      </Container>

      {/* Delete Confirmation Modal */}
      {deleteTargetId !== null ? (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink-900/60 p-4 backdrop-blur-xs animate-in fade-in"
        >
          <div className="w-full max-w-sm rounded-3xl border border-cream-300 bg-white p-6 shadow-2xl text-center">
            <h3 className="text-lg font-bold text-ink-900">Delete Review?</h3>
            <p className="mt-2 text-xs text-ink-600">
              Are you sure you want to delete this review? This action cannot be undone in this browser.
            </p>
            <div className="mt-5 flex gap-2.5">
              <button
                type="button"
                onClick={() => setDeleteTargetId(null)}
                className="flex-1 rounded-xl border border-cream-300 py-2.5 text-xs font-bold text-ink-700 hover:bg-cream-100"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={() => handleDelete(deleteTargetId)}
                className="flex-1 rounded-xl bg-red-600 py-2.5 text-xs font-bold text-white hover:bg-red-700"
              >
                Confirm Delete
              </button>
            </div>
          </div>
        </div>
      ) : null}

      {/* Edit Review Modal */}
      {modalRestaurant && editingReview ? (
        <WriteReviewModal
          isOpen={true}
          restaurant={modalRestaurant}
          editReview={editingReview}
          onClose={() => {
            setEditingReview(null);
            setModalRestaurant(null);
          }}
          onReviewSubmitted={() => {
            setEditingReview(null);
            setModalRestaurant(null);
            loadData();
          }}
        />
      ) : null}
    </section>
  );
}
