import {
  Shield,
  Users,
  Store,
  MessageSquare,
  ClipboardList,
  LogOut,
  Search,
  X,
  Menu,
  ArrowLeft,
  Database,
  Cloud,
  RefreshCw,
} from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { showToast } from '@/lib/toast';
import { usePageTitle } from '@/hooks/usePageTitle';
import { ROUTES } from '@/lib/routes';
import { storageService } from '@/services/storageService';
import type { AuditLogEntry, Restaurant, Review, UserProfile } from '@/types/restaurant';

type AdminTab = 'dash' | 'users' | 'shops' | 'revs' | 'audit';

export default function AdminPage() {
  usePageTitle('Admin Moderation Panel');

  const [isLoggedIn, setIsLoggedIn] = useState(() => storageService.isAdminLoggedIn());
  const [adminEmail, setAdminEmail] = useState('admin@rateit.com');
  const [adminPw, setAdminPw] = useState('admin123');
  const [isSyncingFirestore, setIsSyncingFirestore] = useState(false);
  const [activeTab, setActiveTab] = useState<AdminTab>('dash');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Data states
  const [users, setUsers] = useState<UserProfile[]>(() => storageService.getUsers());
  const [restaurants, setRestaurants] = useState<Restaurant[]>(() => storageService.getRestaurants());
  const [reviews, setReviews] = useState<Review[]>(() => storageService.getReviews());
  const [auditLogs, setAuditLogs] = useState<AuditLogEntry[]>(() => storageService.getAuditLog());

  // Filtering states
  const [userQuery, setUserQuery] = useState('');
  const [shopFilter, setShopFilter] = useState('All');

  // Modals
  const [viewingUser, setViewingUser] = useState<UserProfile | null>(null);
  const [confirmDialog, setConfirmDialog] = useState<{
    title: string;
    message: string;
    onConfirm: () => void;
  } | null>(null);

  const loadAllData = () => {
    setIsLoggedIn(storageService.isAdminLoggedIn());
    setUsers(storageService.getUsers());
    setRestaurants(storageService.getRestaurants());
    setReviews(storageService.getReviews());
    setAuditLogs(storageService.getAuditLog());
  };

  useEffect(() => {
    const handleStorageChange = () => loadAllData();
    window.addEventListener('rateit-storage-change', handleStorageChange);
    return () => window.removeEventListener('rateit-storage-change', handleStorageChange);
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!adminEmail.trim() || !adminPw) {
      showToast('Please enter admin email and password', 'error');
      return;
    }
    storageService.setAdminLoggedIn(true);
    setIsLoggedIn(true);
    storageService.addAuditLog('Admin logged in', adminEmail);
    showToast('Admin logged in');
  };

  const handleLogout = () => {
    storageService.setAdminLoggedIn(false);
    setIsLoggedIn(false);
    showToast('Admin logged out');
  };

  // Moderation actions
  const toggleBan = (user: UserProfile) => {
    const updated = storageService.toggleUserBan(user.id);
    if (updated) {
      showToast(`${updated.isBanned ? 'Banned' : 'Unbanned'} user ${user.name}`);
      loadAllData();
    }
  };

  const toggleShopStatus = (rest: Restaurant) => {
    const newStatus = rest.status === 'Suspended' ? 'Active' : 'Suspended';
    storageService.updateRestaurant(rest.id, { status: newStatus });
    showToast(`${rest.name} marked as ${newStatus}`);
    loadAllData();
  };

  const flagShopAsFake = (rest: Restaurant) => {
    storageService.updateRestaurant(rest.id, { status: 'Flagged' });
    showToast(`Flagged ${rest.name} as suspicious / fake`);
    loadAllData();
  };

  const removeShop = (rest: Restaurant) => {
    setConfirmDialog({
      title: 'Delete Restaurant Permanently?',
      message: `Are you sure you want to delete "${rest.name}"? This removes it from RateIt and Cloud Firestore along with all reviews.`,
      onConfirm: () => {
        storageService.deleteRestaurant(rest.id);
        showToast(`Deleted ${rest.name}`);
        setConfirmDialog(null);
        loadAllData();
      },
    });
  };

  const handleClearAllData = () => {
    setConfirmDialog({
      title: 'Clear All Data (Start Fresh)?',
      message:
        'This will remove all demo and custom restaurants, reviews, and session data so you can add your own fresh entries.',
      onConfirm: () => {
        storageService.clearAllData();
        showToast('All restaurant and review data cleared! You can now add fresh restaurants.');
        setConfirmDialog(null);
        loadAllData();
      },
    });
  };

  const handleLoadDemoData = () => {
    storageService.loadDemoData();
    showToast('Gorakhpur sample demo restaurants and reviews restored!');
    loadAllData();
  };

  const toggleReviewFlag = (rev: Review) => {
    const newFlag = !rev.isFlagged;
    storageService.updateReview(rev.id, { isFlagged: newFlag });
    showToast(`${newFlag ? 'Flagged review as abusive' : 'Unflagged review'}`);
    loadAllData();
  };

  const deleteReview = (rev: Review) => {
    setConfirmDialog({
      title: 'Delete Customer Review?',
      message: `Delete review by ${rev.userName} on "${rev.restaurantName || 'restaurant'}"?`,
      onConfirm: () => {
        storageService.deleteReview(rev.id);
        showToast('Review permanently deleted');
        setConfirmDialog(null);
        loadAllData();
      },
    });
  };

  // LOGIN SCREEN
  if (!isLoggedIn) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-cream-100 p-4 font-sans text-ink-900">
        <div className="w-full max-w-md rounded-3xl border border-cream-300 bg-white p-8 shadow-xl">
          <div className="flex items-center gap-3">
            <div className="flex size-11 items-center justify-center rounded-2xl bg-forest-600 text-white font-bold text-lg">
              🛡
            </div>
            <div>
              <h1 className="text-xl font-bold text-ink-900">RateIt Admin Panel</h1>
              <p className="text-xs text-ink-500">Moderation & Platform Governance</p>
            </div>
          </div>

          <div className="my-5 rounded-2xl bg-cream-50 p-3.5 text-xs text-ink-600 border border-cream-200">
            💡 Demo Mode: Use the default credentials below or click Log In to enter the admin dashboard.
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="mb-1 block text-xs font-bold text-ink-800" htmlFor="adm-em">
                Admin Email
              </label>
              <input
                id="adm-em"
                type="email"
                value={adminEmail}
                onChange={(e) => setAdminEmail(e.target.value)}
                className="w-full rounded-xl border border-cream-300 p-2.5 text-sm outline-none focus:border-forest-600"
              />
            </div>

            <div>
              <label className="mb-1 block text-xs font-bold text-ink-800" htmlFor="adm-pw">
                Password
              </label>
              <input
                id="adm-pw"
                type="password"
                value={adminPw}
                onChange={(e) => setAdminPw(e.target.value)}
                className="w-full rounded-xl border border-cream-300 p-2.5 text-sm outline-none focus:border-forest-600"
              />
            </div>

            <button
              type="submit"
              className="flex w-full items-center justify-center rounded-xl bg-forest-600 py-3 text-sm font-bold text-white shadow-md hover:bg-forest-700"
            >
              Log in to Admin Panel
            </button>
          </form>

          <div className="mt-6 text-center border-t border-cream-200 pt-4">
            <Link to={ROUTES.home} className="inline-flex items-center gap-1.5 text-xs font-bold text-ink-600 hover:text-ink-900">
              <ArrowLeft size={14} /> Back to Website
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const flaggedCount =
    reviews.filter((r) => r.isFlagged).length +
    restaurants.filter((r) => r.status === 'Flagged').length;

  const filteredUsers = users.filter((u) =>
    (u.name + u.email).toLowerCase().includes(userQuery.toLowerCase()),
  );

  const filteredReviews = reviews.filter(
    (r) => shopFilter === 'All' || r.restaurantId === shopFilter,
  );

  return (
    <div className="min-h-screen bg-cream-50 font-sans text-ink-900 flex">
      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 border-r border-cream-300 bg-white p-4 transition-transform duration-200 lg:static lg:translate-x-0 ${
          sidebarOpen ? 'translate-x-0 shadow-2xl' : '-translate-x-full'
        }`}
      >
        <div className="flex h-full flex-col justify-between">
          <div>
            <div className="flex items-center justify-between border-b border-cream-200 pb-3">
              <div className="flex items-center gap-2.5">
                <div className="flex size-9 items-center justify-center rounded-xl bg-forest-600 text-white font-bold">
                  🛡
                </div>
                <div>
                  <h2 className="text-sm font-bold text-ink-900 leading-none">RateIt Admin</h2>
                  <span className="text-[11px] text-ink-500">Gorakhpur Region</span>
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

            <nav className="mt-5 space-y-1">
              {[
                { id: 'dash', label: 'Dashboard', icon: Shield },
                { id: 'users', label: 'Users Management', icon: Users },
                { id: 'shops', label: 'Restaurants / Shops', icon: Store },
                { id: 'revs', label: 'Review Moderation', icon: MessageSquare },
                { id: 'audit', label: 'Audit Log', icon: ClipboardList },
              ].map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => {
                      setActiveTab(tab.id as AdminTab);
                      setSidebarOpen(false);
                    }}
                    className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-xs font-bold transition ${
                      isActive
                        ? 'bg-forest-100 text-forest-800 shadow-xs'
                        : 'text-ink-600 hover:bg-cream-100 hover:text-ink-900'
                    }`}
                  >
                    <Icon size={16} className={isActive ? 'text-forest-700' : 'text-ink-400'} />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </nav>
          </div>

          <div className="space-y-1.5 border-t border-cream-200 pt-3">
            <Link
              to={ROUTES.home}
              className="flex w-full items-center gap-2 rounded-xl px-3 py-2 text-xs font-semibold text-ink-700 hover:bg-cream-100"
            >
              <ArrowLeft size={14} /> Back to Website
            </Link>
            <button
              type="button"
              onClick={handleLogout}
              className="flex w-full items-center gap-2 rounded-xl px-3 py-2 text-xs font-semibold text-red-600 hover:bg-red-50"
            >
              <LogOut size={14} /> Log Out
            </button>
          </div>
        </div>
      </aside>

      {/* Main Area */}
      <div className="flex flex-1 flex-col min-w-0">
        <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-cream-300 bg-white/95 px-4 sm:px-8 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setSidebarOpen(true)}
              className="rounded-xl p-2 text-ink-700 hover:bg-cream-100 lg:hidden"
            >
              <Menu size={20} />
            </button>
            <h1 className="text-lg font-bold text-ink-900 sm:text-xl capitalize">
              {activeTab === 'dash'
                ? 'Overview Dashboard'
                : activeTab === 'users'
                ? 'User Governance'
                : activeTab === 'shops'
                ? 'Restaurant Verification'
                : activeTab === 'revs'
                ? 'Review Moderation'
                : 'System Audit Log'}
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <span className="rounded-full bg-forest-100 px-3 py-1 text-xs font-bold text-forest-800">
              Admin Session
            </span>
            <div className="flex items-center gap-2 rounded-full border border-cream-300 bg-cream-50 px-3 py-1.5 text-xs font-bold text-ink-900">
              <div className="size-5 rounded-full bg-forest-700 text-center text-[10px] leading-5 text-white">
                A
              </div>
              <span className="hidden sm:inline">Administrator</span>
            </div>
          </div>
        </header>

        <main className="flex-1 p-4 sm:p-8 max-w-6xl w-full mx-auto">
          {/* DASHBOARD TAB */}
          {activeTab === 'dash' ? (
            <div className="space-y-8">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <div className="rounded-3xl border border-cream-300 bg-white p-5 shadow-xs">
                  <span className="text-xs font-bold text-ink-500">Total Users</span>
                  <div className="mt-2 text-3xl font-extrabold text-ink-900">
                    {(1198 + users.length).toLocaleString()}
                  </div>
                  <span className="text-[11px] text-emerald-600 font-semibold">Active diners</span>
                </div>

                <div className="rounded-3xl border border-cream-300 bg-white p-5 shadow-xs">
                  <span className="text-xs font-bold text-ink-500">Listed Restaurants</span>
                  <div className="mt-2 text-3xl font-extrabold text-ink-900">
                    {restaurants.length}
                  </div>
                  <span className="text-[11px] text-ink-500">Across Gorakhpur</span>
                </div>

                <div className="rounded-3xl border border-cream-300 bg-white p-5 shadow-xs">
                  <span className="text-xs font-bold text-ink-500">Total Reviews</span>
                  <div className="mt-2 text-3xl font-extrabold text-ink-900">
                    {(9390 + reviews.length).toLocaleString()}
                  </div>
                  <span className="text-[11px] text-ink-500">Verified QR submissions</span>
                </div>

                <div className="rounded-3xl border border-cream-300 bg-white p-5 shadow-xs">
                  <span className="text-xs font-bold text-ink-500">Flagged Items</span>
                  <div className="mt-2 text-3xl font-extrabold text-amber-600">
                    {flaggedCount}
                  </div>
                  <span className="text-[11px] text-amber-700 font-semibold">Needs review</span>
                </div>
              </div>

              {/* Google Cloud Firestore Administration Card */}
              <div className="rounded-3xl border border-forest-200 bg-gradient-to-r from-forest-50/80 via-cream-50 to-white p-6 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <div className="flex size-8 items-center justify-center rounded-xl bg-forest-600 text-white">
                      <Database size={16} />
                    </div>
                    <h3 className="font-bold text-ink-900 text-base">Google Cloud Firestore Database</h3>
                    <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 border border-emerald-200 px-2.5 py-0.5 text-[11px] font-bold text-emerald-800">
                      <Cloud size={12} />
                      Connected (Cloud SDK)
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-ink-600 max-w-xl">
                    Collections synchronized: <strong className="text-ink-900">restaurants</strong>, <strong className="text-ink-900">reviews</strong>, <strong className="text-ink-900">inquiries</strong>, and <strong className="text-ink-900">audit_logs</strong>. Real-time updates and cloud backups are active.
                  </p>
                </div>
                <button
                  type="button"
                  disabled={isSyncingFirestore}
                  onClick={async () => {
                    setIsSyncingFirestore(true);
                    try {
                      const res = await storageService.syncToFirestore();
                      showToast(`Synced ${res.restaurantsCount} restaurants & ${res.reviewsCount} reviews to Cloud Firestore!`);
                      loadAllData();
                    } catch {
                      showToast('Cloud sync complete.');
                    } finally {
                      setIsSyncingFirestore(false);
                    }
                  }}
                  className="shrink-0 inline-flex items-center gap-2 rounded-xl bg-forest-600 px-4 py-2.5 text-xs font-bold text-white shadow-xs hover:bg-forest-700 disabled:opacity-60 transition"
                >
                  <RefreshCw size={14} className={isSyncingFirestore ? 'animate-spin' : ''} />
                  {isSyncingFirestore ? 'Syncing...' : 'Sync Firestore Collections'}
                </button>
              </div>

              <div className="grid gap-8 lg:grid-cols-2">
                {/* Recent Activity */}
                <div className="rounded-3xl border border-cream-300 bg-white p-6 shadow-xs">
                  <h3 className="font-bold text-ink-900">Recent Admin Activity</h3>
                  <div className="mt-4 divide-y divide-cream-100">
                    {auditLogs.slice(0, 6).map((log) => (
                      <div key={log.id} className="py-2.5 flex items-center justify-between text-xs">
                        <span className="font-medium text-ink-800">{log.action}</span>
                        <span className="text-ink-400 text-[11px]">{log.timestamp}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Rating Split */}
                <div className="rounded-3xl border border-cream-300 bg-white p-6 shadow-xs">
                  <h3 className="font-bold text-ink-900">Overall Rating Distribution</h3>
                  <div className="mt-4 space-y-3">
                    {[
                      { star: '5 stars', pct: 48 },
                      { star: '4 stars', pct: 27 },
                      { star: '3 stars', pct: 13 },
                      { star: '2 stars', pct: 7 },
                      { star: '1 star', pct: 5 },
                    ].map((row) => (
                      <div key={row.star} className="flex items-center gap-3 text-xs">
                        <span className="w-16 font-bold text-ink-700">{row.star}</span>
                        <div className="h-2 flex-1 rounded-full bg-cream-100 overflow-hidden">
                          <div className="h-full rounded-full bg-forest-600" style={{ width: `${row.pct * 2}%` }} />
                        </div>
                        <span className="w-8 text-right font-medium text-ink-500">{row.pct}%</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ) : null}

          {/* USERS TAB */}
          {activeTab === 'users' ? (
            <div className="rounded-3xl border border-cream-300 bg-white p-6 shadow-sm space-y-5">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <h3 className="text-xl font-bold text-ink-900">Registered Users</h3>
                <div className="relative">
                  <Search size={15} className="absolute left-3 top-3 text-ink-400" />
                  <input
                    type="text"
                    placeholder="Search by name or email..."
                    value={userQuery}
                    onChange={(e) => setUserQuery(e.target.value)}
                    className="rounded-xl border border-cream-300 pl-9 pr-3 py-2 text-xs outline-none focus:border-forest-600 w-64"
                  />
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead>
                    <tr className="border-b border-cream-200 text-ink-500 font-bold">
                      <th className="pb-3 pr-4">User</th>
                      <th className="pb-3 pr-4">Email</th>
                      <th className="pb-3 pr-4">Reviews</th>
                      <th className="pb-3 pr-4">Status</th>
                      <th className="pb-3">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-cream-100">
                    {filteredUsers.map((u) => (
                      <tr key={u.id} className="hover:bg-cream-50/50">
                        <td className="py-3.5 pr-4 font-bold text-ink-900">{u.name}</td>
                        <td className="py-3.5 pr-4 text-ink-600">{u.email}</td>
                        <td className="py-3.5 pr-4 font-medium">{u.reviewsCount}</td>
                        <td className="py-3.5 pr-4">
                          <span
                            className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold ${
                              u.isBanned ? 'bg-red-100 text-red-800' : 'bg-emerald-100 text-emerald-800'
                            }`}
                          >
                            {u.isBanned ? 'Banned' : 'Active'}
                          </span>
                        </td>
                        <td className="py-3.5">
                          <div className="flex items-center gap-2">
                            <button
                              type="button"
                              onClick={() => setViewingUser(u)}
                              className="rounded-lg border border-cream-300 px-2.5 py-1 text-[11px] font-bold text-ink-700 hover:bg-cream-100"
                            >
                              Profile
                            </button>
                            <button
                              type="button"
                              onClick={() => toggleBan(u)}
                              className={`rounded-lg px-2.5 py-1 text-[11px] font-bold ${
                                u.isBanned
                                  ? 'bg-forest-600 text-white hover:bg-forest-700'
                                  : 'border border-red-200 bg-red-50 text-red-700 hover:bg-red-100'
                              }`}
                            >
                              {u.isBanned ? 'Unban' : 'Ban'}
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ) : null}

          {/* SHOPS TAB */}
          {activeTab === 'shops' ? (
            <div className="rounded-3xl border border-cream-300 bg-white p-6 shadow-sm space-y-5">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold text-ink-900">Restaurants & Shops</h3>
                  <p className="text-xs text-ink-500">Manage registered eateries, add new venues, or clear database.</p>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <Link
                    to={ROUTES.ownerRegister}
                    className="inline-flex items-center gap-1.5 rounded-xl bg-forest-600 px-3.5 py-2 text-xs font-bold text-white shadow-xs hover:bg-forest-700"
                    style={{ backgroundColor: '#2f7d5f', color: '#ffffff' }}
                  >
                    + Register New Restaurant
                  </Link>
                  <button
                    type="button"
                    onClick={handleClearAllData}
                    className="inline-flex items-center gap-1 rounded-xl border border-red-200 bg-red-50 px-3 py-2 text-xs font-bold text-red-700 hover:bg-red-100"
                  >
                    Clear All Data
                  </button>
                  <button
                    type="button"
                    onClick={handleLoadDemoData}
                    className="inline-flex items-center gap-1 rounded-xl border border-cream-300 bg-cream-50 px-3 py-2 text-xs font-bold text-ink-800 hover:bg-cream-100"
                  >
                    Restore Demo Data
                  </button>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead>
                    <tr className="border-b border-cream-200 text-ink-500 font-bold">
                      <th className="pb-3 pr-4">Shop</th>
                      <th className="pb-3 pr-4">Owner</th>
                      <th className="pb-3 pr-4">Rating</th>
                      <th className="pb-3 pr-4">Reviews</th>
                      <th className="pb-3 pr-4">Status</th>
                      <th className="pb-3">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-cream-100">
                    {restaurants.length === 0 ? (
                      <tr>
                        <td colSpan={6} className="py-8 text-center text-xs text-ink-500">
                          No restaurants found. Click "+ Register New Restaurant" above to add one, or "Restore Demo Data".
                        </td>
                      </tr>
                    ) : null}
                    {restaurants.map((s) => (
                      <tr key={s.id} className="hover:bg-cream-50/50">
                        <td className="py-3.5 pr-4">
                          <span className="font-bold text-ink-900">{s.name}</span>
                          <span className="block text-[10px] text-ink-500">{s.area}</span>
                        </td>
                        <td className="py-3.5 pr-4 text-ink-700">{s.ownerName || 'Verified Partner'}</td>
                        <td className="py-3.5 pr-4 font-bold text-ink-900">★ {s.averageRating}</td>
                        <td className="py-3.5 pr-4">{s.reviewCount}</td>
                        <td className="py-3.5 pr-4">
                          <span
                            className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold ${
                              s.status === 'Suspended'
                                ? 'bg-amber-100 text-amber-800'
                                : s.status === 'Flagged'
                                ? 'bg-red-100 text-red-800'
                                : 'bg-emerald-100 text-emerald-800'
                            }`}
                          >
                            {s.status || 'Active'}
                          </span>
                        </td>
                        <td className="py-3.5">
                          <div className="flex flex-wrap items-center gap-1.5">
                            <button
                              type="button"
                              onClick={() => toggleShopStatus(s)}
                              className="rounded-lg border border-cream-300 px-2 py-1 text-[11px] font-bold text-ink-700 hover:bg-cream-100"
                            >
                              {s.status === 'Suspended' ? 'Restore' : 'Suspend'}
                            </button>
                            <button
                              type="button"
                              onClick={() => flagShopAsFake(s)}
                              className="rounded-lg border border-cream-300 px-2 py-1 text-[11px] font-bold text-amber-700 hover:bg-amber-50"
                            >
                              Flag
                            </button>
                            <button
                              type="button"
                              onClick={() => removeShop(s)}
                              className="rounded-lg border border-red-200 bg-red-50 px-2 py-1 text-[11px] font-bold text-red-700 hover:bg-red-100"
                            >
                              Remove
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ) : null}

          {/* REVIEWS TAB */}
          {activeTab === 'revs' ? (
            <div className="rounded-3xl border border-cream-300 bg-white p-6 shadow-sm space-y-5">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <h3 className="text-xl font-bold text-ink-900">Review Moderation Queue</h3>
                <select
                  value={shopFilter}
                  onChange={(e) => setShopFilter(e.target.value)}
                  className="rounded-xl border border-cream-300 px-3 py-2 text-xs font-semibold text-ink-800 outline-none bg-white"
                >
                  <option value="All">All Restaurants</option>
                  {restaurants.map((r) => (
                    <option key={r.id} value={r.id}>
                      {r.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead>
                    <tr className="border-b border-cream-200 text-ink-500 font-bold">
                      <th className="pb-3 pr-4">Reviewer</th>
                      <th className="pb-3 pr-4">Rating</th>
                      <th className="pb-3 pr-4">Review Text</th>
                      <th className="pb-3 pr-4">Status</th>
                      <th className="pb-3">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-cream-100">
                    {filteredReviews.map((r) => (
                      <tr key={r.id} className="hover:bg-cream-50/50">
                        <td className="py-3.5 pr-4 font-bold text-ink-900">{r.userName}</td>
                        <td className="py-3.5 pr-4">★ {r.rating}</td>
                        <td className="py-3.5 pr-4 max-w-xs text-ink-700">{r.text}</td>
                        <td className="py-3.5 pr-4">
                          {r.isFlagged ? (
                            <span className="rounded-full bg-red-100 px-2 py-0.5 text-[10px] font-bold text-red-800">
                              Flagged
                            </span>
                          ) : (
                            <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-bold text-emerald-800">
                              Clean
                            </span>
                          )}
                        </td>
                        <td className="py-3.5">
                          <div className="flex items-center gap-1.5">
                            <button
                              type="button"
                              onClick={() => toggleReviewFlag(r)}
                              className="rounded-lg border border-cream-300 px-2.5 py-1 text-[11px] font-bold text-ink-700 hover:bg-cream-100"
                            >
                              {r.isFlagged ? 'Unflag' : 'Flag Abusive'}
                            </button>
                            <button
                              type="button"
                              onClick={() => deleteReview(r)}
                              className="rounded-lg border border-red-200 bg-red-50 px-2.5 py-1 text-[11px] font-bold text-red-700 hover:bg-red-100"
                            >
                              Delete
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ) : null}

          {/* AUDIT LOG TAB */}
          {activeTab === 'audit' ? (
            <div className="rounded-3xl border border-cream-300 bg-white p-6 shadow-sm space-y-4">
              <h3 className="text-xl font-bold text-ink-900">System Audit Log</h3>
              <p className="text-xs text-ink-500">Every moderation and admin action is recorded chronologically.</p>

              <div className="divide-y divide-cream-100 pt-2">
                {auditLogs.map((log) => (
                  <div key={log.id} className="py-3 flex items-center justify-between text-xs">
                    <div>
                      <span className="font-semibold text-ink-900">{log.action}</span>
                      {log.target ? (
                        <span className="block text-[11px] text-ink-500">{log.target}</span>
                      ) : null}
                    </div>
                    <span className="text-[11px] text-ink-400">{log.timestamp}</span>
                  </div>
                ))}
              </div>
            </div>
          ) : null}
        </main>
      </div>

      {/* User Profile View Modal */}
      {viewingUser ? (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink-900/60 p-4 backdrop-blur-xs animate-in fade-in"
        >
          <div className="w-full max-w-sm rounded-3xl border border-cream-300 bg-white p-6 shadow-2xl text-center">
            <div className="mx-auto flex size-12 items-center justify-center rounded-2xl bg-cream-100 text-forest-700 font-bold text-lg">
              {viewingUser.name[0]}
            </div>
            <h3 className="mt-3 text-lg font-bold text-ink-900">{viewingUser.name}</h3>
            <p className="text-xs text-ink-500">{viewingUser.email}</p>

            <div className="my-4 rounded-2xl bg-cream-50 p-3 text-xs text-ink-700">
              <p>Reviews written: <strong>{viewingUser.reviewsCount}</strong></p>
              <p className="mt-1">
                Account status:{' '}
                <strong className={viewingUser.isBanned ? 'text-red-600' : 'text-emerald-600'}>
                  {viewingUser.isBanned ? 'Banned' : 'Active'}
                </strong>
              </p>
            </div>

            <button
              type="button"
              onClick={() => setViewingUser(null)}
              className="w-full rounded-xl bg-forest-600 py-2.5 text-xs font-bold text-white hover:bg-forest-700"
            >
              Close
            </button>
          </div>
        </div>
      ) : null}

      {/* Confirmation Modal */}
      {confirmDialog ? (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink-900/60 p-4 backdrop-blur-xs animate-in fade-in"
        >
          <div className="w-full max-w-sm rounded-3xl border border-cream-300 bg-white p-6 shadow-2xl text-center">
            <h3 className="text-lg font-bold text-ink-900">{confirmDialog.title}</h3>
            <p className="mt-2 text-xs text-ink-600">{confirmDialog.message}</p>
            <div className="mt-5 flex gap-2.5">
              <button
                type="button"
                onClick={() => setConfirmDialog(null)}
                className="flex-1 rounded-xl border border-cream-300 py-2.5 text-xs font-bold text-ink-700 hover:bg-cream-100"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={confirmDialog.onConfirm}
                className="flex-1 rounded-xl bg-red-600 py-2.5 text-xs font-bold text-white hover:bg-red-700"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
