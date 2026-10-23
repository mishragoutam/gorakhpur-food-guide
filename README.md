# Gorakhpur Food Guide

A restaurant discovery and review platform for Gorakhpur, Uttar Pradesh. Customers browse local restaurants and (later) read customer-submitted reviews; restaurant owners register and manage their restaurants.

**Status: Page 1 (Home page) only, running on demo data.** The six restaurants, their ratings and review counts are fictional samples. They are flagged `isDemo: true`, labelled "Sample listing" on every card, and explained by a notice above the list. Nothing on the page is a live review or a real business.

**Stack:** React 19 · Vite · TypeScript · Tailwind CSS v4 · Lucide icons · React Router. Mobile-first and PWA-friendly (web manifest, icons, offline app-shell service worker).

## Run it locally

Requires Node.js 22.13 or newer and npm. (The dev server and build run on Node 20.19+, but the test tooling needs 22.13+.)

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually http://localhost:5173).

| Command | What it does |
| --- | --- |
| `npm run dev` | Dev server with hot reload |
| `npm run build` | Type-check, then production build into `dist/` |
| `npm run preview` | Serve the production build (use this to try the PWA / service worker) |
| `npm run typecheck` | TypeScript only |
| `npm run lint` | Oxlint |
| `npm test` | Unit and component tests (Vitest + Testing Library) |

## What's on the page

Header (brand, Home / Explore Restaurants / About, owner login, Register Your Restaurant) → hero with search → category cards → filterable restaurant list → owner call-to-action → footer.

- **Search** matches restaurant name, cuisine, popular dishes and area. Results update as you type.
- **Categories** and the **cuisine / budget / rating** filters combine with each other and with search. Active filters show as removable chips; "Clear all filters" resets them.
- **Empty state** appears when nothing matches.
- **Placeholder routes:** `/restaurants/:id`, `/owner/login`, `/owner/register`, `/about`, `/contact`, `/privacy`, `/terms`, plus a 404 page.

## Project structure

```
src/
  components/
    art/       Local SVG illustrations used instead of photos (no image hosting needed)
    home/      Hero, SearchBar, CategorySection, FilterBar, RestaurantListing, RestaurantCard, OwnerCta
    layout/    Header, Footer, Logo, Layout, ScrollManager
    ui/        Button, Badge, StarRating, SelectField, StatePanel, ...
  data/        categories.ts, demoRestaurants.ts   (demo data lives here and only here)
  hooks/       useRestaurants, useRestaurantFilters, useAsyncData, usePageTitle
  lib/         Pure helpers: filtering, budget bands, formatting, routes
  pages/       One file per route
  services/    restaurantService.ts   (the data-access boundary)
  types/       restaurant.ts          (domain types)
public/        manifest, icons, sw.js
```

## Getting ready for the backend

- Components never import demo data. They call hooks, which call `services/restaurantService.ts`. To go live, replace the two functions in that file with `fetch` calls to the API; the UI does not need to change. Loading and error states are already handled.
- `types/restaurant.ts` is shaped like the tables expected in PostgreSQL (restaurants, categories, cuisines, restaurant-to-category links). `imageUrl: null` falls back to a local illustration until real photos exist.
- Filtering currently runs in the browser (`lib/restaurantFilters.ts`). With a real database, move it to the query and keep the same `RestaurantFilters` shape as the request parameters.
- Once ratings come from real reviews, the "Sample listing" badge and demo notice disappear on their own, because they are driven by each record's `isDemo` flag.

## Notes

- The service worker is registered in production builds only, so `npm run dev` never serves stale files. Bump `CACHE_VERSION` in `public/sw.js` whenever its caching strategy changes.
- The deployment host must serve `index.html` for unknown paths (SPA fallback), so deep links such as `/about` work on refresh. `vite dev` and `vite preview` already do this.
- Out of scope for this page by design: AI features, payments, maps, and any external API.
