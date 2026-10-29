import { Link, useNavigate } from 'react-router-dom';
import { Store, Sparkles, ArrowLeft } from 'lucide-react';
import { useState } from 'react';
import { Container } from '@/components/ui/Container';
import { showToast } from '@/lib/toast';
import { usePageTitle } from '@/hooks/usePageTitle';
import { ROUTES } from '@/lib/routes';
import { storageService } from '@/services/storageService';
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
  const [phone, setPhone] = useState('');
  const [cuisine, setCuisine] = useState('North Indian');
  const [area, setArea] = useState('Golghar');
  const [error, setError] = useState('');

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!restaurantName.trim() || !ownerName.trim() || !email.trim()) {
      setError('Please fill in your restaurant name, your name, and email.');
      return;
    }

    const restId = `rest-${Date.now()}`;
    const cleanOwnerEmail = email.trim();
    const cleanOwnerName = ownerName.trim();
    const newRestaurant: Restaurant = {
      id: restId,
      name: restaurantName.trim(),
      cuisines: [cuisine],
      popularDishes: [`${cuisine} Platter`, 'Chef Special Starter'],
      imageUrl: null,
      area: area,
      city: 'Gorakhpur',
      address: `${area}, Gorakhpur`,
      phone: phone.trim() || '+91 98380 12345',
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

    // Set owner session for this newly registered restaurant
    storageService.setOwnerSession({
      restaurantId: newRestaurant.id,
      restaurantName: newRestaurant.name,
      ownerEmail: cleanOwnerEmail,
      ownerName: cleanOwnerName,
    });

    showToast(`Registered "${newRestaurant.name}"! Welcome to RateIt.`);
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
                <span className="flex size-9 items-center justify-center rounded-xl bg-forest-100 text-forest-700">
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
              className="text-xs font-bold text-forest-700 hover:text-forest-800"
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
                  className="w-full rounded-xl border border-cream-300 px-3.5 py-2.5 text-sm text-ink-900 outline-none focus:border-forest-600 focus:ring-2 focus:ring-forest-100"
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
                  className="w-full rounded-xl border border-cream-300 px-3.5 py-2.5 text-sm text-ink-900 outline-none focus:border-forest-600 focus:ring-2 focus:ring-forest-100"
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
                  className="w-full rounded-xl border border-cream-300 px-3.5 py-2.5 text-sm text-ink-900 outline-none focus:border-forest-600 focus:ring-2 focus:ring-forest-100"
                />
              </div>

              <div>
                <label className="mb-1 block text-xs font-bold text-ink-800" htmlFor="reg-phone">
                  Phone Number
                </label>
                <input
                  id="reg-phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+91 98380 12345"
                  className="w-full rounded-xl border border-cream-300 px-3.5 py-2.5 text-sm text-ink-900 outline-none focus:border-forest-600 focus:ring-2 focus:ring-forest-100"
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
                  className="w-full rounded-xl border border-cream-300 px-3.5 py-2.5 text-sm text-ink-900 outline-none focus:border-forest-600 focus:ring-2 focus:ring-forest-100 bg-white"
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
                  className="w-full rounded-xl border border-cream-300 px-3.5 py-2.5 text-sm text-ink-900 outline-none focus:border-forest-600 focus:ring-2 focus:ring-forest-100 bg-white"
                >
                  <option>Golghar</option>
                  <option>Civil Lines</option>
                  <option>Medical College Road</option>
                  <option>Betiahata</option>
                  <option>Asuran Chowk</option>
                  <option>Taramandal</option>
                  <option>Mohaddipur</option>
                  <option>Shahpur</option>
                </select>
              </div>
            </div>

            {error ? <p className="text-xs font-semibold text-red-600">{error}</p> : null}

            <div className="pt-3">
              <button
                type="submit"
                id="btn-register-restaurant"
                style={{ backgroundColor: '#2f7d5f', color: '#ffffff' }}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-forest-600 px-6 py-3.5 text-sm font-bold text-white shadow-md transition hover:bg-forest-700 active:scale-[0.99] cursor-pointer"
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
