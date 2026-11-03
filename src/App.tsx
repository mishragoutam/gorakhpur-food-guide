import { useEffect, lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { ToastContainer } from '@/components/ui/Toast';
import { supabase, isSupabaseConfigured } from '@/lib/supabase';
import { storageService } from '@/services/storageService';
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
    if (isSupabaseConfigured() && supabase) {
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

      return () => {
        subscription.unsubscribe();
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
