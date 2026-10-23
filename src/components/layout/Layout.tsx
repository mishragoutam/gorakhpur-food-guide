import { Outlet } from 'react-router-dom';
import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';
import { ScrollManager } from '@/components/layout/ScrollManager';

export const MAIN_CONTENT_ID = 'main-content';

/** Shared chrome (skip link, header, footer) around every route. */
export function Layout() {
  return (
    <div className="flex min-h-dvh flex-col">
      <ScrollManager />
      <a
        href={`#${MAIN_CONTENT_ID}`}
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-full focus:bg-ink-900 focus:px-5 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-cream-50"
      >
        Skip to main content
      </a>
      <Header />
      <main id={MAIN_CONTENT_ID} tabIndex={-1} className="flex-1 focus:outline-none">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
