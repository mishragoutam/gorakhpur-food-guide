import { LogIn, Sparkles, Store, ShieldCheck, ArrowRight, ArrowLeft, Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Container } from '@/components/ui/Container';
import { showToast } from '@/lib/toast';
import { usePageTitle } from '@/hooks/usePageTitle';
import { ROUTES } from '@/lib/routes';
import { storageService } from '@/services/storageService';

export default function OwnerLoginPage() {
  usePageTitle('Restaurant Owner Login');
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email.trim() || !password) {
      setError('Please enter your owner email and password.');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters.');
      return;
    }

    const cleanEmail = email.trim().toLowerCase();
    const result = storageService.verifyOwnerPassword(cleanEmail, password);

    if (!result.valid || !result.restaurant) {
      setError(
        result.error ||
          'Authentication failed. Please verify your registered email and password.',
      );
      return;
    }

    const matched = result.restaurant;
    storageService.setOwnerSession({
      restaurantId: matched.id,
      restaurantName: matched.name,
      ownerEmail: matched.ownerEmail || cleanEmail,
      ownerName: matched.ownerName || cleanEmail.split('@')[0] || 'Restaurant Owner',
    });

    showToast(`Logged in to Owner Dashboard for ${matched.name}!`);
    navigate(ROUTES.ownerDashboard);
  };

  return (
    <section className="py-10 sm:py-16">
      <Container>
        <Link
          to={ROUTES.home}
          className="inline-flex min-h-11 items-center gap-2 rounded-full text-sm font-semibold text-ink-800 transition-colors hover:text-accent-700"
        >
          <ArrowLeft size={18} />
          Back to home
        </Link>

        <div className="mt-6 mx-auto max-w-4xl overflow-hidden rounded-3xl border border-cream-300 bg-white shadow-xl lg:grid lg:grid-cols-5">
          {/* Brand & Perks Panel */}
          <div className="bg-gradient-to-br from-ink-950 via-ink-900 to-accent-950 p-8 text-white lg:col-span-2 flex flex-col justify-between gap-8">
            <div>
              <div className="flex items-center gap-2.5">
                <span className="flex size-10 items-center justify-center rounded-xl bg-white/15 text-white">
                  <Store size={22} />
                </span>
                <span className="font-display text-lg font-bold">VYORA Owner Hub</span>
              </div>

              <h2 className="mt-6 text-2xl font-bold leading-tight">
                Know what your guests really think.
              </h2>
              <p className="mt-3 text-xs leading-relaxed text-cream-200">
                Manage your Gorakhpur restaurant profile, generate printable QR table tent cards, and learn from verified customer feedback.
              </p>
            </div>

            <div className="space-y-3 text-xs">
              <div className="flex items-center gap-2.5 rounded-xl bg-white/10 p-2.5">
                <ShieldCheck size={18} className="text-amber-400 shrink-0" />
                <span>Instant QR code for billing counter and tables</span>
              </div>
              <div className="flex items-center gap-2.5 rounded-xl bg-white/10 p-2.5">
                <Sparkles size={18} className="text-amber-400 shrink-0" />
                <span>AI sentiment breakdown for food and service speed</span>
              </div>
            </div>
          </div>

          {/* Login Form Panel */}
          <div className="p-8 sm:p-10 lg:col-span-3">
            <div className="mb-6">
              <h1 className="text-2xl font-extrabold text-ink-900">Owner Login</h1>
              <p className="mt-1 text-xs text-ink-600">
                Sign in with your verified owner credentials to access your dashboard.
              </p>
            </div>

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="mb-1 block text-xs font-bold text-ink-800" htmlFor="owner-email">
                  Registered Owner Email
                </label>
                <input
                  id="owner-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="owner@restaurant.com"
                  className="w-full rounded-xl border border-cream-300 px-3.5 py-2.5 text-sm text-ink-900 outline-none focus:border-accent-600 focus:ring-2 focus:ring-accent-100"
                />
              </div>

              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="text-xs font-bold text-ink-800" htmlFor="owner-pw">
                    Password
                  </label>
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="text-[11px] font-semibold text-accent-700 hover:text-accent-800 inline-flex items-center gap-1 cursor-pointer"
                  >
                    {showPassword ? <EyeOff size={12} /> : <Eye size={12} />}
                    <span>{showPassword ? 'Hide' : 'Show'}</span>
                  </button>
                </div>
                <input
                  id="owner-pw"
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your owner password"
                  className="w-full rounded-xl border border-cream-300 px-3.5 py-2.5 text-sm text-ink-900 outline-none focus:border-accent-600 focus:ring-2 focus:ring-accent-100"
                />
              </div>

              {error ? (
                <div className="rounded-xl border border-red-200 bg-red-50 p-3 text-xs text-red-700">
                  <p className="font-semibold">{error}</p>
                  <p className="mt-1 text-[11px] text-red-600">
                    Default demo password for sample restaurants is: <code className="bg-white px-1 py-0.5 rounded font-mono font-bold">Vyora@2026</code>
                  </p>
                </div>
              ) : null}

              <button
                type="submit"
                id="btn-owner-login"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-accent-600 px-6 py-3.5 text-sm font-bold text-white shadow-md transition hover:bg-accent-700 active:scale-[0.99] cursor-pointer"
              >
                <LogIn size={16} />
                Log In to Dashboard
              </button>

              <div className="mt-6 flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-cream-200 text-xs">
                <span className="text-ink-600">Don't have a restaurant account yet?</span>
                <Link
                  to={ROUTES.ownerRegister}
                  className="inline-flex items-center gap-1 font-bold text-accent-700 hover:text-accent-800"
                >
                  Register Your Restaurant
                  <ArrowRight size={14} />
                </Link>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}
