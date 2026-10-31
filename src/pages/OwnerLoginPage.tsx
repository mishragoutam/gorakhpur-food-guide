import { LogIn, Sparkles, Store, ShieldCheck, ArrowRight, ArrowLeft } from 'lucide-react';
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

    const restaurants = storageService.getRestaurants();
    const cleanEmail = email.trim().toLowerCase();
    const matched = restaurants.find(
      (r) => r.ownerEmail?.toLowerCase() === cleanEmail,
    );

    if (!matched) {
      setError(
        `No restaurant account found for "${email.trim()}". Please enter your registered owner email or register your restaurant below.`,
      );
      return;
    }

    storageService.setOwnerSession({
      restaurantId: matched.id,
      restaurantName: matched.name,
      ownerEmail: matched.ownerEmail || cleanEmail,
      ownerName: matched.ownerName || cleanEmail.split('@')[0] || 'Restaurant Owner',
    });

    showToast(`Logged in to Owner Dashboard for ${matched.name}!`);
    navigate(ROUTES.ownerDashboard);
  };

  const handleSelectPartnerEmail = (partnerEmail: string) => {
    setEmail(partnerEmail);
    setPassword('Owner@123');
    setError('');
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
          <div className="bg-gradient-to-br from-forest-800 via-forest-700 to-forest-600 p-8 text-white lg:col-span-2 flex flex-col justify-between gap-8">
            <div>
              <div className="flex items-center gap-2.5">
                <span className="flex size-10 items-center justify-center rounded-xl bg-white/15 text-white">
                  <Store size={22} />
                </span>
                <span className="font-display text-lg font-bold">RateIt Owner Hub</span>
              </div>

              <h2 className="mt-6 text-2xl font-bold leading-tight">
                Know what your guests really think.
              </h2>
              <p className="mt-3 text-xs leading-relaxed text-emerald-100">
                Manage your Gorakhpur restaurant profile, generate printable QR table tent cards, and learn from verified customer feedback.
              </p>
            </div>

            <div className="space-y-3 text-xs">
              <div className="flex items-center gap-2.5 rounded-xl bg-white/10 p-2.5">
                <ShieldCheck size={18} className="text-emerald-300 shrink-0" />
                <span>Instant QR code for billing counter and tables</span>
              </div>
              <div className="flex items-center gap-2.5 rounded-xl bg-white/10 p-2.5">
                <Sparkles size={18} className="text-emerald-300 shrink-0" />
                <span>AI sentiment breakdown for food and service speed</span>
              </div>
            </div>
          </div>

          {/* Login Form Panel */}
          <div className="p-8 sm:p-10 lg:col-span-3">
            <div className="mb-6">
              <span className="inline-block rounded-full bg-cream-200 px-3 py-1 text-xs font-bold text-ink-800">
                Partner Portal
              </span>
              <h1 className="mt-2 text-2xl font-extrabold text-ink-900 sm:text-3xl">
                Restaurant owner login
              </h1>
              <p className="mt-1 text-xs text-ink-500">
                Log in to manage your menu, standee QR code, and customer reviews.
              </p>
            </div>

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="mb-1 block text-xs font-bold text-ink-800" htmlFor="owner-email">
                  Owner Email Address
                </label>
                <input
                  id="owner-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="owner@restaurant.com"
                  className="w-full rounded-xl border border-cream-300 px-3.5 py-2.5 text-sm text-ink-900 outline-none focus:border-forest-600 focus:ring-2 focus:ring-forest-100"
                />
              </div>

              <div>
                <label className="mb-1 block text-xs font-bold text-ink-800" htmlFor="owner-pw">
                  Password
                </label>
                <input
                  id="owner-pw"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="At least 6 characters"
                  className="w-full rounded-xl border border-cream-300 px-3.5 py-2.5 text-sm text-ink-900 outline-none focus:border-forest-600 focus:ring-2 focus:ring-forest-100"
                />
              </div>

              {error ? <p className="text-xs font-semibold text-red-600">{error}</p> : null}

              <button
                type="submit"
                id="btn-owner-login"
                style={{ backgroundColor: '#2f7d5f', color: '#ffffff' }}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-forest-600 px-6 py-3.5 text-sm font-bold text-white shadow-md transition hover:bg-forest-700 active:scale-[0.99] cursor-pointer"
              >
                <LogIn size={16} />
                Log In to Dashboard
              </button>

              <div className="relative my-4 text-center">
                <hr className="border-cream-300" />
                <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-3 text-[11px] font-semibold text-ink-500 uppercase">
                  Select Registered Partner Account
                </span>
              </div>

              <div className="rounded-2xl border border-cream-300 bg-cream-50/70 p-3">
                <label className="text-[11px] font-bold text-ink-700 block mb-1.5" htmlFor="partner-picker">
                  Quick-fill email for registered partner:
                </label>
                <select
                  id="partner-picker"
                  onChange={(e) => {
                    if (e.target.value) handleSelectPartnerEmail(e.target.value);
                  }}
                  defaultValue=""
                  className="w-full rounded-xl border border-cream-300 bg-white px-3 py-2 text-xs font-semibold text-ink-800 outline-none focus:border-forest-600 cursor-pointer"
                >
                  <option value="" disabled>-- Choose a Gorakhpur Restaurant Account --</option>
                  {storageService.getRestaurants().map((r) => (
                    <option key={r.id} value={r.ownerEmail || ''}>
                      {r.name} ({r.area}) — {r.ownerEmail}
                    </option>
                  ))}
                </select>
                <p className="mt-1 text-[10px] text-ink-500">
                  Selecting an account populates its verified owner credentials for isolated access.
                </p>
              </div>

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
