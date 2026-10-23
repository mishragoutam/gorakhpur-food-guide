import { User, X, Sparkles } from 'lucide-react';
import { useState } from 'react';
import { storageService } from '@/services/storageService';
import { showToast } from '@/lib/toast';

interface CustomerAuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess?: (user: { name: string; email?: string }) => void;
  initialMode?: 'login' | 'register';
}

export function CustomerAuthModal({
  isOpen,
  onClose,
  onSuccess,
  initialMode = 'login',
}: CustomerAuthModalProps) {
  const [mode, setMode] = useState<'login' | 'register'>(initialMode);
  const [name, setName] = useState('');
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (mode === 'register' && name.trim().length < 2) {
      setError('Please enter your full name.');
      return;
    }

    if (!identifier.trim()) {
      setError('Please enter a valid email or 10-digit phone number.');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters.');
      return;
    }

    const userName = mode === 'register' ? name.trim() : identifier.split('@')[0] || 'Foodie';
    const user = { name: userName, email: identifier.includes('@') ? identifier : undefined };

    storageService.setCustomerUser(user);
    showToast(`Signed in as ${user.name}`);
    if (onSuccess) onSuccess(user);
    onClose();
  };

  const handleDemoLogin = () => {
    const demo = { name: 'Demo Customer', email: 'demo.foodie@gorakhpur.example' };
    storageService.setCustomerUser(demo);
    showToast('Signed in as Demo Customer (demo)');
    if (onSuccess) onSuccess(demo);
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="auth-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-ink-900/60 p-4 backdrop-blur-xs animate-in fade-in"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-md rounded-3xl border border-cream-300 bg-white p-6 sm:p-8 shadow-2xl">
        <button
          type="button"
          onClick={onClose}
          className="absolute right-5 top-5 rounded-full p-2 text-ink-500 hover:bg-cream-100 hover:text-ink-900"
          aria-label="Close dialog"
        >
          <X size={20} />
        </button>

        <div className="mb-6 flex items-center gap-3">
          <div className="flex size-11 items-center justify-center rounded-2xl bg-accent-100 text-accent-700">
            <User size={22} />
          </div>
          <div>
            <h2 id="auth-modal-title" className="text-xl font-bold text-ink-900">
              {mode === 'login' ? 'Welcome Back' : 'Create Customer Account'}
            </h2>
            <p className="text-xs text-ink-500">RateIt & Gorakhpur Food Guide</p>
          </div>
        </div>

        <div className="mb-5 rounded-xl border border-amber-200 bg-amber-50/80 p-3 text-xs text-amber-900">
          💡 Demo Mode: Accounts are stored in this browser only. No password validation server is contacted.
        </div>

        <div className="mb-5 flex rounded-full bg-cream-100 p-1">
          <button
            type="button"
            onClick={() => {
              setMode('login');
              setError('');
            }}
            className={`flex-1 rounded-full py-2 text-xs font-bold transition ${
              mode === 'login' ? 'bg-white text-ink-900 shadow-sm' : 'text-ink-600 hover:text-ink-900'
            }`}
          >
            Log In
          </button>
          <button
            type="button"
            onClick={() => {
              setMode('register');
              setError('');
            }}
            className={`flex-1 rounded-full py-2 text-xs font-bold transition ${
              mode === 'register' ? 'bg-white text-ink-900 shadow-sm' : 'text-ink-600 hover:text-ink-900'
            }`}
          >
            Register
          </button>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3.5">
          {mode === 'register' ? (
            <div>
              <label className="mb-1 block text-xs font-bold text-ink-800" htmlFor="auth-name">
                Full Name
              </label>
              <input
                id="auth-name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Aarav Mehta"
                className="w-full rounded-xl border border-cream-300 px-3.5 py-2.5 text-sm text-ink-900 outline-none focus:border-accent-600 focus:ring-2 focus:ring-accent-100"
              />
            </div>
          ) : null}

          <div>
            <label className="mb-1 block text-xs font-bold text-ink-800" htmlFor="auth-id">
              Email or 10-digit Phone
            </label>
            <input
              id="auth-id"
              type="text"
              value={identifier}
              onChange={(e) => setIdentifier(e.target.value)}
              placeholder="you@example.com or 9838012345"
              className="w-full rounded-xl border border-cream-300 px-3.5 py-2.5 text-sm text-ink-900 outline-none focus:border-accent-600 focus:ring-2 focus:ring-accent-100"
            />
          </div>

          <div>
            <label className="mb-1 block text-xs font-bold text-ink-800" htmlFor="auth-pw">
              Password
            </label>
            <input
              id="auth-pw"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="At least 6 characters"
              className="w-full rounded-xl border border-cream-300 px-3.5 py-2.5 text-sm text-ink-900 outline-none focus:border-accent-600 focus:ring-2 focus:ring-accent-100"
            />
          </div>

          {error ? <p className="text-xs font-semibold text-red-600">{error}</p> : null}

          <button
            type="submit"
            className="mt-2 flex w-full items-center justify-center rounded-xl bg-accent-600 py-3 text-sm font-bold text-white shadow-md transition hover:bg-accent-700"
          >
            {mode === 'login' ? 'Log In' : 'Create Account'}
          </button>

          <div className="relative my-2 text-center">
            <hr className="border-cream-300" />
            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-3 text-[11px] font-semibold text-ink-500 uppercase">
              Or
            </span>
          </div>

          <button
            type="button"
            onClick={handleDemoLogin}
            className="flex w-full items-center justify-center gap-2 rounded-xl border border-cream-300 bg-cream-50 py-2.5 text-sm font-bold text-ink-800 transition hover:bg-cream-100"
          >
            <Sparkles size={16} className="text-accent-600" />
            Use Demo Login (Instant Access)
          </button>
        </form>
      </div>
    </div>
  );
}
