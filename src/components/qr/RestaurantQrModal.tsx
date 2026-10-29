import { QrCode, X, Printer, ExternalLink, Sparkles } from 'lucide-react';
import { useRef } from 'react';
import { QrCodeView } from '@/components/ui/QrCodeView';
import { getRestaurantPublicUrl, getRestaurantQrFilename } from '@/lib/restaurantUrl';
import type { Restaurant } from '@/types/restaurant';

interface RestaurantQrModalProps {
  isOpen: boolean;
  restaurant: Restaurant | null;
  onClose: () => void;
  tableNumber?: string;
}

export function RestaurantQrModal({
  isOpen,
  restaurant,
  onClose,
  tableNumber,
}: RestaurantQrModalProps) {
  const printRef = useRef<HTMLDivElement>(null);

  if (!isOpen || !restaurant) return null;

  // Generate canonical destination URL for this specific restaurant
  const destinationUrl = getRestaurantPublicUrl(restaurant, {
    queryParams: tableNumber ? { table: tableNumber } : { qr: 'true' },
  });

  const filename = getRestaurantQrFilename(restaurant);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="restaurant-qr-modal-title"
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

        <h2 id="restaurant-qr-modal-title" className="text-xl font-bold text-ink-900">
          Restaurant QR Standee
        </h2>
        <p className="mt-1 text-xs text-ink-500">
          Scan with your smartphone camera to open this restaurant's menu, verified reviews & ratings.
        </p>

        {/* Printable Standee Card Container */}
        <div
          ref={printRef}
          id="printable-qr-standee"
          className="my-5 rounded-3xl border-2 border-forest-800/20 bg-cream-50/70 p-5 shadow-xs"
        >
          <div className="flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider text-accent-700">
            <Sparkles size={14} />
            <span>Gorakhpur Food Guide</span>
          </div>

          <h3 className="mt-1 text-lg font-extrabold text-ink-900">{restaurant.name}</h3>
          <p className="text-xs text-ink-600">
            {restaurant.cuisines.join(' · ')} • {restaurant.area}
          </p>

          {tableNumber ? (
            <div className="mt-2 inline-block rounded-full bg-forest-700 px-3 py-0.5 text-xs font-bold text-white">
              Table {tableNumber}
            </div>
          ) : null}

          {/* QR Code Presentation */}
          <div className="my-4 flex justify-center">
            <QrCodeView
              value={destinationUrl}
              restaurantName={restaurant.name}
              filename={filename.replace(/\.png$/, '')}
              size={190}
              showActions={true}
              showPrint={true}
              onPrint={handlePrint}
            />
          </div>

          <div className="text-[11px] font-medium text-ink-600">
            Scan to explore dishes, reviews & recommendations
          </div>
        </div>

        {/* Direct Destination Link */}
        <div className="flex items-center justify-between rounded-2xl border border-cream-200 bg-cream-50 px-3.5 py-2 text-left text-xs">
          <div className="min-w-0 flex-1">
            <span className="font-semibold text-ink-900">Direct Link:</span>
            <p className="truncate text-ink-600 font-mono text-[11px]">{destinationUrl}</p>
          </div>
          <a
            href={destinationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 inline-flex items-center gap-1 rounded-lg bg-white px-2.5 py-1 text-xs font-semibold text-forest-700 shadow-2xs hover:bg-forest-50"
          >
            Open <ExternalLink size={12} />
          </a>
        </div>

        {/* Action Controls */}
        <div className="mt-5 flex gap-2">
          <button
            type="button"
            onClick={handlePrint}
            className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-forest-700 py-2.5 text-xs font-bold text-white shadow-xs transition hover:bg-forest-800"
          >
            <Printer size={15} />
            Print Standee
          </button>
          <button
            type="button"
            onClick={onClose}
            className="rounded-xl border border-cream-300 bg-white px-4 py-2.5 text-xs font-semibold text-ink-700 hover:bg-cream-100"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
