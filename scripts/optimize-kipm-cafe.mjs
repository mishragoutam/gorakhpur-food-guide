import { createClient } from '@supabase/supabase-js';

const url = 'https://qelkmkjmbewappecynac.supabase.co';
const key = 'sb_publishable_3NOqTvZbXPRPTkTZbwZ35g_hmpKCVqr';
const supabase = createClient(url, key);

const kipmLogoSvg = encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200">
  <defs>
    <linearGradient id="brandGrad_kipm-cafe" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#8b3a1a"/>
      <stop offset="100%" stop-color="#2e241c"/>
    </linearGradient>
    <filter id="shadow_kipm-cafe" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="2" stdDeviation="2" flood-opacity="0.35"/>
    </filter>
  </defs>
  <rect x="4" y="4" width="92" height="92" rx="26" fill="url(#brandGrad_kipm-cafe)" stroke="#fce588" stroke-width="2.5" filter="url(#shadow_kipm-cafe)"/>
  <rect x="9" y="9" width="82" height="82" rx="21" fill="none" stroke="#fce588" stroke-width="1" stroke-dasharray="3 3" opacity="0.45"/>
  <text x="50" y="48" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-weight="900" font-size="24" fill="#fce588" letter-spacing="2">KIPM</text>
  <text x="50" y="68" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-weight="700" font-size="14" fill="#ffffff" letter-spacing="3">CAFE</text>
  <text x="50" y="84" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-weight="800" font-size="6.5" fill="#fce588" letter-spacing="2">BANK ROAD • GKP</text>
</svg>`);

const cleanMenu = [
  {
    id: 'dish-kipm-1',
    name: 'Chilli Potato Crunch',
    price: 79,
    category: 'Main Course',
    diet: 'veg',
    description: 'Crispy fried potato fingers tossed in spicy Indo-Chinese chilli garlic glaze with spring onions.',
    imageUrl: 'https://images.unsplash.com/photo-1585238342024-78d387f4a707?auto=format&fit=crop&w=600&q=80',
    isAvailable: true,
    isFeatured: true
  },
  {
    id: 'dish-kipm-2',
    name: 'Veg Chilli Garlic Noodle',
    price: 59,
    category: 'Main Course',
    diet: 'veg',
    description: 'Wok-tossed noodles with shredded vegetables, burnt garlic, and spicy red chilli sauce.',
    imageUrl: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=600&q=80',
    isAvailable: true,
    isFeatured: true
  },
  {
    id: 'dish-kipm-3',
    name: 'Cafe & Bakery Chef Special Platter',
    price: 249,
    category: 'Main Course',
    diet: 'veg',
    description: 'Signature cafe tasting platter with assorted baked savoury treats, dips, and chef special snacks.',
    imageUrl: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80',
    isAvailable: true,
    isFeatured: true
  },
  {
    id: 'dish-kipm-4',
    name: 'Steamed Veg Momos',
    price: 50,
    category: 'Starters',
    diet: 'veg',
    description: 'Delicate steamed dumplings stuffed with finely minced vegetables and served with fiery red chutney.',
    imageUrl: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=600&q=80',
    isAvailable: true,
    isFeatured: true
  }
];

async function run() {
  const { data, error } = await supabase
    .from('restaurants')
    .update({
      logo_url: 'data:image/svg+xml;utf8,' + kipmLogoSvg,
      image_url: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1000&q=80',
      menu: cleanMenu,
      popular_dishes: ['Chilli Potato Crunch', 'Veg Chilli Garlic Noodle', 'Steamed Veg Momos', 'Chef Special Platter'],
      updated_at: new Date().toISOString()
    })
    .eq('id', 'rest-1793732616313')
    .select();

  console.log('Update Error:', error);
  console.log('Updated Record size in chars:', JSON.stringify(data?.[0]).length);
}

run();
