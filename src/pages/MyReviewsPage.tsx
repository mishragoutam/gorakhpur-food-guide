import {
  Trash2,
  Edit3,
  MessageSquarePlus,
  Store,
  ArrowLeft,
  Lock,
  ShieldCheck,
  Eye,
  EyeOff,
  User,
  LogIn,
} from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Container } from '@/components/ui/Container';
import { StarRating } from '@/components/ui/StarRating';
import { WriteReviewModal } from '@/components/reviews/WriteReviewModal';
import { CustomerAuthModal } from '@/components/auth/CustomerAuthModal';
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
  usePageTitle('My Reviews & Account Security');

  const [data, setData] = useState(() => getMyReviewsData());
  const { reviews, restaurants } = data;
  const [currentUser, setCurrentUser] = useState(() => storageService.getCustomerUser());
  const [editingReview, setEditingReview] = useState<Review | null>(null);
  const [modalRestaurant, setModalRestaurant] = useState<Restaurant | null>(null);
  const [deleteTargetId, setDeleteTargetId] = useState<string | number | null>(null);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  // Password Manager State
  const [showPwManager, setShowPwManager] = useState(false);
  const [currentPw, setCurrentPw] = useState('');
  const [newPw, setNewPw] = useState('');
  const [confirmPw, setConfirmPw] = useState('');
  const [showPw, setShowPw] = useState(false);
  const [pwError, setPwError] = useState('');
  const [pwSuccess, setPwSuccess] = useState('');
  const [isUpdatingPw, setIsUpdatingPw] = useState(false);

  const loadData = () => {
    setData(getMyReviewsData());
    setCurrentUser(storageService.getCustomerUser());
  };

  useEffect(() => {
    const handleStorageChange = () => loadData();
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

  const handleChangePassword = (e: React.FormEvent) => {
    e.preventDefault();
    setPwError('');
    setPwSuccess('');

    if (!currentUser?.email) {
      setPwError('Please sign in to update your account password.');
      return;
    }
    if (!currentPw || !newPw) {
      setPwError('Please fill in both current and new password.');
      return;
    }
    if (newPw.length < 6) {
      setPwError('New password must be at least 6 characters long.');
      return;
    }
    if (newPw !== confirmPw) {
      setPwError('New passwords do not match. Please verify your entries.');
      return;
    }

    setIsUpdatingPw(true);
    const res = storageService.changeCustomerPassword(currentUser.email, currentPw, newPw);
    setIsUpdatingPw(false);

    if (res.success) {
      setPwSuccess('Your diner account password has been updated successfully!');
      setCurrentPw('');
      setNewPw('');
      setConfirmPw('');
      showToast('Password updated successfully!');
    } else {
      setPwError(res.error || 'Failed to update password.');
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
            <h1 className="text-3xl font-extrabold text-ink-900 sm:text-4xl">My Reviews & Profile</h1>
            <p className="mt-1 text-sm text-ink-600">
              Manage your verified dining reviews, account credentials, and password security.
            </p>
          </div>
          <div className="flex items-center gap-2.5">
            <Link
              to={ROUTES.explore}
              className="inline-flex items-center gap-2 rounded-full bg-accent-600 px-5 py-2.5 text-xs font-bold text-white shadow-sm transition hover:bg-accent-700"
            >
              <MessageSquarePlus size={16} />
              Explore & Write Review
            </Link>
          </div>
        </div>

        {/* Customer Account & Password Manager Card */}
        <div className="mt-6 rounded-3xl border border-cream-300 bg-white p-6 shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3.5">
              <div className="flex size-12 items-center justify-center rounded-2xl bg-accent-100 text-accent-700 font-bold text-lg">
                {currentUser?.avatarUrl ? (
                  <img
                    src={currentUser.avatarUrl}
                    alt={currentUser.name}
                    className="size-full rounded-2xl object-cover"
                  />
                ) : (
                  <User size={24} />
                )}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-base font-bold text-ink-900">
                    {currentUser ? currentUser.name : 'Guest Diner'}
                  </h2>
                  <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-bold text-emerald-700 border border-emerald-200">
                    <ShieldCheck size={11} />
                    {currentUser ? 'Verified Account' : 'Guest Mode'}
                  </span>
                </div>
                <p className="text-xs text-ink-500">
                  {currentUser?.email ? currentUser.email : 'Not signed in with email'}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {currentUser ? (
                <button
                  type="button"
                  onClick={() => setShowPwManager(!showPwManager)}
                  className="inline-flex items-center gap-1.5 rounded-xl border border-cream-300 bg-cream-50 px-3.5 py-2 text-xs font-bold text-ink-800 hover:bg-cream-100 cursor-pointer transition"
                >
                  <Lock size={13} className="text-accent-700" />
                  <span>{showPwManager ? 'Close Password Manager' : 'Password Manager'}</span>
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => setIsAuthModalOpen(true)}
                  className="inline-flex items-center gap-1.5 rounded-xl bg-accent-600 px-4 py-2 text-xs font-bold text-white shadow-xs hover:bg-accent-700 cursor-pointer transition"
                >
                  <LogIn size={14} />
                  <span>Sign In / Create Account</span>
                </button>
              )}
            </div>
          </div>

          {/* Collapsible Customer Password Manager Form */}
          {showPwManager && currentUser?.email ? (
            <div className="mt-5 border-t border-cream-200 pt-5">
              <h3 className="text-sm font-bold text-ink-900 flex items-center gap-2">
                <Lock size={15} className="text-accent-700" />
                Change Your Account Password
              </h3>
              <p className="text-xs text-ink-500 mt-0.5">
                Protect your reviews and diner profile with a personalized password.
              </p>

              <form onSubmit={handleChangePassword} className="mt-4 space-y-3.5 max-w-lg">
                <div>
                  <label className="mb-1 block text-xs font-bold text-ink-800" htmlFor="user-curr-pw">
                    Current Password
                  </label>
                  <input
                    id="user-curr-pw"
                    type={showPw ? 'text' : 'password'}
                    required
                    value={currentPw}
                    onChange={(e) => setCurrentPw(e.target.value)}
                    placeholder="Enter existing password (or Vyora@2026)"
                    className="w-full rounded-xl border border-cream-300 p-2.5 text-xs outline-none focus:border-accent-600"
                  />
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  <div>
                    <label className="mb-1 block text-xs font-bold text-ink-800" htmlFor="user-new-pw">
                      New Password
                    </label>
                    <input
                      id="user-new-pw"
                      type={showPw ? 'text' : 'password'}
                      required
                      value={newPw}
                      onChange={(e) => setNewPw(e.target.value)}
                      placeholder="Min 6 characters"
                      className="w-full rounded-xl border border-cream-300 p-2.5 text-xs outline-none focus:border-accent-600"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-xs font-bold text-ink-800" htmlFor="user-conf-pw">
                      Confirm New Password
                    </label>
                    <input
                      id="user-conf-pw"
                      type={showPw ? 'text' : 'password'}
                      required
                      value={confirmPw}
                      onChange={(e) => setConfirmPw(e.target.value)}
                      placeholder="Re-type new password"
                      className="w-full rounded-xl border border-cream-300 p-2.5 text-xs outline-none focus:border-accent-600"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between pt-1">
                  <button
                    type="button"
                    onClick={() => setShowPw(!showPw)}
                    className="inline-flex items-center gap-1 text-[11px] font-semibold text-accent-700 hover:text-accent-800 cursor-pointer"
                  >
                    {showPw ? <EyeOff size={13} /> : <Eye size={13} />}
                    <span>{showPw ? 'Hide Passwords' : 'Show Passwords'}</span>
                  </button>
                  <button
                    type="submit"
                    disabled={isUpdatingPw}
                    className="rounded-xl bg-accent-600 px-4 py-2 text-xs font-bold text-white shadow-xs hover:bg-accent-700 disabled:opacity-60 cursor-pointer transition"
                  >
                    {isUpdatingPw ? 'Updating...' : 'Save New Password'}
                  </button>
                </div>

                {pwError ? (
                  <p className="rounded-lg bg-red-50 p-2 text-[11px] font-semibold text-red-600">
                    {pwError}
                  </p>
                ) : null}

                {pwSuccess ? (
                  <p className="rounded-lg bg-emerald-50 p-2 text-[11px] font-semibold text-emerald-700">
                    {pwSuccess}
                  </p>
                ) : null}
              </form>
            </div>
          ) : null}
        </div>

        {/* Reviews List */}
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
                        className="inline-flex items-center gap-1.5 rounded-full border border-cream-300 bg-cream-50 px-3.5 py-1.5 text-xs font-semibold text-ink-800 transition hover:bg-cream-100 cursor-pointer"
                      >
                        <Edit3 size={13} />
                        Edit
                      </button>
                      <button
                        type="button"
                        onClick={() => setDeleteTargetId(rev.id)}
                        className="inline-flex items-center gap-1.5 rounded-full border border-red-200 bg-red-50 px-3.5 py-1.5 text-xs font-semibold text-red-700 transition hover:bg-red-100 cursor-pointer"
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
                    <div className="mt-4 rounded-2xl border border-cream-300 bg-cream-50/80 p-3.5 text-xs">
                      <span className="font-bold text-accent-800">Restaurant Owner Response:</span>
                      <p className="mt-1 text-ink-800">{rev.ownerReply.text}</p>
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
                className="flex-1 rounded-xl border border-cream-300 py-2.5 text-xs font-bold text-ink-700 hover:bg-cream-100 cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={() => handleDelete(deleteTargetId)}
                className="flex-1 rounded-xl bg-red-600 py-2.5 text-xs font-bold text-white hover:bg-red-700 cursor-pointer"
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

      {/* Customer Auth Modal */}
      <CustomerAuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        onSuccess={() => loadData()}
      />
    </section>
  );
}
