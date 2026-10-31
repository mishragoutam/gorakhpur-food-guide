# Gorakhpur Food Guide

A restaurant discovery, table QR review, and collaborative dining platform for Gorakhpur, Uttar Pradesh. Customers browse local restaurants, discover signature food trails, scan table QR codes, and decide group meals together; restaurant owners manage profiles, menus, and table standees.

**Stack:** React 19 · Vite · TypeScript · Tailwind CSS v4 · Lucide icons · React Router v7 · Supabase PostgreSQL & Realtime (dual-persistence with offline localStorage fallback). Mobile-first, responsive, and PWA-friendly.

---

## Key Features

### 1. Restaurant Discovery & Local Food Trails
- **Dynamic Search & Filtering:** Filter by cuisine, budget band, minimum diner rating, and area. Removable filter chips with instant clear.
- **Local Food Trails:** Curated culinary trails across Gorakhpur:
  - *Taramandal Lake Sunset Chaat & Street Trail*
  - *Golghar Heritage North Indian & Mughlai*
  - *Asuran Chowk Samosa & Desi Ghee Mithai*
  - *Betiahata Reading Lounges & Artisanal Cafes*
- **Restaurant Details:** High-resolution menus with dish pricing and veg/non-veg tags, sub-rating breakdowns (food, taste, hygiene, service, ambience), customer reviews with owner management responses, verified location, operating hours, phone dialer action, and Google Maps directions.

### 2. Individual Restaurant QR Code & Standee System
- **Unique Deterministic Payloads:** Every restaurant generates a distinct canonical public URL encoded into high-contrast QR Code Model 2.
- **Centralized Public URL Engine (`src/lib/restaurantUrl.ts`):** Canonical routing `/restaurants/:id`, environment variable domain configuration (`VITE_PUBLIC_SITE_URL`), production localhost guard, and clean slug formatting.
- **Standards-Compliant QR Generation (`src/lib/qrCode.ts`):** Standard quiet zones, error correction level M, and crisp vector rendering.
- **Comprehensive Export & Sharing UI (`RestaurantQrModal.tsx` / `QrCodeView.tsx`):**
  - **PNG Download:** High-resolution (1000x1000px) raster image with safe sanitized filenames: `gorakhpur-food-guide-[slug]-qr.png`.
  - **SVG Download:** Scalable vector format.
  - **Printable Table Standee Card:** Print-isolated layout with table numbers for dining tables and billing counters.
  - **Web Share API:** 1-click native sharing on smartphones with clipboard fallback.
- **Admin QR Management:** Moderation panel tab for previewing and bulk exporting QR codes for all restaurants.

### 3. "Decide Together" — Group Dining Decision & Voting
- **Session Management (`/decide-together`):** Create outings, define budgets and target areas, and invite friends via shareable link or room code. Real-time synchronization powered by Supabase Realtime with offline local storage fallback.
- **Preference Collection:** Captures dietary requirements (Strict Pure Veg, Non-Veg OK, Vegan, Flexible), per-person budget in INR, cuisine cravings, spice tolerance, preferred Gorakhpur localities, and voluntary allergen notes (with prominent legal disclaimer).
- **Deterministic Recommendation Engine (`src/lib/groupRecommendation.ts`):**
  - *Hard constraints:* Pure veg requirement eliminates venues without vegetarian food; strictly caps out-of-budget venues.
  - *Balanced fairness:* Weighted scoring ($0.6 \times \text{mean} + 0.4 \times \min$) prevents majority tyranny and protects minority diets.
  - *Transparent explanations:* Lists exact matched preferences and compromises for every recommendation.
- **Democratic Consensus Voting:** 1 active vote per participant, vote changes allowed before closing, live percentage bars, tie-breaking by compatibility score, and winner celebration card with directions and QR standee trigger.

---

## Run It Locally

Requires Node.js 22.13+ (or Node 20.19+) and npm.

```bash
npm install
npm run dev
```

Open http://localhost:5173 in your browser.

| Command | What it does |
| --- | --- |
| `npm run dev` | Start development server with hot module reload |
| `npm run build` | Full TypeScript typecheck and production build into `dist/` |
| `npm run preview` | Serve production build locally |
| `npm run typecheck` | Run TypeScript compiler checks (`tsc -b`) |
| `npm run lint` | Oxlint fast linter |
| `npm test` | Run all unit, component, and QR scanner round-trip tests (Vitest) |

---

## Environment Variables

Copy `.env.example` to `.env`:

```env
# Public domain for production QR payloads (optional in dev, defaults to current origin or canonical production domain)
VITE_PUBLIC_SITE_URL="https://gorakhpurfoodguide.in"

# Supabase PostgreSQL Database & Realtime Configuration
# Replace these values from your Supabase Dashboard -> Project Settings -> API
VITE_SUPABASE_URL="https://your-project-id.supabase.co"
VITE_SUPABASE_ANON_KEY="your-anon-key-here"
```

### Database Setup & Migration to Supabase

1. Open your Supabase project at [database.new](https://database.new) or [supabase.com](https://supabase.com).
2. Go to **SQL Editor** -> **New query**.
3. Copy the contents of `supabase/schema.sql` and click **Run**.
   - This creates all required tables: `restaurants`, `reviews`, `inquiries`, `audit_logs`, and `group_sessions`.
   - Configures Row Level Security (RLS) policies.
   - Enables Supabase Realtime for instant multi-user synchronization.
   - Automatically seeds all 6 initial Gorakhpur restaurants and reviews.
4. Add your project URL and anon public key to `.env`.
5. You can also sync local changes directly to Supabase anytime from the Admin Panel or Owner Dashboard.

---

## Verification & Automated Tests

All tests run via `npm test` and include:
1. `src/lib/restaurantUrl.test.ts`: Unique restaurant payload generation, canonical route resolution, sanitized slugs, production localhost protection, and standard filename generation.
2. `src/lib/qrCode.test.ts`: SVG string generation, high-res PNG dataURL generation, and **in-memory scanner round-trip verification using `jsQR`**.
3. `src/lib/groupRecommendation.test.ts`: Hard dietary constraints enforcement, budget ceiling checks, multi-member balanced scoring, and match/compromise explanations.
4. `src/services/groupDiningService.test.ts`: Session lifecycle, preference saving, voting with duplicate vote prevention, and tie-breaker decision consensus.
5. `src/App.test.tsx` & `src/pages/HomePage.test.tsx`: App routing, header/footer navigation, search, filters, and restaurant details.
