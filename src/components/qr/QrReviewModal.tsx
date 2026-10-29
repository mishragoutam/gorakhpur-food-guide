import { QrCode, X, Sparkles, Utensils } from 'lucide-react';
import { QrCodeView } from '@/components/ui/QrCodeView';
import { getRestaurantPublicUrl, getRestaurantQrFilename } from '@/lib/restaurantUrl';
import type { Restaurant } from '@/types/restaurant';

interface QrReviewModalProps {
  isOpen: boolean;
  restaurant: Restaurant;
  onClose: () => void;
  onContinueToReview: () => void;
}

export function QrReviewModal({
  isOpen,
  restaurant,
  onClose,
  onContinueToReview,
}: QrReviewModalProps) {
  if (!isOpen) return null;

  const reviewUrl = getRestaurantPublicUrl(restaurant, { queryParams: { qr: 'true' } });
  const filename = getRestaurantQrFilename(restaurant);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="qr-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-ink-900/60 p-4 backdrop-blur-xs animate-in fade-in overflow-y-auto"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative my-8 w-full max-w-md rounded-3xl border border-cream-300 bg-white p-6 sm:p-8 shadow-2xl text-center">
        <button
          type="button"
          onClick={onClose}
          className="absolute right-5 top-5 rounded-full p-2 text-ink-500 hover:bg-cream-100 hover:text-ink-900"
          aria-label="Close dialog"
        >
          <X size={20} />
        </button>

        <div className="mx-auto mb-3 flex size-12 items-center justify-center rounded-2xl bg-forest-100 text-forest-700">
          <QrCode size={26} />
        </div>

        <h2 id="qr-modal-title" className="text-xl font-bold text-ink-900">
          Table QR Review Experience
        </h2>
        <div className="my-2.5 rounded-xl border border-forest-200 bg-forest-50/80 p-2.5 text-xs text-forest-900">
          📱 Table QR Code: Scan with your smartphone camera to submit your verified dining review or save this restaurant.
        </div>

        <div className="my-4 flex justify-center">
          <QrCodeView
            value={reviewUrl}
            restaurantName={restaurant.name}
            filename={filename.replace(/\.png$/, '')}
            size={180}
            showActions={true}
          />
        </div>

        <div className="my-3 flex items-center gap-3 rounded-2xl border border-cream-200 bg-cream-50/60 p-3 text-left">
          <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-accent-100 text-accent-700">
            <Utensils size={20} />
          </div>
          <div className="min-w-0 flex-1">
            <h3 className="truncate text-sm font-bold text-ink-900">{restaurant.name}</h3>
            <p className="truncate text-xs text-ink-500">{restaurant.cuisines.join(' · ')} • {restaurant.area}</p>
          </div>
        </div>

        <button
          type="button"
          onClick={() => {
            onClose();
            onContinueToReview();
          }}
          className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-forest-600 py-3 text-sm font-bold text-white shadow-md transition hover:bg-forest-700"
        >
          <Sparkles size={16} />
          Continue to Review
        </button>
      </div>
    </div>
  );
}
