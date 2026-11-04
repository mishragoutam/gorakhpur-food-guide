import { useEffect, lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { ToastContainer } from '@/components/ui/Toast';
import { supabase, isSupabaseConfigured } from '@/lib/supabase';
import { storageService } from '@/services/storageService';
import { restaurantService } from '@/services/restaurantService';
import { fromRestaurantRow } from '@/services/supabaseService';
import HomePage from '@/pages/HomePage';
import RestaurantDetailsPage from '@/pages/RestaurantDetailsPage';
import NotFoundPage from '@/pages/NotFoundPage';

// Code-split heavy routes for rapid mobile loading
const OwnerDashboardPage = lazy(() => import('@/pages/owner/OwnerDashboardPage'));
const AdminPage = lazy(() => import('@/pages/admin/AdminPage'));
const GroupDiningPage = lazy(() => import('@/pages/GroupDiningPage'));
const OwnerLoginPage = lazy(() => import('@/pages/OwnerLoginPage'));
const OwnerRegisterPage = lazy(() => import('@/pages/OwnerRegisterPage'));
const MyReviewsPage = lazy(() => import('@/pages/MyReviewsPage'));
const AboutPage = lazy(() => import('@/pages/AboutPage'));
const ContactPage = lazy(() => import('@/pages/ContactPage'));
const PrivacyPage = lazy(() => import('@/pages/PrivacyPage'));
const TermsPage = lazy(() => import('@/pages/TermsPage'));

function RouteLoadingFallback() {
  return (
    <div className="min-h-[50vh] flex flex-col items-center justify-center gap-3">
      <div className="size-8 rounded-full border-2 border-forest-600 border-t-transparent animate-spin" />
      <span className="text-xs font-semibold text-ink-500">Loading page...</span>
    </div>
  );
}

export default function App() {
  useEffect(() => {
    if (import.meta.env.MODE !== 'test' && isSupabaseConfigured() && supabase) {
      // 1. Initial Cloud Sync: Ensure mobile and desktop stay 100% identical
      restaurantService.fetchFromCloud().catch(() => {});
      storageService.fetchBookingsFromCloud().catch(() => {});

      // 2. Auth State Change Listener
      const {
        data: { subscription },
      } = supabase.auth.onAuthStateChange((_event, session) => {
        if (session?.user?.email) {
          const userMeta = (session.user.user_metadata as Record<string, string>) || {};
          const derivedName =
            userMeta.name ||
            userMeta.full_name ||
            session.user.email.split('@')[0]?.replace(/[._]/g, ' ') ||
            'Google Diner';
          const capitalName = derivedName
            .split(' ')
            .map((w: string) => w.charAt(0).toUpperCase() + w.slice(1))
            .join(' ');

          storageService.setCustomerUser({
            name: capitalName,
            email: session.user.email,
            avatarUrl:
              userMeta.avatar_url ||
              userMeta.picture ||
              'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&h=150&q=80',
          });
        }
      });

      // 3. Realtime Subscription: Instant sync when an owner registers or edits their restaurant
      const restaurantChannel = supabase
        .channel('realtime:restaurants-sync')
        .on(
          'postgres_changes',
          { event: '*', schema: 'public', table: 'restaurants' },
          (payload) => {
            if (payload.eventType === 'INSERT' || payload.eventType === 'UPDATE') {
              const row = payload.new as Record<string, unknown>;
              const rest = fromRestaurantRow(row);
              storageService.upsertRestaurantFromCloud(rest);
            } else if (payload.eventType === 'DELETE') {
              const old = payload.old as Record<string, unknown>;
              if (old?.id) {
                storageService.removeRestaurantFromStorage(String(old.id));
              }
            }
          },
        )
        .subscribe();

      // 4. Realtime Subscription: Instant sync for table reservations across mobile and desktop
      const bookingChannel = supabase
        .channel('realtime:bookings-sync')
        .on(
          'postgres_changes',
          { event: '*', schema: 'public', table: 'inquiries', filter: 'category=eq.table_booking' },
          () => {
            storageService.fetchBookingsFromCloud().catch(() => {});
          },
        )
        .subscribe();

      return () => {
        subscription.unsubscribe();
        if (supabase) {
          supabase.removeChannel(restaurantChannel);
          supabase.removeChannel(bookingChannel);
        }
      };
    }
  }, []);

  return (
    <BrowserRouter>
      <Suspense fallback={<RouteLoadingFallback />}>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="restaurants/:restaurantId" element={<RestaurantDetailsPage />} />
            <Route path="restaurant/:restaurantId" element={<RestaurantDetailsPage />} />
            <Route path="r/:restaurantId" element={<RestaurantDetailsPage />} />
            <Route path="review/:restaurantId" element={<RestaurantDetailsPage />} />
            <Route path="decide-together" element={<GroupDiningPage />} />
            <Route path="decide-together/:sessionId" element={<GroupDiningPage />} />
            <Route path="my-reviews" element={<MyReviewsPage />} />
            <Route path="owner/login" element={<OwnerLoginPage />} />
            <Route path="owner/register" element={<OwnerRegisterPage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="privacy" element={<PrivacyPage />} />
            <Route path="terms" element={<TermsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
          {/* Full-width dedicated dashboards */}
          <Route path="owner/dashboard" element={<OwnerDashboardPage />} />
          <Route path="admin" element={<AdminPage />} />
        </Routes>
      </Suspense>
      <ToastContainer />
    </BrowserRouter>
  );
}
