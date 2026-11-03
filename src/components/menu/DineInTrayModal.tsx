import { X, Plus, Minus, Trash2, MessageCircle, Phone, CheckCircle2, ShoppingBag } from 'lucide-react';
import { useEffect } from 'react';
import { formatRupees } from '@/lib/format';
import type { MenuItem, Restaurant } from '@/types/restaurant';

export interface TrayItem {
  item: MenuItem;
  quantity: number;
}

interface DineInTrayModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: TrayItem[];
  onUpdateQuantity: (itemId: string | number, delta: number) => void;
  onRemoveItem: (itemId: string | number) => void;
  onClearTray: () => void;
  restaurant: Restaurant;
}

export function DineInTrayModal({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearTray,
  restaurant,
}: DineInTrayModalProps) {
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const totalAmount = items.reduce((sum, entry) => sum + entry.item.price * entry.quantity, 0);
  const totalItemCount = items.reduce((sum, entry) => sum + entry.quantity, 0);

  const rawPhone = (restaurant.phone || '919838091235').replace(/[^0-9]/g, '');
  const cleanPhone = rawPhone.length === 10 ? `91${rawPhone}` : rawPhone;

  const orderLines = items
    .map(
      (entry, idx) =>
        `${idx + 1}. ${entry.quantity}x ${entry.item.name} (${entry.item.diet === 'veg' ? 'Veg' : 'Non-Veg'}) - ₹${
          entry.item.price * entry.quantity
        }`,
    )
    .join('\n');

  const whatsappMessage = encodeURIComponent(
    `Hello ${restaurant.name}! 👋\n\nI want to place an order from your Gorakhpur Food Guide menu:\n\n${orderLines}\n\n*Total Items:* ${totalItemCount}\n*Estimated Bill:* ₹${totalAmount}\n*Address:* ${restaurant.address || restaurant.area}, Gorakhpur\n\nPlease confirm order receipt & preparation time. Thank you!`,
  );

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="tray-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-ink-900/60 p-4 backdrop-blur-xs animate-in fade-in"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative flex max-h-[90vh] w-full max-w-lg flex-col overflow-hidden rounded-3xl border border-cream-300 bg-white shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-cream-200 p-5 sm:p-6">
          <div className="flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-2xl bg-accent-100 text-accent-700">
              <ShoppingBag size={20} />
            </div>
            <div>
              <h3 id="tray-modal-title" className="text-lg font-extrabold text-ink-900">
                Your Dining Tray
              </h3>
              <p className="text-xs text-ink-500">
                {restaurant.name} • {totalItemCount} {totalItemCount === 1 ? 'dish' : 'dishes'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {items.length > 0 ? (
              <button
                type="button"
                onClick={onClearTray}
                className="rounded-full px-2.5 py-1 text-xs font-semibold text-rose-700 hover:bg-rose-50"
              >
                Clear all
              </button>
            ) : null}
            <button
              type="button"
              onClick={onClose}
              className="flex size-8 items-center justify-center rounded-full text-ink-400 hover:bg-cream-100 hover:text-ink-900"
              aria-label="Close tray"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Content list */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-3">
          {items.length === 0 ? (
            <div className="py-12 text-center">
              <div className="mx-auto flex size-12 items-center justify-center rounded-2xl bg-cream-100 text-ink-400">
                <ShoppingBag size={24} />
              </div>
              <p className="mt-3 text-sm font-bold text-ink-800">Your dining tray is empty</p>
              <p className="mt-1 text-xs text-ink-500">
                Click any dish in the menu to add delicious items to your order.
              </p>
              <button
                type="button"
                onClick={onClose}
                className="mt-4 rounded-full bg-accent-600 px-5 py-2 text-xs font-bold text-white shadow-xs hover:bg-accent-700"
              >
                Browse Menu Dishes
              </button>
            </div>
          ) : (
            items.map(({ item, quantity }) => (
              <div
                key={item.id}
                className="flex items-center justify-between gap-3 rounded-2xl border border-cream-200 bg-cream-50/50 p-3.5"
              >
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1.5">
                    <span
                      className={`inline-block size-2 ${
                        item.diet === 'veg' ? 'rounded-full bg-emerald-600' : 'rotate-45 bg-rose-600'
                      }`}
                    />
                    <h4 className="text-sm font-bold text-ink-900 truncate">{item.name}</h4>
                  </div>
                  <div className="mt-1 text-xs text-ink-500">
                    ₹{item.price} × {quantity} ={' '}
                    <strong className="text-accent-800 font-bold">₹{item.price * quantity}</strong>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <div className="flex items-center rounded-full border border-cream-300 bg-white shadow-2xs">
                    <button
                      type="button"
                      onClick={() => onUpdateQuantity(item.id, -1)}
                      className="flex size-7 items-center justify-center rounded-full text-ink-700 hover:bg-cream-100"
                      aria-label="Decrease quantity"
                    >
                      <Minus size={13} />
                    </button>
                    <span className="w-5 text-center text-xs font-bold text-ink-900">{quantity}</span>
                    <button
                      type="button"
                      onClick={() => onUpdateQuantity(item.id, 1)}
                      className="flex size-7 items-center justify-center rounded-full text-ink-700 hover:bg-cream-100"
                      aria-label="Increase quantity"
                    >
                      <Plus size={13} />
                    </button>
                  </div>

                  <button
                    type="button"
                    onClick={() => onRemoveItem(item.id)}
                    className="flex size-7 items-center justify-center text-ink-400 hover:text-rose-600"
                    aria-label={`Remove ${item.name}`}
                  >
                    <Trash2 size={15} />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer actions */}
        {items.length > 0 ? (
          <div className="border-t border-cream-200 bg-white p-5 sm:p-6 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-ink-500">Total Bill Estimate</span>
              <span className="text-2xl font-black text-accent-700">{formatRupees(totalAmount)}</span>
            </div>

            <div className="space-y-2">
              <a
                href={`https://wa.me/${cleanPhone}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-2xl bg-accent-600 py-3.5 text-xs font-bold text-white shadow-md transition hover:bg-accent-700 cursor-pointer"
              >
                <MessageCircle size={16} />
                <span>Send Order via WhatsApp • {formatRupees(totalAmount)}</span>
              </a>

              {restaurant.phone ? (
                <a
                  href={`tel:${restaurant.phone}`}
                  className="flex w-full items-center justify-center gap-2 rounded-xl border border-cream-300 bg-cream-100 py-2.5 text-xs font-bold text-ink-800 transition hover:bg-cream-200"
                >
                  <Phone size={15} className="text-ink-700" />
                  <span>Call to Confirm Order ({restaurant.phone})</span>
                </a>
              ) : null}
            </div>

            <p className="text-center text-[11px] text-ink-400 flex items-center justify-center gap-1">
              <CheckCircle2 size={12} className="text-amber-600" />
              Direct connection with {restaurant.name}. No hidden fees or commissions.
            </p>
          </div>
        ) : null}
      </div>
    </div>
  );
}
