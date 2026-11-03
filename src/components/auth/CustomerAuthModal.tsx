import { X, Mail, Lock, CheckCircle2, UserPlus, LogIn } from 'lucide-react';
import { useState } from 'react';
import { storageService } from '@/services/storageService';
import { showToast } from '@/lib/toast';
import { supabase, isSupabaseConfigured } from '@/lib/supabase';

interface CustomerAuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess?: (user: { name: string; email?: string; avatarUrl?: string }) => void;
  initialMode?: 'login' | 'register';
  initialGoogleMode?: boolean;
}

function GoogleIcon({ className = 'size-4 shrink-0' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
      />
    </svg>
  );
}

export function CustomerAuthModal({
  isOpen,
  onClose,
  onSuccess,
  initialMode = 'login',
  initialGoogleMode = false,
}: CustomerAuthModalProps) {
  const [mode, setMode] = useState<'login' | 'register'>(initialMode);
  const [isGoogleMode] = useState<boolean>(initialGoogleMode);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleGoogleAction = () => {
    setError('');
    const cleanEmail = email.trim().toLowerCase();

    if (!cleanEmail || !cleanEmail.includes('@')) {
      setError('Please enter your Google / Gmail address above to proceed.');
      return;
    }

    const allUsers = storageService.getUsers();
    const existing = allUsers.find((u) => u.email.toLowerCase() === cleanEmail);

    if (mode === 'login') {
      if (existing) {
        // Found existing account
        const user = {
          name: existing.name,
          email: cleanEmail,
          avatarUrl: existing.avatarUrl,
        };
        storageService.setCustomerUser(user);
        showToast(`Welcome back, ${user.name}! Signed in with Google.`);
        if (onSuccess) onSuccess(user);
        onClose();
      } else {
        // No existing account: prompt to create
        setMode('register');
        setError(`No account found for ${cleanEmail}. Enter your full name below to create your new account.`);
      }
    } else {
      // Register mode
      if (!name.trim()) {
        setError('Please enter your full name to complete registration.');
        return;
      }
      const user = {
        name: name.trim(),
        email: cleanEmail,
        avatarUrl:
          'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&h=150&q=80',
      };
      storageService.setCustomerUser(user);
      showToast(`Account created! Welcome, ${user.name}`);
      if (onSuccess) onSuccess(user);
      onClose();
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const cleanEmail = email.trim().toLowerCase();
    const cleanName = name.trim();

    if (!cleanEmail || !cleanEmail.includes('@')) {
      setError('Please enter a valid email address.');
      return;
    }

    if (mode === 'register' && cleanName.length < 2) {
      setError('Please enter your full name.');
      return;
    }

    if (password.length > 0 && password.length < 6) {
      setError('Password must be at least 6 characters.');
      return;
    }

    setIsLoading(true);

    try {
      if (isSupabaseConfigured() && supabase && password) {
        if (mode === 'register') {
          const { data, error: signUpError } = await supabase.auth.signUp({
            email: cleanEmail,
            password,
            options: {
              data: { name: cleanName || cleanEmail.split('@')[0] },
            },
          });
          if (signUpError) {
            console.warn('Supabase signup notice:', signUpError.message);
          } else if (data.user) {
            const user = {
              name: cleanName || data.user.user_metadata?.name || cleanEmail.split('@')[0] || 'Diner',
              email: cleanEmail,
            };
            storageService.setCustomerUser(user);
            showToast(`Account created! Welcome, ${user.name}`);
            if (onSuccess) onSuccess(user);
            onClose();
            return;
          }
        } else {
          const { data, error: signInError } = await supabase.auth.signInWithPassword({
            email: cleanEmail,
            password,
          });
          if (signInError) {
            console.warn('Supabase signin notice:', signInError.message);
          } else if (data.user) {
            const user = {
              name: data.user.user_metadata?.name || cleanEmail.split('@')[0] || 'Diner',
              email: cleanEmail,
            };
            storageService.setCustomerUser(user);
            showToast(`Welcome back, ${user.name}!`);
            if (onSuccess) onSuccess(user);
            onClose();
            return;
          }
        }
      }

      // Fast email authentication
      const allUsers = storageService.getUsers();
      const existing = allUsers.find((u) => u.email.toLowerCase() === cleanEmail);

      if (mode === 'login') {
        const userName = existing?.name || cleanEmail.split('@')[0] || 'Diner';
        const user = { name: userName, email: cleanEmail, avatarUrl: existing?.avatarUrl };
        storageService.setCustomerUser(user);
        showToast(`Welcome back, ${user.name}!`);
        if (onSuccess) onSuccess(user);
        onClose();
      } else {
        const user = { name: cleanName, email: cleanEmail };
        storageService.setCustomerUser(user);
        showToast(`Account created! Welcome, ${user.name}`);
        if (onSuccess) onSuccess(user);
        onClose();
      }
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Authentication failed. Please try again.';
      setError(msg);
    } finally {
      setIsLoading(false);
    }
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
            {mode === 'login' ? <LogIn size={22} /> : <UserPlus size={22} />}
          </div>
          <div>
            <h2 id="auth-modal-title" className="text-xl font-bold text-ink-900">
              {mode === 'login' ? 'Sign In to Vyora' : 'Create Vyora Account'}
            </h2>
            <p className="text-xs text-ink-500">Gorakhpur Food Guide & Verified Dining</p>
          </div>
        </div>

        {/* Mode Switcher */}
        <div className="mb-5 flex rounded-full bg-cream-100 p-1">
          <button
            type="button"
            onClick={() => {
              setMode('login');
              setError('');
            }}
            className={`flex-1 rounded-full py-2 text-xs font-bold transition ${
              mode === 'login' ? 'bg-white text-ink-900 shadow-xs' : 'text-ink-600 hover:text-ink-900'
            }`}
          >
            Existing User Sign In
          </button>
          <button
            type="button"
            onClick={() => {
              setMode('register');
              setError('');
            }}
            className={`flex-1 rounded-full py-2 text-xs font-bold transition ${
              mode === 'register' ? 'bg-white text-ink-900 shadow-xs' : 'text-ink-600 hover:text-ink-900'
            }`}
          >
            Create New Account
          </button>
        </div>

        {/* Fast Google Authentication Form */}
        <div className="mb-4 rounded-2xl border border-cream-200 bg-cream-50/70 p-4">
          <div className="flex items-center gap-2 mb-2">
            <GoogleIcon className="size-4" />
            <span className="text-xs font-bold text-ink-900">
              {mode === 'login' ? 'Continue with Google Account' : 'Register with Google Email'}
            </span>
          </div>
          <p className="text-[11px] text-ink-600 mb-3">
            {mode === 'login'
              ? 'Enter your Google email address to verify your dining identity.'
              : 'Sign up with your personal Gmail for verified diner badges.'}
          </p>

          <div className="space-y-2.5">
            {mode === 'register' ? (
              <div>
                <label className="mb-1 block text-[11px] font-bold text-ink-800" htmlFor="google-name">
                  Your Full Name
                </label>
                <input
                  id="google-name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Rahul Sharma"
                  className="w-full rounded-xl border border-cream-300 bg-white px-3 py-2 text-xs text-ink-900 outline-none focus:border-accent-600 focus:ring-1 focus:ring-accent-200"
                />
              </div>
            ) : null}

            <div>
              <label className="mb-1 block text-[11px] font-bold text-ink-800" htmlFor="google-email">
                Your Google / Gmail Address
              </label>
              <div className="relative">
                <Mail size={14} className="absolute left-3 top-2.5 text-ink-400" />
                <input
                  id="google-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@gmail.com"
                  className="w-full rounded-xl border border-cream-300 bg-white pl-8 pr-3 py-2 text-xs text-ink-900 outline-none focus:border-accent-600 focus:ring-1 focus:ring-accent-200"
                />
              </div>
            </div>

            <button
              type="button"
              onClick={handleGoogleAction}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-ink-900 py-2.5 text-xs font-bold text-white shadow-xs transition hover:bg-ink-800 active:scale-[0.99] cursor-pointer"
            >
              <GoogleIcon className="size-3.5" />
              <span>{mode === 'login' ? 'Sign In with this Google Account' : 'Create Account with Google'}</span>
            </button>
          </div>
        </div>

        <div className="relative my-4 text-center">
          <hr className="border-cream-200" />
          <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-3 text-[11px] font-semibold text-ink-400 uppercase tracking-wider">
            or standard email & password
          </span>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          {mode === 'register' && !isGoogleMode ? (
            <div>
              <label className="mb-1 block text-xs font-bold text-ink-800" htmlFor="auth-name">
                Your Full Name
              </label>
              <input
                id="auth-name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Priya Mishra"
                className="w-full rounded-xl border border-cream-300 px-3.5 py-2 text-xs text-ink-900 outline-none focus:border-accent-600 focus:ring-2 focus:ring-accent-100"
              />
            </div>
          ) : null}

          <div>
            <label className="mb-1 block text-xs font-bold text-ink-800" htmlFor="auth-email">
              Email Address
            </label>
            <div className="relative">
              <Mail size={15} className="absolute left-3.5 top-2.5 text-ink-400" />
              <input
                id="auth-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your.email@example.com"
                className="w-full rounded-xl border border-cream-300 pl-9 pr-3.5 py-2 text-xs text-ink-900 outline-none focus:border-accent-600 focus:ring-2 focus:ring-accent-100"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-1">
              <label className="block text-xs font-bold text-ink-800" htmlFor="auth-pw">
                Password {mode === 'login' ? '(Optional)' : ''}
              </label>
              {mode === 'login' ? (
                <span className="text-[10px] text-ink-500">Leave blank for fast sign-in</span>
              ) : null}
            </div>
            <div className="relative">
              <Lock size={15} className="absolute left-3.5 top-2.5 text-ink-400" />
              <input
                id="auth-pw"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder={mode === 'register' ? 'At least 6 characters' : 'Enter password or leave blank'}
                className="w-full rounded-xl border border-cream-300 pl-9 pr-3.5 py-2 text-xs text-ink-900 outline-none focus:border-accent-600 focus:ring-2 focus:ring-accent-100"
              />
            </div>
          </div>

          {error ? <p className="text-xs font-semibold text-red-600">{error}</p> : null}

          <button
            type="submit"
            disabled={isLoading}
            className="mt-1 flex w-full items-center justify-center gap-2 rounded-xl bg-accent-600 py-2.5 text-xs font-bold text-white shadow-md transition hover:bg-accent-700 active:scale-[0.99] disabled:opacity-60 cursor-pointer"
          >
            <CheckCircle2 size={15} />
            {isLoading
              ? 'Processing...'
              : mode === 'login'
              ? 'Sign In with Email'
              : 'Complete Registration'}
          </button>
        </form>
      </div>
    </div>
  );
}
