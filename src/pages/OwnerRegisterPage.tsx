import { Link, useNavigate } from 'react-router-dom';
import { Store, Sparkles, ArrowLeft, Camera, Upload, Lock, Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';
import { Container } from '@/components/ui/Container';
import { showToast } from '@/lib/toast';
import { usePageTitle } from '@/hooks/usePageTitle';
import { ROUTES } from '@/lib/routes';
import { storageService } from '@/services/storageService';
import { STOREFRONT_PRESETS, compressImageFile } from '@/lib/imageUpload';
import type { CategoryId, Restaurant } from '@/types/restaurant';

function mapCuisineToCategory(cuisine: string): CategoryId {
  switch (cuisine) {
    case 'Mughlai':
    case 'North Indian':
      return 'north-indian';
    case 'Chinese / Indo-Chinese':
      return 'chinese';
    case 'Fast Food & Pizza':
      return 'fast-food';
    case 'Cafe & Bakery':
      return 'cafe';
    case 'Mithai & Sweets':
      return 'sweets';
    case 'Street Food & Chaat':
      return 'street-food';
    default:
      return 'north-indian';
  }
}

export default function OwnerRegisterPage() {
  usePageTitle('Register Your Restaurant');
  const navigate = useNavigate();

  const [restaurantName, setRestaurantName] = useState('');
  const [ownerName, setOwnerName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [phone, setPhone] = useState('');
  const [cuisine, setCuisine] = useState('North Indian');
  const [area, setArea] = useState('Golghar');
  const [selectedStorefrontUrl, setSelectedStorefrontUrl] = useState<string>(
    STOREFRONT_PRESETS[0]?.url || '',
  );
  const [logoUrl, setLogoUrl] = useState<string>('');
  const [isUploadingPhoto, setIsUploadingPhoto] = useState(false);
  const [error, setError] = useState('');

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!restaurantName.trim() || !ownerName.trim() || !email.trim()) {
      setError('Please fill in your restaurant name, your name, and email.');
      return;
    }

    if (!password) {
      setError('Please create a secure password for your owner account.');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters long.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match. Please re-enter your password.');
      return;
    }

    const restId = `rest-${Date.now()}`;
    const cleanOwnerEmail = email.trim().toLowerCase();
    const cleanOwnerName = ownerName.trim();
    const newRestaurant: Restaurant = {
      id: restId,
      name: restaurantName.trim(),
      cuisines: [cuisine],
      popularDishes: [`${cuisine} Platter`, 'Chef Special Starter'],
      imageUrl: selectedStorefrontUrl || null,
      logoUrl: logoUrl.trim() || undefined,
      area: area,
      city: 'Gorakhpur',
      address: `${area}, Gorakhpur`,
      phone: phone.trim() || '+91 98380 12345',
      whatsappPhone: phone.trim() || '+91 98380 12345',
      costForTwo: 450,
      averageRating: 5.0,
      reviewCount: 0,
      categories: [mapCuisineToCategory(cuisine)],
      openTime: '11:00',
      closeTime: '23:00',
      openDays: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      diet: 'both',
      status: 'Active',
      ownerName: cleanOwnerName,
      ownerEmail: cleanOwnerEmail,
      ownerPassword: password,
      passwordUpdatedAt: new Date().toISOString(),
      description: `Welcome to ${restaurantName.trim()} in ${area}, Gorakhpur! Serving authentic ${cuisine} dishes with fresh ingredients.`,
      facilities: ['Air Conditioned', 'Free Wi-Fi', 'Family Friendly', 'Card Payments'],
      menu: [
        {
          id: `dish-${Date.now()}-1`,
          name: `${cuisine} Chef Special Platter`,
          price: 249,
          category: 'Main Course',
          diet: 'veg',
          description: 'Special prepared dish featuring chef signature spices.',
          imageUrl: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80',
          isAvailable: true,
          isFeatured: true,
        },
        {
          id: `dish-${Date.now()}-2`,
          name: 'Golden Crispy Starter',
          price: 149,
          category: 'Starters',
          diet: 'veg',
          description: 'Flavourful starter prepared fresh to order with house mint dip.',
          imageUrl: 'https://images.unsplash.com/photo-1576107232684-1279f3908594?auto=format&fit=crop&w=600&q=80',
          isAvailable: true,
          isFeatured: true,
        },
      ],
      ratingsBreakdown: {
        food: 5.0,
        taste: 5.0,
        hygiene: 5.0,
        service: 5.0,
        ambience: 5.0,
      },
      priceRange: { min: 200, max: 600 },
      distanceKm: 0.8,
      isDemo: false,
    };

    // Save newly created restaurant
    storageService.createRestaurant(newRestaurant);
    storageService.setOwnerPassword(cleanOwnerEmail, password);

    // Set owner session for this newly registered restaurant
    storageService.setOwnerSession({
      restaurantId: newRestaurant.id,
      restaurantName: newRestaurant.name,
      ownerEmail: cleanOwnerEmail,
      ownerName: cleanOwnerName,
    });

    showToast(`Registered "${newRestaurant.name}"! Welcome to VYORA.`);
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

        <div className="mt-6 mx-auto max-w-3xl rounded-3xl border border-cream-300 bg-white p-6 sm:p-10 shadow-xl">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-3 border-b border-cream-200 pb-5">
            <div>
              <div className="flex items-center gap-2">
                <span className="flex size-9 items-center justify-center rounded-xl bg-accent-100 text-accent-700">
                  <Store size={20} />
                </span>
                <span className="rounded-full bg-accent-100 px-3 py-0.5 text-xs font-bold text-accent-800">
                  Coming soon
                </span>
              </div>
              <h1 className="mt-2 text-2xl font-extrabold text-ink-900 sm:text-3xl">
                Register your restaurant
              </h1>
              <p className="mt-1 text-xs text-ink-600 sm:text-sm">
                Get discovered by diners in Gorakhpur and generate custom QR standees for honest table feedback.
              </p>
            </div>
            <Link
              to={ROUTES.ownerLogin}
              className="text-xs font-bold text-accent-700 hover:text-accent-800"
            >
              Already registered? Owner login
            </Link>
          </div>

          <form onSubmit={handleRegister} className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1 block text-xs font-bold text-ink-800" htmlFor="reg-rname">
                  Restaurant / Cafe Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="reg-rname"
                  type="text"
                  value={restaurantName}
                  onChange={(e) => setRestaurantName(e.target.value)}
                  placeholder="e.g. Royal Awadh Rasoi"
                  className="w-full rounded-xl border border-cream-300 px-3.5 py-2.5 text-sm text-ink-900 outline-none focus:border-accent-600 focus:ring-2 focus:ring-accent-100"
                />
              </div>

              <div>
                <label className="mb-1 block text-xs font-bold text-ink-800" htmlFor="reg-oname">
                  Owner / Manager Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="reg-oname"
                  type="text"
                  value={ownerName}
                  onChange={(e) => setOwnerName(e.target.value)}
                  placeholder="e.g. Ramesh Srivastava"
                  className="w-full rounded-xl border border-cream-300 px-3.5 py-2.5 text-sm text-ink-900 outline-none focus:border-accent-600 focus:ring-2 focus:ring-accent-100"
                />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1 block text-xs font-bold text-ink-800" htmlFor="reg-email">
                  Business Email <span className="text-red-500">*</span>
                </label>
                <input
                  id="reg-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="owner@restaurant.com"
                  className="w-full rounded-xl border border-cream-300 px-3.5 py-2.5 text-sm text-ink-900 outline-none focus:border-accent-600 focus:ring-2 focus:ring-accent-100"
                />
              </div>

              <div>
                <label className="mb-1 block text-xs font-bold text-ink-800" htmlFor="reg-phone">
                  Owner&apos;s WhatsApp &amp; Order Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  id="reg-phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="e.g. 8382999557 or +91 98380 12345"
                  className="w-full rounded-xl border border-cream-300 px-3.5 py-2.5 text-sm text-ink-900 outline-none focus:border-accent-600 focus:ring-2 focus:ring-accent-100"
                />
                <p className="mt-1 text-[11px] text-ink-500">
                  Customers ordering food or booking tables will be connected directly to this WhatsApp number.
                </p>
              </div>
            </div>

            {/* Account Password & Security */}
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="text-xs font-bold text-ink-800 flex items-center gap-1.5" htmlFor="reg-pw">
                    <Lock size={13} className="text-accent-700" />
                    Account Password <span className="text-red-500">*</span>
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
                  id="reg-pw"
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Min 6 characters"
                  className="w-full rounded-xl border border-cream-300 px-3.5 py-2.5 text-sm text-ink-900 outline-none focus:border-accent-600 focus:ring-2 focus:ring-accent-100"
                />
              </div>

              <div>
                <label className="mb-1 block text-xs font-bold text-ink-800" htmlFor="reg-confirm-pw">
                  Confirm Password <span className="text-red-500">*</span>
                </label>
                <input
                  id="reg-confirm-pw"
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Re-enter password"
                  className="w-full rounded-xl border border-cream-300 px-3.5 py-2.5 text-sm text-ink-900 outline-none focus:border-accent-600 focus:ring-2 focus:ring-accent-100"
                />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1 block text-xs font-bold text-ink-800" htmlFor="reg-cuisine">
                  Primary Cuisine
                </label>
                <select
                  id="reg-cuisine"
                  value={cuisine}
                  onChange={(e) => setCuisine(e.target.value)}
                  className="w-full rounded-xl border border-cream-300 px-3.5 py-2.5 text-sm text-ink-900 outline-none focus:border-accent-600 focus:ring-2 focus:ring-accent-100 bg-white"
                >
                  <option>North Indian</option>
                  <option>Mughlai</option>
                  <option>Chinese / Indo-Chinese</option>
                  <option>Fast Food & Pizza</option>
                  <option>Cafe & Bakery</option>
                  <option>Mithai & Sweets</option>
                  <option>Street Food & Chaat</option>
                </select>
              </div>

              <div>
                <label className="mb-1 block text-xs font-bold text-ink-800" htmlFor="reg-area">
                  Locality / Area in Gorakhpur
                </label>
                <select
                  id="reg-area"
                  value={area}
                  onChange={(e) => setArea(e.target.value)}
                  className="w-full rounded-xl border border-cream-300 px-3.5 py-2.5 text-sm text-ink-900 outline-none focus:border-accent-600 focus:ring-2 focus:ring-accent-100 bg-white"
                >
                  <option>Golghar</option>
                  <option>Civil Lines</option>
                  <option>Medical College Road</option>
                  <option>Betiahata</option>
                  <option>Asuran Chowk</option>
                  <option>Taramandal</option>
                  <option>Mohaddipur</option>
                  <option>Shahpur</option>
                  <option>Bank Road</option>
                </select>
              </div>
            </div>

            {/* Storefront Atmosphere / Photo */}
            <div className="rounded-2xl border border-cream-200 bg-cream-50/70 p-4 space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold text-ink-800 flex items-center gap-1.5">
                  <Camera size={14} className="text-accent-700" />
                  Storefront Photo & Ambience (Optional)
                </label>
                <label className="inline-flex items-center gap-1 text-[11px] font-bold text-accent-700 hover:text-accent-800 cursor-pointer">
                  <Upload size={12} />
                  <span>{isUploadingPhoto ? 'Uploading...' : 'Upload custom photo'}</span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={async (e) => {
                      const file = e.target.files?.[0];
                      if (!file) return;
                      try {
                        setIsUploadingPhoto(true);
                        const compressed = await compressImageFile(file, 1200, 800, 0.85);
                        setSelectedStorefrontUrl(compressed);
                        showToast('Storefront photo uploaded!');
                      } catch {
                        showToast('Failed to load photo', 'error');
                      } finally {
                        setIsUploadingPhoto(false);
                      }
                    }}
                    className="hidden"
                  />
                </label>
              </div>

              {/* Presets Grid */}
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                {STOREFRONT_PRESETS.map((preset) => {
                  const isSelected = selectedStorefrontUrl === preset.url;
                  return (
                    <button
                      key={preset.name}
                      type="button"
                      onClick={() => setSelectedStorefrontUrl(preset.url)}
                      className={`rounded-xl overflow-hidden border p-1 text-left transition cursor-pointer ${
                        isSelected
                          ? 'border-accent-600 ring-2 ring-accent-400 bg-accent-50'
                          : 'border-cream-300 bg-white hover:border-cream-400'
                      }`}
                    >
                      <img
                        src={preset.url}
                        alt={preset.name}
                        className="aspect-[4/3] w-full rounded-lg object-cover"
                        loading="lazy"
                      />
                      <span className="block mt-1 text-[9px] font-bold text-ink-800 truncate">
                        {preset.name}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Brand Logo (Optional) */}
              <div className="pt-2 border-t border-cream-200">
                <div className="flex items-center justify-between mb-1">
                  <label className="text-xs font-bold text-ink-800" htmlFor="reg-logo">
                    Brand Logo URL (Optional)
                  </label>
                  <label className="inline-flex items-center gap-1 text-[11px] font-bold text-accent-700 hover:text-accent-800 cursor-pointer">
                    <Upload size={12} />
                    <span>Upload logo</span>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={async (e) => {
                        const file = e.target.files?.[0];
                        if (!file) return;
                        try {
                          const compressed = await compressImageFile(file, 400, 400, 0.85);
                          setLogoUrl(compressed);
                          showToast('Brand logo uploaded!');
                        } catch {
                          showToast('Failed to load logo', 'error');
                        }
                      }}
                      className="hidden"
                    />
                  </label>
                </div>
                <input
                  id="reg-logo"
                  type="url"
                  value={logoUrl}
                  onChange={(e) => setLogoUrl(e.target.value)}
                  placeholder="https://example.com/logo.png (or upload above)"
                  className="w-full rounded-xl border border-cream-300 px-3.5 py-2 text-xs text-ink-900 outline-none focus:border-accent-600 bg-white"
                />
              </div>
            </div>

            {error ? <p className="text-xs font-semibold text-red-600">{error}</p> : null}

            <div className="pt-3">
              <button
                type="submit"
                id="btn-register-restaurant"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-accent-600 px-6 py-3.5 text-sm font-bold text-white shadow-md transition hover:bg-accent-700 active:scale-[0.99] cursor-pointer"
              >
                <Sparkles size={16} />
                Register Restaurant & Launch Dashboard
              </button>
            </div>
          </form>
        </div>
      </Container>
    </section>
  );
}
