import { X, Plus, Minus, MessageCircle, Phone, ShoppingBag, ExternalLink, Sparkles } from 'lucide-react';
import { useState, useEffect } from 'react';
import { formatRupees } from '@/lib/format';
import type { MenuItem, Restaurant } from '@/types/restaurant';

interface DishDetailOrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  item: MenuItem | null;
  restaurant: Restaurant;
  onAddToTray: (item: MenuItem, quantity: number) => void;
}

export function DishDetailOrderModal({
  isOpen,
  onClose,
  item,
  restaurant,
  onAddToTray,
}: DishDetailOrderModalProps) {
  const [quantity, setQuantity] = useState(1);
  const [prevItem, setPrevItem] = useState(item);

  if (item !== prevItem) {
    setPrevItem(item);
    setQuantity(1);
  }

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen || !item) return null;

  const totalCost = item.price * quantity;
  const rawPhone = (restaurant.whatsappPhone || restaurant.phone || '8382999557').replace(/[^0-9]/g, '');
  const cleanPhone = rawPhone.length === 10 ? `91${rawPhone}` : rawPhone;
  const displayPhone = rawPhone.length === 10 ? `+91 ${rawPhone}` : `+${rawPhone}`;

  const whatsappMessage = encodeURIComponent(
    `Hello ${restaurant.ownerName ? `${restaurant.ownerName} (` : ''}${restaurant.name}${restaurant.ownerName ? ')' : ''}! 👋\n\nI want to order from your menu on VYORA (Gorakhpur Food Guide):\n• ${quantity}x ${item.name} (₹${item.price} each = ₹${totalCost})\n\nCategory: ${item.category}\nDiet: ${item.diet === 'veg' ? 'Pure Veg' : 'Non-Veg'}\nRestaurant Address: ${restaurant.address || restaurant.area}, Gorakhpur\n\nPlease confirm preparation time and availability. Thank you!`,
  );

  const zomatoSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(
    `Zomato ${restaurant.name} Gorakhpur ${item.name}`,
  )}`;

  const handleAdd = () => {
    onAddToTray(item, quantity);
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="dish-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-ink-900/60 p-4 backdrop-blur-xs animate-in fade-in"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative flex max-h-[90vh] w-full max-w-lg flex-col overflow-hidden rounded-3xl border border-cream-300 bg-white shadow-2xl">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close dish details"
          className="absolute right-4 top-4 z-20 flex size-9 items-center justify-center rounded-full bg-white/90 text-ink-700 shadow-md backdrop-blur-xs transition hover:bg-white hover:text-ink-900"
        >
          <X size={18} />
        </button>

        {/* Scrollable Container */}
        <div className="overflow-y-auto">
          {/* Dish Image Banner */}
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-cream-100">
            {item.imageUrl ? (
              <img
                src={item.imageUrl}
                alt={item.name}
                className="size-full object-cover"
                loading="lazy"
              />
            ) : (
              <div className="flex size-full items-center justify-center bg-cream-200 text-ink-400">
                <ShoppingBag size={48} />
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-ink-950/70 via-transparent to-transparent" />

            {/* Badges on Image */}
            <div className="absolute bottom-3 left-4 right-4 flex items-end justify-between">
              <span className="rounded-full bg-black/60 px-3 py-1 text-xs font-semibold text-white backdrop-blur-xs">
                {item.category}
              </span>

              {item.isFeatured ? (
                <span className="flex items-center gap-1 rounded-full bg-amber-500 px-3 py-1 text-xs font-bold text-white shadow-sm">
                  <Sparkles size={13} />
                  Chef's Special
                </span>
              ) : null}
            </div>
          </div>

          {/* Dish Info Body */}
          <div className="p-6">
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="flex items-center gap-2">
                  <span
                    className={
                      item.diet === 'veg'
                        ? 'flex items-center gap-1 text-xs font-bold text-emerald-700'
                        : 'flex items-center gap-1 text-xs font-bold text-rose-700'
                    }
                  >
                    <span
                      className={`inline-block size-2.5 ${
                        item.diet === 'veg' ? 'rounded-full bg-emerald-600' : 'rotate-45 bg-rose-600'
                      }`}
                    />
                    {item.diet === 'veg' ? 'Pure Veg' : 'Non-Veg'}
                  </span>
                  <span className="text-xs text-ink-400">•</span>
                  <span className="text-xs font-medium text-ink-500">{restaurant.name}</span>
                </div>

                <h3 id="dish-modal-title" className="mt-1 text-xl font-extrabold text-ink-900 sm:text-2xl">
                  {item.name}
                </h3>
              </div>

              <div className="text-right shrink-0">
                <div className="text-2xl font-black text-accent-700">{formatRupees(item.price)}</div>
                <div className="text-[11px] text-ink-400">per portion</div>
              </div>
            </div>

            <p className="mt-3 text-sm leading-relaxed text-ink-600">
              {item.description || 'Authentic regional preparation crafted fresh to order with house special spices.'}
            </p>

            {/* Quantity Stepper & Subtotal Box */}
            <div className="mt-6 flex items-center justify-between rounded-2xl border border-cream-200 bg-cream-50/80 p-4">
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-ink-500">Select Quantity</div>
                <div className="mt-0.5 text-xs text-ink-700">Subtotal: <strong className="text-accent-800 text-sm font-black">{formatRupees(totalCost)}</strong></div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                  disabled={quantity <= 1}
                  className="flex size-9 items-center justify-center rounded-full border border-cream-300 bg-white text-ink-800 shadow-2xs transition hover:bg-cream-100 disabled:opacity-40"
                  aria-label="Decrease quantity"
                >
                  <Minus size={16} />
                </button>
                <span className="w-6 text-center text-base font-extrabold text-ink-900">{quantity}</span>
                <button
                  type="button"
                  onClick={() => setQuantity((prev) => Math.min(20, prev + 1))}
                  className="flex size-9 items-center justify-center rounded-full border border-cream-300 bg-white text-ink-800 shadow-2xs transition hover:bg-cream-100"
                  aria-label="Increase quantity"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>

            {/* Order Action Choices */}
            <div className="mt-6 space-y-2.5">
              <div className="flex items-center justify-between rounded-xl bg-emerald-50 px-3.5 py-1.5 border border-emerald-200 text-xs">
                <span className="font-semibold text-emerald-800 flex items-center gap-1.5">
                  <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
                  Owner&apos;s Direct WhatsApp:
                </span>
                <span className="font-bold text-emerald-900">{displayPhone}</span>
              </div>

              <button
                type="button"
                onClick={handleAdd}
                className="flex w-full items-center justify-center gap-2 rounded-2xl bg-accent-600 py-3.5 text-sm font-bold text-white shadow-md transition hover:bg-accent-700 active:scale-[0.99] cursor-pointer"
              >
                <ShoppingBag size={18} />
                <span>Add {quantity} to Dine-in Tray • {formatRupees(totalCost)}</span>
              </button>

              <div className="grid grid-cols-2 gap-2.5">
                <a
                  href={`https://wa.me/${cleanPhone}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-xl bg-emerald-600 py-2.5 text-xs font-bold text-white shadow-xs transition hover:bg-emerald-700"
                >
                  <MessageCircle size={15} />
                  <span>WhatsApp Owner</span>
                </a>

                {restaurant.phone ? (
                  <a
                    href={`tel:${restaurant.phone}`}
                    className="flex items-center justify-center gap-2 rounded-xl border border-cream-300 bg-cream-100 py-2.5 text-xs font-bold text-ink-800 transition hover:bg-cream-200"
                  >
                    <Phone size={15} className="text-ink-700" />
                    <span>Call Owner</span>
                  </a>
                ) : (
                  <a
                    href={zomatoSearchUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 rounded-xl border border-cream-300 bg-cream-100 py-2.5 text-xs font-bold text-ink-800 transition hover:bg-cream-200"
                  >
                    <ExternalLink size={15} className="text-ink-700" />
                    <span>Order Online</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
