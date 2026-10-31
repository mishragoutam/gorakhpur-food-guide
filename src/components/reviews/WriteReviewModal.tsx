import { Star, Upload, X, Trash2, CheckCircle2 } from 'lucide-react';
import { useState, useRef } from 'react';
import { COMMON_REVIEW_TAGS, storageService } from '@/services/storageService';
import { showToast } from '@/lib/toast';
import { CustomerAuthModal } from '@/components/auth/CustomerAuthModal';
import type { Restaurant, Review } from '@/types/restaurant';

interface WriteReviewModalProps {
  isOpen: boolean;
  restaurant: Restaurant;
  editReview?: Review | null;
  onClose: () => void;
  onReviewSubmitted?: (review: Review) => void;
}

export function WriteReviewModal(props: WriteReviewModalProps) {
  if (!props.isOpen) return null;
  return <ReviewModalDialog key={String(props.editReview?.id ?? 'new')} {...props} />;
}

function ReviewModalDialog({
  restaurant,
  editReview,
  onClose,
  onReviewSubmitted,
}: WriteReviewModalProps) {
  const [rating, setRating] = useState(editReview?.rating || 0);
  const [hoverRating, setHoverRating] = useState(0);
  const [text, setText] = useState(editReview?.text || '');
  const [selectedTags, setSelectedTags] = useState<string[]>(() => editReview?.tags || []);
  const [photoUrl, setPhotoUrl] = useState<string>(editReview?.photoUrl || '');
  const [error, setError] = useState('');
  const [dinerName, setDinerName] = useState('');
  const [dinerEmail, setDinerEmail] = useState('');
  const [showAuth, setShowAuth] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleTagToggle = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag],
    );
  };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 2 * 1024 * 1024) {
      showToast('Please select a photo under 2 MB', 'error');
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const maxDim = 600;
        let width = img.width;
        let height = img.height;

        if (width > height && width > maxDim) {
          height = Math.round((height * maxDim) / width);
          width = maxDim;
        } else if (height > maxDim) {
          width = Math.round((width * maxDim) / height);
          height = maxDim;
        }

        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        if (ctx) {
          ctx.drawImage(img, 0, 0, width, height);
          setPhotoUrl(canvas.toDataURL('image/jpeg', 0.8));
        }
      };
      img.src = event.target?.result as string;
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    let currentUser = storageService.getCustomerUser();
    if (!currentUser) {
      if (dinerName.trim().length >= 2) {
        currentUser = {
          name: dinerName.trim(),
          email: dinerEmail.trim() || undefined,
        };
        storageService.setCustomerUser(currentUser);
      } else {
        setShowAuth(true);
        return;
      }
    }

    if (rating === 0) {
      setError('Please select a star rating between 1 and 5.');
      return;
    }

    if (text.trim().length < 10) {
      setError('Please write at least 10 characters sharing what you enjoyed or what could improve.');
      return;
    }

    let savedReview: Review;

    if (editReview) {
      savedReview = storageService.updateReview(editReview.id, {
        rating,
        text: text.trim(),
        tags: selectedTags,
        photoUrl,
      })!;
      showToast('Review updated successfully!');
    } else {
      savedReview = storageService.addReview({
        restaurantId: restaurant.id,
        restaurantName: restaurant.name,
        userName: currentUser.name,
        userEmail: currentUser.email,
        rating,
        text: text.trim(),
        tags: selectedTags,
        photoUrl,
      });
      showToast('Review submitted! Thank you.');
    }

    setSubmitted(true);
    if (onReviewSubmitted) onReviewSubmitted(savedReview);
  };

  return (
    <>
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="write-review-title"
        className="fixed inset-0 z-50 flex items-center justify-center bg-ink-900/60 p-4 backdrop-blur-xs animate-in fade-in overflow-y-auto"
        onClick={(e) => {
          if (e.target === e.currentTarget) onClose();
        }}
      >
        <div className="relative my-8 w-full max-w-lg rounded-3xl border border-cream-300 bg-white p-6 sm:p-8 shadow-2xl">
          <button
            type="button"
            onClick={onClose}
            className="absolute right-5 top-5 rounded-full p-2 text-ink-500 hover:bg-cream-100 hover:text-ink-900"
            aria-label="Close dialog"
          >
            <X size={20} />
          </button>

          {submitted ? (
            <div className="flex flex-col items-center py-6 text-center">
              <div className="mb-4 flex size-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                <CheckCircle2 size={36} />
              </div>
              <h2 className="text-2xl font-bold text-ink-900">
                {editReview ? 'Review Updated!' : 'Thank You for Your Review!'}
              </h2>
              <p className="mt-2 text-sm text-ink-600 max-w-sm">
                Your feedback on <strong className="text-ink-900">{restaurant.name}</strong> has been saved. Other diners in Gorakhpur will appreciate your honest review.
              </p>
              <div className="mt-6 flex gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="rounded-full bg-accent-600 px-6 py-2.5 text-sm font-bold text-white shadow-md transition hover:bg-accent-700"
                >
                  View on Page
                </button>
              </div>
            </div>
          ) : (
            <div>
              <div className="mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-accent-700">
                  {editReview ? 'Edit Your Review' : 'Rate & Review'}
                </span>
                <h2 id="write-review-title" className="text-2xl font-bold text-ink-900">
                  {restaurant.name}
                </h2>
                <p className="text-xs text-ink-500">{restaurant.cuisines.join(' · ')} • {restaurant.area}</p>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                {/* Star Picker */}
                <div>
                  <label className="mb-1.5 block text-xs font-bold text-ink-800">
                    Your Rating <span className="text-red-500">*</span>
                  </label>
                  <div className="flex items-center gap-1.5" role="radiogroup" aria-label="Star rating">
                    {[1, 2, 3, 4, 5].map((star) => {
                      const isFilled = (hoverRating || rating) >= star;
                      return (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setRating(star)}
                          onMouseEnter={() => setHoverRating(star)}
                          onMouseLeave={() => setHoverRating(0)}
                          className="rounded-md p-1 text-cream-300 transition-transform hover:scale-115 focus:outline-hidden"
                          aria-label={`${star} star${star > 1 ? 's' : ''}`}
                          aria-checked={rating === star}
                          role="radio"
                        >
                          <Star
                            size={28}
                            className={
                              isFilled
                                ? 'fill-amber-400 text-amber-500 transition-colors'
                                : 'fill-cream-200 text-cream-300'
                            }
                          />
                        </button>
                      );
                    })}
                    {rating > 0 ? (
                      <span className="ml-2 text-sm font-bold text-ink-800">
                        {rating === 5
                          ? 'Excellent!'
                          : rating === 4
                          ? 'Very Good'
                          : rating === 3
                          ? 'Average'
                          : rating === 2
                          ? 'Needs Improvement'
                          : 'Poor'}
                      </span>
                    ) : null}
                  </div>
                </div>

                {/* Review Text */}
                <div>
                  <label className="mb-1.5 block text-xs font-bold text-ink-800" htmlFor="review-text">
                    Your Review <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="review-text"
                    rows={4}
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="What did you order? How was the taste, service speed, and hygiene?"
                    className="w-full rounded-2xl border border-cream-300 p-3.5 text-sm text-ink-900 outline-none focus:border-accent-600 focus:ring-2 focus:ring-accent-100"
                  />
                  <span className="mt-1 block text-right text-[11px] text-ink-500">
                    {text.trim().length}/10 characters minimum
                  </span>
                </div>

                {/* Tags Picker */}
                <div>
                  <label className="mb-1.5 block text-xs font-bold text-ink-800">
                    What stood out? (Optional)
                  </label>
                  <div className="flex flex-wrap gap-1.5">
                    {COMMON_REVIEW_TAGS.map((tag) => {
                      const isSelected = selectedTags.includes(tag);
                      return (
                        <button
                          key={tag}
                          type="button"
                          onClick={() => handleTagToggle(tag)}
                          className={`rounded-full px-3 py-1 text-xs font-medium transition ${
                            isSelected
                              ? 'bg-accent-600 text-white shadow-xs'
                              : 'border border-cream-300 bg-cream-50 text-ink-700 hover:border-cream-400'
                          }`}
                        >
                          {tag}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Photo Upload */}
                <div>
                  <label className="mb-1.5 block text-xs font-bold text-ink-800">
                    Add a Photo (Optional)
                  </label>
                  <input
                    type="file"
                    ref={fileInputRef}
                    accept="image/*"
                    onChange={handlePhotoUpload}
                    className="hidden"
                  />

                  {photoUrl ? (
                    <div className="relative inline-block overflow-hidden rounded-2xl border border-cream-300">
                      <img src={photoUrl} alt="Review attachment" className="h-28 w-44 object-cover" />
                      <button
                        type="button"
                        onClick={() => setPhotoUrl('')}
                        className="absolute right-2 top-2 rounded-full bg-ink-900/80 p-1.5 text-white hover:bg-ink-900"
                        title="Remove photo"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  ) : (
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="flex items-center gap-2 rounded-xl border border-dashed border-cream-400 bg-cream-50/60 px-4 py-2.5 text-xs font-semibold text-ink-700 transition hover:bg-cream-100"
                    >
                      <Upload size={16} className="text-accent-600" />
                      Upload food or receipt photo (Max 2 MB)
                    </button>
                  )}
                </div>

                {/* Diner Information (if not already signed in) */}
                {!storageService.getCustomerUser() && (
                  <div className="rounded-2xl border border-cream-300 bg-cream-50/80 p-3.5 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-ink-800">Your Details</span>
                      <button
                        type="button"
                        onClick={() => setShowAuth(true)}
                        className="text-[11px] font-bold text-accent-700 hover:underline"
                      >
                        Sign in with Google / Email
                      </button>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      <input
                        type="text"
                        value={dinerName}
                        onChange={(e) => setDinerName(e.target.value)}
                        placeholder="Your Name (e.g. Rahul S.)"
                        className="rounded-xl border border-cream-300 bg-white px-3 py-2 text-xs text-ink-900 outline-none focus:border-accent-600"
                      />
                      <input
                        type="email"
                        value={dinerEmail}
                        onChange={(e) => setDinerEmail(e.target.value)}
                        placeholder="Email (e.g. rahul@gmail.com)"
                        className="rounded-xl border border-cream-300 bg-white px-3 py-2 text-xs text-ink-900 outline-none focus:border-accent-600"
                      />
                    </div>
                  </div>
                )}

                {error ? <p className="text-xs font-bold text-red-600">{error}</p> : null}

                <div className="mt-2 flex gap-3">
                  <button
                    type="button"
                    onClick={onClose}
                    className="flex-1 rounded-xl border border-cream-300 py-2.5 text-sm font-bold text-ink-700 transition hover:bg-cream-100"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 rounded-xl bg-accent-600 py-2.5 text-sm font-bold text-white shadow-md transition hover:bg-accent-700"
                  >
                    {editReview ? 'Save Changes' : 'Submit Review'}
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>

      <CustomerAuthModal
        isOpen={showAuth}
        onClose={() => setShowAuth(false)}
        onSuccess={() => {
          setShowAuth(false);
        }}
      />
    </>
  );
}
