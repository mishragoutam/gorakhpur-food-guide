import { createClient } from '@supabase/supabase-js';
import fs from 'node:fs';
import path from 'node:path';
import { GORAKHPUR_RESTAURANTS } from '../src/data/gorakhpurRestaurants.ts';
import { GORAKHPUR_REVIEWS } from '../src/data/gorakhpurReviews.ts';

// Read .env
const envPath = path.resolve(process.cwd(), '.env');
const envContent = fs.readFileSync(envPath, 'utf8');

const parseEnv = (content) => {
  const result = {};
  for (const line of content.split('\n')) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const match = trimmed.match(/^([^=]+)=(.*)$/);
    if (match) {
      const key = match[1].trim();
      let val = match[2].trim();
      if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
        val = val.slice(1, -1);
      }
      result[key] = val;
    }
  }
  return result;
};

const env = parseEnv(envContent);
const url = env.VITE_SUPABASE_URL;
const key = env.VITE_SUPABASE_ANON_KEY;

if (!url || !key) {
  console.error('Missing VITE_SUPABASE_URL or VITE_SUPABASE_ANON_KEY in .env');
  process.exit(1);
}

const supabase = createClient(url, key);

// Convert Restaurant objects to database rows
function toDbRestaurant(r) {
  return {
    id: r.id,
    name: r.name,
    area: r.area,
    city: r.city || 'Gorakhpur',
    description: r.description || '',
    categories: r.categories || [],
    cuisines: r.cuisines || [],
    popular_dishes: r.popularDishes || [],
    cost_for_two: r.costForTwo || 0,
    average_rating: r.averageRating || 0,
    review_count: r.reviewCount || 0,
    image_url: r.imageUrl || null,
    is_demo: Boolean(r.isDemo),
    phone: r.phone || null,
    address: r.address || null,
    open_time: r.openTime || null,
    close_time: r.closeTime || null,
    open_days: r.openDays || null,
    diet: r.diet || 'both',
    status: r.status || 'Active',
    owner_name: r.ownerName || null,
    owner_email: r.ownerEmail || null,
    facilities: r.facilities || [],
    menu: r.menu || [],
    ratings_breakdown: r.ratingsBreakdown || null,
    price_range: r.priceRange || null,
    logo_url: r.logoUrl || null,
    distance_km: r.distanceKm != null ? Number(r.distanceKm) : null,
    updated_at: new Date().toISOString(),
  };
}

// Convert Review objects to database rows
function toDbReview(rev, includeUserAvatar = false) {
  const row = {
    id: String(rev.id),
    restaurant_id: rev.restaurantId,
    restaurant_name: rev.restaurantName || null,
    user_name: rev.userName,
    user_email: rev.userEmail || null,
    rating: rev.rating,
    text: rev.text,
    tags: rev.tags || [],
    photo_url: rev.photoUrl || null,
    date: rev.date,
    is_demo: Boolean(rev.isDemo),
    is_flagged: Boolean(rev.isFlagged),
    owner_reply: rev.ownerReply || null,
    updated_at: new Date().toISOString(),
  };

  if (includeUserAvatar && rev.userAvatar) {
    row.user_avatar = rev.userAvatar;
  }

  return row;
}

async function seed() {
  console.log('--- SEEDING SUPABASE WITH 20 RESTAURANTS & 80 REVIEWS ---');
  console.log(`Connecting to: ${url}`);

  const restaurantRows = GORAKHPUR_RESTAURANTS.map(toDbRestaurant);
  console.log(`Preparing to upsert ${restaurantRows.length} restaurants...`);

  // Batch insert/upsert restaurants
  const { error: restErr } = await supabase
    .from('restaurants')
    .upsert(restaurantRows, { onConflict: 'id' });

  if (restErr) {
    console.error('Error inserting restaurants:', restErr.message);
  } else {
    console.log(`[SUCCESS] Upserted ${restaurantRows.length} restaurants into "restaurants" table!`);
  }

  // Check if user_avatar column exists
  let supportsAvatar = false;
  const { error: testColErr } = await supabase
    .from('reviews')
    .select('user_avatar')
    .limit(1);

  if (!testColErr) {
    supportsAvatar = true;
    console.log('[INFO] Supabase "reviews" table supports "user_avatar" column.');
  } else {
    console.log('[INFO] "reviews" table does not have "user_avatar" column yet. Seeding without it.');
  }

  const reviewRows = GORAKHPUR_REVIEWS.map(r => toDbReview(r, supportsAvatar));
  console.log(`Preparing to upsert ${reviewRows.length} reviews...`);

  // Upsert reviews in chunks of 25
  const chunkSize = 25;
  for (let i = 0; i < reviewRows.length; i += chunkSize) {
    const chunk = reviewRows.slice(i, i + chunkSize);
    const { error: revErr } = await supabase
      .from('reviews')
      .upsert(chunk, { onConflict: 'id' });

    if (revErr) {
      console.error(`Error inserting reviews chunk ${i / chunkSize + 1}:`, revErr.message);
    } else {
      console.log(`[SUCCESS] Upserted reviews ${i + 1} to ${Math.min(i + chunkSize, reviewRows.length)}`);
    }
  }

  console.log('\n--- SEED COMPLETE ---');
}

seed().catch(console.error);
