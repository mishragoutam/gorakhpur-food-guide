import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { ToastContainer } from '@/components/ui/Toast';
import { supabase, isSupabaseConfigured } from '@/lib/supabase';
import { storageService } from '@/services/storageService';
import AboutPage from '@/pages/AboutPage';
import ContactPage from '@/pages/ContactPage';
import HomePage from '@/pages/HomePage';
import NotFoundPage from '@/pages/NotFoundPage';
import OwnerLoginPage from '@/pages/OwnerLoginPage';
import OwnerRegisterPage from '@/pages/OwnerRegisterPage';
import OwnerDashboardPage from '@/pages/owner/OwnerDashboardPage';
import AdminPage from '@/pages/admin/AdminPage';
import MyReviewsPage from '@/pages/MyReviewsPage';
import PrivacyPage from '@/pages/PrivacyPage';
import RestaurantDetailsPage from '@/pages/RestaurantDetailsPage';
import TermsPage from '@/pages/TermsPage';
import GroupDiningPage from '@/pages/GroupDiningPage';

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
      <ToastContainer />
    </BrowserRouter>
  );
}
