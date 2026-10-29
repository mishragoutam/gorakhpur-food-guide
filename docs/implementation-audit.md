# Implementation & Architecture Audit: Gorakhpur Food Guide
**Date:** October 2026  
**Repository:** https://github.com/mishragoutam/gorakhpur-food-guide  
**Target:** Website Enhancement, Restaurant QR System, and Group Dining Decision & Voting ("Decide Together")

---

## 1. Executive Summary & Codebase Architecture

The **Gorakhpur Food Guide** is a modern Single Page Application (SPA) built with:
- **Framework & Runtime:** React 19 (`react` 19.2.8, `react-dom` 19.2.8), TypeScript 6.0 (`typescript` ~6.0.2), Vite 8.3 (`vite` ^8.3.0).
- **Styling & Icons:** Tailwind CSS v4 (`@tailwindcss/vite` ^4.3.3, `tailwindcss` ^4.3.3) with `@fontsource-variable/bricolage-grotesque` and `@fontsource-variable/instrument-sans`, and Lucide icons (`lucide-react` ^1.55.0).
- **Routing:** React Router v7 (`react-router-dom` ^7.18.4) with standard browser routing and client-side history navigation.
- **Backend & Cloud Persistence:** Firebase / Google Cloud Firestore 13 (`firebase` ^13.1.0) with local browser persistence (`localStorage`) fallback in `storageService.ts` and dual sync in `restaurantService.ts`.
- **Testing & Quality:** Vitest (`vitest` ^5.0.3), `@testing-library/react` ^16.3.3, `@testing-library/jest-dom` ^7.0.1, Oxlint (`oxlint` ^1.81.0).

### Key Application Routes
- `/`: Home page (`HomePage.tsx`) with Hero, Category cards, filterable restaurant listings, AI insights, and owner CTA.
- `/#restaurants`: Direct anchor to restaurant listings.
- `/restaurants/:restaurantId`: Restaurant detail page (`RestaurantDetailsPage.tsx`) with menu highlights, ratings breakdown, customer reviews, location/hours, and QR standee trigger.
- `/my-reviews`: Diner review management (`MyReviewsPage.tsx`).
- `/owner/login` & `/owner/register`: Restaurant owner portal entry points (`OwnerLoginPage.tsx`, `OwnerRegisterPage.tsx`).
- `/owner/dashboard`: Comprehensive multi-tab owner dashboard (`OwnerDashboardPage.tsx`) for profile, menu, reviews, and table QR standee preview.
- `/admin`: Moderation panel (`AdminPage.tsx`) for users, restaurants, reviews, and audit logs.
- `/about`, `/contact`, `/privacy`, `/terms`: Informational and legal pages.

---

## 2. In-Depth QR Code System Audit

### A. Current Implementation Overview
1. **QR Generation Core:**
   - Located at `src/lib/qrCode.ts`.
   - Handwritten, self-contained pure TypeScript implementation of standard QR Code Model 2.
   - Constrained to versions 1 through 6 (`size` 21 to 41, max capacity 108 bytes / ~86 alphanumeric chars in Byte mode).
   - Error correction is fixed to Galois Field GF(256) with hardcoded format bits `[1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0]` (Level L, Mask 0).
   - Generates a 2D boolean matrix (`generateQrMatrix(text)`) and an SVG string (`renderQrSvgString(matrix, size, margin)`).
2. **QR Display & Export Component:**
   - Located at `src/components/ui/QrCodeView.tsx`.
   - Accepts `value`, `size`, `className`, `title`, and `showActions`.
   - Renders the generated SVG using `dangerouslySetInnerHTML`.
   - Offers "Copy Link", "Download PNG" (via dynamic canvas rendering from SVG Blob), and "Download SVG" (via Blob URL).
3. **QR Integration Points:**
   - `src/components/qr/QrReviewModal.tsx`: Rendered when a customer clicks "Try QR Review" on `RestaurantDetailsPage.tsx`. Generates URL:
     ```typescript
     typeof window !== 'undefined'
       ? `${window.location.origin}/restaurants/${restaurant.id}?qr=true`
       : `https://rateit.gorakhpur.food/restaurants/${restaurant.id}`
     ```
   - `src/pages/owner/OwnerDashboardPage.tsx`: Tab `'qr'` displays a "Live Table QR Code" and a printable standee card using:
     ```typescript
     typeof window !== 'undefined'
       ? `${window.location.origin}/restaurants/${restaurant.id}?qr=table`
       : `https://rateit.gorakhpur.food/restaurants/${restaurant.id}`
     ```

### B. Verified Issues & Deficiencies in Existing QR Implementation
1. **Ad-Hoc URL Construction & Hardcoded Domains:**
   - Multiple disparate call sites construct QR URLs independently using `window.location.origin` or the legacy fallback `https://rateit.gorakhpur.food`.
   - No centralized canonical URL generator exists.
   - When generated on `localhost` or in preview environments, the encoded QR code points to `http://localhost:5173/...`, rendering it non-functional when scanned from physical smartphones.
   - There is no support for configuring the public site URL via environment variables (such as `VITE_PUBLIC_SITE_URL` or `VITE_APP_URL`).
2. **Version & Payload Capacity Limitations:**
   - `src/lib/qrCode.ts` only supports versions 1–6 (max capacity 108 bytes).
   - If a URL exceeds this capacity (e.g., long domains, query parameters like `?qr=table&source=standee`, or custom tracking tags), the generator caps at version 6 and either overflows or produces an unreadable matrix.
   - Format bits are hardcoded only for Mask 0, skipping standard QR penalty-score mask evaluation.
3. **Inappropriate File Naming & Legacy Branding:**
   - Downloaded PNG and SVG files use hardcoded filenames: `rateit-qr-${Date.now()}.png` and `rateit-qr-${Date.now()}.svg`.
   - They fail to incorporate the restaurant's name, slug, or the "Gorakhpur Food Guide" brand.
4. **Lack of Discovery Card & Detail Page Actions:**
   - Restaurant cards on the home page lack any quick QR preview or share action.
   - `QrReviewModal` in `RestaurantDetailsPage.tsx` only offers a "Continue to Review" action and hides the download/share/copy actions (`showActions={false}`).
   - The restaurant detail page lacks a quick "Share Restaurant / View QR" button for diners.
5. **Missing QR Management in Admin Panel:**
   - `AdminPage.tsx` manages restaurants and reviews but provides no QR code preview, downloading, or bulk export functionality for administrators.
6. **Print Layout Limitations:**
   - Standee printing relies on general `window.print()` without dedicated CSS print media queries, causing extraneous UI elements (navigation, footers, sidebars) to print alongside the standee.

---

## 3. Pre-Existing Codebase Issues Discovered

During baseline verification (`npm run typecheck` and `npm test`), the following pre-existing compiler and runtime errors were uncovered:
1. **TypeScript Build Failures (`tsc -b`):**
   - `src/pages/OwnerRegisterPage.tsx(53,11)`: Missing `popularDishes` and `imageUrl` properties required by the `Restaurant` interface.
   - `src/pages/OwnerRegisterPage.tsx(115,7)` & `(116,7)`: Potential `undefined` values assigned to strict `string` properties in `OwnerSession`.
   - `src/services/storageService.ts(337,22)`: Calls `firestoreService.deleteRestaurant(id)`, which was omitted from the `firestoreService` export.
2. **Firestore Undefined Field Errors in Tests:**
   - `src/services/firestoreService.ts` (`logFirestoreAudit`): Passing `entry` objects containing `undefined` properties (`target`, `details`) causes Firestore's `setDoc()` to throw `FirebaseError: Function setDoc() called with invalid data. Unsupported field value: undefined`.

---

## 4. Phase 1 — Proposed Website UI/UX & Discovery Enhancements

1. **Design System & Palette:**
   - Refine the warm, food-inspired palette (rich terracotta/saffron accents, deep forest greens, clean cream backgrounds, sharp dark ink typography).
   - Improve responsive typography and layout hierarchy.
2. **Homepage Enhancements:**
   - Add quick-discovery filters: "Pure Veg (100% शाकाहारी)", "Budget Friendly (<₹300)", and "Top Rated (4.5★+)".
   - Introduce Gorakhpur signature culinary trails and cultural food highlights (e.g., Gorakhpuri Samosa, Taramandal Lake Chaat, Golghar Mughlai, Betiahata Cafes).
   - Add a prominent, high-visibility entry card for "Decide Together: Group Dining & Voting".
   - Provide bilingual English & Hindi headers/subtitles for authentic local representation.
3. **Restaurant Detail Pages:**
   - Add direct Map/Directions action links, telephone calling action, and clean facility tags.
   - Add dedicated "Share & Table QR" action drawer/modal with sharp preview, download, and copy link options.
   - Provide an informative "Report Incorrect Info" action.

---

## 5. Phase 2 — Proposed Restaurant QR Code System Improvements

1. **Centralized Canonical URL Utility (`src/lib/restaurantUrl.ts`):**
   - Build a robust utility that produces deterministic, canonical restaurant URLs:
     - Uses `VITE_PUBLIC_SITE_URL` or `VITE_APP_URL` when provided.
     - Detects `localhost` or non-routable hosts in production configurations and falls back safely to the canonical public domain.
     - Produces clean restaurant slugs and handles legacy/custom IDs seamlessly.
     - Generates sanitized, standard filenames: `gorakhpur-food-guide-[restaurant-slug]-qr.png` / `.svg`.
2. **Enhanced QR Generation & Standards Compliance:**
   - Integrate industry-standard, battle-tested `qrcode` library for full QR Code Model 2 compliance across all 40 versions and error correction levels (M, Q, H).
   - Maintain full scannability with appropriate quiet zones and crisp contrast.
   - Add automated scanner round-trip verification tests using an in-memory QR decoder.
3. **Comprehensive Export & Sharing UI (`RestaurantQrModal.tsx` / `QrCodeView.tsx`):**
   - High-resolution PNG download (1000x1000px suitable for high-DPI standee printing).
   - Crisp SVG vector download.
   - Print-ready standee tent card layout with dedicated `@media print` stylesheets.
   - Web Share API integration (`navigator.share`) with seamless clipboard copy fallback.
4. **Integration Across the Platform:**
   - Detail page: Primary "QR Code & Standee" button and modal.
   - Restaurant card: Compact, non-intrusive QR preview button.
   - Owner dashboard: Upgraded high-res table standee with custom table-number capability.
   - Admin moderation panel: New QR Management tab allowing administrators to select any restaurant, preview its code, and bulk export all restaurant QR codes as a unified download.

---

## 6. Phase 3 — Proposed Group Dining Decision & Voting ("Decide Together")

1. **Architecture & State Management (`src/services/groupDiningService.ts`):**
   - Unique group session ID generation (e.g., `group-[timestamp]-[random]`).
   - Session metadata: Group title, creator nickname, target budget per person, preferred dining area, creation timestamp, and session status (`active`, `voting`, `decided`, `expired`).
   - Dual-layer persistence: Real-time synchronization via Google Cloud Firestore (`group_sessions` collection) with instant local storage fallback so it works seamlessly offline and across devices.
2. **Member Preferences Collection:**
   - Nickname / Participant identity.
   - Dietary restrictions (Strict Pure Veg, Non-Veg OK, Vegan, Flexible).
   - Budget per person (INR).
   - Preferred cuisines and favorite dishes.
   - Spice tolerance (Mild, Medium, Spicy).
   - Ambience / dining style (Casual, Fine Dine, Family, Cafe).
   - Preferred Gorakhpur areas (Golghar, Civil Lines, Medical College Road, Betiahata, Taramandal, etc.).
   - Must-have requirements & Foods to avoid.
   - Allergy notes with clear legal disclaimer: *"Allergen information must be verified directly with the restaurant before ordering."*
3. **Deterministic Recommendation Engine (`src/lib/groupRecommendation.ts`):**
   - **Step 1: Hard Constraints Elimination:**
     - If any group member requires Strict Vegetarian, filter out restaurants that do not support vegetarian dining (`diet === 'veg' || diet === 'both'`).
     - Strict budget ceiling: Exclude restaurants whose estimated per-person cost exceeds group max threshold by more than 25%.
   - **Step 2: Weighted Compatibility Scoring (0–100%):**
     - Dietary alignment (30%).
     - Cuisine & dish preference matches (25%).
     - Budget compatibility (20%).
     - Location & area match (15%).
     - Ambience & dining category match (10%).
   - **Step 3: Transparent Compromise Explanation:**
     - Detail exact positive matches ("Matches Aarav's North Indian preference", "Within per-person budget ₹350").
     - Highlight any compromises ("1.5 km outside preferred Golghar area").
     - Return top 3 verified matches (or fewer if limited venues qualify).
4. **Interactive Voting & Decision Consensus:**
   - One active vote per participant, with the ability to switch votes prior to consensus.
   - Real-time vote tallies and percentage indicators.
   - Fair tie-break rules (highest compatibility score, or creator revote).
   - Instant invitation link sharing via Web Share and clipboard copy.

---

## 7. Audit Sign-Off
This audit has examined all source files, routing, testing contracts, and architecture. Source code modification will proceed systematically following these documented specifications.
