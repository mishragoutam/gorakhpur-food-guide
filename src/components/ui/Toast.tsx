import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import type { ToastMessage } from '@/lib/toast';

export function ToastContainer() {
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  useEffect(() => {
    const handleToast = (e: Event) => {
      const custom = e as CustomEvent<ToastMessage>;
      if (!custom.detail) return;
      setToasts((prev) => [...prev.slice(-3), custom.detail]);

      setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== custom.detail.id));
      }, 3500);
    };

    window.addEventListener('rateit-toast', handleToast);
    return () => window.removeEventListener('rateit-toast', handleToast);
  }, []);

  if (toasts.length === 0) return null;

  return (
    <div
      aria-live="polite"
      className="fixed bottom-5 left-1/2 z-50 flex -translate-x-1/2 flex-col items-center gap-2 px-4 pointer-events-none"
    >
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className="pointer-events-auto flex items-center gap-2.5 rounded-full bg-ink-900 px-5 py-3 text-sm font-medium text-white shadow-xl transition-all duration-200 animate-in fade-in slide-in-from-bottom-2"
        >
          {toast.type === 'error' ? (
            <AlertCircle size={18} className="shrink-0 text-red-400" />
          ) : toast.type === 'info' ? (
            <Info size={18} className="shrink-0 text-blue-400" />
          ) : (
            <CheckCircle2 size={18} className="shrink-0 text-emerald-400" />
          )}
          <span>{toast.text}</span>
          <button
            type="button"
            onClick={() => setToasts((prev) => prev.filter((t) => t.id !== toast.id))}
            className="ml-2 rounded-full p-1 text-white/70 hover:text-white"
            aria-label="Dismiss notification"
          >
            <X size={14} />
          </button>
        </div>
      ))}
    </div>
  );
}
