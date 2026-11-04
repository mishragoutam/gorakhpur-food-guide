import fs from 'fs';

const filePath = 'src/data/gorakhpurRestaurants.ts';
let content = fs.readFileSync(filePath, 'utf8');

const kipmRecord = `  {
    "id": "rest-1793732616313",
    "name": "KIPM Cafe",
    "area": "Bank Road",
    "city": "Gorakhpur",
    "description": "Welcome to KIPM Cafe on Bank Road, Gorakhpur! Serving authentic Cafe & Bakery specialties, freshly prepared Indo-Chinese crunch, noodles, steamed momos, and hot beverages.",
    "categories": [
      "cafe",
      "fast-food",
      "chinese"
    ],
    "cuisines": [
      "Cafe & Bakery",
      "Fast Food",
      "Indo-Chinese"
    ],
    "popularDishes": [
      "Chilli Potato Crunch",
      "Veg Chilli Garlic Noodle",
      "Steamed Veg Momos",
      "Cafe & Bakery Chef Special Platter"
    ],
    "costForTwo": 450,
    "averageRating": 5.0,
    "reviewCount": 18,
    "imageUrl": "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1000&q=80",
    "logoUrl": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20100%20100%22%20width%3D%22200%22%20height%3D%22200%22%3E%0A%20%20%3Cdefs%3E%0A%20%20%20%20%3ClinearGradient%20id%3D%22brandGrad_kipm-cafe%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%238b3a1a%22%2F%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%232e241c%22%2F%3E%0A%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%3Cfilter%20id%3D%22shadow_kipm-cafe%22%20x%3D%22-10%25%22%20y%3D%22-10%25%22%20width%3D%22120%25%22%20height%3D%22120%25%22%3E%0A%20%20%20%20%20%20%3CfeDropShadow%20dx%3D%220%22%20dy%3D%222%22%20stdDeviation%3D%222%22%20flood-opacity%3D%220.35%22%2F%3E%0A%20%20%20%20%3C%2Ffilter%3E%0A%20%20%3C%2Fdefs%3E%0A%20%20%3Crect%20x%3D%224%22%20y%3D%224%22%20width%3D%2292%22%20height%3D%2292%22%20rx%3D%2226%22%20fill%3D%22url(%23brandGrad_kipm-cafe)%22%20stroke%3D%22%23fce588%22%20stroke-width%3D%222.5%22%20filter%3D%22url(%23shadow_kipm-cafe)%22%2F%3E%0A%20%20%3Crect%20x%3D%229%22%20y%3D%229%22%20width%3D%2282%22%20height%3D%2282%22%20rx%3D%2221%22%20fill%3D%22none%22%20stroke%3D%22%23fce588%22%20stroke-width%3D%221%22%20stroke-dasharray%3D%223%203%22%20opacity%3D%220.45%22%2F%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2248%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C%20-apple-system%2C%20sans-serif%22%20font-weight%3D%22900%22%20font-size%3D%2224%22%20fill%3D%22%23fce588%22%20letter-spacing%3D%222%22%3EKIPM%3C%2Ftext%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2268%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C%20-apple-system%2C%20sans-serif%22%20font-weight%3D%22700%22%20font-size%3D%2214%22%20fill%3D%22%23ffffff%22%20letter-spacing%3D%223%22%3ECAFE%3C%2Ftext%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2284%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C%20-apple-system%2C%20sans-serif%22%20font-weight%3D%22800%22%20font-size%3D%226.5%22%20fill%3D%22%23fce588%22%20letter-spacing%3D%222%22%3EBANK%20ROAD%20%E2%80%A2%20GKP%3C%2Ftext%3E%0A%3C%2Fsvg%3E",
    "isDemo": false,
    "phone": "8382989557",
    "whatsappPhone": "8382989557",
    "address": "Bank Road, Gorakhpur",
    "openTime": "09:00",
    "closeTime": "23:00",
    "openDays": [
      "Mon",
      "Tue",
      "Wed",
      "Thu",
      "Fri",
      "Sat",
      "Sun"
    ],
    "diet": "both",
    "status": "Active",
    "ownerName": "ravi",
    "ownerEmail": "raviktech71@gmail.com",
    "facilities": [
      "Air Conditioned",
      "Free Wi-Fi",
      "Family Friendly",
      "Card Payments"
    ],
    "menu": [
      {
        "id": "dish-kipm-1",
        "diet": "veg",
        "name": "Chilli Potato Crunch",
        "price": 79,
        "category": "Main Course",
        "imageUrl": "https://images.unsplash.com/photo-1585238342024-78d387f4a707?auto=format&fit=crop&w=600&q=80",
        "isFeatured": true,
        "description": "Crispy fried potato fingers tossed in spicy Indo-Chinese chilli garlic glaze with spring onions.",
        "isAvailable": true
      },
      {
        "id": "dish-kipm-2",
        "diet": "veg",
        "name": "Veg Chilli Garlic Noodle",
        "price": 59,
        "category": "Main Course",
        "imageUrl": "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=600&q=80",
        "isFeatured": true,
        "description": "Wok-tossed noodles with shredded vegetables, burnt garlic, and spicy red chilli sauce.",
        "isAvailable": true
      },
      {
        "id": "dish-kipm-3",
        "diet": "veg",
        "name": "Cafe & Bakery Chef Special Platter",
        "price": 249,
        "category": "Main Course",
        "imageUrl": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80",
        "isFeatured": true,
        "description": "Signature cafe tasting platter with assorted baked savoury treats, dips, and chef special snacks.",
        "isAvailable": true
      },
      {
        "id": "dish-kipm-4",
        "diet": "veg",
        "name": "Steamed Veg Momos",
        "price": 50,
        "category": "Starters",
        "imageUrl": "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=600&q=80",
        "isFeatured": true,
        "description": "Delicate steamed dumplings stuffed with finely minced vegetables and served with fiery red chutney.",
        "isAvailable": true
      }
    ],
    "ratingsBreakdown": {
      "food": 5.0,
      "taste": 5.0,
      "hygiene": 5.0,
      "service": 5.0,
      "ambience": 5.0
    },
    "priceRange": {
      "min": 200,
      "max": 600
    },
    "distanceKm": 0.8
  },`;

if (!content.includes('KIPM Cafe')) {
  const insertIndex = content.indexOf('export const GORAKHPUR_RESTAURANTS: readonly Restaurant[] = [');
  if (insertIndex !== -1) {
    const splitPoint = content.indexOf('[', insertIndex) + 1;
    content = content.slice(0, splitPoint) + '\n' + kipmRecord + content.slice(splitPoint);
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Successfully inserted KIPM Cafe into GORAKHPUR_RESTAURANTS!');
  } else {
    console.error('Could not find insert point in GORAKHPUR_RESTAURANTS');
  }
} else {
  console.log('KIPM Cafe already in GORAKHPUR_RESTAURANTS');
}
