/** Id of the restaurant listing section on the home page (used for in-page links). */
export const RESULTS_SECTION_ID = 'restaurants';

/** Heading of the listing; search and category jumps scroll here and move focus to it. */
export const RESULTS_HEADING_ID = 'restaurants-heading';

/** Single source of truth for URLs so links never drift from the router config. */
export const ROUTES = {
  home: '/',
  explore: `/#${RESULTS_SECTION_ID}`,
  about: '/about',
  contact: '/contact',
  privacy: '/privacy',
  terms: '/terms',
  myReviews: '/my-reviews',
  ownerLogin: '/owner/login',
  ownerRegister: '/owner/register',
  ownerDashboard: '/owner/dashboard',
  admin: '/admin',
  restaurant: (id: string) => `/restaurants/${encodeURIComponent(id)}`,
} as const;
