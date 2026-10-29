import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { ToastContainer } from '@/components/ui/Toast';
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
