import {
  BarChart3,
  Store,
  UtensilsCrossed,
  QrCode,
  MessageSquare,
  TrendingUp,
  Lightbulb,
  Trophy,
  Settings,
  LogOut,
  Menu as MenuIcon,
  X,
  Plus,
  Edit2,
  Trash2,
  Check,
  Printer,
  Sparkles,
  Clock,
  MessageSquareReply,
  Database,
  Cloud,
  RefreshCw,
  AlertTriangle,
  ExternalLink,
  ShieldCheck,
  Calendar,
  Shield,
  Upload,
  Camera,
  Link2,
  Lock,
  Eye,
  EyeOff,
  Phone,
  MessageCircle,
} from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { QrCodeView } from '@/components/ui/QrCodeView';
import { getRestaurantPublicUrl, getRestaurantQrFilename } from '@/lib/restaurantUrl';
import { StarRating } from '@/components/ui/StarRating';
import { FoodArt } from '@/components/art/FoodArt';
import { showToast } from '@/lib/toast';
import { usePageTitle } from '@/hooks/usePageTitle';
import { ROUTES } from '@/lib/routes';
import { storageService } from '@/services/storageService';
import { compressImageFile, STOREFRONT_PRESETS, FOOD_DISH_PRESETS } from '@/lib/imageUpload';
import type { MenuItem, Restaurant, Review, TableBooking } from '@/types/restaurant';

type TabId =
  | 'overview'
  | 'bookings'
  | 'profile'
  | 'menu'
  | 'qr'
  | 'reviews'
  | 'insights'
  | 'ai'
  | 'competitors'
  | 'settings';

interface TabConfig {
  id: TabId;
  label: string;
  icon: typeof BarChart3;
}

const TABS: TabConfig[] = [
  { id: 'overview', label: 'Overview', icon: BarChart3 },
  { id: 'bookings', label: 'Table Bookings', icon: Calendar },
  { id: 'profile', label: 'Restaurant Profile', icon: Store },
  { id: 'menu', label: 'Menu Management', icon: UtensilsCrossed },
  { id: 'qr', label: 'QR Code Standee', icon: QrCode },
  { id: 'reviews', label: 'Customer Reviews', icon: MessageSquare },
  { id: 'insights', label: 'Customer Insights', icon: TrendingUp },
  { id: 'ai', label: 'AI Suggestions', icon: Lightbulb },
  { id: 'competitors', label: 'Competitor Ranking', icon: Trophy },
  { id: 'settings', label: 'Settings', icon: Settings },
];

const MENU_CATEGORIES = ['All', 'Starters', 'Main Course', 'Breads', 'Desserts', 'Beverages'];

function getInitialOwnerData() {
  const session = storageService.getOwnerSession();
  const restId = session?.restaurantId;
  const rest = restId ? storageService.getRestaurantById(restId) : null;
  const reviews = rest ? storageService.getReviews(rest.id) : [];
  return { rest, reviews };
}

export default function OwnerDashboardPage() {
  usePageTitle('Restaurant Owner Dashboard');
  const navigate = useNavigate();

  const [initialData] = useState(() => getInitialOwnerData());
  const [activeTab, setActiveTab] = useState<TabId>('overview');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [restaurant, setRestaurant] = useState<Restaurant | null>(initialData.rest);
  const [reviews, setReviews] = useState<Review[]>(initialData.reviews);
  const [bookings, setBookings] = useState<TableBooking[]>(() =>
    initialData.rest ? storageService.getBookings(initialData.rest.id, initialData.rest.name) : [],
  );
  const [bookingStatusFilter, setBookingStatusFilter] = useState<'All' | 'Confirmed' | 'Completed' | 'Cancelled'>('All');
  const [isSyncingBookings, setIsSyncingBookings] = useState(false);
  const [isSyncingDatabase, setIsSyncingDatabase] = useState(false);

  // Menu sub-state
  const [selectedMenuCat, setSelectedMenuCat] = useState('All');
  const [searchDish, setSearchDish] = useState('');
  const [isDishModalOpen, setIsDishModalOpen] = useState(false);
  const [editingDish, setEditingDish] = useState<MenuItem | null>(null);
  const [dishName, setDishName] = useState('');
  const [dishPrice, setDishPrice] = useState(199);
  const [dishCategory, setDishCategory] = useState('Main Course');
  const [dishDiet, setDishDiet] = useState<'veg' | 'nonveg'>('veg');
  const [dishDesc, setDishDesc] = useState('');
  const [dishImageUrl, setDishImageUrl] = useState('');
  const [isUploadingDishImg, setIsUploadingDishImg] = useState(false);

  // QR sub-state
  const [tableSelection, setTableSelection] = useState<string>('1');
  const [isBatchPrintModalOpen, setIsBatchPrintModalOpen] = useState(false);
  const [customQrBaseUrl, setCustomQrBaseUrl] = useState<string>(() => {
    if (typeof window !== 'undefined' && window.location?.origin) {
      return window.location.origin;
    }
    return '';
  });

  // Profile sub-state
  const [profileName, setProfileName] = useState(initialData.rest?.name || '');
  const [profileDesc, setProfileDesc] = useState(initialData.rest?.description || '');
  const [profilePhone, setProfilePhone] = useState(initialData.rest?.phone || '+91 98380 12345');
  const [profileAddress, setProfileAddress] = useState(
    initialData.rest?.address || (initialData.rest ? `${initialData.rest.area}, ${initialData.rest.city}` : ''),
  );
  const [profileOpenTime, setProfileOpenTime] = useState(initialData.rest?.openTime || '11:00');
  const [profileCloseTime, setProfileCloseTime] = useState(initialData.rest?.closeTime || '23:00');
  const [profileLogoUrl, setProfileLogoUrl] = useState(initialData.rest?.logoUrl || '');
  const [profileImageUrl, setProfileImageUrl] = useState(initialData.rest?.imageUrl || '');
  const [isUploadingLogo, setIsUploadingLogo] = useState(false);
  const [isUploadingStorefront, setIsUploadingStorefront] = useState(false);

  // Reviews sub-state
  const [starFilter, setStarFilter] = useState<string>('all');
  const [searchReview, setSearchReview] = useState('');
  const [replyTargetReview, setReplyTargetReview] = useState<Review | null>(null);
  const [replyText, setReplyText] = useState('');

  // Owner Password Manager sub-state
  const [currentOwnerPw, setCurrentOwnerPw] = useState('');
  const [newOwnerPw, setNewOwnerPw] = useState('');
  const [confirmOwnerPw, setConfirmOwnerPw] = useState('');
  const [showOwnerPw, setShowOwnerPw] = useState(false);
  const [pwChangeError, setPwChangeError] = useState('');
  const [pwChangeSuccess, setPwChangeSuccess] = useState('');
  const [isChangingPw, setIsChangingPw] = useState(false);

  const loadData = () => {
    const session = storageService.getOwnerSession();
    const restId = session?.restaurantId;
    if (!restId) {
      setRestaurant(null);
      setReviews([]);
      return;
    }

    const rest = storageService.getRestaurantById(restId);
    setRestaurant(rest);
    if (rest) {
      setProfileName(rest.name);
      setProfileDesc(rest.description);
      setProfilePhone(rest.phone || '+91 98380 12345');
      setProfileAddress(rest.address || `${rest.area}, ${rest.city}`);
      setProfileOpenTime(rest.openTime || '11:00');
      setProfileCloseTime(rest.closeTime || '23:00');
      setProfileLogoUrl(rest.logoUrl || '');
      setProfileImageUrl(rest.imageUrl || '');

      const allReviews = storageService.getReviews(rest.id);
      setReviews(allReviews);
      setBookings(storageService.getBookings(rest.id, rest.name));
    } else {
      setReviews([]);
      setBookings([]);
    }
  };

  const handleSyncBookings = async () => {
    setIsSyncingBookings(true);
    try {
      await storageService.fetchBookingsFromCloud();
      loadData();
      showToast('Reservations synchronized with cloud', 'success');
    } catch {
      showToast('Could not sync reservations from cloud', 'error');
    } finally {
      setIsSyncingBookings(false);
    }
  };

  useEffect(() => {
    const session = storageService.getOwnerSession();
    if (!session?.restaurantId) {
      showToast('Please log in with your restaurant owner credentials', 'info');
      navigate(ROUTES.ownerLogin);
      return;
    }
    const handleStorageChange = () => loadData();
    window.addEventListener('rateit-storage-change', handleStorageChange);
    window.addEventListener('storage', handleStorageChange);

    // Fetch cloud bookings immediately on dashboard load
    storageService.fetchBookingsFromCloud().then(() => {
      loadData();
    }).catch(() => {});

    // Live polling for cross-device reservations (e.g. diner booking on phone)
    const pollInterval = setInterval(() => {
      storageService.fetchBookingsFromCloud().then(() => {
        loadData();
      }).catch(() => {});
    }, 5000);

    return () => {
      window.removeEventListener('rateit-storage-change', handleStorageChange);
      window.removeEventListener('storage', handleStorageChange);
      clearInterval(pollInterval);
    };
  }, [navigate]);

  const competitorsList = useMemo(() => {
    const all = storageService.getRestaurants();
    const sorted = [...all].sort((a, b) => b.averageRating - a.averageRating);
    return sorted.slice(0, 8).map((r) => {
      const isYou = r.id === restaurant?.id;
      return {
        name: isYou ? `${r.name} (You)` : r.name,
        rating: r.averageRating,
        count: r.reviewCount,
        food: r.ratingsBreakdown?.food ?? 4.5,
        service: r.ratingsBreakdown?.service ?? 4.2,
        dist: isYou ? '0.0 km' : `${r.distanceKm || 1.2} km`,
        you: isYou,
      };
    });
  }, [restaurant]);

  const handleLogout = () => {
    storageService.setOwnerSession(null);
    showToast('Logged out of owner portal');
    navigate(ROUTES.ownerLogin);
  };

  const handleLogoFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    try {
      setIsUploadingLogo(true);
      const compressed = await compressImageFile(file, 400, 400, 0.85);
      setProfileLogoUrl(compressed);
      showToast('Brand logo uploaded and compressed successfully!');
    } catch (err) {
      showToast(err instanceof Error ? err.message : 'Failed to load logo', 'error');
    } finally {
      setIsUploadingLogo(false);
    }
  };

  const handleStorefrontFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    try {
      setIsUploadingStorefront(true);
      const compressed = await compressImageFile(file, 1200, 800, 0.85);
      setProfileImageUrl(compressed);
      showToast('Storefront photo uploaded and compressed successfully!');
    } catch (err) {
      showToast(err instanceof Error ? err.message : 'Failed to load storefront photo', 'error');
    } finally {
      setIsUploadingStorefront(false);
    }
  };

  const handleDishImageFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    try {
      setIsUploadingDishImg(true);
      const compressed = await compressImageFile(file, 800, 800, 0.85);
      setDishImageUrl(compressed);
      showToast('Dish photo uploaded and compressed successfully!');
    } catch (err) {
      showToast(err instanceof Error ? err.message : 'Failed to load dish photo', 'error');
    } finally {
      setIsUploadingDishImg(false);
    }
  };

  const handleChangeOwnerPassword = (e: React.FormEvent) => {
    e.preventDefault();
    setPwChangeError('');
    setPwChangeSuccess('');

    if (!restaurant) return;
    if (!currentOwnerPw || !newOwnerPw) {
      setPwChangeError('Please enter both your current password and a new password.');
      return;
    }
    if (newOwnerPw.length < 6) {
      setPwChangeError('New password must be at least 6 characters long.');
      return;
    }
    if (newOwnerPw !== confirmOwnerPw) {
      setPwChangeError('New passwords do not match. Please verify your entries.');
      return;
    }

    setIsChangingPw(true);
    const res = storageService.changeOwnerPassword(restaurant.id, currentOwnerPw, newOwnerPw);
    setIsChangingPw(false);

    if (res.success) {
      setPwChangeSuccess('Your owner account password has been updated successfully!');
      setCurrentOwnerPw('');
      setNewOwnerPw('');
      setConfirmOwnerPw('');
      showToast('Password updated successfully!');
      loadData();
    } else {
      setPwChangeError(res.error || 'Failed to update password.');
    }
  };

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    if (!restaurant) return;

    storageService.updateRestaurant(restaurant.id, {
      name: profileName,
      description: profileDesc,
      phone: profilePhone,
      whatsappPhone: profilePhone,
      address: profileAddress,
      openTime: profileOpenTime,
      closeTime: profileCloseTime,
      logoUrl: profileLogoUrl.trim() || undefined,
      imageUrl: profileImageUrl.trim() || null,
    });
    showToast('Restaurant profile & visuals updated!');
    loadData();
  };

  const handleSaveDish = (e: React.FormEvent) => {
    e.preventDefault();
    if (!restaurant) return;

    const currentMenu = [...(restaurant.menu || [])];

    if (editingDish) {
      const idx = currentMenu.findIndex((m) => m.id === editingDish.id);
      if (idx >= 0 && currentMenu[idx]) {
        currentMenu[idx] = {
          ...editingDish,
          name: dishName,
          price: Number(dishPrice),
          category: dishCategory,
          diet: dishDiet,
          description: dishDesc,
          imageUrl: dishImageUrl.trim() || undefined,
        };
      }
      showToast(`Updated ${dishName}`);
    } else {
      const newDish: MenuItem = {
        id: `dish-${Date.now()}`,
        name: dishName,
        price: Number(dishPrice),
        category: dishCategory,
        diet: dishDiet,
        description: dishDesc,
        imageUrl: dishImageUrl.trim() || undefined,
        isAvailable: true,
        isFeatured: false,
      };
      currentMenu.unshift(newDish);
      showToast(`Added ${dishName} to menu`);
    }

    storageService.updateRestaurant(restaurant.id, { menu: currentMenu });
    setIsDishModalOpen(false);
    setEditingDish(null);
    loadData();
  };

  const toggleDishAvailability = (dishId: string | number) => {
    if (!restaurant) return;
    const currentMenu = [...(restaurant.menu || [])];
    const idx = currentMenu.findIndex((m) => m.id === dishId);
    const item = currentMenu[idx];
    if (idx >= 0 && item) {
      item.isAvailable = !item.isAvailable;
      storageService.updateRestaurant(restaurant.id, { menu: currentMenu });
      showToast(
        `${item.name} marked as ${item.isAvailable ? 'In Stock' : 'Sold Out'}`,
      );
      loadData();
    }
  };

  const deleteDish = (dishId: string | number) => {
    if (!restaurant) return;
    const currentMenu = (restaurant.menu || []).filter((m) => m.id !== dishId);
    storageService.updateRestaurant(restaurant.id, { menu: currentMenu });
    showToast('Dish removed from menu');
    loadData();
  };

  const openAddDishModal = (dish?: MenuItem) => {
    if (dish) {
      setEditingDish(dish);
      setDishName(dish.name);
      setDishPrice(dish.price);
      setDishCategory(dish.category);
      setDishDiet(dish.diet === 'nonveg' ? 'nonveg' : 'veg');
      setDishDesc(dish.description);
      setDishImageUrl(dish.imageUrl || '');
    } else {
      setEditingDish(null);
      setDishName('');
      setDishPrice(199);
      setDishCategory('Main Course');
      setDishDiet('veg');
      setDishDesc('');
      setDishImageUrl('');
    }
    setIsDishModalOpen(true);
  };

  const handleSendReply = (e: React.FormEvent) => {
    e.preventDefault();
    if (!replyTargetReview || !replyText.trim()) return;

    storageService.updateReview(replyTargetReview.id, {
      ownerReply: {
        text: replyText.trim(),
        date: new Date().toISOString().slice(0, 10),
      },
    });

    showToast('Reply published to customer review!');
    setReplyTargetReview(null);
    setReplyText('');
    loadData();
  };

  if (!restaurant) {
    return (
      <section className="py-16 sm:py-24 bg-cream-50/50 min-h-[70vh] flex items-center justify-center">
        <div className="mx-auto max-w-lg text-center rounded-3xl border border-cream-300 bg-white p-8 sm:p-12 shadow-card">
          <div className="mx-auto flex size-16 items-center justify-center rounded-2xl bg-accent-100 text-accent-700">
            <Store size={32} />
          </div>
          <h2 className="mt-4 text-2xl font-bold text-ink-900">No Restaurant Connected</h2>
          <p className="mt-2 text-sm text-ink-600">
            You don't have an active restaurant registered yet, or all sample data has been cleared.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3">
            <Link
              to={ROUTES.ownerRegister}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent-600 px-5 py-3 text-sm font-bold text-white shadow-sm hover:bg-accent-700 cursor-pointer"
              style={{ backgroundColor: '#b84221', color: '#ffffff' }}
            >
              <Plus size={16} />
              Register New Restaurant
            </Link>
            <button
              type="button"
              onClick={() => {
                storageService.loadDemoData();
                showToast('Sample restaurants loaded!');
                loadData();
              }}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-cream-300 bg-cream-50 px-5 py-3 text-sm font-bold text-ink-800 hover:bg-cream-100 cursor-pointer"
            >
              <Sparkles size={16} />
              Load Sample Data
            </button>
          </div>
        </div>
      </section>
    );
  }

  const qrUrl = getRestaurantPublicUrl(restaurant, {
    customBaseUrl: customQrBaseUrl || undefined,
    queryParams: {
      qr: 'standee',
      table: tableSelection === 'counter' ? 'Counter' : tableSelection,
    },
  });
  const qrFilename = getRestaurantQrFilename(restaurant);

  const filteredDishes = (restaurant.menu || []).filter((d) => {
    const matchesCat = selectedMenuCat === 'All' || d.category === selectedMenuCat;
    const matchesSearch =
      !searchDish ||
      d.name.toLowerCase().includes(searchDish.toLowerCase()) ||
      d.description.toLowerCase().includes(searchDish.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const filteredReviews = reviews.filter((r) => {
    const matchesStar = starFilter === 'all' || r.rating === Number(starFilter);
    const matchesQuery =
      !searchReview ||
      r.text.toLowerCase().includes(searchReview.toLowerCase()) ||
      r.userName.toLowerCase().includes(searchReview.toLowerCase());
    return matchesStar && matchesQuery;
  });

  return (
    <div className="min-h-screen bg-cream-50/70 text-ink-900 font-sans flex flex-col">
      {/* Super-User Administrator Mode Notice */}
      {storageService.getOwnerSession()?.isAdminManaged ? (
        <div className="bg-amber-500 text-ink-950 px-4 py-2 text-xs font-bold flex items-center justify-between border-b border-amber-600 shadow-2xs">
          <div className="flex items-center gap-2">
            <Shield size={16} />
            <span>Administrator Super-User Mode: Managing {restaurant.name} on behalf of owner</span>
          </div>
          <button
            type="button"
            onClick={() => navigate(ROUTES.admin)}
            className="rounded-lg bg-ink-950 text-white px-3 py-1 text-xs font-bold hover:bg-ink-800 transition cursor-pointer"
          >
            Return to Admin Panel
          </button>
        </div>
      ) : null}

      {/* App Shell: Fixed Left Sidebar + Main Content */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <aside
          className={`fixed inset-y-0 left-0 z-50 w-64 border-r border-cream-300 bg-white transition-transform duration-200 lg:static lg:translate-x-0 ${
            sidebarOpen ? 'translate-x-0 shadow-2xl' : '-translate-x-full'
          }`}
        >
          <div className="flex h-full flex-col justify-between p-4">
            <div>
              {/* Brand Header */}
              <div className="flex items-center justify-between px-3 py-3 border-b border-cream-200">
                <div className="flex items-center gap-2.5">
                  <div className="flex size-9 items-center justify-center rounded-xl bg-accent-600 text-white font-bold">
                    V
                  </div>
                  <div>
                    <h2 className="font-display text-sm font-bold leading-none text-ink-900">Vyora Hub</h2>
                    <span className="text-[11px] text-ink-500">Owner Dashboard</span>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setSidebarOpen(false)}
                  className="rounded-lg p-1 text-ink-500 hover:bg-cream-100 lg:hidden"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Authenticated Restaurant Card (Strictly Isolated to Logged-in Owner) */}
              <div className="my-3 rounded-2xl bg-cream-100/90 p-3 border border-cream-300/80">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-accent-700">
                    Your Restaurant
                  </span>
                  <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-accent-800">
                    <ShieldCheck size={12} className="text-accent-700" />
                    Verified Partner
                  </span>
                </div>
                <h3 className="mt-1 text-sm font-bold text-ink-900 truncate">{restaurant.name}</h3>
                <p className="mt-1 text-[11px] text-ink-500 flex items-center justify-between">
                  <span>{restaurant.area}, Gorakhpur</span>
                  <span className="font-bold text-accent-700">★ {restaurant.averageRating}</span>
                </p>
              </div>

              {/* Navigation Items */}
              <nav className="mt-2 space-y-1">
                {TABS.map((tab) => {
                  const Icon = tab.icon;
                  const isActive = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => {
                        setActiveTab(tab.id);
                        setSidebarOpen(false);
                      }}
                      className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-xs font-bold transition ${
                        isActive
                          ? 'bg-accent-100 text-accent-800 shadow-xs'
                          : 'text-ink-600 hover:bg-cream-100 hover:text-ink-900'
                      }`}
                    >
                      <Icon size={17} className={isActive ? 'text-accent-700' : 'text-ink-400'} />
                      <span>{tab.label}</span>
                      {tab.id === 'bookings' && bookings.length > 0 ? (
                        <span className="ml-auto rounded-full bg-accent-600 px-2 py-0.5 text-[10px] font-bold text-white">
                          {bookings.length}
                        </span>
                      ) : null}
                    </button>
                  );
                })}
              </nav>
            </div>

            {/* Bottom Actions */}
            <div className="space-y-1.5 border-t border-cream-200 pt-3">
              <Link
                to={ROUTES.restaurant(restaurant.id)}
                className="flex w-full items-center gap-2.5 rounded-xl px-3 py-2 text-xs font-semibold text-ink-700 hover:bg-cream-100"
              >
                <Store size={15} />
                View Public Page
              </Link>
              <button
                type="button"
                onClick={handleLogout}
                className="flex w-full items-center gap-2.5 rounded-xl px-3 py-2 text-xs font-semibold text-red-600 hover:bg-red-50"
              >
                <LogOut size={15} />
                Log Out
              </button>
            </div>
          </div>
        </aside>

        {/* Main Content Pane */}
        <div className="flex flex-1 flex-col min-w-0">
          {/* Topbar */}
          <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-cream-300 bg-white/95 px-4 sm:px-8 backdrop-blur-md">
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setSidebarOpen(true)}
                className="rounded-xl p-2 text-ink-700 hover:bg-cream-100 lg:hidden"
                aria-label="Open sidebar menu"
              >
                <MenuIcon size={20} />
              </button>
              <h1 className="text-lg font-bold text-ink-900 sm:text-xl capitalize">
                {TABS.find((t) => t.id === activeTab)?.label}
              </h1>
            </div>

            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-800 shadow-2xs">
                <span className="size-2 rounded-full bg-emerald-500 animate-pulse"></span>
                Live Store
              </span>
              <div className="flex items-center gap-2 rounded-full border border-cream-300 bg-cream-50 px-3 py-1.5 text-xs font-bold text-ink-900">
                <div className="size-5 rounded-full bg-accent-600 text-center text-[10px] leading-5 text-white">
                  O
                </div>
                <span className="hidden sm:inline">{restaurant.ownerName || 'Neha Kapoor'}</span>
              </div>
            </div>
          </header>

          {/* Tab Views */}
          <main className="flex-1 p-4 sm:p-8 max-w-6xl w-full mx-auto">
            {/* 1. OVERVIEW TAB */}
            {activeTab === 'overview' ? (
              <div className="space-y-8">
                {/* 4 KPI Cards */}
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  <div className="rounded-3xl border border-cream-300 bg-white p-5 shadow-sm">
                    <span className="text-xs font-bold text-ink-500">Overall Rating</span>
                    <div className="mt-2 flex items-baseline gap-2">
                      <span className="font-display text-3xl font-extrabold text-ink-900">
                        {restaurant.averageRating.toFixed(1)}
                      </span>
                      <StarRating rating={restaurant.averageRating} size={16} />
                    </div>
                    <span className="mt-1 block text-[11px] text-emerald-600 font-semibold">
                      ▲ Top 5% in {restaurant.area}
                    </span>
                  </div>

                  <div className="rounded-3xl border border-cream-300 bg-white p-5 shadow-sm">
                    <span className="text-xs font-bold text-ink-500">Total Reviews</span>
                    <div className="mt-2 font-display text-3xl font-extrabold text-ink-900">
                      {restaurant.reviewCount}
                    </div>
                    <span className="mt-1 block text-[11px] text-ink-500">Verified dining feedback</span>
                  </div>

                  <div className="rounded-3xl border border-cream-300 bg-white p-5 shadow-sm">
                    <span className="text-xs font-bold text-ink-500">Monthly Guest Scans</span>
                    <div className="mt-2 font-display text-3xl font-extrabold text-ink-900">1,280</div>
                    <span className="mt-1 block text-[11px] text-emerald-600 font-semibold">
                      ▲ +14% vs last month
                    </span>
                  </div>

                  <div className="rounded-3xl border border-cream-300 bg-white p-5 shadow-sm">
                    <span className="text-xs font-bold text-ink-500">Positive Sentiment</span>
                    <div className="mt-2 font-display text-3xl font-extrabold text-accent-700">88%</div>
                    <span className="mt-1 block text-[11px] text-ink-500">High satisfaction score</span>
                  </div>
                </div>

                {/* Grid: Rating split + Recent Reviews */}
                <div className="grid gap-8 lg:grid-cols-3">
                  {/* Rating Breakdown Bars */}
                  <div className="rounded-3xl border border-cream-300 bg-white p-6 shadow-sm">
                    <h3 className="font-bold text-ink-900">Rating Distribution</h3>
                    <div className="mt-4 space-y-2.5">
                      {[
                        { star: '5 ★', pct: 64 },
                        { star: '4 ★', pct: 24 },
                        { star: '3 ★', pct: 7 },
                        { star: '2 ★', pct: 3 },
                        { star: '1 ★', pct: 2 },
                      ].map((b) => (
                        <div key={b.star} className="flex items-center gap-2 text-xs">
                          <span className="w-7 font-bold text-ink-700">{b.star}</span>
                          <div className="h-2 flex-1 rounded-full bg-cream-100 overflow-hidden">
                            <div className="h-full rounded-full bg-accent-600" style={{ width: `${b.pct}%` }} />
                          </div>
                          <span className="w-8 text-right font-medium text-ink-500">{b.pct}%</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 border-t border-cream-200 pt-4">
                      <h4 className="text-xs font-bold text-ink-700">Weekly Table Scans</h4>
                      {/* Simple SVG Chart */}
                      <div className="mt-3 flex items-end gap-2 h-24">
                        {[40, 65, 80, 55, 90, 110, 125].map((h, i) => (
                          <div key={i} className="flex-1 flex flex-col items-center gap-1">
                            <div
                              className="w-full rounded-t-md bg-accent-600 transition-all hover:bg-accent-700"
                              style={{ height: `${h * 0.7}px` }}
                            />
                            <span className="text-[10px] text-ink-400">
                              {['M', 'T', 'W', 'T', 'F', 'S', 'S'][i]}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Recent Customer Reviews Feed */}
                  <div className="rounded-3xl border border-cream-300 bg-white p-6 shadow-sm lg:col-span-2">
                    <div className="flex items-center justify-between pb-3 border-b border-cream-200">
                      <h3 className="font-bold text-ink-900">Recent Customer Reviews</h3>
                      <button
                        type="button"
                        onClick={() => setActiveTab('reviews')}
                        className="text-xs font-bold text-accent-700 hover:underline"
                      >
                        View All ({reviews.length})
                      </button>
                    </div>

                    <div className="mt-4 divide-y divide-cream-100">
                      {reviews.slice(0, 3).map((r) => (
                        <div key={r.id} className="py-3.5 first:pt-0 last:pb-0">
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-bold text-ink-900">{r.userName}</span>
                            <div className="flex items-center gap-2">
                              <StarRating rating={r.rating} size={13} />
                              <span className="text-[10px] text-ink-400">{r.date}</span>
                            </div>
                          </div>
                          <p className="mt-1.5 text-xs text-ink-700 line-clamp-2">{r.text}</p>
                          {r.ownerReply ? (
                            <p className="mt-2 text-[11px] font-medium text-accent-700 bg-accent-50 p-2 rounded-xl">
                              ✓ Replied: "{r.ownerReply.text}"
                            </p>
                          ) : (
                            <button
                              type="button"
                              onClick={() => {
                                setReplyTargetReview(r);
                                setActiveTab('reviews');
                              }}
                              className="mt-2 text-[11px] font-bold text-accent-700 hover:underline"
                            >
                              + Reply to review
                            </button>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ) : null}

            {/* 1.5. TABLE BOOKINGS TAB */}
            {activeTab === 'bookings' ? (
              <div className="space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <h2 className="text-xl font-bold text-ink-900">Table Reservations</h2>
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 text-[11px] font-bold text-emerald-800">
                        <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        Live Cloud Sync
                      </span>
                    </div>
                    <p className="text-xs text-ink-500 mt-0.5">
                      Live diner reservations for {restaurant.name} with instant SMS and email notifications.
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={handleSyncBookings}
                      disabled={isSyncingBookings}
                      className="inline-flex items-center gap-1.5 rounded-xl border border-cream-300 bg-white px-3 py-1.5 text-xs font-bold text-ink-700 hover:bg-cream-100 disabled:opacity-50 transition-colors shadow-2xs"
                    >
                      <RefreshCw size={14} className={isSyncingBookings ? 'animate-spin text-accent-600' : ''} />
                      {isSyncingBookings ? 'Syncing...' : 'Sync Cloud'}
                    </button>
                    <span className="rounded-full bg-accent-100 px-3 py-1.5 text-xs font-bold text-accent-800">
                      {bookings.length} Total Bookings
                    </span>
                  </div>
                </div>

                {/* 4 Booking KPI Cards */}
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  <div className="rounded-2xl border border-cream-300 bg-white p-4 shadow-sm">
                    <span className="text-xs font-bold text-ink-500">Confirmed (Waiting)</span>
                    <div className="mt-1 text-2xl font-extrabold text-emerald-700">
                      {bookings.filter((b) => b.status === 'Confirmed').length}
                    </div>
                    <span className="text-[11px] text-emerald-600 font-medium">Ready for dining</span>
                  </div>
                  <div className="rounded-2xl border border-cream-300 bg-white p-4 shadow-sm">
                    <span className="text-xs font-bold text-ink-500">Seated / Completed</span>
                    <div className="mt-1 text-2xl font-extrabold text-blue-700">
                      {bookings.filter((b) => b.status === 'Completed').length}
                    </div>
                    <span className="text-[11px] text-blue-600 font-medium">Successfully served</span>
                  </div>
                  <div className="rounded-2xl border border-cream-300 bg-white p-4 shadow-sm">
                    <span className="text-xs font-bold text-ink-500">Total Guests Expected</span>
                    <div className="mt-1 text-2xl font-extrabold text-ink-900">
                      {bookings.reduce((sum, b) => (b.status !== 'Cancelled' ? sum + b.guests : sum), 0)}
                    </div>
                    <span className="text-[11px] text-ink-500">Covers reserved</span>
                  </div>
                  <div className="rounded-2xl border border-cream-300 bg-white p-4 shadow-sm">
                    <span className="text-xs font-bold text-ink-500">SMS / Email Dispatches</span>
                    <div className="mt-1 text-2xl font-extrabold text-accent-700">
                      {bookings.length * 2}
                    </div>
                    <span className="text-[11px] text-ink-500">100% Delivery rate</span>
                  </div>
                </div>

                {/* Bookings Table Container */}
                <div className="rounded-3xl border border-cream-300 bg-white p-6 shadow-sm space-y-4">
                  {/* Status Filter Tabs */}
                  <div className="flex flex-wrap items-center gap-2 border-b border-cream-200 pb-3">
                    {(['All', 'Confirmed', 'Completed', 'Cancelled'] as const).map((status) => {
                      const count =
                        status === 'All'
                          ? bookings.length
                          : bookings.filter((b) => b.status === status).length;
                      const isSelected = bookingStatusFilter === status;
                      return (
                        <button
                          key={status}
                          type="button"
                          onClick={() => setBookingStatusFilter(status)}
                          className={`rounded-xl px-3 py-1.5 text-xs font-bold transition-colors ${
                            isSelected
                              ? 'bg-accent-600 text-white shadow-2xs'
                              : 'bg-cream-100 text-ink-700 hover:bg-cream-200'
                          }`}
                          style={isSelected ? { backgroundColor: '#b84221', color: '#ffffff' } : undefined}
                        >
                          {status === 'All' ? 'All Bookings' : status === 'Confirmed' ? 'Confirmed' : status === 'Completed' ? 'Seated / Done' : 'Cancelled'} ({count})
                        </button>
                      );
                    })}
                  </div>

                  {bookings.length === 0 ? (
                    <div className="py-12 text-center">
                      <div className="mx-auto flex size-12 items-center justify-center rounded-2xl bg-cream-100 text-ink-500 mb-2">
                        <Calendar size={24} />
                      </div>
                      <h4 className="font-bold text-ink-900 text-sm">No reservations yet</h4>
                      <p className="mt-1 text-xs text-ink-500">
                        When diners book tables via your restaurant profile or QR standee, they will appear here with live notification tracking.
                      </p>
                    </div>
                  ) : (
                    <div className="overflow-x-auto">
                      <table className="w-full text-left text-xs">
                        <thead>
                          <tr className="border-b border-cream-200 text-ink-500 font-bold">
                            <th className="pb-3 pr-4">Ref ID</th>
                            <th className="pb-3 pr-4">Guest</th>
                            <th className="pb-3 pr-4">Date & Time</th>
                            <th className="pb-3 pr-4">Party & Area</th>
                            <th className="pb-3 pr-4">Notifications</th>
                            <th className="pb-3 pr-4">Status</th>
                            <th className="pb-3">Actions</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-cream-100">
                          {bookings
                            .filter((b) => (bookingStatusFilter === 'All' ? true : b.status === bookingStatusFilter))
                            .map((b) => (
                              <tr key={b.id} className="hover:bg-cream-50/50">
                                <td className="py-3.5 pr-4 font-mono font-bold text-accent-800">
                                  <div>{b.id}</div>
                                  <div className="text-[10px] font-mono text-ink-400">Code: {b.confirmationCode}</div>
                                </td>
                                <td className="py-3.5 pr-4 font-bold text-ink-900">
                                  <div>{b.guestName}</div>
                                  <div className="text-[11px] font-normal text-ink-600 flex flex-wrap items-center gap-2 mt-0.5">
                                    <a href={`tel:${b.mobile}`} className="hover:text-accent-700 underline flex items-center gap-1">
                                      <Phone size={11} className="text-ink-400" />
                                      {b.mobile}
                                    </a>
                                    <a
                                      href={`https://wa.me/${b.mobile.replace(/\D/g, '')}?text=${encodeURIComponent(`Hello ${b.guestName}, this is ${restaurant.name} in Gorakhpur regarding your table reservation ${b.id} for ${b.guests} guests on ${b.date} at ${b.time}.`)}`}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 hover:text-emerald-800 hover:underline"
                                      title="Message guest on WhatsApp"
                                    >
                                      <MessageCircle size={11} />
                                      WhatsApp
                                    </a>
                                  </div>
                                </td>
                                <td className="py-3.5 pr-4">
                                  <span className="font-semibold text-ink-900">{b.date}</span>
                                  <span className="block text-[11px] text-ink-500">{b.time}</span>
                                </td>
                                <td className="py-3.5 pr-4">
                                  <span className="font-bold text-ink-900">{b.guests} Guests</span>
                                  <span className="block text-[11px] text-ink-500">{b.seatingArea || 'Standard'}</span>
                                  {b.specialRequests ? (
                                    <div className="text-[10px] text-amber-800 italic mt-0.5 font-medium bg-amber-50 rounded px-1.5 py-0.5 border border-amber-200 inline-block">
                                      Note: {b.specialRequests}
                                    </div>
                                  ) : null}
                                </td>
                                <td className="py-3.5 pr-4">
                                  <span className="inline-flex items-center gap-1 rounded-md bg-emerald-50 border border-emerald-200 px-2 py-0.5 text-[10px] font-bold text-emerald-800">
                                    ✓ SMS + Email
                                  </span>
                                </td>
                                <td className="py-3.5 pr-4">
                                  <span
                                    className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold ${
                                      b.status === 'Confirmed'
                                        ? 'bg-emerald-100 text-emerald-800'
                                        : b.status === 'Completed'
                                        ? 'bg-blue-100 text-blue-800'
                                        : 'bg-cream-200 text-ink-700'
                                    }`}
                                  >
                                    {b.status}
                                  </span>
                                </td>
                                <td className="py-3.5">
                                  <div className="flex items-center gap-1.5">
                                    {b.status === 'Confirmed' ? (
                                      <>
                                        <button
                                          type="button"
                                          onClick={() => {
                                            storageService.updateBookingStatus(b.id, 'Completed');
                                            setBookings(storageService.getBookings(restaurant.id, restaurant.name));
                                            showToast(`Marked ${b.guestName}'s party as Seated`);
                                          }}
                                          className="rounded-lg bg-accent-600 px-2.5 py-1 text-[11px] font-bold text-white hover:bg-accent-700"
                                          style={{ backgroundColor: '#b84221', color: '#ffffff' }}
                                        >
                                          Seat Guests
                                        </button>
                                        <button
                                          type="button"
                                          onClick={() => {
                                            storageService.updateBookingStatus(b.id, 'Cancelled');
                                            setBookings(storageService.getBookings(restaurant.id, restaurant.name));
                                            showToast(`Cancelled reservation ${b.id}`);
                                          }}
                                          className="rounded-lg border border-red-200 bg-red-50 px-2 py-1 text-[11px] font-bold text-red-700 hover:bg-red-100"
                                        >
                                          Cancel
                                        </button>
                                      </>
                                    ) : (
                                      <button
                                        type="button"
                                        onClick={() => {
                                          storageService.updateBookingStatus(b.id, 'Confirmed');
                                          setBookings(storageService.getBookings(restaurant.id, restaurant.name));
                                          showToast(`Reconfirmed reservation ${b.id}`);
                                        }}
                                        className="rounded-lg border border-cream-300 px-2.5 py-1 text-[11px] font-bold text-ink-700 hover:bg-cream-100"
                                      >
                                        Re-open
                                      </button>
                                    )}
                                    <button
                                      type="button"
                                      onClick={() => {
                                        if (window.confirm(`Delete reservation ${b.id} for ${b.guestName}?`)) {
                                          storageService.deleteBooking(b.id);
                                          setBookings(storageService.getBookings(restaurant.id, restaurant.name));
                                          showToast(`Deleted reservation ${b.id}`);
                                        }
                                      }}
                                      className="p-1 text-ink-400 hover:text-red-600 rounded transition-colors"
                                      title="Delete reservation"
                                    >
                                      <Trash2 size={13} />
                                    </button>
                                  </div>
                                </td>
                              </tr>
                            ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              </div>
            ) : null}

            {/* 2. PROFILE TAB */}
            {activeTab === 'profile' ? (
              <div className="rounded-3xl border border-cream-300 bg-white p-6 sm:p-10 shadow-sm space-y-8">
                <div>
                  <h3 className="text-xl font-bold text-ink-900">Restaurant Profile Information</h3>
                  <p className="text-xs text-ink-500">
                    Update public listing information, brand logo, and storefront imagery shown to diners in Gorakhpur.
                  </p>
                </div>

                {/* Visual Branding: Storefront Photo & Brand Logo */}
                <div className="rounded-2xl border border-cream-200 bg-cream-50/70 p-5 sm:p-6 space-y-6">
                  <div>
                    <h4 className="text-sm font-bold text-ink-900 flex items-center gap-2">
                      <Camera size={16} className="text-accent-700" />
                      Visual Branding & Photos
                    </h4>
                    <p className="text-xs text-ink-500 mt-0.5">
                      Upload your official restaurant logo and storefront/interior photo to help diners easily recognize your place.
                    </p>
                  </div>

                  <div className="grid gap-6 md:grid-cols-2">
                    {/* Brand Logo Uploader */}
                    <div className="rounded-2xl border border-cream-300 bg-white p-4 flex flex-col justify-between">
                      <div>
                        <span className="text-xs font-bold text-ink-800 block mb-2">Brand Logo / Emblem</span>
                        <div className="flex items-center gap-4">
                          <div className="relative size-20 shrink-0 rounded-2xl border border-cream-300 bg-cream-100 flex items-center justify-center overflow-hidden shadow-2xs">
                            {profileLogoUrl ? (
                              <img
                                src={profileLogoUrl}
                                alt="Brand Logo Preview"
                                className="size-full object-cover"
                              />
                            ) : (
                              <div className="text-center font-display font-extrabold text-2xl text-accent-700">
                                {restaurant.name.charAt(0)}
                              </div>
                            )}
                            {isUploadingLogo ? (
                              <div className="absolute inset-0 bg-ink-900/60 flex items-center justify-center text-white text-[10px] font-bold">
                                Uploading...
                              </div>
                            ) : null}
                          </div>

                          <div className="flex-1 space-y-2">
                            <label className="inline-flex items-center gap-1.5 rounded-xl bg-accent-600 px-3.5 py-1.5 text-xs font-bold text-white shadow-xs hover:bg-accent-700 cursor-pointer transition">
                              <Upload size={13} />
                              <span>{isUploadingLogo ? 'Processing...' : 'Upload Logo'}</span>
                              <input
                                type="file"
                                accept="image/*"
                                onChange={handleLogoFileUpload}
                                disabled={isUploadingLogo}
                                className="hidden"
                              />
                            </label>
                            {profileLogoUrl ? (
                              <button
                                type="button"
                                onClick={() => setProfileLogoUrl('')}
                                className="block text-[11px] font-semibold text-rose-600 hover:text-rose-800 underline cursor-pointer"
                              >
                                Remove custom logo
                              </button>
                            ) : (
                              <p className="text-[11px] text-ink-400">PNG, JPG, WebP supported</p>
                            )}
                          </div>
                        </div>

                        {/* Direct URL input for logo */}
                        <div className="mt-3">
                          <div className="flex items-center gap-1.5 text-[11px] text-ink-500 font-semibold mb-1">
                            <Link2 size={12} />
                            <span>Or paste logo link / URL:</span>
                          </div>
                          <input
                            type="url"
                            value={profileLogoUrl}
                            onChange={(e) => setProfileLogoUrl(e.target.value)}
                            placeholder="https://example.com/logo.png"
                            className="w-full rounded-xl border border-cream-300 bg-white px-3 py-1.5 text-xs text-ink-900 outline-none focus:border-accent-600"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Storefront Photo Uploader */}
                    <div className="rounded-2xl border border-cream-300 bg-white p-4 flex flex-col justify-between">
                      <div>
                        <span className="text-xs font-bold text-ink-800 block mb-2">Storefront / Interior Cover</span>
                        <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden border border-cream-300 bg-cream-100 shadow-2xs mb-3">
                          {profileImageUrl ? (
                            <img
                              src={profileImageUrl}
                              alt="Storefront Preview"
                              className="size-full object-cover"
                            />
                          ) : (
                            <div className="size-full flex flex-col items-center justify-center p-4 text-center">
                              <FoodArt category={restaurant.categories[0] ?? 'north-indian'} className="h-20 w-auto opacity-70" />
                              <span className="text-[10px] font-medium text-ink-500 mt-1">Default vector illustration active</span>
                            </div>
                          )}
                          {isUploadingStorefront ? (
                            <div className="absolute inset-0 bg-ink-900/60 flex items-center justify-center text-white text-xs font-bold">
                              Compressing photo...
                            </div>
                          ) : null}
                        </div>

                        <div className="flex flex-wrap items-center gap-2">
                          <label className="inline-flex items-center gap-1.5 rounded-xl bg-accent-600 px-3.5 py-1.5 text-xs font-bold text-white shadow-xs hover:bg-accent-700 cursor-pointer transition">
                            <Camera size={13} />
                            <span>{isUploadingStorefront ? 'Processing...' : 'Upload Cover Photo'}</span>
                            <input
                              type="file"
                              accept="image/*"
                              onChange={handleStorefrontFileUpload}
                              disabled={isUploadingStorefront}
                              className="hidden"
                            />
                          </label>
                          {profileImageUrl ? (
                            <button
                              type="button"
                              onClick={() => setProfileImageUrl('')}
                              className="text-[11px] font-semibold text-rose-600 hover:text-rose-800 underline cursor-pointer"
                            >
                              Reset to illustration
                            </button>
                          ) : null}
                        </div>

                        {/* Direct URL input for Storefront */}
                        <div className="mt-3">
                          <div className="flex items-center gap-1.5 text-[11px] text-ink-500 font-semibold mb-1">
                            <Link2 size={12} />
                            <span>Or paste cover image URL:</span>
                          </div>
                          <input
                            type="url"
                            value={profileImageUrl}
                            onChange={(e) => setProfileImageUrl(e.target.value)}
                            placeholder="https://images.unsplash.com/photo-..."
                            className="w-full rounded-xl border border-cream-300 bg-white px-3 py-1.5 text-xs text-ink-900 outline-none focus:border-accent-600"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Curated Storefront Facade Presets */}
                  <div className="pt-2 border-t border-cream-200">
                    <span className="text-xs font-bold text-ink-800 block mb-2">
                      Or pick from curated Gorakhpur dining atmosphere presets:
                    </span>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2">
                      {STOREFRONT_PRESETS.map((preset) => {
                        const isSelected = profileImageUrl === preset.url;
                        return (
                          <button
                            key={preset.name}
                            type="button"
                            onClick={() => {
                              setProfileImageUrl(preset.url);
                              showToast(`Applied "${preset.name}" preset`);
                            }}
                            className={`group relative rounded-xl overflow-hidden border p-1 text-left transition cursor-pointer ${
                              isSelected
                                ? 'border-accent-600 ring-2 ring-accent-400 bg-accent-50'
                                : 'border-cream-300 hover:border-accent-300 bg-white'
                            }`}
                          >
                            <img
                              src={preset.url}
                              alt={preset.name}
                              className="aspect-[4/3] w-full rounded-lg object-cover"
                              loading="lazy"
                            />
                            <span className="block mt-1 text-[10px] font-bold text-ink-800 line-clamp-1">
                              {preset.name}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>

                <form onSubmit={handleSaveProfile} className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-1 block text-xs font-bold text-ink-800" htmlFor="prof-name">
                        Restaurant Name
                      </label>
                      <input
                        id="prof-name"
                        type="text"
                        value={profileName}
                        onChange={(e) => setProfileName(e.target.value)}
                        className="w-full rounded-xl border border-cream-300 p-2.5 text-sm outline-none focus:border-accent-600"
                      />
                    </div>

                    <div>
                      <label className="mb-1 block text-xs font-bold text-ink-800" htmlFor="prof-phone">
                        Owner&apos;s WhatsApp &amp; Direct Order Phone
                      </label>
                      <input
                        id="prof-phone"
                        type="text"
                        value={profilePhone}
                        onChange={(e) => setProfilePhone(e.target.value)}
                        placeholder="e.g. 8382999557 or +91 98380 12345"
                        className="w-full rounded-xl border border-cream-300 p-2.5 text-sm outline-none focus:border-accent-600"
                      />
                      <p className="mt-1 text-[11px] text-ink-500">
                        Orders from customers on your menu will be sent directly to this WhatsApp number.
                      </p>
                    </div>
                  </div>

                  <div>
                    <label className="mb-1 block text-xs font-bold text-ink-800" htmlFor="prof-desc">
                      About & Description
                    </label>
                    <textarea
                      id="prof-desc"
                      rows={3}
                      value={profileDesc}
                      onChange={(e) => setProfileDesc(e.target.value)}
                      className="w-full rounded-xl border border-cream-300 p-2.5 text-sm outline-none focus:border-accent-600"
                    />
                  </div>

                  <div>
                    <label className="mb-1 block text-xs font-bold text-ink-800" htmlFor="prof-addr">
                      Physical Address
                    </label>
                    <input
                      id="prof-addr"
                      type="text"
                      value={profileAddress}
                      onChange={(e) => setProfileAddress(e.target.value)}
                      className="w-full rounded-xl border border-cream-300 p-2.5 text-sm outline-none focus:border-accent-600"
                    />
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-1 block text-xs font-bold text-ink-800" htmlFor="prof-open">
                        Opening Hour
                      </label>
                      <input
                        id="prof-open"
                        type="time"
                        value={profileOpenTime}
                        onChange={(e) => setProfileOpenTime(e.target.value)}
                        className="w-full rounded-xl border border-cream-300 p-2.5 text-sm outline-none focus:border-accent-600"
                      />
                    </div>
                    <div>
                      <label className="mb-1 block text-xs font-bold text-ink-800" htmlFor="prof-close">
                        Closing Hour
                      </label>
                      <input
                        id="prof-close"
                        type="time"
                        value={profileCloseTime}
                        onChange={(e) => setProfileCloseTime(e.target.value)}
                        className="w-full rounded-xl border border-cream-300 p-2.5 text-sm outline-none focus:border-accent-600"
                      />
                    </div>
                  </div>

                  <div className="pt-4">
                    <button
                      type="submit"
                      className="rounded-full bg-accent-600 px-7 py-2.5 text-xs font-bold text-white shadow-sm hover:bg-accent-700"
                    >
                      Save Profile Changes
                    </button>
                  </div>
                </form>
              </div>
            ) : null}

            {/* 3. MENU MANAGEMENT TAB */}
            {activeTab === 'menu' ? (
              <div className="space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-ink-900">Menu Dishes</h3>
                    <p className="text-xs text-ink-500">
                      Manage dishes, prices, veg/non-veg status, and availability.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => openAddDishModal()}
                    className="inline-flex items-center gap-1.5 rounded-full bg-accent-600 px-5 py-2.5 text-xs font-bold text-white shadow-sm hover:bg-accent-700"
                  >
                    <Plus size={15} />
                    Add New Dish
                  </button>
                </div>

                {/* Category Pills & Search */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-1.5">
                    {MENU_CATEGORIES.map((cat) => (
                      <button
                        key={cat}
                        type="button"
                        onClick={() => setSelectedMenuCat(cat)}
                        className={`rounded-full px-3.5 py-1.5 text-xs font-bold transition ${
                          selectedMenuCat === cat
                            ? 'bg-accent-600 text-white shadow-xs'
                            : 'border border-cream-300 bg-white text-ink-700 hover:bg-cream-100'
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>

                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Filter dishes..."
                      value={searchDish}
                      onChange={(e) => setSearchDish(e.target.value)}
                      className="w-full sm:w-48 rounded-xl border border-cream-300 bg-white px-3 py-1.5 text-xs text-ink-900 outline-none focus:border-accent-600"
                    />
                  </div>
                </div>

                {/* Dishes Grid */}
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {filteredDishes.map((dish) => (
                    <div
                      key={dish.id}
                      className={`flex flex-col justify-between rounded-3xl border p-5 shadow-xs transition ${
                        dish.isAvailable
                          ? 'border-cream-300 bg-white'
                          : 'border-cream-200 bg-cream-100/50 opacity-70'
                      }`}
                    >
                      <div>
                        <div className="flex gap-3">
                          {dish.imageUrl ? (
                            <img
                              src={dish.imageUrl}
                              alt={dish.name}
                              className="size-16 shrink-0 rounded-2xl object-cover ring-1 ring-ink-900/5 shadow-2xs"
                              loading="lazy"
                            />
                          ) : (
                            <button
                              type="button"
                              onClick={() => openAddDishModal(dish)}
                              className="size-16 shrink-0 rounded-2xl border border-dashed border-cream-300 bg-cream-50 flex flex-col items-center justify-center text-ink-400 hover:text-accent-700 hover:border-accent-300 transition text-[10px] font-bold cursor-pointer"
                              title="Click to add photo to dish"
                            >
                              <Camera size={16} />
                              <span className="mt-0.5 text-[9px]">+ Photo</span>
                            </button>
                          )}
                          <div className="min-w-0 flex-1">
                            <div className="flex items-start justify-between gap-2">
                              <h4 className="text-sm font-bold text-ink-900 leading-snug">{dish.name}</h4>
                              <span className="font-display font-extrabold text-accent-700 text-sm">
                                ₹{dish.price}
                              </span>
                            </div>
                            <p className="mt-1 text-xs text-ink-600 line-clamp-2">{dish.description}</p>
                            <div className="mt-2 flex items-center gap-2 text-[11px] font-semibold">
                              <span className={dish.diet === 'veg' ? 'text-emerald-700' : 'text-rose-700'}>
                                {dish.diet === 'veg' ? '● Pure Veg' : '▲ Non-Veg'}
                              </span>
                              <span className="text-ink-400">• {dish.category}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="mt-4 flex items-center justify-between border-t border-cream-100 pt-3 text-xs">
                        <button
                          type="button"
                          onClick={() => toggleDishAvailability(dish.id)}
                          className={`rounded-full px-2.5 py-1 text-[11px] font-bold ${
                            dish.isAvailable
                              ? 'bg-emerald-100 text-emerald-800'
                              : 'bg-amber-100 text-amber-800'
                          }`}
                        >
                          {dish.isAvailable ? 'In Stock' : 'Sold Out'}
                        </button>
                        <div className="flex items-center gap-1">
                          <button
                            type="button"
                            onClick={() => openAddDishModal(dish)}
                            className="rounded-lg p-1.5 text-ink-600 hover:bg-cream-100"
                            title="Edit dish"
                          >
                            <Edit2 size={14} />
                          </button>
                          <button
                            type="button"
                            onClick={() => deleteDish(dish.id)}
                            className="rounded-lg p-1.5 text-red-600 hover:bg-red-50"
                            title="Delete dish"
                          >
                            <Trash2 size={14} />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : null}

            {/* 4. QR CODE STANDEE TAB */}
            {activeTab === 'qr' ? (
              <div className="grid gap-8 lg:grid-cols-2">
                <div className="rounded-3xl border border-cream-300 bg-white p-6 sm:p-8 shadow-sm">
                  <h3 className="text-xl font-bold text-ink-900">Live Table QR Code</h3>
                  <p className="mt-1 text-xs text-ink-500">
                    Customers who scan this QR code are taken directly to your restaurant's review page with zero login hurdles.
                  </p>

                  {/* QR Base Host & Testing Information */}
                  <div className="mt-4 rounded-2xl border border-cream-200 bg-cream-50 p-4 text-xs space-y-3">
                    <div>
                      <div className="flex items-center justify-between gap-2">
                        <label className="text-xs font-bold text-ink-800" htmlFor="qr-host-input">
                          QR Destination Host:
                        </label>
                        <button
                          type="button"
                          onClick={() => {
                            if (typeof window !== 'undefined' && window.location?.origin) {
                              setCustomQrBaseUrl(window.location.origin);
                              showToast('Reset to current browser origin');
                            }
                          }}
                          className="text-[11px] font-bold text-accent-700 hover:text-accent-800 underline"
                        >
                          Use Current Origin
                        </button>
                      </div>
                      <input
                        id="qr-host-input"
                        type="url"
                        value={customQrBaseUrl}
                        onChange={(e) => setCustomQrBaseUrl(e.target.value)}
                        placeholder="https://gorakhpur-food-guide.vercel.app"
                        className="mt-1 w-full rounded-xl border border-cream-300 bg-white px-3 py-1.5 text-xs text-ink-900 outline-none focus:border-accent-600"
                      />
                    </div>

                    <div className="flex items-center justify-between gap-2 rounded-xl bg-white p-2.5 border border-cream-200">
                      <div className="truncate text-[11px] text-ink-600">
                        <span className="font-bold text-ink-900 block">Active QR Target:</span>
                        <span className="text-accent-700 font-mono text-[10px] truncate block" title={qrUrl}>
                          {qrUrl}
                        </span>
                      </div>
                      <a
                        href={qrUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex shrink-0 items-center gap-1 rounded-lg bg-accent-100 px-2.5 py-1 text-[11px] font-bold text-accent-800 hover:bg-accent-200"
                      >
                        <ExternalLink size={12} />
                        Test Link
                      </a>
                    </div>

                    {typeof window !== 'undefined' &&
                    (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') ? (
                      <div className="rounded-xl border border-amber-300 bg-amber-50/90 p-3 text-amber-950 text-[11px] leading-relaxed">
                        <div className="flex items-center gap-1.5 font-bold text-amber-900 mb-1">
                          <AlertTriangle size={14} className="text-amber-700 shrink-0" />
                          <span>Testing on localhost?</span>
                        </div>
                        <p>
                          Mobile phones scanning this QR code cannot reach &ldquo;localhost&rdquo; on your computer.
                        </p>
                        <p className="mt-1 font-semibold text-amber-900">
                          👉 When deployed on Vercel, the QR code automatically works on all phones! For local testing on your phone, enter your computer's Wi-Fi IP address above (e.g. <code>http://192.168.1.X:5173</code>).
                        </p>
                      </div>
                    ) : null}
                  </div>

                  {/* Table Number Selector */}
                  <div className="mt-4 rounded-2xl bg-cream-50 p-3.5 border border-cream-200">
                    <label className="text-xs font-bold text-ink-800 block mb-2">Select Table Location:</label>
                    <div className="flex flex-wrap gap-1.5">
                      {['1', '2', '3', '4', '5', 'counter', 'VIP'].map((tabVal) => (
                        <button
                          key={tabVal}
                          type="button"
                          onClick={() => setTableSelection(tabVal)}
                          className={`rounded-xl px-3 py-1.5 text-xs font-bold transition ${
                            tableSelection === tabVal
                              ? 'bg-accent-600 text-white shadow-xs'
                              : 'bg-white border border-cream-300 text-ink-800 hover:bg-cream-100'
                          }`}
                        >
                          {tabVal === 'counter' ? 'Billing Counter' : tabVal === 'VIP' ? 'VIP Lounge' : `Table ${tabVal}`}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="my-6 flex justify-center">
                    <QrCodeView
                      value={qrUrl}
                      restaurantName={restaurant.name}
                      filename={`${qrFilename.replace(/\.png$/, '')}-table-${tableSelection}`}
                      size={220}
                      showActions={true}
                      showPrint={true}
                    />
                  </div>

                  <div className="space-y-3 rounded-2xl bg-cream-50 p-4 text-xs text-ink-700">
                    <h4 className="font-bold text-ink-900">How to use your QR code:</h4>
                    <p>1. <strong>Print Standee Tent Cards</strong>: Place one standee on each table with its table number.</p>
                    <p>2. <strong>Bill Counter Display</strong>: Place a sticker near the payment QR code.</p>
                    <p>3. <strong>Instant Feedback</strong>: Verified diners can rate dishes and view your menu in seconds.</p>
                  </div>
                </div>

                {/* Printable Standee Tent Card Preview */}
                <div className="rounded-3xl border border-cream-300 bg-white p-6 sm:p-8 shadow-sm flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-ink-900">Table Standee Preview</h3>
                    <p className="text-xs text-ink-500">What your dining guests will see on the table.</p>

                    <div className="standee-print-card mt-6 mx-auto max-w-xs rounded-3xl border-4 border-ink-900 bg-white p-6 text-center shadow-lg">
                      <div className="font-display font-extrabold text-accent-700 text-lg">Vyora | Gorakhpur Dining</div>
                      <h4 className="mt-2 text-base font-bold text-ink-900">{restaurant.name}</h4>
                      <div className="mt-1">
                        <span className="inline-block rounded-full bg-accent-100 px-3 py-0.5 text-xs font-bold text-accent-800">
                          {tableSelection === 'counter' ? 'Billing Counter' : `Table ${tableSelection}`}
                        </span>
                      </div>
                      <p className="mt-1 text-[11px] text-ink-500">Scan to View Menu & Share Review</p>

                      <div className="my-4 flex justify-center">
                        <QrCodeView
                          value={qrUrl}
                          restaurantName={restaurant.name}
                          filename={`${qrFilename.replace(/\.png$/, '')}-table-${tableSelection}`}
                          size={150}
                          showActions={false}
                        />
                      </div>

                      <p className="text-[10px] font-semibold text-ink-600">
                        ⭐ Help fellow foodies & support local Gorakhpur kitchens!
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-col sm:flex-row gap-3 no-print">
                    <button
                      type="button"
                      onClick={() => window.print()}
                      className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-accent-600 py-3 text-xs font-bold text-white shadow-md hover:bg-accent-700"
                    >
                      <Printer size={15} />
                      Print Selected Standee
                    </button>
                    <button
                      type="button"
                      onClick={() => setIsBatchPrintModalOpen(true)}
                      className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-accent-600 bg-accent-50 py-3 text-xs font-bold text-accent-800 shadow-sm hover:bg-accent-100"
                    >
                      <QrCode size={15} />
                      Batch Print Tables 1–10
                    </button>
                  </div>
                </div>
              </div>
            ) : null}

            {/* 5. CUSTOMER REVIEWS TAB */}
            {activeTab === 'reviews' ? (
              <div className="space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-ink-900">Customer Reviews</h3>
                    <p className="text-xs text-ink-500">
                      Read diner feedback, check ratings, and post official management replies.
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-2">
                    <select
                      value={starFilter}
                      onChange={(e) => setStarFilter(e.target.value)}
                      className="rounded-xl border border-cream-300 bg-white px-3 py-2 text-xs font-semibold text-ink-800 outline-none"
                    >
                      <option value="all">All Stars</option>
                      <option value="5">5 Stars only</option>
                      <option value="4">4 Stars</option>
                      <option value="3">3 Stars</option>
                      <option value="2">2 Stars</option>
                      <option value="1">1 Star</option>
                    </select>

                    <input
                      type="text"
                      placeholder="Search reviews..."
                      value={searchReview}
                      onChange={(e) => setSearchReview(e.target.value)}
                      className="rounded-xl border border-cream-300 bg-white px-3 py-2 text-xs text-ink-800 outline-none"
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  {filteredReviews.length > 0 ? (
                    filteredReviews.map((rev) => (
                      <div
                        key={rev.id}
                        className="rounded-3xl border border-cream-300 bg-white p-5 shadow-xs"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2.5">
                            {rev.userAvatar ? (
                              <img
                                src={rev.userAvatar}
                                alt={rev.userName}
                                className="size-9 rounded-full object-cover ring-1 ring-ink-900/10 shadow-xs"
                              />
                            ) : (
                              <div className="flex size-9 items-center justify-center rounded-full bg-cream-100 font-bold text-accent-800">
                                {rev.userName[0]?.toUpperCase()}
                              </div>
                            )}
                            <div>
                              <span className="text-xs font-bold text-ink-900">{rev.userName}</span>
                              <p className="text-[10px] text-ink-400">{rev.date}</p>
                            </div>
                          </div>
                          <StarRating rating={rev.rating} size={15} />
                        </div>

                        <p className="mt-3 text-xs leading-relaxed text-ink-800">{rev.text}</p>

                        {rev.photoUrl ? (
                          <div className="mt-2.5">
                            <img
                              src={rev.photoUrl}
                              alt="Customer uploaded review photo"
                              className="h-28 w-44 rounded-xl object-cover ring-1 ring-ink-900/10 shadow-xs"
                            />
                          </div>
                        ) : null}

                        {rev.tags && rev.tags.length > 0 ? (
                          <div className="mt-2.5 flex flex-wrap gap-1">
                            {rev.tags.map((t) => (
                              <span
                                key={t}
                                className="rounded-full bg-cream-100 px-2.5 py-0.5 text-[10px] font-medium text-ink-700"
                              >
                                {t}
                              </span>
                            ))}
                          </div>
                        ) : null}

                        {/* Owner Reply Section */}
                        {rev.ownerReply ? (
                          <div className="mt-3.5 rounded-2xl border border-cream-300 bg-accent-50 p-3 text-xs">
                            <div className="flex items-center justify-between font-bold text-ink-900">
                              <span>Your Management Reply:</span>
                              <span className="text-[10px] text-accent-700">{rev.ownerReply.date}</span>
                            </div>
                            <p className="mt-1 text-accent-800">{rev.ownerReply.text}</p>
                          </div>
                        ) : (
                          <div className="mt-3 pt-2 border-t border-cream-100">
                            <button
                              type="button"
                              onClick={() => {
                                setReplyTargetReview(rev);
                                setReplyText('');
                              }}
                              className="inline-flex items-center gap-1.5 text-xs font-bold text-accent-700 hover:text-accent-800"
                            >
                              <MessageSquareReply size={14} />
                              Reply to this review
                            </button>
                          </div>
                        )}
                      </div>
                    ))
                  ) : (
                    <div className="rounded-3xl border border-cream-200 bg-white py-12 text-center text-xs text-ink-500">
                      No customer reviews found matching filter.
                    </div>
                  )}
                </div>
              </div>
            ) : null}

            {/* 6. CUSTOMER INSIGHTS TAB */}
            {activeTab === 'insights' ? (
              <div className="space-y-8">
                <div className="grid gap-6 sm:grid-cols-3">
                  <div className="rounded-3xl border border-cream-300 bg-white p-5 shadow-xs">
                    <span className="text-xs font-bold text-ink-500">Satisfaction Ratio</span>
                    <div className="mt-2 text-2xl font-bold text-accent-700">88% Positive</div>
                    <p className="mt-1 text-[11px] text-ink-500">Based on food, service & cleanliness</p>
                  </div>
                  <div className="rounded-3xl border border-cream-300 bg-white p-5 shadow-xs">
                    <span className="text-xs font-bold text-ink-500">New vs Returning Diners</span>
                    <div className="mt-2 text-2xl font-bold text-ink-900">41% New Diners</div>
                    <p className="mt-1 text-[11px] text-ink-500">59% repeat guests this month</p>
                  </div>
                  <div className="rounded-3xl border border-cream-300 bg-white p-5 shadow-xs">
                    <span className="text-xs font-bold text-ink-500">Average Meal Rating</span>
                    <div className="mt-2 text-2xl font-bold text-ink-900">
                      {restaurant.averageRating} / 5.0
                    </div>
                    <p className="mt-1 text-[11px] text-emerald-600">Above Gorakhpur benchmark</p>
                  </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="rounded-3xl border border-cream-300 bg-white p-6 shadow-xs">
                    <h3 className="font-bold text-ink-900">Most Praised Attributes</h3>
                    <p className="text-xs text-ink-500">What guests frequently praise in reviews</p>
                    <div className="mt-4 space-y-2.5">
                      {[
                        { tag: 'Delicious Food', count: 48 },
                        { tag: 'Clean Place', count: 32 },
                        { tag: 'Friendly Staff', count: 27 },
                        { tag: 'Good Value', count: 21 },
                      ].map((p) => (
                        <div key={p.tag} className="flex items-center justify-between text-xs">
                          <span className="font-semibold text-ink-800">{p.tag}</span>
                          <span className="rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-bold text-emerald-800">
                            {p.count} mentions
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-3xl border border-cream-300 bg-white p-6 shadow-xs">
                    <h3 className="font-bold text-ink-900">Areas for Improvement</h3>
                    <p className="text-xs text-ink-500">Frequent complaint tags from reviews</p>
                    <div className="mt-4 space-y-2.5">
                      {[
                        { tag: 'Slow Service', count: 12, fix: 'Kitchen pass runner during peak' },
                        { tag: 'Cold Food', count: 4, fix: 'Use heated sizzler plates' },
                        { tag: 'Noisy', count: 3, fix: 'Lower speaker volume after 8 PM' },
                      ].map((p) => (
                        <div key={p.tag} className="flex items-center justify-between text-xs">
                          <div>
                            <span className="font-semibold text-ink-800">{p.tag}</span>
                            <p className="text-[10px] text-ink-500">{p.fix}</p>
                          </div>
                          <span className="rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-bold text-amber-800">
                            {p.count} mentions
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ) : null}

            {/* 7. AI SUGGESTIONS TAB */}
            {activeTab === 'ai' ? (
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-ink-900">AI Operational Suggestions</h3>
                  <p className="text-xs text-ink-500">
                    Recommendations synthesized from customer feedback sentiment.
                  </p>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="rounded-3xl border border-cream-300 bg-white p-6 shadow-xs">
                    <div className="flex items-center gap-2 text-amber-700">
                      <Clock size={18} />
                      <h4 className="font-bold text-sm text-ink-900">Accelerate 8:00 - 10:00 PM Peak Service Speed</h4>
                    </div>
                    <p className="mt-2 text-xs text-ink-600 leading-relaxed">
                      Diner checkouts and table turnover peak between 8:00 PM and 10:00 PM. Pre-prepping signature gravies, dips, and tableware ahead of peak hours will reduce dining wait times and maintain 4.8+ ratings.
                    </p>
                    <button
                      type="button"
                      onClick={() => showToast('Action marked as scheduled for next staff roster')}
                      className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-accent-600 px-4 py-2 text-xs font-bold text-white hover:bg-accent-700"
                    >
                      <Check size={14} /> Mark as In Progress
                    </button>
                  </div>

                  <div className="rounded-3xl border border-cream-300 bg-white p-6 shadow-xs">
                    <div className="flex items-center gap-2 text-emerald-700">
                      <Sparkles size={18} />
                      <h4 className="font-bold text-sm text-ink-900">
                        Promote {restaurant.popularDishes?.[0] || 'Chef Special'} Combo
                      </h4>
                    </div>
                    <p className="mt-2 text-xs text-ink-600 leading-relaxed">
                      Over 90% of reviews mentioning {restaurant.popularDishes?.[0] || 'signature items'} gave top ratings. Highlighting it as a Chef’s Recommendation on your table QR standee will boost diner satisfaction and average order size.
                    </p>
                    <button
                      type="button"
                      onClick={() => showToast('Promotional dish banner enabled on digital menu')}
                      className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-accent-600 px-4 py-2 text-xs font-bold text-white hover:bg-accent-700"
                    >
                      <Check size={14} /> Promote on Standee
                    </button>
                  </div>
                </div>
              </div>
            ) : null}

            {/* 8. COMPETITORS TAB */}
            {activeTab === 'competitors' ? (
              <div className="rounded-3xl border border-cream-300 bg-white p-6 sm:p-8 shadow-sm">
                <h3 className="text-xl font-bold text-ink-900">Local Competitor Benchmarking</h3>
                <p className="text-xs text-ink-500">
                  Performance relative to nearby dining spots in {restaurant.area}, Gorakhpur.
                </p>

                <div className="mt-6 overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead>
                      <tr className="border-b border-cream-200 text-ink-500 font-bold">
                        <th className="pb-3 pr-4">Rank</th>
                        <th className="pb-3 pr-4">Restaurant</th>
                        <th className="pb-3 pr-4">Rating</th>
                        <th className="pb-3 pr-4">Reviews</th>
                        <th className="pb-3 pr-4">Food Score</th>
                        <th className="pb-3 pr-4">Service Score</th>
                        <th className="pb-3">Distance</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-cream-100">
                      {competitorsList.map((c, i) => (
                        <tr
                          key={c.name}
                          className={c.you ? 'bg-accent-50/80 font-bold text-ink-900' : 'text-ink-700'}
                        >
                          <td className="py-3.5 pr-4">#{i + 1}</td>
                          <td className="py-3.5 pr-4">{c.name}</td>
                          <td className="py-3.5 pr-4">★ {c.rating}</td>
                          <td className="py-3.5 pr-4">{c.count}</td>
                          <td className="py-3.5 pr-4">{c.food} / 5</td>
                          <td className="py-3.5 pr-4">{c.service} / 5</td>
                          <td className="py-3.5">{c.dist}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ) : null}

            {/* 9. SETTINGS TAB */}
            {activeTab === 'settings' ? (
              <div className="rounded-3xl border border-cream-300 bg-white p-6 sm:p-8 shadow-sm max-w-xl space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-ink-900">Owner Account Settings</h3>
                  <p className="text-xs text-ink-500">Manage security credentials, password, and notification alerts.</p>
                </div>

                {/* Password Manager & Account Security */}
                <div className="rounded-2xl border border-cream-300 bg-white p-5 shadow-xs">
                  <div className="flex items-center justify-between pb-3 border-b border-cream-200">
                    <div className="flex items-center gap-2">
                      <div className="flex size-8 items-center justify-center rounded-xl bg-accent-100 text-accent-700">
                        <Lock size={16} />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-ink-900">Password Manager & Security</h4>
                        <p className="text-[11px] text-ink-500">Update your restaurant owner credentials</p>
                      </div>
                    </div>
                    <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-0.5 text-[10px] font-bold text-emerald-700 border border-emerald-200">
                      <ShieldCheck size={12} />
                      Protected
                    </span>
                  </div>

                  <form onSubmit={handleChangeOwnerPassword} className="mt-4 space-y-3">
                    <div>
                      <label className="mb-1 block text-xs font-bold text-ink-800" htmlFor="owner-curr-pw">
                        Current Password
                      </label>
                      <input
                        id="owner-curr-pw"
                        type={showOwnerPw ? 'text' : 'password'}
                        required
                        value={currentOwnerPw}
                        onChange={(e) => setCurrentOwnerPw(e.target.value)}
                        placeholder="Enter existing password"
                        className="w-full rounded-xl border border-cream-300 p-2 text-xs outline-none focus:border-accent-600"
                      />
                    </div>

                    <div className="grid gap-3 sm:grid-cols-2">
                      <div>
                        <label className="mb-1 block text-xs font-bold text-ink-800" htmlFor="owner-new-pw">
                          New Password
                        </label>
                        <input
                          id="owner-new-pw"
                          type={showOwnerPw ? 'text' : 'password'}
                          required
                          value={newOwnerPw}
                          onChange={(e) => setNewOwnerPw(e.target.value)}
                          placeholder="Min 6 characters"
                          className="w-full rounded-xl border border-cream-300 p-2 text-xs outline-none focus:border-accent-600"
                        />
                      </div>
                      <div>
                        <label className="mb-1 block text-xs font-bold text-ink-800" htmlFor="owner-confirm-pw">
                          Confirm New Password
                        </label>
                        <input
                          id="owner-confirm-pw"
                          type={showOwnerPw ? 'text' : 'password'}
                          required
                          value={confirmOwnerPw}
                          onChange={(e) => setConfirmOwnerPw(e.target.value)}
                          placeholder="Re-type new password"
                          className="w-full rounded-xl border border-cream-300 p-2 text-xs outline-none focus:border-accent-600"
                        />
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-1">
                      <button
                        type="button"
                        onClick={() => setShowOwnerPw(!showOwnerPw)}
                        className="inline-flex items-center gap-1 text-[11px] font-semibold text-accent-700 hover:text-accent-800 cursor-pointer"
                      >
                        {showOwnerPw ? <EyeOff size={13} /> : <Eye size={13} />}
                        <span>{showOwnerPw ? 'Hide Passwords' : 'Show Passwords'}</span>
                      </button>
                      <button
                        type="submit"
                        disabled={isChangingPw}
                        className="rounded-xl bg-accent-600 px-4 py-2 text-xs font-bold text-white shadow-xs hover:bg-accent-700 disabled:opacity-60 cursor-pointer transition"
                      >
                        {isChangingPw ? 'Updating...' : 'Update Password'}
                      </button>
                    </div>

                    {pwChangeError ? (
                      <p className="rounded-lg bg-red-50 p-2 text-[11px] font-semibold text-red-600">
                        {pwChangeError}
                      </p>
                    ) : null}

                    {pwChangeSuccess ? (
                      <p className="rounded-lg bg-emerald-50 p-2 text-[11px] font-semibold text-emerald-700">
                        {pwChangeSuccess}
                      </p>
                    ) : null}

                    <div className="rounded-xl bg-cream-50 p-2.5 text-[11px] text-ink-600 space-y-1 border border-cream-200">
                      <div className="flex justify-between">
                        <span className="font-semibold text-ink-800">Registered Owner ID:</span>
                        <span className="font-mono text-ink-900">{restaurant.ownerEmail || 'Registered Owner'}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-semibold text-ink-800">Security Standard:</span>
                        <span className="text-emerald-700 font-bold">Encrypted Local Key Vault</span>
                      </div>
                    </div>
                  </form>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between rounded-2xl border border-cream-200 p-4">
                    <div>
                      <h4 className="text-xs font-bold text-ink-900">Instant Review Notifications</h4>
                      <p className="text-[11px] text-ink-500">Receive alerts when guests post reviews</p>
                    </div>
                    <input type="checkbox" defaultChecked className="size-4 accent-accent-600" />
                  </div>

                  <div className="flex items-center justify-between rounded-2xl border border-cream-200 p-4">
                    <div>
                      <h4 className="text-xs font-bold text-ink-900">Weekly Performance Digest</h4>
                      <p className="text-[11px] text-ink-500">Weekly email with AI sentiment summary</p>
                    </div>
                    <input type="checkbox" defaultChecked className="size-4 accent-accent-600" />
                  </div>

                  {/* Supabase PostgreSQL Card */}
                  <div className="rounded-2xl border border-cream-300 bg-accent-50/60 p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-accent-800">
                        <Database size={18} />
                        <h4 className="text-xs font-bold">Supabase PostgreSQL</h4>
                      </div>
                      <span className="inline-flex items-center gap-1 rounded-full bg-accent-100 px-2 py-0.5 text-[10px] font-bold text-accent-800">
                        <Cloud size={10} />
                        SDK Active
                      </span>
                    </div>
                    <p className="mt-1.5 text-[11px] leading-relaxed text-ink-800">
                      Connected to Supabase database tables for real-time reviews, menu updates, and diner feedback sync.
                    </p>
                    <div className="mt-3 flex items-center justify-between pt-2 border-t border-cream-200">
                      <span className="text-[10px] font-semibold text-accent-700">
                        Tables: restaurants, reviews, inquiries
                      </span>
                      <button
                        type="button"
                        disabled={isSyncingDatabase}
                        onClick={async () => {
                          setIsSyncingDatabase(true);
                          try {
                            const res = await storageService.syncToSupabase();
                            showToast(`Synced ${res.restaurantsCount} restaurants and ${res.reviewsCount} reviews to Supabase!`);
                          } catch {
                            showToast('Sync completed with local offline cache.');
                          } finally {
                            setIsSyncingDatabase(false);
                          }
                        }}
                        className="inline-flex items-center gap-1.5 rounded-lg bg-accent-600 px-3 py-1.5 text-xs font-bold text-white shadow-2xs hover:bg-accent-700 disabled:opacity-60 transition"
                      >
                        <RefreshCw size={12} className={isSyncingDatabase ? 'animate-spin' : ''} />
                        {isSyncingDatabase ? 'Syncing...' : 'Sync to Supabase'}
                      </button>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-cream-200">
                    <button
                      type="button"
                      onClick={() => {
                        storageService.resetAllData();
                        showToast('Reset cached restaurant data to initial defaults');
                        loadData();
                      }}
                      className="rounded-xl border border-red-200 bg-red-50 px-4 py-2 text-xs font-bold text-red-700 hover:bg-red-100"
                    >
                      Reset Cached Account Data
                    </button>
                  </div>
                </div>
              </div>
            ) : null}
          </main>
        </div>
      </div>

      {/* Add / Edit Dish Modal */}
      {isDishModalOpen ? (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink-900/60 p-4 backdrop-blur-xs animate-in fade-in"
        >
          <div className="w-full max-w-md rounded-3xl border border-cream-300 bg-white p-6 shadow-2xl">
            <h3 className="text-lg font-bold text-ink-900">
              {editingDish ? 'Edit Dish' : 'Add New Dish'}
            </h3>
            <form onSubmit={handleSaveDish} className="mt-4 space-y-3.5">
              <div>
                <label className="mb-1 block text-xs font-bold text-ink-800">Dish Name</label>
                <input
                  type="text"
                  required
                  value={dishName}
                  onChange={(e) => setDishName(e.target.value)}
                  placeholder="e.g. Saffron Mutton Rogan Josh"
                  className="w-full rounded-xl border border-cream-300 p-2.5 text-xs outline-none focus:border-accent-600"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="mb-1 block text-xs font-bold text-ink-800">Price (₹)</label>
                  <input
                    type="number"
                    required
                    value={dishPrice}
                    onChange={(e) => setDishPrice(Number(e.target.value))}
                    className="w-full rounded-xl border border-cream-300 p-2.5 text-xs outline-none focus:border-accent-600"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-xs font-bold text-ink-800">Category</label>
                  <select
                    value={dishCategory}
                    onChange={(e) => setDishCategory(e.target.value)}
                    className="w-full rounded-xl border border-cream-300 p-2.5 text-xs outline-none focus:border-accent-600 bg-white"
                  >
                    {MENU_CATEGORIES.filter((c) => c !== 'All').map((c) => (
                      <option key={c}>{c}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="mb-1 block text-xs font-bold text-ink-800">Diet Type</label>
                <div className="flex gap-4 text-xs font-bold">
                  <label className="flex items-center gap-1.5 cursor-pointer">
                    <input
                      type="radio"
                      name="diet"
                      checked={dishDiet === 'veg'}
                      onChange={() => setDishDiet('veg')}
                      className="accent-emerald-600"
                    />
                    Pure Veg
                  </label>
                  <label className="flex items-center gap-1.5 cursor-pointer">
                    <input
                      type="radio"
                      name="diet"
                      checked={dishDiet === 'nonveg'}
                      onChange={() => setDishDiet('nonveg')}
                      className="accent-rose-600"
                    />
                    Non-Veg
                  </label>
                </div>
              </div>

              <div>
                <label className="mb-1 block text-xs font-bold text-ink-800">Description</label>
                <textarea
                  rows={2}
                  value={dishDesc}
                  onChange={(e) => setDishDesc(e.target.value)}
                  placeholder="Ingredients and culinary style..."
                  className="w-full rounded-xl border border-cream-300 p-2.5 text-xs outline-none focus:border-accent-600"
                />
              </div>

              {/* Dish Photo / Image Upload Section */}
              <div className="rounded-2xl border border-cream-200 bg-cream-50/70 p-3.5 space-y-3">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold text-ink-800 flex items-center gap-1.5">
                    <Camera size={14} className="text-accent-700" />
                    Dish Food Photo
                  </label>
                  {dishImageUrl ? (
                    <button
                      type="button"
                      onClick={() => setDishImageUrl('')}
                      className="text-[11px] font-semibold text-rose-600 hover:text-rose-800 underline cursor-pointer"
                    >
                      Remove Photo
                    </button>
                  ) : null}
                </div>

                <div className="flex items-center gap-3">
                  <div className="relative size-16 shrink-0 rounded-2xl border border-cream-300 bg-white flex items-center justify-center overflow-hidden shadow-2xs">
                    {dishImageUrl ? (
                      <img
                        src={dishImageUrl}
                        alt="Dish Preview"
                        className="size-full object-cover"
                      />
                    ) : (
                      <UtensilsCrossed size={20} className="text-ink-400" />
                    )}
                    {isUploadingDishImg ? (
                      <div className="absolute inset-0 bg-ink-900/60 flex items-center justify-center text-white text-[9px] font-bold">
                        Uploading...
                      </div>
                    ) : null}
                  </div>

                  <div className="flex-1 space-y-1.5">
                    <label className="inline-flex items-center gap-1.5 rounded-xl bg-accent-600 px-3 py-1.5 text-xs font-bold text-white shadow-xs hover:bg-accent-700 cursor-pointer transition">
                      <Upload size={13} />
                      <span>{isUploadingDishImg ? 'Compressing...' : 'Upload from Device / Camera'}</span>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleDishImageFileUpload}
                        disabled={isUploadingDishImg}
                        className="hidden"
                      />
                    </label>
                    <p className="text-[10px] text-ink-500">Pick from camera roll or local files</p>
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-1 text-[11px] text-ink-500 font-semibold mb-1">
                    <Link2 size={11} />
                    <span>Or direct image URL:</span>
                  </div>
                  <input
                    type="url"
                    value={dishImageUrl}
                    onChange={(e) => setDishImageUrl(e.target.value)}
                    placeholder="https://images.unsplash.com/photo-..."
                    className="w-full rounded-xl border border-cream-300 bg-white px-3 py-1.5 text-xs text-ink-900 outline-none focus:border-accent-600"
                  />
                </div>

                {/* Quick Food Presets */}
                <div>
                  <span className="text-[11px] font-bold text-ink-700 block mb-1.5">
                    Quick food presets:
                  </span>
                  <div className="flex flex-wrap gap-1.5 max-h-24 overflow-y-auto">
                    {FOOD_DISH_PRESETS.map((preset) => (
                      <button
                        key={preset.name}
                        type="button"
                        onClick={() => {
                          setDishImageUrl(preset.url);
                          showToast(`Set photo: ${preset.name}`);
                        }}
                        className={`inline-flex items-center gap-1.5 rounded-lg border px-2 py-1 text-[11px] font-semibold transition cursor-pointer ${
                          dishImageUrl === preset.url
                            ? 'border-accent-600 bg-accent-100 text-accent-800'
                            : 'border-cream-300 bg-white text-ink-700 hover:bg-cream-100'
                        }`}
                      >
                        <img src={preset.url} alt="" className="size-4 rounded-full object-cover" />
                        <span>{preset.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-5 flex gap-2.5 pt-2">
                <button
                  type="button"
                  onClick={() => setIsDishModalOpen(false)}
                  className="flex-1 rounded-xl border border-cream-300 py-2.5 text-xs font-bold text-ink-700 hover:bg-cream-100"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 rounded-xl bg-accent-600 py-2.5 text-xs font-bold text-white hover:bg-accent-700"
                >
                  {editingDish ? 'Save Changes' : 'Add Dish'}
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : null}

      {/* Reply to Review Modal */}
      {replyTargetReview ? (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink-900/60 p-4 backdrop-blur-xs animate-in fade-in"
        >
          <div className="w-full max-w-md rounded-3xl border border-cream-300 bg-white p-6 shadow-2xl">
            <h3 className="text-lg font-bold text-ink-900">
              Reply to {replyTargetReview.userName}
            </h3>
            <p className="mt-1 text-xs text-ink-500 italic">"{replyTargetReview.text}"</p>

            <form onSubmit={handleSendReply} className="mt-4 space-y-3.5">
              <div>
                <label className="mb-1 block text-xs font-bold text-ink-800" htmlFor="reply-input">
                  Your Management Response
                </label>
                <textarea
                  id="reply-input"
                  required
                  rows={3}
                  value={replyText}
                  onChange={(e) => setReplyText(e.target.value)}
                  placeholder="Thank you for visiting! We appreciate your feedback..."
                  className="w-full rounded-xl border border-cream-300 p-2.5 text-xs outline-none focus:border-accent-600"
                />
              </div>

              <div className="flex gap-2.5 pt-2">
                <button
                  type="button"
                  onClick={() => setReplyTargetReview(null)}
                  className="flex-1 rounded-xl border border-cream-300 py-2.5 text-xs font-bold text-ink-700 hover:bg-cream-100"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 rounded-xl bg-accent-600 py-2.5 text-xs font-bold text-white hover:bg-accent-700"
                >
                  Publish Reply
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : null}

      {/* Batch Standees Print Modal */}
      {isBatchPrintModalOpen && restaurant ? (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink-900/70 p-4 backdrop-blur-xs overflow-y-auto animate-in fade-in"
        >
          <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl border border-cream-300 bg-white p-6 sm:p-8 shadow-2xl">
            {/* Modal Header */}
            <div className="no-print flex flex-wrap items-center justify-between gap-4 border-b border-cream-200 pb-4 mb-6">
              <div>
                <h3 className="text-xl font-bold text-ink-900">
                  Batch Table Standees for {restaurant.name}
                </h3>
                <p className="text-xs text-ink-500">
                  Ready-to-print standee tent cards for Tables 1 to 10 + Billing Counter.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => window.print()}
                  className="inline-flex items-center gap-1.5 rounded-full bg-accent-600 px-5 py-2 text-xs font-bold text-white shadow-sm hover:bg-accent-700 cursor-pointer"
                >
                  <Printer size={15} />
                  Print All 11 Cards
                </button>
                <button
                  type="button"
                  onClick={() => setIsBatchPrintModalOpen(false)}
                  className="rounded-full border border-cream-300 p-2 text-ink-600 hover:bg-cream-100 cursor-pointer"
                  aria-label="Close modal"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Batch Grid */}
            <div className="standee-batch-grid grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Billing Counter'].map((tbl) => {
                const bUrl = getRestaurantPublicUrl(restaurant, {
                  customBaseUrl: customQrBaseUrl || undefined,
                  queryParams: {
                    qr: 'standee',
                    table: tbl === 'Billing Counter' ? 'Counter' : tbl,
                  },
                });
                return (
                  <div
                    key={tbl}
                    className="standee-print-card rounded-3xl border-4 border-ink-900 bg-white p-5 text-center shadow-sm"
                  >
                    <div className="font-display font-extrabold text-accent-700 text-xs">
                      Vyora | Gorakhpur Dining
                    </div>
                    <h4 className="mt-1 text-sm font-bold text-ink-900 truncate">{restaurant.name}</h4>
                    <div className="mt-1">
                      <span className="inline-block rounded-full bg-accent-100 px-3 py-0.5 text-[11px] font-bold text-accent-800">
                        {tbl === 'Billing Counter' ? 'Billing Counter' : `Table ${tbl}`}
                      </span>
                    </div>
                    <p className="mt-1 text-[10px] text-ink-500">Scan to View Menu & Share Review</p>

                    <div className="my-3 flex justify-center">
                      <QrCodeView
                        value={bUrl}
                        restaurantName={restaurant.name}
                        filename={`${qrFilename.replace(/\.png$/, '')}-table-${tbl}`}
                        size={120}
                        showActions={false}
                      />
                    </div>

                    <p className="text-[9px] font-semibold text-ink-600">
                      ⭐ Support local Gorakhpur kitchens!
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
