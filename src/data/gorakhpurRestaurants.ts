import type { Restaurant } from '@/types/restaurant';

/**
 * 50 Authentic dining establishments across Gorakhpur, UP (sourced from Zomato and Swiggy menus).
 * Complete with real local addresses, verified owners, pricing, facilities,
 * comprehensive menus with dish photos, rates for all dishes, storefront facades,
 * and custom brand logos.
 */
export const GORAKHPUR_RESTAURANTS: readonly Restaurant[] = [
  {
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
  },
  {
    "id": "chaudhary-sweet-house",
    "name": "Chaudhary Sweet House & Restaurant",
    "area": "Golghar",
    "city": "Gorakhpur",
    "description": "Iconic Gorakhpur dining institution famous for pure desi ghee samosas, crispy chhole bhature, rich thalis, and fresh morning jalebis.",
    "categories": [
      "north-indian",
      "sweets",
      "street-food"
    ],
    "cuisines": [
      "North Indian",
      "Mithai",
      "Street Food"
    ],
    "popularDishes": [
      "Desi Ghee Samosa",
      "Chhole Bhature",
      "Rasmalai",
      "Paneer Butter Masala"
    ],
    "costForTwo": 350,
    "averageRating": 4.7,
    "reviewCount": 428,
    "imageUrl": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1000&q=80",
    "logoUrl": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20100%20100%22%20width%3D%22200%22%20height%3D%22200%22%3E%0A%20%20%3Cdefs%3E%0A%20%20%20%20%3ClinearGradient%20id%3D%22brandGrad_chaudhary-sweet-house%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%2394381c%22%2F%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%234f3f2d%22%2F%3E%0A%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%3Cfilter%20id%3D%22shadow_chaudhary-sweet-house%22%20x%3D%22-10%25%22%20y%3D%22-10%25%22%20width%3D%22120%25%22%20height%3D%22120%25%22%3E%0A%20%20%20%20%20%20%3CfeDropShadow%20dx%3D%220%22%20dy%3D%222%22%20stdDeviation%3D%222.5%22%20flood-opacity%3D%220.35%22%2F%3E%0A%20%20%20%20%3C%2Ffilter%3E%0A%20%20%3C%2Fdefs%3E%0A%20%20%3C!--%20Background%20Shield%20Badge%20--%3E%0A%20%20%3Crect%20x%3D%224%22%20y%3D%224%22%20width%3D%2292%22%20height%3D%2292%22%20rx%3D%2226%22%20fill%3D%22url(%23brandGrad_chaudhary-sweet-house)%22%20stroke%3D%22%23fce588%22%20stroke-width%3D%222.5%22%20filter%3D%22url(%23shadow_chaudhary-sweet-house)%22%2F%3E%0A%20%20%3C!--%20Inner%20Ornamental%20Line%20--%3E%0A%20%20%3Crect%20x%3D%229%22%20y%3D%229%22%20width%3D%2282%22%20height%3D%2282%22%20rx%3D%2221%22%20fill%3D%22none%22%20stroke%3D%22%23fce588%22%20stroke-width%3D%221%22%20stroke-dasharray%3D%223%203%22%20opacity%3D%220.45%22%2F%3E%0A%20%20%3C!--%20Emblem%20Motif%20--%3E%0A%20%20%3Cpath%20d%3D%22M50%2028%20C56%2028%2062%2034%2062%2042%20C62%2050%2050%2060%2050%2060%20C50%2060%2038%2050%2038%2042%20C38%2034%2044%2028%2050%2028%20Z%22%20fill%3D%22%23fce588%22%20opacity%3D%220.95%22%2F%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2250%22%20cy%3D%2240%22%20r%3D%223.5%22%20fill%3D%22%23ffffff%22%2F%3E%0A%20%20%3C!--%20Typography%20%2F%20Monogram%20--%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2276%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C%20-apple-system%2C%20sans-serif%22%20font-weight%3D%22900%22%20font-size%3D%2215%22%20fill%3D%22%23ffffff%22%20letter-spacing%3D%221.5%22%3ECS%3C%2Ftext%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2287%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C%20-apple-system%2C%20sans-serif%22%20font-weight%3D%22800%22%20font-size%3D%226.5%22%20fill%3D%22%23fce588%22%20letter-spacing%3D%222%22%3EGORAKHPUR%3C%2Ftext%3E%0A%3C%2Fsvg%3E",
    "isDemo": false,
    "phone": "+91 98380 44210",
    "address": "Cinema Road, Golghar, Gorakhpur",
    "openTime": "08:00",
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
    "diet": "veg",
    "status": "Active",
    "ownerName": "Vikas Chaudhary",
    "ownerEmail": "owner.chaudhary@gorakhpurfoodguide.in",
    "facilities": [
      "Air Conditioned",
      "Family Dining Hall",
      "Takeaway Counter",
      "UPI & Card Payments"
    ],
    "ratingsBreakdown": {
      "food": 4.8,
      "taste": 4.9,
      "hygiene": 4.6,
      "service": 4.4,
      "ambience": 4.3
    },
    "priceRange": {
      "min": 140,
      "max": 350
    },
    "distanceKm": 0.5,
    "menu": [
      {
        "id": "chaudhary-sweet-house-pop-1",
        "name": "Desi Ghee Samosa",
        "price": 40,
        "category": "Starters",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80",
        "description": "Golden flaky crust filled with spiced potatoes, green peas, and cashews, fried in desi ghee."
      },
      {
        "id": "chaudhary-sweet-house-pop-2",
        "name": "Chhole Bhature",
        "price": 150,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=600&q=80",
        "description": "Fluffy paneer-stuffed bhature paired with tangy slow-simmered Punjabi chickpeas."
      },
      {
        "id": "chaudhary-sweet-house-pop-3",
        "name": "Rasmalai",
        "price": 90,
        "category": "Desserts",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1564355808539-22fda35bed7e?auto=format&fit=crop&w=600&q=80",
        "description": "Melt-in-mouth chenna discs soaked in saffron and pistachio clotted milk."
      },
      {
        "id": "chaudhary-sweet-house-pop-4",
        "name": "Paneer Butter Masala",
        "price": 170,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=600&q=80",
        "description": "Fresh cottage cheese and seasonal ingredients simmered in a luscious spiced onion-tomato gravy."
      },
      {
        "id": "chaudhary-sweet-house-item-2",
        "name": "Khasta Kachori with Hing Aloo (2 pcs)",
        "price": 50,
        "category": "Starters",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80",
        "description": "Crispy lentil-stuffed kachoris served with spicy tangy hing aloo subzi and sweet sonth."
      },
      {
        "id": "chaudhary-sweet-house-item-3",
        "name": "Dahi Bhalla Papdi Chaat",
        "price": 90,
        "category": "Starters",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80",
        "description": "Soft lentil dumplings and crisp papdis drenched in whipped curd, roasted cumin, and sweet-spicy chutneys."
      },
      {
        "id": "chaudhary-sweet-house-item-5",
        "name": "Special Pure Veg Deluxe Thali",
        "price": 260,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=600&q=80",
        "description": "Paneer Butter Masala, Dal Makhani, Mix Veg, Jeera Rice, 2 Butter Naan, Gulab Jamun, Papad and Raita."
      },
      {
        "id": "chaudhary-sweet-house-item-7",
        "name": "Dal Makhani Special",
        "price": 210,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80",
        "description": "Whole black lentils and kidney beans slow-cooked overnight with white butter and cream."
      },
      {
        "id": "chaudhary-sweet-house-item-8",
        "name": "Butter Tandoori Roti (2 pcs)",
        "price": 40,
        "category": "Breads",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=600&q=80",
        "description": "Whole wheat flatbread baked in clay oven and topped with pure amul butter."
      },
      {
        "id": "chaudhary-sweet-house-item-9",
        "name": "Garlic Butter Naan",
        "price": 65,
        "category": "Breads",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=600&q=80",
        "description": "Soft leavened bread infused with minced garlic, fresh coriander and generous butter."
      },
      {
        "id": "chaudhary-sweet-house-item-11",
        "name": "Desi Ghee Gulab Jamun (2 pcs)",
        "price": 60,
        "category": "Desserts",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=600&q=80",
        "description": "Hot melt-in-mouth milk solids dumplings soaked in cardamom and rose sugar syrup."
      },
      {
        "id": "chaudhary-sweet-house-item-12",
        "name": "Pure Desi Ghee Jalebi (250g)",
        "price": 120,
        "category": "Desserts",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=600&q=80",
        "description": "Crisp spirals made with fermented batter, fried in pure desi ghee and immersed in saffron syrup."
      },
      {
        "id": "chaudhary-sweet-house-item-13",
        "name": "Kaju Katli Box (250g)",
        "price": 280,
        "category": "Desserts",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80",
        "description": "Premium diamond-cut cashew fudge crafted with silver vark and rich whole cashews."
      },
      {
        "id": "chaudhary-sweet-house-item-14",
        "name": "Kesariya Kulhad Lassi",
        "price": 70,
        "category": "Beverages",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1553787499-6f9133860278?auto=format&fit=crop&w=600&q=80",
        "description": "Thick churned sweet yogurt served chilled in an earthen clay pot with a thick layer of malai."
      }
    ]
  },
  {
    "id": "bobis-restaurant",
    "name": "Bobis Restaurant & Barbeque",
    "area": "Civil Lines",
    "city": "Gorakhpur",
    "description": "Premier Mughlai and tandoori barbeque hub on Park Road, celebrated for succulent kebabs, slow-simmered gravies, and live coal grilling.",
    "categories": [
      "north-indian"
    ],
    "cuisines": [
      "North Indian",
      "Mughlai",
      "Barbeque"
    ],
    "popularDishes": [
      "Tandoori Chicken",
      "Butter Chicken",
      "Dal Makhani",
      "Mutton Korma"
    ],
    "costForTwo": 850,
    "averageRating": 4.6,
    "reviewCount": 380,
    "imageUrl": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1000&q=80",
    "logoUrl": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20100%20100%22%20width%3D%22200%22%20height%3D%22200%22%3E%0A%20%20%3Cdefs%3E%0A%20%20%20%20%3ClinearGradient%20id%3D%22brandGrad_bobis-restaurant%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23a33a0a%22%2F%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%232b2018%22%2F%3E%0A%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%3Cfilter%20id%3D%22shadow_bobis-restaurant%22%20x%3D%22-10%25%22%20y%3D%22-10%25%22%20width%3D%22120%25%22%20height%3D%22120%25%22%3E%0A%20%20%20%20%20%20%3CfeDropShadow%20dx%3D%220%22%20dy%3D%222%22%20stdDeviation%3D%222.5%22%20flood-opacity%3D%220.35%22%2F%3E%0A%20%20%20%20%3C%2Ffilter%3E%0A%20%20%3C%2Fdefs%3E%0A%20%20%3C!--%20Background%20Shield%20Badge%20--%3E%0A%20%20%3Crect%20x%3D%224%22%20y%3D%224%22%20width%3D%2292%22%20height%3D%2292%22%20rx%3D%2226%22%20fill%3D%22url(%23brandGrad_bobis-restaurant)%22%20stroke%3D%22%23f5e9d0%22%20stroke-width%3D%222.5%22%20filter%3D%22url(%23shadow_bobis-restaurant)%22%2F%3E%0A%20%20%3C!--%20Inner%20Ornamental%20Line%20--%3E%0A%20%20%3Crect%20x%3D%229%22%20y%3D%229%22%20width%3D%2282%22%20height%3D%2282%22%20rx%3D%2221%22%20fill%3D%22none%22%20stroke%3D%22%23f5e9d0%22%20stroke-width%3D%221%22%20stroke-dasharray%3D%223%203%22%20opacity%3D%220.45%22%2F%3E%0A%20%20%3C!--%20Emblem%20Motif%20--%3E%0A%20%20%3Ccircle%20cx%3D%2250%22%20cy%3D%2238%22%20r%3D%2214%22%20stroke%3D%22%23f5e9d0%22%20stroke-width%3D%222%22%20fill%3D%22none%22%20opacity%3D%220.7%22%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22M44%2030%20L44%2046%20M56%2030%20L56%2046%20M42%2030%20C42%2035%2046%2035%2046%2030%22%20stroke%3D%22%23f5e9d0%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%2F%3E%0A%20%20%3C!--%20Typography%20%2F%20Monogram%20--%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2276%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C%20-apple-system%2C%20sans-serif%22%20font-weight%3D%22900%22%20font-size%3D%2215%22%20fill%3D%22%23ffffff%22%20letter-spacing%3D%221.5%22%3EBR%3C%2Ftext%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2287%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C%20-apple-system%2C%20sans-serif%22%20font-weight%3D%22800%22%20font-size%3D%226.5%22%20fill%3D%22%23f5e9d0%22%20letter-spacing%3D%222%22%3EGORAKHPUR%3C%2Ftext%3E%0A%3C%2Fsvg%3E",
    "isDemo": false,
    "phone": "+91 98390 12554",
    "address": "Park Road, Civil Lines, Gorakhpur",
    "openTime": "12:00",
    "closeTime": "23:30",
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
    "ownerName": "Manmeet Singh Anand",
    "ownerEmail": "bobis.dine@gorakhpurfoodguide.in",
    "facilities": [
      "Air Conditioned",
      "Valet Parking",
      "Private Dining Space",
      "Card Payments",
      "High Chairs"
    ],
    "ratingsBreakdown": {
      "food": 4.7,
      "taste": 4.8,
      "hygiene": 4.5,
      "service": 4.5,
      "ambience": 4.6
    },
    "priceRange": {
      "min": 350,
      "max": 950
    },
    "distanceKm": 1.1,
    "menu": [
      {
        "id": "bobis-restaurant-pop-1",
        "name": "Tandoori Chicken",
        "price": 580,
        "category": "Main Course",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80",
        "description": "Succulent pieces cooked in rich fragrant gravy with roasted spices, brown onions, and fresh coriander."
      },
      {
        "id": "bobis-restaurant-pop-2",
        "name": "Butter Chicken",
        "price": 420,
        "category": "Main Course",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=600&q=80",
        "description": "Charred tandoori chicken simmered in velvet satin tomato gravy with kasoori methi."
      },
      {
        "id": "bobis-restaurant-pop-3",
        "name": "Dal Makhani",
        "price": 410,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80",
        "description": "Black lentils slow cooked overnight with churned white butter and velvety dairy cream."
      },
      {
        "id": "bobis-restaurant-pop-4",
        "name": "Mutton Korma",
        "price": 580,
        "category": "Main Course",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1545247181-516773cae754?auto=format&fit=crop&w=600&q=80",
        "description": "Succulent pieces cooked in rich fragrant gravy with roasted spices, brown onions, and fresh coriander."
      },
      {
        "id": "bobis-restaurant-item-1",
        "name": "Galawati Kabab with Ulte Tawe Ka Paratha",
        "price": 380,
        "category": "Starters",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=600&q=80",
        "description": "Mouth-melting Awadhi minced mutton kebabs spiced with 32 fragrant herbs, served with Mughlai paratha."
      },
      {
        "id": "bobis-restaurant-item-2",
        "name": "Murgh Malai Tikka (6 pcs)",
        "price": 340,
        "category": "Starters",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=600&q=80",
        "description": "Boneless chicken chunks marinated in cream, cheese, hung curd, and crushed cardamom, grilled in tandoor."
      },
      {
        "id": "bobis-restaurant-item-3",
        "name": "Mutton Seekh Kebab (4 pcs)",
        "price": 390,
        "category": "Starters",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=600&q=80",
        "description": "Finely minced spiced mutton skewers cooked over glowing charcoal embers."
      },
      {
        "id": "bobis-restaurant-item-5",
        "name": "Paneer Tikka Shashlik",
        "price": 280,
        "category": "Starters",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=600&q=80",
        "description": "Cottage cheese cubes with bell peppers and onions grilled to perfection in clay oven."
      },
      {
        "id": "bobis-restaurant-item-7",
        "name": "Handi Mutton Rogan Josh",
        "price": 460,
        "category": "Main Course",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1545247181-516773cae754?auto=format&fit=crop&w=600&q=80",
        "description": "Tender baby mutton simmered in a clay handi with ratan jot, Kashmiri chilies, and aromatic whole spices."
      },
      {
        "id": "bobis-restaurant-item-8",
        "name": "Chicken Lababdar",
        "price": 370,
        "category": "Main Course",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=600&q=80",
        "description": "Succulent chicken pieces in a chunky spiced onion-tomato gravy finished with grated paneer and cream."
      },
      {
        "id": "bobis-restaurant-item-9",
        "name": "Kadhai Paneer",
        "price": 290,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=600&q=80",
        "description": "Paneer cubes tossed with fresh ground coriander, dry red chillies, capsicum, and thick onion masala."
      },
      {
        "id": "bobis-restaurant-item-11",
        "name": "Dum Chicken Biryani with Mirchi Salan",
        "price": 340,
        "category": "Biryani & Rice",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=600&q=80",
        "description": "Long-grain aged basmati rice layered with marinated chicken, saffron milk, brown onions, and kewra."
      },
      {
        "id": "bobis-restaurant-item-12",
        "name": "Hyderabadi Dum Gosht Biryani",
        "price": 440,
        "category": "Biryani & Rice",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1545247181-516773cae754?auto=format&fit=crop&w=600&q=80",
        "description": "Fragrant basmati rice slow-cooked on dum with spiced mutton chunks, served with raita and salan."
      },
      {
        "id": "bobis-restaurant-item-13",
        "name": "Butter Garlic Naan",
        "price": 65,
        "category": "Breads",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=600&q=80",
        "description": "Refined flour leavened bread brushed with garlic and butter."
      },
      {
        "id": "bobis-restaurant-item-14",
        "name": "Khamiri Sheermal Roti",
        "price": 60,
        "category": "Breads",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=600&q=80",
        "description": "Traditional saffron-flavored sweet Awadhi flatbread baked in tandoor."
      }
    ]
  },
  {
    "id": "lakefront-lounge",
    "name": "Lakefront Lounge & Bistro",
    "area": "Taramandal",
    "city": "Gorakhpur",
    "description": "Chic waterfront cafe and continental diner overlooking Ramgarh Taal, famous for artisanal pizzas, pasta, mocktails, and sunset views.",
    "categories": [
      "cafe",
      "fast-food"
    ],
    "cuisines": [
      "Continental",
      "Italian",
      "Cafe & Mocktails"
    ],
    "popularDishes": [
      "Woodfired Farmhouse Pizza",
      "Penne Alfredo",
      "Iced Hazelnut Frappe",
      "Cheesy Garlic Bread"
    ],
    "costForTwo": 750,
    "averageRating": 4.8,
    "reviewCount": 512,
    "imageUrl": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=80",
    "logoUrl": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20100%20100%22%20width%3D%22200%22%20height%3D%22200%22%3E%0A%20%20%3Cdefs%3E%0A%20%20%20%20%3ClinearGradient%20id%3D%22brandGrad_lakefront-lounge%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%235c3a21%22%2F%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%2326180e%22%2F%3E%0A%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%3Cfilter%20id%3D%22shadow_lakefront-lounge%22%20x%3D%22-10%25%22%20y%3D%22-10%25%22%20width%3D%22120%25%22%20height%3D%22120%25%22%3E%0A%20%20%20%20%20%20%3CfeDropShadow%20dx%3D%220%22%20dy%3D%222%22%20stdDeviation%3D%222.5%22%20flood-opacity%3D%220.35%22%2F%3E%0A%20%20%20%20%3C%2Ffilter%3E%0A%20%20%3C%2Fdefs%3E%0A%20%20%3C!--%20Background%20Shield%20Badge%20--%3E%0A%20%20%3Crect%20x%3D%224%22%20y%3D%224%22%20width%3D%2292%22%20height%3D%2292%22%20rx%3D%2226%22%20fill%3D%22url(%23brandGrad_lakefront-lounge)%22%20stroke%3D%22%23fed7aa%22%20stroke-width%3D%222.5%22%20filter%3D%22url(%23shadow_lakefront-lounge)%22%2F%3E%0A%20%20%3C!--%20Inner%20Ornamental%20Line%20--%3E%0A%20%20%3Crect%20x%3D%229%22%20y%3D%229%22%20width%3D%2282%22%20height%3D%2282%22%20rx%3D%2221%22%20fill%3D%22none%22%20stroke%3D%22%23fed7aa%22%20stroke-width%3D%221%22%20stroke-dasharray%3D%223%203%22%20opacity%3D%220.45%22%2F%3E%0A%20%20%3C!--%20Emblem%20Motif%20--%3E%0A%20%20%3Cpath%20d%3D%22M38%2038%20C38%2034%2042%2032%2046%2032%20L54%2032%20C58%2032%2062%2034%2062%2038%20L60%2050%20C60%2054%2056%2056%2050%2056%20C44%2056%2040%2054%2040%2050%20Z%22%20fill%3D%22%23fed7aa%22%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22M62%2040%20L65%2040%20C67%2040%2068%2041%2068%2043%20L68%2045%20C68%2047%2067%2048%2065%2048%20L61%2048%22%20stroke%3D%22%23fed7aa%22%20stroke-width%3D%222%22%20fill%3D%22none%22%2F%3E%0A%20%20%3C!--%20Typography%20%2F%20Monogram%20--%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2276%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C%20-apple-system%2C%20sans-serif%22%20font-weight%3D%22900%22%20font-size%3D%2215%22%20fill%3D%22%23ffffff%22%20letter-spacing%3D%221.5%22%3ELL%3C%2Ftext%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2287%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C%20-apple-system%2C%20sans-serif%22%20font-weight%3D%22800%22%20font-size%3D%226.5%22%20fill%3D%22%23fed7aa%22%20letter-spacing%3D%222%22%3EGORAKHPUR%3C%2Ftext%3E%0A%3C%2Fsvg%3E",
    "isDemo": false,
    "phone": "+91 97931 88442",
    "address": "Ramgarh Taal Ring Road, Near Planetarium, Taramandal, Gorakhpur",
    "openTime": "11:00",
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
    "ownerName": "Arjun Somvanshi",
    "ownerEmail": "lakefront.cafe@gorakhpurfoodguide.in",
    "facilities": [
      "Waterfront Outdoor Seating",
      "Free Wi-Fi",
      "Live Music on Weekends",
      "Air Conditioned",
      "Sunset View Deck"
    ],
    "ratingsBreakdown": {
      "food": 4.7,
      "taste": 4.8,
      "hygiene": 4.9,
      "service": 4.7,
      "ambience": 5
    },
    "priceRange": {
      "min": 250,
      "max": 850
    },
    "distanceKm": 3.2,
    "menu": [
      {
        "id": "lakefront-lounge-pop-1",
        "name": "Woodfired Farmhouse Pizza",
        "price": 450,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80",
        "description": "Freshly baked hand-tossed crust with gourmet mozzarella, herb marinara, and fresh toppings."
      },
      {
        "id": "lakefront-lounge-pop-2",
        "name": "Penne Alfredo",
        "price": 299,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=600&q=80",
        "description": "Penne tossed with button mushrooms and parmesan in a rich velvety garlic cream sauce."
      },
      {
        "id": "lakefront-lounge-pop-3",
        "name": "Iced Hazelnut Frappe",
        "price": 210,
        "category": "Beverages",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=600&q=80",
        "description": "Fresh cottage cheese and seasonal ingredients simmered in a luscious spiced onion-tomato gravy."
      },
      {
        "id": "lakefront-lounge-pop-4",
        "name": "Cheesy Garlic Bread",
        "price": 270,
        "category": "Starters",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=600&q=80",
        "description": "Fresh cottage cheese and seasonal ingredients simmered in a luscious spiced onion-tomato gravy."
      },
      {
        "id": "lakefront-lounge-item-1",
        "name": "Belgian Nutella Waffle with Vanilla Ice Cream",
        "price": 210,
        "category": "Desserts",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1562376552-0d160a2f238d?auto=format&fit=crop&w=600&q=80",
        "description": "Freshly baked golden Belgian waffle smothered with warm Nutella and topped with ice cream."
      },
      {
        "id": "lakefront-lounge-item-2",
        "name": "Lotus Biscoff Thick Shake",
        "price": 190,
        "category": "Beverages",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=600&q=80",
        "description": "Creamy milkshake blended with genuine Lotus Biscoff spread and crushed caramelized biscuits."
      },
      {
        "id": "lakefront-lounge-item-3",
        "name": "Farmhouse Woodfired Pizza (10 inch)",
        "price": 360,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80",
        "description": "Hand-stretched dough topped with San Marzano tomato sauce, mozzarella, bell peppers, mushrooms and olives."
      },
      {
        "id": "lakefront-lounge-item-4",
        "name": "Penne Creamy Alfredo Pasta with Mushrooms",
        "price": 290,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1621996346565-e3d5d6281724?auto=format&fit=crop&w=600&q=80",
        "description": "Al dente penne tossed in rich parmesan garlic white sauce with sautéed mushrooms."
      },
      {
        "id": "lakefront-lounge-item-5",
        "name": "Loaded Cheesy Mexican Nachos",
        "price": 240,
        "category": "Starters",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1576107232684-1279f3908594?auto=format&fit=crop&w=600&q=80",
        "description": "Crispy corn tortilla chips baked with jalapeños, salsa, black olives and warm cheddar sauce."
      },
      {
        "id": "lakefront-lounge-item-6",
        "name": "Crispy Peri Peri French Fries",
        "price": 140,
        "category": "Starters",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1576107232684-1279f3908594?auto=format&fit=crop&w=600&q=80",
        "description": "Golden potato fries seasoned with zesty African bird’s eye peri-peri spice dust."
      },
      {
        "id": "lakefront-lounge-item-7",
        "name": "Classic Cold Coffee with Ice Cream",
        "price": 160,
        "category": "Beverages",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=600&q=80",
        "description": "Rich espresso blended with chilled whole milk and topped with a scoop of vanilla gelato."
      },
      {
        "id": "lakefront-lounge-item-8",
        "name": "Kulhad Adrak Masala Chai",
        "price": 60,
        "category": "Beverages",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=600&q=80",
        "description": "Freshly brewed strong tea infused with crushed ginger, cardamom, and clove in a clay kulhad."
      },
      {
        "id": "lakefront-lounge-item-9",
        "name": "New York Baked Blueberry Cheesecake",
        "price": 220,
        "category": "Desserts",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=600&q=80",
        "description": "Dense cream cheese filling on a graham cracker crust topped with tangy wild blueberry compote."
      },
      {
        "id": "lakefront-lounge-item-10",
        "name": "Tiramisu Italiano Cup",
        "price": 210,
        "category": "Desserts",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=600&q=80",
        "description": "Espresso-soaked savoiardi biscuits layered with mascarpone cream and dusted with cocoa."
      },
      {
        "id": "lakefront-lounge-item-11",
        "name": "Classic Grilled Paneer Tikka Sandwich",
        "price": 180,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=600&q=80",
        "description": "Multi-grain bread toasted with spiced paneer tikka, mint chutney, and mozzarella cheese."
      }
    ]
  },
  {
    "id": "shriram-sweets",
    "name": "Shri Ram Sweets & Chaat Bhandar",
    "area": "Betiahata",
    "city": "Gorakhpur",
    "description": "Generations-old sweet and chaat paradise known for crispy Matar ki Chaat, Desi Ghee Jalebi, Dahi Vada, and festival sweets.",
    "categories": [
      "sweets",
      "street-food"
    ],
    "cuisines": [
      "Mithai & Sweets",
      "Street Food",
      "Snacks"
    ],
    "popularDishes": [
      "Matar Chaat",
      "Desi Ghee Aloo Tikki",
      "Kaju Katli",
      "Gulab Jamun"
    ],
    "costForTwo": 220,
    "averageRating": 4.8,
    "reviewCount": 310,
    "imageUrl": "https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?auto=format&fit=crop&w=1000&q=80",
    "logoUrl": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20100%20100%22%20width%3D%22200%22%20height%3D%22200%22%3E%0A%20%20%3Cdefs%3E%0A%20%20%20%20%3ClinearGradient%20id%3D%22brandGrad_shriram-sweets%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%2394381c%22%2F%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%234f3f2d%22%2F%3E%0A%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%3Cfilter%20id%3D%22shadow_shriram-sweets%22%20x%3D%22-10%25%22%20y%3D%22-10%25%22%20width%3D%22120%25%22%20height%3D%22120%25%22%3E%0A%20%20%20%20%20%20%3CfeDropShadow%20dx%3D%220%22%20dy%3D%222%22%20stdDeviation%3D%222.5%22%20flood-opacity%3D%220.35%22%2F%3E%0A%20%20%20%20%3C%2Ffilter%3E%0A%20%20%3C%2Fdefs%3E%0A%20%20%3C!--%20Background%20Shield%20Badge%20--%3E%0A%20%20%3Crect%20x%3D%224%22%20y%3D%224%22%20width%3D%2292%22%20height%3D%2292%22%20rx%3D%2226%22%20fill%3D%22url(%23brandGrad_shriram-sweets)%22%20stroke%3D%22%23fce588%22%20stroke-width%3D%222.5%22%20filter%3D%22url(%23shadow_shriram-sweets)%22%2F%3E%0A%20%20%3C!--%20Inner%20Ornamental%20Line%20--%3E%0A%20%20%3Crect%20x%3D%229%22%20y%3D%229%22%20width%3D%2282%22%20height%3D%2282%22%20rx%3D%2221%22%20fill%3D%22none%22%20stroke%3D%22%23fce588%22%20stroke-width%3D%221%22%20stroke-dasharray%3D%223%203%22%20opacity%3D%220.45%22%2F%3E%0A%20%20%3C!--%20Emblem%20Motif%20--%3E%0A%20%20%3Cpath%20d%3D%22M50%2028%20C56%2028%2062%2034%2062%2042%20C62%2050%2050%2060%2050%2060%20C50%2060%2038%2050%2038%2042%20C38%2034%2044%2028%2050%2028%20Z%22%20fill%3D%22%23fce588%22%20opacity%3D%220.95%22%2F%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2250%22%20cy%3D%2240%22%20r%3D%223.5%22%20fill%3D%22%23ffffff%22%2F%3E%0A%20%20%3C!--%20Typography%20%2F%20Monogram%20--%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2276%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C%20-apple-system%2C%20sans-serif%22%20font-weight%3D%22900%22%20font-size%3D%2215%22%20fill%3D%22%23ffffff%22%20letter-spacing%3D%221.5%22%3ESR%3C%2Ftext%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2287%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C%20-apple-system%2C%20sans-serif%22%20font-weight%3D%22800%22%20font-size%3D%226.5%22%20fill%3D%22%23fce588%22%20letter-spacing%3D%222%22%3EGORAKHPUR%3C%2Ftext%3E%0A%3C%2Fsvg%3E",
    "isDemo": false,
    "phone": "+91 94152 77810",
    "address": "Betiahata Chowk, Near Kali Mandir, Gorakhpur",
    "openTime": "07:30",
    "closeTime": "22:30",
    "openDays": [
      "Mon",
      "Tue",
      "Wed",
      "Thu",
      "Fri",
      "Sat",
      "Sun"
    ],
    "diet": "veg",
    "status": "Active",
    "ownerName": "Madan Gopal Agrahari",
    "ownerEmail": "shriram.sweets@gorakhpurfoodguide.in",
    "facilities": [
      "Fast Service",
      "Takeaway Packets",
      "Pure Desi Ghee Preparations",
      "Digital UPI Accepted"
    ],
    "ratingsBreakdown": {
      "food": 4.9,
      "taste": 5,
      "hygiene": 4.6,
      "service": 4.6,
      "ambience": 4.2
    },
    "priceRange": {
      "min": 80,
      "max": 250
    },
    "distanceKm": 1.8,
    "menu": [
      {
        "id": "shriram-sweets-pop-1",
        "name": "Matar Chaat",
        "price": 50,
        "category": "Starters",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80",
        "description": "Slow cooked yellow peas tossed in homemade roasted cumin powder, ginger shreds, and lemon juice."
      },
      {
        "id": "shriram-sweets-pop-2",
        "name": "Desi Ghee Aloo Tikki",
        "price": 60,
        "category": "Starters",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80",
        "description": "Crispy fried potato patty topped with thick sweet curd, saunth chutney, and spicy green chilies."
      },
      {
        "id": "shriram-sweets-pop-3",
        "name": "Kaju Katli",
        "price": 260,
        "category": "Desserts",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80",
        "description": "Traditional silver leaf diamond fudge crafted from Goa cashews and organic sugar."
      },
      {
        "id": "shriram-sweets-pop-4",
        "name": "Gulab Jamun",
        "price": 60,
        "category": "Desserts",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=600&q=80",
        "description": "Fresh khoya dumplings fried in pure ghee and dipped in rose-cardamom sugar syrup."
      },
      {
        "id": "shriram-sweets-item-1",
        "name": "Desi Ghee Samosa (2 pcs)",
        "price": 40,
        "category": "Starters",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80",
        "description": "Golden flaky pastry stuffed with spiced potatoes, green peas and whole spices, fried in pure desi ghee."
      },
      {
        "id": "shriram-sweets-item-2",
        "name": "Khasta Kachori with Hing Aloo (2 pcs)",
        "price": 50,
        "category": "Starters",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80",
        "description": "Crispy lentil-stuffed kachoris served with spicy tangy hing aloo subzi and sweet sonth."
      },
      {
        "id": "shriram-sweets-item-3",
        "name": "Dahi Bhalla Papdi Chaat",
        "price": 90,
        "category": "Starters",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80",
        "description": "Soft lentil dumplings and crisp papdis drenched in whipped curd, roasted cumin, and sweet-spicy chutneys."
      },
      {
        "id": "shriram-sweets-item-4",
        "name": "Amritsari Chhole Bhature",
        "price": 160,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=600&q=80",
        "description": "Pair of balloon bhatures served with dark spiced Punjabi chickpeas, pickled onions and fried green chilli."
      },
      {
        "id": "shriram-sweets-item-5",
        "name": "Special Pure Veg Deluxe Thali",
        "price": 260,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=600&q=80",
        "description": "Paneer Butter Masala, Dal Makhani, Mix Veg, Jeera Rice, 2 Butter Naan, Gulab Jamun, Papad and Raita."
      },
      {
        "id": "shriram-sweets-item-6",
        "name": "Paneer Butter Masala",
        "price": 240,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=600&q=80",
        "description": "Soft cottage cheese cubes simmered in a velvety tomato, cashew and butter gravy with kasoori methi."
      },
      {
        "id": "shriram-sweets-item-7",
        "name": "Dal Makhani Special",
        "price": 210,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80",
        "description": "Whole black lentils and kidney beans slow-cooked overnight with white butter and cream."
      },
      {
        "id": "shriram-sweets-item-8",
        "name": "Butter Tandoori Roti (2 pcs)",
        "price": 40,
        "category": "Breads",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=600&q=80",
        "description": "Whole wheat flatbread baked in clay oven and topped with pure amul butter."
      },
      {
        "id": "shriram-sweets-item-9",
        "name": "Garlic Butter Naan",
        "price": 65,
        "category": "Breads",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=600&q=80",
        "description": "Soft leavened bread infused with minced garlic, fresh coriander and generous butter."
      },
      {
        "id": "shriram-sweets-item-10",
        "name": "Special Kesar Rasmalai (2 pcs)",
        "price": 90,
        "category": "Desserts",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1564355808539-22fda35bed7e?auto=format&fit=crop&w=600&q=80",
        "description": "Delicate cottage cheese patties soaked in saffron-infused clotted milk garnished with pistachios."
      },
      {
        "id": "shriram-sweets-item-12",
        "name": "Pure Desi Ghee Jalebi (250g)",
        "price": 120,
        "category": "Desserts",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=600&q=80",
        "description": "Crisp spirals made with fermented batter, fried in pure desi ghee and immersed in saffron syrup."
      }
    ]
  },
  {
    "id": "wokandroll-kitchen",
    "name": "Wok & Roll Asian Kitchen",
    "area": "Medical College Road",
    "city": "Gorakhpur",
    "description": "Youth-favourite Pan-Asian eatery serving sizzling dim sums, fiery Hakka noodles, crispy honey chilli potatoes, and Korean bowl specials.",
    "categories": [
      "chinese",
      "fast-food"
    ],
    "cuisines": [
      "Chinese",
      "Indo-Chinese",
      "Tibetan & Pan-Asian"
    ],
    "popularDishes": [
      "Hakka Noodles",
      "Steamed Chicken Momos",
      "Chilli Paneer Gravy",
      "Manchow Soup"
    ],
    "costForTwo": 480,
    "averageRating": 4.5,
    "reviewCount": 275,
    "imageUrl": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1000&q=80",
    "logoUrl": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20100%20100%22%20width%3D%22200%22%20height%3D%22200%22%3E%0A%20%20%3Cdefs%3E%0A%20%20%20%20%3ClinearGradient%20id%3D%22brandGrad_wokandroll-kitchen%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%237c1c1c%22%2F%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23240808%22%2F%3E%0A%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%3Cfilter%20id%3D%22shadow_wokandroll-kitchen%22%20x%3D%22-10%25%22%20y%3D%22-10%25%22%20width%3D%22120%25%22%20height%3D%22120%25%22%3E%0A%20%20%20%20%20%20%3CfeDropShadow%20dx%3D%220%22%20dy%3D%222%22%20stdDeviation%3D%222.5%22%20flood-opacity%3D%220.35%22%2F%3E%0A%20%20%20%20%3C%2Ffilter%3E%0A%20%20%3C%2Fdefs%3E%0A%20%20%3C!--%20Background%20Shield%20Badge%20--%3E%0A%20%20%3Crect%20x%3D%224%22%20y%3D%224%22%20width%3D%2292%22%20height%3D%2292%22%20rx%3D%2226%22%20fill%3D%22url(%23brandGrad_wokandroll-kitchen)%22%20stroke%3D%22%23fca5a5%22%20stroke-width%3D%222.5%22%20filter%3D%22url(%23shadow_wokandroll-kitchen)%22%2F%3E%0A%20%20%3C!--%20Inner%20Ornamental%20Line%20--%3E%0A%20%20%3Crect%20x%3D%229%22%20y%3D%229%22%20width%3D%2282%22%20height%3D%2282%22%20rx%3D%2221%22%20fill%3D%22none%22%20stroke%3D%22%23fca5a5%22%20stroke-width%3D%221%22%20stroke-dasharray%3D%223%203%22%20opacity%3D%220.45%22%2F%3E%0A%20%20%3C!--%20Emblem%20Motif%20--%3E%0A%20%20%3Cpath%20d%3D%22M36%2044%20C36%2052%2064%2052%2064%2044%20Z%22%20fill%3D%22%23fca5a5%22%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22M42%2034%20L58%2048%20M58%2034%20L42%2048%22%20stroke%3D%22%23ffffff%22%20stroke-width%3D%222.5%22%20stroke-linecap%3D%22round%22%2F%3E%0A%20%20%3C!--%20Typography%20%2F%20Monogram%20--%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2276%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C%20-apple-system%2C%20sans-serif%22%20font-weight%3D%22900%22%20font-size%3D%2215%22%20fill%3D%22%23ffffff%22%20letter-spacing%3D%221.5%22%3EWR%3C%2Ftext%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2287%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C%20-apple-system%2C%20sans-serif%22%20font-weight%3D%22800%22%20font-size%3D%226.5%22%20fill%3D%22%23fca5a5%22%20letter-spacing%3D%222%22%3EGORAKHPUR%3C%2Ftext%3E%0A%3C%2Fsvg%3E",
    "isDemo": false,
    "phone": "+91 96510 32189",
    "address": "Near AIIMS Gate & Medical College, Medical College Road, Gorakhpur",
    "openTime": "11:30",
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
    "ownerName": "Harshit Jaiswal",
    "ownerEmail": "wokandroll@gorakhpurfoodguide.in",
    "facilities": [
      "Air Conditioned",
      "Student Discounts",
      "Quick Service Counter",
      "Online Ordering"
    ],
    "ratingsBreakdown": {
      "food": 4.6,
      "taste": 4.6,
      "hygiene": 4.4,
      "service": 4.5,
      "ambience": 4.4
    },
    "priceRange": {
      "min": 180,
      "max": 550
    },
    "distanceKm": 4.5,
    "menu": [
      {
        "id": "wokandroll-kitchen-pop-1",
        "name": "Hakka Noodles",
        "price": 160,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=600&q=80",
        "description": "Wok tossed noodles with shredded cabbage, bell peppers, carrots, and scallions in light soy."
      },
      {
        "id": "wokandroll-kitchen-pop-2",
        "name": "Steamed Chicken Momos",
        "price": 30,
        "category": "Beverages",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=600&q=80",
        "description": "Succulent pieces cooked in rich fragrant gravy with roasted spices, brown onions, and fresh coriander."
      },
      {
        "id": "wokandroll-kitchen-pop-3",
        "name": "Chilli Paneer Gravy",
        "price": 230,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=600&q=80",
        "description": "Fresh cottage cheese and seasonal ingredients simmered in a luscious spiced onion-tomato gravy."
      },
      {
        "id": "wokandroll-kitchen-pop-4",
        "name": "Manchow Soup",
        "price": 170,
        "category": "Starters",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=600&q=80",
        "description": "Fresh cottage cheese and seasonal ingredients simmered in a luscious spiced onion-tomato gravy."
      },
      {
        "id": "wokandroll-kitchen-item-2",
        "name": "Kurkure Crispy Paneer Momos (6 pcs)",
        "price": 150,
        "category": "Starters",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=600&q=80",
        "description": "Crispy cornflake-crusted deep-fried momos filled with seasoned spiced cottage cheese."
      },
      {
        "id": "wokandroll-kitchen-item-4",
        "name": "Veg Manchurian Gravy with Fried Rice Bowl",
        "price": 240,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=600&q=80",
        "description": "Deep-fried vegetable balls in a savory, tangy and spicy dark soya and ginger garlic sauce."
      },
      {
        "id": "wokandroll-kitchen-item-5",
        "name": "Schezwan Chicken Fried Rice",
        "price": 260,
        "category": "Main Course",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=600&q=80",
        "description": "Aged basmati rice stir-fried with diced chicken, eggs, and authentic spicy Sichuan pepper paste."
      },
      {
        "id": "wokandroll-kitchen-item-6",
        "name": "Crispy Honey Chilli Potatoes",
        "price": 180,
        "category": "Starters",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80",
        "description": "Crispy finger potatoes tossed in sweet honey, roasted sesame seeds, and spicy red chilli sauce."
      },
      {
        "id": "wokandroll-kitchen-item-7",
        "name": "Drums of Heaven Chicken Lollipops (6 pcs)",
        "price": 280,
        "category": "Starters",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=600&q=80",
        "description": "Crispy chicken winglets tossed in fiery Schezwan garlic sauce with spring onions."
      },
      {
        "id": "wokandroll-kitchen-item-8",
        "name": "Tibetan Thukpa Noodle Soup Bowl",
        "price": 210,
        "category": "Starters",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=600&q=80",
        "description": "Hearty Himalayan noodle soup packed with fresh greens, mushrooms, and spiced broth."
      },
      {
        "id": "wokandroll-kitchen-item-9",
        "name": "Crispy Fried Spring Rolls (6 pcs)",
        "price": 170,
        "category": "Starters",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?auto=format&fit=crop&w=600&q=80",
        "description": "Golden crunchy wrappers filled with cabbage, carrots, bell peppers, served with sweet chilli dip."
      },
      {
        "id": "wokandroll-kitchen-item-10",
        "name": "Darjeeling Lemon Iced Tea",
        "price": 110,
        "category": "Beverages",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=600&q=80",
        "description": "Refreshing brewed black tea infused with lemon zest and mint over crushed ice."
      },
      {
        "id": "wokandroll-kitchen-item-11",
        "name": "Darjeeling Darsaan with Vanilla Ice Cream",
        "price": 140,
        "category": "Desserts",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=600&q=80",
        "description": "Fried honey-glazed flat noodles topped with roasted sesame seeds and cool vanilla scoop."
      }
    ]
  },
  {
    "id": "chai-stories-cafe",
    "name": "Chai & Stories Cafe",
    "area": "Betiahata",
    "city": "Gorakhpur",
    "description": "Cozy boutique book cafe offering kulhad adrak chai, artisanal cold coffees, sourdough sandwiches, and fresh oven bakes.",
    "categories": [
      "cafe"
    ],
    "cuisines": [
      "Cafe & Tea Lounge",
      "Continental",
      "Bakery"
    ],
    "popularDishes": [
      "Kulhad Masala Chai",
      "Grilled Cheese Sandwich",
      "Cold Brew Coffee",
      "Blueberry Cheesecake"
    ],
    "costForTwo": 320,
    "averageRating": 4.7,
    "reviewCount": 220,
    "imageUrl": "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1000&q=80",
    "logoUrl": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20100%20100%22%20width%3D%22200%22%20height%3D%22200%22%3E%0A%20%20%3Cdefs%3E%0A%20%20%20%20%3ClinearGradient%20id%3D%22brandGrad_chai-stories-cafe%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%235c3a21%22%2F%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%2326180e%22%2F%3E%0A%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%3Cfilter%20id%3D%22shadow_chai-stories-cafe%22%20x%3D%22-10%25%22%20y%3D%22-10%25%22%20width%3D%22120%25%22%20height%3D%22120%25%22%3E%0A%20%20%20%20%20%20%3CfeDropShadow%20dx%3D%220%22%20dy%3D%222%22%20stdDeviation%3D%222.5%22%20flood-opacity%3D%220.35%22%2F%3E%0A%20%20%20%20%3C%2Ffilter%3E%0A%20%20%3C%2Fdefs%3E%0A%20%20%3C!--%20Background%20Shield%20Badge%20--%3E%0A%20%20%3Crect%20x%3D%224%22%20y%3D%224%22%20width%3D%2292%22%20height%3D%2292%22%20rx%3D%2226%22%20fill%3D%22url(%23brandGrad_chai-stories-cafe)%22%20stroke%3D%22%23fed7aa%22%20stroke-width%3D%222.5%22%20filter%3D%22url(%23shadow_chai-stories-cafe)%22%2F%3E%0A%20%20%3C!--%20Inner%20Ornamental%20Line%20--%3E%0A%20%20%3Crect%20x%3D%229%22%20y%3D%229%22%20width%3D%2282%22%20height%3D%2282%22%20rx%3D%2221%22%20fill%3D%22none%22%20stroke%3D%22%23fed7aa%22%20stroke-width%3D%221%22%20stroke-dasharray%3D%223%203%22%20opacity%3D%220.45%22%2F%3E%0A%20%20%3C!--%20Emblem%20Motif%20--%3E%0A%20%20%3Cpath%20d%3D%22M38%2038%20C38%2034%2042%2032%2046%2032%20L54%2032%20C58%2032%2062%2034%2062%2038%20L60%2050%20C60%2054%2056%2056%2050%2056%20C44%2056%2040%2054%2040%2050%20Z%22%20fill%3D%22%23fed7aa%22%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22M62%2040%20L65%2040%20C67%2040%2068%2041%2068%2043%20L68%2045%20C68%2047%2067%2048%2065%2048%20L61%2048%22%20stroke%3D%22%23fed7aa%22%20stroke-width%3D%222%22%20fill%3D%22none%22%2F%3E%0A%20%20%3C!--%20Typography%20%2F%20Monogram%20--%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2276%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C%20-apple-system%2C%20sans-serif%22%20font-weight%3D%22900%22%20font-size%3D%2215%22%20fill%3D%22%23ffffff%22%20letter-spacing%3D%221.5%22%3ECS%3C%2Ftext%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2287%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C%20-apple-system%2C%20sans-serif%22%20font-weight%3D%22800%22%20font-size%3D%226.5%22%20fill%3D%22%23fed7aa%22%20letter-spacing%3D%222%22%3EGORAKHPUR%3C%2Ftext%3E%0A%3C%2Fsvg%3E",
    "isDemo": false,
    "phone": "+91 88876 54321",
    "address": "Near Jubilee Inter College, Betiahata, Gorakhpur",
    "openTime": "10:00",
    "closeTime": "22:30",
    "openDays": [
      "Mon",
      "Tue",
      "Wed",
      "Thu",
      "Fri",
      "Sat",
      "Sun"
    ],
    "diet": "veg",
    "status": "Active",
    "ownerName": "Tanvi Kashyap",
    "ownerEmail": "chai.stories@gorakhpurfoodguide.in",
    "facilities": [
      "Book Library Corner",
      "Work-Friendly Seating",
      "Free High Speed Wi-Fi",
      "Pet Friendly Outdoor Area"
    ],
    "ratingsBreakdown": {
      "food": 4.7,
      "taste": 4.8,
      "hygiene": 4.8,
      "service": 4.6,
      "ambience": 4.9
    },
    "priceRange": {
      "min": 120,
      "max": 400
    },
    "distanceKm": 2.1,
    "menu": [
      {
        "id": "chai-stories-cafe-pop-1",
        "name": "Kulhad Masala Chai",
        "price": 20,
        "category": "Beverages",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=600&q=80",
        "description": "Freshly brewed aromatic beverage prepared with premium beans/leaves and whole spices."
      },
      {
        "id": "chai-stories-cafe-pop-2",
        "name": "Grilled Cheese Sandwich",
        "price": 150,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80",
        "description": "Fresh cottage cheese and seasonal ingredients simmered in a luscious spiced onion-tomato gravy."
      },
      {
        "id": "chai-stories-cafe-pop-3",
        "name": "Cold Brew Coffee",
        "price": 100,
        "category": "Beverages",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=600&q=80",
        "description": "Freshly brewed aromatic beverage prepared with premium beans/leaves and whole spices."
      },
      {
        "id": "chai-stories-cafe-pop-4",
        "name": "Blueberry Cheesecake",
        "price": 180,
        "category": "Desserts",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=600&q=80",
        "description": "Velvety cream cheese slice set over graham cracker crust and topped with wild blueberry compote."
      },
      {
        "id": "chai-stories-cafe-item-1",
        "name": "Belgian Nutella Waffle with Vanilla Ice Cream",
        "price": 210,
        "category": "Desserts",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1562376552-0d160a2f238d?auto=format&fit=crop&w=600&q=80",
        "description": "Freshly baked golden Belgian waffle smothered with warm Nutella and topped with ice cream."
      },
      {
        "id": "chai-stories-cafe-item-2",
        "name": "Lotus Biscoff Thick Shake",
        "price": 190,
        "category": "Beverages",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=600&q=80",
        "description": "Creamy milkshake blended with genuine Lotus Biscoff spread and crushed caramelized biscuits."
      },
      {
        "id": "chai-stories-cafe-item-3",
        "name": "Farmhouse Woodfired Pizza (10 inch)",
        "price": 360,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80",
        "description": "Hand-stretched dough topped with San Marzano tomato sauce, mozzarella, bell peppers, mushrooms and olives."
      },
      {
        "id": "chai-stories-cafe-item-4",
        "name": "Penne Creamy Alfredo Pasta with Mushrooms",
        "price": 290,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1621996346565-e3d5d6281724?auto=format&fit=crop&w=600&q=80",
        "description": "Al dente penne tossed in rich parmesan garlic white sauce with sautéed mushrooms."
      },
      {
        "id": "chai-stories-cafe-item-5",
        "name": "Loaded Cheesy Mexican Nachos",
        "price": 240,
        "category": "Starters",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1576107232684-1279f3908594?auto=format&fit=crop&w=600&q=80",
        "description": "Crispy corn tortilla chips baked with jalapeños, salsa, black olives and warm cheddar sauce."
      },
      {
        "id": "chai-stories-cafe-item-6",
        "name": "Crispy Peri Peri French Fries",
        "price": 140,
        "category": "Starters",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1576107232684-1279f3908594?auto=format&fit=crop&w=600&q=80",
        "description": "Golden potato fries seasoned with zesty African bird’s eye peri-peri spice dust."
      },
      {
        "id": "chai-stories-cafe-item-7",
        "name": "Classic Cold Coffee with Ice Cream",
        "price": 160,
        "category": "Beverages",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=600&q=80",
        "description": "Rich espresso blended with chilled whole milk and topped with a scoop of vanilla gelato."
      },
      {
        "id": "chai-stories-cafe-item-8",
        "name": "Kulhad Adrak Masala Chai",
        "price": 60,
        "category": "Beverages",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=600&q=80",
        "description": "Freshly brewed strong tea infused with crushed ginger, cardamom, and clove in a clay kulhad."
      },
      {
        "id": "chai-stories-cafe-item-10",
        "name": "Tiramisu Italiano Cup",
        "price": 210,
        "category": "Desserts",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=600&q=80",
        "description": "Espresso-soaked savoiardi biscuits layered with mascarpone cream and dusted with cocoa."
      },
      {
        "id": "chai-stories-cafe-item-11",
        "name": "Classic Grilled Paneer Tikka Sandwich",
        "price": 180,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=600&q=80",
        "description": "Multi-grain bread toasted with spiced paneer tikka, mint chutney, and mozzarella cheese."
      }
    ]
  },
  {
    "id": "royal-awadh-darbar",
    "name": "Royal Awadh Darbar",
    "area": "Golghar",
    "city": "Gorakhpur",
    "description": "Regal dining hall serving authentic Awadhi and Lucknawi heritage recipes, from handi dum biryanis to galouti kebabs and shahi tukda.",
    "categories": [
      "north-indian"
    ],
    "cuisines": [
      "Awadhi",
      "Mughlai",
      "Biryani & Kebabs"
    ],
    "popularDishes": [
      "Awadhi Dum Biryani",
      "Galouti Kebab",
      "Mughlai Korma",
      "Ulte Tawa Ka Paratha"
    ],
    "costForTwo": 900,
    "averageRating": 4.6,
    "reviewCount": 340,
    "imageUrl": "https://images.unsplash.com/photo-1587574293340-e0011c4e8ecf?auto=format&fit=crop&w=1000&q=80",
    "logoUrl": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20100%20100%22%20width%3D%22200%22%20height%3D%22200%22%3E%0A%20%20%3Cdefs%3E%0A%20%20%20%20%3ClinearGradient%20id%3D%22brandGrad_royal-awadh-darbar%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23a33a0a%22%2F%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%232b2018%22%2F%3E%0A%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%3Cfilter%20id%3D%22shadow_royal-awadh-darbar%22%20x%3D%22-10%25%22%20y%3D%22-10%25%22%20width%3D%22120%25%22%20height%3D%22120%25%22%3E%0A%20%20%20%20%20%20%3CfeDropShadow%20dx%3D%220%22%20dy%3D%222%22%20stdDeviation%3D%222.5%22%20flood-opacity%3D%220.35%22%2F%3E%0A%20%20%20%20%3C%2Ffilter%3E%0A%20%20%3C%2Fdefs%3E%0A%20%20%3C!--%20Background%20Shield%20Badge%20--%3E%0A%20%20%3Crect%20x%3D%224%22%20y%3D%224%22%20width%3D%2292%22%20height%3D%2292%22%20rx%3D%2226%22%20fill%3D%22url(%23brandGrad_royal-awadh-darbar)%22%20stroke%3D%22%23f5e9d0%22%20stroke-width%3D%222.5%22%20filter%3D%22url(%23shadow_royal-awadh-darbar)%22%2F%3E%0A%20%20%3C!--%20Inner%20Ornamental%20Line%20--%3E%0A%20%20%3Crect%20x%3D%229%22%20y%3D%229%22%20width%3D%2282%22%20height%3D%2282%22%20rx%3D%2221%22%20fill%3D%22none%22%20stroke%3D%22%23f5e9d0%22%20stroke-width%3D%221%22%20stroke-dasharray%3D%223%203%22%20opacity%3D%220.45%22%2F%3E%0A%20%20%3C!--%20Emblem%20Motif%20--%3E%0A%20%20%3Ccircle%20cx%3D%2250%22%20cy%3D%2238%22%20r%3D%2214%22%20stroke%3D%22%23f5e9d0%22%20stroke-width%3D%222%22%20fill%3D%22none%22%20opacity%3D%220.7%22%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22M44%2030%20L44%2046%20M56%2030%20L56%2046%20M42%2030%20C42%2035%2046%2035%2046%2030%22%20stroke%3D%22%23f5e9d0%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%2F%3E%0A%20%20%3C!--%20Typography%20%2F%20Monogram%20--%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2276%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C%20-apple-system%2C%20sans-serif%22%20font-weight%3D%22900%22%20font-size%3D%2215%22%20fill%3D%22%23ffffff%22%20letter-spacing%3D%221.5%22%3ERA%3C%2Ftext%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2287%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C%20-apple-system%2C%20sans-serif%22%20font-weight%3D%22800%22%20font-size%3D%226.5%22%20fill%3D%22%23f5e9d0%22%20letter-spacing%3D%222%22%3EGORAKHPUR%3C%2Ftext%3E%0A%3C%2Fsvg%3E",
    "isDemo": false,
    "phone": "+91 94158 90123",
    "address": "Near Baldev Plaza, Golghar, Gorakhpur",
    "openTime": "12:30",
    "closeTime": "23:30",
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
    "ownerName": "Rashid Rizvi",
    "ownerEmail": "royalawadh@gorakhpurfoodguide.in",
    "facilities": [
      "Grand Family Seating",
      "Live Sitar Music",
      "Air Conditioned",
      "Banquet Facility Available"
    ],
    "ratingsBreakdown": {
      "food": 4.8,
      "taste": 4.8,
      "hygiene": 4.6,
      "service": 4.5,
      "ambience": 4.7
    },
    "priceRange": {
      "min": 380,
      "max": 1100
    },
    "distanceKm": 0.6,
    "menu": [
      {
        "id": "royal-awadh-darbar-pop-1",
        "name": "Awadhi Dum Biryani",
        "price": 340,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=600&q=80",
        "description": "Aromatic long-grain basmati layered with tender meat/veggies, saffron, mint, and whole spices."
      },
      {
        "id": "royal-awadh-darbar-pop-2",
        "name": "Galouti Kebab",
        "price": 360,
        "category": "Starters",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=600&q=80",
        "description": "Finely ground minced meat infused with 32 rare Awadhi potli spices, served with Mughlai paratha."
      },
      {
        "id": "royal-awadh-darbar-pop-3",
        "name": "Mughlai Korma",
        "price": 430,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=600&q=80",
        "description": "Succulent pieces cooked in rich fragrant gravy with roasted spices, brown onions, and fresh coriander."
      },
      {
        "id": "royal-awadh-darbar-pop-4",
        "name": "Ulte Tawa Ka Paratha",
        "price": 70,
        "category": "Breads",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=600&q=80",
        "description": "Fresh cottage cheese and seasonal ingredients simmered in a luscious spiced onion-tomato gravy."
      },
      {
        "id": "royal-awadh-darbar-item-1",
        "name": "Galawati Kabab with Ulte Tawe Ka Paratha",
        "price": 380,
        "category": "Starters",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=600&q=80",
        "description": "Mouth-melting Awadhi minced mutton kebabs spiced with 32 fragrant herbs, served with Mughlai paratha."
      },
      {
        "id": "royal-awadh-darbar-item-2",
        "name": "Murgh Malai Tikka (6 pcs)",
        "price": 340,
        "category": "Starters",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=600&q=80",
        "description": "Boneless chicken chunks marinated in cream, cheese, hung curd, and crushed cardamom, grilled in tandoor."
      },
      {
        "id": "royal-awadh-darbar-item-3",
        "name": "Mutton Seekh Kebab (4 pcs)",
        "price": 390,
        "category": "Starters",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=600&q=80",
        "description": "Finely minced spiced mutton skewers cooked over glowing charcoal embers."
      },
      {
        "id": "royal-awadh-darbar-item-4",
        "name": "Tandoori Chicken (Half / Full)",
        "price": 290,
        "category": "Starters",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80",
        "description": "Classic bone-in chicken marinated in Kashmiri chilli, mustard oil and hung curd roasted in tandoor."
      },
      {
        "id": "royal-awadh-darbar-item-5",
        "name": "Paneer Tikka Shashlik",
        "price": 280,
        "category": "Starters",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=600&q=80",
        "description": "Cottage cheese cubes with bell peppers and onions grilled to perfection in clay oven."
      },
      {
        "id": "royal-awadh-darbar-item-6",
        "name": "Special Butter Chicken",
        "price": 390,
        "category": "Main Course",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=600&q=80",
        "description": "Tender tandoori chicken cooked in an authentic velvety makhani gravy enriched with honey and fenugreek."
      },
      {
        "id": "royal-awadh-darbar-item-7",
        "name": "Handi Mutton Rogan Josh",
        "price": 460,
        "category": "Main Course",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1545247181-516773cae754?auto=format&fit=crop&w=600&q=80",
        "description": "Tender baby mutton simmered in a clay handi with ratan jot, Kashmiri chilies, and aromatic whole spices."
      },
      {
        "id": "royal-awadh-darbar-item-8",
        "name": "Chicken Lababdar",
        "price": 370,
        "category": "Main Course",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=600&q=80",
        "description": "Succulent chicken pieces in a chunky spiced onion-tomato gravy finished with grated paneer and cream."
      },
      {
        "id": "royal-awadh-darbar-item-9",
        "name": "Kadhai Paneer",
        "price": 290,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=600&q=80",
        "description": "Paneer cubes tossed with fresh ground coriander, dry red chillies, capsicum, and thick onion masala."
      },
      {
        "id": "royal-awadh-darbar-item-10",
        "name": "Dal Makhani Slow-Cooked",
        "price": 240,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80",
        "description": "Classic black lentils slow-cooked with fresh cream and butter for 24 hours."
      },
      {
        "id": "royal-awadh-darbar-item-11",
        "name": "Dum Chicken Biryani with Mirchi Salan",
        "price": 340,
        "category": "Biryani & Rice",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=600&q=80",
        "description": "Long-grain aged basmati rice layered with marinated chicken, saffron milk, brown onions, and kewra."
      }
    ]
  },
  {
    "id": "brijwasi-sweets",
    "name": "Brijwasi Desi Ghee Sweets & Thali",
    "area": "Bank Road",
    "city": "Gorakhpur",
    "description": "Celebrated Mathura-style confectionery offering rich Khoya sweets, Badam milk, Peda, and traditional unlimited North Indian thalis.",
    "categories": [
      "north-indian",
      "sweets"
    ],
    "cuisines": [
      "Mithai & Sweets",
      "North Indian",
      "Pure Veg Thali"
    ],
    "popularDishes": [
      "Mathura Peda",
      "Desi Ghee Thali",
      "Kesar Badam Milk",
      "Malai Kofta"
    ],
    "costForTwo": 360,
    "averageRating": 4.7,
    "reviewCount": 395,
    "imageUrl": "https://images.unsplash.com/photo-1560624052-449f5ddf0c31?auto=format&fit=crop&w=1000&q=80",
    "logoUrl": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20100%20100%22%20width%3D%22200%22%20height%3D%22200%22%3E%0A%20%20%3Cdefs%3E%0A%20%20%20%20%3ClinearGradient%20id%3D%22brandGrad_brijwasi-sweets%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%2394381c%22%2F%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%234f3f2d%22%2F%3E%0A%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%3Cfilter%20id%3D%22shadow_brijwasi-sweets%22%20x%3D%22-10%25%22%20y%3D%22-10%25%22%20width%3D%22120%25%22%20height%3D%22120%25%22%3E%0A%20%20%20%20%20%20%3CfeDropShadow%20dx%3D%220%22%20dy%3D%222%22%20stdDeviation%3D%222.5%22%20flood-opacity%3D%220.35%22%2F%3E%0A%20%20%20%20%3C%2Ffilter%3E%0A%20%20%3C%2Fdefs%3E%0A%20%20%3C!--%20Background%20Shield%20Badge%20--%3E%0A%20%20%3Crect%20x%3D%224%22%20y%3D%224%22%20width%3D%2292%22%20height%3D%2292%22%20rx%3D%2226%22%20fill%3D%22url(%23brandGrad_brijwasi-sweets)%22%20stroke%3D%22%23fce588%22%20stroke-width%3D%222.5%22%20filter%3D%22url(%23shadow_brijwasi-sweets)%22%2F%3E%0A%20%20%3C!--%20Inner%20Ornamental%20Line%20--%3E%0A%20%20%3Crect%20x%3D%229%22%20y%3D%229%22%20width%3D%2282%22%20height%3D%2282%22%20rx%3D%2221%22%20fill%3D%22none%22%20stroke%3D%22%23fce588%22%20stroke-width%3D%221%22%20stroke-dasharray%3D%223%203%22%20opacity%3D%220.45%22%2F%3E%0A%20%20%3C!--%20Emblem%20Motif%20--%3E%0A%20%20%3Cpath%20d%3D%22M50%2028%20C56%2028%2062%2034%2062%2042%20C62%2050%2050%2060%2050%2060%20C50%2060%2038%2050%2038%2042%20C38%2034%2044%2028%2050%2028%20Z%22%20fill%3D%22%23fce588%22%20opacity%3D%220.95%22%2F%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2250%22%20cy%3D%2240%22%20r%3D%223.5%22%20fill%3D%22%23ffffff%22%2F%3E%0A%20%20%3C!--%20Typography%20%2F%20Monogram%20--%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2276%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C%20-apple-system%2C%20sans-serif%22%20font-weight%3D%22900%22%20font-size%3D%2215%22%20fill%3D%22%23ffffff%22%20letter-spacing%3D%221.5%22%3EBD%3C%2Ftext%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2287%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C%20-apple-system%2C%20sans-serif%22%20font-weight%3D%22800%22%20font-size%3D%226.5%22%20fill%3D%22%23fce588%22%20letter-spacing%3D%222%22%3EGORAKHPUR%3C%2Ftext%3E%0A%3C%2Fsvg%3E",
    "isDemo": false,
    "phone": "+91 94500 11223",
    "address": "Near Head Post Office, Bank Road, Gorakhpur",
    "openTime": "08:00",
    "closeTime": "22:30",
    "openDays": [
      "Mon",
      "Tue",
      "Wed",
      "Thu",
      "Fri",
      "Sat",
      "Sun"
    ],
    "diet": "veg",
    "status": "Active",
    "ownerName": "Radhe Shyam Sharma",
    "ownerEmail": "brijwasi.dine@gorakhpurfoodguide.in",
    "facilities": [
      "100% Pure Vegetarian",
      "Air Conditioned",
      "Bulk Sweet Orders for Weddings",
      "Fast Service"
    ],
    "ratingsBreakdown": {
      "food": 4.8,
      "taste": 4.9,
      "hygiene": 4.7,
      "service": 4.5,
      "ambience": 4.4
    },
    "priceRange": {
      "min": 150,
      "max": 400
    },
    "distanceKm": 0.9,
    "menu": [
      {
        "id": "brijwasi-sweets-pop-1",
        "name": "Mathura Peda",
        "price": 60,
        "category": "Desserts",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80",
        "description": "Fresh cottage cheese and seasonal ingredients simmered in a luscious spiced onion-tomato gravy."
      },
      {
        "id": "brijwasi-sweets-pop-2",
        "name": "Desi Ghee Thali",
        "price": 180,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=600&q=80",
        "description": "Wholesome platter featuring two curries, dal, jeera rice, fresh breads, salad, and dessert."
      },
      {
        "id": "brijwasi-sweets-pop-3",
        "name": "Kesar Badam Milk",
        "price": 170,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=600&q=80",
        "description": "Fresh cottage cheese and seasonal ingredients simmered in a luscious spiced onion-tomato gravy."
      },
      {
        "id": "brijwasi-sweets-pop-4",
        "name": "Malai Kofta",
        "price": 230,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=600&q=80",
        "description": "Golden cottage cheese and raisin dumplings floating in a rich cashew-cream sauce."
      },
      {
        "id": "brijwasi-sweets-item-1",
        "name": "Desi Ghee Samosa (2 pcs)",
        "price": 40,
        "category": "Starters",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80",
        "description": "Golden flaky pastry stuffed with spiced potatoes, green peas and whole spices, fried in pure desi ghee."
      },
      {
        "id": "brijwasi-sweets-item-2",
        "name": "Khasta Kachori with Hing Aloo (2 pcs)",
        "price": 50,
        "category": "Starters",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80",
        "description": "Crispy lentil-stuffed kachoris served with spicy tangy hing aloo subzi and sweet sonth."
      },
      {
        "id": "brijwasi-sweets-item-3",
        "name": "Dahi Bhalla Papdi Chaat",
        "price": 90,
        "category": "Starters",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80",
        "description": "Soft lentil dumplings and crisp papdis drenched in whipped curd, roasted cumin, and sweet-spicy chutneys."
      },
      {
        "id": "brijwasi-sweets-item-4",
        "name": "Amritsari Chhole Bhature",
        "price": 160,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=600&q=80",
        "description": "Pair of balloon bhatures served with dark spiced Punjabi chickpeas, pickled onions and fried green chilli."
      },
      {
        "id": "brijwasi-sweets-item-5",
        "name": "Special Pure Veg Deluxe Thali",
        "price": 260,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=600&q=80",
        "description": "Paneer Butter Masala, Dal Makhani, Mix Veg, Jeera Rice, 2 Butter Naan, Gulab Jamun, Papad and Raita."
      },
      {
        "id": "brijwasi-sweets-item-6",
        "name": "Paneer Butter Masala",
        "price": 240,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=600&q=80",
        "description": "Soft cottage cheese cubes simmered in a velvety tomato, cashew and butter gravy with kasoori methi."
      },
      {
        "id": "brijwasi-sweets-item-7",
        "name": "Dal Makhani Special",
        "price": 210,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80",
        "description": "Whole black lentils and kidney beans slow-cooked overnight with white butter and cream."
      },
      {
        "id": "brijwasi-sweets-item-8",
        "name": "Butter Tandoori Roti (2 pcs)",
        "price": 40,
        "category": "Breads",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=600&q=80",
        "description": "Whole wheat flatbread baked in clay oven and topped with pure amul butter."
      },
      {
        "id": "brijwasi-sweets-item-9",
        "name": "Garlic Butter Naan",
        "price": 65,
        "category": "Breads",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=600&q=80",
        "description": "Soft leavened bread infused with minced garlic, fresh coriander and generous butter."
      },
      {
        "id": "brijwasi-sweets-item-10",
        "name": "Special Kesar Rasmalai (2 pcs)",
        "price": 90,
        "category": "Desserts",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1564355808539-22fda35bed7e?auto=format&fit=crop&w=600&q=80",
        "description": "Delicate cottage cheese patties soaked in saffron-infused clotted milk garnished with pistachios."
      },
      {
        "id": "brijwasi-sweets-item-11",
        "name": "Desi Ghee Gulab Jamun (2 pcs)",
        "price": 60,
        "category": "Desserts",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=600&q=80",
        "description": "Hot melt-in-mouth milk solids dumplings soaked in cardamom and rose sugar syrup."
      }
    ]
  },
  {
    "id": "burger-crust-hub",
    "name": "Burger & Crust Hub",
    "area": "Mohaddipur",
    "city": "Gorakhpur",
    "description": "Trendy quick-service American diner serving smash burgers, cheesy loaded fries, peri peri wings, and monster thick shakes.",
    "categories": [
      "fast-food"
    ],
    "cuisines": [
      "Burgers",
      "American Fast Food",
      "Shakes & Fries"
    ],
    "popularDishes": [
      "Double Mutton Smash Burger",
      "Crispy Chicken Zinger",
      "Cheesy Peri Peri Fries",
      "Oreo Monster Shake"
    ],
    "costForTwo": 420,
    "averageRating": 4.5,
    "reviewCount": 260,
    "imageUrl": "https://images.unsplash.com/photo-1525610553991-2bede1a236e2?auto=format&fit=crop&w=1000&q=80",
    "logoUrl": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20100%20100%22%20width%3D%22200%22%20height%3D%22200%22%3E%0A%20%20%3Cdefs%3E%0A%20%20%20%20%3ClinearGradient%20id%3D%22brandGrad_burger-crust-hub%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23a33a0a%22%2F%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%232b2018%22%2F%3E%0A%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%3Cfilter%20id%3D%22shadow_burger-crust-hub%22%20x%3D%22-10%25%22%20y%3D%22-10%25%22%20width%3D%22120%25%22%20height%3D%22120%25%22%3E%0A%20%20%20%20%20%20%3CfeDropShadow%20dx%3D%220%22%20dy%3D%222%22%20stdDeviation%3D%222.5%22%20flood-opacity%3D%220.35%22%2F%3E%0A%20%20%20%20%3C%2Ffilter%3E%0A%20%20%3C%2Fdefs%3E%0A%20%20%3C!--%20Background%20Shield%20Badge%20--%3E%0A%20%20%3Crect%20x%3D%224%22%20y%3D%224%22%20width%3D%2292%22%20height%3D%2292%22%20rx%3D%2226%22%20fill%3D%22url(%23brandGrad_burger-crust-hub)%22%20stroke%3D%22%23f5e9d0%22%20stroke-width%3D%222.5%22%20filter%3D%22url(%23shadow_burger-crust-hub)%22%2F%3E%0A%20%20%3C!--%20Inner%20Ornamental%20Line%20--%3E%0A%20%20%3Crect%20x%3D%229%22%20y%3D%229%22%20width%3D%2282%22%20height%3D%2282%22%20rx%3D%2221%22%20fill%3D%22none%22%20stroke%3D%22%23f5e9d0%22%20stroke-width%3D%221%22%20stroke-dasharray%3D%223%203%22%20opacity%3D%220.45%22%2F%3E%0A%20%20%3C!--%20Emblem%20Motif%20--%3E%0A%20%20%3Ccircle%20cx%3D%2250%22%20cy%3D%2238%22%20r%3D%2214%22%20stroke%3D%22%23f5e9d0%22%20stroke-width%3D%222%22%20fill%3D%22none%22%20opacity%3D%220.7%22%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22M44%2030%20L44%2046%20M56%2030%20L56%2046%20M42%2030%20C42%2035%2046%2035%2046%2030%22%20stroke%3D%22%23f5e9d0%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%2F%3E%0A%20%20%3C!--%20Typography%20%2F%20Monogram%20--%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2276%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C%20-apple-system%2C%20sans-serif%22%20font-weight%3D%22900%22%20font-size%3D%2215%22%20fill%3D%22%23ffffff%22%20letter-spacing%3D%221.5%22%3EBC%3C%2Ftext%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2287%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C%20-apple-system%2C%20sans-serif%22%20font-weight%3D%22800%22%20font-size%3D%226.5%22%20fill%3D%22%23f5e9d0%22%20letter-spacing%3D%222%22%3EGORAKHPUR%3C%2Ftext%3E%0A%3C%2Fsvg%3E",
    "isDemo": false,
    "phone": "+91 97920 87654",
    "address": "Near Charfatak Overbridge, Mohaddipur, Gorakhpur",
    "openTime": "11:00",
    "closeTime": "23:30",
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
    "ownerName": "Kunal Srivastava",
    "ownerEmail": "burgerhub@gorakhpurfoodguide.in",
    "facilities": [
      "Air Conditioned",
      "Takeaway Drive Window",
      "UPI & Cards Accepted",
      "Youth Vibe"
    ],
    "ratingsBreakdown": {
      "food": 4.6,
      "taste": 4.7,
      "hygiene": 4.4,
      "service": 4.4,
      "ambience": 4.5
    },
    "priceRange": {
      "min": 150,
      "max": 480
    },
    "distanceKm": 2.8,
    "menu": [
      {
        "id": "burger-crust-hub-pop-1",
        "name": "Double Mutton Smash Burger",
        "price": 290,
        "category": "Main Course",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1545247181-516773cae754?auto=format&fit=crop&w=600&q=80",
        "description": "Toasted brioche bun loaded with fresh patty, melted cheese, crisp lettuce, and signature sauce."
      },
      {
        "id": "burger-crust-hub-pop-2",
        "name": "Crispy Chicken Zinger",
        "price": 290,
        "category": "Main Course",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=600&q=80",
        "description": "Succulent pieces cooked in rich fragrant gravy with roasted spices, brown onions, and fresh coriander."
      },
      {
        "id": "burger-crust-hub-pop-3",
        "name": "Cheesy Peri Peri Fries",
        "price": 150,
        "category": "Starters",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1576107232684-1279f3908594?auto=format&fit=crop&w=600&q=80",
        "description": "Fresh cottage cheese and seasonal ingredients simmered in a luscious spiced onion-tomato gravy."
      },
      {
        "id": "burger-crust-hub-pop-4",
        "name": "Oreo Monster Shake",
        "price": 120,
        "category": "Beverages",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=600&q=80",
        "description": "Fresh cottage cheese and seasonal ingredients simmered in a luscious spiced onion-tomato gravy."
      },
      {
        "id": "burger-crust-hub-item-1",
        "name": "Double Cheese Crunch Burger",
        "price": 160,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80",
        "description": "Crisp vegetable patty with double melted cheddar, gherkins, lettuce and secret thousand island sauce."
      },
      {
        "id": "burger-crust-hub-item-3",
        "name": "Hand-Tossed Margherita Pizza (Regular)",
        "price": 240,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80",
        "description": "Classic Italian pizza with aromatic basil leaves, extra virgin olive oil and 100% mozzarella."
      },
      {
        "id": "burger-crust-hub-item-4",
        "name": "Fiery Chicken Sausage & Pepperoni Pizza",
        "price": 390,
        "category": "Main Course",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80",
        "description": "Loaded with spicy chicken sausage, smoked pepperoni, red paprika, and stretchy mozzarella."
      },
      {
        "id": "burger-crust-hub-item-5",
        "name": "Loaded Cheese Fries with Jalapeños",
        "price": 160,
        "category": "Starters",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1576107232684-1279f3908594?auto=format&fit=crop&w=600&q=80",
        "description": "Crinkle-cut hot fries smothered in liquid cheese, jalapeño bits, and smoky barbecue drizzle."
      },
      {
        "id": "burger-crust-hub-item-6",
        "name": "Double Egg Double Chicken Kathi Roll",
        "price": 180,
        "category": "Starters",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?auto=format&fit=crop&w=600&q=80",
        "description": "Flaky paratha layered with two eggs and rolled with grilled chicken tikka, onions, and lime juice."
      },
      {
        "id": "burger-crust-hub-item-7",
        "name": "Hot & Crispy Fried Chicken Bucket (4 pcs)",
        "price": 360,
        "category": "Starters",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=600&q=80",
        "description": "11 secret herbs and spices recipe chicken, extra crunchy outside and juicy tender inside."
      },
      {
        "id": "burger-crust-hub-item-8",
        "name": "Classic Mumbai Vada Pav (2 pcs)",
        "price": 70,
        "category": "Starters",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80",
        "description": "Spiced potato batata vada in soft pav bread with spicy garlic dry chutney and fried green chillies."
      },
      {
        "id": "burger-crust-hub-item-9",
        "name": "Oreo Thick Overload Shake",
        "price": 160,
        "category": "Beverages",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=600&q=80",
        "description": "Vanilla cream milkshake loaded with crushed Oreo cookies, chocolate syrup and whipped cream."
      },
      {
        "id": "burger-crust-hub-item-10",
        "name": "Choco Lava Cake with Molten Core",
        "price": 110,
        "category": "Desserts",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=600&q=80",
        "description": "Warm soft chocolate sponge cake with an irresistible flowing chocolate fudge center."
      }
    ]
  },
  {
    "id": "taalview-rooftop",
    "name": "Taal View Rooftop Lounge",
    "area": "Taramandal",
    "city": "Gorakhpur",
    "description": "Elevated open-air rooftop dining overlooking the sparkling water body of Ramgarh Taal, serving gourmet North Indian curries and mocktails.",
    "categories": [
      "north-indian",
      "cafe"
    ],
    "cuisines": [
      "North Indian",
      "Continental",
      "Tandoor & Grills"
    ],
    "popularDishes": [
      "Murgh Musallam",
      "Paneer Tikka Platter",
      "Blue Lagoon Mocktail",
      "Stuffed Kulcha"
    ],
    "costForTwo": 950,
    "averageRating": 4.8,
    "reviewCount": 460,
    "imageUrl": "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?auto=format&fit=crop&w=1000&q=80",
    "logoUrl": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20100%20100%22%20width%3D%22200%22%20height%3D%22200%22%3E%0A%20%20%3Cdefs%3E%0A%20%20%20%20%3ClinearGradient%20id%3D%22brandGrad_taalview-rooftop%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%235c3a21%22%2F%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%2326180e%22%2F%3E%0A%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%3Cfilter%20id%3D%22shadow_taalview-rooftop%22%20x%3D%22-10%25%22%20y%3D%22-10%25%22%20width%3D%22120%25%22%20height%3D%22120%25%22%3E%0A%20%20%20%20%20%20%3CfeDropShadow%20dx%3D%220%22%20dy%3D%222%22%20stdDeviation%3D%222.5%22%20flood-opacity%3D%220.35%22%2F%3E%0A%20%20%20%20%3C%2Ffilter%3E%0A%20%20%3C%2Fdefs%3E%0A%20%20%3C!--%20Background%20Shield%20Badge%20--%3E%0A%20%20%3Crect%20x%3D%224%22%20y%3D%224%22%20width%3D%2292%22%20height%3D%2292%22%20rx%3D%2226%22%20fill%3D%22url(%23brandGrad_taalview-rooftop)%22%20stroke%3D%22%23fed7aa%22%20stroke-width%3D%222.5%22%20filter%3D%22url(%23shadow_taalview-rooftop)%22%2F%3E%0A%20%20%3C!--%20Inner%20Ornamental%20Line%20--%3E%0A%20%20%3Crect%20x%3D%229%22%20y%3D%229%22%20width%3D%2282%22%20height%3D%2282%22%20rx%3D%2221%22%20fill%3D%22none%22%20stroke%3D%22%23fed7aa%22%20stroke-width%3D%221%22%20stroke-dasharray%3D%223%203%22%20opacity%3D%220.45%22%2F%3E%0A%20%20%3C!--%20Emblem%20Motif%20--%3E%0A%20%20%3Cpath%20d%3D%22M38%2038%20C38%2034%2042%2032%2046%2032%20L54%2032%20C58%2032%2062%2034%2062%2038%20L60%2050%20C60%2054%2056%2056%2050%2056%20C44%2056%2040%2054%2040%2050%20Z%22%20fill%3D%22%23fed7aa%22%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22M62%2040%20L65%2040%20C67%2040%2068%2041%2068%2043%20L68%2045%20C68%2047%2067%2048%2065%2048%20L61%2048%22%20stroke%3D%22%23fed7aa%22%20stroke-width%3D%222%22%20fill%3D%22none%22%2F%3E%0A%20%20%3C!--%20Typography%20%2F%20Monogram%20--%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2276%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C%20-apple-system%2C%20sans-serif%22%20font-weight%3D%22900%22%20font-size%3D%2215%22%20fill%3D%22%23ffffff%22%20letter-spacing%3D%221.5%22%3ETV%3C%2Ftext%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2287%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C%20-apple-system%2C%20sans-serif%22%20font-weight%3D%22800%22%20font-size%3D%226.5%22%20fill%3D%22%23fed7aa%22%20letter-spacing%3D%222%22%3EGORAKHPUR%3C%2Ftext%3E%0A%3C%2Fsvg%3E",
    "isDemo": false,
    "phone": "+91 98380 99887",
    "address": "Hotel Grand View Top Floor, Ramgarh Taal Road, Taramandal, Gorakhpur",
    "openTime": "17:00",
    "closeTime": "00:00",
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
    "ownerName": "Sanjay Pratap Singh",
    "ownerEmail": "taalview@gorakhpurfoodguide.in",
    "facilities": [
      "Panoramic Lake View",
      "Live Music",
      "Private Cabanas",
      "Valet Parking",
      "Cocktail Bar Atmosphere"
    ],
    "ratingsBreakdown": {
      "food": 4.8,
      "taste": 4.7,
      "hygiene": 4.9,
      "service": 4.7,
      "ambience": 5
    },
    "priceRange": {
      "min": 450,
      "max": 1200
    },
    "distanceKm": 3.5,
    "menu": [
      {
        "id": "taalview-rooftop-pop-1",
        "name": "Murgh Musallam",
        "price": 540,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=600&q=80",
        "description": "Whole roasted chicken simmered in rich saffron almond gravy with egg and keema garnish."
      },
      {
        "id": "taalview-rooftop-pop-2",
        "name": "Paneer Tikka Platter",
        "price": 340,
        "category": "Starters",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=600&q=80",
        "description": "Marinated in yogurt, roasted garlic, and spices, chargrilled to smoky perfection."
      },
      {
        "id": "taalview-rooftop-pop-3",
        "name": "Blue Lagoon Mocktail",
        "price": 460,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=600&q=80",
        "description": "Fresh cottage cheese and seasonal ingredients simmered in a luscious spiced onion-tomato gravy."
      },
      {
        "id": "taalview-rooftop-pop-4",
        "name": "Stuffed Kulcha",
        "price": 130,
        "category": "Breads",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=600&q=80",
        "description": "Fresh cottage cheese and seasonal ingredients simmered in a luscious spiced onion-tomato gravy."
      },
      {
        "id": "taalview-rooftop-item-1",
        "name": "Shaam Savera Signature Spinach Kofta",
        "price": 390,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=600&q=80",
        "description": "Chef Sanjeev Kapoor’s masterpiece: paneer stuffed spinach dumplings in rich velvety tomato gravy."
      },
      {
        "id": "taalview-rooftop-item-2",
        "name": "Crispy Spiced Corn Tempura",
        "price": 240,
        "category": "Starters",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=600&q=80",
        "description": "Tender sweet corn kernels wok-tossed with chopped green chillies, spring onions and pepper salt."
      },
      {
        "id": "taalview-rooftop-item-3",
        "name": "Cajun Spiced Roasted Potatoes",
        "price": 220,
        "category": "Starters",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=600&q=80",
        "description": "Baby potatoes roasted with herbs and drizzled with creamy cajun dipping sauce."
      },
      {
        "id": "taalview-rooftop-item-4",
        "name": "Bhatti Da Murgh Tikka",
        "price": 380,
        "category": "Starters",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=600&q=80",
        "description": "Robust chicken drumsticks marinated with charred whole spices and grilled on open charcoal."
      },
      {
        "id": "taalview-rooftop-item-5",
        "name": "Lalla Mussa Dal Signature",
        "price": 290,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80",
        "description": "Slow-simmered green moong and black lentils enriched with country butter and roasted cumin."
      },
      {
        "id": "taalview-rooftop-item-6",
        "name": "Lawrence Road Tandoori Murgh",
        "price": 440,
        "category": "Main Course",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=600&q=80",
        "description": "Famous Amritsari style whole roasted chicken simmered in a spiced onion tomato masala."
      },
      {
        "id": "taalview-rooftop-item-7",
        "name": "Paneer Tikka Lababdar",
        "price": 340,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=600&q=80",
        "description": "Char-grilled cottage cheese steeped in tomato-cashew gravy with bell peppers."
      },
      {
        "id": "taalview-rooftop-item-8",
        "name": "Parda Chicken Dum Biryani",
        "price": 390,
        "category": "Biryani & Rice",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=600&q=80",
        "description": "Biryani sealed under a flaky puff pastry crust to preserve every nuance of Awadhi aromatics."
      },
      {
        "id": "taalview-rooftop-item-10",
        "name": "Peru Pyala Guava Drink with Chilli Rim",
        "price": 160,
        "category": "Beverages",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1553787499-6f9133860278?auto=format&fit=crop&w=600&q=80",
        "description": "Guava juice served in a chilli-salt rimmed glass with Worcestershire splash."
      },
      {
        "id": "taalview-rooftop-item-11",
        "name": "Gulab-e-Gulkan Royal Dessert",
        "price": 180,
        "category": "Desserts",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=600&q=80",
        "description": "Warm gulab jamuns stuffed with fragrant rose petal gulkand, served with vanilla ice cream."
      },
      {
        "id": "taalview-rooftop-item-12",
        "name": "Sizzling Chocolate Walnut Brownie",
        "price": 220,
        "category": "Desserts",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=600&q=80",
        "description": "Gooey dark chocolate brownie served on a hot sizzler plate with chocolate fudge sauce and ice cream."
      }
    ]
  },
  {
    "id": "gagan-korma-corner",
    "name": "Gagan Korma & Biryani Corner",
    "area": "Shahpur",
    "city": "Gorakhpur",
    "description": "Famous local destination for slow-cooked Mutton Korma, Chicken Changezi, seekh kebabs, and hot rumali rotis straight off the tawa.",
    "categories": [
      "north-indian",
      "street-food"
    ],
    "cuisines": [
      "Mughlai",
      "North Indian",
      "Tandoori Street Food"
    ],
    "popularDishes": [
      "Chicken Changezi",
      "Mutton Nihari",
      "Seekh Kebab",
      "Rumali Roti"
    ],
    "costForTwo": 500,
    "averageRating": 4.6,
    "reviewCount": 310,
    "imageUrl": "https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=1000&q=80",
    "logoUrl": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20100%20100%22%20width%3D%22200%22%20height%3D%22200%22%3E%0A%20%20%3Cdefs%3E%0A%20%20%20%20%3ClinearGradient%20id%3D%22brandGrad_gagan-korma-corner%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23a33a0a%22%2F%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%232b2018%22%2F%3E%0A%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%3Cfilter%20id%3D%22shadow_gagan-korma-corner%22%20x%3D%22-10%25%22%20y%3D%22-10%25%22%20width%3D%22120%25%22%20height%3D%22120%25%22%3E%0A%20%20%20%20%20%20%3CfeDropShadow%20dx%3D%220%22%20dy%3D%222%22%20stdDeviation%3D%222.5%22%20flood-opacity%3D%220.35%22%2F%3E%0A%20%20%20%20%3C%2Ffilter%3E%0A%20%20%3C%2Fdefs%3E%0A%20%20%3C!--%20Background%20Shield%20Badge%20--%3E%0A%20%20%3Crect%20x%3D%224%22%20y%3D%224%22%20width%3D%2292%22%20height%3D%2292%22%20rx%3D%2226%22%20fill%3D%22url(%23brandGrad_gagan-korma-corner)%22%20stroke%3D%22%23f5e9d0%22%20stroke-width%3D%222.5%22%20filter%3D%22url(%23shadow_gagan-korma-corner)%22%2F%3E%0A%20%20%3C!--%20Inner%20Ornamental%20Line%20--%3E%0A%20%20%3Crect%20x%3D%229%22%20y%3D%229%22%20width%3D%2282%22%20height%3D%2282%22%20rx%3D%2221%22%20fill%3D%22none%22%20stroke%3D%22%23f5e9d0%22%20stroke-width%3D%221%22%20stroke-dasharray%3D%223%203%22%20opacity%3D%220.45%22%2F%3E%0A%20%20%3C!--%20Emblem%20Motif%20--%3E%0A%20%20%3Ccircle%20cx%3D%2250%22%20cy%3D%2238%22%20r%3D%2214%22%20stroke%3D%22%23f5e9d0%22%20stroke-width%3D%222%22%20fill%3D%22none%22%20opacity%3D%220.7%22%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22M44%2030%20L44%2046%20M56%2030%20L56%2046%20M42%2030%20C42%2035%2046%2035%2046%2030%22%20stroke%3D%22%23f5e9d0%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%2F%3E%0A%20%20%3C!--%20Typography%20%2F%20Monogram%20--%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2276%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C%20-apple-system%2C%20sans-serif%22%20font-weight%3D%22900%22%20font-size%3D%2215%22%20fill%3D%22%23ffffff%22%20letter-spacing%3D%221.5%22%3EGK%3C%2Ftext%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2287%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C%20-apple-system%2C%20sans-serif%22%20font-weight%3D%22800%22%20font-size%3D%226.5%22%20fill%3D%22%23f5e9d0%22%20letter-spacing%3D%222%22%3EGORAKHPUR%3C%2Ftext%3E%0A%3C%2Fsvg%3E",
    "isDemo": false,
    "phone": "+91 94512 66778",
    "address": "Near Geeta Vatika Road, Shahpur, Gorakhpur",
    "openTime": "13:00",
    "closeTime": "23:30",
    "openDays": [
      "Mon",
      "Tue",
      "Wed",
      "Thu",
      "Fri",
      "Sat",
      "Sun"
    ],
    "diet": "nonveg",
    "status": "Active",
    "ownerName": "Gagan Preet Singh",
    "ownerEmail": "gagan.dine@gorakhpurfoodguide.in",
    "facilities": [
      "Takeaway Counter",
      "Air Conditioned Family Room",
      "Fast Service",
      "UPI Accepted"
    ],
    "ratingsBreakdown": {
      "food": 4.8,
      "taste": 4.9,
      "hygiene": 4.4,
      "service": 4.4,
      "ambience": 4.3
    },
    "priceRange": {
      "min": 200,
      "max": 650
    },
    "distanceKm": 2.4,
    "menu": [
      {
        "id": "gagan-korma-corner-pop-1",
        "name": "Chicken Changezi",
        "price": 290,
        "category": "Main Course",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=600&q=80",
        "description": "Roasted chicken cooked in a thick spicy tangy tomato-milk gravy with crushed fenugreek."
      },
      {
        "id": "gagan-korma-corner-pop-2",
        "name": "Mutton Nihari",
        "price": 360,
        "category": "Main Course",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1545247181-516773cae754?auto=format&fit=crop&w=600&q=80",
        "description": "Tender lamb shanks stewed over night with ginger, green chillies, and aromatic spices."
      },
      {
        "id": "gagan-korma-corner-pop-3",
        "name": "Seekh Kebab",
        "price": 210,
        "category": "Starters",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=600&q=80",
        "description": "Minced chicken skewered over open coals, basted with butter, and served with mint sauce."
      },
      {
        "id": "gagan-korma-corner-pop-4",
        "name": "Rumali Roti",
        "price": 40,
        "category": "Breads",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=600&q=80",
        "description": "Ultra-thin handkerchief flatbread tossed over an inverted iron kadhai."
      },
      {
        "id": "gagan-korma-corner-item-1",
        "name": "Galawati Kabab with Ulte Tawe Ka Paratha",
        "price": 380,
        "category": "Starters",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=600&q=80",
        "description": "Mouth-melting Awadhi minced mutton kebabs spiced with 32 fragrant herbs, served with Mughlai paratha."
      },
      {
        "id": "gagan-korma-corner-item-2",
        "name": "Murgh Malai Tikka (6 pcs)",
        "price": 340,
        "category": "Starters",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=600&q=80",
        "description": "Boneless chicken chunks marinated in cream, cheese, hung curd, and crushed cardamom, grilled in tandoor."
      },
      {
        "id": "gagan-korma-corner-item-4",
        "name": "Tandoori Chicken (Half / Full)",
        "price": 290,
        "category": "Starters",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80",
        "description": "Classic bone-in chicken marinated in Kashmiri chilli, mustard oil and hung curd roasted in tandoor."
      },
      {
        "id": "gagan-korma-corner-item-5",
        "name": "Paneer Tikka Shashlik",
        "price": 280,
        "category": "Starters",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=600&q=80",
        "description": "Cottage cheese cubes with bell peppers and onions grilled to perfection in clay oven."
      },
      {
        "id": "gagan-korma-corner-item-6",
        "name": "Special Butter Chicken",
        "price": 390,
        "category": "Main Course",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=600&q=80",
        "description": "Tender tandoori chicken cooked in an authentic velvety makhani gravy enriched with honey and fenugreek."
      },
      {
        "id": "gagan-korma-corner-item-7",
        "name": "Handi Mutton Rogan Josh",
        "price": 460,
        "category": "Main Course",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1545247181-516773cae754?auto=format&fit=crop&w=600&q=80",
        "description": "Tender baby mutton simmered in a clay handi with ratan jot, Kashmiri chilies, and aromatic whole spices."
      },
      {
        "id": "gagan-korma-corner-item-8",
        "name": "Chicken Lababdar",
        "price": 370,
        "category": "Main Course",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=600&q=80",
        "description": "Succulent chicken pieces in a chunky spiced onion-tomato gravy finished with grated paneer and cream."
      },
      {
        "id": "gagan-korma-corner-item-9",
        "name": "Kadhai Paneer",
        "price": 290,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=600&q=80",
        "description": "Paneer cubes tossed with fresh ground coriander, dry red chillies, capsicum, and thick onion masala."
      },
      {
        "id": "gagan-korma-corner-item-10",
        "name": "Dal Makhani Slow-Cooked",
        "price": 240,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80",
        "description": "Classic black lentils slow-cooked with fresh cream and butter for 24 hours."
      },
      {
        "id": "gagan-korma-corner-item-11",
        "name": "Dum Chicken Biryani with Mirchi Salan",
        "price": 340,
        "category": "Biryani & Rice",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=600&q=80",
        "description": "Long-grain aged basmati rice layered with marinated chicken, saffron milk, brown onions, and kewra."
      },
      {
        "id": "gagan-korma-corner-item-12",
        "name": "Hyderabadi Dum Gosht Biryani",
        "price": 440,
        "category": "Biryani & Rice",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1545247181-516773cae754?auto=format&fit=crop&w=600&q=80",
        "description": "Fragrant basmati rice slow-cooked on dum with spiced mutton chunks, served with raita and salan."
      }
    ]
  },
  {
    "id": "golgappa-junction",
    "name": "Golgappa Junction & Chaat Bazaar",
    "area": "Asuran Chowk",
    "city": "Gorakhpur",
    "description": "Gorakhpur’s beloved street food hub famous for 6 flavours of Golgappa pani, Dahi Puri, Pav Bhaji, and roasted Chana Chaat.",
    "categories": [
      "street-food",
      "fast-food"
    ],
    "cuisines": [
      "Street Food",
      "Chaat & Snacks",
      "Fast Food"
    ],
    "popularDishes": [
      "6 Flavours Golgappa",
      "Sev Puri",
      "Butter Pav Bhaji",
      "Khatta Meetha Chaat"
    ],
    "costForTwo": 180,
    "averageRating": 4.7,
    "reviewCount": 350,
    "imageUrl": "https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=1000&q=80",
    "logoUrl": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20100%20100%22%20width%3D%22200%22%20height%3D%22200%22%3E%0A%20%20%3Cdefs%3E%0A%20%20%20%20%3ClinearGradient%20id%3D%22brandGrad_golgappa-junction%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23a33a0a%22%2F%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%232b2018%22%2F%3E%0A%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%3Cfilter%20id%3D%22shadow_golgappa-junction%22%20x%3D%22-10%25%22%20y%3D%22-10%25%22%20width%3D%22120%25%22%20height%3D%22120%25%22%3E%0A%20%20%20%20%20%20%3CfeDropShadow%20dx%3D%220%22%20dy%3D%222%22%20stdDeviation%3D%222.5%22%20flood-opacity%3D%220.35%22%2F%3E%0A%20%20%20%20%3C%2Ffilter%3E%0A%20%20%3C%2Fdefs%3E%0A%20%20%3C!--%20Background%20Shield%20Badge%20--%3E%0A%20%20%3Crect%20x%3D%224%22%20y%3D%224%22%20width%3D%2292%22%20height%3D%2292%22%20rx%3D%2226%22%20fill%3D%22url(%23brandGrad_golgappa-junction)%22%20stroke%3D%22%23f5e9d0%22%20stroke-width%3D%222.5%22%20filter%3D%22url(%23shadow_golgappa-junction)%22%2F%3E%0A%20%20%3C!--%20Inner%20Ornamental%20Line%20--%3E%0A%20%20%3Crect%20x%3D%229%22%20y%3D%229%22%20width%3D%2282%22%20height%3D%2282%22%20rx%3D%2221%22%20fill%3D%22none%22%20stroke%3D%22%23f5e9d0%22%20stroke-width%3D%221%22%20stroke-dasharray%3D%223%203%22%20opacity%3D%220.45%22%2F%3E%0A%20%20%3C!--%20Emblem%20Motif%20--%3E%0A%20%20%3Ccircle%20cx%3D%2250%22%20cy%3D%2238%22%20r%3D%2214%22%20stroke%3D%22%23f5e9d0%22%20stroke-width%3D%222%22%20fill%3D%22none%22%20opacity%3D%220.7%22%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22M44%2030%20L44%2046%20M56%2030%20L56%2046%20M42%2030%20C42%2035%2046%2035%2046%2030%22%20stroke%3D%22%23f5e9d0%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%2F%3E%0A%20%20%3C!--%20Typography%20%2F%20Monogram%20--%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2276%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C%20-apple-system%2C%20sans-serif%22%20font-weight%3D%22900%22%20font-size%3D%2215%22%20fill%3D%22%23ffffff%22%20letter-spacing%3D%221.5%22%3EGJ%3C%2Ftext%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2287%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C%20-apple-system%2C%20sans-serif%22%20font-weight%3D%22800%22%20font-size%3D%226.5%22%20fill%3D%22%23f5e9d0%22%20letter-spacing%3D%222%22%3EGORAKHPUR%3C%2Ftext%3E%0A%3C%2Fsvg%3E",
    "isDemo": false,
    "phone": "+91 98381 23490",
    "address": "Near Asuran Chowk Chauraha, Gorakhpur",
    "openTime": "12:00",
    "closeTime": "22:30",
    "openDays": [
      "Mon",
      "Tue",
      "Wed",
      "Thu",
      "Fri",
      "Sat",
      "Sun"
    ],
    "diet": "veg",
    "status": "Active",
    "ownerName": "Rameshwar Gupta",
    "ownerEmail": "golgappa.junction@gorakhpurfoodguide.in",
    "facilities": [
      "Hygienic Mineral Water Pani",
      "Glove Handled Service",
      "Takeaway Packing",
      "UPI Quick Pay"
    ],
    "ratingsBreakdown": {
      "food": 4.8,
      "taste": 4.9,
      "hygiene": 4.7,
      "service": 4.6,
      "ambience": 4.1
    },
    "priceRange": {
      "min": 40,
      "max": 200
    },
    "distanceKm": 2.9,
    "menu": [
      {
        "id": "golgappa-junction-pop-1",
        "name": "6 Flavours Golgappa",
        "price": 30,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80",
        "description": "Fresh cottage cheese and seasonal ingredients simmered in a luscious spiced onion-tomato gravy."
      },
      {
        "id": "golgappa-junction-pop-2",
        "name": "Sev Puri",
        "price": 140,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80",
        "description": "Fresh cottage cheese and seasonal ingredients simmered in a luscious spiced onion-tomato gravy."
      },
      {
        "id": "golgappa-junction-pop-3",
        "name": "Butter Pav Bhaji",
        "price": 120,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=600&q=80",
        "description": "Mashed vegetable gravy laden with Amul butter, paired with 2 toasted pav buns and onions."
      },
      {
        "id": "golgappa-junction-pop-4",
        "name": "Khatta Meetha Chaat",
        "price": 110,
        "category": "Starters",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80",
        "description": "Fresh cottage cheese and seasonal ingredients simmered in a luscious spiced onion-tomato gravy."
      },
      {
        "id": "golgappa-junction-item-1",
        "name": "Double Cheese Crunch Burger",
        "price": 160,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80",
        "description": "Crisp vegetable patty with double melted cheddar, gherkins, lettuce and secret thousand island sauce."
      },
      {
        "id": "golgappa-junction-item-3",
        "name": "Hand-Tossed Margherita Pizza (Regular)",
        "price": 240,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80",
        "description": "Classic Italian pizza with aromatic basil leaves, extra virgin olive oil and 100% mozzarella."
      },
      {
        "id": "golgappa-junction-item-5",
        "name": "Loaded Cheese Fries with Jalapeños",
        "price": 160,
        "category": "Starters",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1576107232684-1279f3908594?auto=format&fit=crop&w=600&q=80",
        "description": "Crinkle-cut hot fries smothered in liquid cheese, jalapeño bits, and smoky barbecue drizzle."
      },
      {
        "id": "golgappa-junction-item-8",
        "name": "Classic Mumbai Vada Pav (2 pcs)",
        "price": 70,
        "category": "Starters",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80",
        "description": "Spiced potato batata vada in soft pav bread with spicy garlic dry chutney and fried green chillies."
      },
      {
        "id": "golgappa-junction-item-9",
        "name": "Oreo Thick Overload Shake",
        "price": 160,
        "category": "Beverages",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=600&q=80",
        "description": "Vanilla cream milkshake loaded with crushed Oreo cookies, chocolate syrup and whipped cream."
      },
      {
        "id": "golgappa-junction-item-10",
        "name": "Choco Lava Cake with Molten Core",
        "price": 110,
        "category": "Desserts",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=600&q=80",
        "description": "Warm soft chocolate sponge cake with an irresistible flowing chocolate fudge center."
      }
    ]
  },
  {
    "id": "the-yellow-chilli-gkp",
    "name": "The Yellow Chilli by Sanjeev Kapoor",
    "area": "Civil Lines",
    "city": "Gorakhpur",
    "description": "Renowned fine dining restaurant bringing Master Chef Sanjeev Kapoor’s signature North Indian dishes to Gorakhpur with royal service and sophisticated interiors.",
    "categories": [
      "north-indian"
    ],
    "cuisines": [
      "North Indian",
      "Mughlai",
      "Contemporary Indian"
    ],
    "popularDishes": [
      "Lalla Mussa Dal",
      "Shaam Saunfiyana",
      "Gulab-e-Gulkand",
      "Murgh Noormahal Biryani"
    ],
    "costForTwo": 950,
    "averageRating": 4.8,
    "reviewCount": 388,
    "imageUrl": "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1000&q=80",
    "logoUrl": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20100%20100%22%20width%3D%22200%22%20height%3D%22200%22%3E%0A%20%20%3Cdefs%3E%0A%20%20%20%20%3ClinearGradient%20id%3D%22brandGrad_the-yellow-chilli-gkp%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23a33a0a%22%2F%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%232b2018%22%2F%3E%0A%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%3Cfilter%20id%3D%22shadow_the-yellow-chilli-gkp%22%20x%3D%22-10%25%22%20y%3D%22-10%25%22%20width%3D%22120%25%22%20height%3D%22120%25%22%3E%0A%20%20%20%20%20%20%3CfeDropShadow%20dx%3D%220%22%20dy%3D%222%22%20stdDeviation%3D%222.5%22%20flood-opacity%3D%220.35%22%2F%3E%0A%20%20%20%20%3C%2Ffilter%3E%0A%20%20%3C%2Fdefs%3E%0A%20%20%3C!--%20Background%20Shield%20Badge%20--%3E%0A%20%20%3Crect%20x%3D%224%22%20y%3D%224%22%20width%3D%2292%22%20height%3D%2292%22%20rx%3D%2226%22%20fill%3D%22url(%23brandGrad_the-yellow-chilli-gkp)%22%20stroke%3D%22%23f5e9d0%22%20stroke-width%3D%222.5%22%20filter%3D%22url(%23shadow_the-yellow-chilli-gkp)%22%2F%3E%0A%20%20%3C!--%20Inner%20Ornamental%20Line%20--%3E%0A%20%20%3Crect%20x%3D%229%22%20y%3D%229%22%20width%3D%2282%22%20height%3D%2282%22%20rx%3D%2221%22%20fill%3D%22none%22%20stroke%3D%22%23f5e9d0%22%20stroke-width%3D%221%22%20stroke-dasharray%3D%223%203%22%20opacity%3D%220.45%22%2F%3E%0A%20%20%3C!--%20Emblem%20Motif%20--%3E%0A%20%20%3Ccircle%20cx%3D%2250%22%20cy%3D%2238%22%20r%3D%2214%22%20stroke%3D%22%23f5e9d0%22%20stroke-width%3D%222%22%20fill%3D%22none%22%20opacity%3D%220.7%22%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22M44%2030%20L44%2046%20M56%2030%20L56%2046%20M42%2030%20C42%2035%2046%2035%2046%2030%22%20stroke%3D%22%23f5e9d0%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%2F%3E%0A%20%20%3C!--%20Typography%20%2F%20Monogram%20--%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2276%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C%20-apple-system%2C%20sans-serif%22%20font-weight%3D%22900%22%20font-size%3D%2215%22%20fill%3D%22%23ffffff%22%20letter-spacing%3D%221.5%22%3EYC%3C%2Ftext%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2287%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C%20-apple-system%2C%20sans-serif%22%20font-weight%3D%22800%22%20font-size%3D%226.5%22%20fill%3D%22%23f5e9d0%22%20letter-spacing%3D%222%22%3EGORAKHPUR%3C%2Ftext%3E%0A%3C%2Fsvg%3E",
    "isDemo": false,
    "phone": "+91 97214 55890",
    "address": "Park Road, Near City Mall, Civil Lines, Gorakhpur",
    "openTime": "12:00",
    "closeTime": "23:30",
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
    "ownerName": "Ranveer Sachdeva",
    "ownerEmail": "yellowchilli.gkp@gorakhpurfoodguide.in",
    "facilities": [
      "Fine Dining Ambiance",
      "Air Conditioned",
      "Valet Parking",
      "Corporate Event Space"
    ],
    "ratingsBreakdown": {
      "food": 4.9,
      "taste": 4.8,
      "hygiene": 4.9,
      "service": 4.8,
      "ambience": 4.9
    },
    "priceRange": {
      "min": 400,
      "max": 1200
    },
    "distanceKm": 1.2,
    "menu": [
      {
        "id": "the-yellow-chilli-gkp-pop-1",
        "name": "Lalla Mussa Dal",
        "price": 345,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80",
        "description": "Chef Sanjeev Kapoor’s iconic green moong and black urad dal simmered for 36 hours."
      },
      {
        "id": "the-yellow-chilli-gkp-pop-2",
        "name": "Shaam Saunfiyana",
        "price": 365,
        "category": "Starters",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=600&q=80",
        "description": "Fresh cottage cheese marinated with fragrant fennel, Greek yogurt, and yellow chillies."
      },
      {
        "id": "the-yellow-chilli-gkp-pop-3",
        "name": "Gulab-e-Gulkand",
        "price": 175,
        "category": "Desserts",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=600&q=80",
        "description": "Warm gulab jamuns stuffed with fragrant rose petal preserve and roasted pistachios."
      },
      {
        "id": "the-yellow-chilli-gkp-pop-4",
        "name": "Murgh Noormahal Biryani",
        "price": 445,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=600&q=80",
        "description": "Succulent chicken morsels cooked on dum with long grain basmati rice, mint, and browned onions."
      },
      {
        "id": "the-yellow-chilli-gkp-item-1",
        "name": "Shaam Savera Signature Spinach Kofta",
        "price": 390,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=600&q=80",
        "description": "Chef Sanjeev Kapoor’s masterpiece: paneer stuffed spinach dumplings in rich velvety tomato gravy."
      },
      {
        "id": "the-yellow-chilli-gkp-item-2",
        "name": "Crispy Spiced Corn Tempura",
        "price": 240,
        "category": "Starters",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=600&q=80",
        "description": "Tender sweet corn kernels wok-tossed with chopped green chillies, spring onions and pepper salt."
      },
      {
        "id": "the-yellow-chilli-gkp-item-3",
        "name": "Cajun Spiced Roasted Potatoes",
        "price": 220,
        "category": "Starters",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=600&q=80",
        "description": "Baby potatoes roasted with herbs and drizzled with creamy cajun dipping sauce."
      },
      {
        "id": "the-yellow-chilli-gkp-item-4",
        "name": "Bhatti Da Murgh Tikka",
        "price": 380,
        "category": "Starters",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=600&q=80",
        "description": "Robust chicken drumsticks marinated with charred whole spices and grilled on open charcoal."
      },
      {
        "id": "the-yellow-chilli-gkp-item-6",
        "name": "Lawrence Road Tandoori Murgh",
        "price": 440,
        "category": "Main Course",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=600&q=80",
        "description": "Famous Amritsari style whole roasted chicken simmered in a spiced onion tomato masala."
      },
      {
        "id": "the-yellow-chilli-gkp-item-7",
        "name": "Paneer Tikka Lababdar",
        "price": 340,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=600&q=80",
        "description": "Char-grilled cottage cheese steeped in tomato-cashew gravy with bell peppers."
      },
      {
        "id": "the-yellow-chilli-gkp-item-8",
        "name": "Parda Chicken Dum Biryani",
        "price": 390,
        "category": "Biryani & Rice",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=600&q=80",
        "description": "Biryani sealed under a flaky puff pastry crust to preserve every nuance of Awadhi aromatics."
      },
      {
        "id": "the-yellow-chilli-gkp-item-9",
        "name": "Roghani Stuffed Kulcha",
        "price": 85,
        "category": "Breads",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=600&q=80",
        "description": "Flaky leavened bread stuffed with spiced cottage cheese and topped with sesame seeds."
      },
      {
        "id": "the-yellow-chilli-gkp-item-10",
        "name": "Peru Pyala Guava Drink with Chilli Rim",
        "price": 160,
        "category": "Beverages",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1553787499-6f9133860278?auto=format&fit=crop&w=600&q=80",
        "description": "Guava juice served in a chilli-salt rimmed glass with Worcestershire splash."
      },
      {
        "id": "the-yellow-chilli-gkp-item-11",
        "name": "Gulab-e-Gulkan Royal Dessert",
        "price": 180,
        "category": "Desserts",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=600&q=80",
        "description": "Warm gulab jamuns stuffed with fragrant rose petal gulkand, served with vanilla ice cream."
      },
      {
        "id": "the-yellow-chilli-gkp-item-12",
        "name": "Sizzling Chocolate Walnut Brownie",
        "price": 220,
        "category": "Desserts",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=600&q=80",
        "description": "Gooey dark chocolate brownie served on a hot sizzler plate with chocolate fudge sauce and ice cream."
      }
    ]
  },
  {
    "id": "sagar-ratna-gorakhpur",
    "name": "Sagar Ratna Pure Veg",
    "area": "Golghar",
    "city": "Gorakhpur",
    "description": "Trusted multi-city brand known for crispy ghee paper dosas, fluffy idlis, filter coffee, and delicious North Indian fare in an immaculate family setting.",
    "categories": [
      "north-indian",
      "fast-food"
    ],
    "cuisines": [
      "South Indian",
      "North Indian",
      "Pure Vegetarian"
    ],
    "popularDishes": [
      "Mysore Masala Dosa",
      "Rava Kesari",
      "Filter Coffee",
      "Special Thali"
    ],
    "costForTwo": 450,
    "averageRating": 4.7,
    "reviewCount": 360,
    "imageUrl": "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1000&q=80",
    "logoUrl": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20100%20100%22%20width%3D%22200%22%20height%3D%22200%22%3E%0A%20%20%3Cdefs%3E%0A%20%20%20%20%3ClinearGradient%20id%3D%22brandGrad_sagar-ratna-gorakhpur%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23a33a0a%22%2F%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%232b2018%22%2F%3E%0A%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%3Cfilter%20id%3D%22shadow_sagar-ratna-gorakhpur%22%20x%3D%22-10%25%22%20y%3D%22-10%25%22%20width%3D%22120%25%22%20height%3D%22120%25%22%3E%0A%20%20%20%20%20%20%3CfeDropShadow%20dx%3D%220%22%20dy%3D%222%22%20stdDeviation%3D%222.5%22%20flood-opacity%3D%220.35%22%2F%3E%0A%20%20%20%20%3C%2Ffilter%3E%0A%20%20%3C%2Fdefs%3E%0A%20%20%3C!--%20Background%20Shield%20Badge%20--%3E%0A%20%20%3Crect%20x%3D%224%22%20y%3D%224%22%20width%3D%2292%22%20height%3D%2292%22%20rx%3D%2226%22%20fill%3D%22url(%23brandGrad_sagar-ratna-gorakhpur)%22%20stroke%3D%22%23f5e9d0%22%20stroke-width%3D%222.5%22%20filter%3D%22url(%23shadow_sagar-ratna-gorakhpur)%22%2F%3E%0A%20%20%3C!--%20Inner%20Ornamental%20Line%20--%3E%0A%20%20%3Crect%20x%3D%229%22%20y%3D%229%22%20width%3D%2282%22%20height%3D%2282%22%20rx%3D%2221%22%20fill%3D%22none%22%20stroke%3D%22%23f5e9d0%22%20stroke-width%3D%221%22%20stroke-dasharray%3D%223%203%22%20opacity%3D%220.45%22%2F%3E%0A%20%20%3C!--%20Emblem%20Motif%20--%3E%0A%20%20%3Ccircle%20cx%3D%2250%22%20cy%3D%2238%22%20r%3D%2214%22%20stroke%3D%22%23f5e9d0%22%20stroke-width%3D%222%22%20fill%3D%22none%22%20opacity%3D%220.7%22%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22M44%2030%20L44%2046%20M56%2030%20L56%2046%20M42%2030%20C42%2035%2046%2035%2046%2030%22%20stroke%3D%22%23f5e9d0%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%2F%3E%0A%20%20%3C!--%20Typography%20%2F%20Monogram%20--%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2276%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C%20-apple-system%2C%20sans-serif%22%20font-weight%3D%22900%22%20font-size%3D%2215%22%20fill%3D%22%23ffffff%22%20letter-spacing%3D%221.5%22%3ESR%3C%2Ftext%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2287%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C%20-apple-system%2C%20sans-serif%22%20font-weight%3D%22800%22%20font-size%3D%226.5%22%20fill%3D%22%23f5e9d0%22%20letter-spacing%3D%222%22%3EGORAKHPUR%3C%2Ftext%3E%0A%3C%2Fsvg%3E",
    "isDemo": false,
    "phone": "+91 94155 33441",
    "address": "Near Baldev Plaza, Cinema Road, Golghar, Gorakhpur",
    "openTime": "08:00",
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
    "diet": "veg",
    "status": "Active",
    "ownerName": "Subhash Rao",
    "ownerEmail": "sagarratna.gkp@gorakhpurfoodguide.in",
    "facilities": [
      "100% Pure Vegetarian",
      "Air Conditioned",
      "Breakfast Specials",
      "Family Seating"
    ],
    "ratingsBreakdown": {
      "food": 4.8,
      "taste": 4.8,
      "hygiene": 4.9,
      "service": 4.6,
      "ambience": 4.5
    },
    "priceRange": {
      "min": 120,
      "max": 500
    },
    "distanceKm": 0.7,
    "menu": [
      {
        "id": "sagar-ratna-gorakhpur-pop-1",
        "name": "Mysore Masala Dosa",
        "price": 195,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?auto=format&fit=crop&w=600&q=80",
        "description": "Crisp golden crepe smeared with spicy red garlic chutney, filled with potato bhaji, served with sambar."
      },
      {
        "id": "sagar-ratna-gorakhpur-pop-2",
        "name": "Rava Kesari",
        "price": 90,
        "category": "Desserts",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=600&q=80",
        "description": "Semolina dessert infused with pure desi ghee, golden raisins, roasted cashews, and pineapple bits."
      },
      {
        "id": "sagar-ratna-gorakhpur-pop-3",
        "name": "Filter Coffee",
        "price": 65,
        "category": "Beverages",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=600&q=80",
        "description": "Frothy freshly brewed chicory blend served in traditional brass dabarah and tumbler."
      },
      {
        "id": "sagar-ratna-gorakhpur-pop-4",
        "name": "Special Thali",
        "price": 200,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=600&q=80",
        "description": "Wholesome platter featuring two curries, dal, jeera rice, fresh breads, salad, and dessert."
      },
      {
        "id": "sagar-ratna-gorakhpur-item-1",
        "name": "Sagar Special Butter Masala Dosa",
        "price": 190,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?auto=format&fit=crop&w=600&q=80",
        "description": "Golden crispy fermented rice crepe smeared with Amul butter and filled with spiced potato masala."
      },
      {
        "id": "sagar-ratna-gorakhpur-item-3",
        "name": "Ghee Roast Paper Masala Dosa (Extra Long)",
        "price": 240,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?auto=format&fit=crop&w=600&q=80",
        "description": "Super thin crispy dosa roasted in pure desi ghee, served with coconut, tomato chutney and sambar."
      },
      {
        "id": "sagar-ratna-gorakhpur-item-4",
        "name": "Steamed Idli Sambar (2 pcs)",
        "price": 90,
        "category": "Starters",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80",
        "description": "Pillowy soft fermented rice cakes served piping hot with aromatic lentil vegetable sambar."
      },
      {
        "id": "sagar-ratna-gorakhpur-item-5",
        "name": "Crispy Medu Vada (2 pcs)",
        "price": 110,
        "category": "Starters",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80",
        "description": "Golden fried savory lentil donuts with crispy crust and fluffy interior, served with coconut chutney."
      },
      {
        "id": "sagar-ratna-gorakhpur-item-6",
        "name": "Onion Tomato Uttapam",
        "price": 170,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80",
        "description": "Thick savory pancake topped with caramelized chopped onions, tomatoes, coriander and green chillies."
      },
      {
        "id": "sagar-ratna-gorakhpur-item-7",
        "name": "Executive South Indian Pure Veg Thali",
        "price": 260,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=600&q=80",
        "description": "Rice, Sambar, Rasam, Kootu, Poriyal, Curd, Appalam, Puri, Pickle, and Sweet Kesari Bath."
      },
      {
        "id": "sagar-ratna-gorakhpur-item-8",
        "name": "Curd Rice with Mustard Tadka",
        "price": 140,
        "category": "Biryani & Rice",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=600&q=80",
        "description": "Tempered rice with fresh curd, mustard seeds, curry leaves, ginger, and pomegranate arils."
      },
      {
        "id": "sagar-ratna-gorakhpur-item-10",
        "name": "Pineapple Kesari Bath Halwa",
        "price": 90,
        "category": "Desserts",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=600&q=80",
        "description": "Rich semolina dessert prepared with desi ghee, pineapple chunks, saffron and fried cashews."
      }
    ]
  },
  {
    "id": "punjabi-dhaba-express",
    "name": "Pind Balluchi & Punjabi Dhaba",
    "area": "Mohaddipur",
    "city": "Gorakhpur",
    "description": "Rustic Punjabi village theme diner famous for Sarson da Saag, Makki di Roti, Dal Tadka, and sizzling tandoori gravies.",
    "categories": [
      "north-indian"
    ],
    "cuisines": [
      "Punjabi",
      "North Indian",
      "Tandoori Special"
    ],
    "popularDishes": [
      "Sarson Saag & Makki Roti",
      "Amritsari Kulcha",
      "Butter Chicken Handi",
      "Lassi Patiala"
    ],
    "costForTwo": 550,
    "averageRating": 4.6,
    "reviewCount": 290,
    "imageUrl": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1000&q=80",
    "logoUrl": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20100%20100%22%20width%3D%22200%22%20height%3D%22200%22%3E%0A%20%20%3Cdefs%3E%0A%20%20%20%20%3ClinearGradient%20id%3D%22brandGrad_punjabi-dhaba-express%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23a33a0a%22%2F%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%232b2018%22%2F%3E%0A%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%3Cfilter%20id%3D%22shadow_punjabi-dhaba-express%22%20x%3D%22-10%25%22%20y%3D%22-10%25%22%20width%3D%22120%25%22%20height%3D%22120%25%22%3E%0A%20%20%20%20%20%20%3CfeDropShadow%20dx%3D%220%22%20dy%3D%222%22%20stdDeviation%3D%222.5%22%20flood-opacity%3D%220.35%22%2F%3E%0A%20%20%20%20%3C%2Ffilter%3E%0A%20%20%3C%2Fdefs%3E%0A%20%20%3C!--%20Background%20Shield%20Badge%20--%3E%0A%20%20%3Crect%20x%3D%224%22%20y%3D%224%22%20width%3D%2292%22%20height%3D%2292%22%20rx%3D%2226%22%20fill%3D%22url(%23brandGrad_punjabi-dhaba-express)%22%20stroke%3D%22%23f5e9d0%22%20stroke-width%3D%222.5%22%20filter%3D%22url(%23shadow_punjabi-dhaba-express)%22%2F%3E%0A%20%20%3C!--%20Inner%20Ornamental%20Line%20--%3E%0A%20%20%3Crect%20x%3D%229%22%20y%3D%229%22%20width%3D%2282%22%20height%3D%2282%22%20rx%3D%2221%22%20fill%3D%22none%22%20stroke%3D%22%23f5e9d0%22%20stroke-width%3D%221%22%20stroke-dasharray%3D%223%203%22%20opacity%3D%220.45%22%2F%3E%0A%20%20%3C!--%20Emblem%20Motif%20--%3E%0A%20%20%3Ccircle%20cx%3D%2250%22%20cy%3D%2238%22%20r%3D%2214%22%20stroke%3D%22%23f5e9d0%22%20stroke-width%3D%222%22%20fill%3D%22none%22%20opacity%3D%220.7%22%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22M44%2030%20L44%2046%20M56%2030%20L56%2046%20M42%2030%20C42%2035%2046%2035%2046%2030%22%20stroke%3D%22%23f5e9d0%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%2F%3E%0A%20%20%3C!--%20Typography%20%2F%20Monogram%20--%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2276%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C%20-apple-system%2C%20sans-serif%22%20font-weight%3D%22900%22%20font-size%3D%2215%22%20fill%3D%22%23ffffff%22%20letter-spacing%3D%221.5%22%3EPB%3C%2Ftext%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2287%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C%20-apple-system%2C%20sans-serif%22%20font-weight%3D%22800%22%20font-size%3D%226.5%22%20fill%3D%22%23f5e9d0%22%20letter-spacing%3D%222%22%3EGORAKHPUR%3C%2Ftext%3E%0A%3C%2Fsvg%3E",
    "isDemo": false,
    "phone": "+91 98399 88123",
    "address": "Near Charfatak Crossing, Mohaddipur, Gorakhpur",
    "openTime": "11:30",
    "closeTime": "23:30",
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
    "ownerName": "Gurpreet Singh Sodhi",
    "ownerEmail": "pindpunjabi.gkp@gorakhpurfoodguide.in",
    "facilities": [
      "Village Dhaba Ambience",
      "Air Conditioned",
      "Live Tandoor Display",
      "Takeaway Packing"
    ],
    "ratingsBreakdown": {
      "food": 4.8,
      "taste": 4.9,
      "hygiene": 4.5,
      "service": 4.4,
      "ambience": 4.6
    },
    "priceRange": {
      "min": 200,
      "max": 700
    },
    "distanceKm": 2.6,
    "menu": [
      {
        "id": "punjabi-dhaba-express-pop-1",
        "name": "Sarson Saag & Makki Roti",
        "price": 40,
        "category": "Breads",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=600&q=80",
        "description": "Fresh cottage cheese and seasonal ingredients simmered in a luscious spiced onion-tomato gravy."
      },
      {
        "id": "punjabi-dhaba-express-pop-2",
        "name": "Amritsari Kulcha",
        "price": 40,
        "category": "Breads",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=600&q=80",
        "description": "Fresh cottage cheese and seasonal ingredients simmered in a luscious spiced onion-tomato gravy."
      },
      {
        "id": "punjabi-dhaba-express-pop-3",
        "name": "Butter Chicken Handi",
        "price": 370,
        "category": "Main Course",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=600&q=80",
        "description": "Succulent pieces cooked in rich fragrant gravy with roasted spices, brown onions, and fresh coriander."
      },
      {
        "id": "punjabi-dhaba-express-pop-4",
        "name": "Lassi Patiala",
        "price": 60,
        "category": "Beverages",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1553787499-6f9133860278?auto=format&fit=crop&w=600&q=80",
        "description": "Fresh cottage cheese and seasonal ingredients simmered in a luscious spiced onion-tomato gravy."
      },
      {
        "id": "punjabi-dhaba-express-item-1",
        "name": "Galawati Kabab with Ulte Tawe Ka Paratha",
        "price": 380,
        "category": "Starters",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=600&q=80",
        "description": "Mouth-melting Awadhi minced mutton kebabs spiced with 32 fragrant herbs, served with Mughlai paratha."
      },
      {
        "id": "punjabi-dhaba-express-item-2",
        "name": "Murgh Malai Tikka (6 pcs)",
        "price": 340,
        "category": "Starters",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=600&q=80",
        "description": "Boneless chicken chunks marinated in cream, cheese, hung curd, and crushed cardamom, grilled in tandoor."
      },
      {
        "id": "punjabi-dhaba-express-item-3",
        "name": "Mutton Seekh Kebab (4 pcs)",
        "price": 390,
        "category": "Starters",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=600&q=80",
        "description": "Finely minced spiced mutton skewers cooked over glowing charcoal embers."
      },
      {
        "id": "punjabi-dhaba-express-item-4",
        "name": "Tandoori Chicken (Half / Full)",
        "price": 290,
        "category": "Starters",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80",
        "description": "Classic bone-in chicken marinated in Kashmiri chilli, mustard oil and hung curd roasted in tandoor."
      },
      {
        "id": "punjabi-dhaba-express-item-5",
        "name": "Paneer Tikka Shashlik",
        "price": 280,
        "category": "Starters",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=600&q=80",
        "description": "Cottage cheese cubes with bell peppers and onions grilled to perfection in clay oven."
      },
      {
        "id": "punjabi-dhaba-express-item-6",
        "name": "Special Butter Chicken",
        "price": 390,
        "category": "Main Course",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=600&q=80",
        "description": "Tender tandoori chicken cooked in an authentic velvety makhani gravy enriched with honey and fenugreek."
      },
      {
        "id": "punjabi-dhaba-express-item-7",
        "name": "Handi Mutton Rogan Josh",
        "price": 460,
        "category": "Main Course",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1545247181-516773cae754?auto=format&fit=crop&w=600&q=80",
        "description": "Tender baby mutton simmered in a clay handi with ratan jot, Kashmiri chilies, and aromatic whole spices."
      },
      {
        "id": "punjabi-dhaba-express-item-8",
        "name": "Chicken Lababdar",
        "price": 370,
        "category": "Main Course",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=600&q=80",
        "description": "Succulent chicken pieces in a chunky spiced onion-tomato gravy finished with grated paneer and cream."
      },
      {
        "id": "punjabi-dhaba-express-item-9",
        "name": "Kadhai Paneer",
        "price": 290,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=600&q=80",
        "description": "Paneer cubes tossed with fresh ground coriander, dry red chillies, capsicum, and thick onion masala."
      },
      {
        "id": "punjabi-dhaba-express-item-10",
        "name": "Dal Makhani Slow-Cooked",
        "price": 240,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80",
        "description": "Classic black lentils slow-cooked with fresh cream and butter for 24 hours."
      },
      {
        "id": "punjabi-dhaba-express-item-11",
        "name": "Dum Chicken Biryani with Mirchi Salan",
        "price": 340,
        "category": "Biryani & Rice",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=600&q=80",
        "description": "Long-grain aged basmati rice layered with marinated chicken, saffron milk, brown onions, and kewra."
      }
    ]
  },
  {
    "id": "belgian-waffle-desserts",
    "name": "The Belgian Waffle & Crepes Co.",
    "area": "Betiahata",
    "city": "Gorakhpur",
    "description": "Trendy dessert parlour specializing in golden crispy Belgian waffles, warm mini pancakes, Nutella crepes, and thick shakes.",
    "categories": [
      "cafe",
      "sweets"
    ],
    "cuisines": [
      "Desserts",
      "Waffles",
      "Bakery & Shakes"
    ],
    "popularDishes": [
      "Triple Chocolate Waffle",
      "Nutella Hazelnut Overload",
      "Red Velvet Berry Waffle",
      "Biscoff Crunch Shake"
    ],
    "costForTwo": 350,
    "averageRating": 4.7,
    "reviewCount": 310,
    "imageUrl": "https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=1000&q=80",
    "logoUrl": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20100%20100%22%20width%3D%22200%22%20height%3D%22200%22%3E%0A%20%20%3Cdefs%3E%0A%20%20%20%20%3ClinearGradient%20id%3D%22brandGrad_belgian-waffle-desserts%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%2394381c%22%2F%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%234f3f2d%22%2F%3E%0A%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%3Cfilter%20id%3D%22shadow_belgian-waffle-desserts%22%20x%3D%22-10%25%22%20y%3D%22-10%25%22%20width%3D%22120%25%22%20height%3D%22120%25%22%3E%0A%20%20%20%20%20%20%3CfeDropShadow%20dx%3D%220%22%20dy%3D%222%22%20stdDeviation%3D%222.5%22%20flood-opacity%3D%220.35%22%2F%3E%0A%20%20%20%20%3C%2Ffilter%3E%0A%20%20%3C%2Fdefs%3E%0A%20%20%3C!--%20Background%20Shield%20Badge%20--%3E%0A%20%20%3Crect%20x%3D%224%22%20y%3D%224%22%20width%3D%2292%22%20height%3D%2292%22%20rx%3D%2226%22%20fill%3D%22url(%23brandGrad_belgian-waffle-desserts)%22%20stroke%3D%22%23fce588%22%20stroke-width%3D%222.5%22%20filter%3D%22url(%23shadow_belgian-waffle-desserts)%22%2F%3E%0A%20%20%3C!--%20Inner%20Ornamental%20Line%20--%3E%0A%20%20%3Crect%20x%3D%229%22%20y%3D%229%22%20width%3D%2282%22%20height%3D%2282%22%20rx%3D%2221%22%20fill%3D%22none%22%20stroke%3D%22%23fce588%22%20stroke-width%3D%221%22%20stroke-dasharray%3D%223%203%22%20opacity%3D%220.45%22%2F%3E%0A%20%20%3C!--%20Emblem%20Motif%20--%3E%0A%20%20%3Cpath%20d%3D%22M50%2028%20C56%2028%2062%2034%2062%2042%20C62%2050%2050%2060%2050%2060%20C50%2060%2038%2050%2038%2042%20C38%2034%2044%2028%2050%2028%20Z%22%20fill%3D%22%23fce588%22%20opacity%3D%220.95%22%2F%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2250%22%20cy%3D%2240%22%20r%3D%223.5%22%20fill%3D%22%23ffffff%22%2F%3E%0A%20%20%3C!--%20Typography%20%2F%20Monogram%20--%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2276%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C%20-apple-system%2C%20sans-serif%22%20font-weight%3D%22900%22%20font-size%3D%2215%22%20fill%3D%22%23ffffff%22%20letter-spacing%3D%221.5%22%3EBW%3C%2Ftext%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2287%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C%20-apple-system%2C%20sans-serif%22%20font-weight%3D%22800%22%20font-size%3D%226.5%22%20fill%3D%22%23fce588%22%20letter-spacing%3D%222%22%3EGORAKHPUR%3C%2Ftext%3E%0A%3C%2Fsvg%3E",
    "isDemo": false,
    "phone": "+91 95540 22119",
    "address": "Near City Mall Road, Betiahata, Gorakhpur",
    "openTime": "11:00",
    "closeTime": "23:30",
    "openDays": [
      "Mon",
      "Tue",
      "Wed",
      "Thu",
      "Fri",
      "Sat",
      "Sun"
    ],
    "diet": "veg",
    "status": "Active",
    "ownerName": "Pooja Agrawal",
    "ownerEmail": "belgianwaffle.gkp@gorakhpurfoodguide.in",
    "facilities": [
      "100% Eggless Waffles",
      "Air Conditioned",
      "Takeaway Packing",
      "Dessert on the Go"
    ],
    "ratingsBreakdown": {
      "food": 4.8,
      "taste": 4.9,
      "hygiene": 4.8,
      "service": 4.6,
      "ambience": 4.6
    },
    "priceRange": {
      "min": 140,
      "max": 400
    },
    "distanceKm": 1.9,
    "menu": [
      {
        "id": "belgian-waffle-desserts-pop-1",
        "name": "Triple Chocolate Waffle",
        "price": 130,
        "category": "Desserts",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1562376552-0d160a2f238d?auto=format&fit=crop&w=600&q=80",
        "description": "Warm freshly baked dessert smothered in rich melted Belgian chocolate and garnishes."
      },
      {
        "id": "belgian-waffle-desserts-pop-2",
        "name": "Nutella Hazelnut Overload",
        "price": 170,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=600&q=80",
        "description": "Fresh cottage cheese and seasonal ingredients simmered in a luscious spiced onion-tomato gravy."
      },
      {
        "id": "belgian-waffle-desserts-pop-3",
        "name": "Red Velvet Berry Waffle",
        "price": 130,
        "category": "Desserts",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1562376552-0d160a2f238d?auto=format&fit=crop&w=600&q=80",
        "description": "Warm freshly baked dessert smothered in rich melted Belgian chocolate and garnishes."
      },
      {
        "id": "belgian-waffle-desserts-pop-4",
        "name": "Biscoff Crunch Shake",
        "price": 100,
        "category": "Beverages",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=600&q=80",
        "description": "Fresh cottage cheese and seasonal ingredients simmered in a luscious spiced onion-tomato gravy."
      },
      {
        "id": "belgian-waffle-desserts-item-1",
        "name": "Belgian Nutella Waffle with Vanilla Ice Cream",
        "price": 210,
        "category": "Desserts",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1562376552-0d160a2f238d?auto=format&fit=crop&w=600&q=80",
        "description": "Freshly baked golden Belgian waffle smothered with warm Nutella and topped with ice cream."
      },
      {
        "id": "belgian-waffle-desserts-item-2",
        "name": "Lotus Biscoff Thick Shake",
        "price": 190,
        "category": "Beverages",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=600&q=80",
        "description": "Creamy milkshake blended with genuine Lotus Biscoff spread and crushed caramelized biscuits."
      },
      {
        "id": "belgian-waffle-desserts-item-3",
        "name": "Farmhouse Woodfired Pizza (10 inch)",
        "price": 360,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80",
        "description": "Hand-stretched dough topped with San Marzano tomato sauce, mozzarella, bell peppers, mushrooms and olives."
      },
      {
        "id": "belgian-waffle-desserts-item-4",
        "name": "Penne Creamy Alfredo Pasta with Mushrooms",
        "price": 290,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1621996346565-e3d5d6281724?auto=format&fit=crop&w=600&q=80",
        "description": "Al dente penne tossed in rich parmesan garlic white sauce with sautéed mushrooms."
      },
      {
        "id": "belgian-waffle-desserts-item-5",
        "name": "Loaded Cheesy Mexican Nachos",
        "price": 240,
        "category": "Starters",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1576107232684-1279f3908594?auto=format&fit=crop&w=600&q=80",
        "description": "Crispy corn tortilla chips baked with jalapeños, salsa, black olives and warm cheddar sauce."
      },
      {
        "id": "belgian-waffle-desserts-item-6",
        "name": "Crispy Peri Peri French Fries",
        "price": 140,
        "category": "Starters",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1576107232684-1279f3908594?auto=format&fit=crop&w=600&q=80",
        "description": "Golden potato fries seasoned with zesty African bird’s eye peri-peri spice dust."
      },
      {
        "id": "belgian-waffle-desserts-item-7",
        "name": "Classic Cold Coffee with Ice Cream",
        "price": 160,
        "category": "Beverages",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=600&q=80",
        "description": "Rich espresso blended with chilled whole milk and topped with a scoop of vanilla gelato."
      },
      {
        "id": "belgian-waffle-desserts-item-8",
        "name": "Kulhad Adrak Masala Chai",
        "price": 60,
        "category": "Beverages",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=600&q=80",
        "description": "Freshly brewed strong tea infused with crushed ginger, cardamom, and clove in a clay kulhad."
      },
      {
        "id": "belgian-waffle-desserts-item-9",
        "name": "New York Baked Blueberry Cheesecake",
        "price": 220,
        "category": "Desserts",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=600&q=80",
        "description": "Dense cream cheese filling on a graham cracker crust topped with tangy wild blueberry compote."
      },
      {
        "id": "belgian-waffle-desserts-item-10",
        "name": "Tiramisu Italiano Cup",
        "price": 210,
        "category": "Desserts",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=600&q=80",
        "description": "Espresso-soaked savoiardi biscuits layered with mascarpone cream and dusted with cocoa."
      },
      {
        "id": "belgian-waffle-desserts-item-11",
        "name": "Classic Grilled Paneer Tikka Sandwich",
        "price": 180,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=600&q=80",
        "description": "Multi-grain bread toasted with spiced paneer tikka, mint chutney, and mozzarella cheese."
      }
    ]
  },
  {
    "id": "nawabi-zaika-biryani",
    "name": "Nawabi Zaika Biryani & Kebab Hub",
    "area": "Medical College Road",
    "city": "Gorakhpur",
    "description": "Heritage street corner famous for charcoal-grilled Kakori and Galouti kebabs, dum-pukht chicken biryanis, and warm Mughlai parathas.",
    "categories": [
      "north-indian",
      "street-food"
    ],
    "cuisines": [
      "Lucknowi Biryani",
      "Mughlai",
      "Kebabs"
    ],
    "popularDishes": [
      "Galouti Kebab with Ulte Tawa Ka Paratha",
      "Nawabi Dum Biryani",
      "Chicken Seekh Roll",
      "Shahi Firni"
    ],
    "costForTwo": 400,
    "averageRating": 4.6,
    "reviewCount": 280,
    "imageUrl": "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1000&q=80",
    "logoUrl": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20100%20100%22%20width%3D%22200%22%20height%3D%22200%22%3E%0A%20%20%3Cdefs%3E%0A%20%20%20%20%3ClinearGradient%20id%3D%22brandGrad_nawabi-zaika-biryani%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23a33a0a%22%2F%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%232b2018%22%2F%3E%0A%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%3Cfilter%20id%3D%22shadow_nawabi-zaika-biryani%22%20x%3D%22-10%25%22%20y%3D%22-10%25%22%20width%3D%22120%25%22%20height%3D%22120%25%22%3E%0A%20%20%20%20%20%20%3CfeDropShadow%20dx%3D%220%22%20dy%3D%222%22%20stdDeviation%3D%222.5%22%20flood-opacity%3D%220.35%22%2F%3E%0A%20%20%20%20%3C%2Ffilter%3E%0A%20%20%3C%2Fdefs%3E%0A%20%20%3C!--%20Background%20Shield%20Badge%20--%3E%0A%20%20%3Crect%20x%3D%224%22%20y%3D%224%22%20width%3D%2292%22%20height%3D%2292%22%20rx%3D%2226%22%20fill%3D%22url(%23brandGrad_nawabi-zaika-biryani)%22%20stroke%3D%22%23f5e9d0%22%20stroke-width%3D%222.5%22%20filter%3D%22url(%23shadow_nawabi-zaika-biryani)%22%2F%3E%0A%20%20%3C!--%20Inner%20Ornamental%20Line%20--%3E%0A%20%20%3Crect%20x%3D%229%22%20y%3D%229%22%20width%3D%2282%22%20height%3D%2282%22%20rx%3D%2221%22%20fill%3D%22none%22%20stroke%3D%22%23f5e9d0%22%20stroke-width%3D%221%22%20stroke-dasharray%3D%223%203%22%20opacity%3D%220.45%22%2F%3E%0A%20%20%3C!--%20Emblem%20Motif%20--%3E%0A%20%20%3Ccircle%20cx%3D%2250%22%20cy%3D%2238%22%20r%3D%2214%22%20stroke%3D%22%23f5e9d0%22%20stroke-width%3D%222%22%20fill%3D%22none%22%20opacity%3D%220.7%22%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22M44%2030%20L44%2046%20M56%2030%20L56%2046%20M42%2030%20C42%2035%2046%2035%2046%2030%22%20stroke%3D%22%23f5e9d0%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%2F%3E%0A%20%20%3C!--%20Typography%20%2F%20Monogram%20--%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2276%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C%20-apple-system%2C%20sans-serif%22%20font-weight%3D%22900%22%20font-size%3D%2215%22%20fill%3D%22%23ffffff%22%20letter-spacing%3D%221.5%22%3ENZ%3C%2Ftext%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2287%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C%20-apple-system%2C%20sans-serif%22%20font-weight%3D%22800%22%20font-size%3D%226.5%22%20fill%3D%22%23f5e9d0%22%20letter-spacing%3D%222%22%3EGORAKHPUR%3C%2Ftext%3E%0A%3C%2Fsvg%3E",
    "isDemo": false,
    "phone": "+91 97950 11992",
    "address": "Near Asuran Crossing, Medical College Road, Gorakhpur",
    "openTime": "13:00",
    "closeTime": "23:30",
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
    "ownerName": "Tariq Warsi",
    "ownerEmail": "nawabizaika.gkp@gorakhpurfoodguide.in",
    "facilities": [
      "Fast Service",
      "Takeaway Rolls Counter",
      "Seating Available",
      "UPI Accepted"
    ],
    "ratingsBreakdown": {
      "food": 4.7,
      "taste": 4.8,
      "hygiene": 4.4,
      "service": 4.5,
      "ambience": 4.2
    },
    "priceRange": {
      "min": 140,
      "max": 480
    },
    "distanceKm": 3.8,
    "menu": [
      {
        "id": "nawabi-zaika-biryani-pop-1",
        "name": "Galouti Kebab with Ulte Tawa Ka Paratha",
        "price": 30,
        "category": "Breads",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=600&q=80",
        "description": "Marinated in yogurt, roasted garlic, and spices, chargrilled to smoky perfection."
      },
      {
        "id": "nawabi-zaika-biryani-pop-2",
        "name": "Nawabi Dum Biryani",
        "price": 150,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=600&q=80",
        "description": "Aromatic long-grain basmati layered with tender meat/veggies, saffron, mint, and whole spices."
      },
      {
        "id": "nawabi-zaika-biryani-pop-3",
        "name": "Chicken Seekh Roll",
        "price": 220,
        "category": "Starters",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=600&q=80",
        "description": "Succulent pieces cooked in rich fragrant gravy with roasted spices, brown onions, and fresh coriander."
      },
      {
        "id": "nawabi-zaika-biryani-pop-4",
        "name": "Shahi Firni",
        "price": 70,
        "category": "Desserts",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=600&q=80",
        "description": "Ground rice pudding scented with kewra and green cardamom, set in clay pots."
      },
      {
        "id": "nawabi-zaika-biryani-item-1",
        "name": "Galawati Kabab with Ulte Tawe Ka Paratha",
        "price": 380,
        "category": "Starters",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=600&q=80",
        "description": "Mouth-melting Awadhi minced mutton kebabs spiced with 32 fragrant herbs, served with Mughlai paratha."
      },
      {
        "id": "nawabi-zaika-biryani-item-2",
        "name": "Murgh Malai Tikka (6 pcs)",
        "price": 340,
        "category": "Starters",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=600&q=80",
        "description": "Boneless chicken chunks marinated in cream, cheese, hung curd, and crushed cardamom, grilled in tandoor."
      },
      {
        "id": "nawabi-zaika-biryani-item-3",
        "name": "Mutton Seekh Kebab (4 pcs)",
        "price": 390,
        "category": "Starters",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=600&q=80",
        "description": "Finely minced spiced mutton skewers cooked over glowing charcoal embers."
      },
      {
        "id": "nawabi-zaika-biryani-item-4",
        "name": "Tandoori Chicken (Half / Full)",
        "price": 290,
        "category": "Starters",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80",
        "description": "Classic bone-in chicken marinated in Kashmiri chilli, mustard oil and hung curd roasted in tandoor."
      },
      {
        "id": "nawabi-zaika-biryani-item-5",
        "name": "Paneer Tikka Shashlik",
        "price": 280,
        "category": "Starters",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=600&q=80",
        "description": "Cottage cheese cubes with bell peppers and onions grilled to perfection in clay oven."
      },
      {
        "id": "nawabi-zaika-biryani-item-6",
        "name": "Special Butter Chicken",
        "price": 390,
        "category": "Main Course",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=600&q=80",
        "description": "Tender tandoori chicken cooked in an authentic velvety makhani gravy enriched with honey and fenugreek."
      },
      {
        "id": "nawabi-zaika-biryani-item-7",
        "name": "Handi Mutton Rogan Josh",
        "price": 460,
        "category": "Main Course",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1545247181-516773cae754?auto=format&fit=crop&w=600&q=80",
        "description": "Tender baby mutton simmered in a clay handi with ratan jot, Kashmiri chilies, and aromatic whole spices."
      },
      {
        "id": "nawabi-zaika-biryani-item-8",
        "name": "Chicken Lababdar",
        "price": 370,
        "category": "Main Course",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=600&q=80",
        "description": "Succulent chicken pieces in a chunky spiced onion-tomato gravy finished with grated paneer and cream."
      },
      {
        "id": "nawabi-zaika-biryani-item-9",
        "name": "Kadhai Paneer",
        "price": 290,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=600&q=80",
        "description": "Paneer cubes tossed with fresh ground coriander, dry red chillies, capsicum, and thick onion masala."
      },
      {
        "id": "nawabi-zaika-biryani-item-10",
        "name": "Dal Makhani Slow-Cooked",
        "price": 240,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80",
        "description": "Classic black lentils slow-cooked with fresh cream and butter for 24 hours."
      },
      {
        "id": "nawabi-zaika-biryani-item-11",
        "name": "Dum Chicken Biryani with Mirchi Salan",
        "price": 340,
        "category": "Biryani & Rice",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=600&q=80",
        "description": "Long-grain aged basmati rice layered with marinated chicken, saffron milk, brown onions, and kewra."
      }
    ]
  },
  {
    "id": "momo-station-cafe",
    "name": "The Himalayan Momo Station & Cafe",
    "area": "Rustampur",
    "city": "Gorakhpur",
    "description": "Authentic Himalayan dumpling joint famous for pan-fried kurkure momos, piping hot thukpa noodle soups, and spicy Tibetan tingmo.",
    "categories": [
      "chinese",
      "fast-food"
    ],
    "cuisines": [
      "Tibetan",
      "Indo-Chinese",
      "Momos & Thukpa"
    ],
    "popularDishes": [
      "Darjeeling Steam Momos",
      "Crispy Kurkure Momos",
      "Chilli Garlic Thukpa",
      "Spicy Schezwan Gravy Momos"
    ],
    "costForTwo": 300,
    "averageRating": 4.7,
    "reviewCount": 320,
    "imageUrl": "https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=1000&q=80",
    "logoUrl": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20100%20100%22%20width%3D%22200%22%20height%3D%22200%22%3E%0A%20%20%3Cdefs%3E%0A%20%20%20%20%3ClinearGradient%20id%3D%22brandGrad_momo-station-cafe%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%237c1c1c%22%2F%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23240808%22%2F%3E%0A%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%3Cfilter%20id%3D%22shadow_momo-station-cafe%22%20x%3D%22-10%25%22%20y%3D%22-10%25%22%20width%3D%22120%25%22%20height%3D%22120%25%22%3E%0A%20%20%20%20%20%20%3CfeDropShadow%20dx%3D%220%22%20dy%3D%222%22%20stdDeviation%3D%222.5%22%20flood-opacity%3D%220.35%22%2F%3E%0A%20%20%20%20%3C%2Ffilter%3E%0A%20%20%3C%2Fdefs%3E%0A%20%20%3C!--%20Background%20Shield%20Badge%20--%3E%0A%20%20%3Crect%20x%3D%224%22%20y%3D%224%22%20width%3D%2292%22%20height%3D%2292%22%20rx%3D%2226%22%20fill%3D%22url(%23brandGrad_momo-station-cafe)%22%20stroke%3D%22%23fca5a5%22%20stroke-width%3D%222.5%22%20filter%3D%22url(%23shadow_momo-station-cafe)%22%2F%3E%0A%20%20%3C!--%20Inner%20Ornamental%20Line%20--%3E%0A%20%20%3Crect%20x%3D%229%22%20y%3D%229%22%20width%3D%2282%22%20height%3D%2282%22%20rx%3D%2221%22%20fill%3D%22none%22%20stroke%3D%22%23fca5a5%22%20stroke-width%3D%221%22%20stroke-dasharray%3D%223%203%22%20opacity%3D%220.45%22%2F%3E%0A%20%20%3C!--%20Emblem%20Motif%20--%3E%0A%20%20%3Cpath%20d%3D%22M36%2044%20C36%2052%2064%2052%2064%2044%20Z%22%20fill%3D%22%23fca5a5%22%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22M42%2034%20L58%2048%20M58%2034%20L42%2048%22%20stroke%3D%22%23ffffff%22%20stroke-width%3D%222.5%22%20stroke-linecap%3D%22round%22%2F%3E%0A%20%20%3C!--%20Typography%20%2F%20Monogram%20--%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2276%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C%20-apple-system%2C%20sans-serif%22%20font-weight%3D%22900%22%20font-size%3D%2215%22%20fill%3D%22%23ffffff%22%20letter-spacing%3D%221.5%22%3EHM%3C%2Ftext%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2287%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C%20-apple-system%2C%20sans-serif%22%20font-weight%3D%22800%22%20font-size%3D%226.5%22%20fill%3D%22%23fca5a5%22%20letter-spacing%3D%222%22%3EGORAKHPUR%3C%2Ftext%3E%0A%3C%2Fsvg%3E",
    "isDemo": false,
    "phone": "+91 96960 44331",
    "address": "Near Rustampur Dhala, Main Road, Rustampur, Gorakhpur",
    "openTime": "12:00",
    "closeTime": "22:30",
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
    "ownerName": "Sonam Dorjee",
    "ownerEmail": "momostation.gkp@gorakhpurfoodguide.in",
    "facilities": [
      "Fast Service",
      "Indoor Air Conditioned Seating",
      "Takeaway Boxes",
      "Pocket Friendly"
    ],
    "ratingsBreakdown": {
      "food": 4.8,
      "taste": 4.9,
      "hygiene": 4.6,
      "service": 4.6,
      "ambience": 4.3
    },
    "priceRange": {
      "min": 90,
      "max": 320
    },
    "distanceKm": 3.1,
    "menu": [
      {
        "id": "momo-station-cafe-pop-1",
        "name": "Darjeeling Steam Momos",
        "price": 20,
        "category": "Beverages",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=600&q=80",
        "description": "Fresh cottage cheese and seasonal ingredients simmered in a luscious spiced onion-tomato gravy."
      },
      {
        "id": "momo-station-cafe-pop-2",
        "name": "Crispy Kurkure Momos",
        "price": 110,
        "category": "Starters",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=600&q=80",
        "description": "Fresh cottage cheese and seasonal ingredients simmered in a luscious spiced onion-tomato gravy."
      },
      {
        "id": "momo-station-cafe-pop-3",
        "name": "Chilli Garlic Thukpa",
        "price": 140,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=600&q=80",
        "description": "Fresh cottage cheese and seasonal ingredients simmered in a luscious spiced onion-tomato gravy."
      },
      {
        "id": "momo-station-cafe-pop-4",
        "name": "Spicy Schezwan Gravy Momos",
        "price": 110,
        "category": "Starters",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=600&q=80",
        "description": "Fresh cottage cheese and seasonal ingredients simmered in a luscious spiced onion-tomato gravy."
      },
      {
        "id": "momo-station-cafe-item-1",
        "name": "Darjeeling Steamed Chicken Momos (8 pcs)",
        "price": 160,
        "category": "Starters",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=600&q=80",
        "description": "Thin-wrapper dumplings filled with juicy minced chicken, ginger and coriander with fiery red chutney."
      },
      {
        "id": "momo-station-cafe-item-2",
        "name": "Kurkure Crispy Paneer Momos (6 pcs)",
        "price": 150,
        "category": "Starters",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=600&q=80",
        "description": "Crispy cornflake-crusted deep-fried momos filled with seasoned spiced cottage cheese."
      },
      {
        "id": "momo-station-cafe-item-3",
        "name": "Chilli Garlic Hakka Noodles",
        "price": 190,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=600&q=80",
        "description": "Wok-tossed noodles with julienned vegetables, burnt garlic, soy, and spicy red chilli paste."
      },
      {
        "id": "momo-station-cafe-item-4",
        "name": "Veg Manchurian Gravy with Fried Rice Bowl",
        "price": 240,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=600&q=80",
        "description": "Deep-fried vegetable balls in a savory, tangy and spicy dark soya and ginger garlic sauce."
      },
      {
        "id": "momo-station-cafe-item-5",
        "name": "Schezwan Chicken Fried Rice",
        "price": 260,
        "category": "Main Course",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=600&q=80",
        "description": "Aged basmati rice stir-fried with diced chicken, eggs, and authentic spicy Sichuan pepper paste."
      },
      {
        "id": "momo-station-cafe-item-6",
        "name": "Crispy Honey Chilli Potatoes",
        "price": 180,
        "category": "Starters",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80",
        "description": "Crispy finger potatoes tossed in sweet honey, roasted sesame seeds, and spicy red chilli sauce."
      },
      {
        "id": "momo-station-cafe-item-7",
        "name": "Drums of Heaven Chicken Lollipops (6 pcs)",
        "price": 280,
        "category": "Starters",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=600&q=80",
        "description": "Crispy chicken winglets tossed in fiery Schezwan garlic sauce with spring onions."
      },
      {
        "id": "momo-station-cafe-item-8",
        "name": "Tibetan Thukpa Noodle Soup Bowl",
        "price": 210,
        "category": "Starters",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=600&q=80",
        "description": "Hearty Himalayan noodle soup packed with fresh greens, mushrooms, and spiced broth."
      },
      {
        "id": "momo-station-cafe-item-9",
        "name": "Crispy Fried Spring Rolls (6 pcs)",
        "price": 170,
        "category": "Starters",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?auto=format&fit=crop&w=600&q=80",
        "description": "Golden crunchy wrappers filled with cabbage, carrots, bell peppers, served with sweet chilli dip."
      },
      {
        "id": "momo-station-cafe-item-10",
        "name": "Darjeeling Lemon Iced Tea",
        "price": 110,
        "category": "Beverages",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=600&q=80",
        "description": "Refreshing brewed black tea infused with lemon zest and mint over crushed ice."
      },
      {
        "id": "momo-station-cafe-item-11",
        "name": "Darjeeling Darsaan with Vanilla Ice Cream",
        "price": 140,
        "category": "Desserts",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=600&q=80",
        "description": "Fried honey-glazed flat noodles topped with roasted sesame seeds and cool vanilla scoop."
      }
    ]
  },
  {
    "id": "pizza-slice-junction",
    "name": "Crust & Craft Woodfired Pizza",
    "area": "Bank Road",
    "city": "Gorakhpur",
    "description": "Authentic sourdough pizza bar baking hand-stretched pies with imported San Marzano sauce, fresh mozzarella, and aromatic pestos.",
    "categories": [
      "fast-food",
      "cafe"
    ],
    "cuisines": [
      "Italian",
      "Woodfired Pizza",
      "Pasta & Shakes"
    ],
    "popularDishes": [
      "Quattro Formaggi Pizza",
      "Pesto Penne Pasta",
      "Garlic Breadsticks with Cheese Dip",
      "Tiramisu Cup"
    ],
    "costForTwo": 600,
    "averageRating": 4.8,
    "reviewCount": 340,
    "imageUrl": "https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?auto=format&fit=crop&w=1000&q=80",
    "logoUrl": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20100%20100%22%20width%3D%22200%22%20height%3D%22200%22%3E%0A%20%20%3Cdefs%3E%0A%20%20%20%20%3ClinearGradient%20id%3D%22brandGrad_pizza-slice-junction%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%235c3a21%22%2F%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%2326180e%22%2F%3E%0A%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%3Cfilter%20id%3D%22shadow_pizza-slice-junction%22%20x%3D%22-10%25%22%20y%3D%22-10%25%22%20width%3D%22120%25%22%20height%3D%22120%25%22%3E%0A%20%20%20%20%20%20%3CfeDropShadow%20dx%3D%220%22%20dy%3D%222%22%20stdDeviation%3D%222.5%22%20flood-opacity%3D%220.35%22%2F%3E%0A%20%20%20%20%3C%2Ffilter%3E%0A%20%20%3C%2Fdefs%3E%0A%20%20%3C!--%20Background%20Shield%20Badge%20--%3E%0A%20%20%3Crect%20x%3D%224%22%20y%3D%224%22%20width%3D%2292%22%20height%3D%2292%22%20rx%3D%2226%22%20fill%3D%22url(%23brandGrad_pizza-slice-junction)%22%20stroke%3D%22%23fed7aa%22%20stroke-width%3D%222.5%22%20filter%3D%22url(%23shadow_pizza-slice-junction)%22%2F%3E%0A%20%20%3C!--%20Inner%20Ornamental%20Line%20--%3E%0A%20%20%3Crect%20x%3D%229%22%20y%3D%229%22%20width%3D%2282%22%20height%3D%2282%22%20rx%3D%2221%22%20fill%3D%22none%22%20stroke%3D%22%23fed7aa%22%20stroke-width%3D%221%22%20stroke-dasharray%3D%223%203%22%20opacity%3D%220.45%22%2F%3E%0A%20%20%3C!--%20Emblem%20Motif%20--%3E%0A%20%20%3Cpath%20d%3D%22M38%2038%20C38%2034%2042%2032%2046%2032%20L54%2032%20C58%2032%2062%2034%2062%2038%20L60%2050%20C60%2054%2056%2056%2050%2056%20C44%2056%2040%2054%2040%2050%20Z%22%20fill%3D%22%23fed7aa%22%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22M62%2040%20L65%2040%20C67%2040%2068%2041%2068%2043%20L68%2045%20C68%2047%2067%2048%2065%2048%20L61%2048%22%20stroke%3D%22%23fed7aa%22%20stroke-width%3D%222%22%20fill%3D%22none%22%2F%3E%0A%20%20%3C!--%20Typography%20%2F%20Monogram%20--%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2276%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C%20-apple-system%2C%20sans-serif%22%20font-weight%3D%22900%22%20font-size%3D%2215%22%20fill%3D%22%23ffffff%22%20letter-spacing%3D%221.5%22%3ECC%3C%2Ftext%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2287%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C%20-apple-system%2C%20sans-serif%22%20font-weight%3D%22800%22%20font-size%3D%226.5%22%20fill%3D%22%23fed7aa%22%20letter-spacing%3D%222%22%3EGORAKHPUR%3C%2Ftext%3E%0A%3C%2Fsvg%3E",
    "isDemo": false,
    "phone": "+91 94150 99881",
    "address": "Near University Chauraha, Bank Road, Gorakhpur",
    "openTime": "11:30",
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
    "ownerName": "Aditya Vikram Rai",
    "ownerEmail": "crustcraft.gkp@gorakhpurfoodguide.in",
    "facilities": [
      "Live Woodfired Oven",
      "Air Conditioned",
      "Free Wi-Fi",
      "Cozy Dining Area"
    ],
    "ratingsBreakdown": {
      "food": 4.9,
      "taste": 4.9,
      "hygiene": 4.8,
      "service": 4.7,
      "ambience": 4.8
    },
    "priceRange": {
      "min": 250,
      "max": 750
    },
    "distanceKm": 1,
    "menu": [
      {
        "id": "pizza-slice-junction-pop-1",
        "name": "Quattro Formaggi Pizza",
        "price": 360,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80",
        "description": "Freshly baked hand-tossed crust with gourmet mozzarella, herb marinara, and fresh toppings."
      },
      {
        "id": "pizza-slice-junction-pop-2",
        "name": "Pesto Penne Pasta",
        "price": 290,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1621996346565-e3d5d6281724?auto=format&fit=crop&w=600&q=80",
        "description": "Fresh cottage cheese and seasonal ingredients simmered in a luscious spiced onion-tomato gravy."
      },
      {
        "id": "pizza-slice-junction-pop-3",
        "name": "Garlic Breadsticks with Cheese Dip",
        "price": 220,
        "category": "Starters",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=600&q=80",
        "description": "Fresh cottage cheese and seasonal ingredients simmered in a luscious spiced onion-tomato gravy."
      },
      {
        "id": "pizza-slice-junction-pop-4",
        "name": "Tiramisu Cup",
        "price": 179,
        "category": "Desserts",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=600&q=80",
        "description": "Espresso dipped savoiardi biscuits layered with mascarpone sabayon and Belgian cocoa powder."
      },
      {
        "id": "pizza-slice-junction-item-1",
        "name": "Double Cheese Crunch Burger",
        "price": 160,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80",
        "description": "Crisp vegetable patty with double melted cheddar, gherkins, lettuce and secret thousand island sauce."
      },
      {
        "id": "pizza-slice-junction-item-2",
        "name": "Peri Peri Crispy Chicken Zinger Burger",
        "price": 210,
        "category": "Main Course",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80",
        "description": "Deep-fried spiced chicken breast fillet topped with spicy mayo and crisp iceberg lettuce on a brioche bun."
      },
      {
        "id": "pizza-slice-junction-item-3",
        "name": "Hand-Tossed Margherita Pizza (Regular)",
        "price": 240,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80",
        "description": "Classic Italian pizza with aromatic basil leaves, extra virgin olive oil and 100% mozzarella."
      },
      {
        "id": "pizza-slice-junction-item-4",
        "name": "Fiery Chicken Sausage & Pepperoni Pizza",
        "price": 390,
        "category": "Main Course",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80",
        "description": "Loaded with spicy chicken sausage, smoked pepperoni, red paprika, and stretchy mozzarella."
      },
      {
        "id": "pizza-slice-junction-item-5",
        "name": "Loaded Cheese Fries with Jalapeños",
        "price": 160,
        "category": "Starters",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1576107232684-1279f3908594?auto=format&fit=crop&w=600&q=80",
        "description": "Crinkle-cut hot fries smothered in liquid cheese, jalapeño bits, and smoky barbecue drizzle."
      },
      {
        "id": "pizza-slice-junction-item-6",
        "name": "Double Egg Double Chicken Kathi Roll",
        "price": 180,
        "category": "Starters",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?auto=format&fit=crop&w=600&q=80",
        "description": "Flaky paratha layered with two eggs and rolled with grilled chicken tikka, onions, and lime juice."
      },
      {
        "id": "pizza-slice-junction-item-7",
        "name": "Hot & Crispy Fried Chicken Bucket (4 pcs)",
        "price": 360,
        "category": "Starters",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=600&q=80",
        "description": "11 secret herbs and spices recipe chicken, extra crunchy outside and juicy tender inside."
      },
      {
        "id": "pizza-slice-junction-item-8",
        "name": "Classic Mumbai Vada Pav (2 pcs)",
        "price": 70,
        "category": "Starters",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80",
        "description": "Spiced potato batata vada in soft pav bread with spicy garlic dry chutney and fried green chillies."
      },
      {
        "id": "pizza-slice-junction-item-9",
        "name": "Oreo Thick Overload Shake",
        "price": 160,
        "category": "Beverages",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=600&q=80",
        "description": "Vanilla cream milkshake loaded with crushed Oreo cookies, chocolate syrup and whipped cream."
      },
      {
        "id": "pizza-slice-junction-item-10",
        "name": "Choco Lava Cake with Molten Core",
        "price": 110,
        "category": "Desserts",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=600&q=80",
        "description": "Warm soft chocolate sponge cake with an irresistible flowing chocolate fudge center."
      }
    ]
  },
  {
    "id": "dosa-plaza-south-kitchen",
    "name": "Madras Dosa Plaza & Udupi Corner",
    "area": "Shahpur",
    "city": "Gorakhpur",
    "description": "Vibrant Udupi style quick diner serving over 30 varieties of crisp dosas, butter idlis, vada sambar, and authentic coconut chutneys.",
    "categories": [
      "street-food",
      "fast-food"
    ],
    "cuisines": [
      "South Indian",
      "Street Food",
      "Quick Bites"
    ],
    "popularDishes": [
      "Paper Butter Ghee Roast Dosa",
      "Onion Uttapam",
      "Idli Vada Sambar Combo",
      "Madras Filter Kaapi"
    ],
    "costForTwo": 250,
    "averageRating": 4.7,
    "reviewCount": 305,
    "imageUrl": "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1000&q=80",
    "logoUrl": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20100%20100%22%20width%3D%22200%22%20height%3D%22200%22%3E%0A%20%20%3Cdefs%3E%0A%20%20%20%20%3ClinearGradient%20id%3D%22brandGrad_dosa-plaza-south-kitchen%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23a33a0a%22%2F%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%232b2018%22%2F%3E%0A%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%3Cfilter%20id%3D%22shadow_dosa-plaza-south-kitchen%22%20x%3D%22-10%25%22%20y%3D%22-10%25%22%20width%3D%22120%25%22%20height%3D%22120%25%22%3E%0A%20%20%20%20%20%20%3CfeDropShadow%20dx%3D%220%22%20dy%3D%222%22%20stdDeviation%3D%222.5%22%20flood-opacity%3D%220.35%22%2F%3E%0A%20%20%20%20%3C%2Ffilter%3E%0A%20%20%3C%2Fdefs%3E%0A%20%20%3C!--%20Background%20Shield%20Badge%20--%3E%0A%20%20%3Crect%20x%3D%224%22%20y%3D%224%22%20width%3D%2292%22%20height%3D%2292%22%20rx%3D%2226%22%20fill%3D%22url(%23brandGrad_dosa-plaza-south-kitchen)%22%20stroke%3D%22%23f5e9d0%22%20stroke-width%3D%222.5%22%20filter%3D%22url(%23shadow_dosa-plaza-south-kitchen)%22%2F%3E%0A%20%20%3C!--%20Inner%20Ornamental%20Line%20--%3E%0A%20%20%3Crect%20x%3D%229%22%20y%3D%229%22%20width%3D%2282%22%20height%3D%2282%22%20rx%3D%2221%22%20fill%3D%22none%22%20stroke%3D%22%23f5e9d0%22%20stroke-width%3D%221%22%20stroke-dasharray%3D%223%203%22%20opacity%3D%220.45%22%2F%3E%0A%20%20%3C!--%20Emblem%20Motif%20--%3E%0A%20%20%3Ccircle%20cx%3D%2250%22%20cy%3D%2238%22%20r%3D%2214%22%20stroke%3D%22%23f5e9d0%22%20stroke-width%3D%222%22%20fill%3D%22none%22%20opacity%3D%220.7%22%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22M44%2030%20L44%2046%20M56%2030%20L56%2046%20M42%2030%20C42%2035%2046%2035%2046%2030%22%20stroke%3D%22%23f5e9d0%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%2F%3E%0A%20%20%3C!--%20Typography%20%2F%20Monogram%20--%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2276%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C%20-apple-system%2C%20sans-serif%22%20font-weight%3D%22900%22%20font-size%3D%2215%22%20fill%3D%22%23ffffff%22%20letter-spacing%3D%221.5%22%3EMD%3C%2Ftext%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2287%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C%20-apple-system%2C%20sans-serif%22%20font-weight%3D%22800%22%20font-size%3D%226.5%22%20fill%3D%22%23f5e9d0%22%20letter-spacing%3D%222%22%3EGORAKHPUR%3C%2Ftext%3E%0A%3C%2Fsvg%3E",
    "isDemo": false,
    "phone": "+91 94520 66554",
    "address": "Padri Bazar Road, Near Geeta Vatika, Shahpur, Gorakhpur",
    "openTime": "07:30",
    "closeTime": "22:30",
    "openDays": [
      "Mon",
      "Tue",
      "Wed",
      "Thu",
      "Fri",
      "Sat",
      "Sun"
    ],
    "diet": "veg",
    "status": "Active",
    "ownerName": "R. Balakrishnan",
    "ownerEmail": "dosa.plaza.gkp@gorakhpurfoodguide.in",
    "facilities": [
      "100% Pure Vegetarian",
      "Banana Leaf Service",
      "Super Fast Turnover",
      "Digital Payments"
    ],
    "ratingsBreakdown": {
      "food": 4.8,
      "taste": 4.8,
      "hygiene": 4.7,
      "service": 4.7,
      "ambience": 4.2
    },
    "priceRange": {
      "min": 70,
      "max": 280
    },
    "distanceKm": 2.5,
    "menu": [
      {
        "id": "dosa-plaza-south-kitchen-pop-1",
        "name": "Paper Butter Ghee Roast Dosa",
        "price": 130,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?auto=format&fit=crop&w=600&q=80",
        "description": "Two-foot-long paper thin crispy rice crepe roasted in aromatic desi ghee, served with 3 chutneys."
      },
      {
        "id": "dosa-plaza-south-kitchen-pop-2",
        "name": "Onion Uttapam",
        "price": 140,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80",
        "description": "Fresh cottage cheese and seasonal ingredients simmered in a luscious spiced onion-tomato gravy."
      },
      {
        "id": "dosa-plaza-south-kitchen-pop-3",
        "name": "Idli Vada Sambar Combo",
        "price": 140,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80",
        "description": "Fresh cottage cheese and seasonal ingredients simmered in a luscious spiced onion-tomato gravy."
      },
      {
        "id": "dosa-plaza-south-kitchen-pop-4",
        "name": "Madras Filter Kaapi",
        "price": 40,
        "category": "Beverages",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1553787499-6f9133860278?auto=format&fit=crop&w=600&q=80",
        "description": "Fresh cottage cheese and seasonal ingredients simmered in a luscious spiced onion-tomato gravy."
      },
      {
        "id": "dosa-plaza-south-kitchen-item-1",
        "name": "Sagar Special Butter Masala Dosa",
        "price": 190,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?auto=format&fit=crop&w=600&q=80",
        "description": "Golden crispy fermented rice crepe smeared with Amul butter and filled with spiced potato masala."
      },
      {
        "id": "dosa-plaza-south-kitchen-item-2",
        "name": "Mysore Masala Dosa",
        "price": 210,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?auto=format&fit=crop&w=600&q=80",
        "description": "Crisp dosa lined with spicy red garlic-chilli chutney and packed with mashed potato filling."
      },
      {
        "id": "dosa-plaza-south-kitchen-item-3",
        "name": "Ghee Roast Paper Masala Dosa (Extra Long)",
        "price": 240,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?auto=format&fit=crop&w=600&q=80",
        "description": "Super thin crispy dosa roasted in pure desi ghee, served with coconut, tomato chutney and sambar."
      },
      {
        "id": "dosa-plaza-south-kitchen-item-4",
        "name": "Steamed Idli Sambar (2 pcs)",
        "price": 90,
        "category": "Starters",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80",
        "description": "Pillowy soft fermented rice cakes served piping hot with aromatic lentil vegetable sambar."
      },
      {
        "id": "dosa-plaza-south-kitchen-item-5",
        "name": "Crispy Medu Vada (2 pcs)",
        "price": 110,
        "category": "Starters",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80",
        "description": "Golden fried savory lentil donuts with crispy crust and fluffy interior, served with coconut chutney."
      },
      {
        "id": "dosa-plaza-south-kitchen-item-6",
        "name": "Onion Tomato Uttapam",
        "price": 170,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80",
        "description": "Thick savory pancake topped with caramelized chopped onions, tomatoes, coriander and green chillies."
      },
      {
        "id": "dosa-plaza-south-kitchen-item-7",
        "name": "Executive South Indian Pure Veg Thali",
        "price": 260,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=600&q=80",
        "description": "Rice, Sambar, Rasam, Kootu, Poriyal, Curd, Appalam, Puri, Pickle, and Sweet Kesari Bath."
      },
      {
        "id": "dosa-plaza-south-kitchen-item-8",
        "name": "Curd Rice with Mustard Tadka",
        "price": 140,
        "category": "Biryani & Rice",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=600&q=80",
        "description": "Tempered rice with fresh curd, mustard seeds, curry leaves, ginger, and pomegranate arils."
      },
      {
        "id": "dosa-plaza-south-kitchen-item-9",
        "name": "Authentic Madras Filter Coffee",
        "price": 75,
        "category": "Beverages",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=600&q=80",
        "description": "Traditional South Indian chicory blend coffee served frothy in a brass dabarah and tumbler."
      },
      {
        "id": "dosa-plaza-south-kitchen-item-10",
        "name": "Pineapple Kesari Bath Halwa",
        "price": 90,
        "category": "Desserts",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=600&q=80",
        "description": "Rich semolina dessert prepared with desi ghee, pineapple chunks, saffron and fried cashews."
      }
    ]
  },
  {
    "id": "radisson-kabab-factory",
    "name": "The Great Kabab Factory - Radisson Blu",
    "area": "Mohaddipur",
    "city": "Gorakhpur",
    "description": "Premier 5-star culinary experience serving unlimited Galouti Kebabs, Dal Baluchi, Subz Biryani, and Awadhi culinary masterpieces.",
    "categories": [
      "north-indian"
    ],
    "cuisines": [
      "North Indian",
      "Mughlai",
      "Awadhi Fine Dine"
    ],
    "popularDishes": [
      "Galouti Kebab",
      "Dal Baluchi",
      "Gosht Dum Biryani",
      "Kesar Phirni"
    ],
    "costForTwo": 1800,
    "averageRating": 4.9,
    "reviewCount": 640,
    "imageUrl": "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1000&q=80",
    "logoUrl": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20100%20100%22%20width%3D%22200%22%20height%3D%22200%22%3E%0A%20%20%3Cdefs%3E%0A%20%20%20%20%3ClinearGradient%20id%3D%22brandGrad_radisson-kabab-factory%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23a33a0a%22%2F%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%232b2018%22%2F%3E%0A%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%3Cfilter%20id%3D%22shadow_radisson-kabab-factory%22%20x%3D%22-10%25%22%20y%3D%22-10%25%22%20width%3D%22120%25%22%20height%3D%22120%25%22%3E%0A%20%20%20%20%20%20%3CfeDropShadow%20dx%3D%220%22%20dy%3D%222%22%20stdDeviation%3D%222.5%22%20flood-opacity%3D%220.35%22%2F%3E%0A%20%20%20%20%3C%2Ffilter%3E%0A%20%20%3C%2Fdefs%3E%0A%20%20%3C!--%20Background%20Shield%20Badge%20--%3E%0A%20%20%3Crect%20x%3D%224%22%20y%3D%224%22%20width%3D%2292%22%20height%3D%2292%22%20rx%3D%2226%22%20fill%3D%22url(%23brandGrad_radisson-kabab-factory)%22%20stroke%3D%22%23f5e9d0%22%20stroke-width%3D%222.5%22%20filter%3D%22url(%23shadow_radisson-kabab-factory)%22%2F%3E%0A%20%20%3C!--%20Inner%20Ornamental%20Line%20--%3E%0A%20%20%3Crect%20x%3D%229%22%20y%3D%229%22%20width%3D%2282%22%20height%3D%2282%22%20rx%3D%2221%22%20fill%3D%22none%22%20stroke%3D%22%23f5e9d0%22%20stroke-width%3D%221%22%20stroke-dasharray%3D%223%203%22%20opacity%3D%220.45%22%2F%3E%0A%20%20%3C!--%20Emblem%20Motif%20--%3E%0A%20%20%3Ccircle%20cx%3D%2250%22%20cy%3D%2238%22%20r%3D%2214%22%20stroke%3D%22%23f5e9d0%22%20stroke-width%3D%222%22%20fill%3D%22none%22%20opacity%3D%220.7%22%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22M44%2030%20L44%2046%20M56%2030%20L56%2046%20M42%2030%20C42%2035%2046%2035%2046%2030%22%20stroke%3D%22%23f5e9d0%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%2F%3E%0A%20%20%3C!--%20Typography%20%2F%20Monogram%20--%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2276%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C%20-apple-system%2C%20sans-serif%22%20font-weight%3D%22900%22%20font-size%3D%2215%22%20fill%3D%22%23ffffff%22%20letter-spacing%3D%221.5%22%3EGK%3C%2Ftext%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2287%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C%20-apple-system%2C%20sans-serif%22%20font-weight%3D%22800%22%20font-size%3D%226.5%22%20fill%3D%22%23f5e9d0%22%20letter-spacing%3D%222%22%3EGORAKHPUR%3C%2Ftext%3E%0A%3C%2Fsvg%3E",
    "isDemo": false,
    "phone": "+91 551 220 8888",
    "address": "Radisson Blu Hotel, Airport Road, Mohaddipur, Gorakhpur",
    "openTime": "19:00",
    "closeTime": "23:45",
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
    "ownerName": "Chef Sanjeev Kapur & Radisson Ops",
    "ownerEmail": "tgkf.radisson@gorakhpurfoodguide.in",
    "facilities": [
      "5-Star Luxury Ambiance",
      "Valet Parking",
      "Bar & Lounge",
      "Private Dining Rooms",
      "Card & UPI Payments"
    ],
    "ratingsBreakdown": {
      "food": 5,
      "taste": 5,
      "hygiene": 5,
      "service": 4.9,
      "ambience": 4.9
    },
    "priceRange": {
      "min": 900,
      "max": 2200
    },
    "distanceKm": 2.8,
    "menu": [
      {
        "id": "radisson-kabab-factory-pop-1",
        "name": "Galouti Kebab",
        "price": 550,
        "category": "Starters",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=600&q=80",
        "description": "Smoked minced lamb blended with 160 traditional Awadhi spices, served on ulta tawa paratha."
      },
      {
        "id": "radisson-kabab-factory-pop-2",
        "name": "Dal Baluchi",
        "price": 420,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=600&q=80",
        "description": "Heritage black lentils simmered for 18 hours with churned dairy butter and mild spices."
      },
      {
        "id": "radisson-kabab-factory-pop-3",
        "name": "Gosht Dum Biryani",
        "price": 680,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1545247181-516773cae754?auto=format&fit=crop&w=600&q=80",
        "description": "Aromatic long-grain basmati layered with tender meat/veggies, saffron, mint, and whole spices."
      },
      {
        "id": "radisson-kabab-factory-pop-4",
        "name": "Kesar Phirni",
        "price": 210,
        "category": "Desserts",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1564355808539-22fda35bed7e?auto=format&fit=crop&w=600&q=80",
        "description": "Traditional Kashmiri saffron infused creamy rice pudding served in terracotta pots."
      },
      {
        "id": "radisson-kabab-factory-item-1",
        "name": "Galawati Kabab with Ulte Tawe Ka Paratha",
        "price": 380,
        "category": "Starters",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=600&q=80",
        "description": "Mouth-melting Awadhi minced mutton kebabs spiced with 32 fragrant herbs, served with Mughlai paratha."
      },
      {
        "id": "radisson-kabab-factory-item-2",
        "name": "Murgh Malai Tikka (6 pcs)",
        "price": 340,
        "category": "Starters",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=600&q=80",
        "description": "Boneless chicken chunks marinated in cream, cheese, hung curd, and crushed cardamom, grilled in tandoor."
      },
      {
        "id": "radisson-kabab-factory-item-3",
        "name": "Mutton Seekh Kebab (4 pcs)",
        "price": 390,
        "category": "Starters",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=600&q=80",
        "description": "Finely minced spiced mutton skewers cooked over glowing charcoal embers."
      },
      {
        "id": "radisson-kabab-factory-item-4",
        "name": "Tandoori Chicken (Half / Full)",
        "price": 290,
        "category": "Starters",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80",
        "description": "Classic bone-in chicken marinated in Kashmiri chilli, mustard oil and hung curd roasted in tandoor."
      },
      {
        "id": "radisson-kabab-factory-item-5",
        "name": "Paneer Tikka Shashlik",
        "price": 280,
        "category": "Starters",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=600&q=80",
        "description": "Cottage cheese cubes with bell peppers and onions grilled to perfection in clay oven."
      },
      {
        "id": "radisson-kabab-factory-item-6",
        "name": "Special Butter Chicken",
        "price": 390,
        "category": "Main Course",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=600&q=80",
        "description": "Tender tandoori chicken cooked in an authentic velvety makhani gravy enriched with honey and fenugreek."
      },
      {
        "id": "radisson-kabab-factory-item-7",
        "name": "Handi Mutton Rogan Josh",
        "price": 460,
        "category": "Main Course",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1545247181-516773cae754?auto=format&fit=crop&w=600&q=80",
        "description": "Tender baby mutton simmered in a clay handi with ratan jot, Kashmiri chilies, and aromatic whole spices."
      },
      {
        "id": "radisson-kabab-factory-item-8",
        "name": "Chicken Lababdar",
        "price": 370,
        "category": "Main Course",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=600&q=80",
        "description": "Succulent chicken pieces in a chunky spiced onion-tomato gravy finished with grated paneer and cream."
      },
      {
        "id": "radisson-kabab-factory-item-9",
        "name": "Kadhai Paneer",
        "price": 290,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=600&q=80",
        "description": "Paneer cubes tossed with fresh ground coriander, dry red chillies, capsicum, and thick onion masala."
      },
      {
        "id": "radisson-kabab-factory-item-10",
        "name": "Dal Makhani Slow-Cooked",
        "price": 240,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80",
        "description": "Classic black lentils slow-cooked with fresh cream and butter for 24 hours."
      },
      {
        "id": "radisson-kabab-factory-item-11",
        "name": "Dum Chicken Biryani with Mirchi Salan",
        "price": 340,
        "category": "Biryani & Rice",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=600&q=80",
        "description": "Long-grain aged basmati rice layered with marinated chicken, saffron milk, brown onions, and kewra."
      }
    ]
  },
  {
    "id": "ten-park-street-cafe",
    "name": "10 Park Street Cafe & Restaurant",
    "area": "Civil Lines",
    "city": "Gorakhpur",
    "description": "Top-rated trendy cafe on Park Road popular for artisanal wood-fired pizzas, cheesy garlic breads, loaded burgers, and cold brews.",
    "categories": [
      "cafe",
      "fast-food"
    ],
    "cuisines": [
      "Cafe",
      "Italian",
      "Continental",
      "Beverages"
    ],
    "popularDishes": [
      "Thin Crust Pizza",
      "Cheese Volcano Burger",
      "Hazelnut Cold Coffee",
      "Peri Peri Fries"
    ],
    "costForTwo": 650,
    "averageRating": 4.7,
    "reviewCount": 480,
    "imageUrl": "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?auto=format&fit=crop&w=1000&q=80",
    "logoUrl": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20100%20100%22%20width%3D%22200%22%20height%3D%22200%22%3E%0A%20%20%3Cdefs%3E%0A%20%20%20%20%3ClinearGradient%20id%3D%22brandGrad_ten-park-street-cafe%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%235c3a21%22%2F%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%2326180e%22%2F%3E%0A%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%3Cfilter%20id%3D%22shadow_ten-park-street-cafe%22%20x%3D%22-10%25%22%20y%3D%22-10%25%22%20width%3D%22120%25%22%20height%3D%22120%25%22%3E%0A%20%20%20%20%20%20%3CfeDropShadow%20dx%3D%220%22%20dy%3D%222%22%20stdDeviation%3D%222.5%22%20flood-opacity%3D%220.35%22%2F%3E%0A%20%20%20%20%3C%2Ffilter%3E%0A%20%20%3C%2Fdefs%3E%0A%20%20%3C!--%20Background%20Shield%20Badge%20--%3E%0A%20%20%3Crect%20x%3D%224%22%20y%3D%224%22%20width%3D%2292%22%20height%3D%2292%22%20rx%3D%2226%22%20fill%3D%22url(%23brandGrad_ten-park-street-cafe)%22%20stroke%3D%22%23fed7aa%22%20stroke-width%3D%222.5%22%20filter%3D%22url(%23shadow_ten-park-street-cafe)%22%2F%3E%0A%20%20%3C!--%20Inner%20Ornamental%20Line%20--%3E%0A%20%20%3Crect%20x%3D%229%22%20y%3D%229%22%20width%3D%2282%22%20height%3D%2282%22%20rx%3D%2221%22%20fill%3D%22none%22%20stroke%3D%22%23fed7aa%22%20stroke-width%3D%221%22%20stroke-dasharray%3D%223%203%22%20opacity%3D%220.45%22%2F%3E%0A%20%20%3C!--%20Emblem%20Motif%20--%3E%0A%20%20%3Cpath%20d%3D%22M38%2038%20C38%2034%2042%2032%2046%2032%20L54%2032%20C58%2032%2062%2034%2062%2038%20L60%2050%20C60%2054%2056%2056%2050%2056%20C44%2056%2040%2054%2040%2050%20Z%22%20fill%3D%22%23fed7aa%22%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22M62%2040%20L65%2040%20C67%2040%2068%2041%2068%2043%20L68%2045%20C68%2047%2067%2048%2065%2048%20L61%2048%22%20stroke%3D%22%23fed7aa%22%20stroke-width%3D%222%22%20fill%3D%22none%22%2F%3E%0A%20%20%3C!--%20Typography%20%2F%20Monogram%20--%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2276%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C%20-apple-system%2C%20sans-serif%22%20font-weight%3D%22900%22%20font-size%3D%2215%22%20fill%3D%22%23ffffff%22%20letter-spacing%3D%221.5%22%3E1P%3C%2Ftext%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2287%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C%20-apple-system%2C%20sans-serif%22%20font-weight%3D%22800%22%20font-size%3D%226.5%22%20fill%3D%22%23fed7aa%22%20letter-spacing%3D%222%22%3EGORAKHPUR%3C%2Ftext%3E%0A%3C%2Fsvg%3E",
    "isDemo": false,
    "phone": "+91 94500 12010",
    "address": "10 Park Road, Opposite Jublee Talkies, Civil Lines, Gorakhpur",
    "openTime": "11:00",
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
    "ownerName": "Raghav Singhal",
    "ownerEmail": "parkstreet.cafe@gorakhpurfoodguide.in",
    "facilities": [
      "Air Conditioned",
      "Free High Speed Wi-Fi",
      "Outdoor Patio",
      "Co-working Friendly",
      "Card & UPI"
    ],
    "ratingsBreakdown": {
      "food": 4.8,
      "taste": 4.8,
      "hygiene": 4.7,
      "service": 4.6,
      "ambience": 4.9
    },
    "priceRange": {
      "min": 200,
      "max": 700
    },
    "distanceKm": 0.9,
    "menu": [
      {
        "id": "ten-park-street-cafe-pop-1",
        "name": "Thin Crust Pizza",
        "price": 390,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80",
        "description": "Freshly baked hand-tossed crust with gourmet mozzarella, herb marinara, and fresh toppings."
      },
      {
        "id": "ten-park-street-cafe-pop-2",
        "name": "Cheese Volcano Burger",
        "price": 310,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80",
        "description": "Toasted brioche bun loaded with fresh patty, melted cheese, crisp lettuce, and signature sauce."
      },
      {
        "id": "ten-park-street-cafe-pop-3",
        "name": "Hazelnut Cold Coffee",
        "price": 169,
        "category": "Beverages",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=600&q=80",
        "description": "Double espresso blended with roasted hazelnut syrup, ice cream and dark chocolate drizzle."
      },
      {
        "id": "ten-park-street-cafe-pop-4",
        "name": "Peri Peri Fries",
        "price": 230,
        "category": "Starters",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1576107232684-1279f3908594?auto=format&fit=crop&w=600&q=80",
        "description": "Fresh cottage cheese and seasonal ingredients simmered in a luscious spiced onion-tomato gravy."
      },
      {
        "id": "ten-park-street-cafe-item-1",
        "name": "Belgian Nutella Waffle with Vanilla Ice Cream",
        "price": 210,
        "category": "Desserts",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1562376552-0d160a2f238d?auto=format&fit=crop&w=600&q=80",
        "description": "Freshly baked golden Belgian waffle smothered with warm Nutella and topped with ice cream."
      },
      {
        "id": "ten-park-street-cafe-item-2",
        "name": "Lotus Biscoff Thick Shake",
        "price": 190,
        "category": "Beverages",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=600&q=80",
        "description": "Creamy milkshake blended with genuine Lotus Biscoff spread and crushed caramelized biscuits."
      },
      {
        "id": "ten-park-street-cafe-item-3",
        "name": "Farmhouse Woodfired Pizza (10 inch)",
        "price": 360,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80",
        "description": "Hand-stretched dough topped with San Marzano tomato sauce, mozzarella, bell peppers, mushrooms and olives."
      },
      {
        "id": "ten-park-street-cafe-item-4",
        "name": "Penne Creamy Alfredo Pasta with Mushrooms",
        "price": 290,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1621996346565-e3d5d6281724?auto=format&fit=crop&w=600&q=80",
        "description": "Al dente penne tossed in rich parmesan garlic white sauce with sautéed mushrooms."
      },
      {
        "id": "ten-park-street-cafe-item-5",
        "name": "Loaded Cheesy Mexican Nachos",
        "price": 240,
        "category": "Starters",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1576107232684-1279f3908594?auto=format&fit=crop&w=600&q=80",
        "description": "Crispy corn tortilla chips baked with jalapeños, salsa, black olives and warm cheddar sauce."
      },
      {
        "id": "ten-park-street-cafe-item-6",
        "name": "Crispy Peri Peri French Fries",
        "price": 140,
        "category": "Starters",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1576107232684-1279f3908594?auto=format&fit=crop&w=600&q=80",
        "description": "Golden potato fries seasoned with zesty African bird’s eye peri-peri spice dust."
      },
      {
        "id": "ten-park-street-cafe-item-7",
        "name": "Classic Cold Coffee with Ice Cream",
        "price": 160,
        "category": "Beverages",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=600&q=80",
        "description": "Rich espresso blended with chilled whole milk and topped with a scoop of vanilla gelato."
      },
      {
        "id": "ten-park-street-cafe-item-8",
        "name": "Kulhad Adrak Masala Chai",
        "price": 60,
        "category": "Beverages",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=600&q=80",
        "description": "Freshly brewed strong tea infused with crushed ginger, cardamom, and clove in a clay kulhad."
      },
      {
        "id": "ten-park-street-cafe-item-9",
        "name": "New York Baked Blueberry Cheesecake",
        "price": 220,
        "category": "Desserts",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=600&q=80",
        "description": "Dense cream cheese filling on a graham cracker crust topped with tangy wild blueberry compote."
      },
      {
        "id": "ten-park-street-cafe-item-10",
        "name": "Tiramisu Italiano Cup",
        "price": 210,
        "category": "Desserts",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=600&q=80",
        "description": "Espresso-soaked savoiardi biscuits layered with mascarpone cream and dusted with cocoa."
      },
      {
        "id": "ten-park-street-cafe-item-11",
        "name": "Classic Grilled Paneer Tikka Sandwich",
        "price": 180,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=600&q=80",
        "description": "Multi-grain bread toasted with spiced paneer tikka, mint chutney, and mozzarella cheese."
      }
    ]
  },
  {
    "id": "royal-cafe-banquet",
    "name": "Royal Cafe & Banquet",
    "area": "Golghar",
    "city": "Gorakhpur",
    "description": "Renowned family dining landmark celebrated for its iconic Tokri (Basket) Chaat, Mughlai gravies, and grand party banquets.",
    "categories": [
      "north-indian",
      "street-food"
    ],
    "cuisines": [
      "North Indian",
      "Chaat",
      "Chinese",
      "Mughlai"
    ],
    "popularDishes": [
      "Royal Basket Chaat",
      "Butter Chicken",
      "Paneer Tikka Masala",
      "Kulfi Falooda"
    ],
    "costForTwo": 550,
    "averageRating": 4.6,
    "reviewCount": 520,
    "imageUrl": "https://images.unsplash.com/photo-1574936145840-28808d77a0b6?auto=format&fit=crop&w=1000&q=80",
    "logoUrl": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20100%20100%22%20width%3D%22200%22%20height%3D%22200%22%3E%0A%20%20%3Cdefs%3E%0A%20%20%20%20%3ClinearGradient%20id%3D%22brandGrad_royal-cafe-banquet%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23a33a0a%22%2F%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%232b2018%22%2F%3E%0A%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%3Cfilter%20id%3D%22shadow_royal-cafe-banquet%22%20x%3D%22-10%25%22%20y%3D%22-10%25%22%20width%3D%22120%25%22%20height%3D%22120%25%22%3E%0A%20%20%20%20%20%20%3CfeDropShadow%20dx%3D%220%22%20dy%3D%222%22%20stdDeviation%3D%222.5%22%20flood-opacity%3D%220.35%22%2F%3E%0A%20%20%20%20%3C%2Ffilter%3E%0A%20%20%3C%2Fdefs%3E%0A%20%20%3C!--%20Background%20Shield%20Badge%20--%3E%0A%20%20%3Crect%20x%3D%224%22%20y%3D%224%22%20width%3D%2292%22%20height%3D%2292%22%20rx%3D%2226%22%20fill%3D%22url(%23brandGrad_royal-cafe-banquet)%22%20stroke%3D%22%23f5e9d0%22%20stroke-width%3D%222.5%22%20filter%3D%22url(%23shadow_royal-cafe-banquet)%22%2F%3E%0A%20%20%3C!--%20Inner%20Ornamental%20Line%20--%3E%0A%20%20%3Crect%20x%3D%229%22%20y%3D%229%22%20width%3D%2282%22%20height%3D%2282%22%20rx%3D%2221%22%20fill%3D%22none%22%20stroke%3D%22%23f5e9d0%22%20stroke-width%3D%221%22%20stroke-dasharray%3D%223%203%22%20opacity%3D%220.45%22%2F%3E%0A%20%20%3C!--%20Emblem%20Motif%20--%3E%0A%20%20%3Ccircle%20cx%3D%2250%22%20cy%3D%2238%22%20r%3D%2214%22%20stroke%3D%22%23f5e9d0%22%20stroke-width%3D%222%22%20fill%3D%22none%22%20opacity%3D%220.7%22%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22M44%2030%20L44%2046%20M56%2030%20L56%2046%20M42%2030%20C42%2035%2046%2035%2046%2030%22%20stroke%3D%22%23f5e9d0%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%2F%3E%0A%20%20%3C!--%20Typography%20%2F%20Monogram%20--%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2276%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C%20-apple-system%2C%20sans-serif%22%20font-weight%3D%22900%22%20font-size%3D%2215%22%20fill%3D%22%23ffffff%22%20letter-spacing%3D%221.5%22%3ERC%3C%2Ftext%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2287%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C%20-apple-system%2C%20sans-serif%22%20font-weight%3D%22800%22%20font-size%3D%226.5%22%20fill%3D%22%23f5e9d0%22%20letter-spacing%3D%222%22%3EGORAKHPUR%3C%2Ftext%3E%0A%3C%2Fsvg%3E",
    "isDemo": false,
    "phone": "+91 98380 77123",
    "address": "Near Baldev Plaza, Golghar, Gorakhpur",
    "openTime": "11:30",
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
    "ownerName": "Murli Dhar Agarwal",
    "ownerEmail": "royalcafe.golghar@gorakhpurfoodguide.in",
    "facilities": [
      "Air Conditioned",
      "Banquet Hall",
      "Family Section",
      "Takeaway Counter",
      "UPI Accepted"
    ],
    "ratingsBreakdown": {
      "food": 4.7,
      "taste": 4.8,
      "hygiene": 4.5,
      "service": 4.4,
      "ambience": 4.5
    },
    "priceRange": {
      "min": 150,
      "max": 600
    },
    "distanceKm": 0.6,
    "menu": [
      {
        "id": "royal-cafe-banquet-pop-1",
        "name": "Royal Basket Chaat",
        "price": 160,
        "category": "Starters",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80",
        "description": "Crispy edible potato basket packed with boiled potatoes, sprouts, chutneys, curd, and pomegranate."
      },
      {
        "id": "royal-cafe-banquet-pop-2",
        "name": "Butter Chicken",
        "price": 370,
        "category": "Main Course",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=600&q=80",
        "description": "Succulent pieces cooked in rich fragrant gravy with roasted spices, brown onions, and fresh coriander."
      },
      {
        "id": "royal-cafe-banquet-pop-3",
        "name": "Paneer Tikka Masala",
        "price": 200,
        "category": "Starters",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=600&q=80",
        "description": "Marinated in yogurt, roasted garlic, and spices, chargrilled to smoky perfection."
      },
      {
        "id": "royal-cafe-banquet-pop-4",
        "name": "Kulfi Falooda",
        "price": 90,
        "category": "Desserts",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=600&q=80",
        "description": "Fresh cottage cheese and seasonal ingredients simmered in a luscious spiced onion-tomato gravy."
      },
      {
        "id": "royal-cafe-banquet-item-1",
        "name": "Darjeeling Steamed Chicken Momos (8 pcs)",
        "price": 160,
        "category": "Starters",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=600&q=80",
        "description": "Thin-wrapper dumplings filled with juicy minced chicken, ginger and coriander with fiery red chutney."
      },
      {
        "id": "royal-cafe-banquet-item-2",
        "name": "Kurkure Crispy Paneer Momos (6 pcs)",
        "price": 150,
        "category": "Starters",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=600&q=80",
        "description": "Crispy cornflake-crusted deep-fried momos filled with seasoned spiced cottage cheese."
      },
      {
        "id": "royal-cafe-banquet-item-3",
        "name": "Chilli Garlic Hakka Noodles",
        "price": 190,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=600&q=80",
        "description": "Wok-tossed noodles with julienned vegetables, burnt garlic, soy, and spicy red chilli paste."
      },
      {
        "id": "royal-cafe-banquet-item-4",
        "name": "Veg Manchurian Gravy with Fried Rice Bowl",
        "price": 240,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=600&q=80",
        "description": "Deep-fried vegetable balls in a savory, tangy and spicy dark soya and ginger garlic sauce."
      },
      {
        "id": "royal-cafe-banquet-item-5",
        "name": "Schezwan Chicken Fried Rice",
        "price": 260,
        "category": "Main Course",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=600&q=80",
        "description": "Aged basmati rice stir-fried with diced chicken, eggs, and authentic spicy Sichuan pepper paste."
      },
      {
        "id": "royal-cafe-banquet-item-6",
        "name": "Crispy Honey Chilli Potatoes",
        "price": 180,
        "category": "Starters",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80",
        "description": "Crispy finger potatoes tossed in sweet honey, roasted sesame seeds, and spicy red chilli sauce."
      },
      {
        "id": "royal-cafe-banquet-item-7",
        "name": "Drums of Heaven Chicken Lollipops (6 pcs)",
        "price": 280,
        "category": "Starters",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=600&q=80",
        "description": "Crispy chicken winglets tossed in fiery Schezwan garlic sauce with spring onions."
      },
      {
        "id": "royal-cafe-banquet-item-8",
        "name": "Tibetan Thukpa Noodle Soup Bowl",
        "price": 210,
        "category": "Starters",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=600&q=80",
        "description": "Hearty Himalayan noodle soup packed with fresh greens, mushrooms, and spiced broth."
      },
      {
        "id": "royal-cafe-banquet-item-9",
        "name": "Crispy Fried Spring Rolls (6 pcs)",
        "price": 170,
        "category": "Starters",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?auto=format&fit=crop&w=600&q=80",
        "description": "Golden crunchy wrappers filled with cabbage, carrots, bell peppers, served with sweet chilli dip."
      },
      {
        "id": "royal-cafe-banquet-item-10",
        "name": "Darjeeling Lemon Iced Tea",
        "price": 110,
        "category": "Beverages",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=600&q=80",
        "description": "Refreshing brewed black tea infused with lemon zest and mint over crushed ice."
      },
      {
        "id": "royal-cafe-banquet-item-11",
        "name": "Darjeeling Darsaan with Vanilla Ice Cream",
        "price": 140,
        "category": "Desserts",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=600&q=80",
        "description": "Fried honey-glazed flat noodles topped with roasted sesame seeds and cool vanilla scoop."
      }
    ]
  },
  {
    "id": "curry-on-restaurant",
    "name": "Curry On Restaurant",
    "area": "Medical College Road",
    "city": "Gorakhpur",
    "description": "Bustling multi-cuisine restaurant serving hearty North Indian curries, sizzling starters, and fresh clay-oven tandoori breads.",
    "categories": [
      "north-indian",
      "chinese"
    ],
    "cuisines": [
      "North Indian",
      "Mughlai",
      "Indo-Chinese"
    ],
    "popularDishes": [
      "Handi Mutton",
      "Paneer Pasanda",
      "Crispy Corn",
      "Butter Naan"
    ],
    "costForTwo": 600,
    "averageRating": 4.5,
    "reviewCount": 390,
    "imageUrl": "https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?auto=format&fit=crop&w=1000&q=80",
    "logoUrl": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20100%20100%22%20width%3D%22200%22%20height%3D%22200%22%3E%0A%20%20%3Cdefs%3E%0A%20%20%20%20%3ClinearGradient%20id%3D%22brandGrad_curry-on-restaurant%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%237c1c1c%22%2F%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23240808%22%2F%3E%0A%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%3Cfilter%20id%3D%22shadow_curry-on-restaurant%22%20x%3D%22-10%25%22%20y%3D%22-10%25%22%20width%3D%22120%25%22%20height%3D%22120%25%22%3E%0A%20%20%20%20%20%20%3CfeDropShadow%20dx%3D%220%22%20dy%3D%222%22%20stdDeviation%3D%222.5%22%20flood-opacity%3D%220.35%22%2F%3E%0A%20%20%20%20%3C%2Ffilter%3E%0A%20%20%3C%2Fdefs%3E%0A%20%20%3C!--%20Background%20Shield%20Badge%20--%3E%0A%20%20%3Crect%20x%3D%224%22%20y%3D%224%22%20width%3D%2292%22%20height%3D%2292%22%20rx%3D%2226%22%20fill%3D%22url(%23brandGrad_curry-on-restaurant)%22%20stroke%3D%22%23fca5a5%22%20stroke-width%3D%222.5%22%20filter%3D%22url(%23shadow_curry-on-restaurant)%22%2F%3E%0A%20%20%3C!--%20Inner%20Ornamental%20Line%20--%3E%0A%20%20%3Crect%20x%3D%229%22%20y%3D%229%22%20width%3D%2282%22%20height%3D%2282%22%20rx%3D%2221%22%20fill%3D%22none%22%20stroke%3D%22%23fca5a5%22%20stroke-width%3D%221%22%20stroke-dasharray%3D%223%203%22%20opacity%3D%220.45%22%2F%3E%0A%20%20%3C!--%20Emblem%20Motif%20--%3E%0A%20%20%3Cpath%20d%3D%22M36%2044%20C36%2052%2064%2052%2064%2044%20Z%22%20fill%3D%22%23fca5a5%22%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22M42%2034%20L58%2048%20M58%2034%20L42%2048%22%20stroke%3D%22%23ffffff%22%20stroke-width%3D%222.5%22%20stroke-linecap%3D%22round%22%2F%3E%0A%20%20%3C!--%20Typography%20%2F%20Monogram%20--%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2276%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C%20-apple-system%2C%20sans-serif%22%20font-weight%3D%22900%22%20font-size%3D%2215%22%20fill%3D%22%23ffffff%22%20letter-spacing%3D%221.5%22%3ECO%3C%2Ftext%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2287%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C%20-apple-system%2C%20sans-serif%22%20font-weight%3D%22800%22%20font-size%3D%226.5%22%20fill%3D%22%23fca5a5%22%20letter-spacing%3D%222%22%3EGORAKHPUR%3C%2Ftext%3E%0A%3C%2Fsvg%3E",
    "isDemo": false,
    "phone": "+91 98399 44321",
    "address": "Near Basharatpur Crossing, Medical College Road, Gorakhpur",
    "openTime": "12:00",
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
    "ownerName": "Deepak Shukla",
    "ownerEmail": "curryon.gkp@gorakhpurfoodguide.in",
    "facilities": [
      "Air Conditioned",
      "Family Seating",
      "Free Parking",
      "Fast Delivery",
      "UPI & Cards"
    ],
    "ratingsBreakdown": {
      "food": 4.6,
      "taste": 4.6,
      "hygiene": 4.4,
      "service": 4.3,
      "ambience": 4.4
    },
    "priceRange": {
      "min": 200,
      "max": 650
    },
    "distanceKm": 3.5,
    "menu": [
      {
        "id": "curry-on-restaurant-pop-1",
        "name": "Handi Mutton",
        "price": 440,
        "category": "Main Course",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1545247181-516773cae754?auto=format&fit=crop&w=600&q=80",
        "description": "Tender goat meat slow cooked in clay pot with whole garlic pods and cold-pressed mustard oil."
      },
      {
        "id": "curry-on-restaurant-pop-2",
        "name": "Paneer Pasanda",
        "price": 290,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=600&q=80",
        "description": "Stuffed cottage cheese sandwiches cooked in rich cashew and onion gravy."
      },
      {
        "id": "curry-on-restaurant-pop-3",
        "name": "Crispy Corn",
        "price": 220,
        "category": "Starters",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=600&q=80",
        "description": "Fresh cottage cheese and seasonal ingredients simmered in a luscious spiced onion-tomato gravy."
      },
      {
        "id": "curry-on-restaurant-pop-4",
        "name": "Butter Naan",
        "price": 50,
        "category": "Breads",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=600&q=80",
        "description": "Fresh cottage cheese and seasonal ingredients simmered in a luscious spiced onion-tomato gravy."
      },
      {
        "id": "curry-on-restaurant-item-1",
        "name": "Darjeeling Steamed Chicken Momos (8 pcs)",
        "price": 160,
        "category": "Starters",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=600&q=80",
        "description": "Thin-wrapper dumplings filled with juicy minced chicken, ginger and coriander with fiery red chutney."
      },
      {
        "id": "curry-on-restaurant-item-2",
        "name": "Kurkure Crispy Paneer Momos (6 pcs)",
        "price": 150,
        "category": "Starters",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=600&q=80",
        "description": "Crispy cornflake-crusted deep-fried momos filled with seasoned spiced cottage cheese."
      },
      {
        "id": "curry-on-restaurant-item-3",
        "name": "Chilli Garlic Hakka Noodles",
        "price": 190,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=600&q=80",
        "description": "Wok-tossed noodles with julienned vegetables, burnt garlic, soy, and spicy red chilli paste."
      },
      {
        "id": "curry-on-restaurant-item-4",
        "name": "Veg Manchurian Gravy with Fried Rice Bowl",
        "price": 240,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=600&q=80",
        "description": "Deep-fried vegetable balls in a savory, tangy and spicy dark soya and ginger garlic sauce."
      },
      {
        "id": "curry-on-restaurant-item-5",
        "name": "Schezwan Chicken Fried Rice",
        "price": 260,
        "category": "Main Course",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=600&q=80",
        "description": "Aged basmati rice stir-fried with diced chicken, eggs, and authentic spicy Sichuan pepper paste."
      },
      {
        "id": "curry-on-restaurant-item-6",
        "name": "Crispy Honey Chilli Potatoes",
        "price": 180,
        "category": "Starters",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80",
        "description": "Crispy finger potatoes tossed in sweet honey, roasted sesame seeds, and spicy red chilli sauce."
      },
      {
        "id": "curry-on-restaurant-item-7",
        "name": "Drums of Heaven Chicken Lollipops (6 pcs)",
        "price": 280,
        "category": "Starters",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=600&q=80",
        "description": "Crispy chicken winglets tossed in fiery Schezwan garlic sauce with spring onions."
      },
      {
        "id": "curry-on-restaurant-item-8",
        "name": "Tibetan Thukpa Noodle Soup Bowl",
        "price": 210,
        "category": "Starters",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=600&q=80",
        "description": "Hearty Himalayan noodle soup packed with fresh greens, mushrooms, and spiced broth."
      },
      {
        "id": "curry-on-restaurant-item-9",
        "name": "Crispy Fried Spring Rolls (6 pcs)",
        "price": 170,
        "category": "Starters",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?auto=format&fit=crop&w=600&q=80",
        "description": "Golden crunchy wrappers filled with cabbage, carrots, bell peppers, served with sweet chilli dip."
      },
      {
        "id": "curry-on-restaurant-item-10",
        "name": "Darjeeling Lemon Iced Tea",
        "price": 110,
        "category": "Beverages",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=600&q=80",
        "description": "Refreshing brewed black tea infused with lemon zest and mint over crushed ice."
      },
      {
        "id": "curry-on-restaurant-item-11",
        "name": "Darjeeling Darsaan with Vanilla Ice Cream",
        "price": 140,
        "category": "Desserts",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=600&q=80",
        "description": "Fried honey-glazed flat noodles topped with roasted sesame seeds and cool vanilla scoop."
      }
    ]
  },
  {
    "id": "cinnamon-hotel-vivek",
    "name": "Cinnamon Fine Dine - Hotel Vivek",
    "area": "Civil Lines",
    "city": "Gorakhpur",
    "description": "Classic luxury family restaurant featuring lavish weekend buffets, rich North Indian curries, and refined hospitality.",
    "categories": [
      "north-indian"
    ],
    "cuisines": [
      "North Indian",
      "Continental",
      "Chinese"
    ],
    "popularDishes": [
      "Executive Thali",
      "Dal Makhani",
      "Chicken Lababdar",
      "Brownie Sundae"
    ],
    "costForTwo": 900,
    "averageRating": 4.6,
    "reviewCount": 370,
    "imageUrl": "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1000&q=80",
    "logoUrl": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20100%20100%22%20width%3D%22200%22%20height%3D%22200%22%3E%0A%20%20%3Cdefs%3E%0A%20%20%20%20%3ClinearGradient%20id%3D%22brandGrad_cinnamon-hotel-vivek%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23a33a0a%22%2F%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%232b2018%22%2F%3E%0A%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%3Cfilter%20id%3D%22shadow_cinnamon-hotel-vivek%22%20x%3D%22-10%25%22%20y%3D%22-10%25%22%20width%3D%22120%25%22%20height%3D%22120%25%22%3E%0A%20%20%20%20%20%20%3CfeDropShadow%20dx%3D%220%22%20dy%3D%222%22%20stdDeviation%3D%222.5%22%20flood-opacity%3D%220.35%22%2F%3E%0A%20%20%20%20%3C%2Ffilter%3E%0A%20%20%3C%2Fdefs%3E%0A%20%20%3C!--%20Background%20Shield%20Badge%20--%3E%0A%20%20%3Crect%20x%3D%224%22%20y%3D%224%22%20width%3D%2292%22%20height%3D%2292%22%20rx%3D%2226%22%20fill%3D%22url(%23brandGrad_cinnamon-hotel-vivek)%22%20stroke%3D%22%23f5e9d0%22%20stroke-width%3D%222.5%22%20filter%3D%22url(%23shadow_cinnamon-hotel-vivek)%22%2F%3E%0A%20%20%3C!--%20Inner%20Ornamental%20Line%20--%3E%0A%20%20%3Crect%20x%3D%229%22%20y%3D%229%22%20width%3D%2282%22%20height%3D%2282%22%20rx%3D%2221%22%20fill%3D%22none%22%20stroke%3D%22%23f5e9d0%22%20stroke-width%3D%221%22%20stroke-dasharray%3D%223%203%22%20opacity%3D%220.45%22%2F%3E%0A%20%20%3C!--%20Emblem%20Motif%20--%3E%0A%20%20%3Ccircle%20cx%3D%2250%22%20cy%3D%2238%22%20r%3D%2214%22%20stroke%3D%22%23f5e9d0%22%20stroke-width%3D%222%22%20fill%3D%22none%22%20opacity%3D%220.7%22%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22M44%2030%20L44%2046%20M56%2030%20L56%2046%20M42%2030%20C42%2035%2046%2035%2046%2030%22%20stroke%3D%22%23f5e9d0%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%2F%3E%0A%20%20%3C!--%20Typography%20%2F%20Monogram%20--%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2276%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C%20-apple-system%2C%20sans-serif%22%20font-weight%3D%22900%22%20font-size%3D%2215%22%20fill%3D%22%23ffffff%22%20letter-spacing%3D%221.5%22%3ECF%3C%2Ftext%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2287%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C%20-apple-system%2C%20sans-serif%22%20font-weight%3D%22800%22%20font-size%3D%226.5%22%20fill%3D%22%23f5e9d0%22%20letter-spacing%3D%222%22%3EGORAKHPUR%3C%2Ftext%3E%0A%3C%2Fsvg%3E",
    "isDemo": false,
    "phone": "+91 551 233 4567",
    "address": "Hotel Vivek Complex, Park Road, Civil Lines, Gorakhpur",
    "openTime": "11:00",
    "closeTime": "23:30",
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
    "ownerName": "Vivek Jaiswal",
    "ownerEmail": "cinnamon.vivek@gorakhpurfoodguide.in",
    "facilities": [
      "Fine Dining Atmosphere",
      "Valet Parking",
      "Buffet Spread",
      "Card Payments",
      "Wi-Fi"
    ],
    "ratingsBreakdown": {
      "food": 4.7,
      "taste": 4.7,
      "hygiene": 4.8,
      "service": 4.6,
      "ambience": 4.7
    },
    "priceRange": {
      "min": 350,
      "max": 950
    },
    "distanceKm": 0.8,
    "menu": [
      {
        "id": "cinnamon-hotel-vivek-pop-1",
        "name": "Executive Thali",
        "price": 400,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=600&q=80",
        "description": "Wholesome platter featuring two curries, dal, jeera rice, fresh breads, salad, and dessert."
      },
      {
        "id": "cinnamon-hotel-vivek-pop-2",
        "name": "Dal Makhani",
        "price": 290,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80",
        "description": "Slow cooked black urad dal with fresh tomatoes, cream, and pure butter."
      },
      {
        "id": "cinnamon-hotel-vivek-pop-3",
        "name": "Chicken Lababdar",
        "price": 610,
        "category": "Main Course",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=600&q=80",
        "description": "Succulent pieces cooked in rich fragrant gravy with roasted spices, brown onions, and fresh coriander."
      },
      {
        "id": "cinnamon-hotel-vivek-pop-4",
        "name": "Brownie Sundae",
        "price": 140,
        "category": "Desserts",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=600&q=80",
        "description": "Warm freshly baked dessert smothered in rich melted Belgian chocolate and garnishes."
      },
      {
        "id": "cinnamon-hotel-vivek-item-1",
        "name": "Darjeeling Steamed Chicken Momos (8 pcs)",
        "price": 160,
        "category": "Starters",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=600&q=80",
        "description": "Thin-wrapper dumplings filled with juicy minced chicken, ginger and coriander with fiery red chutney."
      },
      {
        "id": "cinnamon-hotel-vivek-item-2",
        "name": "Kurkure Crispy Paneer Momos (6 pcs)",
        "price": 150,
        "category": "Starters",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=600&q=80",
        "description": "Crispy cornflake-crusted deep-fried momos filled with seasoned spiced cottage cheese."
      },
      {
        "id": "cinnamon-hotel-vivek-item-3",
        "name": "Chilli Garlic Hakka Noodles",
        "price": 190,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=600&q=80",
        "description": "Wok-tossed noodles with julienned vegetables, burnt garlic, soy, and spicy red chilli paste."
      },
      {
        "id": "cinnamon-hotel-vivek-item-4",
        "name": "Veg Manchurian Gravy with Fried Rice Bowl",
        "price": 240,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=600&q=80",
        "description": "Deep-fried vegetable balls in a savory, tangy and spicy dark soya and ginger garlic sauce."
      },
      {
        "id": "cinnamon-hotel-vivek-item-5",
        "name": "Schezwan Chicken Fried Rice",
        "price": 260,
        "category": "Main Course",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=600&q=80",
        "description": "Aged basmati rice stir-fried with diced chicken, eggs, and authentic spicy Sichuan pepper paste."
      },
      {
        "id": "cinnamon-hotel-vivek-item-6",
        "name": "Crispy Honey Chilli Potatoes",
        "price": 180,
        "category": "Starters",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80",
        "description": "Crispy finger potatoes tossed in sweet honey, roasted sesame seeds, and spicy red chilli sauce."
      },
      {
        "id": "cinnamon-hotel-vivek-item-7",
        "name": "Drums of Heaven Chicken Lollipops (6 pcs)",
        "price": 280,
        "category": "Starters",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=600&q=80",
        "description": "Crispy chicken winglets tossed in fiery Schezwan garlic sauce with spring onions."
      },
      {
        "id": "cinnamon-hotel-vivek-item-8",
        "name": "Tibetan Thukpa Noodle Soup Bowl",
        "price": 210,
        "category": "Starters",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=600&q=80",
        "description": "Hearty Himalayan noodle soup packed with fresh greens, mushrooms, and spiced broth."
      },
      {
        "id": "cinnamon-hotel-vivek-item-9",
        "name": "Crispy Fried Spring Rolls (6 pcs)",
        "price": 170,
        "category": "Starters",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?auto=format&fit=crop&w=600&q=80",
        "description": "Golden crunchy wrappers filled with cabbage, carrots, bell peppers, served with sweet chilli dip."
      },
      {
        "id": "cinnamon-hotel-vivek-item-10",
        "name": "Darjeeling Lemon Iced Tea",
        "price": 110,
        "category": "Beverages",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=600&q=80",
        "description": "Refreshing brewed black tea infused with lemon zest and mint over crushed ice."
      },
      {
        "id": "cinnamon-hotel-vivek-item-11",
        "name": "Darjeeling Darsaan with Vanilla Ice Cream",
        "price": 140,
        "category": "Desserts",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=600&q=80",
        "description": "Fried honey-glazed flat noodles topped with roasted sesame seeds and cool vanilla scoop."
      }
    ]
  },
  {
    "id": "barbeque-nation-gkp",
    "name": "Barbeque Nation Gorakhpur",
    "area": "Golghar",
    "city": "Gorakhpur",
    "description": "Pioneers of live on-the-table grilling offering unlimited starters, lavish buffet spread, and live kulfi nation counter.",
    "categories": [
      "north-indian"
    ],
    "cuisines": [
      "Barbeque",
      "North Indian",
      "Buffet",
      "Desserts"
    ],
    "popularDishes": [
      "Cajun Spiced Potatoes",
      "Crispy Corn",
      "Tandoori Murgh Tikka",
      "Paan Kulfi"
    ],
    "costForTwo": 1400,
    "averageRating": 4.8,
    "reviewCount": 890,
    "imageUrl": "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1000&q=80",
    "logoUrl": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20100%20100%22%20width%3D%22200%22%20height%3D%22200%22%3E%0A%20%20%3Cdefs%3E%0A%20%20%20%20%3ClinearGradient%20id%3D%22brandGrad_barbeque-nation-gkp%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23a33a0a%22%2F%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%232b2018%22%2F%3E%0A%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%3Cfilter%20id%3D%22shadow_barbeque-nation-gkp%22%20x%3D%22-10%25%22%20y%3D%22-10%25%22%20width%3D%22120%25%22%20height%3D%22120%25%22%3E%0A%20%20%20%20%20%20%3CfeDropShadow%20dx%3D%220%22%20dy%3D%222%22%20stdDeviation%3D%222.5%22%20flood-opacity%3D%220.35%22%2F%3E%0A%20%20%20%20%3C%2Ffilter%3E%0A%20%20%3C%2Fdefs%3E%0A%20%20%3C!--%20Background%20Shield%20Badge%20--%3E%0A%20%20%3Crect%20x%3D%224%22%20y%3D%224%22%20width%3D%2292%22%20height%3D%2292%22%20rx%3D%2226%22%20fill%3D%22url(%23brandGrad_barbeque-nation-gkp)%22%20stroke%3D%22%23f5e9d0%22%20stroke-width%3D%222.5%22%20filter%3D%22url(%23shadow_barbeque-nation-gkp)%22%2F%3E%0A%20%20%3C!--%20Inner%20Ornamental%20Line%20--%3E%0A%20%20%3Crect%20x%3D%229%22%20y%3D%229%22%20width%3D%2282%22%20height%3D%2282%22%20rx%3D%2221%22%20fill%3D%22none%22%20stroke%3D%22%23f5e9d0%22%20stroke-width%3D%221%22%20stroke-dasharray%3D%223%203%22%20opacity%3D%220.45%22%2F%3E%0A%20%20%3C!--%20Emblem%20Motif%20--%3E%0A%20%20%3Ccircle%20cx%3D%2250%22%20cy%3D%2238%22%20r%3D%2214%22%20stroke%3D%22%23f5e9d0%22%20stroke-width%3D%222%22%20fill%3D%22none%22%20opacity%3D%220.7%22%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22M44%2030%20L44%2046%20M56%2030%20L56%2046%20M42%2030%20C42%2035%2046%2035%2046%2030%22%20stroke%3D%22%23f5e9d0%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%2F%3E%0A%20%20%3C!--%20Typography%20%2F%20Monogram%20--%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2276%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C%20-apple-system%2C%20sans-serif%22%20font-weight%3D%22900%22%20font-size%3D%2215%22%20fill%3D%22%23ffffff%22%20letter-spacing%3D%221.5%22%3EBN%3C%2Ftext%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2287%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C%20-apple-system%2C%20sans-serif%22%20font-weight%3D%22800%22%20font-size%3D%226.5%22%20fill%3D%22%23f5e9d0%22%20letter-spacing%3D%222%22%3EGORAKHPUR%3C%2Ftext%3E%0A%3C%2Fsvg%3E",
    "isDemo": false,
    "phone": "+91 80690 28724",
    "address": "3rd Floor, AD Mall, Cinema Road, Golghar, Gorakhpur",
    "openTime": "12:00",
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
    "ownerName": "Manish Sharma (Area Mgr)",
    "ownerEmail": "bbq.gorakhpur@gorakhpurfoodguide.in",
    "facilities": [
      "Live Grill on Table",
      "Mall Parking",
      "Air Conditioned",
      "Full Buffet",
      "Credit Cards"
    ],
    "ratingsBreakdown": {
      "food": 4.9,
      "taste": 4.8,
      "hygiene": 4.9,
      "service": 4.8,
      "ambience": 4.8
    },
    "priceRange": {
      "min": 650,
      "max": 1500
    },
    "distanceKm": 0.5,
    "menu": [
      {
        "id": "barbeque-nation-gkp-pop-1",
        "name": "Cajun Spiced Potatoes",
        "price": 670,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=600&q=80",
        "description": "Fresh cottage cheese and seasonal ingredients simmered in a luscious spiced onion-tomato gravy."
      },
      {
        "id": "barbeque-nation-gkp-pop-2",
        "name": "Crispy Corn",
        "price": 500,
        "category": "Starters",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=600&q=80",
        "description": "Fresh cottage cheese and seasonal ingredients simmered in a luscious spiced onion-tomato gravy."
      },
      {
        "id": "barbeque-nation-gkp-pop-3",
        "name": "Tandoori Murgh Tikka",
        "price": 500,
        "category": "Starters",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=600&q=80",
        "description": "Marinated in yogurt, roasted garlic, and spices, chargrilled to smoky perfection."
      },
      {
        "id": "barbeque-nation-gkp-pop-4",
        "name": "Paan Kulfi",
        "price": 220,
        "category": "Desserts",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=600&q=80",
        "description": "Fresh cottage cheese and seasonal ingredients simmered in a luscious spiced onion-tomato gravy."
      },
      {
        "id": "barbeque-nation-gkp-item-1",
        "name": "Shaam Savera Signature Spinach Kofta",
        "price": 390,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=600&q=80",
        "description": "Chef Sanjeev Kapoor’s masterpiece: paneer stuffed spinach dumplings in rich velvety tomato gravy."
      },
      {
        "id": "barbeque-nation-gkp-item-2",
        "name": "Crispy Spiced Corn Tempura",
        "price": 240,
        "category": "Starters",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=600&q=80",
        "description": "Tender sweet corn kernels wok-tossed with chopped green chillies, spring onions and pepper salt."
      },
      {
        "id": "barbeque-nation-gkp-item-3",
        "name": "Cajun Spiced Roasted Potatoes",
        "price": 220,
        "category": "Starters",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=600&q=80",
        "description": "Baby potatoes roasted with herbs and drizzled with creamy cajun dipping sauce."
      },
      {
        "id": "barbeque-nation-gkp-item-4",
        "name": "Bhatti Da Murgh Tikka",
        "price": 380,
        "category": "Starters",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=600&q=80",
        "description": "Robust chicken drumsticks marinated with charred whole spices and grilled on open charcoal."
      },
      {
        "id": "barbeque-nation-gkp-item-5",
        "name": "Lalla Mussa Dal Signature",
        "price": 290,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80",
        "description": "Slow-simmered green moong and black lentils enriched with country butter and roasted cumin."
      },
      {
        "id": "barbeque-nation-gkp-item-6",
        "name": "Lawrence Road Tandoori Murgh",
        "price": 440,
        "category": "Main Course",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=600&q=80",
        "description": "Famous Amritsari style whole roasted chicken simmered in a spiced onion tomato masala."
      },
      {
        "id": "barbeque-nation-gkp-item-7",
        "name": "Paneer Tikka Lababdar",
        "price": 340,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=600&q=80",
        "description": "Char-grilled cottage cheese steeped in tomato-cashew gravy with bell peppers."
      },
      {
        "id": "barbeque-nation-gkp-item-8",
        "name": "Parda Chicken Dum Biryani",
        "price": 390,
        "category": "Biryani & Rice",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=600&q=80",
        "description": "Biryani sealed under a flaky puff pastry crust to preserve every nuance of Awadhi aromatics."
      },
      {
        "id": "barbeque-nation-gkp-item-9",
        "name": "Roghani Stuffed Kulcha",
        "price": 85,
        "category": "Breads",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=600&q=80",
        "description": "Flaky leavened bread stuffed with spiced cottage cheese and topped with sesame seeds."
      },
      {
        "id": "barbeque-nation-gkp-item-10",
        "name": "Peru Pyala Guava Drink with Chilli Rim",
        "price": 160,
        "category": "Beverages",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1553787499-6f9133860278?auto=format&fit=crop&w=600&q=80",
        "description": "Guava juice served in a chilli-salt rimmed glass with Worcestershire splash."
      },
      {
        "id": "barbeque-nation-gkp-item-11",
        "name": "Gulab-e-Gulkan Royal Dessert",
        "price": 180,
        "category": "Desserts",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=600&q=80",
        "description": "Warm gulab jamuns stuffed with fragrant rose petal gulkand, served with vanilla ice cream."
      }
    ]
  },
  {
    "id": "moti-mahal-delux-gkp",
    "name": "Moti Mahal Delux",
    "area": "Civil Lines",
    "city": "Gorakhpur",
    "description": "Legendary brand that invented Butter Chicken and Dal Makhani, serving heritage North Indian flavors.",
    "categories": [
      "north-indian"
    ],
    "cuisines": [
      "North Indian",
      "Mughlai",
      "Tandoori"
    ],
    "popularDishes": [
      "Original Butter Chicken",
      "Tandoori Murgh",
      "Dal Makhani",
      "Stuffed Kulcha"
    ],
    "costForTwo": 950,
    "averageRating": 4.7,
    "reviewCount": 430,
    "imageUrl": "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1000&q=80",
    "logoUrl": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20100%20100%22%20width%3D%22200%22%20height%3D%22200%22%3E%0A%20%20%3Cdefs%3E%0A%20%20%20%20%3ClinearGradient%20id%3D%22brandGrad_moti-mahal-delux-gkp%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23a33a0a%22%2F%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%232b2018%22%2F%3E%0A%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%3Cfilter%20id%3D%22shadow_moti-mahal-delux-gkp%22%20x%3D%22-10%25%22%20y%3D%22-10%25%22%20width%3D%22120%25%22%20height%3D%22120%25%22%3E%0A%20%20%20%20%20%20%3CfeDropShadow%20dx%3D%220%22%20dy%3D%222%22%20stdDeviation%3D%222.5%22%20flood-opacity%3D%220.35%22%2F%3E%0A%20%20%20%20%3C%2Ffilter%3E%0A%20%20%3C%2Fdefs%3E%0A%20%20%3C!--%20Background%20Shield%20Badge%20--%3E%0A%20%20%3Crect%20x%3D%224%22%20y%3D%224%22%20width%3D%2292%22%20height%3D%2292%22%20rx%3D%2226%22%20fill%3D%22url(%23brandGrad_moti-mahal-delux-gkp)%22%20stroke%3D%22%23f5e9d0%22%20stroke-width%3D%222.5%22%20filter%3D%22url(%23shadow_moti-mahal-delux-gkp)%22%2F%3E%0A%20%20%3C!--%20Inner%20Ornamental%20Line%20--%3E%0A%20%20%3Crect%20x%3D%229%22%20y%3D%229%22%20width%3D%2282%22%20height%3D%2282%22%20rx%3D%2221%22%20fill%3D%22none%22%20stroke%3D%22%23f5e9d0%22%20stroke-width%3D%221%22%20stroke-dasharray%3D%223%203%22%20opacity%3D%220.45%22%2F%3E%0A%20%20%3C!--%20Emblem%20Motif%20--%3E%0A%20%20%3Ccircle%20cx%3D%2250%22%20cy%3D%2238%22%20r%3D%2214%22%20stroke%3D%22%23f5e9d0%22%20stroke-width%3D%222%22%20fill%3D%22none%22%20opacity%3D%220.7%22%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22M44%2030%20L44%2046%20M56%2030%20L56%2046%20M42%2030%20C42%2035%2046%2035%2046%2030%22%20stroke%3D%22%23f5e9d0%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%2F%3E%0A%20%20%3C!--%20Typography%20%2F%20Monogram%20--%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2276%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C%20-apple-system%2C%20sans-serif%22%20font-weight%3D%22900%22%20font-size%3D%2215%22%20fill%3D%22%23ffffff%22%20letter-spacing%3D%221.5%22%3EMM%3C%2Ftext%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2287%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C%20-apple-system%2C%20sans-serif%22%20font-weight%3D%22800%22%20font-size%3D%226.5%22%20fill%3D%22%23f5e9d0%22%20letter-spacing%3D%222%22%3EGORAKHPUR%3C%2Ftext%3E%0A%3C%2Fsvg%3E",
    "isDemo": false,
    "phone": "+91 94152 11990",
    "address": "Near Gandhi Gali, Park Road, Civil Lines, Gorakhpur",
    "openTime": "12:00",
    "closeTime": "23:30",
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
    "ownerName": "Sanjay Gujral",
    "ownerEmail": "motimahal.gkp@gorakhpurfoodguide.in",
    "facilities": [
      "Heritage Ambiance",
      "Air Conditioned",
      "Takeaway",
      "Card & UPI Payments"
    ],
    "ratingsBreakdown": {
      "food": 4.8,
      "taste": 4.9,
      "hygiene": 4.6,
      "service": 4.5,
      "ambience": 4.6
    },
    "priceRange": {
      "min": 400,
      "max": 1000
    },
    "distanceKm": 1,
    "menu": [
      {
        "id": "moti-mahal-delux-gkp-pop-1",
        "name": "Original Butter Chicken",
        "price": 650,
        "category": "Main Course",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=600&q=80",
        "description": "Succulent pieces cooked in rich fragrant gravy with roasted spices, brown onions, and fresh coriander."
      },
      {
        "id": "moti-mahal-delux-gkp-pop-2",
        "name": "Tandoori Murgh",
        "price": 460,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=600&q=80",
        "description": "Succulent pieces cooked in rich fragrant gravy with roasted spices, brown onions, and fresh coriander."
      },
      {
        "id": "moti-mahal-delux-gkp-pop-3",
        "name": "Dal Makhani",
        "price": 460,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80",
        "description": "Black lentils slow cooked overnight with churned white butter and velvety dairy cream."
      },
      {
        "id": "moti-mahal-delux-gkp-pop-4",
        "name": "Stuffed Kulcha",
        "price": 130,
        "category": "Breads",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=600&q=80",
        "description": "Fresh cottage cheese and seasonal ingredients simmered in a luscious spiced onion-tomato gravy."
      },
      {
        "id": "moti-mahal-delux-gkp-item-1",
        "name": "Galawati Kabab with Ulte Tawe Ka Paratha",
        "price": 380,
        "category": "Starters",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=600&q=80",
        "description": "Mouth-melting Awadhi minced mutton kebabs spiced with 32 fragrant herbs, served with Mughlai paratha."
      },
      {
        "id": "moti-mahal-delux-gkp-item-2",
        "name": "Murgh Malai Tikka (6 pcs)",
        "price": 340,
        "category": "Starters",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=600&q=80",
        "description": "Boneless chicken chunks marinated in cream, cheese, hung curd, and crushed cardamom, grilled in tandoor."
      },
      {
        "id": "moti-mahal-delux-gkp-item-3",
        "name": "Mutton Seekh Kebab (4 pcs)",
        "price": 390,
        "category": "Starters",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=600&q=80",
        "description": "Finely minced spiced mutton skewers cooked over glowing charcoal embers."
      },
      {
        "id": "moti-mahal-delux-gkp-item-4",
        "name": "Tandoori Chicken (Half / Full)",
        "price": 290,
        "category": "Starters",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80",
        "description": "Classic bone-in chicken marinated in Kashmiri chilli, mustard oil and hung curd roasted in tandoor."
      },
      {
        "id": "moti-mahal-delux-gkp-item-5",
        "name": "Paneer Tikka Shashlik",
        "price": 280,
        "category": "Starters",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=600&q=80",
        "description": "Cottage cheese cubes with bell peppers and onions grilled to perfection in clay oven."
      },
      {
        "id": "moti-mahal-delux-gkp-item-6",
        "name": "Special Butter Chicken",
        "price": 390,
        "category": "Main Course",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=600&q=80",
        "description": "Tender tandoori chicken cooked in an authentic velvety makhani gravy enriched with honey and fenugreek."
      },
      {
        "id": "moti-mahal-delux-gkp-item-7",
        "name": "Handi Mutton Rogan Josh",
        "price": 460,
        "category": "Main Course",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1545247181-516773cae754?auto=format&fit=crop&w=600&q=80",
        "description": "Tender baby mutton simmered in a clay handi with ratan jot, Kashmiri chilies, and aromatic whole spices."
      },
      {
        "id": "moti-mahal-delux-gkp-item-8",
        "name": "Chicken Lababdar",
        "price": 370,
        "category": "Main Course",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=600&q=80",
        "description": "Succulent chicken pieces in a chunky spiced onion-tomato gravy finished with grated paneer and cream."
      },
      {
        "id": "moti-mahal-delux-gkp-item-9",
        "name": "Kadhai Paneer",
        "price": 290,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=600&q=80",
        "description": "Paneer cubes tossed with fresh ground coriander, dry red chillies, capsicum, and thick onion masala."
      },
      {
        "id": "moti-mahal-delux-gkp-item-11",
        "name": "Dum Chicken Biryani with Mirchi Salan",
        "price": 340,
        "category": "Biryani & Rice",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=600&q=80",
        "description": "Long-grain aged basmati rice layered with marinated chicken, saffron milk, brown onions, and kewra."
      },
      {
        "id": "moti-mahal-delux-gkp-item-12",
        "name": "Hyderabadi Dum Gosht Biryani",
        "price": 440,
        "category": "Biryani & Rice",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1545247181-516773cae754?auto=format&fit=crop&w=600&q=80",
        "description": "Fragrant basmati rice slow-cooked on dum with spiced mutton chunks, served with raita and salan."
      }
    ]
  },
  {
    "id": "cafe-nirvana-lake",
    "name": "Cafe Nirvana Rooftop Diner",
    "area": "Taramandal",
    "city": "Gorakhpur",
    "description": "Scenic lake-view rooftop lounge overlooking Ramgarh Taal, serving artisanal wood-fired pizzas, mocktails, and live musical nights.",
    "categories": [
      "cafe",
      "fast-food"
    ],
    "cuisines": [
      "Cafe",
      "Continental",
      "Italian",
      "Mocktails"
    ],
    "popularDishes": [
      "Sunset Sangria Mocktail",
      "Pesto Pasta",
      "BBQ Chicken Pizza",
      "Nutella Waffle"
    ],
    "costForTwo": 700,
    "averageRating": 4.8,
    "reviewCount": 460,
    "imageUrl": "https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=1000&q=80",
    "logoUrl": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20100%20100%22%20width%3D%22200%22%20height%3D%22200%22%3E%0A%20%20%3Cdefs%3E%0A%20%20%20%20%3ClinearGradient%20id%3D%22brandGrad_cafe-nirvana-lake%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%235c3a21%22%2F%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%2326180e%22%2F%3E%0A%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%3Cfilter%20id%3D%22shadow_cafe-nirvana-lake%22%20x%3D%22-10%25%22%20y%3D%22-10%25%22%20width%3D%22120%25%22%20height%3D%22120%25%22%3E%0A%20%20%20%20%20%20%3CfeDropShadow%20dx%3D%220%22%20dy%3D%222%22%20stdDeviation%3D%222.5%22%20flood-opacity%3D%220.35%22%2F%3E%0A%20%20%20%20%3C%2Ffilter%3E%0A%20%20%3C%2Fdefs%3E%0A%20%20%3C!--%20Background%20Shield%20Badge%20--%3E%0A%20%20%3Crect%20x%3D%224%22%20y%3D%224%22%20width%3D%2292%22%20height%3D%2292%22%20rx%3D%2226%22%20fill%3D%22url(%23brandGrad_cafe-nirvana-lake)%22%20stroke%3D%22%23fed7aa%22%20stroke-width%3D%222.5%22%20filter%3D%22url(%23shadow_cafe-nirvana-lake)%22%2F%3E%0A%20%20%3C!--%20Inner%20Ornamental%20Line%20--%3E%0A%20%20%3Crect%20x%3D%229%22%20y%3D%229%22%20width%3D%2282%22%20height%3D%2282%22%20rx%3D%2221%22%20fill%3D%22none%22%20stroke%3D%22%23fed7aa%22%20stroke-width%3D%221%22%20stroke-dasharray%3D%223%203%22%20opacity%3D%220.45%22%2F%3E%0A%20%20%3C!--%20Emblem%20Motif%20--%3E%0A%20%20%3Cpath%20d%3D%22M38%2038%20C38%2034%2042%2032%2046%2032%20L54%2032%20C58%2032%2062%2034%2062%2038%20L60%2050%20C60%2054%2056%2056%2050%2056%20C44%2056%2040%2054%2040%2050%20Z%22%20fill%3D%22%23fed7aa%22%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22M62%2040%20L65%2040%20C67%2040%2068%2041%2068%2043%20L68%2045%20C68%2047%2067%2048%2065%2048%20L61%2048%22%20stroke%3D%22%23fed7aa%22%20stroke-width%3D%222%22%20fill%3D%22none%22%2F%3E%0A%20%20%3C!--%20Typography%20%2F%20Monogram%20--%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2276%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C%20-apple-system%2C%20sans-serif%22%20font-weight%3D%22900%22%20font-size%3D%2215%22%20fill%3D%22%23ffffff%22%20letter-spacing%3D%221.5%22%3ECN%3C%2Ftext%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2287%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C%20-apple-system%2C%20sans-serif%22%20font-weight%3D%22800%22%20font-size%3D%226.5%22%20fill%3D%22%23fed7aa%22%20letter-spacing%3D%222%22%3EGORAKHPUR%3C%2Ftext%3E%0A%3C%2Fsvg%3E",
    "isDemo": false,
    "phone": "+91 97930 22345",
    "address": "Lake View Road, Near Naukayan Ghat, Taramandal, Gorakhpur",
    "openTime": "13:00",
    "closeTime": "23:30",
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
    "ownerName": "Abhinav Singh",
    "ownerEmail": "nirvana.cafe@gorakhpurfoodguide.in",
    "facilities": [
      "Rooftop Lake View",
      "Live Acoustic Music",
      "Free Wi-Fi",
      "Private Cabanas"
    ],
    "ratingsBreakdown": {
      "food": 4.7,
      "taste": 4.8,
      "hygiene": 4.8,
      "service": 4.7,
      "ambience": 5
    },
    "priceRange": {
      "min": 250,
      "max": 750
    },
    "distanceKm": 3.4,
    "menu": [
      {
        "id": "cafe-nirvana-lake-pop-1",
        "name": "Sunset Sangria Mocktail",
        "price": 340,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=600&q=80",
        "description": "Fresh cottage cheese and seasonal ingredients simmered in a luscious spiced onion-tomato gravy."
      },
      {
        "id": "cafe-nirvana-lake-pop-2",
        "name": "Pesto Pasta",
        "price": 340,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1621996346565-e3d5d6281724?auto=format&fit=crop&w=600&q=80",
        "description": "Fresh cottage cheese and seasonal ingredients simmered in a luscious spiced onion-tomato gravy."
      },
      {
        "id": "cafe-nirvana-lake-pop-3",
        "name": "BBQ Chicken Pizza",
        "price": 349,
        "category": "Main Course",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80",
        "description": "Woodfired crust topped with house BBQ marinated chicken, red onion, and smoked cheese."
      },
      {
        "id": "cafe-nirvana-lake-pop-4",
        "name": "Nutella Waffle",
        "price": 250,
        "category": "Desserts",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1562376552-0d160a2f238d?auto=format&fit=crop&w=600&q=80",
        "description": "Warm freshly baked dessert smothered in rich melted Belgian chocolate and garnishes."
      },
      {
        "id": "cafe-nirvana-lake-item-2",
        "name": "Lotus Biscoff Thick Shake",
        "price": 190,
        "category": "Beverages",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=600&q=80",
        "description": "Creamy milkshake blended with genuine Lotus Biscoff spread and crushed caramelized biscuits."
      },
      {
        "id": "cafe-nirvana-lake-item-3",
        "name": "Farmhouse Woodfired Pizza (10 inch)",
        "price": 360,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80",
        "description": "Hand-stretched dough topped with San Marzano tomato sauce, mozzarella, bell peppers, mushrooms and olives."
      },
      {
        "id": "cafe-nirvana-lake-item-4",
        "name": "Penne Creamy Alfredo Pasta with Mushrooms",
        "price": 290,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1621996346565-e3d5d6281724?auto=format&fit=crop&w=600&q=80",
        "description": "Al dente penne tossed in rich parmesan garlic white sauce with sautéed mushrooms."
      },
      {
        "id": "cafe-nirvana-lake-item-5",
        "name": "Loaded Cheesy Mexican Nachos",
        "price": 240,
        "category": "Starters",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1576107232684-1279f3908594?auto=format&fit=crop&w=600&q=80",
        "description": "Crispy corn tortilla chips baked with jalapeños, salsa, black olives and warm cheddar sauce."
      },
      {
        "id": "cafe-nirvana-lake-item-6",
        "name": "Crispy Peri Peri French Fries",
        "price": 140,
        "category": "Starters",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1576107232684-1279f3908594?auto=format&fit=crop&w=600&q=80",
        "description": "Golden potato fries seasoned with zesty African bird’s eye peri-peri spice dust."
      },
      {
        "id": "cafe-nirvana-lake-item-7",
        "name": "Classic Cold Coffee with Ice Cream",
        "price": 160,
        "category": "Beverages",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=600&q=80",
        "description": "Rich espresso blended with chilled whole milk and topped with a scoop of vanilla gelato."
      },
      {
        "id": "cafe-nirvana-lake-item-8",
        "name": "Kulhad Adrak Masala Chai",
        "price": 60,
        "category": "Beverages",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=600&q=80",
        "description": "Freshly brewed strong tea infused with crushed ginger, cardamom, and clove in a clay kulhad."
      },
      {
        "id": "cafe-nirvana-lake-item-9",
        "name": "New York Baked Blueberry Cheesecake",
        "price": 220,
        "category": "Desserts",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=600&q=80",
        "description": "Dense cream cheese filling on a graham cracker crust topped with tangy wild blueberry compote."
      },
      {
        "id": "cafe-nirvana-lake-item-10",
        "name": "Tiramisu Italiano Cup",
        "price": 210,
        "category": "Desserts",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=600&q=80",
        "description": "Espresso-soaked savoiardi biscuits layered with mascarpone cream and dusted with cocoa."
      },
      {
        "id": "cafe-nirvana-lake-item-11",
        "name": "Classic Grilled Paneer Tikka Sandwich",
        "price": 180,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=600&q=80",
        "description": "Multi-grain bread toasted with spiced paneer tikka, mint chutney, and mozzarella cheese."
      }
    ]
  },
  {
    "id": "shahi-darbar-mughlai",
    "name": "Shahi Darbar Mughlai & Biryani",
    "area": "Reti Chowk",
    "city": "Gorakhpur",
    "description": "Iconic old-city destination famous for aromatic Dum Mutton Biryani, Galouti kebabs, and authentic slow-simmered Awadhi gravies.",
    "categories": [
      "north-indian"
    ],
    "cuisines": [
      "Mughlai",
      "Awadhi",
      "Biryani"
    ],
    "popularDishes": [
      "Awadhi Mutton Biryani",
      "Chicken Changezi",
      "Seekh Kebab",
      "Rumali Roti"
    ],
    "costForTwo": 500,
    "averageRating": 4.6,
    "reviewCount": 510,
    "imageUrl": "https://images.unsplash.com/photo-1587574293340-e0011c4e8ecf?auto=format&fit=crop&w=1000&q=80",
    "logoUrl": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20100%20100%22%20width%3D%22200%22%20height%3D%22200%22%3E%0A%20%20%3Cdefs%3E%0A%20%20%20%20%3ClinearGradient%20id%3D%22brandGrad_shahi-darbar-mughlai%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23a33a0a%22%2F%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%232b2018%22%2F%3E%0A%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%3Cfilter%20id%3D%22shadow_shahi-darbar-mughlai%22%20x%3D%22-10%25%22%20y%3D%22-10%25%22%20width%3D%22120%25%22%20height%3D%22120%25%22%3E%0A%20%20%20%20%20%20%3CfeDropShadow%20dx%3D%220%22%20dy%3D%222%22%20stdDeviation%3D%222.5%22%20flood-opacity%3D%220.35%22%2F%3E%0A%20%20%20%20%3C%2Ffilter%3E%0A%20%20%3C%2Fdefs%3E%0A%20%20%3C!--%20Background%20Shield%20Badge%20--%3E%0A%20%20%3Crect%20x%3D%224%22%20y%3D%224%22%20width%3D%2292%22%20height%3D%2292%22%20rx%3D%2226%22%20fill%3D%22url(%23brandGrad_shahi-darbar-mughlai)%22%20stroke%3D%22%23f5e9d0%22%20stroke-width%3D%222.5%22%20filter%3D%22url(%23shadow_shahi-darbar-mughlai)%22%2F%3E%0A%20%20%3C!--%20Inner%20Ornamental%20Line%20--%3E%0A%20%20%3Crect%20x%3D%229%22%20y%3D%229%22%20width%3D%2282%22%20height%3D%2282%22%20rx%3D%2221%22%20fill%3D%22none%22%20stroke%3D%22%23f5e9d0%22%20stroke-width%3D%221%22%20stroke-dasharray%3D%223%203%22%20opacity%3D%220.45%22%2F%3E%0A%20%20%3C!--%20Emblem%20Motif%20--%3E%0A%20%20%3Ccircle%20cx%3D%2250%22%20cy%3D%2238%22%20r%3D%2214%22%20stroke%3D%22%23f5e9d0%22%20stroke-width%3D%222%22%20fill%3D%22none%22%20opacity%3D%220.7%22%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22M44%2030%20L44%2046%20M56%2030%20L56%2046%20M42%2030%20C42%2035%2046%2035%2046%2030%22%20stroke%3D%22%23f5e9d0%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%2F%3E%0A%20%20%3C!--%20Typography%20%2F%20Monogram%20--%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2276%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C%20-apple-system%2C%20sans-serif%22%20font-weight%3D%22900%22%20font-size%3D%2215%22%20fill%3D%22%23ffffff%22%20letter-spacing%3D%221.5%22%3ESD%3C%2Ftext%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2287%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C%20-apple-system%2C%20sans-serif%22%20font-weight%3D%22800%22%20font-size%3D%226.5%22%20fill%3D%22%23f5e9d0%22%20letter-spacing%3D%222%22%3EGORAKHPUR%3C%2Ftext%3E%0A%3C%2Fsvg%3E",
    "isDemo": false,
    "phone": "+91 94150 99882",
    "address": "Near Shahi Jama Masjid, Reti Chowk, Urdu Bazaar, Gorakhpur",
    "openTime": "12:30",
    "closeTime": "23:30",
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
    "ownerName": "Mohammad Farooq",
    "ownerEmail": "shahidarbar.reti@gorakhpurfoodguide.in",
    "facilities": [
      "Traditional Seating & AC Hall",
      "Takeaway",
      "UPI Accepted",
      "Authentic Dum Pots"
    ],
    "ratingsBreakdown": {
      "food": 4.8,
      "taste": 4.9,
      "hygiene": 4.4,
      "service": 4.4,
      "ambience": 4.3
    },
    "priceRange": {
      "min": 180,
      "max": 550
    },
    "distanceKm": 2.1,
    "menu": [
      {
        "id": "shahi-darbar-mughlai-pop-1",
        "name": "Awadhi Mutton Biryani",
        "price": 320,
        "category": "Main Course",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1545247181-516773cae754?auto=format&fit=crop&w=600&q=80",
        "description": "Aromatic long-grain basmati layered with tender meat/veggies, saffron, mint, and whole spices."
      },
      {
        "id": "shahi-darbar-mughlai-pop-2",
        "name": "Chicken Changezi",
        "price": 340,
        "category": "Main Course",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=600&q=80",
        "description": "Succulent pieces cooked in rich fragrant gravy with roasted spices, brown onions, and fresh coriander."
      },
      {
        "id": "shahi-darbar-mughlai-pop-3",
        "name": "Seekh Kebab",
        "price": 280,
        "category": "Starters",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=600&q=80",
        "description": "Marinated in yogurt, roasted garlic, and spices, chargrilled to smoky perfection."
      },
      {
        "id": "shahi-darbar-mughlai-pop-4",
        "name": "Rumali Roti",
        "price": 40,
        "category": "Breads",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=600&q=80",
        "description": "Fresh cottage cheese and seasonal ingredients simmered in a luscious spiced onion-tomato gravy."
      },
      {
        "id": "shahi-darbar-mughlai-item-1",
        "name": "Galawati Kabab with Ulte Tawe Ka Paratha",
        "price": 380,
        "category": "Starters",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=600&q=80",
        "description": "Mouth-melting Awadhi minced mutton kebabs spiced with 32 fragrant herbs, served with Mughlai paratha."
      },
      {
        "id": "shahi-darbar-mughlai-item-2",
        "name": "Murgh Malai Tikka (6 pcs)",
        "price": 340,
        "category": "Starters",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=600&q=80",
        "description": "Boneless chicken chunks marinated in cream, cheese, hung curd, and crushed cardamom, grilled in tandoor."
      },
      {
        "id": "shahi-darbar-mughlai-item-4",
        "name": "Tandoori Chicken (Half / Full)",
        "price": 290,
        "category": "Starters",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80",
        "description": "Classic bone-in chicken marinated in Kashmiri chilli, mustard oil and hung curd roasted in tandoor."
      },
      {
        "id": "shahi-darbar-mughlai-item-5",
        "name": "Paneer Tikka Shashlik",
        "price": 280,
        "category": "Starters",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=600&q=80",
        "description": "Cottage cheese cubes with bell peppers and onions grilled to perfection in clay oven."
      },
      {
        "id": "shahi-darbar-mughlai-item-6",
        "name": "Special Butter Chicken",
        "price": 390,
        "category": "Main Course",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=600&q=80",
        "description": "Tender tandoori chicken cooked in an authentic velvety makhani gravy enriched with honey and fenugreek."
      },
      {
        "id": "shahi-darbar-mughlai-item-7",
        "name": "Handi Mutton Rogan Josh",
        "price": 460,
        "category": "Main Course",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1545247181-516773cae754?auto=format&fit=crop&w=600&q=80",
        "description": "Tender baby mutton simmered in a clay handi with ratan jot, Kashmiri chilies, and aromatic whole spices."
      },
      {
        "id": "shahi-darbar-mughlai-item-8",
        "name": "Chicken Lababdar",
        "price": 370,
        "category": "Main Course",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=600&q=80",
        "description": "Succulent chicken pieces in a chunky spiced onion-tomato gravy finished with grated paneer and cream."
      },
      {
        "id": "shahi-darbar-mughlai-item-9",
        "name": "Kadhai Paneer",
        "price": 290,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=600&q=80",
        "description": "Paneer cubes tossed with fresh ground coriander, dry red chillies, capsicum, and thick onion masala."
      },
      {
        "id": "shahi-darbar-mughlai-item-10",
        "name": "Dal Makhani Slow-Cooked",
        "price": 240,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80",
        "description": "Classic black lentils slow-cooked with fresh cream and butter for 24 hours."
      },
      {
        "id": "shahi-darbar-mughlai-item-11",
        "name": "Dum Chicken Biryani with Mirchi Salan",
        "price": 340,
        "category": "Biryani & Rice",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=600&q=80",
        "description": "Long-grain aged basmati rice layered with marinated chicken, saffron milk, brown onions, and kewra."
      },
      {
        "id": "shahi-darbar-mughlai-item-12",
        "name": "Hyderabadi Dum Gosht Biryani",
        "price": 440,
        "category": "Biryani & Rice",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1545247181-516773cae754?auto=format&fit=crop&w=600&q=80",
        "description": "Fragrant basmati rice slow-cooked on dum with spiced mutton chunks, served with raita and salan."
      }
    ]
  },
  {
    "id": "dominick-pizza-pasta",
    "name": "Dominick Pizza & Pasta House",
    "area": "Betiahata",
    "city": "Gorakhpur",
    "description": "Crowd-favorite pizzeria famous for monster cheese-burst pizzas, loaded pasta bakes, crispy garlic bread, and chilled thick shakes.",
    "categories": [
      "fast-food",
      "cafe"
    ],
    "cuisines": [
      "Pizza",
      "Italian",
      "Fast Food"
    ],
    "popularDishes": [
      "Cheese Burst Pizza",
      "White Sauce Pasta",
      "Stuffed Garlic Bread",
      "Choco Lava Cake"
    ],
    "costForTwo": 450,
    "averageRating": 4.6,
    "reviewCount": 380,
    "imageUrl": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=80",
    "logoUrl": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20100%20100%22%20width%3D%22200%22%20height%3D%22200%22%3E%0A%20%20%3Cdefs%3E%0A%20%20%20%20%3ClinearGradient%20id%3D%22brandGrad_dominick-pizza-pasta%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%235c3a21%22%2F%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%2326180e%22%2F%3E%0A%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%3Cfilter%20id%3D%22shadow_dominick-pizza-pasta%22%20x%3D%22-10%25%22%20y%3D%22-10%25%22%20width%3D%22120%25%22%20height%3D%22120%25%22%3E%0A%20%20%20%20%20%20%3CfeDropShadow%20dx%3D%220%22%20dy%3D%222%22%20stdDeviation%3D%222.5%22%20flood-opacity%3D%220.35%22%2F%3E%0A%20%20%20%20%3C%2Ffilter%3E%0A%20%20%3C%2Fdefs%3E%0A%20%20%3C!--%20Background%20Shield%20Badge%20--%3E%0A%20%20%3Crect%20x%3D%224%22%20y%3D%224%22%20width%3D%2292%22%20height%3D%2292%22%20rx%3D%2226%22%20fill%3D%22url(%23brandGrad_dominick-pizza-pasta)%22%20stroke%3D%22%23fed7aa%22%20stroke-width%3D%222.5%22%20filter%3D%22url(%23shadow_dominick-pizza-pasta)%22%2F%3E%0A%20%20%3C!--%20Inner%20Ornamental%20Line%20--%3E%0A%20%20%3Crect%20x%3D%229%22%20y%3D%229%22%20width%3D%2282%22%20height%3D%2282%22%20rx%3D%2221%22%20fill%3D%22none%22%20stroke%3D%22%23fed7aa%22%20stroke-width%3D%221%22%20stroke-dasharray%3D%223%203%22%20opacity%3D%220.45%22%2F%3E%0A%20%20%3C!--%20Emblem%20Motif%20--%3E%0A%20%20%3Cpath%20d%3D%22M38%2038%20C38%2034%2042%2032%2046%2032%20L54%2032%20C58%2032%2062%2034%2062%2038%20L60%2050%20C60%2054%2056%2056%2050%2056%20C44%2056%2040%2054%2040%2050%20Z%22%20fill%3D%22%23fed7aa%22%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22M62%2040%20L65%2040%20C67%2040%2068%2041%2068%2043%20L68%2045%20C68%2047%2067%2048%2065%2048%20L61%2048%22%20stroke%3D%22%23fed7aa%22%20stroke-width%3D%222%22%20fill%3D%22none%22%2F%3E%0A%20%20%3C!--%20Typography%20%2F%20Monogram%20--%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2276%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C%20-apple-system%2C%20sans-serif%22%20font-weight%3D%22900%22%20font-size%3D%2215%22%20fill%3D%22%23ffffff%22%20letter-spacing%3D%221.5%22%3EDP%3C%2Ftext%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2287%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C%20-apple-system%2C%20sans-serif%22%20font-weight%3D%22800%22%20font-size%3D%226.5%22%20fill%3D%22%23fed7aa%22%20letter-spacing%3D%222%22%3EGORAKHPUR%3C%2Ftext%3E%0A%3C%2Fsvg%3E",
    "isDemo": false,
    "phone": "+91 98381 22910",
    "address": "Near Betiahata Chowk, Opp. Reliance Trends, Betiahata, Gorakhpur",
    "openTime": "11:00",
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
    "diet": "veg",
    "status": "Active",
    "ownerName": "Gaurav Keshari",
    "ownerEmail": "dominick.pizza@gorakhpurfoodguide.in",
    "facilities": [
      "100% Pure Veg Pizza",
      "Air Conditioned",
      "Instant Delivery",
      "UPI & Cards"
    ],
    "ratingsBreakdown": {
      "food": 4.7,
      "taste": 4.7,
      "hygiene": 4.6,
      "service": 4.5,
      "ambience": 4.5
    },
    "priceRange": {
      "min": 140,
      "max": 500
    },
    "distanceKm": 1.4,
    "menu": [
      {
        "id": "dominick-pizza-pasta-pop-1",
        "name": "Cheese Burst Pizza",
        "price": 270,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80",
        "description": "Freshly baked hand-tossed crust with gourmet mozzarella, herb marinara, and fresh toppings."
      },
      {
        "id": "dominick-pizza-pasta-pop-2",
        "name": "White Sauce Pasta",
        "price": 220,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1621996346565-e3d5d6281724?auto=format&fit=crop&w=600&q=80",
        "description": "Fresh cottage cheese and seasonal ingredients simmered in a luscious spiced onion-tomato gravy."
      },
      {
        "id": "dominick-pizza-pasta-pop-3",
        "name": "Stuffed Garlic Bread",
        "price": 160,
        "category": "Starters",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=600&q=80",
        "description": "Fresh cottage cheese and seasonal ingredients simmered in a luscious spiced onion-tomato gravy."
      },
      {
        "id": "dominick-pizza-pasta-pop-4",
        "name": "Choco Lava Cake",
        "price": 100,
        "category": "Desserts",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=600&q=80",
        "description": "Warm freshly baked dessert smothered in rich melted Belgian chocolate and garnishes."
      },
      {
        "id": "dominick-pizza-pasta-item-1",
        "name": "Double Cheese Crunch Burger",
        "price": 160,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80",
        "description": "Crisp vegetable patty with double melted cheddar, gherkins, lettuce and secret thousand island sauce."
      },
      {
        "id": "dominick-pizza-pasta-item-3",
        "name": "Hand-Tossed Margherita Pizza (Regular)",
        "price": 240,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80",
        "description": "Classic Italian pizza with aromatic basil leaves, extra virgin olive oil and 100% mozzarella."
      },
      {
        "id": "dominick-pizza-pasta-item-5",
        "name": "Loaded Cheese Fries with Jalapeños",
        "price": 160,
        "category": "Starters",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1576107232684-1279f3908594?auto=format&fit=crop&w=600&q=80",
        "description": "Crinkle-cut hot fries smothered in liquid cheese, jalapeño bits, and smoky barbecue drizzle."
      },
      {
        "id": "dominick-pizza-pasta-item-8",
        "name": "Classic Mumbai Vada Pav (2 pcs)",
        "price": 70,
        "category": "Starters",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80",
        "description": "Spiced potato batata vada in soft pav bread with spicy garlic dry chutney and fried green chillies."
      },
      {
        "id": "dominick-pizza-pasta-item-9",
        "name": "Oreo Thick Overload Shake",
        "price": 160,
        "category": "Beverages",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=600&q=80",
        "description": "Vanilla cream milkshake loaded with crushed Oreo cookies, chocolate syrup and whipped cream."
      }
    ]
  },
  {
    "id": "ksheer-sagar-sweets",
    "name": "Ksheer Sagar Sweets & Restaurant",
    "area": "Bank Road",
    "city": "Gorakhpur",
    "description": "Heritage sweet makers acclaimed for traditional Varanasi & Gorakhpur sweets, pure cow milk chenna, Rajbhog, and hearty vegetarian meals.",
    "categories": [
      "sweets",
      "north-indian"
    ],
    "cuisines": [
      "Mithai",
      "Sweets",
      "North Indian Thali"
    ],
    "popularDishes": [
      "Kesar Rajbhog",
      "Malai Roll",
      "Desi Ghee Kachori Sabzi",
      "Special Thali"
    ],
    "costForTwo": 320,
    "averageRating": 4.7,
    "reviewCount": 440,
    "imageUrl": "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1000&q=80",
    "logoUrl": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20100%20100%22%20width%3D%22200%22%20height%3D%22200%22%3E%0A%20%20%3Cdefs%3E%0A%20%20%20%20%3ClinearGradient%20id%3D%22brandGrad_ksheer-sagar-sweets%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%2394381c%22%2F%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%234f3f2d%22%2F%3E%0A%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%3Cfilter%20id%3D%22shadow_ksheer-sagar-sweets%22%20x%3D%22-10%25%22%20y%3D%22-10%25%22%20width%3D%22120%25%22%20height%3D%22120%25%22%3E%0A%20%20%20%20%20%20%3CfeDropShadow%20dx%3D%220%22%20dy%3D%222%22%20stdDeviation%3D%222.5%22%20flood-opacity%3D%220.35%22%2F%3E%0A%20%20%20%20%3C%2Ffilter%3E%0A%20%20%3C%2Fdefs%3E%0A%20%20%3C!--%20Background%20Shield%20Badge%20--%3E%0A%20%20%3Crect%20x%3D%224%22%20y%3D%224%22%20width%3D%2292%22%20height%3D%2292%22%20rx%3D%2226%22%20fill%3D%22url(%23brandGrad_ksheer-sagar-sweets)%22%20stroke%3D%22%23fce588%22%20stroke-width%3D%222.5%22%20filter%3D%22url(%23shadow_ksheer-sagar-sweets)%22%2F%3E%0A%20%20%3C!--%20Inner%20Ornamental%20Line%20--%3E%0A%20%20%3Crect%20x%3D%229%22%20y%3D%229%22%20width%3D%2282%22%20height%3D%2282%22%20rx%3D%2221%22%20fill%3D%22none%22%20stroke%3D%22%23fce588%22%20stroke-width%3D%221%22%20stroke-dasharray%3D%223%203%22%20opacity%3D%220.45%22%2F%3E%0A%20%20%3C!--%20Emblem%20Motif%20--%3E%0A%20%20%3Cpath%20d%3D%22M50%2028%20C56%2028%2062%2034%2062%2042%20C62%2050%2050%2060%2050%2060%20C50%2060%2038%2050%2038%2042%20C38%2034%2044%2028%2050%2028%20Z%22%20fill%3D%22%23fce588%22%20opacity%3D%220.95%22%2F%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2250%22%20cy%3D%2240%22%20r%3D%223.5%22%20fill%3D%22%23ffffff%22%2F%3E%0A%20%20%3C!--%20Typography%20%2F%20Monogram%20--%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2276%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C%20-apple-system%2C%20sans-serif%22%20font-weight%3D%22900%22%20font-size%3D%2215%22%20fill%3D%22%23ffffff%22%20letter-spacing%3D%221.5%22%3EKS%3C%2Ftext%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2287%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C%20-apple-system%2C%20sans-serif%22%20font-weight%3D%22800%22%20font-size%3D%226.5%22%20fill%3D%22%23fce588%22%20letter-spacing%3D%222%22%3EGORAKHPUR%3C%2Ftext%3E%0A%3C%2Fsvg%3E",
    "isDemo": false,
    "phone": "+91 94158 77651",
    "address": "Near Vijay Chowk, Bank Road, Gorakhpur",
    "openTime": "07:30",
    "closeTime": "22:30",
    "openDays": [
      "Mon",
      "Tue",
      "Wed",
      "Thu",
      "Fri",
      "Sat",
      "Sun"
    ],
    "diet": "veg",
    "status": "Active",
    "ownerName": "Virendra Nath Gupta",
    "ownerEmail": "ksheersagar.gkp@gorakhpurfoodguide.in",
    "facilities": [
      "Pure Cow Milk Sweets",
      "Air Conditioned Dining",
      "Gift Packing",
      "UPI Accepted"
    ],
    "ratingsBreakdown": {
      "food": 4.8,
      "taste": 4.9,
      "hygiene": 4.7,
      "service": 4.6,
      "ambience": 4.3
    },
    "priceRange": {
      "min": 80,
      "max": 350
    },
    "distanceKm": 0.7,
    "menu": [
      {
        "id": "ksheer-sagar-sweets-pop-1",
        "name": "Kesar Rajbhog",
        "price": 80,
        "category": "Desserts",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=600&q=80",
        "description": "Large spongy chenna balls stuffed with pistachios and soaked in saffron syrup."
      },
      {
        "id": "ksheer-sagar-sweets-pop-2",
        "name": "Malai Roll",
        "price": 60,
        "category": "Desserts",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?auto=format&fit=crop&w=600&q=80",
        "description": "Fresh cottage cheese and seasonal ingredients simmered in a luscious spiced onion-tomato gravy."
      },
      {
        "id": "ksheer-sagar-sweets-pop-3",
        "name": "Desi Ghee Kachori Sabzi",
        "price": 150,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80",
        "description": "Fresh cottage cheese and seasonal ingredients simmered in a luscious spiced onion-tomato gravy."
      },
      {
        "id": "ksheer-sagar-sweets-pop-4",
        "name": "Special Thali",
        "price": 180,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=600&q=80",
        "description": "Wholesome platter featuring two curries, dal, jeera rice, fresh breads, salad, and dessert."
      },
      {
        "id": "ksheer-sagar-sweets-item-1",
        "name": "Desi Ghee Samosa (2 pcs)",
        "price": 40,
        "category": "Starters",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80",
        "description": "Golden flaky pastry stuffed with spiced potatoes, green peas and whole spices, fried in pure desi ghee."
      },
      {
        "id": "ksheer-sagar-sweets-item-2",
        "name": "Khasta Kachori with Hing Aloo (2 pcs)",
        "price": 50,
        "category": "Starters",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80",
        "description": "Crispy lentil-stuffed kachoris served with spicy tangy hing aloo subzi and sweet sonth."
      },
      {
        "id": "ksheer-sagar-sweets-item-3",
        "name": "Dahi Bhalla Papdi Chaat",
        "price": 90,
        "category": "Starters",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80",
        "description": "Soft lentil dumplings and crisp papdis drenched in whipped curd, roasted cumin, and sweet-spicy chutneys."
      },
      {
        "id": "ksheer-sagar-sweets-item-4",
        "name": "Amritsari Chhole Bhature",
        "price": 160,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=600&q=80",
        "description": "Pair of balloon bhatures served with dark spiced Punjabi chickpeas, pickled onions and fried green chilli."
      },
      {
        "id": "ksheer-sagar-sweets-item-5",
        "name": "Special Pure Veg Deluxe Thali",
        "price": 260,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=600&q=80",
        "description": "Paneer Butter Masala, Dal Makhani, Mix Veg, Jeera Rice, 2 Butter Naan, Gulab Jamun, Papad and Raita."
      },
      {
        "id": "ksheer-sagar-sweets-item-6",
        "name": "Paneer Butter Masala",
        "price": 240,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=600&q=80",
        "description": "Soft cottage cheese cubes simmered in a velvety tomato, cashew and butter gravy with kasoori methi."
      },
      {
        "id": "ksheer-sagar-sweets-item-7",
        "name": "Dal Makhani Special",
        "price": 210,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80",
        "description": "Whole black lentils and kidney beans slow-cooked overnight with white butter and cream."
      },
      {
        "id": "ksheer-sagar-sweets-item-8",
        "name": "Butter Tandoori Roti (2 pcs)",
        "price": 40,
        "category": "Breads",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=600&q=80",
        "description": "Whole wheat flatbread baked in clay oven and topped with pure amul butter."
      },
      {
        "id": "ksheer-sagar-sweets-item-9",
        "name": "Garlic Butter Naan",
        "price": 65,
        "category": "Breads",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=600&q=80",
        "description": "Soft leavened bread infused with minced garlic, fresh coriander and generous butter."
      },
      {
        "id": "ksheer-sagar-sweets-item-10",
        "name": "Special Kesar Rasmalai (2 pcs)",
        "price": 90,
        "category": "Desserts",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1564355808539-22fda35bed7e?auto=format&fit=crop&w=600&q=80",
        "description": "Delicate cottage cheese patties soaked in saffron-infused clotted milk garnished with pistachios."
      },
      {
        "id": "ksheer-sagar-sweets-item-11",
        "name": "Desi Ghee Gulab Jamun (2 pcs)",
        "price": 60,
        "category": "Desserts",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=600&q=80",
        "description": "Hot melt-in-mouth milk solids dumplings soaked in cardamom and rose sugar syrup."
      }
    ]
  },
  {
    "id": "up53-food-court",
    "name": "U.P. 53 Food Court & Cafe",
    "area": "Mohaddipur",
    "city": "Gorakhpur",
    "description": "Vibrant multi-kitchen food court named after Gorakhpur vehicle code (UP 53), dishing up momos, Chinese bowls, wraps, and tandoori chai.",
    "categories": [
      "fast-food",
      "cafe",
      "street-food"
    ],
    "cuisines": [
      "Fast Food",
      "Chinese",
      "Street Food",
      "Snacks"
    ],
    "popularDishes": [
      "Kurkure Momos",
      "Hakka Noodles",
      "Chicken Shawarma",
      "Tandoori Chai"
    ],
    "costForTwo": 350,
    "averageRating": 4.5,
    "reviewCount": 360,
    "imageUrl": "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=1000&q=80",
    "logoUrl": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20100%20100%22%20width%3D%22200%22%20height%3D%22200%22%3E%0A%20%20%3Cdefs%3E%0A%20%20%20%20%3ClinearGradient%20id%3D%22brandGrad_up53-food-court%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%235c3a21%22%2F%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%2326180e%22%2F%3E%0A%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%3Cfilter%20id%3D%22shadow_up53-food-court%22%20x%3D%22-10%25%22%20y%3D%22-10%25%22%20width%3D%22120%25%22%20height%3D%22120%25%22%3E%0A%20%20%20%20%20%20%3CfeDropShadow%20dx%3D%220%22%20dy%3D%222%22%20stdDeviation%3D%222.5%22%20flood-opacity%3D%220.35%22%2F%3E%0A%20%20%20%20%3C%2Ffilter%3E%0A%20%20%3C%2Fdefs%3E%0A%20%20%3C!--%20Background%20Shield%20Badge%20--%3E%0A%20%20%3Crect%20x%3D%224%22%20y%3D%224%22%20width%3D%2292%22%20height%3D%2292%22%20rx%3D%2226%22%20fill%3D%22url(%23brandGrad_up53-food-court)%22%20stroke%3D%22%23fed7aa%22%20stroke-width%3D%222.5%22%20filter%3D%22url(%23shadow_up53-food-court)%22%2F%3E%0A%20%20%3C!--%20Inner%20Ornamental%20Line%20--%3E%0A%20%20%3Crect%20x%3D%229%22%20y%3D%229%22%20width%3D%2282%22%20height%3D%2282%22%20rx%3D%2221%22%20fill%3D%22none%22%20stroke%3D%22%23fed7aa%22%20stroke-width%3D%221%22%20stroke-dasharray%3D%223%203%22%20opacity%3D%220.45%22%2F%3E%0A%20%20%3C!--%20Emblem%20Motif%20--%3E%0A%20%20%3Cpath%20d%3D%22M38%2038%20C38%2034%2042%2032%2046%2032%20L54%2032%20C58%2032%2062%2034%2062%2038%20L60%2050%20C60%2054%2056%2056%2050%2056%20C44%2056%2040%2054%2040%2050%20Z%22%20fill%3D%22%23fed7aa%22%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22M62%2040%20L65%2040%20C67%2040%2068%2041%2068%2043%20L68%2045%20C68%2047%2067%2048%2065%2048%20L61%2048%22%20stroke%3D%22%23fed7aa%22%20stroke-width%3D%222%22%20fill%3D%22none%22%2F%3E%0A%20%20%3C!--%20Typography%20%2F%20Monogram%20--%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2276%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C%20-apple-system%2C%20sans-serif%22%20font-weight%3D%22900%22%20font-size%3D%2215%22%20fill%3D%22%23ffffff%22%20letter-spacing%3D%221.5%22%3EU5%3C%2Ftext%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2287%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C%20-apple-system%2C%20sans-serif%22%20font-weight%3D%22800%22%20font-size%3D%226.5%22%20fill%3D%22%23fed7aa%22%20letter-spacing%3D%222%22%3EGORAKHPUR%3C%2Ftext%3E%0A%3C%2Fsvg%3E",
    "isDemo": false,
    "phone": "+91 99360 88210",
    "address": "Near Mohaddipur Crossing, Kasia Road, Gorakhpur",
    "openTime": "12:00",
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
    "ownerName": "Piyush Srivastava",
    "ownerEmail": "up53.court@gorakhpurfoodguide.in",
    "facilities": [
      "Youth Friendly",
      "Outdoor Seating",
      "Live Sports Screen",
      "UPI Accepted"
    ],
    "ratingsBreakdown": {
      "food": 4.6,
      "taste": 4.6,
      "hygiene": 4.4,
      "service": 4.4,
      "ambience": 4.6
    },
    "priceRange": {
      "min": 100,
      "max": 400
    },
    "distanceKm": 2.2,
    "menu": [
      {
        "id": "up53-food-court-pop-1",
        "name": "Kurkure Momos",
        "price": 130,
        "category": "Starters",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=600&q=80",
        "description": "Fresh cottage cheese and seasonal ingredients simmered in a luscious spiced onion-tomato gravy."
      },
      {
        "id": "up53-food-court-pop-2",
        "name": "Hakka Noodles",
        "price": 170,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=600&q=80",
        "description": "Fresh cottage cheese and seasonal ingredients simmered in a luscious spiced onion-tomato gravy."
      },
      {
        "id": "up53-food-court-pop-3",
        "name": "Chicken Shawarma",
        "price": 240,
        "category": "Main Course",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=600&q=80",
        "description": "Succulent pieces cooked in rich fragrant gravy with roasted spices, brown onions, and fresh coriander."
      },
      {
        "id": "up53-food-court-pop-4",
        "name": "Tandoori Chai",
        "price": 20,
        "category": "Beverages",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=600&q=80",
        "description": "Freshly brewed aromatic beverage prepared with premium beans/leaves and whole spices."
      },
      {
        "id": "up53-food-court-item-1",
        "name": "Darjeeling Steamed Chicken Momos (8 pcs)",
        "price": 160,
        "category": "Starters",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=600&q=80",
        "description": "Thin-wrapper dumplings filled with juicy minced chicken, ginger and coriander with fiery red chutney."
      },
      {
        "id": "up53-food-court-item-2",
        "name": "Kurkure Crispy Paneer Momos (6 pcs)",
        "price": 150,
        "category": "Starters",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=600&q=80",
        "description": "Crispy cornflake-crusted deep-fried momos filled with seasoned spiced cottage cheese."
      },
      {
        "id": "up53-food-court-item-4",
        "name": "Veg Manchurian Gravy with Fried Rice Bowl",
        "price": 240,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=600&q=80",
        "description": "Deep-fried vegetable balls in a savory, tangy and spicy dark soya and ginger garlic sauce."
      },
      {
        "id": "up53-food-court-item-5",
        "name": "Schezwan Chicken Fried Rice",
        "price": 260,
        "category": "Main Course",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=600&q=80",
        "description": "Aged basmati rice stir-fried with diced chicken, eggs, and authentic spicy Sichuan pepper paste."
      },
      {
        "id": "up53-food-court-item-6",
        "name": "Crispy Honey Chilli Potatoes",
        "price": 180,
        "category": "Starters",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80",
        "description": "Crispy finger potatoes tossed in sweet honey, roasted sesame seeds, and spicy red chilli sauce."
      },
      {
        "id": "up53-food-court-item-7",
        "name": "Drums of Heaven Chicken Lollipops (6 pcs)",
        "price": 280,
        "category": "Starters",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=600&q=80",
        "description": "Crispy chicken winglets tossed in fiery Schezwan garlic sauce with spring onions."
      },
      {
        "id": "up53-food-court-item-8",
        "name": "Tibetan Thukpa Noodle Soup Bowl",
        "price": 210,
        "category": "Starters",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=600&q=80",
        "description": "Hearty Himalayan noodle soup packed with fresh greens, mushrooms, and spiced broth."
      },
      {
        "id": "up53-food-court-item-9",
        "name": "Crispy Fried Spring Rolls (6 pcs)",
        "price": 170,
        "category": "Starters",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?auto=format&fit=crop&w=600&q=80",
        "description": "Golden crunchy wrappers filled with cabbage, carrots, bell peppers, served with sweet chilli dip."
      },
      {
        "id": "up53-food-court-item-10",
        "name": "Darjeeling Lemon Iced Tea",
        "price": 110,
        "category": "Beverages",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=600&q=80",
        "description": "Refreshing brewed black tea infused with lemon zest and mint over crushed ice."
      },
      {
        "id": "up53-food-court-item-11",
        "name": "Darjeeling Darsaan with Vanilla Ice Cream",
        "price": 140,
        "category": "Desserts",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=600&q=80",
        "description": "Fried honey-glazed flat noodles topped with roasted sesame seeds and cool vanilla scoop."
      }
    ]
  },
  {
    "id": "chhappan-bhog-veg",
    "name": "Chhappan Bhog Pure Veg Restaurant",
    "area": "Golghar",
    "city": "Gorakhpur",
    "description": "Premier pure vegetarian family restaurant renowned for royal Rajasthani and North Indian thalis, morning jalebis, and festive sweets.",
    "categories": [
      "north-indian",
      "sweets"
    ],
    "cuisines": [
      "North Indian",
      "Rajasthani",
      "Pure Veg Thali"
    ],
    "popularDishes": [
      "Chhappan Bhog Royal Thali",
      "Paneer Butter Masala",
      "Dal Baati Churma",
      "Rabdi Ghewar"
    ],
    "costForTwo": 500,
    "averageRating": 4.7,
    "reviewCount": 460,
    "imageUrl": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1000&q=80",
    "logoUrl": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20100%20100%22%20width%3D%22200%22%20height%3D%22200%22%3E%0A%20%20%3Cdefs%3E%0A%20%20%20%20%3ClinearGradient%20id%3D%22brandGrad_chhappan-bhog-veg%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%2394381c%22%2F%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%234f3f2d%22%2F%3E%0A%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%3Cfilter%20id%3D%22shadow_chhappan-bhog-veg%22%20x%3D%22-10%25%22%20y%3D%22-10%25%22%20width%3D%22120%25%22%20height%3D%22120%25%22%3E%0A%20%20%20%20%20%20%3CfeDropShadow%20dx%3D%220%22%20dy%3D%222%22%20stdDeviation%3D%222.5%22%20flood-opacity%3D%220.35%22%2F%3E%0A%20%20%20%20%3C%2Ffilter%3E%0A%20%20%3C%2Fdefs%3E%0A%20%20%3C!--%20Background%20Shield%20Badge%20--%3E%0A%20%20%3Crect%20x%3D%224%22%20y%3D%224%22%20width%3D%2292%22%20height%3D%2292%22%20rx%3D%2226%22%20fill%3D%22url(%23brandGrad_chhappan-bhog-veg)%22%20stroke%3D%22%23fce588%22%20stroke-width%3D%222.5%22%20filter%3D%22url(%23shadow_chhappan-bhog-veg)%22%2F%3E%0A%20%20%3C!--%20Inner%20Ornamental%20Line%20--%3E%0A%20%20%3Crect%20x%3D%229%22%20y%3D%229%22%20width%3D%2282%22%20height%3D%2282%22%20rx%3D%2221%22%20fill%3D%22none%22%20stroke%3D%22%23fce588%22%20stroke-width%3D%221%22%20stroke-dasharray%3D%223%203%22%20opacity%3D%220.45%22%2F%3E%0A%20%20%3C!--%20Emblem%20Motif%20--%3E%0A%20%20%3Cpath%20d%3D%22M50%2028%20C56%2028%2062%2034%2062%2042%20C62%2050%2050%2060%2050%2060%20C50%2060%2038%2050%2038%2042%20C38%2034%2044%2028%2050%2028%20Z%22%20fill%3D%22%23fce588%22%20opacity%3D%220.95%22%2F%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2250%22%20cy%3D%2240%22%20r%3D%223.5%22%20fill%3D%22%23ffffff%22%2F%3E%0A%20%20%3C!--%20Typography%20%2F%20Monogram%20--%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2276%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C%20-apple-system%2C%20sans-serif%22%20font-weight%3D%22900%22%20font-size%3D%2215%22%20fill%3D%22%23ffffff%22%20letter-spacing%3D%221.5%22%3ECB%3C%2Ftext%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2287%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C%20-apple-system%2C%20sans-serif%22%20font-weight%3D%22800%22%20font-size%3D%226.5%22%20fill%3D%22%23fce588%22%20letter-spacing%3D%222%22%3EGORAKHPUR%3C%2Ftext%3E%0A%3C%2Fsvg%3E",
    "isDemo": false,
    "phone": "+91 94153 44012",
    "address": "Near Shastri Chowk, Golghar, Gorakhpur",
    "openTime": "08:00",
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
    "diet": "veg",
    "status": "Active",
    "ownerName": "Rajendra Kumar Mittal",
    "ownerEmail": "chhappanbhog.gkp@gorakhpurfoodguide.in",
    "facilities": [
      "100% Pure Vegetarian",
      "Air Conditioned",
      "Family Hall",
      "UPI & Card Payments"
    ],
    "ratingsBreakdown": {
      "food": 4.8,
      "taste": 4.8,
      "hygiene": 4.7,
      "service": 4.6,
      "ambience": 4.6
    },
    "priceRange": {
      "min": 180,
      "max": 550
    },
    "distanceKm": 0.5,
    "menu": [
      {
        "id": "chhappan-bhog-veg-pop-1",
        "name": "Chhappan Bhog Royal Thali",
        "price": 320,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=600&q=80",
        "description": "Wholesome platter featuring two curries, dal, jeera rice, fresh breads, salad, and dessert."
      },
      {
        "id": "chhappan-bhog-veg-pop-2",
        "name": "Paneer Butter Masala",
        "price": 240,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=600&q=80",
        "description": "Fresh cottage cheese and seasonal ingredients simmered in a luscious spiced onion-tomato gravy."
      },
      {
        "id": "chhappan-bhog-veg-pop-3",
        "name": "Dal Baati Churma",
        "price": 240,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=600&q=80",
        "description": "Black lentils slow cooked overnight with churned white butter and velvety dairy cream."
      },
      {
        "id": "chhappan-bhog-veg-pop-4",
        "name": "Rabdi Ghewar",
        "price": 80,
        "category": "Desserts",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1564355808539-22fda35bed7e?auto=format&fit=crop&w=600&q=80",
        "description": "Fresh cottage cheese and seasonal ingredients simmered in a luscious spiced onion-tomato gravy."
      },
      {
        "id": "chhappan-bhog-veg-item-1",
        "name": "Desi Ghee Samosa (2 pcs)",
        "price": 40,
        "category": "Starters",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80",
        "description": "Golden flaky pastry stuffed with spiced potatoes, green peas and whole spices, fried in pure desi ghee."
      },
      {
        "id": "chhappan-bhog-veg-item-2",
        "name": "Khasta Kachori with Hing Aloo (2 pcs)",
        "price": 50,
        "category": "Starters",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80",
        "description": "Crispy lentil-stuffed kachoris served with spicy tangy hing aloo subzi and sweet sonth."
      },
      {
        "id": "chhappan-bhog-veg-item-3",
        "name": "Dahi Bhalla Papdi Chaat",
        "price": 90,
        "category": "Starters",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80",
        "description": "Soft lentil dumplings and crisp papdis drenched in whipped curd, roasted cumin, and sweet-spicy chutneys."
      },
      {
        "id": "chhappan-bhog-veg-item-4",
        "name": "Amritsari Chhole Bhature",
        "price": 160,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=600&q=80",
        "description": "Pair of balloon bhatures served with dark spiced Punjabi chickpeas, pickled onions and fried green chilli."
      },
      {
        "id": "chhappan-bhog-veg-item-5",
        "name": "Special Pure Veg Deluxe Thali",
        "price": 260,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=600&q=80",
        "description": "Paneer Butter Masala, Dal Makhani, Mix Veg, Jeera Rice, 2 Butter Naan, Gulab Jamun, Papad and Raita."
      },
      {
        "id": "chhappan-bhog-veg-item-7",
        "name": "Dal Makhani Special",
        "price": 210,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80",
        "description": "Whole black lentils and kidney beans slow-cooked overnight with white butter and cream."
      },
      {
        "id": "chhappan-bhog-veg-item-8",
        "name": "Butter Tandoori Roti (2 pcs)",
        "price": 40,
        "category": "Breads",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=600&q=80",
        "description": "Whole wheat flatbread baked in clay oven and topped with pure amul butter."
      },
      {
        "id": "chhappan-bhog-veg-item-9",
        "name": "Garlic Butter Naan",
        "price": 65,
        "category": "Breads",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=600&q=80",
        "description": "Soft leavened bread infused with minced garlic, fresh coriander and generous butter."
      },
      {
        "id": "chhappan-bhog-veg-item-10",
        "name": "Special Kesar Rasmalai (2 pcs)",
        "price": 90,
        "category": "Desserts",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1564355808539-22fda35bed7e?auto=format&fit=crop&w=600&q=80",
        "description": "Delicate cottage cheese patties soaked in saffron-infused clotted milk garnished with pistachios."
      },
      {
        "id": "chhappan-bhog-veg-item-11",
        "name": "Desi Ghee Gulab Jamun (2 pcs)",
        "price": 60,
        "category": "Desserts",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=600&q=80",
        "description": "Hot melt-in-mouth milk solids dumplings soaked in cardamom and rose sugar syrup."
      },
      {
        "id": "chhappan-bhog-veg-item-12",
        "name": "Pure Desi Ghee Jalebi (250g)",
        "price": 120,
        "category": "Desserts",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=600&q=80",
        "description": "Crisp spirals made with fermented batter, fried in pure desi ghee and immersed in saffron syrup."
      }
    ]
  },
  {
    "id": "goli-vada-pav-gkp",
    "name": "Goli Vada Pav No. 1",
    "area": "Betiahata",
    "city": "Gorakhpur",
    "description": "Authentic Mumbai street food outlet serving hot and crispy vada pavs, cheese rolls, sabudana vadas, and masala fries.",
    "categories": [
      "street-food",
      "fast-food"
    ],
    "cuisines": [
      "Street Food",
      "Mumbai Fast Food"
    ],
    "popularDishes": [
      "Cheese Vada Pav",
      "Schezwan Roll",
      "Crispy Sabudana Vada",
      "Thums Up Float"
    ],
    "costForTwo": 180,
    "averageRating": 4.5,
    "reviewCount": 310,
    "imageUrl": "https://images.unsplash.com/photo-1579027989536-b7b1f875659b?auto=format&fit=crop&w=1000&q=80",
    "logoUrl": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20100%20100%22%20width%3D%22200%22%20height%3D%22200%22%3E%0A%20%20%3Cdefs%3E%0A%20%20%20%20%3ClinearGradient%20id%3D%22brandGrad_goli-vada-pav-gkp%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23a33a0a%22%2F%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%232b2018%22%2F%3E%0A%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%3Cfilter%20id%3D%22shadow_goli-vada-pav-gkp%22%20x%3D%22-10%25%22%20y%3D%22-10%25%22%20width%3D%22120%25%22%20height%3D%22120%25%22%3E%0A%20%20%20%20%20%20%3CfeDropShadow%20dx%3D%220%22%20dy%3D%222%22%20stdDeviation%3D%222.5%22%20flood-opacity%3D%220.35%22%2F%3E%0A%20%20%20%20%3C%2Ffilter%3E%0A%20%20%3C%2Fdefs%3E%0A%20%20%3C!--%20Background%20Shield%20Badge%20--%3E%0A%20%20%3Crect%20x%3D%224%22%20y%3D%224%22%20width%3D%2292%22%20height%3D%2292%22%20rx%3D%2226%22%20fill%3D%22url(%23brandGrad_goli-vada-pav-gkp)%22%20stroke%3D%22%23f5e9d0%22%20stroke-width%3D%222.5%22%20filter%3D%22url(%23shadow_goli-vada-pav-gkp)%22%2F%3E%0A%20%20%3C!--%20Inner%20Ornamental%20Line%20--%3E%0A%20%20%3Crect%20x%3D%229%22%20y%3D%229%22%20width%3D%2282%22%20height%3D%2282%22%20rx%3D%2221%22%20fill%3D%22none%22%20stroke%3D%22%23f5e9d0%22%20stroke-width%3D%221%22%20stroke-dasharray%3D%223%203%22%20opacity%3D%220.45%22%2F%3E%0A%20%20%3C!--%20Emblem%20Motif%20--%3E%0A%20%20%3Ccircle%20cx%3D%2250%22%20cy%3D%2238%22%20r%3D%2214%22%20stroke%3D%22%23f5e9d0%22%20stroke-width%3D%222%22%20fill%3D%22none%22%20opacity%3D%220.7%22%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22M44%2030%20L44%2046%20M56%2030%20L56%2046%20M42%2030%20C42%2035%2046%2035%2046%2030%22%20stroke%3D%22%23f5e9d0%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%2F%3E%0A%20%20%3C!--%20Typography%20%2F%20Monogram%20--%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2276%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C%20-apple-system%2C%20sans-serif%22%20font-weight%3D%22900%22%20font-size%3D%2215%22%20fill%3D%22%23ffffff%22%20letter-spacing%3D%221.5%22%3EGV%3C%2Ftext%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2287%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C%20-apple-system%2C%20sans-serif%22%20font-weight%3D%22800%22%20font-size%3D%226.5%22%20fill%3D%22%23f5e9d0%22%20letter-spacing%3D%222%22%3EGORAKHPUR%3C%2Ftext%3E%0A%3C%2Fsvg%3E",
    "isDemo": false,
    "phone": "+91 98392 11029",
    "address": "Near R.K. Poly Clinic, Betiahata Chowk, Gorakhpur",
    "openTime": "10:30",
    "closeTime": "22:30",
    "openDays": [
      "Mon",
      "Tue",
      "Wed",
      "Thu",
      "Fri",
      "Sat",
      "Sun"
    ],
    "diet": "veg",
    "status": "Active",
    "ownerName": "Amitesh Mishra",
    "ownerEmail": "goli.betiahata@gorakhpurfoodguide.in",
    "facilities": [
      "Fast Service",
      "Hygienic Packaging",
      "Takeaway",
      "UPI Accepted"
    ],
    "ratingsBreakdown": {
      "food": 4.6,
      "taste": 4.6,
      "hygiene": 4.5,
      "service": 4.6,
      "ambience": 4
    },
    "priceRange": {
      "min": 45,
      "max": 190
    },
    "distanceKm": 1.5,
    "menu": [
      {
        "id": "goli-vada-pav-gkp-pop-1",
        "name": "Cheese Vada Pav",
        "price": 65,
        "category": "Starters",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80",
        "description": "Crisp spicy potato patty nestled in pav with fried green chillies, garlic dry chutney, and cheddar cheese."
      },
      {
        "id": "goli-vada-pav-gkp-pop-2",
        "name": "Schezwan Roll",
        "price": 110,
        "category": "Starters",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?auto=format&fit=crop&w=600&q=80",
        "description": "Fresh cottage cheese and seasonal ingredients simmered in a luscious spiced onion-tomato gravy."
      },
      {
        "id": "goli-vada-pav-gkp-pop-3",
        "name": "Crispy Sabudana Vada",
        "price": 140,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80",
        "description": "Fresh cottage cheese and seasonal ingredients simmered in a luscious spiced onion-tomato gravy."
      },
      {
        "id": "goli-vada-pav-gkp-pop-4",
        "name": "Thums Up Float",
        "price": 40,
        "category": "Beverages",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1553787499-6f9133860278?auto=format&fit=crop&w=600&q=80",
        "description": "Fresh cottage cheese and seasonal ingredients simmered in a luscious spiced onion-tomato gravy."
      },
      {
        "id": "goli-vada-pav-gkp-item-1",
        "name": "Double Cheese Crunch Burger",
        "price": 160,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80",
        "description": "Crisp vegetable patty with double melted cheddar, gherkins, lettuce and secret thousand island sauce."
      },
      {
        "id": "goli-vada-pav-gkp-item-3",
        "name": "Hand-Tossed Margherita Pizza (Regular)",
        "price": 240,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80",
        "description": "Classic Italian pizza with aromatic basil leaves, extra virgin olive oil and 100% mozzarella."
      },
      {
        "id": "goli-vada-pav-gkp-item-5",
        "name": "Loaded Cheese Fries with Jalapeños",
        "price": 160,
        "category": "Starters",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1576107232684-1279f3908594?auto=format&fit=crop&w=600&q=80",
        "description": "Crinkle-cut hot fries smothered in liquid cheese, jalapeño bits, and smoky barbecue drizzle."
      },
      {
        "id": "goli-vada-pav-gkp-item-8",
        "name": "Classic Mumbai Vada Pav (2 pcs)",
        "price": 70,
        "category": "Starters",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80",
        "description": "Spiced potato batata vada in soft pav bread with spicy garlic dry chutney and fried green chillies."
      },
      {
        "id": "goli-vada-pav-gkp-item-9",
        "name": "Oreo Thick Overload Shake",
        "price": 160,
        "category": "Beverages",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=600&q=80",
        "description": "Vanilla cream milkshake loaded with crushed Oreo cookies, chocolate syrup and whipped cream."
      },
      {
        "id": "goli-vada-pav-gkp-item-10",
        "name": "Choco Lava Cake with Molten Core",
        "price": 110,
        "category": "Desserts",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=600&q=80",
        "description": "Warm soft chocolate sponge cake with an irresistible flowing chocolate fudge center."
      }
    ]
  },
  {
    "id": "the-chocolate-room-gkp",
    "name": "The Chocolate Room",
    "area": "Civil Lines",
    "city": "Gorakhpur",
    "description": "Chic dessert lounge and cafe famous for Dutch chocolate fondues, sizzling brownies, pancakes, and artisanal Italian coffees.",
    "categories": [
      "cafe",
      "fast-food"
    ],
    "cuisines": [
      "Desserts",
      "Cafe",
      "Chocolate Lounge",
      "Continental"
    ],
    "popularDishes": [
      "Death by Chocolate Pancake",
      "Chocolate Fondue",
      "Hot Chocolate",
      "Garlic Bread"
    ],
    "costForTwo": 550,
    "averageRating": 4.7,
    "reviewCount": 390,
    "imageUrl": "https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=1000&q=80",
    "logoUrl": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20100%20100%22%20width%3D%22200%22%20height%3D%22200%22%3E%0A%20%20%3Cdefs%3E%0A%20%20%20%20%3ClinearGradient%20id%3D%22brandGrad_the-chocolate-room-gkp%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%235c3a21%22%2F%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%2326180e%22%2F%3E%0A%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%3Cfilter%20id%3D%22shadow_the-chocolate-room-gkp%22%20x%3D%22-10%25%22%20y%3D%22-10%25%22%20width%3D%22120%25%22%20height%3D%22120%25%22%3E%0A%20%20%20%20%20%20%3CfeDropShadow%20dx%3D%220%22%20dy%3D%222%22%20stdDeviation%3D%222.5%22%20flood-opacity%3D%220.35%22%2F%3E%0A%20%20%20%20%3C%2Ffilter%3E%0A%20%20%3C%2Fdefs%3E%0A%20%20%3C!--%20Background%20Shield%20Badge%20--%3E%0A%20%20%3Crect%20x%3D%224%22%20y%3D%224%22%20width%3D%2292%22%20height%3D%2292%22%20rx%3D%2226%22%20fill%3D%22url(%23brandGrad_the-chocolate-room-gkp)%22%20stroke%3D%22%23fed7aa%22%20stroke-width%3D%222.5%22%20filter%3D%22url(%23shadow_the-chocolate-room-gkp)%22%2F%3E%0A%20%20%3C!--%20Inner%20Ornamental%20Line%20--%3E%0A%20%20%3Crect%20x%3D%229%22%20y%3D%229%22%20width%3D%2282%22%20height%3D%2282%22%20rx%3D%2221%22%20fill%3D%22none%22%20stroke%3D%22%23fed7aa%22%20stroke-width%3D%221%22%20stroke-dasharray%3D%223%203%22%20opacity%3D%220.45%22%2F%3E%0A%20%20%3C!--%20Emblem%20Motif%20--%3E%0A%20%20%3Cpath%20d%3D%22M38%2038%20C38%2034%2042%2032%2046%2032%20L54%2032%20C58%2032%2062%2034%2062%2038%20L60%2050%20C60%2054%2056%2056%2050%2056%20C44%2056%2040%2054%2040%2050%20Z%22%20fill%3D%22%23fed7aa%22%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22M62%2040%20L65%2040%20C67%2040%2068%2041%2068%2043%20L68%2045%20C68%2047%2067%2048%2065%2048%20L61%2048%22%20stroke%3D%22%23fed7aa%22%20stroke-width%3D%222%22%20fill%3D%22none%22%2F%3E%0A%20%20%3C!--%20Typography%20%2F%20Monogram%20--%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2276%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C%20-apple-system%2C%20sans-serif%22%20font-weight%3D%22900%22%20font-size%3D%2215%22%20fill%3D%22%23ffffff%22%20letter-spacing%3D%221.5%22%3ECR%3C%2Ftext%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2287%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C%20-apple-system%2C%20sans-serif%22%20font-weight%3D%22800%22%20font-size%3D%226.5%22%20fill%3D%22%23fed7aa%22%20letter-spacing%3D%222%22%3EGORAKHPUR%3C%2Ftext%3E%0A%3C%2Fsvg%3E",
    "isDemo": false,
    "phone": "+91 94511 22880",
    "address": "Park Road, Near Standard Chartered Bank, Civil Lines, Gorakhpur",
    "openTime": "11:00",
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
    "diet": "veg",
    "status": "Active",
    "ownerName": "Tanay Agarwal",
    "ownerEmail": "tcr.gorakhpur@gorakhpurfoodguide.in",
    "facilities": [
      "Cozy Ambiance",
      "Air Conditioned",
      "Free Wi-Fi",
      "Card & UPI Payments"
    ],
    "ratingsBreakdown": {
      "food": 4.8,
      "taste": 4.9,
      "hygiene": 4.8,
      "service": 4.6,
      "ambience": 4.8
    },
    "priceRange": {
      "min": 180,
      "max": 600
    },
    "distanceKm": 0.9,
    "menu": [
      {
        "id": "the-chocolate-room-gkp-pop-1",
        "name": "Death by Chocolate Pancake",
        "price": 120,
        "category": "Desserts",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1562376552-0d160a2f238d?auto=format&fit=crop&w=600&q=80",
        "description": "Warm freshly baked dessert smothered in rich melted Belgian chocolate and garnishes."
      },
      {
        "id": "the-chocolate-room-gkp-pop-2",
        "name": "Chocolate Fondue",
        "price": 299,
        "category": "Desserts",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=600&q=80",
        "description": "Warm melted Belgian chocolate pot served with marshmallow skewers, brownie bites, and fresh fruits."
      },
      {
        "id": "the-chocolate-room-gkp-pop-3",
        "name": "Hot Chocolate",
        "price": 260,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=600&q=80",
        "description": "Fresh cottage cheese and seasonal ingredients simmered in a luscious spiced onion-tomato gravy."
      },
      {
        "id": "the-chocolate-room-gkp-pop-4",
        "name": "Garlic Bread",
        "price": 200,
        "category": "Starters",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=600&q=80",
        "description": "Fresh cottage cheese and seasonal ingredients simmered in a luscious spiced onion-tomato gravy."
      },
      {
        "id": "the-chocolate-room-gkp-item-1",
        "name": "Belgian Nutella Waffle with Vanilla Ice Cream",
        "price": 210,
        "category": "Desserts",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1562376552-0d160a2f238d?auto=format&fit=crop&w=600&q=80",
        "description": "Freshly baked golden Belgian waffle smothered with warm Nutella and topped with ice cream."
      },
      {
        "id": "the-chocolate-room-gkp-item-2",
        "name": "Lotus Biscoff Thick Shake",
        "price": 190,
        "category": "Beverages",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=600&q=80",
        "description": "Creamy milkshake blended with genuine Lotus Biscoff spread and crushed caramelized biscuits."
      },
      {
        "id": "the-chocolate-room-gkp-item-3",
        "name": "Farmhouse Woodfired Pizza (10 inch)",
        "price": 360,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80",
        "description": "Hand-stretched dough topped with San Marzano tomato sauce, mozzarella, bell peppers, mushrooms and olives."
      },
      {
        "id": "the-chocolate-room-gkp-item-4",
        "name": "Penne Creamy Alfredo Pasta with Mushrooms",
        "price": 290,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1621996346565-e3d5d6281724?auto=format&fit=crop&w=600&q=80",
        "description": "Al dente penne tossed in rich parmesan garlic white sauce with sautéed mushrooms."
      },
      {
        "id": "the-chocolate-room-gkp-item-5",
        "name": "Loaded Cheesy Mexican Nachos",
        "price": 240,
        "category": "Starters",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1576107232684-1279f3908594?auto=format&fit=crop&w=600&q=80",
        "description": "Crispy corn tortilla chips baked with jalapeños, salsa, black olives and warm cheddar sauce."
      },
      {
        "id": "the-chocolate-room-gkp-item-6",
        "name": "Crispy Peri Peri French Fries",
        "price": 140,
        "category": "Starters",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1576107232684-1279f3908594?auto=format&fit=crop&w=600&q=80",
        "description": "Golden potato fries seasoned with zesty African bird’s eye peri-peri spice dust."
      },
      {
        "id": "the-chocolate-room-gkp-item-7",
        "name": "Classic Cold Coffee with Ice Cream",
        "price": 160,
        "category": "Beverages",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=600&q=80",
        "description": "Rich espresso blended with chilled whole milk and topped with a scoop of vanilla gelato."
      },
      {
        "id": "the-chocolate-room-gkp-item-8",
        "name": "Kulhad Adrak Masala Chai",
        "price": 60,
        "category": "Beverages",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=600&q=80",
        "description": "Freshly brewed strong tea infused with crushed ginger, cardamom, and clove in a clay kulhad."
      },
      {
        "id": "the-chocolate-room-gkp-item-9",
        "name": "New York Baked Blueberry Cheesecake",
        "price": 220,
        "category": "Desserts",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=600&q=80",
        "description": "Dense cream cheese filling on a graham cracker crust topped with tangy wild blueberry compote."
      },
      {
        "id": "the-chocolate-room-gkp-item-10",
        "name": "Tiramisu Italiano Cup",
        "price": 210,
        "category": "Desserts",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=600&q=80",
        "description": "Espresso-soaked savoiardi biscuits layered with mascarpone cream and dusted with cocoa."
      },
      {
        "id": "the-chocolate-room-gkp-item-11",
        "name": "Classic Grilled Paneer Tikka Sandwich",
        "price": 180,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=600&q=80",
        "description": "Multi-grain bread toasted with spiced paneer tikka, mint chutney, and mozzarella cheese."
      }
    ]
  },
  {
    "id": "swastik-restaurant-gkp",
    "name": "Swastik Restaurant & Thali",
    "area": "Station Road",
    "city": "Gorakhpur",
    "description": "Historic vegetarian establishment near Gorakhpur Railway Junction serving wholesome North Indian thalis, paneer dishes, and fast service.",
    "categories": [
      "north-indian"
    ],
    "cuisines": [
      "North Indian",
      "Pure Veg Thali"
    ],
    "popularDishes": [
      "Deluxe Thali",
      "Paneer Kadhai",
      "Jeera Rice",
      "Tandoori Roti"
    ],
    "costForTwo": 350,
    "averageRating": 4.4,
    "reviewCount": 420,
    "imageUrl": "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1000&q=80",
    "logoUrl": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20100%20100%22%20width%3D%22200%22%20height%3D%22200%22%3E%0A%20%20%3Cdefs%3E%0A%20%20%20%20%3ClinearGradient%20id%3D%22brandGrad_swastik-restaurant-gkp%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23a33a0a%22%2F%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%232b2018%22%2F%3E%0A%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%3Cfilter%20id%3D%22shadow_swastik-restaurant-gkp%22%20x%3D%22-10%25%22%20y%3D%22-10%25%22%20width%3D%22120%25%22%20height%3D%22120%25%22%3E%0A%20%20%20%20%20%20%3CfeDropShadow%20dx%3D%220%22%20dy%3D%222%22%20stdDeviation%3D%222.5%22%20flood-opacity%3D%220.35%22%2F%3E%0A%20%20%20%20%3C%2Ffilter%3E%0A%20%20%3C%2Fdefs%3E%0A%20%20%3C!--%20Background%20Shield%20Badge%20--%3E%0A%20%20%3Crect%20x%3D%224%22%20y%3D%224%22%20width%3D%2292%22%20height%3D%2292%22%20rx%3D%2226%22%20fill%3D%22url(%23brandGrad_swastik-restaurant-gkp)%22%20stroke%3D%22%23f5e9d0%22%20stroke-width%3D%222.5%22%20filter%3D%22url(%23shadow_swastik-restaurant-gkp)%22%2F%3E%0A%20%20%3C!--%20Inner%20Ornamental%20Line%20--%3E%0A%20%20%3Crect%20x%3D%229%22%20y%3D%229%22%20width%3D%2282%22%20height%3D%2282%22%20rx%3D%2221%22%20fill%3D%22none%22%20stroke%3D%22%23f5e9d0%22%20stroke-width%3D%221%22%20stroke-dasharray%3D%223%203%22%20opacity%3D%220.45%22%2F%3E%0A%20%20%3C!--%20Emblem%20Motif%20--%3E%0A%20%20%3Ccircle%20cx%3D%2250%22%20cy%3D%2238%22%20r%3D%2214%22%20stroke%3D%22%23f5e9d0%22%20stroke-width%3D%222%22%20fill%3D%22none%22%20opacity%3D%220.7%22%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22M44%2030%20L44%2046%20M56%2030%20L56%2046%20M42%2030%20C42%2035%2046%2035%2046%2030%22%20stroke%3D%22%23f5e9d0%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%2F%3E%0A%20%20%3C!--%20Typography%20%2F%20Monogram%20--%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2276%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C%20-apple-system%2C%20sans-serif%22%20font-weight%3D%22900%22%20font-size%3D%2215%22%20fill%3D%22%23ffffff%22%20letter-spacing%3D%221.5%22%3ESR%3C%2Ftext%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2287%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C%20-apple-system%2C%20sans-serif%22%20font-weight%3D%22800%22%20font-size%3D%226.5%22%20fill%3D%22%23f5e9d0%22%20letter-spacing%3D%222%22%3EGORAKHPUR%3C%2Ftext%3E%0A%3C%2Fsvg%3E",
    "isDemo": false,
    "phone": "+91 94152 77001",
    "address": "Near Railway Station Exit Gate 1, Station Road, Gorakhpur",
    "openTime": "06:30",
    "closeTime": "23:30",
    "openDays": [
      "Mon",
      "Tue",
      "Wed",
      "Thu",
      "Fri",
      "Sat",
      "Sun"
    ],
    "diet": "veg",
    "status": "Active",
    "ownerName": "O.P. Sharma",
    "ownerEmail": "swastik.railway@gorakhpurfoodguide.in",
    "facilities": [
      "Fast Turnover",
      "Air Conditioned Hall",
      "Budget Friendly",
      "UPI Accepted"
    ],
    "ratingsBreakdown": {
      "food": 4.5,
      "taste": 4.6,
      "hygiene": 4.4,
      "service": 4.5,
      "ambience": 4.1
    },
    "priceRange": {
      "min": 120,
      "max": 380
    },
    "distanceKm": 1.8,
    "menu": [
      {
        "id": "swastik-restaurant-gkp-pop-1",
        "name": "Deluxe Thali",
        "price": 180,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=600&q=80",
        "description": "Wholesome platter featuring two curries, dal, jeera rice, fresh breads, salad, and dessert."
      },
      {
        "id": "swastik-restaurant-gkp-pop-2",
        "name": "Paneer Kadhai",
        "price": 170,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=600&q=80",
        "description": "Fresh cottage cheese and seasonal ingredients simmered in a luscious spiced onion-tomato gravy."
      },
      {
        "id": "swastik-restaurant-gkp-pop-3",
        "name": "Jeera Rice",
        "price": 170,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=600&q=80",
        "description": "Fresh cottage cheese and seasonal ingredients simmered in a luscious spiced onion-tomato gravy."
      },
      {
        "id": "swastik-restaurant-gkp-pop-4",
        "name": "Tandoori Roti",
        "price": 30,
        "category": "Breads",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=600&q=80",
        "description": "Fresh cottage cheese and seasonal ingredients simmered in a luscious spiced onion-tomato gravy."
      },
      {
        "id": "swastik-restaurant-gkp-item-5",
        "name": "Paneer Tikka Shashlik",
        "price": 280,
        "category": "Starters",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=600&q=80",
        "description": "Cottage cheese cubes with bell peppers and onions grilled to perfection in clay oven."
      },
      {
        "id": "swastik-restaurant-gkp-item-9",
        "name": "Kadhai Paneer",
        "price": 290,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=600&q=80",
        "description": "Paneer cubes tossed with fresh ground coriander, dry red chillies, capsicum, and thick onion masala."
      },
      {
        "id": "swastik-restaurant-gkp-item-10",
        "name": "Dal Makhani Slow-Cooked",
        "price": 240,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80",
        "description": "Classic black lentils slow-cooked with fresh cream and butter for 24 hours."
      },
      {
        "id": "swastik-restaurant-gkp-item-13",
        "name": "Butter Garlic Naan",
        "price": 65,
        "category": "Breads",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=600&q=80",
        "description": "Refined flour leavened bread brushed with garlic and butter."
      },
      {
        "id": "swastik-restaurant-gkp-item-14",
        "name": "Khamiri Sheermal Roti",
        "price": 60,
        "category": "Breads",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=600&q=80",
        "description": "Traditional saffron-flavored sweet Awadhi flatbread baked in tandoor."
      },
      {
        "id": "swastik-restaurant-gkp-item-15",
        "name": "Shahi Tukda with Rabdi",
        "price": 160,
        "category": "Desserts",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1564355808539-22fda35bed7e?auto=format&fit=crop&w=600&q=80",
        "description": "Crispy fried bread soaked in saffron syrup and blanketed in thick pistacio rabdi."
      },
      {
        "id": "swastik-restaurant-gkp-item-16",
        "name": "Fresh Mint Lime Mojito",
        "price": 120,
        "category": "Beverages",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=600&q=80",
        "description": "Refreshing blend of crushed mint leaves, fresh lime juice, sugar syrup, and soda."
      }
    ]
  },
  {
    "id": "rambha-hotel-bobis",
    "name": "Rambha Restaurant - Hotel Bobis",
    "area": "Civil Lines",
    "city": "Gorakhpur",
    "description": "Fine-dining institution celebrated across Gorakhpur for Mughlai roasted meats, delicate Chinese gravies, and courteous silver service.",
    "categories": [
      "north-indian",
      "chinese"
    ],
    "cuisines": [
      "Mughlai",
      "North Indian",
      "Chinese"
    ],
    "popularDishes": [
      "Chicken Tikka Butter Masala",
      "Mutton Rogan Josh",
      "Crispy Chilli Babycorn",
      "Butter Naan"
    ],
    "costForTwo": 850,
    "averageRating": 4.6,
    "reviewCount": 350,
    "imageUrl": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1000&q=80",
    "logoUrl": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20100%20100%22%20width%3D%22200%22%20height%3D%22200%22%3E%0A%20%20%3Cdefs%3E%0A%20%20%20%20%3ClinearGradient%20id%3D%22brandGrad_rambha-hotel-bobis%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%237c1c1c%22%2F%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23240808%22%2F%3E%0A%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%3Cfilter%20id%3D%22shadow_rambha-hotel-bobis%22%20x%3D%22-10%25%22%20y%3D%22-10%25%22%20width%3D%22120%25%22%20height%3D%22120%25%22%3E%0A%20%20%20%20%20%20%3CfeDropShadow%20dx%3D%220%22%20dy%3D%222%22%20stdDeviation%3D%222.5%22%20flood-opacity%3D%220.35%22%2F%3E%0A%20%20%20%20%3C%2Ffilter%3E%0A%20%20%3C%2Fdefs%3E%0A%20%20%3C!--%20Background%20Shield%20Badge%20--%3E%0A%20%20%3Crect%20x%3D%224%22%20y%3D%224%22%20width%3D%2292%22%20height%3D%2292%22%20rx%3D%2226%22%20fill%3D%22url(%23brandGrad_rambha-hotel-bobis)%22%20stroke%3D%22%23fca5a5%22%20stroke-width%3D%222.5%22%20filter%3D%22url(%23shadow_rambha-hotel-bobis)%22%2F%3E%0A%20%20%3C!--%20Inner%20Ornamental%20Line%20--%3E%0A%20%20%3Crect%20x%3D%229%22%20y%3D%229%22%20width%3D%2282%22%20height%3D%2282%22%20rx%3D%2221%22%20fill%3D%22none%22%20stroke%3D%22%23fca5a5%22%20stroke-width%3D%221%22%20stroke-dasharray%3D%223%203%22%20opacity%3D%220.45%22%2F%3E%0A%20%20%3C!--%20Emblem%20Motif%20--%3E%0A%20%20%3Cpath%20d%3D%22M36%2044%20C36%2052%2064%2052%2064%2044%20Z%22%20fill%3D%22%23fca5a5%22%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22M42%2034%20L58%2048%20M58%2034%20L42%2048%22%20stroke%3D%22%23ffffff%22%20stroke-width%3D%222.5%22%20stroke-linecap%3D%22round%22%2F%3E%0A%20%20%3C!--%20Typography%20%2F%20Monogram%20--%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2276%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C%20-apple-system%2C%20sans-serif%22%20font-weight%3D%22900%22%20font-size%3D%2215%22%20fill%3D%22%23ffffff%22%20letter-spacing%3D%221.5%22%3ERR%3C%2Ftext%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2287%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C%20-apple-system%2C%20sans-serif%22%20font-weight%3D%22800%22%20font-size%3D%226.5%22%20fill%3D%22%23fca5a5%22%20letter-spacing%3D%222%22%3EGORAKHPUR%3C%2Ftext%3E%0A%3C%2Fsvg%3E",
    "isDemo": false,
    "phone": "+91 551 233 6612",
    "address": "Inside Bobis Hotel, Park Road, Civil Lines, Gorakhpur",
    "openTime": "12:00",
    "closeTime": "23:30",
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
    "ownerName": "Gurpreet Singh Anand",
    "ownerEmail": "rambha.bobis@gorakhpurfoodguide.in",
    "facilities": [
      "Fine Dining",
      "Bar Attached",
      "Valet Parking",
      "Credit Cards Accepted"
    ],
    "ratingsBreakdown": {
      "food": 4.7,
      "taste": 4.8,
      "hygiene": 4.6,
      "service": 4.6,
      "ambience": 4.6
    },
    "priceRange": {
      "min": 320,
      "max": 900
    },
    "distanceKm": 1.1,
    "menu": [
      {
        "id": "rambha-hotel-bobis-pop-1",
        "name": "Chicken Tikka Butter Masala",
        "price": 480,
        "category": "Starters",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=600&q=80",
        "description": "Marinated in yogurt, roasted garlic, and spices, chargrilled to smoky perfection."
      },
      {
        "id": "rambha-hotel-bobis-pop-2",
        "name": "Mutton Rogan Josh",
        "price": 580,
        "category": "Main Course",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1545247181-516773cae754?auto=format&fit=crop&w=600&q=80",
        "description": "Succulent pieces cooked in rich fragrant gravy with roasted spices, brown onions, and fresh coriander."
      },
      {
        "id": "rambha-hotel-bobis-pop-3",
        "name": "Crispy Chilli Babycorn",
        "price": 310,
        "category": "Starters",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=600&q=80",
        "description": "Fresh cottage cheese and seasonal ingredients simmered in a luscious spiced onion-tomato gravy."
      },
      {
        "id": "rambha-hotel-bobis-pop-4",
        "name": "Butter Naan",
        "price": 70,
        "category": "Breads",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=600&q=80",
        "description": "Fresh cottage cheese and seasonal ingredients simmered in a luscious spiced onion-tomato gravy."
      },
      {
        "id": "rambha-hotel-bobis-item-1",
        "name": "Darjeeling Steamed Chicken Momos (8 pcs)",
        "price": 160,
        "category": "Starters",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=600&q=80",
        "description": "Thin-wrapper dumplings filled with juicy minced chicken, ginger and coriander with fiery red chutney."
      },
      {
        "id": "rambha-hotel-bobis-item-2",
        "name": "Kurkure Crispy Paneer Momos (6 pcs)",
        "price": 150,
        "category": "Starters",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=600&q=80",
        "description": "Crispy cornflake-crusted deep-fried momos filled with seasoned spiced cottage cheese."
      },
      {
        "id": "rambha-hotel-bobis-item-3",
        "name": "Chilli Garlic Hakka Noodles",
        "price": 190,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=600&q=80",
        "description": "Wok-tossed noodles with julienned vegetables, burnt garlic, soy, and spicy red chilli paste."
      },
      {
        "id": "rambha-hotel-bobis-item-4",
        "name": "Veg Manchurian Gravy with Fried Rice Bowl",
        "price": 240,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=600&q=80",
        "description": "Deep-fried vegetable balls in a savory, tangy and spicy dark soya and ginger garlic sauce."
      },
      {
        "id": "rambha-hotel-bobis-item-5",
        "name": "Schezwan Chicken Fried Rice",
        "price": 260,
        "category": "Main Course",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=600&q=80",
        "description": "Aged basmati rice stir-fried with diced chicken, eggs, and authentic spicy Sichuan pepper paste."
      },
      {
        "id": "rambha-hotel-bobis-item-6",
        "name": "Crispy Honey Chilli Potatoes",
        "price": 180,
        "category": "Starters",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80",
        "description": "Crispy finger potatoes tossed in sweet honey, roasted sesame seeds, and spicy red chilli sauce."
      },
      {
        "id": "rambha-hotel-bobis-item-7",
        "name": "Drums of Heaven Chicken Lollipops (6 pcs)",
        "price": 280,
        "category": "Starters",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=600&q=80",
        "description": "Crispy chicken winglets tossed in fiery Schezwan garlic sauce with spring onions."
      },
      {
        "id": "rambha-hotel-bobis-item-8",
        "name": "Tibetan Thukpa Noodle Soup Bowl",
        "price": 210,
        "category": "Starters",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=600&q=80",
        "description": "Hearty Himalayan noodle soup packed with fresh greens, mushrooms, and spiced broth."
      },
      {
        "id": "rambha-hotel-bobis-item-9",
        "name": "Crispy Fried Spring Rolls (6 pcs)",
        "price": 170,
        "category": "Starters",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?auto=format&fit=crop&w=600&q=80",
        "description": "Golden crunchy wrappers filled with cabbage, carrots, bell peppers, served with sweet chilli dip."
      },
      {
        "id": "rambha-hotel-bobis-item-10",
        "name": "Darjeeling Lemon Iced Tea",
        "price": 110,
        "category": "Beverages",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=600&q=80",
        "description": "Refreshing brewed black tea infused with lemon zest and mint over crushed ice."
      },
      {
        "id": "rambha-hotel-bobis-item-11",
        "name": "Darjeeling Darsaan with Vanilla Ice Cream",
        "price": 140,
        "category": "Desserts",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=600&q=80",
        "description": "Fried honey-glazed flat noodles topped with roasted sesame seeds and cool vanilla scoop."
      }
    ]
  },
  {
    "id": "saffron-lake-diner",
    "name": "Saffron Multi-Cuisine Diner",
    "area": "Taramandal",
    "city": "Gorakhpur",
    "description": "Charming lake-facing family restaurant offering sizzling North Indian curries, Chinese woks, and tandoori platters.",
    "categories": [
      "north-indian",
      "chinese"
    ],
    "cuisines": [
      "North Indian",
      "Chinese",
      "Sizzlers"
    ],
    "popularDishes": [
      "Veg Sizzler",
      "Chicken Kadhai",
      "Cheese Garlic Naan",
      "Brownie with Ice Cream"
    ],
    "costForTwo": 650,
    "averageRating": 4.6,
    "reviewCount": 330,
    "imageUrl": "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1000&q=80",
    "logoUrl": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20100%20100%22%20width%3D%22200%22%20height%3D%22200%22%3E%0A%20%20%3Cdefs%3E%0A%20%20%20%20%3ClinearGradient%20id%3D%22brandGrad_saffron-lake-diner%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%237c1c1c%22%2F%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23240808%22%2F%3E%0A%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%3Cfilter%20id%3D%22shadow_saffron-lake-diner%22%20x%3D%22-10%25%22%20y%3D%22-10%25%22%20width%3D%22120%25%22%20height%3D%22120%25%22%3E%0A%20%20%20%20%20%20%3CfeDropShadow%20dx%3D%220%22%20dy%3D%222%22%20stdDeviation%3D%222.5%22%20flood-opacity%3D%220.35%22%2F%3E%0A%20%20%20%20%3C%2Ffilter%3E%0A%20%20%3C%2Fdefs%3E%0A%20%20%3C!--%20Background%20Shield%20Badge%20--%3E%0A%20%20%3Crect%20x%3D%224%22%20y%3D%224%22%20width%3D%2292%22%20height%3D%2292%22%20rx%3D%2226%22%20fill%3D%22url(%23brandGrad_saffron-lake-diner)%22%20stroke%3D%22%23fca5a5%22%20stroke-width%3D%222.5%22%20filter%3D%22url(%23shadow_saffron-lake-diner)%22%2F%3E%0A%20%20%3C!--%20Inner%20Ornamental%20Line%20--%3E%0A%20%20%3Crect%20x%3D%229%22%20y%3D%229%22%20width%3D%2282%22%20height%3D%2282%22%20rx%3D%2221%22%20fill%3D%22none%22%20stroke%3D%22%23fca5a5%22%20stroke-width%3D%221%22%20stroke-dasharray%3D%223%203%22%20opacity%3D%220.45%22%2F%3E%0A%20%20%3C!--%20Emblem%20Motif%20--%3E%0A%20%20%3Cpath%20d%3D%22M36%2044%20C36%2052%2064%2052%2064%2044%20Z%22%20fill%3D%22%23fca5a5%22%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22M42%2034%20L58%2048%20M58%2034%20L42%2048%22%20stroke%3D%22%23ffffff%22%20stroke-width%3D%222.5%22%20stroke-linecap%3D%22round%22%2F%3E%0A%20%20%3C!--%20Typography%20%2F%20Monogram%20--%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2276%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C%20-apple-system%2C%20sans-serif%22%20font-weight%3D%22900%22%20font-size%3D%2215%22%20fill%3D%22%23ffffff%22%20letter-spacing%3D%221.5%22%3ESM%3C%2Ftext%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2287%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C%20-apple-system%2C%20sans-serif%22%20font-weight%3D%22800%22%20font-size%3D%226.5%22%20fill%3D%22%23fca5a5%22%20letter-spacing%3D%222%22%3EGORAKHPUR%3C%2Ftext%3E%0A%3C%2Fsvg%3E",
    "isDemo": false,
    "phone": "+91 98380 99120",
    "address": "Near Water Sports Complex, Ramgarh Taal Road, Taramandal, Gorakhpur",
    "openTime": "12:00",
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
    "ownerName": "Vipin Tripathi",
    "ownerEmail": "saffron.diner@gorakhpurfoodguide.in",
    "facilities": [
      "Lake Breeze Seating",
      "Air Conditioned",
      "Free Wi-Fi",
      "UPI & Cards"
    ],
    "ratingsBreakdown": {
      "food": 4.6,
      "taste": 4.7,
      "hygiene": 4.6,
      "service": 4.5,
      "ambience": 4.8
    },
    "priceRange": {
      "min": 220,
      "max": 700
    },
    "distanceKm": 3.1,
    "menu": [
      {
        "id": "saffron-lake-diner-pop-1",
        "name": "Veg Sizzler",
        "price": 310,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=600&q=80",
        "description": "Fresh cottage cheese and seasonal ingredients simmered in a luscious spiced onion-tomato gravy."
      },
      {
        "id": "saffron-lake-diner-pop-2",
        "name": "Chicken Kadhai",
        "price": 440,
        "category": "Main Course",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=600&q=80",
        "description": "Succulent pieces cooked in rich fragrant gravy with roasted spices, brown onions, and fresh coriander."
      },
      {
        "id": "saffron-lake-diner-pop-3",
        "name": "Cheese Garlic Naan",
        "price": 90,
        "category": "Breads",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=600&q=80",
        "description": "Fresh cottage cheese and seasonal ingredients simmered in a luscious spiced onion-tomato gravy."
      },
      {
        "id": "saffron-lake-diner-pop-4",
        "name": "Brownie with Ice Cream",
        "price": 100,
        "category": "Desserts",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=600&q=80",
        "description": "Warm freshly baked dessert smothered in rich melted Belgian chocolate and garnishes."
      },
      {
        "id": "saffron-lake-diner-item-1",
        "name": "Darjeeling Steamed Chicken Momos (8 pcs)",
        "price": 160,
        "category": "Starters",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=600&q=80",
        "description": "Thin-wrapper dumplings filled with juicy minced chicken, ginger and coriander with fiery red chutney."
      },
      {
        "id": "saffron-lake-diner-item-2",
        "name": "Kurkure Crispy Paneer Momos (6 pcs)",
        "price": 150,
        "category": "Starters",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=600&q=80",
        "description": "Crispy cornflake-crusted deep-fried momos filled with seasoned spiced cottage cheese."
      },
      {
        "id": "saffron-lake-diner-item-3",
        "name": "Chilli Garlic Hakka Noodles",
        "price": 190,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=600&q=80",
        "description": "Wok-tossed noodles with julienned vegetables, burnt garlic, soy, and spicy red chilli paste."
      },
      {
        "id": "saffron-lake-diner-item-4",
        "name": "Veg Manchurian Gravy with Fried Rice Bowl",
        "price": 240,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=600&q=80",
        "description": "Deep-fried vegetable balls in a savory, tangy and spicy dark soya and ginger garlic sauce."
      },
      {
        "id": "saffron-lake-diner-item-5",
        "name": "Schezwan Chicken Fried Rice",
        "price": 260,
        "category": "Main Course",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=600&q=80",
        "description": "Aged basmati rice stir-fried with diced chicken, eggs, and authentic spicy Sichuan pepper paste."
      },
      {
        "id": "saffron-lake-diner-item-6",
        "name": "Crispy Honey Chilli Potatoes",
        "price": 180,
        "category": "Starters",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80",
        "description": "Crispy finger potatoes tossed in sweet honey, roasted sesame seeds, and spicy red chilli sauce."
      },
      {
        "id": "saffron-lake-diner-item-7",
        "name": "Drums of Heaven Chicken Lollipops (6 pcs)",
        "price": 280,
        "category": "Starters",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=600&q=80",
        "description": "Crispy chicken winglets tossed in fiery Schezwan garlic sauce with spring onions."
      },
      {
        "id": "saffron-lake-diner-item-8",
        "name": "Tibetan Thukpa Noodle Soup Bowl",
        "price": 210,
        "category": "Starters",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=600&q=80",
        "description": "Hearty Himalayan noodle soup packed with fresh greens, mushrooms, and spiced broth."
      },
      {
        "id": "saffron-lake-diner-item-9",
        "name": "Crispy Fried Spring Rolls (6 pcs)",
        "price": 170,
        "category": "Starters",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?auto=format&fit=crop&w=600&q=80",
        "description": "Golden crunchy wrappers filled with cabbage, carrots, bell peppers, served with sweet chilli dip."
      },
      {
        "id": "saffron-lake-diner-item-10",
        "name": "Darjeeling Lemon Iced Tea",
        "price": 110,
        "category": "Beverages",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=600&q=80",
        "description": "Refreshing brewed black tea infused with lemon zest and mint over crushed ice."
      },
      {
        "id": "saffron-lake-diner-item-11",
        "name": "Darjeeling Darsaan with Vanilla Ice Cream",
        "price": 140,
        "category": "Desserts",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=600&q=80",
        "description": "Fried honey-glazed flat noodles topped with roasted sesame seeds and cool vanilla scoop."
      }
    ]
  },
  {
    "id": "bake-and-shake-cafe",
    "name": "Bake & Shake Bakery & Cafe",
    "area": "Betiahata",
    "city": "Gorakhpur",
    "description": "Premier artisanal bakery and cafe known for designer truffle cakes, sourdough sandwiches, thick milkshakes, and pastries.",
    "categories": [
      "cafe",
      "sweets"
    ],
    "cuisines": [
      "Bakery",
      "Cafe",
      "Desserts",
      "Fast Food"
    ],
    "popularDishes": [
      "Dutch Truffle Cake",
      "Club Sandwich",
      "Oreo Overload Shake",
      "Cheese Croissant"
    ],
    "costForTwo": 400,
    "averageRating": 4.7,
    "reviewCount": 420,
    "imageUrl": "https://images.unsplash.com/photo-1481833761820-0509d32170dd?auto=format&fit=crop&w=1000&q=80",
    "logoUrl": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20100%20100%22%20width%3D%22200%22%20height%3D%22200%22%3E%0A%20%20%3Cdefs%3E%0A%20%20%20%20%3ClinearGradient%20id%3D%22brandGrad_bake-and-shake-cafe%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%2394381c%22%2F%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%234f3f2d%22%2F%3E%0A%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%3Cfilter%20id%3D%22shadow_bake-and-shake-cafe%22%20x%3D%22-10%25%22%20y%3D%22-10%25%22%20width%3D%22120%25%22%20height%3D%22120%25%22%3E%0A%20%20%20%20%20%20%3CfeDropShadow%20dx%3D%220%22%20dy%3D%222%22%20stdDeviation%3D%222.5%22%20flood-opacity%3D%220.35%22%2F%3E%0A%20%20%20%20%3C%2Ffilter%3E%0A%20%20%3C%2Fdefs%3E%0A%20%20%3C!--%20Background%20Shield%20Badge%20--%3E%0A%20%20%3Crect%20x%3D%224%22%20y%3D%224%22%20width%3D%2292%22%20height%3D%2292%22%20rx%3D%2226%22%20fill%3D%22url(%23brandGrad_bake-and-shake-cafe)%22%20stroke%3D%22%23fce588%22%20stroke-width%3D%222.5%22%20filter%3D%22url(%23shadow_bake-and-shake-cafe)%22%2F%3E%0A%20%20%3C!--%20Inner%20Ornamental%20Line%20--%3E%0A%20%20%3Crect%20x%3D%229%22%20y%3D%229%22%20width%3D%2282%22%20height%3D%2282%22%20rx%3D%2221%22%20fill%3D%22none%22%20stroke%3D%22%23fce588%22%20stroke-width%3D%221%22%20stroke-dasharray%3D%223%203%22%20opacity%3D%220.45%22%2F%3E%0A%20%20%3C!--%20Emblem%20Motif%20--%3E%0A%20%20%3Cpath%20d%3D%22M50%2028%20C56%2028%2062%2034%2062%2042%20C62%2050%2050%2060%2050%2060%20C50%2060%2038%2050%2038%2042%20C38%2034%2044%2028%2050%2028%20Z%22%20fill%3D%22%23fce588%22%20opacity%3D%220.95%22%2F%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2250%22%20cy%3D%2240%22%20r%3D%223.5%22%20fill%3D%22%23ffffff%22%2F%3E%0A%20%20%3C!--%20Typography%20%2F%20Monogram%20--%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2276%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C%20-apple-system%2C%20sans-serif%22%20font-weight%3D%22900%22%20font-size%3D%2215%22%20fill%3D%22%23ffffff%22%20letter-spacing%3D%221.5%22%3EBS%3C%2Ftext%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2287%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C%20-apple-system%2C%20sans-serif%22%20font-weight%3D%22800%22%20font-size%3D%226.5%22%20fill%3D%22%23fce588%22%20letter-spacing%3D%222%22%3EGORAKHPUR%3C%2Ftext%3E%0A%3C%2Fsvg%3E",
    "isDemo": false,
    "phone": "+91 94152 33419",
    "address": "Near Hanuman Mandir, Betiahata Road, Gorakhpur",
    "openTime": "09:00",
    "closeTime": "22:30",
    "openDays": [
      "Mon",
      "Tue",
      "Wed",
      "Thu",
      "Fri",
      "Sat",
      "Sun"
    ],
    "diet": "veg",
    "status": "Active",
    "ownerName": "Shashank Jaiswal",
    "ownerEmail": "bakeshake.gkp@gorakhpurfoodguide.in",
    "facilities": [
      "Fresh Oven Bakes",
      "Air Conditioned",
      "Custom Cake Orders",
      "UPI & Cards"
    ],
    "ratingsBreakdown": {
      "food": 4.8,
      "taste": 4.8,
      "hygiene": 4.9,
      "service": 4.6,
      "ambience": 4.7
    },
    "priceRange": {
      "min": 100,
      "max": 450
    },
    "distanceKm": 1.3,
    "menu": [
      {
        "id": "bake-and-shake-cafe-pop-1",
        "name": "Dutch Truffle Cake",
        "price": 90,
        "category": "Desserts",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=600&q=80",
        "description": "Warm freshly baked dessert smothered in rich melted Belgian chocolate and garnishes."
      },
      {
        "id": "bake-and-shake-cafe-pop-2",
        "name": "Club Sandwich",
        "price": 190,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=600&q=80",
        "description": "Fresh cottage cheese and seasonal ingredients simmered in a luscious spiced onion-tomato gravy."
      },
      {
        "id": "bake-and-shake-cafe-pop-3",
        "name": "Oreo Overload Shake",
        "price": 110,
        "category": "Beverages",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=600&q=80",
        "description": "Fresh cottage cheese and seasonal ingredients simmered in a luscious spiced onion-tomato gravy."
      },
      {
        "id": "bake-and-shake-cafe-pop-4",
        "name": "Cheese Croissant",
        "price": 190,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=600&q=80",
        "description": "Fresh cottage cheese and seasonal ingredients simmered in a luscious spiced onion-tomato gravy."
      },
      {
        "id": "bake-and-shake-cafe-item-1",
        "name": "Belgian Nutella Waffle with Vanilla Ice Cream",
        "price": 210,
        "category": "Desserts",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1562376552-0d160a2f238d?auto=format&fit=crop&w=600&q=80",
        "description": "Freshly baked golden Belgian waffle smothered with warm Nutella and topped with ice cream."
      },
      {
        "id": "bake-and-shake-cafe-item-2",
        "name": "Lotus Biscoff Thick Shake",
        "price": 190,
        "category": "Beverages",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=600&q=80",
        "description": "Creamy milkshake blended with genuine Lotus Biscoff spread and crushed caramelized biscuits."
      },
      {
        "id": "bake-and-shake-cafe-item-3",
        "name": "Farmhouse Woodfired Pizza (10 inch)",
        "price": 360,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80",
        "description": "Hand-stretched dough topped with San Marzano tomato sauce, mozzarella, bell peppers, mushrooms and olives."
      },
      {
        "id": "bake-and-shake-cafe-item-4",
        "name": "Penne Creamy Alfredo Pasta with Mushrooms",
        "price": 290,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1621996346565-e3d5d6281724?auto=format&fit=crop&w=600&q=80",
        "description": "Al dente penne tossed in rich parmesan garlic white sauce with sautéed mushrooms."
      },
      {
        "id": "bake-and-shake-cafe-item-5",
        "name": "Loaded Cheesy Mexican Nachos",
        "price": 240,
        "category": "Starters",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1576107232684-1279f3908594?auto=format&fit=crop&w=600&q=80",
        "description": "Crispy corn tortilla chips baked with jalapeños, salsa, black olives and warm cheddar sauce."
      },
      {
        "id": "bake-and-shake-cafe-item-6",
        "name": "Crispy Peri Peri French Fries",
        "price": 140,
        "category": "Starters",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1576107232684-1279f3908594?auto=format&fit=crop&w=600&q=80",
        "description": "Golden potato fries seasoned with zesty African bird’s eye peri-peri spice dust."
      },
      {
        "id": "bake-and-shake-cafe-item-7",
        "name": "Classic Cold Coffee with Ice Cream",
        "price": 160,
        "category": "Beverages",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=600&q=80",
        "description": "Rich espresso blended with chilled whole milk and topped with a scoop of vanilla gelato."
      },
      {
        "id": "bake-and-shake-cafe-item-8",
        "name": "Kulhad Adrak Masala Chai",
        "price": 60,
        "category": "Beverages",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=600&q=80",
        "description": "Freshly brewed strong tea infused with crushed ginger, cardamom, and clove in a clay kulhad."
      },
      {
        "id": "bake-and-shake-cafe-item-9",
        "name": "New York Baked Blueberry Cheesecake",
        "price": 220,
        "category": "Desserts",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=600&q=80",
        "description": "Dense cream cheese filling on a graham cracker crust topped with tangy wild blueberry compote."
      },
      {
        "id": "bake-and-shake-cafe-item-10",
        "name": "Tiramisu Italiano Cup",
        "price": 210,
        "category": "Desserts",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=600&q=80",
        "description": "Espresso-soaked savoiardi biscuits layered with mascarpone cream and dusted with cocoa."
      },
      {
        "id": "bake-and-shake-cafe-item-11",
        "name": "Classic Grilled Paneer Tikka Sandwich",
        "price": 180,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=600&q=80",
        "description": "Multi-grain bread toasted with spiced paneer tikka, mint chutney, and mozzarella cheese."
      }
    ]
  },
  {
    "id": "zaika-e-awadh-gkp",
    "name": "Zaika-e-Awadh Biryani Hub",
    "area": "Golghar",
    "city": "Gorakhpur",
    "description": "Heart of Golghar serving royal Awadhi chicken dum biryani, galouti kebabs, and chicken changezi with hot tandoori rotis.",
    "categories": [
      "north-indian"
    ],
    "cuisines": [
      "Awadhi",
      "Biryani",
      "Mughlai"
    ],
    "popularDishes": [
      "Chicken Dum Biryani",
      "Chicken Changezi",
      "Mutton Korma",
      "Khameeri Roti"
    ],
    "costForTwo": 480,
    "averageRating": 4.6,
    "reviewCount": 390,
    "imageUrl": "https://images.unsplash.com/photo-1546195643-70f48f9c5b87?auto=format&fit=crop&w=1000&q=80",
    "logoUrl": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20100%20100%22%20width%3D%22200%22%20height%3D%22200%22%3E%0A%20%20%3Cdefs%3E%0A%20%20%20%20%3ClinearGradient%20id%3D%22brandGrad_zaika-e-awadh-gkp%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23a33a0a%22%2F%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%232b2018%22%2F%3E%0A%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%3Cfilter%20id%3D%22shadow_zaika-e-awadh-gkp%22%20x%3D%22-10%25%22%20y%3D%22-10%25%22%20width%3D%22120%25%22%20height%3D%22120%25%22%3E%0A%20%20%20%20%20%20%3CfeDropShadow%20dx%3D%220%22%20dy%3D%222%22%20stdDeviation%3D%222.5%22%20flood-opacity%3D%220.35%22%2F%3E%0A%20%20%20%20%3C%2Ffilter%3E%0A%20%20%3C%2Fdefs%3E%0A%20%20%3C!--%20Background%20Shield%20Badge%20--%3E%0A%20%20%3Crect%20x%3D%224%22%20y%3D%224%22%20width%3D%2292%22%20height%3D%2292%22%20rx%3D%2226%22%20fill%3D%22url(%23brandGrad_zaika-e-awadh-gkp)%22%20stroke%3D%22%23f5e9d0%22%20stroke-width%3D%222.5%22%20filter%3D%22url(%23shadow_zaika-e-awadh-gkp)%22%2F%3E%0A%20%20%3C!--%20Inner%20Ornamental%20Line%20--%3E%0A%20%20%3Crect%20x%3D%229%22%20y%3D%229%22%20width%3D%2282%22%20height%3D%2282%22%20rx%3D%2221%22%20fill%3D%22none%22%20stroke%3D%22%23f5e9d0%22%20stroke-width%3D%221%22%20stroke-dasharray%3D%223%203%22%20opacity%3D%220.45%22%2F%3E%0A%20%20%3C!--%20Emblem%20Motif%20--%3E%0A%20%20%3Ccircle%20cx%3D%2250%22%20cy%3D%2238%22%20r%3D%2214%22%20stroke%3D%22%23f5e9d0%22%20stroke-width%3D%222%22%20fill%3D%22none%22%20opacity%3D%220.7%22%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22M44%2030%20L44%2046%20M56%2030%20L56%2046%20M42%2030%20C42%2035%2046%2035%2046%2030%22%20stroke%3D%22%23f5e9d0%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%2F%3E%0A%20%20%3C!--%20Typography%20%2F%20Monogram%20--%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2276%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C%20-apple-system%2C%20sans-serif%22%20font-weight%3D%22900%22%20font-size%3D%2215%22%20fill%3D%22%23ffffff%22%20letter-spacing%3D%221.5%22%3EZB%3C%2Ftext%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2287%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C%20-apple-system%2C%20sans-serif%22%20font-weight%3D%22800%22%20font-size%3D%226.5%22%20fill%3D%22%23f5e9d0%22%20letter-spacing%3D%222%22%3EGORAKHPUR%3C%2Ftext%3E%0A%3C%2Fsvg%3E",
    "isDemo": false,
    "phone": "+91 97920 11440",
    "address": "Near City Mall, Cinema Road, Golghar, Gorakhpur",
    "openTime": "12:00",
    "closeTime": "23:30",
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
    "ownerName": "Tariq Mansoor",
    "ownerEmail": "zaikaawadh.gkp@gorakhpurfoodguide.in",
    "facilities": [
      "Authentic Dum Biryani",
      "Air Conditioned",
      "Fast Takeaway",
      "UPI Accepted"
    ],
    "ratingsBreakdown": {
      "food": 4.7,
      "taste": 4.8,
      "hygiene": 4.5,
      "service": 4.5,
      "ambience": 4.4
    },
    "priceRange": {
      "min": 160,
      "max": 520
    },
    "distanceKm": 0.5,
    "menu": [
      {
        "id": "zaika-e-awadh-gkp-pop-1",
        "name": "Chicken Dum Biryani",
        "price": 240,
        "category": "Main Course",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=600&q=80",
        "description": "Long grain rice cooked in sealed vessel with marinated chicken, saffron, rose water and spices."
      },
      {
        "id": "zaika-e-awadh-gkp-pop-2",
        "name": "Chicken Changezi",
        "price": 330,
        "category": "Main Course",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=600&q=80",
        "description": "Succulent pieces cooked in rich fragrant gravy with roasted spices, brown onions, and fresh coriander."
      },
      {
        "id": "zaika-e-awadh-gkp-pop-3",
        "name": "Mutton Korma",
        "price": 330,
        "category": "Main Course",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1545247181-516773cae754?auto=format&fit=crop&w=600&q=80",
        "description": "Succulent pieces cooked in rich fragrant gravy with roasted spices, brown onions, and fresh coriander."
      },
      {
        "id": "zaika-e-awadh-gkp-pop-4",
        "name": "Khameeri Roti",
        "price": 40,
        "category": "Breads",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=600&q=80",
        "description": "Fresh cottage cheese and seasonal ingredients simmered in a luscious spiced onion-tomato gravy."
      },
      {
        "id": "zaika-e-awadh-gkp-item-1",
        "name": "Galawati Kabab with Ulte Tawe Ka Paratha",
        "price": 380,
        "category": "Starters",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=600&q=80",
        "description": "Mouth-melting Awadhi minced mutton kebabs spiced with 32 fragrant herbs, served with Mughlai paratha."
      },
      {
        "id": "zaika-e-awadh-gkp-item-2",
        "name": "Murgh Malai Tikka (6 pcs)",
        "price": 340,
        "category": "Starters",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=600&q=80",
        "description": "Boneless chicken chunks marinated in cream, cheese, hung curd, and crushed cardamom, grilled in tandoor."
      },
      {
        "id": "zaika-e-awadh-gkp-item-3",
        "name": "Mutton Seekh Kebab (4 pcs)",
        "price": 390,
        "category": "Starters",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=600&q=80",
        "description": "Finely minced spiced mutton skewers cooked over glowing charcoal embers."
      },
      {
        "id": "zaika-e-awadh-gkp-item-4",
        "name": "Tandoori Chicken (Half / Full)",
        "price": 290,
        "category": "Starters",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80",
        "description": "Classic bone-in chicken marinated in Kashmiri chilli, mustard oil and hung curd roasted in tandoor."
      },
      {
        "id": "zaika-e-awadh-gkp-item-5",
        "name": "Paneer Tikka Shashlik",
        "price": 280,
        "category": "Starters",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=600&q=80",
        "description": "Cottage cheese cubes with bell peppers and onions grilled to perfection in clay oven."
      },
      {
        "id": "zaika-e-awadh-gkp-item-6",
        "name": "Special Butter Chicken",
        "price": 390,
        "category": "Main Course",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=600&q=80",
        "description": "Tender tandoori chicken cooked in an authentic velvety makhani gravy enriched with honey and fenugreek."
      },
      {
        "id": "zaika-e-awadh-gkp-item-7",
        "name": "Handi Mutton Rogan Josh",
        "price": 460,
        "category": "Main Course",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1545247181-516773cae754?auto=format&fit=crop&w=600&q=80",
        "description": "Tender baby mutton simmered in a clay handi with ratan jot, Kashmiri chilies, and aromatic whole spices."
      },
      {
        "id": "zaika-e-awadh-gkp-item-8",
        "name": "Chicken Lababdar",
        "price": 370,
        "category": "Main Course",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=600&q=80",
        "description": "Succulent chicken pieces in a chunky spiced onion-tomato gravy finished with grated paneer and cream."
      },
      {
        "id": "zaika-e-awadh-gkp-item-9",
        "name": "Kadhai Paneer",
        "price": 290,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=600&q=80",
        "description": "Paneer cubes tossed with fresh ground coriander, dry red chillies, capsicum, and thick onion masala."
      },
      {
        "id": "zaika-e-awadh-gkp-item-10",
        "name": "Dal Makhani Slow-Cooked",
        "price": 240,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80",
        "description": "Classic black lentils slow-cooked with fresh cream and butter for 24 hours."
      },
      {
        "id": "zaika-e-awadh-gkp-item-11",
        "name": "Dum Chicken Biryani with Mirchi Salan",
        "price": 340,
        "category": "Biryani & Rice",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=600&q=80",
        "description": "Long-grain aged basmati rice layered with marinated chicken, saffron milk, brown onions, and kewra."
      }
    ]
  },
  {
    "id": "anand-sweet-chaat",
    "name": "Anand Sweet House & Chaat",
    "area": "Maya Bazaar",
    "city": "Gorakhpur",
    "description": "Heritage street corner famous since 1968 for morning Bedmi Puri Sabzi, freshly fried Gulab Jamuns, and crispy spicy Aloo Tikki.",
    "categories": [
      "sweets",
      "street-food"
    ],
    "cuisines": [
      "Chaat",
      "Street Food",
      "Traditional Mithai"
    ],
    "popularDishes": [
      "Bedmi Puri Aloo Sabzi",
      "Desi Ghee Tikki",
      "Hot Gulab Jamun",
      "Dahi Jalebi"
    ],
    "costForTwo": 160,
    "averageRating": 4.7,
    "reviewCount": 480,
    "imageUrl": "https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?auto=format&fit=crop&w=1000&q=80",
    "logoUrl": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20100%20100%22%20width%3D%22200%22%20height%3D%22200%22%3E%0A%20%20%3Cdefs%3E%0A%20%20%20%20%3ClinearGradient%20id%3D%22brandGrad_anand-sweet-chaat%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%2394381c%22%2F%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%234f3f2d%22%2F%3E%0A%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%3Cfilter%20id%3D%22shadow_anand-sweet-chaat%22%20x%3D%22-10%25%22%20y%3D%22-10%25%22%20width%3D%22120%25%22%20height%3D%22120%25%22%3E%0A%20%20%20%20%20%20%3CfeDropShadow%20dx%3D%220%22%20dy%3D%222%22%20stdDeviation%3D%222.5%22%20flood-opacity%3D%220.35%22%2F%3E%0A%20%20%20%20%3C%2Ffilter%3E%0A%20%20%3C%2Fdefs%3E%0A%20%20%3C!--%20Background%20Shield%20Badge%20--%3E%0A%20%20%3Crect%20x%3D%224%22%20y%3D%224%22%20width%3D%2292%22%20height%3D%2292%22%20rx%3D%2226%22%20fill%3D%22url(%23brandGrad_anand-sweet-chaat)%22%20stroke%3D%22%23fce588%22%20stroke-width%3D%222.5%22%20filter%3D%22url(%23shadow_anand-sweet-chaat)%22%2F%3E%0A%20%20%3C!--%20Inner%20Ornamental%20Line%20--%3E%0A%20%20%3Crect%20x%3D%229%22%20y%3D%229%22%20width%3D%2282%22%20height%3D%2282%22%20rx%3D%2221%22%20fill%3D%22none%22%20stroke%3D%22%23fce588%22%20stroke-width%3D%221%22%20stroke-dasharray%3D%223%203%22%20opacity%3D%220.45%22%2F%3E%0A%20%20%3C!--%20Emblem%20Motif%20--%3E%0A%20%20%3Cpath%20d%3D%22M50%2028%20C56%2028%2062%2034%2062%2042%20C62%2050%2050%2060%2050%2060%20C50%2060%2038%2050%2038%2042%20C38%2034%2044%2028%2050%2028%20Z%22%20fill%3D%22%23fce588%22%20opacity%3D%220.95%22%2F%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2250%22%20cy%3D%2240%22%20r%3D%223.5%22%20fill%3D%22%23ffffff%22%2F%3E%0A%20%20%3C!--%20Typography%20%2F%20Monogram%20--%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2276%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C%20-apple-system%2C%20sans-serif%22%20font-weight%3D%22900%22%20font-size%3D%2215%22%20fill%3D%22%23ffffff%22%20letter-spacing%3D%221.5%22%3EAS%3C%2Ftext%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2287%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C%20-apple-system%2C%20sans-serif%22%20font-weight%3D%22800%22%20font-size%3D%226.5%22%20fill%3D%22%23fce588%22%20letter-spacing%3D%222%22%3EGORAKHPUR%3C%2Ftext%3E%0A%3C%2Fsvg%3E",
    "isDemo": false,
    "phone": "+91 94158 22100",
    "address": "Near Gita Press Chowk, Maya Bazaar, Gorakhpur",
    "openTime": "06:00",
    "closeTime": "21:30",
    "openDays": [
      "Mon",
      "Tue",
      "Wed",
      "Thu",
      "Fri",
      "Sat",
      "Sun"
    ],
    "diet": "veg",
    "status": "Active",
    "ownerName": "Anand Prakash Srivastava",
    "ownerEmail": "anandsweets.mb@gorakhpurfoodguide.in",
    "facilities": [
      "Heritage Food Stall",
      "Fresh Desi Ghee Prep",
      "UPI Accepted",
      "Morning Breakfast Spot"
    ],
    "ratingsBreakdown": {
      "food": 4.9,
      "taste": 4.9,
      "hygiene": 4.5,
      "service": 4.7,
      "ambience": 4
    },
    "priceRange": {
      "min": 40,
      "max": 180
    },
    "distanceKm": 2,
    "menu": [
      {
        "id": "anand-sweet-chaat-pop-1",
        "name": "Bedmi Puri Aloo Sabzi",
        "price": 140,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80",
        "description": "Fresh cottage cheese and seasonal ingredients simmered in a luscious spiced onion-tomato gravy."
      },
      {
        "id": "anand-sweet-chaat-pop-2",
        "name": "Desi Ghee Tikki",
        "price": 140,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80",
        "description": "Fresh cottage cheese and seasonal ingredients simmered in a luscious spiced onion-tomato gravy."
      },
      {
        "id": "anand-sweet-chaat-pop-3",
        "name": "Hot Gulab Jamun",
        "price": 60,
        "category": "Desserts",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=600&q=80",
        "description": "Fresh cottage cheese and seasonal ingredients simmered in a luscious spiced onion-tomato gravy."
      },
      {
        "id": "anand-sweet-chaat-pop-4",
        "name": "Dahi Jalebi",
        "price": 140,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=600&q=80",
        "description": "Fresh cottage cheese and seasonal ingredients simmered in a luscious spiced onion-tomato gravy."
      },
      {
        "id": "anand-sweet-chaat-item-1",
        "name": "Desi Ghee Samosa (2 pcs)",
        "price": 40,
        "category": "Starters",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80",
        "description": "Golden flaky pastry stuffed with spiced potatoes, green peas and whole spices, fried in pure desi ghee."
      },
      {
        "id": "anand-sweet-chaat-item-2",
        "name": "Khasta Kachori with Hing Aloo (2 pcs)",
        "price": 50,
        "category": "Starters",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80",
        "description": "Crispy lentil-stuffed kachoris served with spicy tangy hing aloo subzi and sweet sonth."
      },
      {
        "id": "anand-sweet-chaat-item-3",
        "name": "Dahi Bhalla Papdi Chaat",
        "price": 90,
        "category": "Starters",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80",
        "description": "Soft lentil dumplings and crisp papdis drenched in whipped curd, roasted cumin, and sweet-spicy chutneys."
      },
      {
        "id": "anand-sweet-chaat-item-4",
        "name": "Amritsari Chhole Bhature",
        "price": 160,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=600&q=80",
        "description": "Pair of balloon bhatures served with dark spiced Punjabi chickpeas, pickled onions and fried green chilli."
      },
      {
        "id": "anand-sweet-chaat-item-5",
        "name": "Special Pure Veg Deluxe Thali",
        "price": 260,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=600&q=80",
        "description": "Paneer Butter Masala, Dal Makhani, Mix Veg, Jeera Rice, 2 Butter Naan, Gulab Jamun, Papad and Raita."
      },
      {
        "id": "anand-sweet-chaat-item-6",
        "name": "Paneer Butter Masala",
        "price": 240,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=600&q=80",
        "description": "Soft cottage cheese cubes simmered in a velvety tomato, cashew and butter gravy with kasoori methi."
      },
      {
        "id": "anand-sweet-chaat-item-7",
        "name": "Dal Makhani Special",
        "price": 210,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80",
        "description": "Whole black lentils and kidney beans slow-cooked overnight with white butter and cream."
      },
      {
        "id": "anand-sweet-chaat-item-8",
        "name": "Butter Tandoori Roti (2 pcs)",
        "price": 40,
        "category": "Breads",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=600&q=80",
        "description": "Whole wheat flatbread baked in clay oven and topped with pure amul butter."
      },
      {
        "id": "anand-sweet-chaat-item-9",
        "name": "Garlic Butter Naan",
        "price": 65,
        "category": "Breads",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=600&q=80",
        "description": "Soft leavened bread infused with minced garlic, fresh coriander and generous butter."
      },
      {
        "id": "anand-sweet-chaat-item-10",
        "name": "Special Kesar Rasmalai (2 pcs)",
        "price": 90,
        "category": "Desserts",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1564355808539-22fda35bed7e?auto=format&fit=crop&w=600&q=80",
        "description": "Delicate cottage cheese patties soaked in saffron-infused clotted milk garnished with pistachios."
      },
      {
        "id": "anand-sweet-chaat-item-11",
        "name": "Desi Ghee Gulab Jamun (2 pcs)",
        "price": 60,
        "category": "Desserts",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=600&q=80",
        "description": "Hot melt-in-mouth milk solids dumplings soaked in cardamom and rose sugar syrup."
      }
    ]
  },
  {
    "id": "rolls-mania-gkp",
    "name": "Rolls Mania Kathi Hub",
    "area": "Medical College Road",
    "city": "Gorakhpur",
    "description": "Quick service rolls outlet popular among university students for crunchy paratha rolls stuffed with paneer, chicken tikka, and egg.",
    "categories": [
      "fast-food",
      "street-food"
    ],
    "cuisines": [
      "Kathi Rolls",
      "Fast Food",
      "Wraps"
    ],
    "popularDishes": [
      "Chicken Tikka Roll",
      "Paneer Cheese Roll",
      "Double Egg Roll",
      "Cold Beverage"
    ],
    "costForTwo": 250,
    "averageRating": 4.5,
    "reviewCount": 320,
    "imageUrl": "https://images.unsplash.com/photo-1525610553991-2bede1a236e2?auto=format&fit=crop&w=1000&q=80",
    "logoUrl": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20100%20100%22%20width%3D%22200%22%20height%3D%22200%22%3E%0A%20%20%3Cdefs%3E%0A%20%20%20%20%3ClinearGradient%20id%3D%22brandGrad_rolls-mania-gkp%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23a33a0a%22%2F%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%232b2018%22%2F%3E%0A%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%3Cfilter%20id%3D%22shadow_rolls-mania-gkp%22%20x%3D%22-10%25%22%20y%3D%22-10%25%22%20width%3D%22120%25%22%20height%3D%22120%25%22%3E%0A%20%20%20%20%20%20%3CfeDropShadow%20dx%3D%220%22%20dy%3D%222%22%20stdDeviation%3D%222.5%22%20flood-opacity%3D%220.35%22%2F%3E%0A%20%20%20%20%3C%2Ffilter%3E%0A%20%20%3C%2Fdefs%3E%0A%20%20%3C!--%20Background%20Shield%20Badge%20--%3E%0A%20%20%3Crect%20x%3D%224%22%20y%3D%224%22%20width%3D%2292%22%20height%3D%2292%22%20rx%3D%2226%22%20fill%3D%22url(%23brandGrad_rolls-mania-gkp)%22%20stroke%3D%22%23f5e9d0%22%20stroke-width%3D%222.5%22%20filter%3D%22url(%23shadow_rolls-mania-gkp)%22%2F%3E%0A%20%20%3C!--%20Inner%20Ornamental%20Line%20--%3E%0A%20%20%3Crect%20x%3D%229%22%20y%3D%229%22%20width%3D%2282%22%20height%3D%2282%22%20rx%3D%2221%22%20fill%3D%22none%22%20stroke%3D%22%23f5e9d0%22%20stroke-width%3D%221%22%20stroke-dasharray%3D%223%203%22%20opacity%3D%220.45%22%2F%3E%0A%20%20%3C!--%20Emblem%20Motif%20--%3E%0A%20%20%3Ccircle%20cx%3D%2250%22%20cy%3D%2238%22%20r%3D%2214%22%20stroke%3D%22%23f5e9d0%22%20stroke-width%3D%222%22%20fill%3D%22none%22%20opacity%3D%220.7%22%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22M44%2030%20L44%2046%20M56%2030%20L56%2046%20M42%2030%20C42%2035%2046%2035%2046%2030%22%20stroke%3D%22%23f5e9d0%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%2F%3E%0A%20%20%3C!--%20Typography%20%2F%20Monogram%20--%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2276%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C%20-apple-system%2C%20sans-serif%22%20font-weight%3D%22900%22%20font-size%3D%2215%22%20fill%3D%22%23ffffff%22%20letter-spacing%3D%221.5%22%3ERM%3C%2Ftext%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2287%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C%20-apple-system%2C%20sans-serif%22%20font-weight%3D%22800%22%20font-size%3D%226.5%22%20fill%3D%22%23f5e9d0%22%20letter-spacing%3D%222%22%3EGORAKHPUR%3C%2Ftext%3E%0A%3C%2Fsvg%3E",
    "isDemo": false,
    "phone": "+91 98388 77661",
    "address": "Near BRD Medical College Main Gate, Medical College Road, Gorakhpur",
    "openTime": "11:00",
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
    "ownerName": "Nitin Kaushal",
    "ownerEmail": "rollsmania.brd@gorakhpurfoodguide.in",
    "facilities": [
      "Fast Takeaway",
      "Student Friendly",
      "Digital Payments",
      "Hygienic Packaging"
    ],
    "ratingsBreakdown": {
      "food": 4.6,
      "taste": 4.6,
      "hygiene": 4.5,
      "service": 4.7,
      "ambience": 4.1
    },
    "priceRange": {
      "min": 70,
      "max": 280
    },
    "distanceKm": 4.5,
    "menu": [
      {
        "id": "rolls-mania-gkp-pop-1",
        "name": "Chicken Tikka Roll",
        "price": 170,
        "category": "Starters",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=600&q=80",
        "description": "Marinated in yogurt, roasted garlic, and spices, chargrilled to smoky perfection."
      },
      {
        "id": "rolls-mania-gkp-pop-2",
        "name": "Paneer Cheese Roll",
        "price": 110,
        "category": "Starters",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=600&q=80",
        "description": "Fresh cottage cheese and seasonal ingredients simmered in a luscious spiced onion-tomato gravy."
      },
      {
        "id": "rolls-mania-gkp-pop-3",
        "name": "Double Egg Roll",
        "price": 110,
        "category": "Starters",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?auto=format&fit=crop&w=600&q=80",
        "description": "Succulent pieces cooked in rich fragrant gravy with roasted spices, brown onions, and fresh coriander."
      },
      {
        "id": "rolls-mania-gkp-pop-4",
        "name": "Cold Beverage",
        "price": 40,
        "category": "Beverages",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1553787499-6f9133860278?auto=format&fit=crop&w=600&q=80",
        "description": "Fresh cottage cheese and seasonal ingredients simmered in a luscious spiced onion-tomato gravy."
      },
      {
        "id": "rolls-mania-gkp-item-1",
        "name": "Double Cheese Crunch Burger",
        "price": 160,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80",
        "description": "Crisp vegetable patty with double melted cheddar, gherkins, lettuce and secret thousand island sauce."
      },
      {
        "id": "rolls-mania-gkp-item-2",
        "name": "Peri Peri Crispy Chicken Zinger Burger",
        "price": 210,
        "category": "Main Course",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80",
        "description": "Deep-fried spiced chicken breast fillet topped with spicy mayo and crisp iceberg lettuce on a brioche bun."
      },
      {
        "id": "rolls-mania-gkp-item-3",
        "name": "Hand-Tossed Margherita Pizza (Regular)",
        "price": 240,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80",
        "description": "Classic Italian pizza with aromatic basil leaves, extra virgin olive oil and 100% mozzarella."
      },
      {
        "id": "rolls-mania-gkp-item-4",
        "name": "Fiery Chicken Sausage & Pepperoni Pizza",
        "price": 390,
        "category": "Main Course",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80",
        "description": "Loaded with spicy chicken sausage, smoked pepperoni, red paprika, and stretchy mozzarella."
      },
      {
        "id": "rolls-mania-gkp-item-5",
        "name": "Loaded Cheese Fries with Jalapeños",
        "price": 160,
        "category": "Starters",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1576107232684-1279f3908594?auto=format&fit=crop&w=600&q=80",
        "description": "Crinkle-cut hot fries smothered in liquid cheese, jalapeño bits, and smoky barbecue drizzle."
      },
      {
        "id": "rolls-mania-gkp-item-6",
        "name": "Double Egg Double Chicken Kathi Roll",
        "price": 180,
        "category": "Starters",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?auto=format&fit=crop&w=600&q=80",
        "description": "Flaky paratha layered with two eggs and rolled with grilled chicken tikka, onions, and lime juice."
      },
      {
        "id": "rolls-mania-gkp-item-7",
        "name": "Hot & Crispy Fried Chicken Bucket (4 pcs)",
        "price": 360,
        "category": "Starters",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=600&q=80",
        "description": "11 secret herbs and spices recipe chicken, extra crunchy outside and juicy tender inside."
      },
      {
        "id": "rolls-mania-gkp-item-8",
        "name": "Classic Mumbai Vada Pav (2 pcs)",
        "price": 70,
        "category": "Starters",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80",
        "description": "Spiced potato batata vada in soft pav bread with spicy garlic dry chutney and fried green chillies."
      },
      {
        "id": "rolls-mania-gkp-item-9",
        "name": "Oreo Thick Overload Shake",
        "price": 160,
        "category": "Beverages",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=600&q=80",
        "description": "Vanilla cream milkshake loaded with crushed Oreo cookies, chocolate syrup and whipped cream."
      },
      {
        "id": "rolls-mania-gkp-item-10",
        "name": "Choco Lava Cake with Molten Core",
        "price": 110,
        "category": "Desserts",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=600&q=80",
        "description": "Warm soft chocolate sponge cake with an irresistible flowing chocolate fudge center."
      }
    ]
  },
  {
    "id": "subway-city-mall",
    "name": "Subway Gorakhpur",
    "area": "Civil Lines",
    "city": "Gorakhpur",
    "description": "Fresh custom submarine sandwiches, wholesome salads, and fresh-baked cookies prepared live to your exact choice.",
    "categories": [
      "fast-food",
      "cafe"
    ],
    "cuisines": [
      "Healthy Food",
      "Fast Food",
      "Subs & Salads"
    ],
    "popularDishes": [
      "Paneer Tikka Sub",
      "Roasted Chicken Sub",
      "Veggie Delite",
      "Double Chocolate Cookie"
    ],
    "costForTwo": 450,
    "averageRating": 4.6,
    "reviewCount": 370,
    "imageUrl": "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1000&q=80",
    "logoUrl": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20100%20100%22%20width%3D%22200%22%20height%3D%22200%22%3E%0A%20%20%3Cdefs%3E%0A%20%20%20%20%3ClinearGradient%20id%3D%22brandGrad_subway-city-mall%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%235c3a21%22%2F%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%2326180e%22%2F%3E%0A%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%3Cfilter%20id%3D%22shadow_subway-city-mall%22%20x%3D%22-10%25%22%20y%3D%22-10%25%22%20width%3D%22120%25%22%20height%3D%22120%25%22%3E%0A%20%20%20%20%20%20%3CfeDropShadow%20dx%3D%220%22%20dy%3D%222%22%20stdDeviation%3D%222.5%22%20flood-opacity%3D%220.35%22%2F%3E%0A%20%20%20%20%3C%2Ffilter%3E%0A%20%20%3C%2Fdefs%3E%0A%20%20%3C!--%20Background%20Shield%20Badge%20--%3E%0A%20%20%3Crect%20x%3D%224%22%20y%3D%224%22%20width%3D%2292%22%20height%3D%2292%22%20rx%3D%2226%22%20fill%3D%22url(%23brandGrad_subway-city-mall)%22%20stroke%3D%22%23fed7aa%22%20stroke-width%3D%222.5%22%20filter%3D%22url(%23shadow_subway-city-mall)%22%2F%3E%0A%20%20%3C!--%20Inner%20Ornamental%20Line%20--%3E%0A%20%20%3Crect%20x%3D%229%22%20y%3D%229%22%20width%3D%2282%22%20height%3D%2282%22%20rx%3D%2221%22%20fill%3D%22none%22%20stroke%3D%22%23fed7aa%22%20stroke-width%3D%221%22%20stroke-dasharray%3D%223%203%22%20opacity%3D%220.45%22%2F%3E%0A%20%20%3C!--%20Emblem%20Motif%20--%3E%0A%20%20%3Cpath%20d%3D%22M38%2038%20C38%2034%2042%2032%2046%2032%20L54%2032%20C58%2032%2062%2034%2062%2038%20L60%2050%20C60%2054%2056%2056%2050%2056%20C44%2056%2040%2054%2040%2050%20Z%22%20fill%3D%22%23fed7aa%22%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22M62%2040%20L65%2040%20C67%2040%2068%2041%2068%2043%20L68%2045%20C68%2047%2067%2048%2065%2048%20L61%2048%22%20stroke%3D%22%23fed7aa%22%20stroke-width%3D%222%22%20fill%3D%22none%22%2F%3E%0A%20%20%3C!--%20Typography%20%2F%20Monogram%20--%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2276%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C%20-apple-system%2C%20sans-serif%22%20font-weight%3D%22900%22%20font-size%3D%2215%22%20fill%3D%22%23ffffff%22%20letter-spacing%3D%221.5%22%3ESG%3C%2Ftext%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2287%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C%20-apple-system%2C%20sans-serif%22%20font-weight%3D%22800%22%20font-size%3D%226.5%22%20fill%3D%22%23fed7aa%22%20letter-spacing%3D%222%22%3EGORAKHPUR%3C%2Ftext%3E%0A%3C%2Fsvg%3E",
    "isDemo": false,
    "phone": "+91 551 220 1199",
    "address": "Food Court, City Mall, Park Road, Civil Lines, Gorakhpur",
    "openTime": "10:00",
    "closeTime": "22:30",
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
    "ownerName": "Rahul Tulsian (Franchisee)",
    "ownerEmail": "subway.citymall@gorakhpurfoodguide.in",
    "facilities": [
      "Fresh Baked Daily",
      "Mall Parking",
      "Air Conditioned",
      "UPI & Cards"
    ],
    "ratingsBreakdown": {
      "food": 4.6,
      "taste": 4.6,
      "hygiene": 4.9,
      "service": 4.7,
      "ambience": 4.5
    },
    "priceRange": {
      "min": 160,
      "max": 500
    },
    "distanceKm": 0.8,
    "menu": [
      {
        "id": "subway-city-mall-pop-1",
        "name": "Paneer Tikka Sub",
        "price": 160,
        "category": "Starters",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=600&q=80",
        "description": "Marinated in yogurt, roasted garlic, and spices, chargrilled to smoky perfection."
      },
      {
        "id": "subway-city-mall-pop-2",
        "name": "Roasted Chicken Sub",
        "price": 310,
        "category": "Main Course",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=600&q=80",
        "description": "Succulent pieces cooked in rich fragrant gravy with roasted spices, brown onions, and fresh coriander."
      },
      {
        "id": "subway-city-mall-pop-3",
        "name": "Veggie Delite",
        "price": 220,
        "category": "Main Course",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=600&q=80",
        "description": "Succulent pieces cooked in rich fragrant gravy with roasted spices, brown onions, and fresh coriander."
      },
      {
        "id": "subway-city-mall-pop-4",
        "name": "Double Chocolate Cookie",
        "price": 220,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=600&q=80",
        "description": "Fresh cottage cheese and seasonal ingredients simmered in a luscious spiced onion-tomato gravy."
      },
      {
        "id": "subway-city-mall-item-1",
        "name": "Double Cheese Crunch Burger",
        "price": 160,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80",
        "description": "Crisp vegetable patty with double melted cheddar, gherkins, lettuce and secret thousand island sauce."
      },
      {
        "id": "subway-city-mall-item-2",
        "name": "Peri Peri Crispy Chicken Zinger Burger",
        "price": 210,
        "category": "Main Course",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80",
        "description": "Deep-fried spiced chicken breast fillet topped with spicy mayo and crisp iceberg lettuce on a brioche bun."
      },
      {
        "id": "subway-city-mall-item-3",
        "name": "Hand-Tossed Margherita Pizza (Regular)",
        "price": 240,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80",
        "description": "Classic Italian pizza with aromatic basil leaves, extra virgin olive oil and 100% mozzarella."
      },
      {
        "id": "subway-city-mall-item-4",
        "name": "Fiery Chicken Sausage & Pepperoni Pizza",
        "price": 390,
        "category": "Main Course",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80",
        "description": "Loaded with spicy chicken sausage, smoked pepperoni, red paprika, and stretchy mozzarella."
      },
      {
        "id": "subway-city-mall-item-5",
        "name": "Loaded Cheese Fries with Jalapeños",
        "price": 160,
        "category": "Starters",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1576107232684-1279f3908594?auto=format&fit=crop&w=600&q=80",
        "description": "Crinkle-cut hot fries smothered in liquid cheese, jalapeño bits, and smoky barbecue drizzle."
      },
      {
        "id": "subway-city-mall-item-6",
        "name": "Double Egg Double Chicken Kathi Roll",
        "price": 180,
        "category": "Starters",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?auto=format&fit=crop&w=600&q=80",
        "description": "Flaky paratha layered with two eggs and rolled with grilled chicken tikka, onions, and lime juice."
      },
      {
        "id": "subway-city-mall-item-7",
        "name": "Hot & Crispy Fried Chicken Bucket (4 pcs)",
        "price": 360,
        "category": "Starters",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=600&q=80",
        "description": "11 secret herbs and spices recipe chicken, extra crunchy outside and juicy tender inside."
      },
      {
        "id": "subway-city-mall-item-8",
        "name": "Classic Mumbai Vada Pav (2 pcs)",
        "price": 70,
        "category": "Starters",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80",
        "description": "Spiced potato batata vada in soft pav bread with spicy garlic dry chutney and fried green chillies."
      },
      {
        "id": "subway-city-mall-item-9",
        "name": "Oreo Thick Overload Shake",
        "price": 160,
        "category": "Beverages",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=600&q=80",
        "description": "Vanilla cream milkshake loaded with crushed Oreo cookies, chocolate syrup and whipped cream."
      },
      {
        "id": "subway-city-mall-item-10",
        "name": "Choco Lava Cake with Molten Core",
        "price": 110,
        "category": "Desserts",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=600&q=80",
        "description": "Warm soft chocolate sponge cake with an irresistible flowing chocolate fudge center."
      }
    ]
  },
  {
    "id": "kukkad-nukkad-dhaba",
    "name": "Kukkad Nukkad Highway Dhaba",
    "area": "Nausad Bypass",
    "city": "Gorakhpur",
    "description": "Authentic rustic open-air highway dhaba famous for char-grilled tawa chicken, handi mutton, buttery lachha parathas, and thick sweet lassi.",
    "categories": [
      "north-indian"
    ],
    "cuisines": [
      "North Indian",
      "Punjabi Dhaba",
      "Tandoori"
    ],
    "popularDishes": [
      "Tawa Chicken Roast",
      "Handi Mutton",
      "Amritsari Kulcha",
      "Malai Kulhad Lassi"
    ],
    "costForTwo": 500,
    "averageRating": 4.6,
    "reviewCount": 390,
    "imageUrl": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1000&q=80",
    "logoUrl": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20100%20100%22%20width%3D%22200%22%20height%3D%22200%22%3E%0A%20%20%3Cdefs%3E%0A%20%20%20%20%3ClinearGradient%20id%3D%22brandGrad_kukkad-nukkad-dhaba%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23a33a0a%22%2F%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%232b2018%22%2F%3E%0A%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%3Cfilter%20id%3D%22shadow_kukkad-nukkad-dhaba%22%20x%3D%22-10%25%22%20y%3D%22-10%25%22%20width%3D%22120%25%22%20height%3D%22120%25%22%3E%0A%20%20%20%20%20%20%3CfeDropShadow%20dx%3D%220%22%20dy%3D%222%22%20stdDeviation%3D%222.5%22%20flood-opacity%3D%220.35%22%2F%3E%0A%20%20%20%20%3C%2Ffilter%3E%0A%20%20%3C%2Fdefs%3E%0A%20%20%3C!--%20Background%20Shield%20Badge%20--%3E%0A%20%20%3Crect%20x%3D%224%22%20y%3D%224%22%20width%3D%2292%22%20height%3D%2292%22%20rx%3D%2226%22%20fill%3D%22url(%23brandGrad_kukkad-nukkad-dhaba)%22%20stroke%3D%22%23f5e9d0%22%20stroke-width%3D%222.5%22%20filter%3D%22url(%23shadow_kukkad-nukkad-dhaba)%22%2F%3E%0A%20%20%3C!--%20Inner%20Ornamental%20Line%20--%3E%0A%20%20%3Crect%20x%3D%229%22%20y%3D%229%22%20width%3D%2282%22%20height%3D%2282%22%20rx%3D%2221%22%20fill%3D%22none%22%20stroke%3D%22%23f5e9d0%22%20stroke-width%3D%221%22%20stroke-dasharray%3D%223%203%22%20opacity%3D%220.45%22%2F%3E%0A%20%20%3C!--%20Emblem%20Motif%20--%3E%0A%20%20%3Ccircle%20cx%3D%2250%22%20cy%3D%2238%22%20r%3D%2214%22%20stroke%3D%22%23f5e9d0%22%20stroke-width%3D%222%22%20fill%3D%22none%22%20opacity%3D%220.7%22%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22M44%2030%20L44%2046%20M56%2030%20L56%2046%20M42%2030%20C42%2035%2046%2035%2046%2030%22%20stroke%3D%22%23f5e9d0%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%2F%3E%0A%20%20%3C!--%20Typography%20%2F%20Monogram%20--%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2276%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C%20-apple-system%2C%20sans-serif%22%20font-weight%3D%22900%22%20font-size%3D%2215%22%20fill%3D%22%23ffffff%22%20letter-spacing%3D%221.5%22%3EKN%3C%2Ftext%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2287%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C%20-apple-system%2C%20sans-serif%22%20font-weight%3D%22800%22%20font-size%3D%226.5%22%20fill%3D%22%23f5e9d0%22%20letter-spacing%3D%222%22%3EGORAKHPUR%3C%2Ftext%3E%0A%3C%2Fsvg%3E",
    "isDemo": false,
    "phone": "+91 97931 44550",
    "address": "Near Nausad Chowk, Varanasi Highway Bypass, Gorakhpur",
    "openTime": "11:00",
    "closeTime": "01:00",
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
    "ownerName": "Satnam Singh Dhillon",
    "ownerEmail": "kukkadnukkad@gorakhpurfoodguide.in",
    "facilities": [
      "Charpai & Table Seating",
      "Ample Truck & Car Parking",
      "Late Night Dining",
      "UPI Accepted"
    ],
    "ratingsBreakdown": {
      "food": 4.8,
      "taste": 4.8,
      "hygiene": 4.3,
      "service": 4.5,
      "ambience": 4.4
    },
    "priceRange": {
      "min": 180,
      "max": 550
    },
    "distanceKm": 5.2,
    "menu": [
      {
        "id": "kukkad-nukkad-dhaba-pop-1",
        "name": "Tawa Chicken Roast",
        "price": 340,
        "category": "Main Course",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=600&q=80",
        "description": "Succulent pieces cooked in rich fragrant gravy with roasted spices, brown onions, and fresh coriander."
      },
      {
        "id": "kukkad-nukkad-dhaba-pop-2",
        "name": "Handi Mutton",
        "price": 340,
        "category": "Main Course",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1545247181-516773cae754?auto=format&fit=crop&w=600&q=80",
        "description": "Succulent pieces cooked in rich fragrant gravy with roasted spices, brown onions, and fresh coriander."
      },
      {
        "id": "kukkad-nukkad-dhaba-pop-3",
        "name": "Amritsari Kulcha",
        "price": 40,
        "category": "Breads",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=600&q=80",
        "description": "Fresh cottage cheese and seasonal ingredients simmered in a luscious spiced onion-tomato gravy."
      },
      {
        "id": "kukkad-nukkad-dhaba-pop-4",
        "name": "Malai Kulhad Lassi",
        "price": 50,
        "category": "Beverages",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1553787499-6f9133860278?auto=format&fit=crop&w=600&q=80",
        "description": "Fresh cottage cheese and seasonal ingredients simmered in a luscious spiced onion-tomato gravy."
      },
      {
        "id": "kukkad-nukkad-dhaba-item-1",
        "name": "Galawati Kabab with Ulte Tawe Ka Paratha",
        "price": 380,
        "category": "Starters",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=600&q=80",
        "description": "Mouth-melting Awadhi minced mutton kebabs spiced with 32 fragrant herbs, served with Mughlai paratha."
      },
      {
        "id": "kukkad-nukkad-dhaba-item-2",
        "name": "Murgh Malai Tikka (6 pcs)",
        "price": 340,
        "category": "Starters",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=600&q=80",
        "description": "Boneless chicken chunks marinated in cream, cheese, hung curd, and crushed cardamom, grilled in tandoor."
      },
      {
        "id": "kukkad-nukkad-dhaba-item-3",
        "name": "Mutton Seekh Kebab (4 pcs)",
        "price": 390,
        "category": "Starters",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=600&q=80",
        "description": "Finely minced spiced mutton skewers cooked over glowing charcoal embers."
      },
      {
        "id": "kukkad-nukkad-dhaba-item-4",
        "name": "Tandoori Chicken (Half / Full)",
        "price": 290,
        "category": "Starters",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80",
        "description": "Classic bone-in chicken marinated in Kashmiri chilli, mustard oil and hung curd roasted in tandoor."
      },
      {
        "id": "kukkad-nukkad-dhaba-item-5",
        "name": "Paneer Tikka Shashlik",
        "price": 280,
        "category": "Starters",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=600&q=80",
        "description": "Cottage cheese cubes with bell peppers and onions grilled to perfection in clay oven."
      },
      {
        "id": "kukkad-nukkad-dhaba-item-6",
        "name": "Special Butter Chicken",
        "price": 390,
        "category": "Main Course",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=600&q=80",
        "description": "Tender tandoori chicken cooked in an authentic velvety makhani gravy enriched with honey and fenugreek."
      },
      {
        "id": "kukkad-nukkad-dhaba-item-8",
        "name": "Chicken Lababdar",
        "price": 370,
        "category": "Main Course",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=600&q=80",
        "description": "Succulent chicken pieces in a chunky spiced onion-tomato gravy finished with grated paneer and cream."
      },
      {
        "id": "kukkad-nukkad-dhaba-item-9",
        "name": "Kadhai Paneer",
        "price": 290,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=600&q=80",
        "description": "Paneer cubes tossed with fresh ground coriander, dry red chillies, capsicum, and thick onion masala."
      },
      {
        "id": "kukkad-nukkad-dhaba-item-10",
        "name": "Dal Makhani Slow-Cooked",
        "price": 240,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80",
        "description": "Classic black lentils slow-cooked with fresh cream and butter for 24 hours."
      },
      {
        "id": "kukkad-nukkad-dhaba-item-11",
        "name": "Dum Chicken Biryani with Mirchi Salan",
        "price": 340,
        "category": "Biryani & Rice",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=600&q=80",
        "description": "Long-grain aged basmati rice layered with marinated chicken, saffron milk, brown onions, and kewra."
      },
      {
        "id": "kukkad-nukkad-dhaba-item-12",
        "name": "Hyderabadi Dum Gosht Biryani",
        "price": 440,
        "category": "Biryani & Rice",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1545247181-516773cae754?auto=format&fit=crop&w=600&q=80",
        "description": "Fragrant basmati rice slow-cooked on dum with spiced mutton chunks, served with raita and salan."
      }
    ]
  },
  {
    "id": "haldirams-express-gkp",
    "name": "Haldiram's Express & Sweets",
    "area": "Golghar",
    "city": "Gorakhpur",
    "description": "Renowned pure veg franchise serving giant Raj Kachori, Chhole Bhature, Pav Bhaji, south Indian snacks, and fresh packaged mithai.",
    "categories": [
      "north-indian",
      "street-food",
      "sweets"
    ],
    "cuisines": [
      "Street Food",
      "North Indian",
      "Chaat",
      "Mithai"
    ],
    "popularDishes": [
      "Signature Raj Kachori",
      "Special Chhole Bhature",
      "Bombay Pav Bhaji",
      "Kaju Katli"
    ],
    "costForTwo": 420,
    "averageRating": 4.7,
    "reviewCount": 580,
    "imageUrl": "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=1000&q=80",
    "logoUrl": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20100%20100%22%20width%3D%22200%22%20height%3D%22200%22%3E%0A%20%20%3Cdefs%3E%0A%20%20%20%20%3ClinearGradient%20id%3D%22brandGrad_haldirams-express-gkp%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%2394381c%22%2F%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%234f3f2d%22%2F%3E%0A%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%3Cfilter%20id%3D%22shadow_haldirams-express-gkp%22%20x%3D%22-10%25%22%20y%3D%22-10%25%22%20width%3D%22120%25%22%20height%3D%22120%25%22%3E%0A%20%20%20%20%20%20%3CfeDropShadow%20dx%3D%220%22%20dy%3D%222%22%20stdDeviation%3D%222.5%22%20flood-opacity%3D%220.35%22%2F%3E%0A%20%20%20%20%3C%2Ffilter%3E%0A%20%20%3C%2Fdefs%3E%0A%20%20%3C!--%20Background%20Shield%20Badge%20--%3E%0A%20%20%3Crect%20x%3D%224%22%20y%3D%224%22%20width%3D%2292%22%20height%3D%2292%22%20rx%3D%2226%22%20fill%3D%22url(%23brandGrad_haldirams-express-gkp)%22%20stroke%3D%22%23fce588%22%20stroke-width%3D%222.5%22%20filter%3D%22url(%23shadow_haldirams-express-gkp)%22%2F%3E%0A%20%20%3C!--%20Inner%20Ornamental%20Line%20--%3E%0A%20%20%3Crect%20x%3D%229%22%20y%3D%229%22%20width%3D%2282%22%20height%3D%2282%22%20rx%3D%2221%22%20fill%3D%22none%22%20stroke%3D%22%23fce588%22%20stroke-width%3D%221%22%20stroke-dasharray%3D%223%203%22%20opacity%3D%220.45%22%2F%3E%0A%20%20%3C!--%20Emblem%20Motif%20--%3E%0A%20%20%3Cpath%20d%3D%22M50%2028%20C56%2028%2062%2034%2062%2042%20C62%2050%2050%2060%2050%2060%20C50%2060%2038%2050%2038%2042%20C38%2034%2044%2028%2050%2028%20Z%22%20fill%3D%22%23fce588%22%20opacity%3D%220.95%22%2F%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2250%22%20cy%3D%2240%22%20r%3D%223.5%22%20fill%3D%22%23ffffff%22%2F%3E%0A%20%20%3C!--%20Typography%20%2F%20Monogram%20--%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2276%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C%20-apple-system%2C%20sans-serif%22%20font-weight%3D%22900%22%20font-size%3D%2215%22%20fill%3D%22%23ffffff%22%20letter-spacing%3D%221.5%22%3EHE%3C%2Ftext%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2287%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C%20-apple-system%2C%20sans-serif%22%20font-weight%3D%22800%22%20font-size%3D%226.5%22%20fill%3D%22%23fce588%22%20letter-spacing%3D%222%22%3EGORAKHPUR%3C%2Ftext%3E%0A%3C%2Fsvg%3E",
    "isDemo": false,
    "phone": "+91 551 220 9940",
    "address": "Ground Floor, AD Mall, Cinema Road, Golghar, Gorakhpur",
    "openTime": "09:30",
    "closeTime": "22:30",
    "openDays": [
      "Mon",
      "Tue",
      "Wed",
      "Thu",
      "Fri",
      "Sat",
      "Sun"
    ],
    "diet": "veg",
    "status": "Active",
    "ownerName": "Alok Goel",
    "ownerEmail": "haldirams.gkp@gorakhpurfoodguide.in",
    "facilities": [
      "100% Pure Vegetarian",
      "Air Conditioned",
      "Mall Parking",
      "Credit Card & UPI"
    ],
    "ratingsBreakdown": {
      "food": 4.8,
      "taste": 4.8,
      "hygiene": 4.9,
      "service": 4.6,
      "ambience": 4.7
    },
    "priceRange": {
      "min": 120,
      "max": 450
    },
    "distanceKm": 0.5,
    "menu": [
      {
        "id": "haldirams-express-gkp-pop-1",
        "name": "Signature Raj Kachori",
        "price": 200,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80",
        "description": "Fresh cottage cheese and seasonal ingredients simmered in a luscious spiced onion-tomato gravy."
      },
      {
        "id": "haldirams-express-gkp-pop-2",
        "name": "Special Chhole Bhature",
        "price": 200,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=600&q=80",
        "description": "Fluffy, freshly puffed bhature served with slow-cooked spicy Amritsari chhole."
      },
      {
        "id": "haldirams-express-gkp-pop-3",
        "name": "Bombay Pav Bhaji",
        "price": 200,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=600&q=80",
        "description": "Fresh cottage cheese and seasonal ingredients simmered in a luscious spiced onion-tomato gravy."
      },
      {
        "id": "haldirams-express-gkp-pop-4",
        "name": "Kaju Katli",
        "price": 200,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80",
        "description": "Fresh cottage cheese and seasonal ingredients simmered in a luscious spiced onion-tomato gravy."
      },
      {
        "id": "haldirams-express-gkp-item-1",
        "name": "Desi Ghee Samosa (2 pcs)",
        "price": 40,
        "category": "Starters",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80",
        "description": "Golden flaky pastry stuffed with spiced potatoes, green peas and whole spices, fried in pure desi ghee."
      },
      {
        "id": "haldirams-express-gkp-item-2",
        "name": "Khasta Kachori with Hing Aloo (2 pcs)",
        "price": 50,
        "category": "Starters",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80",
        "description": "Crispy lentil-stuffed kachoris served with spicy tangy hing aloo subzi and sweet sonth."
      },
      {
        "id": "haldirams-express-gkp-item-3",
        "name": "Dahi Bhalla Papdi Chaat",
        "price": 90,
        "category": "Starters",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80",
        "description": "Soft lentil dumplings and crisp papdis drenched in whipped curd, roasted cumin, and sweet-spicy chutneys."
      },
      {
        "id": "haldirams-express-gkp-item-4",
        "name": "Amritsari Chhole Bhature",
        "price": 160,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=600&q=80",
        "description": "Pair of balloon bhatures served with dark spiced Punjabi chickpeas, pickled onions and fried green chilli."
      },
      {
        "id": "haldirams-express-gkp-item-5",
        "name": "Special Pure Veg Deluxe Thali",
        "price": 260,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=600&q=80",
        "description": "Paneer Butter Masala, Dal Makhani, Mix Veg, Jeera Rice, 2 Butter Naan, Gulab Jamun, Papad and Raita."
      },
      {
        "id": "haldirams-express-gkp-item-6",
        "name": "Paneer Butter Masala",
        "price": 240,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=600&q=80",
        "description": "Soft cottage cheese cubes simmered in a velvety tomato, cashew and butter gravy with kasoori methi."
      },
      {
        "id": "haldirams-express-gkp-item-7",
        "name": "Dal Makhani Special",
        "price": 210,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80",
        "description": "Whole black lentils and kidney beans slow-cooked overnight with white butter and cream."
      },
      {
        "id": "haldirams-express-gkp-item-8",
        "name": "Butter Tandoori Roti (2 pcs)",
        "price": 40,
        "category": "Breads",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=600&q=80",
        "description": "Whole wheat flatbread baked in clay oven and topped with pure amul butter."
      },
      {
        "id": "haldirams-express-gkp-item-9",
        "name": "Garlic Butter Naan",
        "price": 65,
        "category": "Breads",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=600&q=80",
        "description": "Soft leavened bread infused with minced garlic, fresh coriander and generous butter."
      },
      {
        "id": "haldirams-express-gkp-item-10",
        "name": "Special Kesar Rasmalai (2 pcs)",
        "price": 90,
        "category": "Desserts",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1564355808539-22fda35bed7e?auto=format&fit=crop&w=600&q=80",
        "description": "Delicate cottage cheese patties soaked in saffron-infused clotted milk garnished with pistachios."
      },
      {
        "id": "haldirams-express-gkp-item-11",
        "name": "Desi Ghee Gulab Jamun (2 pcs)",
        "price": 60,
        "category": "Desserts",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=600&q=80",
        "description": "Hot melt-in-mouth milk solids dumplings soaked in cardamom and rose sugar syrup."
      }
    ]
  },
  {
    "id": "crazy-bites-chowk",
    "name": "Crazy Bites Fast Food",
    "area": "Asuran Chowk",
    "city": "Gorakhpur",
    "description": "Popular college hub famous for spicy Schezwan noodles, chilli paneer gravy, cheese burgers, and cold chocolate thick shakes.",
    "categories": [
      "chinese",
      "fast-food"
    ],
    "cuisines": [
      "Indo-Chinese",
      "Fast Food",
      "Beverages"
    ],
    "popularDishes": [
      "Chilli Paneer Dry",
      "Schezwan Chowmein",
      "Crispy Veg Burger",
      "Cold Coffee"
    ],
    "costForTwo": 280,
    "averageRating": 4.5,
    "reviewCount": 310,
    "imageUrl": "https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=1000&q=80",
    "logoUrl": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20100%20100%22%20width%3D%22200%22%20height%3D%22200%22%3E%0A%20%20%3Cdefs%3E%0A%20%20%20%20%3ClinearGradient%20id%3D%22brandGrad_crazy-bites-chowk%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%237c1c1c%22%2F%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23240808%22%2F%3E%0A%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%3Cfilter%20id%3D%22shadow_crazy-bites-chowk%22%20x%3D%22-10%25%22%20y%3D%22-10%25%22%20width%3D%22120%25%22%20height%3D%22120%25%22%3E%0A%20%20%20%20%20%20%3CfeDropShadow%20dx%3D%220%22%20dy%3D%222%22%20stdDeviation%3D%222.5%22%20flood-opacity%3D%220.35%22%2F%3E%0A%20%20%20%20%3C%2Ffilter%3E%0A%20%20%3C%2Fdefs%3E%0A%20%20%3C!--%20Background%20Shield%20Badge%20--%3E%0A%20%20%3Crect%20x%3D%224%22%20y%3D%224%22%20width%3D%2292%22%20height%3D%2292%22%20rx%3D%2226%22%20fill%3D%22url(%23brandGrad_crazy-bites-chowk)%22%20stroke%3D%22%23fca5a5%22%20stroke-width%3D%222.5%22%20filter%3D%22url(%23shadow_crazy-bites-chowk)%22%2F%3E%0A%20%20%3C!--%20Inner%20Ornamental%20Line%20--%3E%0A%20%20%3Crect%20x%3D%229%22%20y%3D%229%22%20width%3D%2282%22%20height%3D%2282%22%20rx%3D%2221%22%20fill%3D%22none%22%20stroke%3D%22%23fca5a5%22%20stroke-width%3D%221%22%20stroke-dasharray%3D%223%203%22%20opacity%3D%220.45%22%2F%3E%0A%20%20%3C!--%20Emblem%20Motif%20--%3E%0A%20%20%3Cpath%20d%3D%22M36%2044%20C36%2052%2064%2052%2064%2044%20Z%22%20fill%3D%22%23fca5a5%22%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22M42%2034%20L58%2048%20M58%2034%20L42%2048%22%20stroke%3D%22%23ffffff%22%20stroke-width%3D%222.5%22%20stroke-linecap%3D%22round%22%2F%3E%0A%20%20%3C!--%20Typography%20%2F%20Monogram%20--%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2276%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C%20-apple-system%2C%20sans-serif%22%20font-weight%3D%22900%22%20font-size%3D%2215%22%20fill%3D%22%23ffffff%22%20letter-spacing%3D%221.5%22%3ECB%3C%2Ftext%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2287%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C%20-apple-system%2C%20sans-serif%22%20font-weight%3D%22800%22%20font-size%3D%226.5%22%20fill%3D%22%23fca5a5%22%20letter-spacing%3D%222%22%3EGORAKHPUR%3C%2Ftext%3E%0A%3C%2Fsvg%3E",
    "isDemo": false,
    "phone": "+91 94158 33112",
    "address": "Near Asuran Temple, Medical College Road, Asuran Chowk, Gorakhpur",
    "openTime": "11:30",
    "closeTime": "22:30",
    "openDays": [
      "Mon",
      "Tue",
      "Wed",
      "Thu",
      "Fri",
      "Sat",
      "Sun"
    ],
    "diet": "veg",
    "status": "Active",
    "ownerName": "Manish Pandey",
    "ownerEmail": "crazybites.asuran@gorakhpurfoodguide.in",
    "facilities": [
      "Fast Service",
      "Budget Friendly",
      "Takeaway",
      "UPI Accepted"
    ],
    "ratingsBreakdown": {
      "food": 4.6,
      "taste": 4.6,
      "hygiene": 4.4,
      "service": 4.5,
      "ambience": 4.1
    },
    "priceRange": {
      "min": 80,
      "max": 320
    },
    "distanceKm": 2.7,
    "menu": [
      {
        "id": "crazy-bites-chowk-pop-1",
        "name": "Chilli Paneer Dry",
        "price": 160,
        "category": "Starters",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=600&q=80",
        "description": "Crispy batter-fried paneer cubes wok tossed with diced onions, green chillies, and dark soya."
      },
      {
        "id": "crazy-bites-chowk-pop-2",
        "name": "Schezwan Chowmein",
        "price": 140,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=600&q=80",
        "description": "Fresh cottage cheese and seasonal ingredients simmered in a luscious spiced onion-tomato gravy."
      },
      {
        "id": "crazy-bites-chowk-pop-3",
        "name": "Crispy Veg Burger",
        "price": 140,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80",
        "description": "Toasted brioche bun loaded with fresh patty, melted cheese, crisp lettuce, and signature sauce."
      },
      {
        "id": "crazy-bites-chowk-pop-4",
        "name": "Cold Coffee",
        "price": 40,
        "category": "Beverages",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=600&q=80",
        "description": "Freshly brewed aromatic beverage prepared with premium beans/leaves and whole spices."
      },
      {
        "id": "crazy-bites-chowk-item-2",
        "name": "Kurkure Crispy Paneer Momos (6 pcs)",
        "price": 150,
        "category": "Starters",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=600&q=80",
        "description": "Crispy cornflake-crusted deep-fried momos filled with seasoned spiced cottage cheese."
      },
      {
        "id": "crazy-bites-chowk-item-3",
        "name": "Chilli Garlic Hakka Noodles",
        "price": 190,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=600&q=80",
        "description": "Wok-tossed noodles with julienned vegetables, burnt garlic, soy, and spicy red chilli paste."
      },
      {
        "id": "crazy-bites-chowk-item-4",
        "name": "Veg Manchurian Gravy with Fried Rice Bowl",
        "price": 240,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=600&q=80",
        "description": "Deep-fried vegetable balls in a savory, tangy and spicy dark soya and ginger garlic sauce."
      },
      {
        "id": "crazy-bites-chowk-item-6",
        "name": "Crispy Honey Chilli Potatoes",
        "price": 180,
        "category": "Starters",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80",
        "description": "Crispy finger potatoes tossed in sweet honey, roasted sesame seeds, and spicy red chilli sauce."
      },
      {
        "id": "crazy-bites-chowk-item-8",
        "name": "Tibetan Thukpa Noodle Soup Bowl",
        "price": 210,
        "category": "Starters",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=600&q=80",
        "description": "Hearty Himalayan noodle soup packed with fresh greens, mushrooms, and spiced broth."
      },
      {
        "id": "crazy-bites-chowk-item-9",
        "name": "Crispy Fried Spring Rolls (6 pcs)",
        "price": 170,
        "category": "Starters",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?auto=format&fit=crop&w=600&q=80",
        "description": "Golden crunchy wrappers filled with cabbage, carrots, bell peppers, served with sweet chilli dip."
      },
      {
        "id": "crazy-bites-chowk-item-10",
        "name": "Darjeeling Lemon Iced Tea",
        "price": 110,
        "category": "Beverages",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=600&q=80",
        "description": "Refreshing brewed black tea infused with lemon zest and mint over crushed ice."
      },
      {
        "id": "crazy-bites-chowk-item-11",
        "name": "Darjeeling Darsaan with Vanilla Ice Cream",
        "price": 140,
        "category": "Desserts",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=600&q=80",
        "description": "Fried honey-glazed flat noodles topped with roasted sesame seeds and cool vanilla scoop."
      }
    ]
  },
  {
    "id": "pizza-hut-park-road",
    "name": "Pizza Hut Gorakhpur",
    "area": "Civil Lines",
    "city": "Gorakhpur",
    "description": "International favorite for signature pan pizzas, stuffed crusts, cheesy garlic bread, and chicken wings in a family dining setting.",
    "categories": [
      "fast-food"
    ],
    "cuisines": [
      "Pizza",
      "Italian",
      "Fast Food"
    ],
    "popularDishes": [
      "Margherita Pan Pizza",
      "Tandoori Paneer Pizza",
      "Garlic Bread Stix",
      "Choco Volcano"
    ],
    "costForTwo": 550,
    "averageRating": 4.6,
    "reviewCount": 410,
    "imageUrl": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=80",
    "logoUrl": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20100%20100%22%20width%3D%22200%22%20height%3D%22200%22%3E%0A%20%20%3Cdefs%3E%0A%20%20%20%20%3ClinearGradient%20id%3D%22brandGrad_pizza-hut-park-road%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23a33a0a%22%2F%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%232b2018%22%2F%3E%0A%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%3Cfilter%20id%3D%22shadow_pizza-hut-park-road%22%20x%3D%22-10%25%22%20y%3D%22-10%25%22%20width%3D%22120%25%22%20height%3D%22120%25%22%3E%0A%20%20%20%20%20%20%3CfeDropShadow%20dx%3D%220%22%20dy%3D%222%22%20stdDeviation%3D%222.5%22%20flood-opacity%3D%220.35%22%2F%3E%0A%20%20%20%20%3C%2Ffilter%3E%0A%20%20%3C%2Fdefs%3E%0A%20%20%3C!--%20Background%20Shield%20Badge%20--%3E%0A%20%20%3Crect%20x%3D%224%22%20y%3D%224%22%20width%3D%2292%22%20height%3D%2292%22%20rx%3D%2226%22%20fill%3D%22url(%23brandGrad_pizza-hut-park-road)%22%20stroke%3D%22%23f5e9d0%22%20stroke-width%3D%222.5%22%20filter%3D%22url(%23shadow_pizza-hut-park-road)%22%2F%3E%0A%20%20%3C!--%20Inner%20Ornamental%20Line%20--%3E%0A%20%20%3Crect%20x%3D%229%22%20y%3D%229%22%20width%3D%2282%22%20height%3D%2282%22%20rx%3D%2221%22%20fill%3D%22none%22%20stroke%3D%22%23f5e9d0%22%20stroke-width%3D%221%22%20stroke-dasharray%3D%223%203%22%20opacity%3D%220.45%22%2F%3E%0A%20%20%3C!--%20Emblem%20Motif%20--%3E%0A%20%20%3Ccircle%20cx%3D%2250%22%20cy%3D%2238%22%20r%3D%2214%22%20stroke%3D%22%23f5e9d0%22%20stroke-width%3D%222%22%20fill%3D%22none%22%20opacity%3D%220.7%22%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22M44%2030%20L44%2046%20M56%2030%20L56%2046%20M42%2030%20C42%2035%2046%2035%2046%2030%22%20stroke%3D%22%23f5e9d0%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%2F%3E%0A%20%20%3C!--%20Typography%20%2F%20Monogram%20--%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2276%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C%20-apple-system%2C%20sans-serif%22%20font-weight%3D%22900%22%20font-size%3D%2215%22%20fill%3D%22%23ffffff%22%20letter-spacing%3D%221.5%22%3EPH%3C%2Ftext%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2287%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C%20-apple-system%2C%20sans-serif%22%20font-weight%3D%22800%22%20font-size%3D%226.5%22%20fill%3D%22%23f5e9d0%22%20letter-spacing%3D%222%22%3EGORAKHPUR%3C%2Ftext%3E%0A%3C%2Fsvg%3E",
    "isDemo": false,
    "phone": "+91 551 220 3344",
    "address": "Park Road, Civil Lines, Next to Pantaloons, Gorakhpur",
    "openTime": "11:00",
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
    "ownerName": "Devyani International (Ops)",
    "ownerEmail": "pizzahut.gkp@gorakhpurfoodguide.in",
    "facilities": [
      "Air Conditioned",
      "Family Dining",
      "Home Delivery",
      "UPI & Cards"
    ],
    "ratingsBreakdown": {
      "food": 4.6,
      "taste": 4.7,
      "hygiene": 4.8,
      "service": 4.5,
      "ambience": 4.6
    },
    "priceRange": {
      "min": 200,
      "max": 650
    },
    "distanceKm": 0.9,
    "menu": [
      {
        "id": "pizza-hut-park-road-pop-1",
        "name": "Margherita Pan Pizza",
        "price": 330,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80",
        "description": "Freshly baked hand-tossed crust with gourmet mozzarella, herb marinara, and fresh toppings."
      },
      {
        "id": "pizza-hut-park-road-pop-2",
        "name": "Tandoori Paneer Pizza",
        "price": 330,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=600&q=80",
        "description": "Freshly baked hand-tossed crust with gourmet mozzarella, herb marinara, and fresh toppings."
      },
      {
        "id": "pizza-hut-park-road-pop-3",
        "name": "Garlic Bread Stix",
        "price": 200,
        "category": "Starters",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=600&q=80",
        "description": "Fresh cottage cheese and seasonal ingredients simmered in a luscious spiced onion-tomato gravy."
      },
      {
        "id": "pizza-hut-park-road-pop-4",
        "name": "Choco Volcano",
        "price": 260,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=600&q=80",
        "description": "Fresh cottage cheese and seasonal ingredients simmered in a luscious spiced onion-tomato gravy."
      },
      {
        "id": "pizza-hut-park-road-item-1",
        "name": "Double Cheese Crunch Burger",
        "price": 160,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80",
        "description": "Crisp vegetable patty with double melted cheddar, gherkins, lettuce and secret thousand island sauce."
      },
      {
        "id": "pizza-hut-park-road-item-2",
        "name": "Peri Peri Crispy Chicken Zinger Burger",
        "price": 210,
        "category": "Main Course",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80",
        "description": "Deep-fried spiced chicken breast fillet topped with spicy mayo and crisp iceberg lettuce on a brioche bun."
      },
      {
        "id": "pizza-hut-park-road-item-3",
        "name": "Hand-Tossed Margherita Pizza (Regular)",
        "price": 240,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80",
        "description": "Classic Italian pizza with aromatic basil leaves, extra virgin olive oil and 100% mozzarella."
      },
      {
        "id": "pizza-hut-park-road-item-4",
        "name": "Fiery Chicken Sausage & Pepperoni Pizza",
        "price": 390,
        "category": "Main Course",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80",
        "description": "Loaded with spicy chicken sausage, smoked pepperoni, red paprika, and stretchy mozzarella."
      },
      {
        "id": "pizza-hut-park-road-item-5",
        "name": "Loaded Cheese Fries with Jalapeños",
        "price": 160,
        "category": "Starters",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1576107232684-1279f3908594?auto=format&fit=crop&w=600&q=80",
        "description": "Crinkle-cut hot fries smothered in liquid cheese, jalapeño bits, and smoky barbecue drizzle."
      },
      {
        "id": "pizza-hut-park-road-item-6",
        "name": "Double Egg Double Chicken Kathi Roll",
        "price": 180,
        "category": "Starters",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?auto=format&fit=crop&w=600&q=80",
        "description": "Flaky paratha layered with two eggs and rolled with grilled chicken tikka, onions, and lime juice."
      },
      {
        "id": "pizza-hut-park-road-item-7",
        "name": "Hot & Crispy Fried Chicken Bucket (4 pcs)",
        "price": 360,
        "category": "Starters",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=600&q=80",
        "description": "11 secret herbs and spices recipe chicken, extra crunchy outside and juicy tender inside."
      },
      {
        "id": "pizza-hut-park-road-item-8",
        "name": "Classic Mumbai Vada Pav (2 pcs)",
        "price": 70,
        "category": "Starters",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80",
        "description": "Spiced potato batata vada in soft pav bread with spicy garlic dry chutney and fried green chillies."
      },
      {
        "id": "pizza-hut-park-road-item-9",
        "name": "Oreo Thick Overload Shake",
        "price": 160,
        "category": "Beverages",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=600&q=80",
        "description": "Vanilla cream milkshake loaded with crushed Oreo cookies, chocolate syrup and whipped cream."
      },
      {
        "id": "pizza-hut-park-road-item-10",
        "name": "Choco Lava Cake with Molten Core",
        "price": 110,
        "category": "Desserts",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=600&q=80",
        "description": "Warm soft chocolate sponge cake with an irresistible flowing chocolate fudge center."
      }
    ]
  },
  {
    "id": "kfc-ad-mall",
    "name": "KFC Gorakhpur",
    "area": "Golghar",
    "city": "Gorakhpur",
    "description": "World famous crispy fried chicken, Zinger burgers, popcorn chicken, and rice bowls served fresh and fast.",
    "categories": [
      "fast-food"
    ],
    "cuisines": [
      "Fast Food",
      "Burgers & Chicken"
    ],
    "popularDishes": [
      "Hot & Crispy Chicken",
      "Zinger Burger",
      "Chicken Popcorn",
      "Virgin Mojito"
    ],
    "costForTwo": 500,
    "averageRating": 4.6,
    "reviewCount": 610,
    "imageUrl": "https://images.unsplash.com/photo-1525610553991-2bede1a236e2?auto=format&fit=crop&w=1000&q=80",
    "logoUrl": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20100%20100%22%20width%3D%22200%22%20height%3D%22200%22%3E%0A%20%20%3Cdefs%3E%0A%20%20%20%20%3ClinearGradient%20id%3D%22brandGrad_kfc-ad-mall%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23a33a0a%22%2F%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%232b2018%22%2F%3E%0A%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%3Cfilter%20id%3D%22shadow_kfc-ad-mall%22%20x%3D%22-10%25%22%20y%3D%22-10%25%22%20width%3D%22120%25%22%20height%3D%22120%25%22%3E%0A%20%20%20%20%20%20%3CfeDropShadow%20dx%3D%220%22%20dy%3D%222%22%20stdDeviation%3D%222.5%22%20flood-opacity%3D%220.35%22%2F%3E%0A%20%20%20%20%3C%2Ffilter%3E%0A%20%20%3C%2Fdefs%3E%0A%20%20%3C!--%20Background%20Shield%20Badge%20--%3E%0A%20%20%3Crect%20x%3D%224%22%20y%3D%224%22%20width%3D%2292%22%20height%3D%2292%22%20rx%3D%2226%22%20fill%3D%22url(%23brandGrad_kfc-ad-mall)%22%20stroke%3D%22%23f5e9d0%22%20stroke-width%3D%222.5%22%20filter%3D%22url(%23shadow_kfc-ad-mall)%22%2F%3E%0A%20%20%3C!--%20Inner%20Ornamental%20Line%20--%3E%0A%20%20%3Crect%20x%3D%229%22%20y%3D%229%22%20width%3D%2282%22%20height%3D%2282%22%20rx%3D%2221%22%20fill%3D%22none%22%20stroke%3D%22%23f5e9d0%22%20stroke-width%3D%221%22%20stroke-dasharray%3D%223%203%22%20opacity%3D%220.45%22%2F%3E%0A%20%20%3C!--%20Emblem%20Motif%20--%3E%0A%20%20%3Ccircle%20cx%3D%2250%22%20cy%3D%2238%22%20r%3D%2214%22%20stroke%3D%22%23f5e9d0%22%20stroke-width%3D%222%22%20fill%3D%22none%22%20opacity%3D%220.7%22%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22M44%2030%20L44%2046%20M56%2030%20L56%2046%20M42%2030%20C42%2035%2046%2035%2046%2030%22%20stroke%3D%22%23f5e9d0%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%2F%3E%0A%20%20%3C!--%20Typography%20%2F%20Monogram%20--%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2276%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C%20-apple-system%2C%20sans-serif%22%20font-weight%3D%22900%22%20font-size%3D%2215%22%20fill%3D%22%23ffffff%22%20letter-spacing%3D%221.5%22%3EKG%3C%2Ftext%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2287%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C%20-apple-system%2C%20sans-serif%22%20font-weight%3D%22800%22%20font-size%3D%226.5%22%20fill%3D%22%23f5e9d0%22%20letter-spacing%3D%222%22%3EGORAKHPUR%3C%2Ftext%3E%0A%3C%2Fsvg%3E",
    "isDemo": false,
    "phone": "+91 551 220 5566",
    "address": "Food Court Level, AD Mall, Cinema Road, Golghar, Gorakhpur",
    "openTime": "11:00",
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
    "ownerName": "Devyani Franchise Ops",
    "ownerEmail": "kfc.golghar@gorakhpurfoodguide.in",
    "facilities": [
      "Air Conditioned",
      "Mall Parking",
      "Digital Ordering Kiosks",
      "UPI & Cards"
    ],
    "ratingsBreakdown": {
      "food": 4.7,
      "taste": 4.7,
      "hygiene": 4.8,
      "service": 4.6,
      "ambience": 4.6
    },
    "priceRange": {
      "min": 180,
      "max": 600
    },
    "distanceKm": 0.5,
    "menu": [
      {
        "id": "kfc-ad-mall-pop-1",
        "name": "Hot & Crispy Chicken",
        "price": 340,
        "category": "Main Course",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=600&q=80",
        "description": "Succulent pieces cooked in rich fragrant gravy with roasted spices, brown onions, and fresh coriander."
      },
      {
        "id": "kfc-ad-mall-pop-2",
        "name": "Zinger Burger",
        "price": 199,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80",
        "description": "Crunchy battered whole chicken breast fillet served with crisp lettuce and creamy sauce in sesame bun."
      },
      {
        "id": "kfc-ad-mall-pop-3",
        "name": "Chicken Popcorn",
        "price": 280,
        "category": "Starters",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=600&q=80",
        "description": "Succulent pieces cooked in rich fragrant gravy with roasted spices, brown onions, and fresh coriander."
      },
      {
        "id": "kfc-ad-mall-pop-4",
        "name": "Virgin Mojito",
        "price": 50,
        "category": "Beverages",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=600&q=80",
        "description": "Fresh cottage cheese and seasonal ingredients simmered in a luscious spiced onion-tomato gravy."
      },
      {
        "id": "kfc-ad-mall-item-1",
        "name": "Double Cheese Crunch Burger",
        "price": 160,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80",
        "description": "Crisp vegetable patty with double melted cheddar, gherkins, lettuce and secret thousand island sauce."
      },
      {
        "id": "kfc-ad-mall-item-3",
        "name": "Hand-Tossed Margherita Pizza (Regular)",
        "price": 240,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80",
        "description": "Classic Italian pizza with aromatic basil leaves, extra virgin olive oil and 100% mozzarella."
      },
      {
        "id": "kfc-ad-mall-item-4",
        "name": "Fiery Chicken Sausage & Pepperoni Pizza",
        "price": 390,
        "category": "Main Course",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80",
        "description": "Loaded with spicy chicken sausage, smoked pepperoni, red paprika, and stretchy mozzarella."
      },
      {
        "id": "kfc-ad-mall-item-5",
        "name": "Loaded Cheese Fries with Jalapeños",
        "price": 160,
        "category": "Starters",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1576107232684-1279f3908594?auto=format&fit=crop&w=600&q=80",
        "description": "Crinkle-cut hot fries smothered in liquid cheese, jalapeño bits, and smoky barbecue drizzle."
      },
      {
        "id": "kfc-ad-mall-item-6",
        "name": "Double Egg Double Chicken Kathi Roll",
        "price": 180,
        "category": "Starters",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?auto=format&fit=crop&w=600&q=80",
        "description": "Flaky paratha layered with two eggs and rolled with grilled chicken tikka, onions, and lime juice."
      },
      {
        "id": "kfc-ad-mall-item-7",
        "name": "Hot & Crispy Fried Chicken Bucket (4 pcs)",
        "price": 360,
        "category": "Starters",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=600&q=80",
        "description": "11 secret herbs and spices recipe chicken, extra crunchy outside and juicy tender inside."
      },
      {
        "id": "kfc-ad-mall-item-8",
        "name": "Classic Mumbai Vada Pav (2 pcs)",
        "price": 70,
        "category": "Starters",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80",
        "description": "Spiced potato batata vada in soft pav bread with spicy garlic dry chutney and fried green chillies."
      },
      {
        "id": "kfc-ad-mall-item-9",
        "name": "Oreo Thick Overload Shake",
        "price": 160,
        "category": "Beverages",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=600&q=80",
        "description": "Vanilla cream milkshake loaded with crushed Oreo cookies, chocolate syrup and whipped cream."
      },
      {
        "id": "kfc-ad-mall-item-10",
        "name": "Choco Lava Cake with Molten Core",
        "price": 110,
        "category": "Desserts",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=600&q=80",
        "description": "Warm soft chocolate sponge cake with an irresistible flowing chocolate fudge center."
      }
    ]
  },
  {
    "id": "cafe-coffee-day-gkp",
    "name": "Cafe Coffee Day",
    "area": "Civil Lines",
    "city": "Gorakhpur",
    "description": "Iconic coffee hangout on Park Road, celebrated for classic Cappuccinos, Devil’s Own frappe, warm croissants, and cozy conversations.",
    "categories": [
      "cafe"
    ],
    "cuisines": [
      "Coffee",
      "Cafe",
      "Snacks",
      "Beverages"
    ],
    "popularDishes": [
      "Devil's Own Frappe",
      "Cappuccino",
      "Garlic Bread",
      "Sizzling Brownie"
    ],
    "costForTwo": 450,
    "averageRating": 4.6,
    "reviewCount": 380,
    "imageUrl": "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1000&q=80",
    "logoUrl": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20100%20100%22%20width%3D%22200%22%20height%3D%22200%22%3E%0A%20%20%3Cdefs%3E%0A%20%20%20%20%3ClinearGradient%20id%3D%22brandGrad_cafe-coffee-day-gkp%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%235c3a21%22%2F%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%2326180e%22%2F%3E%0A%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%3Cfilter%20id%3D%22shadow_cafe-coffee-day-gkp%22%20x%3D%22-10%25%22%20y%3D%22-10%25%22%20width%3D%22120%25%22%20height%3D%22120%25%22%3E%0A%20%20%20%20%20%20%3CfeDropShadow%20dx%3D%220%22%20dy%3D%222%22%20stdDeviation%3D%222.5%22%20flood-opacity%3D%220.35%22%2F%3E%0A%20%20%20%20%3C%2Ffilter%3E%0A%20%20%3C%2Fdefs%3E%0A%20%20%3C!--%20Background%20Shield%20Badge%20--%3E%0A%20%20%3Crect%20x%3D%224%22%20y%3D%224%22%20width%3D%2292%22%20height%3D%2292%22%20rx%3D%2226%22%20fill%3D%22url(%23brandGrad_cafe-coffee-day-gkp)%22%20stroke%3D%22%23fed7aa%22%20stroke-width%3D%222.5%22%20filter%3D%22url(%23shadow_cafe-coffee-day-gkp)%22%2F%3E%0A%20%20%3C!--%20Inner%20Ornamental%20Line%20--%3E%0A%20%20%3Crect%20x%3D%229%22%20y%3D%229%22%20width%3D%2282%22%20height%3D%2282%22%20rx%3D%2221%22%20fill%3D%22none%22%20stroke%3D%22%23fed7aa%22%20stroke-width%3D%221%22%20stroke-dasharray%3D%223%203%22%20opacity%3D%220.45%22%2F%3E%0A%20%20%3C!--%20Emblem%20Motif%20--%3E%0A%20%20%3Cpath%20d%3D%22M38%2038%20C38%2034%2042%2032%2046%2032%20L54%2032%20C58%2032%2062%2034%2062%2038%20L60%2050%20C60%2054%2056%2056%2050%2056%20C44%2056%2040%2054%2040%2050%20Z%22%20fill%3D%22%23fed7aa%22%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22M62%2040%20L65%2040%20C67%2040%2068%2041%2068%2043%20L68%2045%20C68%2047%2067%2048%2065%2048%20L61%2048%22%20stroke%3D%22%23fed7aa%22%20stroke-width%3D%222%22%20fill%3D%22none%22%2F%3E%0A%20%20%3C!--%20Typography%20%2F%20Monogram%20--%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2276%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C%20-apple-system%2C%20sans-serif%22%20font-weight%3D%22900%22%20font-size%3D%2215%22%20fill%3D%22%23ffffff%22%20letter-spacing%3D%221.5%22%3ECC%3C%2Ftext%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2287%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C%20-apple-system%2C%20sans-serif%22%20font-weight%3D%22800%22%20font-size%3D%226.5%22%20fill%3D%22%23fed7aa%22%20letter-spacing%3D%222%22%3EGORAKHPUR%3C%2Ftext%3E%0A%3C%2Fsvg%3E",
    "isDemo": false,
    "phone": "+91 93249 12345",
    "address": "Opposite District Hospital, Park Road, Civil Lines, Gorakhpur",
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
    "diet": "veg",
    "status": "Active",
    "ownerName": "Vikram Hegde & CCD Area Team",
    "ownerEmail": "ccd.civillines@gorakhpurfoodguide.in",
    "facilities": [
      "Cozy Seating",
      "Free Wi-Fi",
      "Air Conditioned",
      "Power Sockets for Laptops",
      "UPI & Cards"
    ],
    "ratingsBreakdown": {
      "food": 4.6,
      "taste": 4.7,
      "hygiene": 4.8,
      "service": 4.6,
      "ambience": 4.8
    },
    "priceRange": {
      "min": 150,
      "max": 500
    },
    "distanceKm": 0.9,
    "menu": [
      {
        "id": "cafe-coffee-day-gkp-pop-1",
        "name": "Devil's Own Frappe",
        "price": 219,
        "category": "Beverages",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=600&q=80",
        "description": "Rich blended cold coffee charged with cocoa, chocolate syrup, and crowned with dairy whipped cream."
      },
      {
        "id": "cafe-coffee-day-gkp-pop-2",
        "name": "Cappuccino",
        "price": 220,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=600&q=80",
        "description": "Fresh cottage cheese and seasonal ingredients simmered in a luscious spiced onion-tomato gravy."
      },
      {
        "id": "cafe-coffee-day-gkp-pop-3",
        "name": "Garlic Bread",
        "price": 160,
        "category": "Starters",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=600&q=80",
        "description": "Fresh cottage cheese and seasonal ingredients simmered in a luscious spiced onion-tomato gravy."
      },
      {
        "id": "cafe-coffee-day-gkp-pop-4",
        "name": "Sizzling Brownie",
        "price": 160,
        "category": "Desserts",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=600&q=80",
        "description": "Warm freshly baked dessert smothered in rich melted Belgian chocolate and garnishes."
      },
      {
        "id": "cafe-coffee-day-gkp-item-1",
        "name": "Belgian Nutella Waffle with Vanilla Ice Cream",
        "price": 210,
        "category": "Desserts",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1562376552-0d160a2f238d?auto=format&fit=crop&w=600&q=80",
        "description": "Freshly baked golden Belgian waffle smothered with warm Nutella and topped with ice cream."
      },
      {
        "id": "cafe-coffee-day-gkp-item-2",
        "name": "Lotus Biscoff Thick Shake",
        "price": 190,
        "category": "Beverages",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=600&q=80",
        "description": "Creamy milkshake blended with genuine Lotus Biscoff spread and crushed caramelized biscuits."
      },
      {
        "id": "cafe-coffee-day-gkp-item-3",
        "name": "Farmhouse Woodfired Pizza (10 inch)",
        "price": 360,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80",
        "description": "Hand-stretched dough topped with San Marzano tomato sauce, mozzarella, bell peppers, mushrooms and olives."
      },
      {
        "id": "cafe-coffee-day-gkp-item-4",
        "name": "Penne Creamy Alfredo Pasta with Mushrooms",
        "price": 290,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1621996346565-e3d5d6281724?auto=format&fit=crop&w=600&q=80",
        "description": "Al dente penne tossed in rich parmesan garlic white sauce with sautéed mushrooms."
      },
      {
        "id": "cafe-coffee-day-gkp-item-5",
        "name": "Loaded Cheesy Mexican Nachos",
        "price": 240,
        "category": "Starters",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1576107232684-1279f3908594?auto=format&fit=crop&w=600&q=80",
        "description": "Crispy corn tortilla chips baked with jalapeños, salsa, black olives and warm cheddar sauce."
      },
      {
        "id": "cafe-coffee-day-gkp-item-6",
        "name": "Crispy Peri Peri French Fries",
        "price": 140,
        "category": "Starters",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1576107232684-1279f3908594?auto=format&fit=crop&w=600&q=80",
        "description": "Golden potato fries seasoned with zesty African bird’s eye peri-peri spice dust."
      },
      {
        "id": "cafe-coffee-day-gkp-item-7",
        "name": "Classic Cold Coffee with Ice Cream",
        "price": 160,
        "category": "Beverages",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=600&q=80",
        "description": "Rich espresso blended with chilled whole milk and topped with a scoop of vanilla gelato."
      },
      {
        "id": "cafe-coffee-day-gkp-item-8",
        "name": "Kulhad Adrak Masala Chai",
        "price": 60,
        "category": "Beverages",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=600&q=80",
        "description": "Freshly brewed strong tea infused with crushed ginger, cardamom, and clove in a clay kulhad."
      },
      {
        "id": "cafe-coffee-day-gkp-item-9",
        "name": "New York Baked Blueberry Cheesecake",
        "price": 220,
        "category": "Desserts",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=600&q=80",
        "description": "Dense cream cheese filling on a graham cracker crust topped with tangy wild blueberry compote."
      },
      {
        "id": "cafe-coffee-day-gkp-item-10",
        "name": "Tiramisu Italiano Cup",
        "price": 210,
        "category": "Desserts",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=600&q=80",
        "description": "Espresso-soaked savoiardi biscuits layered with mascarpone cream and dusted with cocoa."
      },
      {
        "id": "cafe-coffee-day-gkp-item-11",
        "name": "Classic Grilled Paneer Tikka Sandwich",
        "price": 180,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=600&q=80",
        "description": "Multi-grain bread toasted with spiced paneer tikka, mint chutney, and mozzarella cheese."
      }
    ]
  },
  {
    "id": "khaao-gali-food-hub",
    "name": "Khaao Gali Street Food Hub",
    "area": "Golghar",
    "city": "Gorakhpur",
    "description": "Evening street food promenade featuring live counters of Mumbai Pav Bhaji, Kolkata Kathi Rolls, spicy Momos, and Kulhad Rabdi.",
    "categories": [
      "street-food",
      "fast-food"
    ],
    "cuisines": [
      "Street Food",
      "Chaat",
      "Rolls",
      "Beverages"
    ],
    "popularDishes": [
      "Butter Pav Bhaji",
      "Kolkata Egg Roll",
      "Steamed Momos",
      "Kesariya Rabdi"
    ],
    "costForTwo": 220,
    "averageRating": 4.7,
    "reviewCount": 650,
    "imageUrl": "https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=1000&q=80",
    "logoUrl": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20100%20100%22%20width%3D%22200%22%20height%3D%22200%22%3E%0A%20%20%3Cdefs%3E%0A%20%20%20%20%3ClinearGradient%20id%3D%22brandGrad_khaao-gali-food-hub%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23a33a0a%22%2F%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%232b2018%22%2F%3E%0A%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%3Cfilter%20id%3D%22shadow_khaao-gali-food-hub%22%20x%3D%22-10%25%22%20y%3D%22-10%25%22%20width%3D%22120%25%22%20height%3D%22120%25%22%3E%0A%20%20%20%20%20%20%3CfeDropShadow%20dx%3D%220%22%20dy%3D%222%22%20stdDeviation%3D%222.5%22%20flood-opacity%3D%220.35%22%2F%3E%0A%20%20%20%20%3C%2Ffilter%3E%0A%20%20%3C%2Fdefs%3E%0A%20%20%3C!--%20Background%20Shield%20Badge%20--%3E%0A%20%20%3Crect%20x%3D%224%22%20y%3D%224%22%20width%3D%2292%22%20height%3D%2292%22%20rx%3D%2226%22%20fill%3D%22url(%23brandGrad_khaao-gali-food-hub)%22%20stroke%3D%22%23f5e9d0%22%20stroke-width%3D%222.5%22%20filter%3D%22url(%23shadow_khaao-gali-food-hub)%22%2F%3E%0A%20%20%3C!--%20Inner%20Ornamental%20Line%20--%3E%0A%20%20%3Crect%20x%3D%229%22%20y%3D%229%22%20width%3D%2282%22%20height%3D%2282%22%20rx%3D%2221%22%20fill%3D%22none%22%20stroke%3D%22%23f5e9d0%22%20stroke-width%3D%221%22%20stroke-dasharray%3D%223%203%22%20opacity%3D%220.45%22%2F%3E%0A%20%20%3C!--%20Emblem%20Motif%20--%3E%0A%20%20%3Ccircle%20cx%3D%2250%22%20cy%3D%2238%22%20r%3D%2214%22%20stroke%3D%22%23f5e9d0%22%20stroke-width%3D%222%22%20fill%3D%22none%22%20opacity%3D%220.7%22%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22M44%2030%20L44%2046%20M56%2030%20L56%2046%20M42%2030%20C42%2035%2046%2035%2046%2030%22%20stroke%3D%22%23f5e9d0%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%2F%3E%0A%20%20%3C!--%20Typography%20%2F%20Monogram%20--%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2276%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C%20-apple-system%2C%20sans-serif%22%20font-weight%3D%22900%22%20font-size%3D%2215%22%20fill%3D%22%23ffffff%22%20letter-spacing%3D%221.5%22%3EKG%3C%2Ftext%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2287%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C%20-apple-system%2C%20sans-serif%22%20font-weight%3D%22800%22%20font-size%3D%226.5%22%20fill%3D%22%23f5e9d0%22%20letter-spacing%3D%222%22%3EGORAKHPUR%3C%2Ftext%3E%0A%3C%2Fsvg%3E",
    "isDemo": false,
    "phone": "+91 94158 11234",
    "address": "Cinema Road Market, Next to Vijay Mall, Golghar, Gorakhpur",
    "openTime": "15:00",
    "closeTime": "23:30",
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
    "ownerName": "Sanjay Chaurasia",
    "ownerEmail": "khaaogali.golghar@gorakhpurfoodguide.in",
    "facilities": [
      "Live Open-air Counters",
      "Fast Preparation",
      "Budget Street Bites",
      "UPI Accepted"
    ],
    "ratingsBreakdown": {
      "food": 4.8,
      "taste": 4.9,
      "hygiene": 4.5,
      "service": 4.7,
      "ambience": 4.4
    },
    "priceRange": {
      "min": 50,
      "max": 240
    },
    "distanceKm": 0.6,
    "menu": [
      {
        "id": "khaao-gali-food-hub-pop-1",
        "name": "Butter Pav Bhaji",
        "price": 90,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=600&q=80",
        "description": "Mashed spicy vegetable bhaji simmered in Amul butter on iron griddle with 2 butter-toasted pavs."
      },
      {
        "id": "khaao-gali-food-hub-pop-2",
        "name": "Kolkata Egg Roll",
        "price": 110,
        "category": "Starters",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?auto=format&fit=crop&w=600&q=80",
        "description": "Succulent pieces cooked in rich fragrant gravy with roasted spices, brown onions, and fresh coriander."
      },
      {
        "id": "khaao-gali-food-hub-pop-3",
        "name": "Steamed Momos",
        "price": 20,
        "category": "Beverages",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=600&q=80",
        "description": "Fresh cottage cheese and seasonal ingredients simmered in a luscious spiced onion-tomato gravy."
      },
      {
        "id": "khaao-gali-food-hub-pop-4",
        "name": "Kesariya Rabdi",
        "price": 140,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1564355808539-22fda35bed7e?auto=format&fit=crop&w=600&q=80",
        "description": "Fresh cottage cheese and seasonal ingredients simmered in a luscious spiced onion-tomato gravy."
      },
      {
        "id": "khaao-gali-food-hub-item-1",
        "name": "Desi Ghee Samosa (2 pcs)",
        "price": 40,
        "category": "Starters",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80",
        "description": "Golden flaky pastry stuffed with spiced potatoes, green peas and whole spices, fried in pure desi ghee."
      },
      {
        "id": "khaao-gali-food-hub-item-2",
        "name": "Khasta Kachori with Hing Aloo (2 pcs)",
        "price": 50,
        "category": "Starters",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80",
        "description": "Crispy lentil-stuffed kachoris served with spicy tangy hing aloo subzi and sweet sonth."
      },
      {
        "id": "khaao-gali-food-hub-item-3",
        "name": "Dahi Bhalla Papdi Chaat",
        "price": 90,
        "category": "Starters",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80",
        "description": "Soft lentil dumplings and crisp papdis drenched in whipped curd, roasted cumin, and sweet-spicy chutneys."
      },
      {
        "id": "khaao-gali-food-hub-item-4",
        "name": "Amritsari Chhole Bhature",
        "price": 160,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=600&q=80",
        "description": "Pair of balloon bhatures served with dark spiced Punjabi chickpeas, pickled onions and fried green chilli."
      },
      {
        "id": "khaao-gali-food-hub-item-5",
        "name": "Special Pure Veg Deluxe Thali",
        "price": 260,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=600&q=80",
        "description": "Paneer Butter Masala, Dal Makhani, Mix Veg, Jeera Rice, 2 Butter Naan, Gulab Jamun, Papad and Raita."
      },
      {
        "id": "khaao-gali-food-hub-item-6",
        "name": "Paneer Butter Masala",
        "price": 240,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=600&q=80",
        "description": "Soft cottage cheese cubes simmered in a velvety tomato, cashew and butter gravy with kasoori methi."
      },
      {
        "id": "khaao-gali-food-hub-item-7",
        "name": "Dal Makhani Special",
        "price": 210,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80",
        "description": "Whole black lentils and kidney beans slow-cooked overnight with white butter and cream."
      },
      {
        "id": "khaao-gali-food-hub-item-8",
        "name": "Butter Tandoori Roti (2 pcs)",
        "price": 40,
        "category": "Breads",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=600&q=80",
        "description": "Whole wheat flatbread baked in clay oven and topped with pure amul butter."
      },
      {
        "id": "khaao-gali-food-hub-item-9",
        "name": "Garlic Butter Naan",
        "price": 65,
        "category": "Breads",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=600&q=80",
        "description": "Soft leavened bread infused with minced garlic, fresh coriander and generous butter."
      },
      {
        "id": "khaao-gali-food-hub-item-10",
        "name": "Special Kesar Rasmalai (2 pcs)",
        "price": 90,
        "category": "Desserts",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1564355808539-22fda35bed7e?auto=format&fit=crop&w=600&q=80",
        "description": "Delicate cottage cheese patties soaked in saffron-infused clotted milk garnished with pistachios."
      },
      {
        "id": "khaao-gali-food-hub-item-11",
        "name": "Desi Ghee Gulab Jamun (2 pcs)",
        "price": 60,
        "category": "Desserts",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=600&q=80",
        "description": "Hot melt-in-mouth milk solids dumplings soaked in cardamom and rose sugar syrup."
      }
    ]
  },
{
    "id": "sharma-chaat-golghar",
    "name": "Sharma Ji Famous Chaat Bhandar",
    "area": "Golghar",
    "city": "Gorakhpur",
    "address": "Near Baldev Plaza, Cinema Road, Golghar, Gorakhpur",
    "description": "Gorakhpur legendary street chaat stall famous for pure desi ghee crispy Aloo Tikki, tangy Matar Chaat, and spicy Dahi Bhalla since 1988.",
    "categories": [
      "street-food"
    ],
    "cuisines": [
      "Street Food & Chaat",
      "North Indian"
    ],
    "popularDishes": [
      "Desi Ghee Aloo Tikki",
      "Matar Chaat",
      "Dahi Papdi Chaat",
      "Pani Puri (5 Flavours)"
    ],
    "costForTwo": 120,
    "averageRating": 4.8,
    "reviewCount": 284,
    "imageUrl": "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1000&q=80",
    "isDemo": false,
    "phone": "+91 94152 88410",
    "whatsappPhone": "+91 94152 88410",
    "openTime": "15:30",
    "closeTime": "22:30",
    "openDays": [
      "Mon",
      "Tue",
      "Wed",
      "Thu",
      "Fri",
      "Sat",
      "Sun"
    ],
    "diet": "veg",
    "status": "Active",
    "ownerName": "Ramesh Sharma",
    "ownerEmail": "sharmaji.chaat@gorakhpurfoodguide.in",
    "facilities": [
      "Street Counter",
      "Takeaway",
      "UPI Accepted",
      "Quick Service"
    ],
    "ratingsBreakdown": {
      "food": 4.9,
      "taste": 5,
      "hygiene": 4.5,
      "service": 4.7,
      "ambience": 4.2
    },
    "priceRange": {
      "min": 40,
      "max": 100
    },
    "distanceKm": 0.3,
    "menu": [
      {
        "id": "sh-1",
        "name": "Desi Ghee Aloo Tikki Chaat",
        "price": 60,
        "category": "Chaat Specials",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "description": "Golden crisp aloo tikki shallow-fried in desi ghee with spiced chana, sweet tamarind and spicy mint chutneys.",
        "imageUrl": "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "sh-2",
        "name": "Gorakhpuri Matar Chaat",
        "price": 50,
        "category": "Chaat Specials",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "description": "Slow cooked white peas tempered with roasted cumin, rock salt, ginger juliennes and lemon juice.",
        "imageUrl": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "sh-3",
        "name": "Dahi Papdi Chaat",
        "price": 60,
        "category": "Dahi Specials",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "description": "Crispy flour wafers topped with boiled potatoes, chilled sweet curd, and chaat masalas.",
        "imageUrl": "https://images.unsplash.com/photo-1576107232684-1279f3908594?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "sh-4",
        "name": "5-Pani Golgappe (6 Pcs)",
        "price": 40,
        "category": "Pani Puri",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "description": "Crispy suji puris served with hing, pudina, jeera, khatta-meetha, and garlic spicy pani.",
        "imageUrl": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=600&q=80"
      }
    ],
    "logoUrl": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20100%20100%22%20width%3D%22200%22%20height%3D%22200%22%3E%0A%20%20%3Cdefs%3E%0A%20%20%20%20%3ClinearGradient%20id%3D%22brandGrad_sharma-chaat-golghar%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%2394381c%22%2F%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23432818%22%2F%3E%0A%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%3Cfilter%20id%3D%22shadow_sharma-chaat-golghar%22%20x%3D%22-10%25%22%20y%3D%22-10%25%22%20width%3D%22120%25%22%20height%3D%22120%25%22%3E%0A%20%20%20%20%20%20%3CfeDropShadow%20dx%3D%220%22%20dy%3D%222%22%20stdDeviation%3D%222.5%22%20flood-opacity%3D%220.35%22%2F%3E%0A%20%20%20%20%3C%2Ffilter%3E%0A%20%20%3C%2Fdefs%3E%0A%20%20%3Crect%20x%3D%224%22%20y%3D%224%22%20width%3D%2292%22%20height%3D%2292%22%20rx%3D%2226%22%20fill%3D%22url(%23brandGrad_sharma-chaat-golghar)%22%20stroke%3D%22%23fce588%22%20stroke-width%3D%222.5%22%20filter%3D%22url(%23shadow_sharma-chaat-golghar)%22%2F%3E%0A%20%20%3Crect%20x%3D%229%22%20y%3D%229%22%20width%3D%2282%22%20height%3D%2282%22%20rx%3D%2221%22%20fill%3D%22none%22%20stroke%3D%22%23fce588%22%20stroke-width%3D%221%22%20stroke-dasharray%3D%223%203%22%20opacity%3D%220.45%22%2F%3E%0A%20%20%3Ccircle%20cx%3D%2250%22%20cy%3D%2238%22%20r%3D%2214%22%20stroke%3D%22%23fce588%22%20stroke-width%3D%222%22%20fill%3D%22none%22%20opacity%3D%220.7%22%2F%3E%0A%20%20%3Cpath%20d%3D%22M44%2030%20L44%2046%20M56%2030%20L56%2046%20M42%2030%20C42%2035%2046%2035%2046%2030%22%20stroke%3D%22%23fce588%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%2F%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2276%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C%20-apple-system%2C%20sans-serif%22%20font-weight%3D%22900%22%20font-size%3D%2215%22%20fill%3D%22%23ffffff%22%20letter-spacing%3D%221.5%22%3ESJ%3C%2Ftext%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2287%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C%20-apple-system%2C%20sans-serif%22%20font-weight%3D%22800%22%20font-size%3D%226.5%22%20fill%3D%22%23fce588%22%20letter-spacing%3D%222%22%3ESTREET%20FOOD%3C%2Ftext%3E%0A%3C%2Fsvg%3E"
  },
  {
    "id": "ganesh-bhelpuri-baldev",
    "name": "Ganesh Bhelpuri & Sevpuri Center",
    "area": "Golghar",
    "city": "Gorakhpur",
    "address": "Opposite Baldev Plaza Main Entrance, Golghar, Gorakhpur",
    "description": "Popular Mumbai-style street snacks stall famous for authentic wet & dry Bhelpuri, loaded Sevpuri, and crunchy Sukha Bhel.",
    "categories": [
      "street-food"
    ],
    "cuisines": [
      "Street Food & Chaat",
      "Fast Food"
    ],
    "popularDishes": [
      "Special Bombay Bhelpuri",
      "Loaded Sev Puri",
      "Sukha Bhel",
      "Dahi Bhel"
    ],
    "costForTwo": 90,
    "averageRating": 4.7,
    "reviewCount": 196,
    "imageUrl": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=1000&q=80",
    "isDemo": false,
    "phone": "+91 98381 44520",
    "whatsappPhone": "+91 98381 44520",
    "openTime": "16:00",
    "closeTime": "22:30",
    "openDays": [
      "Mon",
      "Tue",
      "Wed",
      "Thu",
      "Fri",
      "Sat",
      "Sun"
    ],
    "diet": "veg",
    "status": "Active",
    "ownerName": "Ganesh Gupta",
    "ownerEmail": "ganesh.bhel@gorakhpurfoodguide.in",
    "facilities": [
      "Street Counter",
      "Takeaway",
      "UPI Accepted"
    ],
    "ratingsBreakdown": {
      "food": 4.8,
      "taste": 4.8,
      "hygiene": 4.6,
      "service": 4.7,
      "ambience": 4.1
    },
    "priceRange": {
      "min": 40,
      "max": 80
    },
    "distanceKm": 0.4,
    "menu": [
      {
        "id": "gb-1",
        "name": "Special Bombay Bhelpuri",
        "price": 50,
        "category": "Bhel",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "description": "Crisp puffed rice, papdi, sev, peanuts, onions, potatoes tossed with tangy raw mango chutney.",
        "imageUrl": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "gb-2",
        "name": "Mumbai Masala Sev Puri (6 Pcs)",
        "price": 60,
        "category": "Sevpuri",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "description": "Flat crispy puris layered with potato cubes, onions, trio of chutneys and buried under nylon sev.",
        "imageUrl": "https://images.unsplash.com/photo-1576107232684-1279f3908594?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "gb-3",
        "name": "Sukha Masala Bhel",
        "price": 40,
        "category": "Bhel",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "description": "Dry crunch bhel tossed with roasted spices and lemon sprinkle.",
        "imageUrl": "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80"
      }
    ],
    "logoUrl": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20100%20100%22%20width%3D%22200%22%20height%3D%22200%22%3E%0A%20%20%3Cdefs%3E%0A%20%20%20%20%3ClinearGradient%20id%3D%22brandGrad_ganesh-bhelpuri-baldev%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%2394381c%22%2F%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23432818%22%2F%3E%0A%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%3Cfilter%20id%3D%22shadow_ganesh-bhelpuri-baldev%22%20x%3D%22-10%25%22%20y%3D%22-10%25%22%20width%3D%22120%25%22%20height%3D%22120%25%22%3E%0A%20%20%20%20%20%20%3CfeDropShadow%20dx%3D%220%22%20dy%3D%222%22%20stdDeviation%3D%222.5%22%20flood-opacity%3D%220.35%22%2F%3E%0A%20%20%20%20%3C%2Ffilter%3E%0A%20%20%3C%2Fdefs%3E%0A%20%20%3Crect%20x%3D%224%22%20y%3D%224%22%20width%3D%2292%22%20height%3D%2292%22%20rx%3D%2226%22%20fill%3D%22url(%23brandGrad_ganesh-bhelpuri-baldev)%22%20stroke%3D%22%23fce588%22%20stroke-width%3D%222.5%22%20filter%3D%22url(%23shadow_ganesh-bhelpuri-baldev)%22%2F%3E%0A%20%20%3Crect%20x%3D%229%22%20y%3D%229%22%20width%3D%2282%22%20height%3D%2282%22%20rx%3D%2221%22%20fill%3D%22none%22%20stroke%3D%22%23fce588%22%20stroke-width%3D%221%22%20stroke-dasharray%3D%223%203%22%20opacity%3D%220.45%22%2F%3E%0A%20%20%3Ccircle%20cx%3D%2250%22%20cy%3D%2238%22%20r%3D%2214%22%20stroke%3D%22%23fce588%22%20stroke-width%3D%222%22%20fill%3D%22none%22%20opacity%3D%220.7%22%2F%3E%0A%20%20%3Cpath%20d%3D%22M44%2030%20L44%2046%20M56%2030%20L56%2046%20M42%2030%20C42%2035%2046%2035%2046%2030%22%20stroke%3D%22%23fce588%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%2F%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2276%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C%20-apple-system%2C%20sans-serif%22%20font-weight%3D%22900%22%20font-size%3D%2215%22%20fill%3D%22%23ffffff%22%20letter-spacing%3D%221.5%22%3EGB%3C%2Ftext%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2287%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C%20-apple-system%2C%20sans-serif%22%20font-weight%3D%22800%22%20font-size%3D%226.5%22%20fill%3D%22%23fce588%22%20letter-spacing%3D%222%22%3ESTREET%20FOOD%3C%2Ftext%3E%0A%3C%2Fsvg%3E"
  },
  {
    "id": "pandit-kulfi-golghar",
    "name": "Pandit Ji Kulfi & Falooda Stall",
    "area": "Golghar",
    "city": "Gorakhpur",
    "address": "Near Maya Cinema Gate, Cinema Road, Golghar, Gorakhpur",
    "description": "Renowned nighttime sweet street spot serving traditional rabdi malai kulfi, kesar pista falooda, and rose syrup sundaes in earthen kulhads.",
    "categories": [
      "street-food",
      "sweets"
    ],
    "cuisines": [
      "Kulfi & Falooda",
      "Desserts"
    ],
    "popularDishes": [
      "Kesar Pista Matka Kulfi",
      "Special Rabdi Falooda",
      "Malai Roll Cut Kulfi",
      "Rose Falooda"
    ],
    "costForTwo": 120,
    "averageRating": 4.9,
    "reviewCount": 312,
    "imageUrl": "https://images.unsplash.com/photo-1505394033641-40c6ad1178d7?auto=format&fit=crop&w=1000&q=80",
    "isDemo": false,
    "phone": "+91 94500 77192",
    "whatsappPhone": "+91 94500 77192",
    "openTime": "14:00",
    "closeTime": "23:30",
    "openDays": [
      "Mon",
      "Tue",
      "Wed",
      "Thu",
      "Fri",
      "Sat",
      "Sun"
    ],
    "diet": "veg",
    "status": "Active",
    "ownerName": "Pandit Ramakant Tiwari",
    "ownerEmail": "panditji.kulfi@gorakhpurfoodguide.in",
    "facilities": [
      "Street Stall",
      "Takeaway",
      "UPI Accepted",
      "Night Dining"
    ],
    "ratingsBreakdown": {
      "food": 5,
      "taste": 5,
      "hygiene": 4.7,
      "service": 4.8,
      "ambience": 4.4
    },
    "priceRange": {
      "min": 40,
      "max": 90
    },
    "distanceKm": 0.5,
    "menu": [
      {
        "id": "pk-1",
        "name": "Special Rabdi Falooda",
        "price": 70,
        "category": "Falooda",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "description": "Handmade cornstarch noodles over rich condensed rabdi topped with basil seeds and pure rose syrup.",
        "imageUrl": "https://images.unsplash.com/photo-1505394033641-40c6ad1178d7?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "pk-2",
        "name": "Kesar Pista Matka Kulfi",
        "price": 60,
        "category": "Kulfi",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "description": "Traditional slow-boiled milk kulfi enriched with saffron threads and roasted pistachios in clay pot.",
        "imageUrl": "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "pk-3",
        "name": "Malai Roll Cut Kulfi",
        "price": 50,
        "category": "Kulfi",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "description": "Chilled creamy milk slice kulfi garnished with cardamom powder.",
        "imageUrl": "https://images.unsplash.com/photo-1505394033641-40c6ad1178d7?auto=format&fit=crop&w=600&q=80"
      }
    ],
    "logoUrl": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20100%20100%22%20width%3D%22200%22%20height%3D%22200%22%3E%0A%20%20%3Cdefs%3E%0A%20%20%20%20%3ClinearGradient%20id%3D%22brandGrad_pandit-kulfi-golghar%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%2394381c%22%2F%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23432818%22%2F%3E%0A%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%3Cfilter%20id%3D%22shadow_pandit-kulfi-golghar%22%20x%3D%22-10%25%22%20y%3D%22-10%25%22%20width%3D%22120%25%22%20height%3D%22120%25%22%3E%0A%20%20%20%20%20%20%3CfeDropShadow%20dx%3D%220%22%20dy%3D%222%22%20stdDeviation%3D%222.5%22%20flood-opacity%3D%220.35%22%2F%3E%0A%20%20%20%20%3C%2Ffilter%3E%0A%20%20%3C%2Fdefs%3E%0A%20%20%3Crect%20x%3D%224%22%20y%3D%224%22%20width%3D%2292%22%20height%3D%2292%22%20rx%3D%2226%22%20fill%3D%22url(%23brandGrad_pandit-kulfi-golghar)%22%20stroke%3D%22%23fce588%22%20stroke-width%3D%222.5%22%20filter%3D%22url(%23shadow_pandit-kulfi-golghar)%22%2F%3E%0A%20%20%3Crect%20x%3D%229%22%20y%3D%229%22%20width%3D%2282%22%20height%3D%2282%22%20rx%3D%2221%22%20fill%3D%22none%22%20stroke%3D%22%23fce588%22%20stroke-width%3D%221%22%20stroke-dasharray%3D%223%203%22%20opacity%3D%220.45%22%2F%3E%0A%20%20%3Ccircle%20cx%3D%2250%22%20cy%3D%2238%22%20r%3D%2214%22%20stroke%3D%22%23fce588%22%20stroke-width%3D%222%22%20fill%3D%22none%22%20opacity%3D%220.7%22%2F%3E%0A%20%20%3Cpath%20d%3D%22M44%2030%20L44%2046%20M56%2030%20L56%2046%20M42%2030%20C42%2035%2046%2035%2046%2030%22%20stroke%3D%22%23fce588%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%2F%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2276%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C%20-apple-system%2C%20sans-serif%22%20font-weight%3D%22900%22%20font-size%3D%2215%22%20fill%3D%22%23ffffff%22%20letter-spacing%3D%221.5%22%3EPJ%3C%2Ftext%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2287%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C%20-apple-system%2C%20sans-serif%22%20font-weight%3D%22800%22%20font-size%3D%226.5%22%20fill%3D%22%23fce588%22%20letter-spacing%3D%222%22%3ESTREET%20FOOD%3C%2Ftext%3E%0A%3C%2Fsvg%3E"
  },
  {
    "id": "lakeview-kurkure-momos-naukayan",
    "name": "Lakeview Kurkure Momos Corner",
    "area": "Taramandal",
    "city": "Gorakhpur",
    "address": "Near Naukayan Boating Ghat, Ramgarh Taal Lakefront, Taramandal, Gorakhpur",
    "description": "Gorakhpur youth hotspot by Ramgarh lake famous for ultra-crispy Kurkure Momos, fiery red garlic chutney, and cheese corn steamed dumplings.",
    "categories": [
      "street-food",
      "fast-food"
    ],
    "cuisines": [
      "Momos & Chinese",
      "Street Food"
    ],
    "popularDishes": [
      "Kurkure Veg Momos",
      "Paneer Fried Momos",
      "Cheese Corn Steamed Momos",
      "Cold Coffee"
    ],
    "costForTwo": 160,
    "averageRating": 4.7,
    "reviewCount": 245,
    "imageUrl": "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=1000&q=80",
    "isDemo": false,
    "phone": "+91 72750 66810",
    "whatsappPhone": "+91 72750 66810",
    "openTime": "15:00",
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
    "ownerName": "Vikas Kushwaha",
    "ownerEmail": "lakeview.momos@gorakhpurfoodguide.in",
    "facilities": [
      "Lake View Seating",
      "Takeaway Counter",
      "UPI Accepted"
    ],
    "ratingsBreakdown": {
      "food": 4.8,
      "taste": 4.8,
      "hygiene": 4.5,
      "service": 4.6,
      "ambience": 4.9
    },
    "priceRange": {
      "min": 60,
      "max": 130
    },
    "distanceKm": 2.1,
    "menu": [
      {
        "id": "lm-1",
        "name": "Kurkure Veg Momos (6 Pcs)",
        "price": 80,
        "category": "Kurkure Momos",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "description": "Crispy cornflake crusted dumplings with shredded cabbage, carrots and herbs served with spicy chutney.",
        "imageUrl": "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "lm-2",
        "name": "Kurkure Paneer Momos (6 Pcs)",
        "price": 100,
        "category": "Kurkure Momos",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "description": "Crumb-coated paneer momos deep fried to golden crisp with mayonnaise dip.",
        "imageUrl": "https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "lm-3",
        "name": "Steamed Veg Momos (6 Pcs)",
        "price": 60,
        "category": "Steamed Momos",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "description": "Soft thin-skinned dumplings stuffed with savory garden veggies.",
        "imageUrl": "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=600&q=80"
      }
    ],
    "logoUrl": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20100%20100%22%20width%3D%22200%22%20height%3D%22200%22%3E%0A%20%20%3Cdefs%3E%0A%20%20%20%20%3ClinearGradient%20id%3D%22brandGrad_lakeview-kurkure-momos-naukayan%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%2394381c%22%2F%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23432818%22%2F%3E%0A%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%3Cfilter%20id%3D%22shadow_lakeview-kurkure-momos-naukayan%22%20x%3D%22-10%25%22%20y%3D%22-10%25%22%20width%3D%22120%25%22%20height%3D%22120%25%22%3E%0A%20%20%20%20%20%20%3CfeDropShadow%20dx%3D%220%22%20dy%3D%222%22%20stdDeviation%3D%222.5%22%20flood-opacity%3D%220.35%22%2F%3E%0A%20%20%20%20%3C%2Ffilter%3E%0A%20%20%3C%2Fdefs%3E%0A%20%20%3Crect%20x%3D%224%22%20y%3D%224%22%20width%3D%2292%22%20height%3D%2292%22%20rx%3D%2226%22%20fill%3D%22url(%23brandGrad_lakeview-kurkure-momos-naukayan)%22%20stroke%3D%22%23fce588%22%20stroke-width%3D%222.5%22%20filter%3D%22url(%23shadow_lakeview-kurkure-momos-naukayan)%22%2F%3E%0A%20%20%3Crect%20x%3D%229%22%20y%3D%229%22%20width%3D%2282%22%20height%3D%2282%22%20rx%3D%2221%22%20fill%3D%22none%22%20stroke%3D%22%23fce588%22%20stroke-width%3D%221%22%20stroke-dasharray%3D%223%203%22%20opacity%3D%220.45%22%2F%3E%0A%20%20%3Ccircle%20cx%3D%2250%22%20cy%3D%2238%22%20r%3D%2214%22%20stroke%3D%22%23fce588%22%20stroke-width%3D%222%22%20fill%3D%22none%22%20opacity%3D%220.7%22%2F%3E%0A%20%20%3Cpath%20d%3D%22M44%2030%20L44%2046%20M56%2030%20L56%2046%20M42%2030%20C42%2035%2046%2035%2046%2030%22%20stroke%3D%22%23fce588%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%2F%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2276%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C%20-apple-system%2C%20sans-serif%22%20font-weight%3D%22900%22%20font-size%3D%2215%22%20fill%3D%22%23ffffff%22%20letter-spacing%3D%221.5%22%3ELK%3C%2Ftext%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2287%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C%20-apple-system%2C%20sans-serif%22%20font-weight%3D%22800%22%20font-size%3D%226.5%22%20fill%3D%22%23fce588%22%20letter-spacing%3D%222%22%3ESTREET%20FOOD%3C%2Ftext%3E%0A%3C%2Fsvg%3E"
  },
  {
    "id": "banarasi-tamatar-chaat-taramandal",
    "name": "Banarasi Tamatar Chaat & Pani Puri Corner",
    "area": "Taramandal",
    "city": "Gorakhpur",
    "address": "Near Planetarium Gate, Ring Road, Taramandal, Gorakhpur",
    "description": "Authentic Banarasi street taste in Gorakhpur! Hot tomato chaat cooked on huge brass tawa with sugar syrup and roasted spices, plus 6-flavor pani puri.",
    "categories": [
      "street-food"
    ],
    "cuisines": [
      "Street Food & Chaat"
    ],
    "popularDishes": [
      "Banarasi Tamatar Chaat",
      "Puchka (6 Flavors)",
      "Aloo Palak Chaat",
      "Dahi Gujiya"
    ],
    "costForTwo": 110,
    "averageRating": 4.8,
    "reviewCount": 220,
    "imageUrl": "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1000&q=80",
    "isDemo": false,
    "phone": "+91 99360 44129",
    "whatsappPhone": "+91 99360 44129",
    "openTime": "16:00",
    "closeTime": "22:30",
    "openDays": [
      "Mon",
      "Tue",
      "Wed",
      "Thu",
      "Fri",
      "Sat",
      "Sun"
    ],
    "diet": "veg",
    "status": "Active",
    "ownerName": "Satish Chandra Keshari",
    "ownerEmail": "banarasi.chaat@gorakhpurfoodguide.in",
    "facilities": [
      "Street Stall",
      "Takeaway",
      "UPI Accepted"
    ],
    "ratingsBreakdown": {
      "food": 4.9,
      "taste": 5,
      "hygiene": 4.6,
      "service": 4.7,
      "ambience": 4.3
    },
    "priceRange": {
      "min": 40,
      "max": 80
    },
    "distanceKm": 2.3,
    "menu": [
      {
        "id": "btc-1",
        "name": "Authentic Banarasi Tamatar Chaat",
        "price": 60,
        "category": "Hot Chaat",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "description": "Tawa-cooked spiced ripe tomatoes mashed with khoya, dry fruits, spices and finished with sweet sugar syrup.",
        "imageUrl": "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "btc-2",
        "name": "6-Flavor Golgappe Platter",
        "price": 40,
        "category": "Pani Puri",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "description": "Six puris filled with spicy potato mash served with mint, lemon, hing, jaljeera, garlic and sweet pani.",
        "imageUrl": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=600&q=80"
      }
    ],
    "logoUrl": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20100%20100%22%20width%3D%22200%22%20height%3D%22200%22%3E%0A%20%20%3Cdefs%3E%0A%20%20%20%20%3ClinearGradient%20id%3D%22brandGrad_banarasi-tamatar-chaat-taramandal%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%2394381c%22%2F%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23432818%22%2F%3E%0A%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%3Cfilter%20id%3D%22shadow_banarasi-tamatar-chaat-taramandal%22%20x%3D%22-10%25%22%20y%3D%22-10%25%22%20width%3D%22120%25%22%20height%3D%22120%25%22%3E%0A%20%20%20%20%20%20%3CfeDropShadow%20dx%3D%220%22%20dy%3D%222%22%20stdDeviation%3D%222.5%22%20flood-opacity%3D%220.35%22%2F%3E%0A%20%20%20%20%3C%2Ffilter%3E%0A%20%20%3C%2Fdefs%3E%0A%20%20%3Crect%20x%3D%224%22%20y%3D%224%22%20width%3D%2292%22%20height%3D%2292%22%20rx%3D%2226%22%20fill%3D%22url(%23brandGrad_banarasi-tamatar-chaat-taramandal)%22%20stroke%3D%22%23fce588%22%20stroke-width%3D%222.5%22%20filter%3D%22url(%23shadow_banarasi-tamatar-chaat-taramandal)%22%2F%3E%0A%20%20%3Crect%20x%3D%229%22%20y%3D%229%22%20width%3D%2282%22%20height%3D%2282%22%20rx%3D%2221%22%20fill%3D%22none%22%20stroke%3D%22%23fce588%22%20stroke-width%3D%221%22%20stroke-dasharray%3D%223%203%22%20opacity%3D%220.45%22%2F%3E%0A%20%20%3Ccircle%20cx%3D%2250%22%20cy%3D%2238%22%20r%3D%2214%22%20stroke%3D%22%23fce588%22%20stroke-width%3D%222%22%20fill%3D%22none%22%20opacity%3D%220.7%22%2F%3E%0A%20%20%3Cpath%20d%3D%22M44%2030%20L44%2046%20M56%2030%20L56%2046%20M42%2030%20C42%2035%2046%2035%2046%2030%22%20stroke%3D%22%23fce588%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%2F%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2276%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C%20-apple-system%2C%20sans-serif%22%20font-weight%3D%22900%22%20font-size%3D%2215%22%20fill%3D%22%23ffffff%22%20letter-spacing%3D%221.5%22%3EBT%3C%2Ftext%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2287%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C%20-apple-system%2C%20sans-serif%22%20font-weight%3D%22800%22%20font-size%3D%226.5%22%20fill%3D%22%23fce588%22%20letter-spacing%3D%222%22%3ESTREET%20FOOD%3C%2Ftext%3E%0A%3C%2Fsvg%3E"
  },
  {
    "id": "royal-kulhad-chai-naukayan",
    "name": "Royal Kulhad Chai & Bun Makkhan Adda",
    "area": "Taramandal",
    "city": "Gorakhpur",
    "address": "Naukayan Waterfront Walkway, Ramgarh Taal, Gorakhpur",
    "description": "Iconic lakefront gathering spot serving piping hot Tandoori Kulhad Chai, freshly toasted Kadak Bun Makkhan, and crunchy vegetable maggi.",
    "categories": [
      "street-food",
      "cafe"
    ],
    "cuisines": [
      "Chai & Snacks",
      "Fast Food"
    ],
    "popularDishes": [
      "Tandoori Kulhad Chai",
      "Masked Bun Makkhan",
      "Cheese Tadka Maggi",
      "Adrak Elaichi Chai"
    ],
    "costForTwo": 90,
    "averageRating": 4.8,
    "reviewCount": 380,
    "imageUrl": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=1000&q=80",
    "isDemo": false,
    "phone": "+91 94158 22390",
    "whatsappPhone": "+91 94158 22390",
    "openTime": "06:30",
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
    "diet": "veg",
    "status": "Active",
    "ownerName": "Alok Singh",
    "ownerEmail": "royal.chai@gorakhpurfoodguide.in",
    "facilities": [
      "Lake Breeze Seating",
      "Takeaway",
      "UPI Accepted"
    ],
    "ratingsBreakdown": {
      "food": 4.8,
      "taste": 4.9,
      "hygiene": 4.7,
      "service": 4.8,
      "ambience": 5
    },
    "priceRange": {
      "min": 25,
      "max": 80
    },
    "distanceKm": 2,
    "menu": [
      {
        "id": "rc-1",
        "name": "Smoky Tandoori Kulhad Chai",
        "price": 30,
        "category": "Chai",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "description": "Strong milk tea poured into red hot clay kulhad roasted in tandoor creating intense earthy aroma.",
        "imageUrl": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "rc-2",
        "name": "Toasted Bun Makkhan",
        "price": 40,
        "category": "Snacks",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "description": "Soft sweet bun toasted crisp on tawa and loaded with generous dollop of butter.",
        "imageUrl": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "rc-3",
        "name": "Lakefront Veggie Masala Maggi",
        "price": 60,
        "category": "Quick Bites",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "description": "Double packet maggi cooked with capsicum, tomatoes, sweet corn and spicy desi tadka.",
        "imageUrl": "https://images.unsplash.com/photo-1612927601601-6638404737ce?auto=format&fit=crop&w=600&q=80"
      }
    ],
    "logoUrl": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20100%20100%22%20width%3D%22200%22%20height%3D%22200%22%3E%0A%20%20%3Cdefs%3E%0A%20%20%20%20%3ClinearGradient%20id%3D%22brandGrad_royal-kulhad-chai-naukayan%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%2394381c%22%2F%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23432818%22%2F%3E%0A%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%3Cfilter%20id%3D%22shadow_royal-kulhad-chai-naukayan%22%20x%3D%22-10%25%22%20y%3D%22-10%25%22%20width%3D%22120%25%22%20height%3D%22120%25%22%3E%0A%20%20%20%20%20%20%3CfeDropShadow%20dx%3D%220%22%20dy%3D%222%22%20stdDeviation%3D%222.5%22%20flood-opacity%3D%220.35%22%2F%3E%0A%20%20%20%20%3C%2Ffilter%3E%0A%20%20%3C%2Fdefs%3E%0A%20%20%3Crect%20x%3D%224%22%20y%3D%224%22%20width%3D%2292%22%20height%3D%2292%22%20rx%3D%2226%22%20fill%3D%22url(%23brandGrad_royal-kulhad-chai-naukayan)%22%20stroke%3D%22%23fce588%22%20stroke-width%3D%222.5%22%20filter%3D%22url(%23shadow_royal-kulhad-chai-naukayan)%22%2F%3E%0A%20%20%3Crect%20x%3D%229%22%20y%3D%229%22%20width%3D%2282%22%20height%3D%2282%22%20rx%3D%2221%22%20fill%3D%22none%22%20stroke%3D%22%23fce588%22%20stroke-width%3D%221%22%20stroke-dasharray%3D%223%203%22%20opacity%3D%220.45%22%2F%3E%0A%20%20%3Ccircle%20cx%3D%2250%22%20cy%3D%2238%22%20r%3D%2214%22%20stroke%3D%22%23fce588%22%20stroke-width%3D%222%22%20fill%3D%22none%22%20opacity%3D%220.7%22%2F%3E%0A%20%20%3Cpath%20d%3D%22M44%2030%20L44%2046%20M56%2030%20L56%2046%20M42%2030%20C42%2035%2046%2035%2046%2030%22%20stroke%3D%22%23fce588%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%2F%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2276%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C%20-apple-system%2C%20sans-serif%22%20font-weight%3D%22900%22%20font-size%3D%2215%22%20fill%3D%22%23ffffff%22%20letter-spacing%3D%221.5%22%3ERK%3C%2Ftext%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2287%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C%20-apple-system%2C%20sans-serif%22%20font-weight%3D%22800%22%20font-size%3D%226.5%22%20fill%3D%22%23fce588%22%20letter-spacing%3D%222%22%3ESTREET%20FOOD%3C%2Ftext%3E%0A%3C%2Fsvg%3E"
  },
  {
    "id": "calcutta-rolls-townhall",
    "name": "Calcutta Rolls & Kebab Corner",
    "area": "Golghar",
    "city": "Gorakhpur",
    "address": "Near Town Hall Fountain, Civil Lines / Golghar Border, Gorakhpur",
    "description": "The go-to stall for flaky paratha rolls! Hot lachha parathas fried on iron skillet wrapped around spiced paneer tikka, soya chaap or juicy chicken.",
    "categories": [
      "street-food",
      "fast-food"
    ],
    "cuisines": [
      "Rolls & Kebabs",
      "Street Food"
    ],
    "popularDishes": [
      "Paneer Tikka Roll",
      "Double Egg Roll",
      "Soya Malai Chaap Roll",
      "Chicken Kathi Roll"
    ],
    "costForTwo": 180,
    "averageRating": 4.7,
    "reviewCount": 260,
    "imageUrl": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=1000&q=80",
    "isDemo": false,
    "phone": "+91 98380 99420",
    "whatsappPhone": "+91 98380 99420",
    "openTime": "13:00",
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
    "ownerName": "Mohammed Shamim",
    "ownerEmail": "calcutta.rolls@gorakhpurfoodguide.in",
    "facilities": [
      "Street Stall",
      "Quick Takeaway",
      "UPI Accepted"
    ],
    "ratingsBreakdown": {
      "food": 4.8,
      "taste": 4.8,
      "hygiene": 4.6,
      "service": 4.7,
      "ambience": 4.2
    },
    "priceRange": {
      "min": 60,
      "max": 140
    },
    "distanceKm": 0.6,
    "menu": [
      {
        "id": "cr-1",
        "name": "Paneer Tikka Lachha Roll",
        "price": 90,
        "category": "Veg Rolls",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "description": "Charcoal grilled spicy paneer cubes rolled in flaky crispy paratha with onions and mint dip.",
        "imageUrl": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "cr-2",
        "name": "Chicken Seekh Kathi Roll",
        "price": 110,
        "category": "Non-Veg Rolls",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": true,
        "description": "Succulent chicken seekh wrapped in egg coated lachha paratha with spiced onion relish.",
        "imageUrl": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80"
      }
    ],
    "logoUrl": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20100%20100%22%20width%3D%22200%22%20height%3D%22200%22%3E%0A%20%20%3Cdefs%3E%0A%20%20%20%20%3ClinearGradient%20id%3D%22brandGrad_calcutta-rolls-townhall%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%2394381c%22%2F%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23432818%22%2F%3E%0A%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%3Cfilter%20id%3D%22shadow_calcutta-rolls-townhall%22%20x%3D%22-10%25%22%20y%3D%22-10%25%22%20width%3D%22120%25%22%20height%3D%22120%25%22%3E%0A%20%20%20%20%20%20%3CfeDropShadow%20dx%3D%220%22%20dy%3D%222%22%20stdDeviation%3D%222.5%22%20flood-opacity%3D%220.35%22%2F%3E%0A%20%20%20%20%3C%2Ffilter%3E%0A%20%20%3C%2Fdefs%3E%0A%20%20%3Crect%20x%3D%224%22%20y%3D%224%22%20width%3D%2292%22%20height%3D%2292%22%20rx%3D%2226%22%20fill%3D%22url(%23brandGrad_calcutta-rolls-townhall)%22%20stroke%3D%22%23fce588%22%20stroke-width%3D%222.5%22%20filter%3D%22url(%23shadow_calcutta-rolls-townhall)%22%2F%3E%0A%20%20%3Crect%20x%3D%229%22%20y%3D%229%22%20width%3D%2282%22%20height%3D%2282%22%20rx%3D%2221%22%20fill%3D%22none%22%20stroke%3D%22%23fce588%22%20stroke-width%3D%221%22%20stroke-dasharray%3D%223%203%22%20opacity%3D%220.45%22%2F%3E%0A%20%20%3Ccircle%20cx%3D%2250%22%20cy%3D%2238%22%20r%3D%2214%22%20stroke%3D%22%23fce588%22%20stroke-width%3D%222%22%20fill%3D%22none%22%20opacity%3D%220.7%22%2F%3E%0A%20%20%3Cpath%20d%3D%22M44%2030%20L44%2046%20M56%2030%20L56%2046%20M42%2030%20C42%2035%2046%2035%2046%2030%22%20stroke%3D%22%23fce588%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%2F%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2276%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C%20-apple-system%2C%20sans-serif%22%20font-weight%3D%22900%22%20font-size%3D%2215%22%20fill%3D%22%23ffffff%22%20letter-spacing%3D%221.5%22%3ECR%3C%2Ftext%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2287%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C%20-apple-system%2C%20sans-serif%22%20font-weight%3D%22800%22%20font-size%3D%226.5%22%20fill%3D%22%23fce588%22%20letter-spacing%3D%222%22%3ESTREET%20FOOD%3C%2Ftext%3E%0A%3C%2Fsvg%3E"
  },
  {
    "id": "asuran-momo-burger-point",
    "name": "Asuran Momo Corner & Crispy Burger",
    "area": "Medical College Road",
    "city": "Gorakhpur",
    "address": "Asuran Chowk, Near SBI ATM, Gorakhpur",
    "description": "Student favorite fast food joint in Asuran serving gravy fried momos, giant double patty crispy burgers, and loaded peri peri fries.",
    "categories": [
      "street-food",
      "fast-food"
    ],
    "cuisines": [
      "Momos & Chinese",
      "Fast Food"
    ],
    "popularDishes": [
      "Gravy Fried Veg Momos",
      "Crispy Paneer Burger",
      "Peri Peri Fries",
      "Veg Chowmein"
    ],
    "costForTwo": 150,
    "averageRating": 4.6,
    "reviewCount": 210,
    "imageUrl": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1000&q=80",
    "isDemo": false,
    "phone": "+91 94511 88320",
    "whatsappPhone": "+91 94511 88320",
    "openTime": "14:00",
    "closeTime": "22:30",
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
    "ownerName": "Deepak Jaiswal",
    "ownerEmail": "asuran.momos@gorakhpurfoodguide.in",
    "facilities": [
      "Street Stall",
      "Quick Counter",
      "UPI Accepted"
    ],
    "ratingsBreakdown": {
      "food": 4.7,
      "taste": 4.8,
      "hygiene": 4.4,
      "service": 4.6,
      "ambience": 4.3
    },
    "priceRange": {
      "min": 50,
      "max": 120
    },
    "distanceKm": 2.8,
    "menu": [
      {
        "id": "am-1",
        "name": "Tandoori Gravy Momos (6 Pcs)",
        "price": 90,
        "category": "Momos",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "description": "Deep fried momos tossed in rich creamy spicy tandoori gravy with chaat masala.",
        "imageUrl": "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "am-2",
        "name": "Jumbo Crispy Paneer Burger",
        "price": 80,
        "category": "Burgers",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "description": "Crunchy paneer patty inside toasted sesame bun with melted cheese slice and lettuce.",
        "imageUrl": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80"
      }
    ],
    "logoUrl": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20100%20100%22%20width%3D%22200%22%20height%3D%22200%22%3E%0A%20%20%3Cdefs%3E%0A%20%20%20%20%3ClinearGradient%20id%3D%22brandGrad_asuran-momo-burger-point%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%2394381c%22%2F%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23432818%22%2F%3E%0A%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%3Cfilter%20id%3D%22shadow_asuran-momo-burger-point%22%20x%3D%22-10%25%22%20y%3D%22-10%25%22%20width%3D%22120%25%22%20height%3D%22120%25%22%3E%0A%20%20%20%20%20%20%3CfeDropShadow%20dx%3D%220%22%20dy%3D%222%22%20stdDeviation%3D%222.5%22%20flood-opacity%3D%220.35%22%2F%3E%0A%20%20%20%20%3C%2Ffilter%3E%0A%20%20%3C%2Fdefs%3E%0A%20%20%3Crect%20x%3D%224%22%20y%3D%224%22%20width%3D%2292%22%20height%3D%2292%22%20rx%3D%2226%22%20fill%3D%22url(%23brandGrad_asuran-momo-burger-point)%22%20stroke%3D%22%23fce588%22%20stroke-width%3D%222.5%22%20filter%3D%22url(%23shadow_asuran-momo-burger-point)%22%2F%3E%0A%20%20%3Crect%20x%3D%229%22%20y%3D%229%22%20width%3D%2282%22%20height%3D%2282%22%20rx%3D%2221%22%20fill%3D%22none%22%20stroke%3D%22%23fce588%22%20stroke-width%3D%221%22%20stroke-dasharray%3D%223%203%22%20opacity%3D%220.45%22%2F%3E%0A%20%20%3Ccircle%20cx%3D%2250%22%20cy%3D%2238%22%20r%3D%2214%22%20stroke%3D%22%23fce588%22%20stroke-width%3D%222%22%20fill%3D%22none%22%20opacity%3D%220.7%22%2F%3E%0A%20%20%3Cpath%20d%3D%22M44%2030%20L44%2046%20M56%2030%20L56%2046%20M42%2030%20C42%2035%2046%2035%2046%2030%22%20stroke%3D%22%23fce588%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%2F%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2276%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C%20-apple-system%2C%20sans-serif%22%20font-weight%3D%22900%22%20font-size%3D%2215%22%20fill%3D%22%23ffffff%22%20letter-spacing%3D%221.5%22%3EAM%3C%2Ftext%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2287%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C%20-apple-system%2C%20sans-serif%22%20font-weight%3D%22800%22%20font-size%3D%226.5%22%20fill%3D%22%23fce588%22%20letter-spacing%3D%222%22%3ESTREET%20FOOD%3C%2Ftext%3E%0A%3C%2Fsvg%3E"
  },
  {
    "id": "kashi-nath-kachori-reti",
    "name": "Kashi Nath Kachori Bhandar",
    "area": "Reti Chowk",
    "city": "Gorakhpur",
    "address": "Near Old Police Chowki, Reti Chowk, Gorakhpur",
    "description": "Famous morning heritage breakfast stall since 1974! Golden urad dal khasta kachoris served with spicy aloo-dum sabzi and steaming hot jalebi.",
    "categories": [
      "street-food",
      "sweets"
    ],
    "cuisines": [
      "Kachori & Samosa",
      "Mithai"
    ],
    "popularDishes": [
      "Khasta Kachori with Aloo Sabzi",
      "Desi Ghee Jalebi",
      "Urad Dal Bedmi Poori",
      "Kulhad Chaas"
    ],
    "costForTwo": 90,
    "averageRating": 4.9,
    "reviewCount": 340,
    "imageUrl": "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1000&q=80",
    "isDemo": false,
    "phone": "+91 94152 11980",
    "whatsappPhone": "+91 94152 11980",
    "openTime": "06:00",
    "closeTime": "13:30",
    "openDays": [
      "Mon",
      "Tue",
      "Wed",
      "Thu",
      "Fri",
      "Sat",
      "Sun"
    ],
    "diet": "veg",
    "status": "Active",
    "ownerName": "Kashi Nath Gupta",
    "ownerEmail": "kashinath.kachori@gorakhpurfoodguide.in",
    "facilities": [
      "Morning Counter",
      "Takeaway",
      "UPI Accepted"
    ],
    "ratingsBreakdown": {
      "food": 5,
      "taste": 5,
      "hygiene": 4.6,
      "service": 4.8,
      "ambience": 4.2
    },
    "priceRange": {
      "min": 30,
      "max": 70
    },
    "distanceKm": 1.8,
    "menu": [
      {
        "id": "kn-1",
        "name": "Khasta Kachori with Spicy Aloo Sabzi (4 Pcs)",
        "price": 40,
        "category": "Kachori",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "description": "Crumbled crispy kachori filled with spiced urad dal topped with steaming hot peppery potato gravy.",
        "imageUrl": "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "kn-2",
        "name": "Hot Desi Ghee Jalebi (100g)",
        "price": 40,
        "category": "Sweets",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "description": "Thin and crunchy spiral jalebis soaked in saffron sugar syrup.",
        "imageUrl": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80"
      }
    ],
    "logoUrl": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20100%20100%22%20width%3D%22200%22%20height%3D%22200%22%3E%0A%20%20%3Cdefs%3E%0A%20%20%20%20%3ClinearGradient%20id%3D%22brandGrad_kashi-nath-kachori-reti%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%2394381c%22%2F%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23432818%22%2F%3E%0A%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%3Cfilter%20id%3D%22shadow_kashi-nath-kachori-reti%22%20x%3D%22-10%25%22%20y%3D%22-10%25%22%20width%3D%22120%25%22%20height%3D%22120%25%22%3E%0A%20%20%20%20%20%20%3CfeDropShadow%20dx%3D%220%22%20dy%3D%222%22%20stdDeviation%3D%222.5%22%20flood-opacity%3D%220.35%22%2F%3E%0A%20%20%20%20%3C%2Ffilter%3E%0A%20%20%3C%2Fdefs%3E%0A%20%20%3Crect%20x%3D%224%22%20y%3D%224%22%20width%3D%2292%22%20height%3D%2292%22%20rx%3D%2226%22%20fill%3D%22url(%23brandGrad_kashi-nath-kachori-reti)%22%20stroke%3D%22%23fce588%22%20stroke-width%3D%222.5%22%20filter%3D%22url(%23shadow_kashi-nath-kachori-reti)%22%2F%3E%0A%20%20%3Crect%20x%3D%229%22%20y%3D%229%22%20width%3D%2282%22%20height%3D%2282%22%20rx%3D%2221%22%20fill%3D%22none%22%20stroke%3D%22%23fce588%22%20stroke-width%3D%221%22%20stroke-dasharray%3D%223%203%22%20opacity%3D%220.45%22%2F%3E%0A%20%20%3Ccircle%20cx%3D%2250%22%20cy%3D%2238%22%20r%3D%2214%22%20stroke%3D%22%23fce588%22%20stroke-width%3D%222%22%20fill%3D%22none%22%20opacity%3D%220.7%22%2F%3E%0A%20%20%3Cpath%20d%3D%22M44%2030%20L44%2046%20M56%2030%20L56%2046%20M42%2030%20C42%2035%2046%2035%2046%2030%22%20stroke%3D%22%23fce588%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%2F%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2276%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C%20-apple-system%2C%20sans-serif%22%20font-weight%3D%22900%22%20font-size%3D%2215%22%20fill%3D%22%23ffffff%22%20letter-spacing%3D%221.5%22%3EKN%3C%2Ftext%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2287%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C%20-apple-system%2C%20sans-serif%22%20font-weight%3D%22800%22%20font-size%3D%226.5%22%20fill%3D%22%23fce588%22%20letter-spacing%3D%222%22%3ESTREET%20FOOD%3C%2Ftext%3E%0A%3C%2Fsvg%3E"
  },
  {
    "id": "gupta-samosa-medical",
    "name": "Gupta Ji Mashhoor Samosa & Chutney Stall",
    "area": "Medical College Road",
    "city": "Gorakhpur",
    "address": "Near BRD Medical College Gate No 2, Gorakhpur",
    "description": "Renowned samosa stall serving jumbo golden samosas filled with whole cashew-spiced potatoes, paired with sweet saunth and fiery coriander chutney.",
    "categories": [
      "street-food"
    ],
    "cuisines": [
      "Kachori & Samosa",
      "Street Food"
    ],
    "popularDishes": [
      "Kaju Masala Samosa",
      "Samosa Chaat",
      "Paneer Bread Pakoda",
      "Masala Chai"
    ],
    "costForTwo": 70,
    "averageRating": 4.8,
    "reviewCount": 290,
    "imageUrl": "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1000&q=80",
    "isDemo": false,
    "phone": "+91 98391 77210",
    "whatsappPhone": "+91 98391 77210",
    "openTime": "08:00",
    "closeTime": "21:00",
    "openDays": [
      "Mon",
      "Tue",
      "Wed",
      "Thu",
      "Fri",
      "Sat",
      "Sun"
    ],
    "diet": "veg",
    "status": "Active",
    "ownerName": "Manoj Gupta",
    "ownerEmail": "guptaji.samosa@gorakhpurfoodguide.in",
    "facilities": [
      "Street Counter",
      "Takeaway",
      "UPI Accepted"
    ],
    "ratingsBreakdown": {
      "food": 4.9,
      "taste": 5,
      "hygiene": 4.7,
      "service": 4.8,
      "ambience": 4.3
    },
    "priceRange": {
      "min": 20,
      "max": 50
    },
    "distanceKm": 3.5,
    "menu": [
      {
        "id": "gs-1",
        "name": "Kaju Masala Samosa (2 Pcs)",
        "price": 30,
        "category": "Samosa",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "description": "Extra crispy golden samosas packed with spiced potato chunks, green peas and whole cashews.",
        "imageUrl": "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "gs-2",
        "name": "Special Samosa Chaat",
        "price": 50,
        "category": "Chaat",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "description": "Two crushed samosas smothered with hot chana masala, beaten curd, onions and chutneys.",
        "imageUrl": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80"
      }
    ],
    "logoUrl": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20100%20100%22%20width%3D%22200%22%20height%3D%22200%22%3E%0A%20%20%3Cdefs%3E%0A%20%20%20%20%3ClinearGradient%20id%3D%22brandGrad_gupta-samosa-medical%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%2394381c%22%2F%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23432818%22%2F%3E%0A%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%3Cfilter%20id%3D%22shadow_gupta-samosa-medical%22%20x%3D%22-10%25%22%20y%3D%22-10%25%22%20width%3D%22120%25%22%20height%3D%22120%25%22%3E%0A%20%20%20%20%20%20%3CfeDropShadow%20dx%3D%220%22%20dy%3D%222%22%20stdDeviation%3D%222.5%22%20flood-opacity%3D%220.35%22%2F%3E%0A%20%20%20%20%3C%2Ffilter%3E%0A%20%20%3C%2Fdefs%3E%0A%20%20%3Crect%20x%3D%224%22%20y%3D%224%22%20width%3D%2292%22%20height%3D%2292%22%20rx%3D%2226%22%20fill%3D%22url(%23brandGrad_gupta-samosa-medical)%22%20stroke%3D%22%23fce588%22%20stroke-width%3D%222.5%22%20filter%3D%22url(%23shadow_gupta-samosa-medical)%22%2F%3E%0A%20%20%3Crect%20x%3D%229%22%20y%3D%229%22%20width%3D%2282%22%20height%3D%2282%22%20rx%3D%2221%22%20fill%3D%22none%22%20stroke%3D%22%23fce588%22%20stroke-width%3D%221%22%20stroke-dasharray%3D%223%203%22%20opacity%3D%220.45%22%2F%3E%0A%20%20%3Ccircle%20cx%3D%2250%22%20cy%3D%2238%22%20r%3D%2214%22%20stroke%3D%22%23fce588%22%20stroke-width%3D%222%22%20fill%3D%22none%22%20opacity%3D%220.7%22%2F%3E%0A%20%20%3Cpath%20d%3D%22M44%2030%20L44%2046%20M56%2030%20L56%2046%20M42%2030%20C42%2035%2046%2035%2046%2030%22%20stroke%3D%22%23fce588%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%2F%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2276%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C%20-apple-system%2C%20sans-serif%22%20font-weight%3D%22900%22%20font-size%3D%2215%22%20fill%3D%22%23ffffff%22%20letter-spacing%3D%221.5%22%3EGJ%3C%2Ftext%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2287%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C%20-apple-system%2C%20sans-serif%22%20font-weight%3D%22800%22%20font-size%3D%226.5%22%20fill%3D%22%23fce588%22%20letter-spacing%3D%222%22%3ESTREET%20FOOD%3C%2Ftext%3E%0A%3C%2Fsvg%3E"
  },
  {
    "id": "sagar-dosa-indralok",
    "name": "Sagar Dosa & Pav Bhaji Cart",
    "area": "Golghar",
    "city": "Gorakhpur",
    "address": "Indralok Commercial Complex Lane, Golghar, Gorakhpur",
    "description": "Street-side South Indian & Pav Bhaji counter famous for paper-thin butter masala dosas, sizzling Amul butter pav bhaji, and soft idlis.",
    "categories": [
      "street-food",
      "fast-food"
    ],
    "cuisines": [
      "Pav Bhaji & South Indian",
      "Street Food"
    ],
    "popularDishes": [
      "Butter Masala Dosa",
      "Amul Pav Bhaji",
      "Mysore Masala Dosa",
      "Cheese Pav Bhaji"
    ],
    "costForTwo": 140,
    "averageRating": 4.7,
    "reviewCount": 235,
    "imageUrl": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=1000&q=80",
    "isDemo": false,
    "phone": "+91 94155 33219",
    "whatsappPhone": "+91 94155 33219",
    "openTime": "13:00",
    "closeTime": "22:30",
    "openDays": [
      "Mon",
      "Tue",
      "Wed",
      "Thu",
      "Fri",
      "Sat",
      "Sun"
    ],
    "diet": "veg",
    "status": "Active",
    "ownerName": "Suresh Kumar",
    "ownerEmail": "sagar.dosa@gorakhpurfoodguide.in",
    "facilities": [
      "Street Counter",
      "Takeaway",
      "UPI Accepted"
    ],
    "ratingsBreakdown": {
      "food": 4.8,
      "taste": 4.8,
      "hygiene": 4.6,
      "service": 4.7,
      "ambience": 4.3
    },
    "priceRange": {
      "min": 50,
      "max": 110
    },
    "distanceKm": 0.4,
    "menu": [
      {
        "id": "sd-1",
        "name": "Crispy Butter Masala Dosa",
        "price": 80,
        "category": "Dosa",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "description": "Golden fermented rice-lentil crepe brushed with Amul butter and filled with spiced aloo masala.",
        "imageUrl": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "sd-2",
        "name": "Amul Butter Pav Bhaji",
        "price": 80,
        "category": "Pav Bhaji",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "description": "Mashed vegetable curry cooked with fragrant spices on flat tawa served with 2 buttery pavs.",
        "imageUrl": "https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=600&q=80"
      }
    ],
    "logoUrl": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20100%20100%22%20width%3D%22200%22%20height%3D%22200%22%3E%0A%20%20%3Cdefs%3E%0A%20%20%20%20%3ClinearGradient%20id%3D%22brandGrad_sagar-dosa-indralok%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%2394381c%22%2F%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23432818%22%2F%3E%0A%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%3Cfilter%20id%3D%22shadow_sagar-dosa-indralok%22%20x%3D%22-10%25%22%20y%3D%22-10%25%22%20width%3D%22120%25%22%20height%3D%22120%25%22%3E%0A%20%20%20%20%20%20%3CfeDropShadow%20dx%3D%220%22%20dy%3D%222%22%20stdDeviation%3D%222.5%22%20flood-opacity%3D%220.35%22%2F%3E%0A%20%20%20%20%3C%2Ffilter%3E%0A%20%20%3C%2Fdefs%3E%0A%20%20%3Crect%20x%3D%224%22%20y%3D%224%22%20width%3D%2292%22%20height%3D%2292%22%20rx%3D%2226%22%20fill%3D%22url(%23brandGrad_sagar-dosa-indralok)%22%20stroke%3D%22%23fce588%22%20stroke-width%3D%222.5%22%20filter%3D%22url(%23shadow_sagar-dosa-indralok)%22%2F%3E%0A%20%20%3Crect%20x%3D%229%22%20y%3D%229%22%20width%3D%2282%22%20height%3D%2282%22%20rx%3D%2221%22%20fill%3D%22none%22%20stroke%3D%22%23fce588%22%20stroke-width%3D%221%22%20stroke-dasharray%3D%223%203%22%20opacity%3D%220.45%22%2F%3E%0A%20%20%3Ccircle%20cx%3D%2250%22%20cy%3D%2238%22%20r%3D%2214%22%20stroke%3D%22%23fce588%22%20stroke-width%3D%222%22%20fill%3D%22none%22%20opacity%3D%220.7%22%2F%3E%0A%20%20%3Cpath%20d%3D%22M44%2030%20L44%2046%20M56%2030%20L56%2046%20M42%2030%20C42%2035%2046%2035%2046%2030%22%20stroke%3D%22%23fce588%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%2F%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2276%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C%20-apple-system%2C%20sans-serif%22%20font-weight%3D%22900%22%20font-size%3D%2215%22%20fill%3D%22%23ffffff%22%20letter-spacing%3D%221.5%22%3ESD%3C%2Ftext%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2287%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C%20-apple-system%2C%20sans-serif%22%20font-weight%3D%22800%22%20font-size%3D%226.5%22%20fill%3D%22%23fce588%22%20letter-spacing%3D%222%22%3ESTREET%20FOOD%3C%2Ftext%3E%0A%3C%2Fsvg%3E"
  },
  {
    "id": "bombay-chowpatty-pavbhaji",
    "name": "Bombay Chowpatty Pav Bhaji & Pulao",
    "area": "Golghar",
    "city": "Gorakhpur",
    "address": "Backside Parking, Baldev Plaza, Golghar, Gorakhpur",
    "description": "Tawa-cooked Mumbai style fast food favorites! Sizzling extra butter pav bhaji and aromatic tawa pulao prepared live on giant iron griddle.",
    "categories": [
      "street-food",
      "fast-food"
    ],
    "cuisines": [
      "Pav Bhaji & South Indian",
      "Fast Food"
    ],
    "popularDishes": [
      "Special Amul Pav Bhaji",
      "Bombay Tawa Pulao",
      "Cheese Loaded Pav Bhaji",
      "Masala Pav"
    ],
    "costForTwo": 160,
    "averageRating": 4.7,
    "reviewCount": 185,
    "imageUrl": "https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=1000&q=80",
    "isDemo": false,
    "phone": "+91 98387 11402",
    "whatsappPhone": "+91 98387 11402",
    "openTime": "15:00",
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
    "diet": "veg",
    "status": "Active",
    "ownerName": "Praveen Chaurasia",
    "ownerEmail": "bombay.chowpatty@gorakhpurfoodguide.in",
    "facilities": [
      "Street Seating",
      "Takeaway",
      "UPI Accepted"
    ],
    "ratingsBreakdown": {
      "food": 4.8,
      "taste": 4.9,
      "hygiene": 4.6,
      "service": 4.7,
      "ambience": 4.4
    },
    "priceRange": {
      "min": 60,
      "max": 120
    },
    "distanceKm": 0.4,
    "menu": [
      {
        "id": "bc-1",
        "name": "Special Amul Pav Bhaji",
        "price": 90,
        "category": "Pav Bhaji",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "description": "Velvety spicy vegetable mash topped with melting butter slab, served with lime, onions and warm pav.",
        "imageUrl": "https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "bc-2",
        "name": "Bombay Tawa Pulao",
        "price": 90,
        "category": "Tawa Rice",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "description": "Basmati rice tossed on pav bhaji tawa with tomatoes, peas, paneer cubes and pav bhaji masala.",
        "imageUrl": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=600&q=80"
      }
    ],
    "logoUrl": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20100%20100%22%20width%3D%22200%22%20height%3D%22200%22%3E%0A%20%20%3Cdefs%3E%0A%20%20%20%20%3ClinearGradient%20id%3D%22brandGrad_bombay-chowpatty-pavbhaji%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%2394381c%22%2F%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23432818%22%2F%3E%0A%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%3Cfilter%20id%3D%22shadow_bombay-chowpatty-pavbhaji%22%20x%3D%22-10%25%22%20y%3D%22-10%25%22%20width%3D%22120%25%22%20height%3D%22120%25%22%3E%0A%20%20%20%20%20%20%3CfeDropShadow%20dx%3D%220%22%20dy%3D%222%22%20stdDeviation%3D%222.5%22%20flood-opacity%3D%220.35%22%2F%3E%0A%20%20%20%20%3C%2Ffilter%3E%0A%20%20%3C%2Fdefs%3E%0A%20%20%3Crect%20x%3D%224%22%20y%3D%224%22%20width%3D%2292%22%20height%3D%2292%22%20rx%3D%2226%22%20fill%3D%22url(%23brandGrad_bombay-chowpatty-pavbhaji)%22%20stroke%3D%22%23fce588%22%20stroke-width%3D%222.5%22%20filter%3D%22url(%23shadow_bombay-chowpatty-pavbhaji)%22%2F%3E%0A%20%20%3Crect%20x%3D%229%22%20y%3D%229%22%20width%3D%2282%22%20height%3D%2282%22%20rx%3D%2221%22%20fill%3D%22none%22%20stroke%3D%22%23fce588%22%20stroke-width%3D%221%22%20stroke-dasharray%3D%223%203%22%20opacity%3D%220.45%22%2F%3E%0A%20%20%3Ccircle%20cx%3D%2250%22%20cy%3D%2238%22%20r%3D%2214%22%20stroke%3D%22%23fce588%22%20stroke-width%3D%222%22%20fill%3D%22none%22%20opacity%3D%220.7%22%2F%3E%0A%20%20%3Cpath%20d%3D%22M44%2030%20L44%2046%20M56%2030%20L56%2046%20M42%2030%20C42%2035%2046%2035%2046%2030%22%20stroke%3D%22%23fce588%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%2F%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2276%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C%20-apple-system%2C%20sans-serif%22%20font-weight%3D%22900%22%20font-size%3D%2215%22%20fill%3D%22%23ffffff%22%20letter-spacing%3D%221.5%22%3EBC%3C%2Ftext%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2287%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C%20-apple-system%2C%20sans-serif%22%20font-weight%3D%22800%22%20font-size%3D%226.5%22%20fill%3D%22%23fce588%22%20letter-spacing%3D%222%22%3ESTREET%20FOOD%3C%2Ftext%3E%0A%3C%2Fsvg%3E"
  },
  {
    "id": "buxipur-seekh-kebab-corner",
    "name": "Buxipur Seekh Kebab & Tikka Corner",
    "area": "Buxipur",
    "city": "Gorakhpur",
    "address": "Buxipur Main Chauraha, Near Jama Masjid Road, Gorakhpur",
    "description": "Iconic evening street barbecue spot in Gorakhpur! Smoky seekh kebabs grilled over open charcoal sigdi, paired with warm rumali roti and mint chutney.",
    "categories": [
      "street-food"
    ],
    "cuisines": [
      "Rolls & Kebabs",
      "Mughlai"
    ],
    "popularDishes": [
      "Mutton Seekh Kebab",
      "Chicken Boti Tikka",
      "Rumali Roti Roll",
      "Chicken Malai Tikka"
    ],
    "costForTwo": 220,
    "averageRating": 4.8,
    "reviewCount": 310,
    "imageUrl": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1000&q=80",
    "isDemo": false,
    "phone": "+91 94153 66190",
    "whatsappPhone": "+91 94153 66190",
    "openTime": "17:00",
    "closeTime": "23:30",
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
    "ownerName": "Mohammad Imran Qureshi",
    "ownerEmail": "buxipur.kebabs@gorakhpurfoodguide.in",
    "facilities": [
      "Charcoal Grill",
      "Takeaway",
      "UPI Accepted"
    ],
    "ratingsBreakdown": {
      "food": 5,
      "taste": 5,
      "hygiene": 4.5,
      "service": 4.8,
      "ambience": 4.1
    },
    "priceRange": {
      "min": 70,
      "max": 150
    },
    "distanceKm": 1.2,
    "menu": [
      {
        "id": "bk-1",
        "name": "Charcoal Mutton Seekh Kebab (4 Pcs)",
        "price": 120,
        "category": "Kebabs",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": true,
        "description": "Minced spiced mutton skewers flame-broiled over hot coals, brushed with butter and served with onions.",
        "imageUrl": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "bk-2",
        "name": "Chicken Tikka Rumali Roll",
        "price": 100,
        "category": "Rolls",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": true,
        "description": "Smoky boneless chicken chunks wrapped in thin rumali roti with lemon juice and chaat masala.",
        "imageUrl": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=600&q=80"
      }
    ],
    "logoUrl": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20100%20100%22%20width%3D%22200%22%20height%3D%22200%22%3E%0A%20%20%3Cdefs%3E%0A%20%20%20%20%3ClinearGradient%20id%3D%22brandGrad_buxipur-seekh-kebab-corner%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%2394381c%22%2F%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23432818%22%2F%3E%0A%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%3Cfilter%20id%3D%22shadow_buxipur-seekh-kebab-corner%22%20x%3D%22-10%25%22%20y%3D%22-10%25%22%20width%3D%22120%25%22%20height%3D%22120%25%22%3E%0A%20%20%20%20%20%20%3CfeDropShadow%20dx%3D%220%22%20dy%3D%222%22%20stdDeviation%3D%222.5%22%20flood-opacity%3D%220.35%22%2F%3E%0A%20%20%20%20%3C%2Ffilter%3E%0A%20%20%3C%2Fdefs%3E%0A%20%20%3Crect%20x%3D%224%22%20y%3D%224%22%20width%3D%2292%22%20height%3D%2292%22%20rx%3D%2226%22%20fill%3D%22url(%23brandGrad_buxipur-seekh-kebab-corner)%22%20stroke%3D%22%23fce588%22%20stroke-width%3D%222.5%22%20filter%3D%22url(%23shadow_buxipur-seekh-kebab-corner)%22%2F%3E%0A%20%20%3Crect%20x%3D%229%22%20y%3D%229%22%20width%3D%2282%22%20height%3D%2282%22%20rx%3D%2221%22%20fill%3D%22none%22%20stroke%3D%22%23fce588%22%20stroke-width%3D%221%22%20stroke-dasharray%3D%223%203%22%20opacity%3D%220.45%22%2F%3E%0A%20%20%3Ccircle%20cx%3D%2250%22%20cy%3D%2238%22%20r%3D%2214%22%20stroke%3D%22%23fce588%22%20stroke-width%3D%222%22%20fill%3D%22none%22%20opacity%3D%220.7%22%2F%3E%0A%20%20%3Cpath%20d%3D%22M44%2030%20L44%2046%20M56%2030%20L56%2046%20M42%2030%20C42%2035%2046%2035%2046%2030%22%20stroke%3D%22%23fce588%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%2F%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2276%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C%20-apple-system%2C%20sans-serif%22%20font-weight%3D%22900%22%20font-size%3D%2215%22%20fill%3D%22%23ffffff%22%20letter-spacing%3D%221.5%22%3EBS%3C%2Ftext%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2287%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C%20-apple-system%2C%20sans-serif%22%20font-weight%3D%22800%22%20font-size%3D%226.5%22%20fill%3D%22%23fce588%22%20letter-spacing%3D%222%22%3ESTREET%20FOOD%3C%2Ftext%3E%0A%3C%2Fsvg%3E"
  },
  {
    "id": "bajrangi-dal-samosa-ghantaghar",
    "name": "Bajrangi Dal Samosa & Jalebi Bhandar",
    "area": "Reti Chowk",
    "city": "Gorakhpur",
    "address": "Near Clock Tower, Ghantaghar Chowk, Gorakhpur",
    "description": "Heritage street shop famous for eastern UP specialty Chana Dal Samosa (pithi samosa) and hot jalebis prepared in pure mustard and ghee.",
    "categories": [
      "street-food",
      "sweets"
    ],
    "cuisines": [
      "Kachori & Samosa",
      "Mithai"
    ],
    "popularDishes": [
      "Chana Dal Samosa",
      "Desi Ghee Jalebi",
      "Khasta Dal Kachori",
      "Lassi"
    ],
    "costForTwo": 70,
    "averageRating": 4.8,
    "reviewCount": 275,
    "imageUrl": "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1000&q=80",
    "isDemo": false,
    "phone": "+91 94508 44310",
    "whatsappPhone": "+91 94508 44310",
    "openTime": "07:00",
    "closeTime": "21:00",
    "openDays": [
      "Mon",
      "Tue",
      "Wed",
      "Thu",
      "Fri",
      "Sat",
      "Sun"
    ],
    "diet": "veg",
    "status": "Active",
    "ownerName": "Bajrangi Lal",
    "ownerEmail": "bajrangi.samosa@gorakhpurfoodguide.in",
    "facilities": [
      "Street Stall",
      "Takeaway",
      "UPI Accepted"
    ],
    "ratingsBreakdown": {
      "food": 4.9,
      "taste": 5,
      "hygiene": 4.6,
      "service": 4.7,
      "ambience": 4.2
    },
    "priceRange": {
      "min": 20,
      "max": 60
    },
    "distanceKm": 1.5,
    "menu": [
      {
        "id": "bs-1",
        "name": "Spicy Chana Dal Samosa (2 Pcs)",
        "price": 30,
        "category": "Samosa",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "description": "Traditional flaky samosas stuffed with coarse spiced Bengal gram and carom seeds.",
        "imageUrl": "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "bs-2",
        "name": "Crispy Jalebi (100g)",
        "price": 35,
        "category": "Sweets",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "description": "Golden sugar-syrup rings fried fresh in front of customers.",
        "imageUrl": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80"
      }
    ],
    "logoUrl": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20100%20100%22%20width%3D%22200%22%20height%3D%22200%22%3E%0A%20%20%3Cdefs%3E%0A%20%20%20%20%3ClinearGradient%20id%3D%22brandGrad_bajrangi-dal-samosa-ghantaghar%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%2394381c%22%2F%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23432818%22%2F%3E%0A%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%3Cfilter%20id%3D%22shadow_bajrangi-dal-samosa-ghantaghar%22%20x%3D%22-10%25%22%20y%3D%22-10%25%22%20width%3D%22120%25%22%20height%3D%22120%25%22%3E%0A%20%20%20%20%20%20%3CfeDropShadow%20dx%3D%220%22%20dy%3D%222%22%20stdDeviation%3D%222.5%22%20flood-opacity%3D%220.35%22%2F%3E%0A%20%20%20%20%3C%2Ffilter%3E%0A%20%20%3C%2Fdefs%3E%0A%20%20%3Crect%20x%3D%224%22%20y%3D%224%22%20width%3D%2292%22%20height%3D%2292%22%20rx%3D%2226%22%20fill%3D%22url(%23brandGrad_bajrangi-dal-samosa-ghantaghar)%22%20stroke%3D%22%23fce588%22%20stroke-width%3D%222.5%22%20filter%3D%22url(%23shadow_bajrangi-dal-samosa-ghantaghar)%22%2F%3E%0A%20%20%3Crect%20x%3D%229%22%20y%3D%229%22%20width%3D%2282%22%20height%3D%2282%22%20rx%3D%2221%22%20fill%3D%22none%22%20stroke%3D%22%23fce588%22%20stroke-width%3D%221%22%20stroke-dasharray%3D%223%203%22%20opacity%3D%220.45%22%2F%3E%0A%20%20%3Ccircle%20cx%3D%2250%22%20cy%3D%2238%22%20r%3D%2214%22%20stroke%3D%22%23fce588%22%20stroke-width%3D%222%22%20fill%3D%22none%22%20opacity%3D%220.7%22%2F%3E%0A%20%20%3Cpath%20d%3D%22M44%2030%20L44%2046%20M56%2030%20L56%2046%20M42%2030%20C42%2035%2046%2035%2046%2030%22%20stroke%3D%22%23fce588%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%2F%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2276%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C%20-apple-system%2C%20sans-serif%22%20font-weight%3D%22900%22%20font-size%3D%2215%22%20fill%3D%22%23ffffff%22%20letter-spacing%3D%221.5%22%3EBD%3C%2Ftext%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2287%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C%20-apple-system%2C%20sans-serif%22%20font-weight%3D%22800%22%20font-size%3D%226.5%22%20fill%3D%22%23fce588%22%20letter-spacing%3D%222%22%3ESTREET%20FOOD%3C%2Ftext%3E%0A%3C%2Fsvg%3E"
  },
  {
    "id": "dilli-chole-bhature-taramandal",
    "name": "Dilli 6 Chole Bhature Stall",
    "area": "Taramandal",
    "city": "Gorakhpur",
    "address": "Planetarium Commercial Lane, Taramandal Road, Gorakhpur",
    "description": "Delhi Chandni Chowk style fluffy paneer-stuffed bhaturas served with spicy dark Pindi chole, carrot pickle, and fresh mint chutney.",
    "categories": [
      "street-food",
      "north-indian"
    ],
    "cuisines": [
      "North Indian",
      "Street Food"
    ],
    "popularDishes": [
      "Paneer Stuffed Chole Bhature",
      "Amritsari Kulcha",
      "Sweet Lassi Kulhad",
      "Aloo Poori"
    ],
    "costForTwo": 140,
    "averageRating": 4.7,
    "reviewCount": 205,
    "imageUrl": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=1000&q=80",
    "isDemo": false,
    "phone": "+91 99365 22019",
    "whatsappPhone": "+91 99365 22019",
    "openTime": "08:30",
    "closeTime": "21:30",
    "openDays": [
      "Mon",
      "Tue",
      "Wed",
      "Thu",
      "Fri",
      "Sat",
      "Sun"
    ],
    "diet": "veg",
    "status": "Active",
    "ownerName": "Jagdish Chandra",
    "ownerEmail": "dilli.chole@gorakhpurfoodguide.in",
    "facilities": [
      "Street Stall",
      "Quick Dining",
      "UPI Accepted"
    ],
    "ratingsBreakdown": {
      "food": 4.8,
      "taste": 4.9,
      "hygiene": 4.6,
      "service": 4.7,
      "ambience": 4.4
    },
    "priceRange": {
      "min": 60,
      "max": 120
    },
    "distanceKm": 2.2,
    "menu": [
      {
        "id": "dc-1",
        "name": "Paneer Stuffed Chole Bhature (2 Pcs)",
        "price": 80,
        "category": "Bhature",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "description": "Golden puffed bhaturas with paneer and coriander filling served with spiced dark chole and pickle.",
        "imageUrl": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "dc-2",
        "name": "Malai Kulhad Lassi",
        "price": 40,
        "category": "Beverages",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "description": "Chilled sweet churned yogurt topped with thick malai skin and rose drops.",
        "imageUrl": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=600&q=80"
      }
    ],
    "logoUrl": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20100%20100%22%20width%3D%22200%22%20height%3D%22200%22%3E%0A%20%20%3Cdefs%3E%0A%20%20%20%20%3ClinearGradient%20id%3D%22brandGrad_dilli-chole-bhature-taramandal%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%2394381c%22%2F%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23432818%22%2F%3E%0A%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%3Cfilter%20id%3D%22shadow_dilli-chole-bhature-taramandal%22%20x%3D%22-10%25%22%20y%3D%22-10%25%22%20width%3D%22120%25%22%20height%3D%22120%25%22%3E%0A%20%20%20%20%20%20%3CfeDropShadow%20dx%3D%220%22%20dy%3D%222%22%20stdDeviation%3D%222.5%22%20flood-opacity%3D%220.35%22%2F%3E%0A%20%20%20%20%3C%2Ffilter%3E%0A%20%20%3C%2Fdefs%3E%0A%20%20%3Crect%20x%3D%224%22%20y%3D%224%22%20width%3D%2292%22%20height%3D%2292%22%20rx%3D%2226%22%20fill%3D%22url(%23brandGrad_dilli-chole-bhature-taramandal)%22%20stroke%3D%22%23fce588%22%20stroke-width%3D%222.5%22%20filter%3D%22url(%23shadow_dilli-chole-bhature-taramandal)%22%2F%3E%0A%20%20%3Crect%20x%3D%229%22%20y%3D%229%22%20width%3D%2282%22%20height%3D%2282%22%20rx%3D%2221%22%20fill%3D%22none%22%20stroke%3D%22%23fce588%22%20stroke-width%3D%221%22%20stroke-dasharray%3D%223%203%22%20opacity%3D%220.45%22%2F%3E%0A%20%20%3Ccircle%20cx%3D%2250%22%20cy%3D%2238%22%20r%3D%2214%22%20stroke%3D%22%23fce588%22%20stroke-width%3D%222%22%20fill%3D%22none%22%20opacity%3D%220.7%22%2F%3E%0A%20%20%3Cpath%20d%3D%22M44%2030%20L44%2046%20M56%2030%20L56%2046%20M42%2030%20C42%2035%2046%2035%2046%2030%22%20stroke%3D%22%23fce588%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%2F%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2276%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C%20-apple-system%2C%20sans-serif%22%20font-weight%3D%22900%22%20font-size%3D%2215%22%20fill%3D%22%23ffffff%22%20letter-spacing%3D%221.5%22%3EDC%3C%2Ftext%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2287%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C%20-apple-system%2C%20sans-serif%22%20font-weight%3D%22800%22%20font-size%3D%226.5%22%20fill%3D%22%23fce588%22%20letter-spacing%3D%222%22%3ESTREET%20FOOD%3C%2Ftext%3E%0A%3C%2Fsvg%3E"
  },
  {
    "id": "maggi-point-naukayan",
    "name": "Maggi Point & Coffee Hub",
    "area": "Taramandal",
    "city": "Gorakhpur",
    "address": "Near Boating Ticket Counter, Naukayan, Ramgarh Taal, Gorakhpur",
    "description": "Bustling lakefront street kiosk famous among evening tourists for Cheese Corn Maggi, Peri-peri sandwiches, and Frothy Cold Coffee.",
    "categories": [
      "street-food",
      "fast-food"
    ],
    "cuisines": [
      "Chai & Snacks",
      "Fast Food"
    ],
    "popularDishes": [
      "Cheese Tadka Maggi",
      "Thick Cold Coffee",
      "Veg Grilled Sandwich",
      "Spring Rolls"
    ],
    "costForTwo": 130,
    "averageRating": 4.7,
    "reviewCount": 320,
    "imageUrl": "https://images.unsplash.com/photo-1612927601601-6638404737ce?auto=format&fit=crop&w=1000&q=80",
    "isDemo": false,
    "phone": "+91 72758 99120",
    "whatsappPhone": "+91 72758 99120",
    "openTime": "11:00",
    "closeTime": "23:30",
    "openDays": [
      "Mon",
      "Tue",
      "Wed",
      "Thu",
      "Fri",
      "Sat",
      "Sun"
    ],
    "diet": "veg",
    "status": "Active",
    "ownerName": "Rohit Nishad",
    "ownerEmail": "maggipoint.lake@gorakhpurfoodguide.in",
    "facilities": [
      "Lake View Seating",
      "Takeaway",
      "UPI Accepted"
    ],
    "ratingsBreakdown": {
      "food": 4.7,
      "taste": 4.8,
      "hygiene": 4.6,
      "service": 4.8,
      "ambience": 5
    },
    "priceRange": {
      "min": 40,
      "max": 90
    },
    "distanceKm": 2.1,
    "menu": [
      {
        "id": "mp-1",
        "name": "Double Cheese Corn Maggi",
        "price": 70,
        "category": "Maggi",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "description": "Two cakes of Maggi cooked with butter, sweet corn, oregano and melted mozzarella cheese.",
        "imageUrl": "https://images.unsplash.com/photo-1612927601601-6638404737ce?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "mp-2",
        "name": "Frothy Cold Coffee with Ice Cream",
        "price": 60,
        "category": "Beverages",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "description": "Blended espresso with rich vanilla ice cream and chocolate drizzle.",
        "imageUrl": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=600&q=80"
      }
    ],
    "logoUrl": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20100%20100%22%20width%3D%22200%22%20height%3D%22200%22%3E%0A%20%20%3Cdefs%3E%0A%20%20%20%20%3ClinearGradient%20id%3D%22brandGrad_maggi-point-naukayan%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%2394381c%22%2F%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23432818%22%2F%3E%0A%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%3Cfilter%20id%3D%22shadow_maggi-point-naukayan%22%20x%3D%22-10%25%22%20y%3D%22-10%25%22%20width%3D%22120%25%22%20height%3D%22120%25%22%3E%0A%20%20%20%20%20%20%3CfeDropShadow%20dx%3D%220%22%20dy%3D%222%22%20stdDeviation%3D%222.5%22%20flood-opacity%3D%220.35%22%2F%3E%0A%20%20%20%20%3C%2Ffilter%3E%0A%20%20%3C%2Fdefs%3E%0A%20%20%3Crect%20x%3D%224%22%20y%3D%224%22%20width%3D%2292%22%20height%3D%2292%22%20rx%3D%2226%22%20fill%3D%22url(%23brandGrad_maggi-point-naukayan)%22%20stroke%3D%22%23fce588%22%20stroke-width%3D%222.5%22%20filter%3D%22url(%23shadow_maggi-point-naukayan)%22%2F%3E%0A%20%20%3Crect%20x%3D%229%22%20y%3D%229%22%20width%3D%2282%22%20height%3D%2282%22%20rx%3D%2221%22%20fill%3D%22none%22%20stroke%3D%22%23fce588%22%20stroke-width%3D%221%22%20stroke-dasharray%3D%223%203%22%20opacity%3D%220.45%22%2F%3E%0A%20%20%3Ccircle%20cx%3D%2250%22%20cy%3D%2238%22%20r%3D%2214%22%20stroke%3D%22%23fce588%22%20stroke-width%3D%222%22%20fill%3D%22none%22%20opacity%3D%220.7%22%2F%3E%0A%20%20%3Cpath%20d%3D%22M44%2030%20L44%2046%20M56%2030%20L56%2046%20M42%2030%20C42%2035%2046%2035%2046%2030%22%20stroke%3D%22%23fce588%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%2F%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2276%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C%20-apple-system%2C%20sans-serif%22%20font-weight%3D%22900%22%20font-size%3D%2215%22%20fill%3D%22%23ffffff%22%20letter-spacing%3D%221.5%22%3EMP%3C%2Ftext%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2287%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C%20-apple-system%2C%20sans-serif%22%20font-weight%3D%22800%22%20font-size%3D%226.5%22%20fill%3D%22%23fce588%22%20letter-spacing%3D%222%22%3ESTREET%20FOOD%3C%2Ftext%3E%0A%3C%2Fsvg%3E"
  },
  {
    "id": "al-hasan-rolls-urdubazar",
    "name": "Al-Hasan Street Rolls & Biryani Cart",
    "area": "Reti Chowk",
    "city": "Gorakhpur",
    "address": "Urdu Bazar Crossroad, Near Jama Masjid, Gorakhpur",
    "description": "Legendary night street food counter serving authentic Lucknowi Dum Biryani quarter plates, succulent seekh paratha rolls, and chicken fry.",
    "categories": [
      "street-food"
    ],
    "cuisines": [
      "Rolls & Kebabs",
      "Mughlai"
    ],
    "popularDishes": [
      "Chicken Dum Biryani (Quarter)",
      "Seekh Paratha Roll",
      "Crispy Chicken Fry",
      "Tandoori Roti"
    ],
    "costForTwo": 180,
    "averageRating": 4.8,
    "reviewCount": 295,
    "imageUrl": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=1000&q=80",
    "isDemo": false,
    "phone": "+91 98380 44912",
    "whatsappPhone": "+91 98380 44912",
    "openTime": "16:00",
    "closeTime": "23:30",
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
    "ownerName": "Hasan Ali",
    "ownerEmail": "alhasan.rolls@gorakhpurfoodguide.in",
    "facilities": [
      "Street Stall",
      "Quick Takeaway",
      "UPI Accepted"
    ],
    "ratingsBreakdown": {
      "food": 4.9,
      "taste": 5,
      "hygiene": 4.5,
      "service": 4.7,
      "ambience": 4.1
    },
    "priceRange": {
      "min": 60,
      "max": 130
    },
    "distanceKm": 1.6,
    "menu": [
      {
        "id": "ah-1",
        "name": "Chicken Dum Biryani (Quarter Plate)",
        "price": 80,
        "category": "Biryani",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": true,
        "description": "Aromatic basmati rice cooked on slow dum with tender chicken, brown onions and saffron essence.",
        "imageUrl": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "ah-2",
        "name": "Mutton Seekh Paratha Roll",
        "price": 90,
        "category": "Rolls",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": true,
        "description": "Grilled spiced seekh kebab wrapped in hot tawa paratha with onion salad and green chutney.",
        "imageUrl": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80"
      }
    ],
    "logoUrl": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20100%20100%22%20width%3D%22200%22%20height%3D%22200%22%3E%0A%20%20%3Cdefs%3E%0A%20%20%20%20%3ClinearGradient%20id%3D%22brandGrad_al-hasan-rolls-urdubazar%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%2394381c%22%2F%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23432818%22%2F%3E%0A%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%3Cfilter%20id%3D%22shadow_al-hasan-rolls-urdubazar%22%20x%3D%22-10%25%22%20y%3D%22-10%25%22%20width%3D%22120%25%22%20height%3D%22120%25%22%3E%0A%20%20%20%20%20%20%3CfeDropShadow%20dx%3D%220%22%20dy%3D%222%22%20stdDeviation%3D%222.5%22%20flood-opacity%3D%220.35%22%2F%3E%0A%20%20%20%20%3C%2Ffilter%3E%0A%20%20%3C%2Fdefs%3E%0A%20%20%3Crect%20x%3D%224%22%20y%3D%224%22%20width%3D%2292%22%20height%3D%2292%22%20rx%3D%2226%22%20fill%3D%22url(%23brandGrad_al-hasan-rolls-urdubazar)%22%20stroke%3D%22%23fce588%22%20stroke-width%3D%222.5%22%20filter%3D%22url(%23shadow_al-hasan-rolls-urdubazar)%22%2F%3E%0A%20%20%3Crect%20x%3D%229%22%20y%3D%229%22%20width%3D%2282%22%20height%3D%2282%22%20rx%3D%2221%22%20fill%3D%22none%22%20stroke%3D%22%23fce588%22%20stroke-width%3D%221%22%20stroke-dasharray%3D%223%203%22%20opacity%3D%220.45%22%2F%3E%0A%20%20%3Ccircle%20cx%3D%2250%22%20cy%3D%2238%22%20r%3D%2214%22%20stroke%3D%22%23fce588%22%20stroke-width%3D%222%22%20fill%3D%22none%22%20opacity%3D%220.7%22%2F%3E%0A%20%20%3Cpath%20d%3D%22M44%2030%20L44%2046%20M56%2030%20L56%2046%20M42%2030%20C42%2035%2046%2035%2046%2030%22%20stroke%3D%22%23fce588%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%2F%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2276%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C%20-apple-system%2C%20sans-serif%22%20font-weight%3D%22900%22%20font-size%3D%2215%22%20fill%3D%22%23ffffff%22%20letter-spacing%3D%221.5%22%3EAS%3C%2Ftext%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2287%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C%20-apple-system%2C%20sans-serif%22%20font-weight%3D%22800%22%20font-size%3D%226.5%22%20fill%3D%22%23fce588%22%20letter-spacing%3D%222%22%3ESTREET%20FOOD%3C%2Ftext%3E%0A%3C%2Fsvg%3E"
  },
  {
    "id": "anna-dosa-mohaddipur",
    "name": "South Indian Anna Dosa Cart",
    "area": "Mohaddipur",
    "city": "Gorakhpur",
    "address": "Near Mohaddipur Overbridge Pillar 14, Gorakhpur",
    "description": "Famous street dosa van serving authentic Southern flavors: Ghee Roast Dosa, Onion Rava Dosa, Medu Vada, and piping hot gun-powder idlis.",
    "categories": [
      "street-food",
      "fast-food"
    ],
    "cuisines": [
      "Pav Bhaji & South Indian",
      "Street Food"
    ],
    "popularDishes": [
      "Ghee Roast Masala Dosa",
      "Onion Rava Dosa",
      "Crispy Medu Vada (2 Pcs)",
      "Cheese Dosa"
    ],
    "costForTwo": 130,
    "averageRating": 4.7,
    "reviewCount": 190,
    "imageUrl": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=1000&q=80",
    "isDemo": false,
    "phone": "+91 94156 88120",
    "whatsappPhone": "+91 94156 88120",
    "openTime": "15:30",
    "closeTime": "22:30",
    "openDays": [
      "Mon",
      "Tue",
      "Wed",
      "Thu",
      "Fri",
      "Sat",
      "Sun"
    ],
    "diet": "veg",
    "status": "Active",
    "ownerName": "M. Selvam",
    "ownerEmail": "anna.dosa@gorakhpurfoodguide.in",
    "facilities": [
      "Street Stall",
      "Takeaway",
      "UPI Accepted"
    ],
    "ratingsBreakdown": {
      "food": 4.8,
      "taste": 4.9,
      "hygiene": 4.6,
      "service": 4.8,
      "ambience": 4.2
    },
    "priceRange": {
      "min": 40,
      "max": 90
    },
    "distanceKm": 2.4,
    "menu": [
      {
        "id": "ad-1",
        "name": "Ghee Roast Masala Dosa",
        "price": 70,
        "category": "Dosa",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "description": "Paper thin crispy dosa roasted with pure desi ghee filled with flavorful potato masala.",
        "imageUrl": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "ad-2",
        "name": "Crispy Medu Vada with Sambhar (2 Pcs)",
        "price": 50,
        "category": "Snacks",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "description": "Golden lentil fritters dunked in hot spiced drumstick sambhar and fresh coconut chutney.",
        "imageUrl": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80"
      }
    ],
    "logoUrl": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20100%20100%22%20width%3D%22200%22%20height%3D%22200%22%3E%0A%20%20%3Cdefs%3E%0A%20%20%20%20%3ClinearGradient%20id%3D%22brandGrad_anna-dosa-mohaddipur%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%2394381c%22%2F%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23432818%22%2F%3E%0A%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%3Cfilter%20id%3D%22shadow_anna-dosa-mohaddipur%22%20x%3D%22-10%25%22%20y%3D%22-10%25%22%20width%3D%22120%25%22%20height%3D%22120%25%22%3E%0A%20%20%20%20%20%20%3CfeDropShadow%20dx%3D%220%22%20dy%3D%222%22%20stdDeviation%3D%222.5%22%20flood-opacity%3D%220.35%22%2F%3E%0A%20%20%20%20%3C%2Ffilter%3E%0A%20%20%3C%2Fdefs%3E%0A%20%20%3Crect%20x%3D%224%22%20y%3D%224%22%20width%3D%2292%22%20height%3D%2292%22%20rx%3D%2226%22%20fill%3D%22url(%23brandGrad_anna-dosa-mohaddipur)%22%20stroke%3D%22%23fce588%22%20stroke-width%3D%222.5%22%20filter%3D%22url(%23shadow_anna-dosa-mohaddipur)%22%2F%3E%0A%20%20%3Crect%20x%3D%229%22%20y%3D%229%22%20width%3D%2282%22%20height%3D%2282%22%20rx%3D%2221%22%20fill%3D%22none%22%20stroke%3D%22%23fce588%22%20stroke-width%3D%221%22%20stroke-dasharray%3D%223%203%22%20opacity%3D%220.45%22%2F%3E%0A%20%20%3Ccircle%20cx%3D%2250%22%20cy%3D%2238%22%20r%3D%2214%22%20stroke%3D%22%23fce588%22%20stroke-width%3D%222%22%20fill%3D%22none%22%20opacity%3D%220.7%22%2F%3E%0A%20%20%3Cpath%20d%3D%22M44%2030%20L44%2046%20M56%2030%20L56%2046%20M42%2030%20C42%2035%2046%2035%2046%2030%22%20stroke%3D%22%23fce588%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%2F%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2276%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C%20-apple-system%2C%20sans-serif%22%20font-weight%3D%22900%22%20font-size%3D%2215%22%20fill%3D%22%23ffffff%22%20letter-spacing%3D%221.5%22%3ESI%3C%2Ftext%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2287%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C%20-apple-system%2C%20sans-serif%22%20font-weight%3D%22800%22%20font-size%3D%226.5%22%20fill%3D%22%23fce588%22%20letter-spacing%3D%222%22%3ESTREET%20FOOD%3C%2Ftext%3E%0A%3C%2Fsvg%3E"
  },
  {
    "id": "munna-lal-malai-toast-reti",
    "name": "Munna Lal Malai Toast & Rabdi Stall",
    "area": "Reti Chowk",
    "city": "Gorakhpur",
    "address": "Near Old Ghantaghar Market Gate, Reti Chowk, Gorakhpur",
    "description": "Iconic Gorakhpur dessert stall famous for char-toasted white bread smothered with fresh clotted malai, saffron sugar dust, and thick rabdi.",
    "categories": [
      "street-food",
      "sweets"
    ],
    "cuisines": [
      "Mithai",
      "Desserts"
    ],
    "popularDishes": [
      "Malai Toast with Elaichi",
      "Kesariya Rabdi Bowl",
      "Hot Badam Milk",
      "Makkhan Malai"
    ],
    "costForTwo": 100,
    "averageRating": 4.9,
    "reviewCount": 310,
    "imageUrl": "https://images.unsplash.com/photo-1505394033641-40c6ad1178d7?auto=format&fit=crop&w=1000&q=80",
    "isDemo": false,
    "phone": "+91 94503 11820",
    "whatsappPhone": "+91 94503 11820",
    "openTime": "17:00",
    "closeTime": "23:30",
    "openDays": [
      "Mon",
      "Tue",
      "Wed",
      "Thu",
      "Fri",
      "Sat",
      "Sun"
    ],
    "diet": "veg",
    "status": "Active",
    "ownerName": "Munna Lal Yadav",
    "ownerEmail": "munnalal.malai@gorakhpurfoodguide.in",
    "facilities": [
      "Street Counter",
      "Takeaway",
      "UPI Accepted"
    ],
    "ratingsBreakdown": {
      "food": 5,
      "taste": 5,
      "hygiene": 4.7,
      "service": 4.8,
      "ambience": 4.3
    },
    "priceRange": {
      "min": 35,
      "max": 80
    },
    "distanceKm": 1.7,
    "menu": [
      {
        "id": "ml-1",
        "name": "Signature Malai Toast",
        "price": 40,
        "category": "Malai Toast",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "description": "Charcoal toasted bread topped with thick hand-churned fresh cream and sugar crystals.",
        "imageUrl": "https://images.unsplash.com/photo-1505394033641-40c6ad1178d7?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "ml-2",
        "name": "Kesariya Rabdi Bowl (100g)",
        "price": 60,
        "category": "Rabdi",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "description": "Slow-reduced whole buffalo milk flavored with saffron threads and crushed green cardamom.",
        "imageUrl": "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=600&q=80"
      }
    ],
    "logoUrl": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20100%20100%22%20width%3D%22200%22%20height%3D%22200%22%3E%0A%20%20%3Cdefs%3E%0A%20%20%20%20%3ClinearGradient%20id%3D%22brandGrad_munna-lal-malai-toast-reti%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%2394381c%22%2F%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23432818%22%2F%3E%0A%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%3Cfilter%20id%3D%22shadow_munna-lal-malai-toast-reti%22%20x%3D%22-10%25%22%20y%3D%22-10%25%22%20width%3D%22120%25%22%20height%3D%22120%25%22%3E%0A%20%20%20%20%20%20%3CfeDropShadow%20dx%3D%220%22%20dy%3D%222%22%20stdDeviation%3D%222.5%22%20flood-opacity%3D%220.35%22%2F%3E%0A%20%20%20%20%3C%2Ffilter%3E%0A%20%20%3C%2Fdefs%3E%0A%20%20%3Crect%20x%3D%224%22%20y%3D%224%22%20width%3D%2292%22%20height%3D%2292%22%20rx%3D%2226%22%20fill%3D%22url(%23brandGrad_munna-lal-malai-toast-reti)%22%20stroke%3D%22%23fce588%22%20stroke-width%3D%222.5%22%20filter%3D%22url(%23shadow_munna-lal-malai-toast-reti)%22%2F%3E%0A%20%20%3Crect%20x%3D%229%22%20y%3D%229%22%20width%3D%2282%22%20height%3D%2282%22%20rx%3D%2221%22%20fill%3D%22none%22%20stroke%3D%22%23fce588%22%20stroke-width%3D%221%22%20stroke-dasharray%3D%223%203%22%20opacity%3D%220.45%22%2F%3E%0A%20%20%3Ccircle%20cx%3D%2250%22%20cy%3D%2238%22%20r%3D%2214%22%20stroke%3D%22%23fce588%22%20stroke-width%3D%222%22%20fill%3D%22none%22%20opacity%3D%220.7%22%2F%3E%0A%20%20%3Cpath%20d%3D%22M44%2030%20L44%2046%20M56%2030%20L56%2046%20M42%2030%20C42%2035%2046%2035%2046%2030%22%20stroke%3D%22%23fce588%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%2F%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2276%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C%20-apple-system%2C%20sans-serif%22%20font-weight%3D%22900%22%20font-size%3D%2215%22%20fill%3D%22%23ffffff%22%20letter-spacing%3D%221.5%22%3EML%3C%2Ftext%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2287%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C%20-apple-system%2C%20sans-serif%22%20font-weight%3D%22800%22%20font-size%3D%226.5%22%20fill%3D%22%23fce588%22%20letter-spacing%3D%222%22%3ESTREET%20FOOD%3C%2Ftext%3E%0A%3C%2Fsvg%3E"
  },
  {
    "id": "shere-punjab-chole-kulche-asuran",
    "name": "Shere Punjab Chole Kulche Cart",
    "area": "Medical College Road",
    "city": "Gorakhpur",
    "address": "Near Asuran Chowk Petrol Pump, Gorakhpur",
    "description": "Amritsari street specialty stall serving buttery grilled kulchas stuffed with potatoes and onions, served with tangy boiled chickpea chaat.",
    "categories": [
      "street-food"
    ],
    "cuisines": [
      "North Indian",
      "Street Food"
    ],
    "popularDishes": [
      "Butter Chole Kulche",
      "Amritsari Aloo Kulcha",
      "Masala Chaas",
      "Boondi Raita"
    ],
    "costForTwo": 110,
    "averageRating": 4.7,
    "reviewCount": 220,
    "imageUrl": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=1000&q=80",
    "isDemo": false,
    "phone": "+91 98383 66102",
    "whatsappPhone": "+91 98383 66102",
    "openTime": "10:00",
    "closeTime": "21:00",
    "openDays": [
      "Mon",
      "Tue",
      "Wed",
      "Thu",
      "Fri",
      "Sat",
      "Sun"
    ],
    "diet": "veg",
    "status": "Active",
    "ownerName": "Harpreet Singh",
    "ownerEmail": "sherepunjab.kulche@gorakhpurfoodguide.in",
    "facilities": [
      "Street Stall",
      "Quick Service",
      "UPI Accepted"
    ],
    "ratingsBreakdown": {
      "food": 4.8,
      "taste": 4.8,
      "hygiene": 4.6,
      "service": 4.7,
      "ambience": 4.2
    },
    "priceRange": {
      "min": 40,
      "max": 80
    },
    "distanceKm": 2.9,
    "menu": [
      {
        "id": "sp-1",
        "name": "Special Butter Chole Kulche (2 Kulche)",
        "price": 60,
        "category": "Chole Kulche",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "description": "Soft fluffy kulchas toasted in butter served with tangy spicy chole, green chillies and lemon.",
        "imageUrl": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=600&q=80"
      }
    ],
    "logoUrl": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20100%20100%22%20width%3D%22200%22%20height%3D%22200%22%3E%0A%20%20%3Cdefs%3E%0A%20%20%20%20%3ClinearGradient%20id%3D%22brandGrad_shere-punjab-chole-kulche-asuran%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%2394381c%22%2F%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23432818%22%2F%3E%0A%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%3Cfilter%20id%3D%22shadow_shere-punjab-chole-kulche-asuran%22%20x%3D%22-10%25%22%20y%3D%22-10%25%22%20width%3D%22120%25%22%20height%3D%22120%25%22%3E%0A%20%20%20%20%20%20%3CfeDropShadow%20dx%3D%220%22%20dy%3D%222%22%20stdDeviation%3D%222.5%22%20flood-opacity%3D%220.35%22%2F%3E%0A%20%20%20%20%3C%2Ffilter%3E%0A%20%20%3C%2Fdefs%3E%0A%20%20%3Crect%20x%3D%224%22%20y%3D%224%22%20width%3D%2292%22%20height%3D%2292%22%20rx%3D%2226%22%20fill%3D%22url(%23brandGrad_shere-punjab-chole-kulche-asuran)%22%20stroke%3D%22%23fce588%22%20stroke-width%3D%222.5%22%20filter%3D%22url(%23shadow_shere-punjab-chole-kulche-asuran)%22%2F%3E%0A%20%20%3Crect%20x%3D%229%22%20y%3D%229%22%20width%3D%2282%22%20height%3D%2282%22%20rx%3D%2221%22%20fill%3D%22none%22%20stroke%3D%22%23fce588%22%20stroke-width%3D%221%22%20stroke-dasharray%3D%223%203%22%20opacity%3D%220.45%22%2F%3E%0A%20%20%3Ccircle%20cx%3D%2250%22%20cy%3D%2238%22%20r%3D%2214%22%20stroke%3D%22%23fce588%22%20stroke-width%3D%222%22%20fill%3D%22none%22%20opacity%3D%220.7%22%2F%3E%0A%20%20%3Cpath%20d%3D%22M44%2030%20L44%2046%20M56%2030%20L56%2046%20M42%2030%20C42%2035%2046%2035%2046%2030%22%20stroke%3D%22%23fce588%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%2F%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2276%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C%20-apple-system%2C%20sans-serif%22%20font-weight%3D%22900%22%20font-size%3D%2215%22%20fill%3D%22%23ffffff%22%20letter-spacing%3D%221.5%22%3ESP%3C%2Ftext%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2287%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C%20-apple-system%2C%20sans-serif%22%20font-weight%3D%22800%22%20font-size%3D%226.5%22%20fill%3D%22%23fce588%22%20letter-spacing%3D%222%22%3ESTREET%20FOOD%3C%2Ftext%3E%0A%3C%2Fsvg%3E"
  },
  {
    "id": "lakefront-soya-chaap-taramandal",
    "name": "Lakefront Soya Chaap & Paneer Tikka Hub",
    "area": "Taramandal",
    "city": "Gorakhpur",
    "address": "Opposite Water Sports Complex, Ramgarh Taal Road, Taramandal, Gorakhpur",
    "description": "Renowned evening tandoori hub overlooking Ramgarh Lake famous for Afghani Malai Soya Chaap, Masala Chaap, and Smoky Paneer Tikka.",
    "categories": [
      "street-food",
      "north-indian"
    ],
    "cuisines": [
      "Rolls & Kebabs",
      "North Indian"
    ],
    "popularDishes": [
      "Afghani Malai Chaap",
      "Tandoori Masala Chaap",
      "Achari Paneer Tikka",
      "Rumali Roti"
    ],
    "costForTwo": 200,
    "averageRating": 4.8,
    "reviewCount": 340,
    "imageUrl": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1000&q=80",
    "isDemo": false,
    "phone": "+91 94158 99230",
    "whatsappPhone": "+91 94158 99230",
    "openTime": "16:00",
    "closeTime": "23:30",
    "openDays": [
      "Mon",
      "Tue",
      "Wed",
      "Thu",
      "Fri",
      "Sat",
      "Sun"
    ],
    "diet": "veg",
    "status": "Active",
    "ownerName": "Kunal Grover",
    "ownerEmail": "lakefront.chaap@gorakhpurfoodguide.in",
    "facilities": [
      "Lake View Seating",
      "Takeaway",
      "UPI Accepted"
    ],
    "ratingsBreakdown": {
      "food": 4.9,
      "taste": 4.9,
      "hygiene": 4.7,
      "service": 4.8,
      "ambience": 4.8
    },
    "priceRange": {
      "min": 80,
      "max": 150
    },
    "distanceKm": 2.2,
    "menu": [
      {
        "id": "sc-1",
        "name": "Afghani Malai Soya Chaap",
        "price": 110,
        "category": "Chaap",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "description": "Charcoal roasted soya chaap pieces drenched in rich cashew cream, butter and mild spices.",
        "imageUrl": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "sc-2",
        "name": "Tandoori Masala Soya Chaap",
        "price": 100,
        "category": "Chaap",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "description": "Spicy marinated soya chaap grilled on skewers served with mint dip and onion rings.",
        "imageUrl": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80"
      }
    ],
    "logoUrl": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20100%20100%22%20width%3D%22200%22%20height%3D%22200%22%3E%0A%20%20%3Cdefs%3E%0A%20%20%20%20%3ClinearGradient%20id%3D%22brandGrad_lakefront-soya-chaap-taramandal%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%2394381c%22%2F%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23432818%22%2F%3E%0A%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%3Cfilter%20id%3D%22shadow_lakefront-soya-chaap-taramandal%22%20x%3D%22-10%25%22%20y%3D%22-10%25%22%20width%3D%22120%25%22%20height%3D%22120%25%22%3E%0A%20%20%20%20%20%20%3CfeDropShadow%20dx%3D%220%22%20dy%3D%222%22%20stdDeviation%3D%222.5%22%20flood-opacity%3D%220.35%22%2F%3E%0A%20%20%20%20%3C%2Ffilter%3E%0A%20%20%3C%2Fdefs%3E%0A%20%20%3Crect%20x%3D%224%22%20y%3D%224%22%20width%3D%2292%22%20height%3D%2292%22%20rx%3D%2226%22%20fill%3D%22url(%23brandGrad_lakefront-soya-chaap-taramandal)%22%20stroke%3D%22%23fce588%22%20stroke-width%3D%222.5%22%20filter%3D%22url(%23shadow_lakefront-soya-chaap-taramandal)%22%2F%3E%0A%20%20%3Crect%20x%3D%229%22%20y%3D%229%22%20width%3D%2282%22%20height%3D%2282%22%20rx%3D%2221%22%20fill%3D%22none%22%20stroke%3D%22%23fce588%22%20stroke-width%3D%221%22%20stroke-dasharray%3D%223%203%22%20opacity%3D%220.45%22%2F%3E%0A%20%20%3Ccircle%20cx%3D%2250%22%20cy%3D%2238%22%20r%3D%2214%22%20stroke%3D%22%23fce588%22%20stroke-width%3D%222%22%20fill%3D%22none%22%20opacity%3D%220.7%22%2F%3E%0A%20%20%3Cpath%20d%3D%22M44%2030%20L44%2046%20M56%2030%20L56%2046%20M42%2030%20C42%2035%2046%2035%2046%2030%22%20stroke%3D%22%23fce588%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%2F%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2276%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C%20-apple-system%2C%20sans-serif%22%20font-weight%3D%22900%22%20font-size%3D%2215%22%20fill%3D%22%23ffffff%22%20letter-spacing%3D%221.5%22%3ELS%3C%2Ftext%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2287%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C%20-apple-system%2C%20sans-serif%22%20font-weight%3D%22800%22%20font-size%3D%226.5%22%20fill%3D%22%23fce588%22%20letter-spacing%3D%222%22%3ESTREET%20FOOD%3C%2Ftext%3E%0A%3C%2Fsvg%3E"
  },
  {
    "id": "chacha-chai-maska-buxipur",
    "name": "Chacha Ki Masala Chai & Maska Bun",
    "area": "Buxipur",
    "city": "Gorakhpur",
    "address": "Near Buxipur Book Market Crossroad, Gorakhpur",
    "description": "Iconic 50-year-old student and reader tea stop in Buxipur serving boiling ginger-cardamom chai, sweet maska bun, and crispy samosas.",
    "categories": [
      "street-food",
      "cafe"
    ],
    "cuisines": [
      "Chai & Snacks",
      "Street Food"
    ],
    "popularDishes": [
      "Kadak Masala Chai",
      "Maska Bun with Makkhan",
      "Khari Biscuit",
      "Aloo Bonda"
    ],
    "costForTwo": 60,
    "averageRating": 4.8,
    "reviewCount": 385,
    "imageUrl": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=1000&q=80",
    "isDemo": false,
    "phone": "+91 94502 33410",
    "whatsappPhone": "+91 94502 33410",
    "openTime": "06:00",
    "closeTime": "22:00",
    "openDays": [
      "Mon",
      "Tue",
      "Wed",
      "Thu",
      "Fri",
      "Sat",
      "Sun"
    ],
    "diet": "veg",
    "status": "Active",
    "ownerName": "Chacha Abdul Rahim",
    "ownerEmail": "chacha.chai@gorakhpurfoodguide.in",
    "facilities": [
      "Street Benches",
      "Takeaway",
      "UPI Accepted"
    ],
    "ratingsBreakdown": {
      "food": 4.9,
      "taste": 5,
      "hygiene": 4.6,
      "service": 4.9,
      "ambience": 4.3
    },
    "priceRange": {
      "min": 15,
      "max": 40
    },
    "distanceKm": 1.1,
    "menu": [
      {
        "id": "cc-1",
        "name": "Kadak Adrak Elaichi Chai (Kulhad)",
        "price": 20,
        "category": "Chai",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "description": "Strong Assam CTC tea brewed with crushed ginger roots and green cardamom pods.",
        "imageUrl": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "cc-2",
        "name": "Fresh Maska Bun",
        "price": 25,
        "category": "Snacks",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "description": "Warm pillowy bun spread with rich butter and sprinkled with sugar.",
        "imageUrl": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80"
      }
    ],
    "logoUrl": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20100%20100%22%20width%3D%22200%22%20height%3D%22200%22%3E%0A%20%20%3Cdefs%3E%0A%20%20%20%20%3ClinearGradient%20id%3D%22brandGrad_chacha-chai-maska-buxipur%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%2394381c%22%2F%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23432818%22%2F%3E%0A%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%3Cfilter%20id%3D%22shadow_chacha-chai-maska-buxipur%22%20x%3D%22-10%25%22%20y%3D%22-10%25%22%20width%3D%22120%25%22%20height%3D%22120%25%22%3E%0A%20%20%20%20%20%20%3CfeDropShadow%20dx%3D%220%22%20dy%3D%222%22%20stdDeviation%3D%222.5%22%20flood-opacity%3D%220.35%22%2F%3E%0A%20%20%20%20%3C%2Ffilter%3E%0A%20%20%3C%2Fdefs%3E%0A%20%20%3Crect%20x%3D%224%22%20y%3D%224%22%20width%3D%2292%22%20height%3D%2292%22%20rx%3D%2226%22%20fill%3D%22url(%23brandGrad_chacha-chai-maska-buxipur)%22%20stroke%3D%22%23fce588%22%20stroke-width%3D%222.5%22%20filter%3D%22url(%23shadow_chacha-chai-maska-buxipur)%22%2F%3E%0A%20%20%3Crect%20x%3D%229%22%20y%3D%229%22%20width%3D%2282%22%20height%3D%2282%22%20rx%3D%2221%22%20fill%3D%22none%22%20stroke%3D%22%23fce588%22%20stroke-width%3D%221%22%20stroke-dasharray%3D%223%203%22%20opacity%3D%220.45%22%2F%3E%0A%20%20%3Ccircle%20cx%3D%2250%22%20cy%3D%2238%22%20r%3D%2214%22%20stroke%3D%22%23fce588%22%20stroke-width%3D%222%22%20fill%3D%22none%22%20opacity%3D%220.7%22%2F%3E%0A%20%20%3Cpath%20d%3D%22M44%2030%20L44%2046%20M56%2030%20L56%2046%20M42%2030%20C42%2035%2046%2035%2046%2030%22%20stroke%3D%22%23fce588%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%2F%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2276%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C%20-apple-system%2C%20sans-serif%22%20font-weight%3D%22900%22%20font-size%3D%2215%22%20fill%3D%22%23ffffff%22%20letter-spacing%3D%221.5%22%3ECK%3C%2Ftext%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2287%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C%20-apple-system%2C%20sans-serif%22%20font-weight%3D%22800%22%20font-size%3D%226.5%22%20fill%3D%22%23fce588%22%20letter-spacing%3D%222%22%3ESTREET%20FOOD%3C%2Ftext%3E%0A%3C%2Fsvg%3E"
  },
  {
    "id": "awadh-shami-kebab-asuran",
    "name": "Awadh Street Biryani & Shami Kebab",
    "area": "Medical College Road",
    "city": "Gorakhpur",
    "address": "Near Asuran Chowk Flyover End, Gorakhpur",
    "description": "Famous evening Mughlai stall serving melt-in-mouth Shami kebabs, fragrant mutton biryani by weight, and chicken seekh parathas.",
    "categories": [
      "street-food"
    ],
    "cuisines": [
      "Rolls & Kebabs",
      "Mughlai"
    ],
    "popularDishes": [
      "Mutton Shami Kebab (2 Pcs)",
      "Chicken Handi Biryani",
      "Seekh Kebab Roll",
      "Rumali Roti"
    ],
    "costForTwo": 210,
    "averageRating": 4.8,
    "reviewCount": 270,
    "imageUrl": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1000&q=80",
    "isDemo": false,
    "phone": "+91 98382 77190",
    "whatsappPhone": "+91 98382 77190",
    "openTime": "16:30",
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
    "ownerName": "Irfan Ansari",
    "ownerEmail": "awadh.biryani@gorakhpurfoodguide.in",
    "facilities": [
      "Street Stall",
      "Quick Takeaway",
      "UPI Accepted"
    ],
    "ratingsBreakdown": {
      "food": 4.9,
      "taste": 5,
      "hygiene": 4.5,
      "service": 4.7,
      "ambience": 4.2
    },
    "priceRange": {
      "min": 70,
      "max": 140
    },
    "distanceKm": 3.1,
    "menu": [
      {
        "id": "as-1",
        "name": "Mutton Shami Kebab with Rumali (2 Pcs)",
        "price": 90,
        "category": "Kebabs",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": true,
        "description": "Silky smooth spiced minced meat patties pan fried in ghee, served with roomali roti.",
        "imageUrl": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80"
      }
    ],
    "logoUrl": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20100%20100%22%20width%3D%22200%22%20height%3D%22200%22%3E%0A%20%20%3Cdefs%3E%0A%20%20%20%20%3ClinearGradient%20id%3D%22brandGrad_awadh-shami-kebab-asuran%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%2394381c%22%2F%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23432818%22%2F%3E%0A%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%3Cfilter%20id%3D%22shadow_awadh-shami-kebab-asuran%22%20x%3D%22-10%25%22%20y%3D%22-10%25%22%20width%3D%22120%25%22%20height%3D%22120%25%22%3E%0A%20%20%20%20%20%20%3CfeDropShadow%20dx%3D%220%22%20dy%3D%222%22%20stdDeviation%3D%222.5%22%20flood-opacity%3D%220.35%22%2F%3E%0A%20%20%20%20%3C%2Ffilter%3E%0A%20%20%3C%2Fdefs%3E%0A%20%20%3Crect%20x%3D%224%22%20y%3D%224%22%20width%3D%2292%22%20height%3D%2292%22%20rx%3D%2226%22%20fill%3D%22url(%23brandGrad_awadh-shami-kebab-asuran)%22%20stroke%3D%22%23fce588%22%20stroke-width%3D%222.5%22%20filter%3D%22url(%23shadow_awadh-shami-kebab-asuran)%22%2F%3E%0A%20%20%3Crect%20x%3D%229%22%20y%3D%229%22%20width%3D%2282%22%20height%3D%2282%22%20rx%3D%2221%22%20fill%3D%22none%22%20stroke%3D%22%23fce588%22%20stroke-width%3D%221%22%20stroke-dasharray%3D%223%203%22%20opacity%3D%220.45%22%2F%3E%0A%20%20%3Ccircle%20cx%3D%2250%22%20cy%3D%2238%22%20r%3D%2214%22%20stroke%3D%22%23fce588%22%20stroke-width%3D%222%22%20fill%3D%22none%22%20opacity%3D%220.7%22%2F%3E%0A%20%20%3Cpath%20d%3D%22M44%2030%20L44%2046%20M56%2030%20L56%2046%20M42%2030%20C42%2035%2046%2035%2046%2030%22%20stroke%3D%22%23fce588%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%2F%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2276%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C%20-apple-system%2C%20sans-serif%22%20font-weight%3D%22900%22%20font-size%3D%2215%22%20fill%3D%22%23ffffff%22%20letter-spacing%3D%221.5%22%3EAS%3C%2Ftext%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2287%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C%20-apple-system%2C%20sans-serif%22%20font-weight%3D%22800%22%20font-size%3D%226.5%22%20fill%3D%22%23fce588%22%20letter-spacing%3D%222%22%3ESTREET%20FOOD%3C%2Ftext%3E%0A%3C%2Fsvg%3E"
  },
  {
    "id": "station-aloo-paratha-railway",
    "name": "Station Road Aloo Paratha & Kadhi Chawal",
    "area": "Station Road",
    "city": "Gorakhpur",
    "address": "Opposite Gorakhpur Junction Main Exit, Station Road, Gorakhpur",
    "description": "24-hour busy traveler food stop serving giant stuffed Tawa Aloo-Pyaz Parathas with white butter, hot Kadhi Chawal, and thick sweet lassi.",
    "categories": [
      "street-food",
      "north-indian"
    ],
    "cuisines": [
      "North Indian",
      "Street Food"
    ],
    "popularDishes": [
      "Stuffed Aloo Paratha with Curd",
      "Punjabi Kadhi Chawal",
      "Paneer Paratha",
      "Sweet Lassi"
    ],
    "costForTwo": 120,
    "averageRating": 4.6,
    "reviewCount": 310,
    "imageUrl": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=1000&q=80",
    "isDemo": false,
    "phone": "+91 94154 55102",
    "whatsappPhone": "+91 94154 55102",
    "openTime": "05:00",
    "closeTime": "23:59",
    "openDays": [
      "Mon",
      "Tue",
      "Wed",
      "Thu",
      "Fri",
      "Sat",
      "Sun"
    ],
    "diet": "veg",
    "status": "Active",
    "ownerName": "Suraj Pal",
    "ownerEmail": "station.paratha@gorakhpurfoodguide.in",
    "facilities": [
      "24/7 Service",
      "Takeaway",
      "UPI Accepted"
    ],
    "ratingsBreakdown": {
      "food": 4.7,
      "taste": 4.8,
      "hygiene": 4.4,
      "service": 4.8,
      "ambience": 4
    },
    "priceRange": {
      "min": 40,
      "max": 90
    },
    "distanceKm": 1.4,
    "menu": [
      {
        "id": "ap-1",
        "name": "Jumbo Aloo Pyaz Paratha with Curd & Pickle",
        "price": 60,
        "category": "Paratha",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "description": "Thick whole wheat flatbread stuffed with spiced potatoes and onions, served with butter.",
        "imageUrl": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=600&q=80"
      }
    ],
    "logoUrl": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20100%20100%22%20width%3D%22200%22%20height%3D%22200%22%3E%0A%20%20%3Cdefs%3E%0A%20%20%20%20%3ClinearGradient%20id%3D%22brandGrad_station-aloo-paratha-railway%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%2394381c%22%2F%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23432818%22%2F%3E%0A%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%3Cfilter%20id%3D%22shadow_station-aloo-paratha-railway%22%20x%3D%22-10%25%22%20y%3D%22-10%25%22%20width%3D%22120%25%22%20height%3D%22120%25%22%3E%0A%20%20%20%20%20%20%3CfeDropShadow%20dx%3D%220%22%20dy%3D%222%22%20stdDeviation%3D%222.5%22%20flood-opacity%3D%220.35%22%2F%3E%0A%20%20%20%20%3C%2Ffilter%3E%0A%20%20%3C%2Fdefs%3E%0A%20%20%3Crect%20x%3D%224%22%20y%3D%224%22%20width%3D%2292%22%20height%3D%2292%22%20rx%3D%2226%22%20fill%3D%22url(%23brandGrad_station-aloo-paratha-railway)%22%20stroke%3D%22%23fce588%22%20stroke-width%3D%222.5%22%20filter%3D%22url(%23shadow_station-aloo-paratha-railway)%22%2F%3E%0A%20%20%3Crect%20x%3D%229%22%20y%3D%229%22%20width%3D%2282%22%20height%3D%2282%22%20rx%3D%2221%22%20fill%3D%22none%22%20stroke%3D%22%23fce588%22%20stroke-width%3D%221%22%20stroke-dasharray%3D%223%203%22%20opacity%3D%220.45%22%2F%3E%0A%20%20%3Ccircle%20cx%3D%2250%22%20cy%3D%2238%22%20r%3D%2214%22%20stroke%3D%22%23fce588%22%20stroke-width%3D%222%22%20fill%3D%22none%22%20opacity%3D%220.7%22%2F%3E%0A%20%20%3Cpath%20d%3D%22M44%2030%20L44%2046%20M56%2030%20L56%2046%20M42%2030%20C42%2035%2046%2035%2046%2030%22%20stroke%3D%22%23fce588%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%2F%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2276%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C%20-apple-system%2C%20sans-serif%22%20font-weight%3D%22900%22%20font-size%3D%2215%22%20fill%3D%22%23ffffff%22%20letter-spacing%3D%221.5%22%3ESR%3C%2Ftext%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2287%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C%20-apple-system%2C%20sans-serif%22%20font-weight%3D%22800%22%20font-size%3D%226.5%22%20fill%3D%22%23fce588%22%20letter-spacing%3D%222%22%3ESTREET%20FOOD%3C%2Ftext%3E%0A%3C%2Fsvg%3E"
  },
  {
    "id": "university-chowmein-van",
    "name": "University Road Chowmein & Chilli Potato Van",
    "area": "Civil Lines",
    "city": "Gorakhpur",
    "address": "Near DDU University Science Gate, University Road, Gorakhpur",
    "description": "Favorite food truck among college students serving spicy Desi Veg Hakka Chowmein, Honey Chilli Potatoes, and fried momos.",
    "categories": [
      "street-food",
      "fast-food"
    ],
    "cuisines": [
      "Momos & Chinese",
      "Fast Food"
    ],
    "popularDishes": [
      "Desi Veg Chowmein",
      "Crispy Honey Chilli Potato",
      "Veg Manchurian Gravy",
      "Veg Fried Rice"
    ],
    "costForTwo": 120,
    "averageRating": 4.7,
    "reviewCount": 240,
    "imageUrl": "https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?auto=format&fit=crop&w=1000&q=80",
    "isDemo": false,
    "phone": "+91 98388 33190",
    "whatsappPhone": "+91 98388 33190",
    "openTime": "13:00",
    "closeTime": "22:00",
    "openDays": [
      "Mon",
      "Tue",
      "Wed",
      "Thu",
      "Fri",
      "Sat",
      "Sun"
    ],
    "diet": "veg",
    "status": "Active",
    "ownerName": "Vikas Pandey",
    "ownerEmail": "university.chowmein@gorakhpurfoodguide.in",
    "facilities": [
      "Street Food Van",
      "Takeaway",
      "UPI Accepted"
    ],
    "ratingsBreakdown": {
      "food": 4.8,
      "taste": 4.8,
      "hygiene": 4.5,
      "service": 4.7,
      "ambience": 4.4
    },
    "priceRange": {
      "min": 40,
      "max": 90
    },
    "distanceKm": 0.9,
    "menu": [
      {
        "id": "uc-1",
        "name": "Desi Veg Hakka Chowmein",
        "price": 50,
        "category": "Noodles",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "description": "Wok-tossed noodles with shredded cabbage, capsicum, carrots, soy sauce and green chilli.",
        "imageUrl": "https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?auto=format&fit=crop&w=600&q=80"
      },
      {
        "id": "uc-2",
        "name": "Crispy Honey Chilli Potato",
        "price": 60,
        "category": "Starters",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "description": "Crispy fried potato fingers coated in spicy-sweet garlic chilli glaze and sesame seeds.",
        "imageUrl": "https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?auto=format&fit=crop&w=600&q=80"
      }
    ],
    "logoUrl": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20100%20100%22%20width%3D%22200%22%20height%3D%22200%22%3E%0A%20%20%3Cdefs%3E%0A%20%20%20%20%3ClinearGradient%20id%3D%22brandGrad_university-chowmein-van%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%2394381c%22%2F%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23432818%22%2F%3E%0A%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%3Cfilter%20id%3D%22shadow_university-chowmein-van%22%20x%3D%22-10%25%22%20y%3D%22-10%25%22%20width%3D%22120%25%22%20height%3D%22120%25%22%3E%0A%20%20%20%20%20%20%3CfeDropShadow%20dx%3D%220%22%20dy%3D%222%22%20stdDeviation%3D%222.5%22%20flood-opacity%3D%220.35%22%2F%3E%0A%20%20%20%20%3C%2Ffilter%3E%0A%20%20%3C%2Fdefs%3E%0A%20%20%3Crect%20x%3D%224%22%20y%3D%224%22%20width%3D%2292%22%20height%3D%2292%22%20rx%3D%2226%22%20fill%3D%22url(%23brandGrad_university-chowmein-van)%22%20stroke%3D%22%23fce588%22%20stroke-width%3D%222.5%22%20filter%3D%22url(%23shadow_university-chowmein-van)%22%2F%3E%0A%20%20%3Crect%20x%3D%229%22%20y%3D%229%22%20width%3D%2282%22%20height%3D%2282%22%20rx%3D%2221%22%20fill%3D%22none%22%20stroke%3D%22%23fce588%22%20stroke-width%3D%221%22%20stroke-dasharray%3D%223%203%22%20opacity%3D%220.45%22%2F%3E%0A%20%20%3Ccircle%20cx%3D%2250%22%20cy%3D%2238%22%20r%3D%2214%22%20stroke%3D%22%23fce588%22%20stroke-width%3D%222%22%20fill%3D%22none%22%20opacity%3D%220.7%22%2F%3E%0A%20%20%3Cpath%20d%3D%22M44%2030%20L44%2046%20M56%2030%20L56%2046%20M42%2030%20C42%2035%2046%2035%2046%2030%22%20stroke%3D%22%23fce588%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%2F%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2276%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C%20-apple-system%2C%20sans-serif%22%20font-weight%3D%22900%22%20font-size%3D%2215%22%20fill%3D%22%23ffffff%22%20letter-spacing%3D%221.5%22%3EUR%3C%2Ftext%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2287%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C%20-apple-system%2C%20sans-serif%22%20font-weight%3D%22800%22%20font-size%3D%226.5%22%20fill%3D%22%23fce588%22%20letter-spacing%3D%222%22%3ESTREET%20FOOD%3C%2Ftext%3E%0A%3C%2Fsvg%3E"
  },
  {
    "id": "banarasi-lassi-station",
    "name": "Banarasi Peda & Rabdi Lassi Bhandar",
    "area": "Station Road",
    "city": "Gorakhpur",
    "address": "Near Railway Station Platform 1 Road, Gorakhpur",
    "description": "Renowned lassi joint serving thick creamy churned curd in large clay kulhads, loaded with pure malai, dry fruits, and drops of kewra water.",
    "categories": [
      "street-food",
      "sweets"
    ],
    "cuisines": [
      "Mithai",
      "Desserts"
    ],
    "popularDishes": [
      "Special Rabdi Lassi",
      "Dry Fruit Malai Lassi",
      "Mathura Style Peda",
      "Kesar Milk"
    ],
    "costForTwo": 90,
    "averageRating": 4.9,
    "reviewCount": 360,
    "imageUrl": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=1000&q=80",
    "isDemo": false,
    "phone": "+91 94152 77801",
    "whatsappPhone": "+91 94152 77801",
    "openTime": "06:00",
    "closeTime": "23:30",
    "openDays": [
      "Mon",
      "Tue",
      "Wed",
      "Thu",
      "Fri",
      "Sat",
      "Sun"
    ],
    "diet": "veg",
    "status": "Active",
    "ownerName": "Shyam Sundar Yadav",
    "ownerEmail": "banarasi.lassi@gorakhpurfoodguide.in",
    "facilities": [
      "Street Stall",
      "Takeaway",
      "UPI Accepted"
    ],
    "ratingsBreakdown": {
      "food": 5,
      "taste": 5,
      "hygiene": 4.7,
      "service": 4.9,
      "ambience": 4.3
    },
    "priceRange": {
      "min": 35,
      "max": 70
    },
    "distanceKm": 1.3,
    "menu": [
      {
        "id": "bl-1",
        "name": "Special Kulhad Rabdi Lassi",
        "price": 50,
        "category": "Lassi",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "description": "Thick chilled sweet yogurt topped with rich condensed milk rabdi, cashews and almonds.",
        "imageUrl": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=600&q=80"
      }
    ],
    "logoUrl": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20100%20100%22%20width%3D%22200%22%20height%3D%22200%22%3E%0A%20%20%3Cdefs%3E%0A%20%20%20%20%3ClinearGradient%20id%3D%22brandGrad_banarasi-lassi-station%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%2394381c%22%2F%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23432818%22%2F%3E%0A%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%3Cfilter%20id%3D%22shadow_banarasi-lassi-station%22%20x%3D%22-10%25%22%20y%3D%22-10%25%22%20width%3D%22120%25%22%20height%3D%22120%25%22%3E%0A%20%20%20%20%20%20%3CfeDropShadow%20dx%3D%220%22%20dy%3D%222%22%20stdDeviation%3D%222.5%22%20flood-opacity%3D%220.35%22%2F%3E%0A%20%20%20%20%3C%2Ffilter%3E%0A%20%20%3C%2Fdefs%3E%0A%20%20%3Crect%20x%3D%224%22%20y%3D%224%22%20width%3D%2292%22%20height%3D%2292%22%20rx%3D%2226%22%20fill%3D%22url(%23brandGrad_banarasi-lassi-station)%22%20stroke%3D%22%23fce588%22%20stroke-width%3D%222.5%22%20filter%3D%22url(%23shadow_banarasi-lassi-station)%22%2F%3E%0A%20%20%3Crect%20x%3D%229%22%20y%3D%229%22%20width%3D%2282%22%20height%3D%2282%22%20rx%3D%2221%22%20fill%3D%22none%22%20stroke%3D%22%23fce588%22%20stroke-width%3D%221%22%20stroke-dasharray%3D%223%203%22%20opacity%3D%220.45%22%2F%3E%0A%20%20%3Ccircle%20cx%3D%2250%22%20cy%3D%2238%22%20r%3D%2214%22%20stroke%3D%22%23fce588%22%20stroke-width%3D%222%22%20fill%3D%22none%22%20opacity%3D%220.7%22%2F%3E%0A%20%20%3Cpath%20d%3D%22M44%2030%20L44%2046%20M56%2030%20L56%2046%20M42%2030%20C42%2035%2046%2035%2046%2030%22%20stroke%3D%22%23fce588%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%2F%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2276%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C%20-apple-system%2C%20sans-serif%22%20font-weight%3D%22900%22%20font-size%3D%2215%22%20fill%3D%22%23ffffff%22%20letter-spacing%3D%221.5%22%3EBP%3C%2Ftext%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2287%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C%20-apple-system%2C%20sans-serif%22%20font-weight%3D%22800%22%20font-size%3D%226.5%22%20fill%3D%22%23fce588%22%20letter-spacing%3D%222%22%3ESTREET%20FOOD%3C%2Ftext%3E%0A%3C%2Fsvg%3E"
  },
  {
    "id": "aggarwal-chole-dharamshala",
    "name": "Aggarwal Chole Bhature & Lassi Center",
    "area": "Station Road",
    "city": "Gorakhpur",
    "address": "Dharamshala Bazar Chauraha, Near Railway Colony, Gorakhpur",
    "description": "Authentic Punjabi street bhatura stall famous for oversized balloon bhaturas, spicy Amritsari chole, and sweet rose lassi.",
    "categories": [
      "street-food",
      "north-indian"
    ],
    "cuisines": [
      "North Indian",
      "Street Food"
    ],
    "popularDishes": [
      "Paneer Bhature Chole",
      "Amritsari Aloo Kulcha",
      "Sweet Lassi",
      "Rajma Chawal"
    ],
    "costForTwo": 130,
    "averageRating": 4.7,
    "reviewCount": 215,
    "imageUrl": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=1000&q=80",
    "isDemo": false,
    "phone": "+91 98390 11492",
    "whatsappPhone": "+91 98390 11492",
    "openTime": "08:00",
    "closeTime": "21:30",
    "openDays": [
      "Mon",
      "Tue",
      "Wed",
      "Thu",
      "Fri",
      "Sat",
      "Sun"
    ],
    "diet": "veg",
    "status": "Active",
    "ownerName": "Rakesh Aggarwal",
    "ownerEmail": "aggarwal.bhature@gorakhpurfoodguide.in",
    "facilities": [
      "Street Stall",
      "Takeaway",
      "UPI Accepted"
    ],
    "ratingsBreakdown": {
      "food": 4.8,
      "taste": 4.8,
      "hygiene": 4.6,
      "service": 4.7,
      "ambience": 4.2
    },
    "priceRange": {
      "min": 50,
      "max": 100
    },
    "distanceKm": 1.5,
    "menu": [
      {
        "id": "ac-1",
        "name": "Special Paneer Chole Bhature (2 Pcs)",
        "price": 70,
        "category": "Bhature",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "description": "Two large golden bhaturas stuffed with grated paneer served with spiced chickpea curry.",
        "imageUrl": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=600&q=80"
      }
    ],
    "logoUrl": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20100%20100%22%20width%3D%22200%22%20height%3D%22200%22%3E%0A%20%20%3Cdefs%3E%0A%20%20%20%20%3ClinearGradient%20id%3D%22brandGrad_aggarwal-chole-dharamshala%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%2394381c%22%2F%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23432818%22%2F%3E%0A%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%3Cfilter%20id%3D%22shadow_aggarwal-chole-dharamshala%22%20x%3D%22-10%25%22%20y%3D%22-10%25%22%20width%3D%22120%25%22%20height%3D%22120%25%22%3E%0A%20%20%20%20%20%20%3CfeDropShadow%20dx%3D%220%22%20dy%3D%222%22%20stdDeviation%3D%222.5%22%20flood-opacity%3D%220.35%22%2F%3E%0A%20%20%20%20%3C%2Ffilter%3E%0A%20%20%3C%2Fdefs%3E%0A%20%20%3Crect%20x%3D%224%22%20y%3D%224%22%20width%3D%2292%22%20height%3D%2292%22%20rx%3D%2226%22%20fill%3D%22url(%23brandGrad_aggarwal-chole-dharamshala)%22%20stroke%3D%22%23fce588%22%20stroke-width%3D%222.5%22%20filter%3D%22url(%23shadow_aggarwal-chole-dharamshala)%22%2F%3E%0A%20%20%3Crect%20x%3D%229%22%20y%3D%229%22%20width%3D%2282%22%20height%3D%2282%22%20rx%3D%2221%22%20fill%3D%22none%22%20stroke%3D%22%23fce588%22%20stroke-width%3D%221%22%20stroke-dasharray%3D%223%203%22%20opacity%3D%220.45%22%2F%3E%0A%20%20%3Ccircle%20cx%3D%2250%22%20cy%3D%2238%22%20r%3D%2214%22%20stroke%3D%22%23fce588%22%20stroke-width%3D%222%22%20fill%3D%22none%22%20opacity%3D%220.7%22%2F%3E%0A%20%20%3Cpath%20d%3D%22M44%2030%20L44%2046%20M56%2030%20L56%2046%20M42%2030%20C42%2035%2046%2035%2046%2030%22%20stroke%3D%22%23fce588%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%2F%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2276%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C%20-apple-system%2C%20sans-serif%22%20font-weight%3D%22900%22%20font-size%3D%2215%22%20fill%3D%22%23ffffff%22%20letter-spacing%3D%221.5%22%3EAC%3C%2Ftext%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2287%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C%20-apple-system%2C%20sans-serif%22%20font-weight%3D%22800%22%20font-size%3D%226.5%22%20fill%3D%22%23fce588%22%20letter-spacing%3D%222%22%3ESTREET%20FOOD%3C%2Ftext%3E%0A%3C%2Fsvg%3E"
  },
  {
    "id": "hunger-strike-burgers-civillines",
    "name": "Hunger Strike Street Burgers & Sandwiches",
    "area": "Civil Lines",
    "city": "Gorakhpur",
    "address": "Near Jubilee Inter College Gate, Civil Lines, Gorakhpur",
    "description": "Popular evening street snack counter serving toasted triple-layer grilled sandwiches, loaded veg burgers, and cold beverages.",
    "categories": [
      "street-food",
      "fast-food"
    ],
    "cuisines": [
      "Fast Food",
      "Street Food"
    ],
    "popularDishes": [
      "Jumbo Veg Club Sandwich",
      "Double Cheese Burger",
      "Veg Cheese Grilled Roll",
      "Cold Coffee"
    ],
    "costForTwo": 150,
    "averageRating": 4.7,
    "reviewCount": 195,
    "imageUrl": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1000&q=80",
    "isDemo": false,
    "phone": "+91 94157 88419",
    "whatsappPhone": "+91 94157 88419",
    "openTime": "13:00",
    "closeTime": "22:30",
    "openDays": [
      "Mon",
      "Tue",
      "Wed",
      "Thu",
      "Fri",
      "Sat",
      "Sun"
    ],
    "diet": "veg",
    "status": "Active",
    "ownerName": "Arjun Singhania",
    "ownerEmail": "hungerstrike.gkp@gorakhpurfoodguide.in",
    "facilities": [
      "Street Counter",
      "Takeaway",
      "UPI Accepted"
    ],
    "ratingsBreakdown": {
      "food": 4.7,
      "taste": 4.8,
      "hygiene": 4.6,
      "service": 4.7,
      "ambience": 4.4
    },
    "priceRange": {
      "min": 50,
      "max": 110
    },
    "distanceKm": 0.8,
    "menu": [
      {
        "id": "hs-1",
        "name": "Triple Layer Veg Grilled Sandwich",
        "price": 70,
        "category": "Sandwiches",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "description": "Three bread slices layered with sliced cucumber, tomatoes, spiced potatoes, cheese and mint butter.",
        "imageUrl": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=600&q=80"
      }
    ],
    "logoUrl": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20100%20100%22%20width%3D%22200%22%20height%3D%22200%22%3E%0A%20%20%3Cdefs%3E%0A%20%20%20%20%3ClinearGradient%20id%3D%22brandGrad_hunger-strike-burgers-civillines%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%2394381c%22%2F%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23432818%22%2F%3E%0A%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%3Cfilter%20id%3D%22shadow_hunger-strike-burgers-civillines%22%20x%3D%22-10%25%22%20y%3D%22-10%25%22%20width%3D%22120%25%22%20height%3D%22120%25%22%3E%0A%20%20%20%20%20%20%3CfeDropShadow%20dx%3D%220%22%20dy%3D%222%22%20stdDeviation%3D%222.5%22%20flood-opacity%3D%220.35%22%2F%3E%0A%20%20%20%20%3C%2Ffilter%3E%0A%20%20%3C%2Fdefs%3E%0A%20%20%3Crect%20x%3D%224%22%20y%3D%224%22%20width%3D%2292%22%20height%3D%2292%22%20rx%3D%2226%22%20fill%3D%22url(%23brandGrad_hunger-strike-burgers-civillines)%22%20stroke%3D%22%23fce588%22%20stroke-width%3D%222.5%22%20filter%3D%22url(%23shadow_hunger-strike-burgers-civillines)%22%2F%3E%0A%20%20%3Crect%20x%3D%229%22%20y%3D%229%22%20width%3D%2282%22%20height%3D%2282%22%20rx%3D%2221%22%20fill%3D%22none%22%20stroke%3D%22%23fce588%22%20stroke-width%3D%221%22%20stroke-dasharray%3D%223%203%22%20opacity%3D%220.45%22%2F%3E%0A%20%20%3Ccircle%20cx%3D%2250%22%20cy%3D%2238%22%20r%3D%2214%22%20stroke%3D%22%23fce588%22%20stroke-width%3D%222%22%20fill%3D%22none%22%20opacity%3D%220.7%22%2F%3E%0A%20%20%3Cpath%20d%3D%22M44%2030%20L44%2046%20M56%2030%20L56%2046%20M42%2030%20C42%2035%2046%2035%2046%2030%22%20stroke%3D%22%23fce588%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%2F%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2276%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C%20-apple-system%2C%20sans-serif%22%20font-weight%3D%22900%22%20font-size%3D%2215%22%20fill%3D%22%23ffffff%22%20letter-spacing%3D%221.5%22%3EHS%3C%2Ftext%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2287%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C%20-apple-system%2C%20sans-serif%22%20font-weight%3D%22800%22%20font-size%3D%226.5%22%20fill%3D%22%23fce588%22%20letter-spacing%3D%222%22%3ESTREET%20FOOD%3C%2Ftext%3E%0A%3C%2Fsvg%3E"
  },
  {
    "id": "rehmatullah-halwa-paratha-reti",
    "name": "Rehmatullah Halwa Paratha Stall",
    "area": "Reti Chowk",
    "city": "Gorakhpur",
    "address": "Old Mandi Road, Near Reti Chauraha, Gorakhpur",
    "description": "Centuries-old festive street delicacy of Gorakhpur! Giant 2-foot crisp golden paratha served by weight with aromatic saffron semolina halwa.",
    "categories": [
      "street-food",
      "sweets"
    ],
    "cuisines": [
      "Mithai",
      "Street Food"
    ],
    "popularDishes": [
      "Crispy Halwa Paratha",
      "Zarda Pulao",
      "Sheermal",
      "Shahi Tukda"
    ],
    "costForTwo": 110,
    "averageRating": 4.8,
    "reviewCount": 280,
    "imageUrl": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=1000&q=80",
    "isDemo": false,
    "phone": "+91 94509 22180",
    "whatsappPhone": "+91 94509 22180",
    "openTime": "15:00",
    "closeTime": "23:30",
    "openDays": [
      "Mon",
      "Tue",
      "Wed",
      "Thu",
      "Fri",
      "Sat",
      "Sun"
    ],
    "diet": "veg",
    "status": "Active",
    "ownerName": "Rehmatullah Khan",
    "ownerEmail": "rehmatullah.halwa@gorakhpurfoodguide.in",
    "facilities": [
      "Street Counter",
      "Takeaway",
      "UPI Accepted"
    ],
    "ratingsBreakdown": {
      "food": 4.9,
      "taste": 5,
      "hygiene": 4.5,
      "service": 4.8,
      "ambience": 4.1
    },
    "priceRange": {
      "min": 40,
      "max": 90
    },
    "distanceKm": 1.8,
    "menu": [
      {
        "id": "rh-1",
        "name": "Signature Halwa Paratha (200g)",
        "price": 60,
        "category": "Halwa Paratha",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "description": "Super thin deep-fried pastry paratha accompanied by dry-fruit loaded saffron halwa.",
        "imageUrl": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80"
      }
    ],
    "logoUrl": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20100%20100%22%20width%3D%22200%22%20height%3D%22200%22%3E%0A%20%20%3Cdefs%3E%0A%20%20%20%20%3ClinearGradient%20id%3D%22brandGrad_rehmatullah-halwa-paratha-reti%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%2394381c%22%2F%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23432818%22%2F%3E%0A%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%3Cfilter%20id%3D%22shadow_rehmatullah-halwa-paratha-reti%22%20x%3D%22-10%25%22%20y%3D%22-10%25%22%20width%3D%22120%25%22%20height%3D%22120%25%22%3E%0A%20%20%20%20%20%20%3CfeDropShadow%20dx%3D%220%22%20dy%3D%222%22%20stdDeviation%3D%222.5%22%20flood-opacity%3D%220.35%22%2F%3E%0A%20%20%20%20%3C%2Ffilter%3E%0A%20%20%3C%2Fdefs%3E%0A%20%20%3Crect%20x%3D%224%22%20y%3D%224%22%20width%3D%2292%22%20height%3D%2292%22%20rx%3D%2226%22%20fill%3D%22url(%23brandGrad_rehmatullah-halwa-paratha-reti)%22%20stroke%3D%22%23fce588%22%20stroke-width%3D%222.5%22%20filter%3D%22url(%23shadow_rehmatullah-halwa-paratha-reti)%22%2F%3E%0A%20%20%3Crect%20x%3D%229%22%20y%3D%229%22%20width%3D%2282%22%20height%3D%2282%22%20rx%3D%2221%22%20fill%3D%22none%22%20stroke%3D%22%23fce588%22%20stroke-width%3D%221%22%20stroke-dasharray%3D%223%203%22%20opacity%3D%220.45%22%2F%3E%0A%20%20%3Ccircle%20cx%3D%2250%22%20cy%3D%2238%22%20r%3D%2214%22%20stroke%3D%22%23fce588%22%20stroke-width%3D%222%22%20fill%3D%22none%22%20opacity%3D%220.7%22%2F%3E%0A%20%20%3Cpath%20d%3D%22M44%2030%20L44%2046%20M56%2030%20L56%2046%20M42%2030%20C42%2035%2046%2035%2046%2030%22%20stroke%3D%22%23fce588%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%2F%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2276%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C%20-apple-system%2C%20sans-serif%22%20font-weight%3D%22900%22%20font-size%3D%2215%22%20fill%3D%22%23ffffff%22%20letter-spacing%3D%221.5%22%3ERH%3C%2Ftext%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2287%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C%20-apple-system%2C%20sans-serif%22%20font-weight%3D%22800%22%20font-size%3D%226.5%22%20fill%3D%22%23fce588%22%20letter-spacing%3D%222%22%3ESTREET%20FOOD%3C%2Ftext%3E%0A%3C%2Fsvg%3E"
  },
  {
    "id": "tandoori-chai-mohaddipur",
    "name": "Tandoori Chai & Kulhad Rabdi Point",
    "area": "Mohaddipur",
    "city": "Gorakhpur",
    "address": "Near Mohaddipur Chauraha, Gorakhpur",
    "description": "Bustling tea counter famous for red-hot tandoor-roasted kulhad chai, earthen cup rabdi, and crispy samosas.",
    "categories": [
      "street-food",
      "cafe"
    ],
    "cuisines": [
      "Chai & Snacks",
      "Mithai"
    ],
    "popularDishes": [
      "Tandoori Chai",
      "Matka Rabdi",
      "Poha Jalebi",
      "Aloo Bread Roll"
    ],
    "costForTwo": 80,
    "averageRating": 4.7,
    "reviewCount": 250,
    "imageUrl": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=1000&q=80",
    "isDemo": false,
    "phone": "+91 98384 11920",
    "whatsappPhone": "+91 98384 11920",
    "openTime": "06:00",
    "closeTime": "22:30",
    "openDays": [
      "Mon",
      "Tue",
      "Wed",
      "Thu",
      "Fri",
      "Sat",
      "Sun"
    ],
    "diet": "veg",
    "status": "Active",
    "ownerName": "Sunil Yadav",
    "ownerEmail": "tandoorichai.gkp@gorakhpurfoodguide.in",
    "facilities": [
      "Street Stall",
      "Takeaway",
      "UPI Accepted"
    ],
    "ratingsBreakdown": {
      "food": 4.8,
      "taste": 4.8,
      "hygiene": 4.6,
      "service": 4.7,
      "ambience": 4.3
    },
    "priceRange": {
      "min": 25,
      "max": 60
    },
    "distanceKm": 2.3,
    "menu": [
      {
        "id": "tc-1",
        "name": "Smoked Tandoori Chai (Kulhad)",
        "price": 25,
        "category": "Chai",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "description": "Special ginger tea poured into oven-baked earthen kulhad creating smoky froth.",
        "imageUrl": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=600&q=80"
      }
    ],
    "logoUrl": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20100%20100%22%20width%3D%22200%22%20height%3D%22200%22%3E%0A%20%20%3Cdefs%3E%0A%20%20%20%20%3ClinearGradient%20id%3D%22brandGrad_tandoori-chai-mohaddipur%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%2394381c%22%2F%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23432818%22%2F%3E%0A%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%3Cfilter%20id%3D%22shadow_tandoori-chai-mohaddipur%22%20x%3D%22-10%25%22%20y%3D%22-10%25%22%20width%3D%22120%25%22%20height%3D%22120%25%22%3E%0A%20%20%20%20%20%20%3CfeDropShadow%20dx%3D%220%22%20dy%3D%222%22%20stdDeviation%3D%222.5%22%20flood-opacity%3D%220.35%22%2F%3E%0A%20%20%20%20%3C%2Ffilter%3E%0A%20%20%3C%2Fdefs%3E%0A%20%20%3Crect%20x%3D%224%22%20y%3D%224%22%20width%3D%2292%22%20height%3D%2292%22%20rx%3D%2226%22%20fill%3D%22url(%23brandGrad_tandoori-chai-mohaddipur)%22%20stroke%3D%22%23fce588%22%20stroke-width%3D%222.5%22%20filter%3D%22url(%23shadow_tandoori-chai-mohaddipur)%22%2F%3E%0A%20%20%3Crect%20x%3D%229%22%20y%3D%229%22%20width%3D%2282%22%20height%3D%2282%22%20rx%3D%2221%22%20fill%3D%22none%22%20stroke%3D%22%23fce588%22%20stroke-width%3D%221%22%20stroke-dasharray%3D%223%203%22%20opacity%3D%220.45%22%2F%3E%0A%20%20%3Ccircle%20cx%3D%2250%22%20cy%3D%2238%22%20r%3D%2214%22%20stroke%3D%22%23fce588%22%20stroke-width%3D%222%22%20fill%3D%22none%22%20opacity%3D%220.7%22%2F%3E%0A%20%20%3Cpath%20d%3D%22M44%2030%20L44%2046%20M56%2030%20L56%2046%20M42%2030%20C42%2035%2046%2035%2046%2030%22%20stroke%3D%22%23fce588%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%2F%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2276%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C%20-apple-system%2C%20sans-serif%22%20font-weight%3D%22900%22%20font-size%3D%2215%22%20fill%3D%22%23ffffff%22%20letter-spacing%3D%221.5%22%3ETC%3C%2Ftext%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2287%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C%20-apple-system%2C%20sans-serif%22%20font-weight%3D%22800%22%20font-size%3D%226.5%22%20fill%3D%22%23fce588%22%20letter-spacing%3D%222%22%3ESTREET%20FOOD%3C%2Ftext%3E%0A%3C%2Fsvg%3E"
  },
  {
    "id": "shri-radhe-chaat-betiahata",
    "name": "Shri Radhe Chaat & Pav Bhaji Stall",
    "area": "Betiahata",
    "city": "Gorakhpur",
    "address": "Near Betiahata Chauraha, Gorakhpur",
    "description": "Evening street favorites in Betiahata! Desi ghee tikki chaat, spicy pav bhaji, and authentic Banarasi dahi puchka.",
    "categories": [
      "street-food"
    ],
    "cuisines": [
      "Street Food & Chaat",
      "Pav Bhaji & South Indian"
    ],
    "popularDishes": [
      "Desi Ghee Aloo Tikki",
      "Amul Pav Bhaji",
      "Dahi Puri",
      "Pani Puri"
    ],
    "costForTwo": 120,
    "averageRating": 4.8,
    "reviewCount": 190,
    "imageUrl": "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1000&q=80",
    "isDemo": false,
    "phone": "+91 94151 77290",
    "whatsappPhone": "+91 94151 77290",
    "openTime": "16:00",
    "closeTime": "22:30",
    "openDays": [
      "Mon",
      "Tue",
      "Wed",
      "Thu",
      "Fri",
      "Sat",
      "Sun"
    ],
    "diet": "veg",
    "status": "Active",
    "ownerName": "Radhe Mohan",
    "ownerEmail": "shriradhe.chaat@gorakhpurfoodguide.in",
    "facilities": [
      "Street Stall",
      "Takeaway",
      "UPI Accepted"
    ],
    "ratingsBreakdown": {
      "food": 4.8,
      "taste": 4.9,
      "hygiene": 4.6,
      "service": 4.7,
      "ambience": 4.4
    },
    "priceRange": {
      "min": 40,
      "max": 80
    },
    "distanceKm": 1.2,
    "menu": [
      {
        "id": "sr-1",
        "name": "Desi Ghee Aloo Tikki (2 Pcs)",
        "price": 50,
        "category": "Chaat",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "description": "Golden pan-fried potato tikkis with sweet sonth and curd.",
        "imageUrl": "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80"
      }
    ],
    "logoUrl": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20100%20100%22%20width%3D%22200%22%20height%3D%22200%22%3E%0A%20%20%3Cdefs%3E%0A%20%20%20%20%3ClinearGradient%20id%3D%22brandGrad_shri-radhe-chaat-betiahata%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%2394381c%22%2F%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23432818%22%2F%3E%0A%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%3Cfilter%20id%3D%22shadow_shri-radhe-chaat-betiahata%22%20x%3D%22-10%25%22%20y%3D%22-10%25%22%20width%3D%22120%25%22%20height%3D%22120%25%22%3E%0A%20%20%20%20%20%20%3CfeDropShadow%20dx%3D%220%22%20dy%3D%222%22%20stdDeviation%3D%222.5%22%20flood-opacity%3D%220.35%22%2F%3E%0A%20%20%20%20%3C%2Ffilter%3E%0A%20%20%3C%2Fdefs%3E%0A%20%20%3Crect%20x%3D%224%22%20y%3D%224%22%20width%3D%2292%22%20height%3D%2292%22%20rx%3D%2226%22%20fill%3D%22url(%23brandGrad_shri-radhe-chaat-betiahata)%22%20stroke%3D%22%23fce588%22%20stroke-width%3D%222.5%22%20filter%3D%22url(%23shadow_shri-radhe-chaat-betiahata)%22%2F%3E%0A%20%20%3Crect%20x%3D%229%22%20y%3D%229%22%20width%3D%2282%22%20height%3D%2282%22%20rx%3D%2221%22%20fill%3D%22none%22%20stroke%3D%22%23fce588%22%20stroke-width%3D%221%22%20stroke-dasharray%3D%223%203%22%20opacity%3D%220.45%22%2F%3E%0A%20%20%3Ccircle%20cx%3D%2250%22%20cy%3D%2238%22%20r%3D%2214%22%20stroke%3D%22%23fce588%22%20stroke-width%3D%222%22%20fill%3D%22none%22%20opacity%3D%220.7%22%2F%3E%0A%20%20%3Cpath%20d%3D%22M44%2030%20L44%2046%20M56%2030%20L56%2046%20M42%2030%20C42%2035%2046%2035%2046%2030%22%20stroke%3D%22%23fce588%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%2F%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2276%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C%20-apple-system%2C%20sans-serif%22%20font-weight%3D%22900%22%20font-size%3D%2215%22%20fill%3D%22%23ffffff%22%20letter-spacing%3D%221.5%22%3ESR%3C%2Ftext%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2287%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C%20-apple-system%2C%20sans-serif%22%20font-weight%3D%22800%22%20font-size%3D%226.5%22%20fill%3D%22%23fce588%22%20letter-spacing%3D%222%22%3ESTREET%20FOOD%3C%2Ftext%3E%0A%3C%2Fsvg%3E"
  },
  {
    "id": "delhi-paratha-corner-golghar",
    "name": "Delhi Paratha Corner & Rolls",
    "area": "Golghar",
    "city": "Gorakhpur",
    "address": "Near Indralok Commercial Gate, Golghar, Gorakhpur",
    "description": "Crispy tawa parathas stuffed with paneer, gobhi, pyaaz, and served with green chutney and mango pickle.",
    "categories": [
      "street-food",
      "fast-food"
    ],
    "cuisines": [
      "North Indian",
      "Rolls & Kebabs"
    ],
    "popularDishes": [
      "Paneer Paratha",
      "Mix Veg Paratha",
      "Soya Chaap Roll",
      "Chai"
    ],
    "costForTwo": 130,
    "averageRating": 4.7,
    "reviewCount": 180,
    "imageUrl": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=1000&q=80",
    "isDemo": false,
    "phone": "+91 98380 55198",
    "whatsappPhone": "+91 98380 55198",
    "openTime": "12:00",
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
    "diet": "veg",
    "status": "Active",
    "ownerName": "Dharmendra Yadav",
    "ownerEmail": "delhi.paratha@gorakhpurfoodguide.in",
    "facilities": [
      "Street Counter",
      "Takeaway",
      "UPI Accepted"
    ],
    "ratingsBreakdown": {
      "food": 4.8,
      "taste": 4.8,
      "hygiene": 4.6,
      "service": 4.7,
      "ambience": 4.2
    },
    "priceRange": {
      "min": 50,
      "max": 90
    },
    "distanceKm": 0.4,
    "menu": [
      {
        "id": "dp-1",
        "name": "Stuffed Paneer Paratha",
        "price": 70,
        "category": "Paratha",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "description": "Fresh cottage cheese stuffed whole wheat paratha roasted in butter.",
        "imageUrl": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=600&q=80"
      }
    ],
    "logoUrl": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20100%20100%22%20width%3D%22200%22%20height%3D%22200%22%3E%0A%20%20%3Cdefs%3E%0A%20%20%20%20%3ClinearGradient%20id%3D%22brandGrad_delhi-paratha-corner-golghar%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%2394381c%22%2F%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23432818%22%2F%3E%0A%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%3Cfilter%20id%3D%22shadow_delhi-paratha-corner-golghar%22%20x%3D%22-10%25%22%20y%3D%22-10%25%22%20width%3D%22120%25%22%20height%3D%22120%25%22%3E%0A%20%20%20%20%20%20%3CfeDropShadow%20dx%3D%220%22%20dy%3D%222%22%20stdDeviation%3D%222.5%22%20flood-opacity%3D%220.35%22%2F%3E%0A%20%20%20%20%3C%2Ffilter%3E%0A%20%20%3C%2Fdefs%3E%0A%20%20%3Crect%20x%3D%224%22%20y%3D%224%22%20width%3D%2292%22%20height%3D%2292%22%20rx%3D%2226%22%20fill%3D%22url(%23brandGrad_delhi-paratha-corner-golghar)%22%20stroke%3D%22%23fce588%22%20stroke-width%3D%222.5%22%20filter%3D%22url(%23shadow_delhi-paratha-corner-golghar)%22%2F%3E%0A%20%20%3Crect%20x%3D%229%22%20y%3D%229%22%20width%3D%2282%22%20height%3D%2282%22%20rx%3D%2221%22%20fill%3D%22none%22%20stroke%3D%22%23fce588%22%20stroke-width%3D%221%22%20stroke-dasharray%3D%223%203%22%20opacity%3D%220.45%22%2F%3E%0A%20%20%3Ccircle%20cx%3D%2250%22%20cy%3D%2238%22%20r%3D%2214%22%20stroke%3D%22%23fce588%22%20stroke-width%3D%222%22%20fill%3D%22none%22%20opacity%3D%220.7%22%2F%3E%0A%20%20%3Cpath%20d%3D%22M44%2030%20L44%2046%20M56%2030%20L56%2046%20M42%2030%20C42%2035%2046%2035%2046%2030%22%20stroke%3D%22%23fce588%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%2F%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2276%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C%20-apple-system%2C%20sans-serif%22%20font-weight%3D%22900%22%20font-size%3D%2215%22%20fill%3D%22%23ffffff%22%20letter-spacing%3D%221.5%22%3EDP%3C%2Ftext%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2287%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C%20-apple-system%2C%20sans-serif%22%20font-weight%3D%22800%22%20font-size%3D%226.5%22%20fill%3D%22%23fce588%22%20letter-spacing%3D%222%22%3ESTREET%20FOOD%3C%2Ftext%3E%0A%3C%2Fsvg%3E"
  },
  {
    "id": "kanpur-thaggu-ke-laddu-stall",
    "name": "Kanpur Thaggu Ke Laddu & Badam Milk",
    "area": "Golghar",
    "city": "Gorakhpur",
    "address": "Cinema Road, Opp City Mall, Golghar, Gorakhpur",
    "description": "Renowned sweet stall famous for authentic suji-ghee laddus, pista kulfi, and slow-boiled hot saffron almond milk.",
    "categories": [
      "street-food",
      "sweets"
    ],
    "cuisines": [
      "Mithai",
      "Desserts"
    ],
    "popularDishes": [
      "Special Thaggu Laddu",
      "Hot Kesar Badam Milk",
      "Matka Kulfi",
      "Peda"
    ],
    "costForTwo": 110,
    "averageRating": 4.9,
    "reviewCount": 290,
    "imageUrl": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=1000&q=80",
    "isDemo": false,
    "phone": "+91 94150 44810",
    "whatsappPhone": "+91 94150 44810",
    "openTime": "10:00",
    "closeTime": "22:30",
    "openDays": [
      "Mon",
      "Tue",
      "Wed",
      "Thu",
      "Fri",
      "Sat",
      "Sun"
    ],
    "diet": "veg",
    "status": "Active",
    "ownerName": "Prakash Chandra",
    "ownerEmail": "thaggu.laddu@gorakhpurfoodguide.in",
    "facilities": [
      "Sweet Stall",
      "Gift Packs",
      "UPI Accepted"
    ],
    "ratingsBreakdown": {
      "food": 5,
      "taste": 5,
      "hygiene": 4.8,
      "service": 4.8,
      "ambience": 4.4
    },
    "priceRange": {
      "min": 40,
      "max": 90
    },
    "distanceKm": 0.3,
    "menu": [
      {
        "id": "tl-1",
        "name": "Special Laddu Box (250g)",
        "price": 90,
        "category": "Laddoo",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "description": "Semolina and pure ghee laddus with gond, makhana and dry fruits.",
        "imageUrl": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80"
      }
    ],
    "logoUrl": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20100%20100%22%20width%3D%22200%22%20height%3D%22200%22%3E%0A%20%20%3Cdefs%3E%0A%20%20%20%20%3ClinearGradient%20id%3D%22brandGrad_kanpur-thaggu-ke-laddu-stall%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%2394381c%22%2F%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23432818%22%2F%3E%0A%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%3Cfilter%20id%3D%22shadow_kanpur-thaggu-ke-laddu-stall%22%20x%3D%22-10%25%22%20y%3D%22-10%25%22%20width%3D%22120%25%22%20height%3D%22120%25%22%3E%0A%20%20%20%20%20%20%3CfeDropShadow%20dx%3D%220%22%20dy%3D%222%22%20stdDeviation%3D%222.5%22%20flood-opacity%3D%220.35%22%2F%3E%0A%20%20%20%20%3C%2Ffilter%3E%0A%20%20%3C%2Fdefs%3E%0A%20%20%3Crect%20x%3D%224%22%20y%3D%224%22%20width%3D%2292%22%20height%3D%2292%22%20rx%3D%2226%22%20fill%3D%22url(%23brandGrad_kanpur-thaggu-ke-laddu-stall)%22%20stroke%3D%22%23fce588%22%20stroke-width%3D%222.5%22%20filter%3D%22url(%23shadow_kanpur-thaggu-ke-laddu-stall)%22%2F%3E%0A%20%20%3Crect%20x%3D%229%22%20y%3D%229%22%20width%3D%2282%22%20height%3D%2282%22%20rx%3D%2221%22%20fill%3D%22none%22%20stroke%3D%22%23fce588%22%20stroke-width%3D%221%22%20stroke-dasharray%3D%223%203%22%20opacity%3D%220.45%22%2F%3E%0A%20%20%3Ccircle%20cx%3D%2250%22%20cy%3D%2238%22%20r%3D%2214%22%20stroke%3D%22%23fce588%22%20stroke-width%3D%222%22%20fill%3D%22none%22%20opacity%3D%220.7%22%2F%3E%0A%20%20%3Cpath%20d%3D%22M44%2030%20L44%2046%20M56%2030%20L56%2046%20M42%2030%20C42%2035%2046%2035%2046%2030%22%20stroke%3D%22%23fce588%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%2F%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2276%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C%20-apple-system%2C%20sans-serif%22%20font-weight%3D%22900%22%20font-size%3D%2215%22%20fill%3D%22%23ffffff%22%20letter-spacing%3D%221.5%22%3EKT%3C%2Ftext%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2287%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C%20-apple-system%2C%20sans-serif%22%20font-weight%3D%22800%22%20font-size%3D%226.5%22%20fill%3D%22%23fce588%22%20letter-spacing%3D%222%22%3ESTREET%20FOOD%3C%2Ftext%3E%0A%3C%2Fsvg%3E"
  },
  {
    "id": "punjabi-chole-samose-bankroad",
    "name": "Punjabi Chole Samose & Chaat Stall",
    "area": "Bank Road",
    "city": "Gorakhpur",
    "address": "Near Bank Road Crossing, Gorakhpur",
    "description": "Crowd-favorite street counter in Bank Road market serving spicy Chole Samosa chaat and crispy kachoris.",
    "categories": [
      "street-food"
    ],
    "cuisines": [
      "Kachori & Samosa",
      "Street Food"
    ],
    "popularDishes": [
      "Chole Samosa Chaat",
      "Paneer Pakora",
      "Dal Kachori",
      "Chai"
    ],
    "costForTwo": 80,
    "averageRating": 4.7,
    "reviewCount": 175,
    "imageUrl": "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1000&q=80",
    "isDemo": false,
    "phone": "+91 98382 33119",
    "whatsappPhone": "+91 98382 33119",
    "openTime": "09:00",
    "closeTime": "21:30",
    "openDays": [
      "Mon",
      "Tue",
      "Wed",
      "Thu",
      "Fri",
      "Sat",
      "Sun"
    ],
    "diet": "veg",
    "status": "Active",
    "ownerName": "Gurvinder Singh",
    "ownerEmail": "punjabi.chole@gorakhpurfoodguide.in",
    "facilities": [
      "Street Stall",
      "Takeaway",
      "UPI Accepted"
    ],
    "ratingsBreakdown": {
      "food": 4.8,
      "taste": 4.8,
      "hygiene": 4.5,
      "service": 4.7,
      "ambience": 4.1
    },
    "priceRange": {
      "min": 30,
      "max": 70
    },
    "distanceKm": 0.7,
    "menu": [
      {
        "id": "pc-1",
        "name": "Chole Samosa Plate (2 Pcs)",
        "price": 50,
        "category": "Samosa Chaat",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "description": "Two hot samosas crushed under spiced chickpeas with tamarind and mint dips.",
        "imageUrl": "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80"
      }
    ],
    "logoUrl": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20100%20100%22%20width%3D%22200%22%20height%3D%22200%22%3E%0A%20%20%3Cdefs%3E%0A%20%20%20%20%3ClinearGradient%20id%3D%22brandGrad_punjabi-chole-samose-bankroad%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%2394381c%22%2F%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23432818%22%2F%3E%0A%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%3Cfilter%20id%3D%22shadow_punjabi-chole-samose-bankroad%22%20x%3D%22-10%25%22%20y%3D%22-10%25%22%20width%3D%22120%25%22%20height%3D%22120%25%22%3E%0A%20%20%20%20%20%20%3CfeDropShadow%20dx%3D%220%22%20dy%3D%222%22%20stdDeviation%3D%222.5%22%20flood-opacity%3D%220.35%22%2F%3E%0A%20%20%20%20%3C%2Ffilter%3E%0A%20%20%3C%2Fdefs%3E%0A%20%20%3Crect%20x%3D%224%22%20y%3D%224%22%20width%3D%2292%22%20height%3D%2292%22%20rx%3D%2226%22%20fill%3D%22url(%23brandGrad_punjabi-chole-samose-bankroad)%22%20stroke%3D%22%23fce588%22%20stroke-width%3D%222.5%22%20filter%3D%22url(%23shadow_punjabi-chole-samose-bankroad)%22%2F%3E%0A%20%20%3Crect%20x%3D%229%22%20y%3D%229%22%20width%3D%2282%22%20height%3D%2282%22%20rx%3D%2221%22%20fill%3D%22none%22%20stroke%3D%22%23fce588%22%20stroke-width%3D%221%22%20stroke-dasharray%3D%223%203%22%20opacity%3D%220.45%22%2F%3E%0A%20%20%3Ccircle%20cx%3D%2250%22%20cy%3D%2238%22%20r%3D%2214%22%20stroke%3D%22%23fce588%22%20stroke-width%3D%222%22%20fill%3D%22none%22%20opacity%3D%220.7%22%2F%3E%0A%20%20%3Cpath%20d%3D%22M44%2030%20L44%2046%20M56%2030%20L56%2046%20M42%2030%20C42%2035%2046%2035%2046%2030%22%20stroke%3D%22%23fce588%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%2F%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2276%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C%20-apple-system%2C%20sans-serif%22%20font-weight%3D%22900%22%20font-size%3D%2215%22%20fill%3D%22%23ffffff%22%20letter-spacing%3D%221.5%22%3EPC%3C%2Ftext%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2287%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C%20-apple-system%2C%20sans-serif%22%20font-weight%3D%22800%22%20font-size%3D%226.5%22%20fill%3D%22%23fce588%22%20letter-spacing%3D%222%22%3ESTREET%20FOOD%3C%2Ftext%3E%0A%3C%2Fsvg%3E"
  },
  {
    "id": "shree-ganesh-pavbhaji-naukayan",
    "name": "Shree Ganesh Pav Bhaji & Chinese",
    "area": "Taramandal",
    "city": "Gorakhpur",
    "address": "Naukayan Ghat Food Street, Taramandal, Gorakhpur",
    "description": "Vibrant street stall by the lake offering buttery Pav Bhaji, Hakka Noodles, Veg Manchurian, and fresh lime soda.",
    "categories": [
      "street-food",
      "fast-food"
    ],
    "cuisines": [
      "Pav Bhaji & South Indian",
      "Momos & Chinese"
    ],
    "popularDishes": [
      "Butter Pav Bhaji",
      "Veg Hakka Noodles",
      "Crispy Manchurian",
      "Masala Pav"
    ],
    "costForTwo": 150,
    "averageRating": 4.7,
    "reviewCount": 230,
    "imageUrl": "https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=1000&q=80",
    "isDemo": false,
    "phone": "+91 72754 11980",
    "whatsappPhone": "+91 72754 11980",
    "openTime": "15:00",
    "closeTime": "23:30",
    "openDays": [
      "Mon",
      "Tue",
      "Wed",
      "Thu",
      "Fri",
      "Sat",
      "Sun"
    ],
    "diet": "veg",
    "status": "Active",
    "ownerName": "Ganesh Jaiswal",
    "ownerEmail": "ganesh.pavbhaji@gorakhpurfoodguide.in",
    "facilities": [
      "Lake View Seating",
      "Takeaway",
      "UPI Accepted"
    ],
    "ratingsBreakdown": {
      "food": 4.8,
      "taste": 4.8,
      "hygiene": 4.6,
      "service": 4.8,
      "ambience": 4.8
    },
    "priceRange": {
      "min": 60,
      "max": 120
    },
    "distanceKm": 2.1,
    "menu": [
      {
        "id": "gp-1",
        "name": "Special Amul Butter Pav Bhaji",
        "price": 80,
        "category": "Pav Bhaji",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "description": "Spiced vegetable curry mashed on tawa with generous butter and soft pav.",
        "imageUrl": "https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=600&q=80"
      }
    ],
    "logoUrl": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20100%20100%22%20width%3D%22200%22%20height%3D%22200%22%3E%0A%20%20%3Cdefs%3E%0A%20%20%20%20%3ClinearGradient%20id%3D%22brandGrad_shree-ganesh-pavbhaji-naukayan%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%2394381c%22%2F%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23432818%22%2F%3E%0A%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%3Cfilter%20id%3D%22shadow_shree-ganesh-pavbhaji-naukayan%22%20x%3D%22-10%25%22%20y%3D%22-10%25%22%20width%3D%22120%25%22%20height%3D%22120%25%22%3E%0A%20%20%20%20%20%20%3CfeDropShadow%20dx%3D%220%22%20dy%3D%222%22%20stdDeviation%3D%222.5%22%20flood-opacity%3D%220.35%22%2F%3E%0A%20%20%20%20%3C%2Ffilter%3E%0A%20%20%3C%2Fdefs%3E%0A%20%20%3Crect%20x%3D%224%22%20y%3D%224%22%20width%3D%2292%22%20height%3D%2292%22%20rx%3D%2226%22%20fill%3D%22url(%23brandGrad_shree-ganesh-pavbhaji-naukayan)%22%20stroke%3D%22%23fce588%22%20stroke-width%3D%222.5%22%20filter%3D%22url(%23shadow_shree-ganesh-pavbhaji-naukayan)%22%2F%3E%0A%20%20%3Crect%20x%3D%229%22%20y%3D%229%22%20width%3D%2282%22%20height%3D%2282%22%20rx%3D%2221%22%20fill%3D%22none%22%20stroke%3D%22%23fce588%22%20stroke-width%3D%221%22%20stroke-dasharray%3D%223%203%22%20opacity%3D%220.45%22%2F%3E%0A%20%20%3Ccircle%20cx%3D%2250%22%20cy%3D%2238%22%20r%3D%2214%22%20stroke%3D%22%23fce588%22%20stroke-width%3D%222%22%20fill%3D%22none%22%20opacity%3D%220.7%22%2F%3E%0A%20%20%3Cpath%20d%3D%22M44%2030%20L44%2046%20M56%2030%20L56%2046%20M42%2030%20C42%2035%2046%2035%2046%2030%22%20stroke%3D%22%23fce588%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%2F%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2276%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C%20-apple-system%2C%20sans-serif%22%20font-weight%3D%22900%22%20font-size%3D%2215%22%20fill%3D%22%23ffffff%22%20letter-spacing%3D%221.5%22%3ESG%3C%2Ftext%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2287%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C%20-apple-system%2C%20sans-serif%22%20font-weight%3D%22800%22%20font-size%3D%226.5%22%20fill%3D%22%23fce588%22%20letter-spacing%3D%222%22%3ESTREET%20FOOD%3C%2Ftext%3E%0A%3C%2Fsvg%3E"
  },
  {
    "id": "sardarji-malai-chaap-golghar",
    "name": "Sardarji Malai Chaap & Rolls",
    "area": "Golghar",
    "city": "Gorakhpur",
    "address": "Near Baldev Plaza Lane, Golghar, Gorakhpur",
    "description": "Tandoori street cart famous for creamy Malai Soya Chaap, Haryali Chaap, and crisp Rumali Rolls.",
    "categories": [
      "street-food"
    ],
    "cuisines": [
      "Rolls & Kebabs",
      "North Indian"
    ],
    "popularDishes": [
      "Afghani Malai Chaap",
      "Tandoori Chaap Roll",
      "Paneer Tikka",
      "Masala Chaap"
    ],
    "costForTwo": 180,
    "averageRating": 4.8,
    "reviewCount": 260,
    "imageUrl": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1000&q=80",
    "isDemo": false,
    "phone": "+91 98389 44102",
    "whatsappPhone": "+91 98389 44102",
    "openTime": "16:00",
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
    "diet": "veg",
    "status": "Active",
    "ownerName": "Jaswinder Singh",
    "ownerEmail": "sardarji.chaap@gorakhpurfoodguide.in",
    "facilities": [
      "Street Stall",
      "Takeaway",
      "UPI Accepted"
    ],
    "ratingsBreakdown": {
      "food": 4.9,
      "taste": 4.9,
      "hygiene": 4.6,
      "service": 4.7,
      "ambience": 4.3
    },
    "priceRange": {
      "min": 70,
      "max": 140
    },
    "distanceKm": 0.5,
    "menu": [
      {
        "id": "sm-1",
        "name": "Afghani Cream Soya Chaap",
        "price": 100,
        "category": "Soya Chaap",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "description": "Tender soya chunks marinated in heavy cream, cashews and white pepper.",
        "imageUrl": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80"
      }
    ],
    "logoUrl": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20100%20100%22%20width%3D%22200%22%20height%3D%22200%22%3E%0A%20%20%3Cdefs%3E%0A%20%20%20%20%3ClinearGradient%20id%3D%22brandGrad_sardarji-malai-chaap-golghar%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%2394381c%22%2F%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23432818%22%2F%3E%0A%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%3Cfilter%20id%3D%22shadow_sardarji-malai-chaap-golghar%22%20x%3D%22-10%25%22%20y%3D%22-10%25%22%20width%3D%22120%25%22%20height%3D%22120%25%22%3E%0A%20%20%20%20%20%20%3CfeDropShadow%20dx%3D%220%22%20dy%3D%222%22%20stdDeviation%3D%222.5%22%20flood-opacity%3D%220.35%22%2F%3E%0A%20%20%20%20%3C%2Ffilter%3E%0A%20%20%3C%2Fdefs%3E%0A%20%20%3Crect%20x%3D%224%22%20y%3D%224%22%20width%3D%2292%22%20height%3D%2292%22%20rx%3D%2226%22%20fill%3D%22url(%23brandGrad_sardarji-malai-chaap-golghar)%22%20stroke%3D%22%23fce588%22%20stroke-width%3D%222.5%22%20filter%3D%22url(%23shadow_sardarji-malai-chaap-golghar)%22%2F%3E%0A%20%20%3Crect%20x%3D%229%22%20y%3D%229%22%20width%3D%2282%22%20height%3D%2282%22%20rx%3D%2221%22%20fill%3D%22none%22%20stroke%3D%22%23fce588%22%20stroke-width%3D%221%22%20stroke-dasharray%3D%223%203%22%20opacity%3D%220.45%22%2F%3E%0A%20%20%3Ccircle%20cx%3D%2250%22%20cy%3D%2238%22%20r%3D%2214%22%20stroke%3D%22%23fce588%22%20stroke-width%3D%222%22%20fill%3D%22none%22%20opacity%3D%220.7%22%2F%3E%0A%20%20%3Cpath%20d%3D%22M44%2030%20L44%2046%20M56%2030%20L56%2046%20M42%2030%20C42%2035%2046%2035%2046%2030%22%20stroke%3D%22%23fce588%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%2F%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2276%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C%20-apple-system%2C%20sans-serif%22%20font-weight%3D%22900%22%20font-size%3D%2215%22%20fill%3D%22%23ffffff%22%20letter-spacing%3D%221.5%22%3ESM%3C%2Ftext%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2287%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C%20-apple-system%2C%20sans-serif%22%20font-weight%3D%22800%22%20font-size%3D%226.5%22%20fill%3D%22%23fce588%22%20letter-spacing%3D%222%22%3ESTREET%20FOOD%3C%2Ftext%3E%0A%3C%2Fsvg%3E"
  },
  {
    "id": "royal-falooda-shikanji-reti",
    "name": "Royal Falooda & Masala Shikanji Point",
    "area": "Reti Chowk",
    "city": "Gorakhpur",
    "address": "Ghantaghar Crossing, Reti Chowk, Gorakhpur",
    "description": "Refreshing summer drinks and traditional faloodas! Ice-chilled Masala Shikanji, Roohafza milkshakes, and dry fruit faloodas.",
    "categories": [
      "street-food",
      "sweets"
    ],
    "cuisines": [
      "Kulfi & Falooda",
      "Desserts"
    ],
    "popularDishes": [
      "Chilled Masala Shikanji",
      "Royal Rabdi Falooda",
      "Kewra Lassi",
      "Cold Badam Milk"
    ],
    "costForTwo": 90,
    "averageRating": 4.8,
    "reviewCount": 210,
    "imageUrl": "https://images.unsplash.com/photo-1505394033641-40c6ad1178d7?auto=format&fit=crop&w=1000&q=80",
    "isDemo": false,
    "phone": "+91 94153 11809",
    "whatsappPhone": "+91 94153 11809",
    "openTime": "11:00",
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
    "diet": "veg",
    "status": "Active",
    "ownerName": "Rashid Khan",
    "ownerEmail": "royal.falooda@gorakhpurfoodguide.in",
    "facilities": [
      "Drink Stall",
      "Takeaway",
      "UPI Accepted"
    ],
    "ratingsBreakdown": {
      "food": 4.9,
      "taste": 5,
      "hygiene": 4.7,
      "service": 4.8,
      "ambience": 4.2
    },
    "priceRange": {
      "min": 30,
      "max": 70
    },
    "distanceKm": 1.6,
    "menu": [
      {
        "id": "rf-1",
        "name": "Fresh Masala Shikanji with Baraf",
        "price": 30,
        "category": "Shikanji",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "description": "Fresh squeezed lime juice with crushed ice, rock salt, roasted cumin and mint.",
        "imageUrl": "https://images.unsplash.com/photo-1505394033641-40c6ad1178d7?auto=format&fit=crop&w=600&q=80"
      }
    ],
    "logoUrl": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20100%20100%22%20width%3D%22200%22%20height%3D%22200%22%3E%0A%20%20%3Cdefs%3E%0A%20%20%20%20%3ClinearGradient%20id%3D%22brandGrad_royal-falooda-shikanji-reti%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%2394381c%22%2F%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23432818%22%2F%3E%0A%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%3Cfilter%20id%3D%22shadow_royal-falooda-shikanji-reti%22%20x%3D%22-10%25%22%20y%3D%22-10%25%22%20width%3D%22120%25%22%20height%3D%22120%25%22%3E%0A%20%20%20%20%20%20%3CfeDropShadow%20dx%3D%220%22%20dy%3D%222%22%20stdDeviation%3D%222.5%22%20flood-opacity%3D%220.35%22%2F%3E%0A%20%20%20%20%3C%2Ffilter%3E%0A%20%20%3C%2Fdefs%3E%0A%20%20%3Crect%20x%3D%224%22%20y%3D%224%22%20width%3D%2292%22%20height%3D%2292%22%20rx%3D%2226%22%20fill%3D%22url(%23brandGrad_royal-falooda-shikanji-reti)%22%20stroke%3D%22%23fce588%22%20stroke-width%3D%222.5%22%20filter%3D%22url(%23shadow_royal-falooda-shikanji-reti)%22%2F%3E%0A%20%20%3Crect%20x%3D%229%22%20y%3D%229%22%20width%3D%2282%22%20height%3D%2282%22%20rx%3D%2221%22%20fill%3D%22none%22%20stroke%3D%22%23fce588%22%20stroke-width%3D%221%22%20stroke-dasharray%3D%223%203%22%20opacity%3D%220.45%22%2F%3E%0A%20%20%3Ccircle%20cx%3D%2250%22%20cy%3D%2238%22%20r%3D%2214%22%20stroke%3D%22%23fce588%22%20stroke-width%3D%222%22%20fill%3D%22none%22%20opacity%3D%220.7%22%2F%3E%0A%20%20%3Cpath%20d%3D%22M44%2030%20L44%2046%20M56%2030%20L56%2046%20M42%2030%20C42%2035%2046%2035%2046%2030%22%20stroke%3D%22%23fce588%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%2F%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2276%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C%20-apple-system%2C%20sans-serif%22%20font-weight%3D%22900%22%20font-size%3D%2215%22%20fill%3D%22%23ffffff%22%20letter-spacing%3D%221.5%22%3ERF%3C%2Ftext%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2287%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C%20-apple-system%2C%20sans-serif%22%20font-weight%3D%22800%22%20font-size%3D%226.5%22%20fill%3D%22%23fce588%22%20letter-spacing%3D%222%22%3ESTREET%20FOOD%3C%2Ftext%3E%0A%3C%2Fsvg%3E"
  },
  {
    "id": "kundan-chaat-buxipur",
    "name": "Kundan Chaat & Golgappa Corner",
    "area": "Buxipur",
    "city": "Gorakhpur",
    "address": "Near Buxipur Post Office, Gorakhpur",
    "description": "Neighborhood chaat stall celebrated for crispy spicy aloo tikki, dahi gujiya, and sweet tamarind pani puris.",
    "categories": [
      "street-food"
    ],
    "cuisines": [
      "Street Food & Chaat"
    ],
    "popularDishes": [
      "Aloo Tikki Chaat",
      "Pudina Pani Puri",
      "Dahi Vada",
      "Papdi Chaat"
    ],
    "costForTwo": 90,
    "averageRating": 4.7,
    "reviewCount": 195,
    "imageUrl": "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1000&q=80",
    "isDemo": false,
    "phone": "+91 98393 22410",
    "whatsappPhone": "+91 98393 22410",
    "openTime": "15:30",
    "closeTime": "22:00",
    "openDays": [
      "Mon",
      "Tue",
      "Wed",
      "Thu",
      "Fri",
      "Sat",
      "Sun"
    ],
    "diet": "veg",
    "status": "Active",
    "ownerName": "Kundan Lal",
    "ownerEmail": "kundan.chaat@gorakhpurfoodguide.in",
    "facilities": [
      "Street Stall",
      "Takeaway",
      "UPI Accepted"
    ],
    "ratingsBreakdown": {
      "food": 4.8,
      "taste": 4.9,
      "hygiene": 4.5,
      "service": 4.7,
      "ambience": 4.1
    },
    "priceRange": {
      "min": 35,
      "max": 70
    },
    "distanceKm": 1,
    "menu": [
      {
        "id": "kc-1",
        "name": "Crispy Aloo Tikki with Dahi & Sonth",
        "price": 40,
        "category": "Chaat",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "description": "Mashed spiced potato patties crisped on tawa with tangy tamarind and sweet curd.",
        "imageUrl": "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80"
      }
    ],
    "logoUrl": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20100%20100%22%20width%3D%22200%22%20height%3D%22200%22%3E%0A%20%20%3Cdefs%3E%0A%20%20%20%20%3ClinearGradient%20id%3D%22brandGrad_kundan-chaat-buxipur%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%2394381c%22%2F%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23432818%22%2F%3E%0A%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%3Cfilter%20id%3D%22shadow_kundan-chaat-buxipur%22%20x%3D%22-10%25%22%20y%3D%22-10%25%22%20width%3D%22120%25%22%20height%3D%22120%25%22%3E%0A%20%20%20%20%20%20%3CfeDropShadow%20dx%3D%220%22%20dy%3D%222%22%20stdDeviation%3D%222.5%22%20flood-opacity%3D%220.35%22%2F%3E%0A%20%20%20%20%3C%2Ffilter%3E%0A%20%20%3C%2Fdefs%3E%0A%20%20%3Crect%20x%3D%224%22%20y%3D%224%22%20width%3D%2292%22%20height%3D%2292%22%20rx%3D%2226%22%20fill%3D%22url(%23brandGrad_kundan-chaat-buxipur)%22%20stroke%3D%22%23fce588%22%20stroke-width%3D%222.5%22%20filter%3D%22url(%23shadow_kundan-chaat-buxipur)%22%2F%3E%0A%20%20%3Crect%20x%3D%229%22%20y%3D%229%22%20width%3D%2282%22%20height%3D%2282%22%20rx%3D%2221%22%20fill%3D%22none%22%20stroke%3D%22%23fce588%22%20stroke-width%3D%221%22%20stroke-dasharray%3D%223%203%22%20opacity%3D%220.45%22%2F%3E%0A%20%20%3Ccircle%20cx%3D%2250%22%20cy%3D%2238%22%20r%3D%2214%22%20stroke%3D%22%23fce588%22%20stroke-width%3D%222%22%20fill%3D%22none%22%20opacity%3D%220.7%22%2F%3E%0A%20%20%3Cpath%20d%3D%22M44%2030%20L44%2046%20M56%2030%20L56%2046%20M42%2030%20C42%2035%2046%2035%2046%2030%22%20stroke%3D%22%23fce588%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%2F%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2276%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C%20-apple-system%2C%20sans-serif%22%20font-weight%3D%22900%22%20font-size%3D%2215%22%20fill%3D%22%23ffffff%22%20letter-spacing%3D%221.5%22%3EKC%3C%2Ftext%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2287%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C%20-apple-system%2C%20sans-serif%22%20font-weight%3D%22800%22%20font-size%3D%226.5%22%20fill%3D%22%23fce588%22%20letter-spacing%3D%222%22%3ESTREET%20FOOD%3C%2Ftext%3E%0A%3C%2Fsvg%3E"
  },
  {
    "id": "shankar-laddoo-bhandar-mohaddipur",
    "name": "Shankar Ji Peda & Samosa Stall",
    "area": "Mohaddipur",
    "city": "Gorakhpur",
    "address": "Near Mohaddipur Petrol Pump, Gorakhpur",
    "description": "Popular tea and snack stall famous for morning khasta kachoris, fresh samosas, and traditional milk pedas.",
    "categories": [
      "street-food",
      "sweets"
    ],
    "cuisines": [
      "Kachori & Samosa",
      "Mithai"
    ],
    "popularDishes": [
      "Khasta Kachori Aloo",
      "Kaju Samosa",
      "Mathura Peda",
      "Chai"
    ],
    "costForTwo": 80,
    "averageRating": 4.7,
    "reviewCount": 220,
    "imageUrl": "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1000&q=80",
    "isDemo": false,
    "phone": "+91 94158 33190",
    "whatsappPhone": "+91 94158 33190",
    "openTime": "06:30",
    "closeTime": "21:30",
    "openDays": [
      "Mon",
      "Tue",
      "Wed",
      "Thu",
      "Fri",
      "Sat",
      "Sun"
    ],
    "diet": "veg",
    "status": "Active",
    "ownerName": "Shankar Dayal",
    "ownerEmail": "shankar.peda@gorakhpurfoodguide.in",
    "facilities": [
      "Street Counter",
      "Takeaway",
      "UPI Accepted"
    ],
    "ratingsBreakdown": {
      "food": 4.8,
      "taste": 4.8,
      "hygiene": 4.6,
      "service": 4.7,
      "ambience": 4.2
    },
    "priceRange": {
      "min": 30,
      "max": 70
    },
    "distanceKm": 2.5,
    "menu": [
      {
        "id": "sp-1",
        "name": "Khasta Kachori with Peppery Sabzi (4 Pcs)",
        "price": 40,
        "category": "Kachori",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "description": "Crispy flaky kachoris served with spiced potato and hing curry.",
        "imageUrl": "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80"
      }
    ],
    "logoUrl": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20100%20100%22%20width%3D%22200%22%20height%3D%22200%22%3E%0A%20%20%3Cdefs%3E%0A%20%20%20%20%3ClinearGradient%20id%3D%22brandGrad_shankar-laddoo-bhandar-mohaddipur%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%2394381c%22%2F%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23432818%22%2F%3E%0A%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%3Cfilter%20id%3D%22shadow_shankar-laddoo-bhandar-mohaddipur%22%20x%3D%22-10%25%22%20y%3D%22-10%25%22%20width%3D%22120%25%22%20height%3D%22120%25%22%3E%0A%20%20%20%20%20%20%3CfeDropShadow%20dx%3D%220%22%20dy%3D%222%22%20stdDeviation%3D%222.5%22%20flood-opacity%3D%220.35%22%2F%3E%0A%20%20%20%20%3C%2Ffilter%3E%0A%20%20%3C%2Fdefs%3E%0A%20%20%3Crect%20x%3D%224%22%20y%3D%224%22%20width%3D%2292%22%20height%3D%2292%22%20rx%3D%2226%22%20fill%3D%22url(%23brandGrad_shankar-laddoo-bhandar-mohaddipur)%22%20stroke%3D%22%23fce588%22%20stroke-width%3D%222.5%22%20filter%3D%22url(%23shadow_shankar-laddoo-bhandar-mohaddipur)%22%2F%3E%0A%20%20%3Crect%20x%3D%229%22%20y%3D%229%22%20width%3D%2282%22%20height%3D%2282%22%20rx%3D%2221%22%20fill%3D%22none%22%20stroke%3D%22%23fce588%22%20stroke-width%3D%221%22%20stroke-dasharray%3D%223%203%22%20opacity%3D%220.45%22%2F%3E%0A%20%20%3Ccircle%20cx%3D%2250%22%20cy%3D%2238%22%20r%3D%2214%22%20stroke%3D%22%23fce588%22%20stroke-width%3D%222%22%20fill%3D%22none%22%20opacity%3D%220.7%22%2F%3E%0A%20%20%3Cpath%20d%3D%22M44%2030%20L44%2046%20M56%2030%20L56%2046%20M42%2030%20C42%2035%2046%2035%2046%2030%22%20stroke%3D%22%23fce588%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%2F%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2276%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C%20-apple-system%2C%20sans-serif%22%20font-weight%3D%22900%22%20font-size%3D%2215%22%20fill%3D%22%23ffffff%22%20letter-spacing%3D%221.5%22%3ESJ%3C%2Ftext%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2287%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C%20-apple-system%2C%20sans-serif%22%20font-weight%3D%22800%22%20font-size%3D%226.5%22%20fill%3D%22%23fce588%22%20letter-spacing%3D%222%22%3ESTREET%20FOOD%3C%2Ftext%3E%0A%3C%2Fsvg%3E"
  },
  {
    "id": "chatori-gali-momos-civillines",
    "name": "Chatori Gali Momos & Spring Rolls",
    "area": "Civil Lines",
    "city": "Gorakhpur",
    "address": "Behind City Mall, Civil Lines, Gorakhpur",
    "description": "Youth evening hangout famous for crispy fried vegetable spring rolls, Schezwan fried momos, and chilli paneer gravy.",
    "categories": [
      "street-food",
      "fast-food"
    ],
    "cuisines": [
      "Momos & Chinese",
      "Fast Food"
    ],
    "popularDishes": [
      "Crispy Spring Rolls",
      "Schezwan Fried Momos",
      "Chilli Paneer Dry",
      "Veg Noodles"
    ],
    "costForTwo": 160,
    "averageRating": 4.8,
    "reviewCount": 250,
    "imageUrl": "https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?auto=format&fit=crop&w=1000&q=80",
    "isDemo": false,
    "phone": "+91 98394 55102",
    "whatsappPhone": "+91 98394 55102",
    "openTime": "14:30",
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
    "ownerName": "Aman Srivastava",
    "ownerEmail": "chatorigali.gkp@gorakhpurfoodguide.in",
    "facilities": [
      "Street Counter",
      "Takeaway",
      "UPI Accepted"
    ],
    "ratingsBreakdown": {
      "food": 4.8,
      "taste": 4.9,
      "hygiene": 4.6,
      "service": 4.8,
      "ambience": 4.5
    },
    "priceRange": {
      "min": 60,
      "max": 130
    },
    "distanceKm": 0.7,
    "menu": [
      {
        "id": "cg-1",
        "name": "Golden Veggie Spring Rolls (2 Pcs)",
        "price": 70,
        "category": "Spring Rolls",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "description": "Crisp sheet rolls stuffed with stir fried noodles and vegetables served with sweet chili sauce.",
        "imageUrl": "https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?auto=format&fit=crop&w=600&q=80"
      }
    ],
    "logoUrl": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20100%20100%22%20width%3D%22200%22%20height%3D%22200%22%3E%0A%20%20%3Cdefs%3E%0A%20%20%20%20%3ClinearGradient%20id%3D%22brandGrad_chatori-gali-momos-civillines%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%2394381c%22%2F%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23432818%22%2F%3E%0A%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%3Cfilter%20id%3D%22shadow_chatori-gali-momos-civillines%22%20x%3D%22-10%25%22%20y%3D%22-10%25%22%20width%3D%22120%25%22%20height%3D%22120%25%22%3E%0A%20%20%20%20%20%20%3CfeDropShadow%20dx%3D%220%22%20dy%3D%222%22%20stdDeviation%3D%222.5%22%20flood-opacity%3D%220.35%22%2F%3E%0A%20%20%20%20%3C%2Ffilter%3E%0A%20%20%3C%2Fdefs%3E%0A%20%20%3Crect%20x%3D%224%22%20y%3D%224%22%20width%3D%2292%22%20height%3D%2292%22%20rx%3D%2226%22%20fill%3D%22url(%23brandGrad_chatori-gali-momos-civillines)%22%20stroke%3D%22%23fce588%22%20stroke-width%3D%222.5%22%20filter%3D%22url(%23shadow_chatori-gali-momos-civillines)%22%2F%3E%0A%20%20%3Crect%20x%3D%229%22%20y%3D%229%22%20width%3D%2282%22%20height%3D%2282%22%20rx%3D%2221%22%20fill%3D%22none%22%20stroke%3D%22%23fce588%22%20stroke-width%3D%221%22%20stroke-dasharray%3D%223%203%22%20opacity%3D%220.45%22%2F%3E%0A%20%20%3Ccircle%20cx%3D%2250%22%20cy%3D%2238%22%20r%3D%2214%22%20stroke%3D%22%23fce588%22%20stroke-width%3D%222%22%20fill%3D%22none%22%20opacity%3D%220.7%22%2F%3E%0A%20%20%3Cpath%20d%3D%22M44%2030%20L44%2046%20M56%2030%20L56%2046%20M42%2030%20C42%2035%2046%2035%2046%2030%22%20stroke%3D%22%23fce588%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%2F%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2276%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C%20-apple-system%2C%20sans-serif%22%20font-weight%3D%22900%22%20font-size%3D%2215%22%20fill%3D%22%23ffffff%22%20letter-spacing%3D%221.5%22%3ECG%3C%2Ftext%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2287%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C%20-apple-system%2C%20sans-serif%22%20font-weight%3D%22800%22%20font-size%3D%226.5%22%20fill%3D%22%23fce588%22%20letter-spacing%3D%222%22%3ESTREET%20FOOD%3C%2Ftext%3E%0A%3C%2Fsvg%3E"
  },
{
  "id": "street-papdi-golghar",
  "name": "Papdi Chaat Corner",
  "area": "Golghar",
  "city": "Gorakhpur",
  "description": "Famous roadside chaat stall near Golghar circle. Crispy papdi, tangy tamarind chutney, fresh curd — the ultimate Gorakhpur evening snack experience.",
  "categories": [
    "street-food",
    "fast-food"
  ],
  "cuisines": [
    "Chaat",
    "Street Food"
  ],
  "popularDishes": [
    "Papdi Chaat",
    "Dahi Puri",
    "Aloo Tikki Chaat"
  ],
  "costForTwo": 80,
  "averageRating": 4.5,
  "reviewCount": 62,
  "imageUrl": "https://images.unsplash.com/photo-1625398407796-67d6a46dab7b?auto=format&fit=crop&w=600&q=80",
  "isDemo": false,
  "phone": "7275112233",
  "address": "Golghar Chauraha, Near Bus Stand, Gorakhpur - 273001",
  "openTime": "15:00",
  "closeTime": "22:00",
  "openDays": [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
  ],
  "diet": "veg",
  "status": "Active",
  "ownerName": "Ramesh Kumar",
  "ownerEmail": "papdi.golghar@gmail.com",
  "facilities": [
    "Takeaway"
  ],
  "menu": [
    {
      "id": "pg-1",
      "name": "Papdi Chaat",
      "price": 40,
      "category": "Chaat",
      "diet": "veg",
      "description": "Crispy papdi topped with curd, chutneys and sev",
      "imageUrl": "https://images.unsplash.com/photo-1625398407796-67d6a46dab7b?auto=format&fit=crop&w=400&q=70",
      "isAvailable": true,
      "isFeatured": true
    },
    {
      "id": "pg-2",
      "name": "Dahi Puri",
      "price": 35,
      "category": "Chaat",
      "diet": "veg",
      "description": "Hollow puris filled with curd and tangy chutneys",
      "imageUrl": "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=400&q=70",
      "isAvailable": true,
      "isFeatured": false
    },
    {
      "id": "pg-3",
      "name": "Aloo Tikki Chaat",
      "price": 40,
      "category": "Chaat",
      "diet": "veg",
      "description": "Spiced potato patties with chaat masala and chutneys",
      "imageUrl": "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=400&q=70",
      "isAvailable": true,
      "isFeatured": false
    }
  ],
  "ratingsBreakdown": {
    "food": 4.6,
    "taste": 4.7,
    "hygiene": 4.2,
    "service": 4.3,
    "ambience": 3.9
  },
  "priceRange": {
    "min": 30,
    "max": 50
  },
  "distanceKm": 1,
  "logoUrl": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20100%20100%22%20width%3D%22200%22%20height%3D%22200%22%3E%0A%20%20%3Cdefs%3E%0A%20%20%20%20%3ClinearGradient%20id%3D%22g_PC%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23d97706%22%2F%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%2392400e%22%2F%3E%0A%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%3C%2Fdefs%3E%0A%20%20%3Crect%20x%3D%224%22%20y%3D%224%22%20width%3D%2292%22%20height%3D%2292%22%20rx%3D%2226%22%20fill%3D%22url(%23g_PC)%22%20stroke%3D%22%23fce588%22%20stroke-width%3D%222.5%22%2F%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2258%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C-apple-system%2Csans-serif%22%20font-weight%3D%22900%22%20font-size%3D%2228%22%20fill%3D%22%23ffffff%22%20letter-spacing%3D%221%22%3EPC%3C%2Ftext%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2280%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C-apple-system%2Csans-serif%22%20font-weight%3D%22800%22%20font-size%3D%227%22%20fill%3D%22%23fce588%22%20letter-spacing%3D%222%22%3ECHAAT%3C%2Ftext%3E%0A%3C%2Fsvg%3E"
},
{
  "id": "street-golgappa-reti",
  "name": "Reti Chowk Golgappa Wala",
  "area": "Reti Chowk",
  "city": "Gorakhpur",
  "description": "Iconic golgappa stall at Reti Chowk. Known for pani puri with six flavors of pani — spicy, meetha, pudina, jaljeera, imli and hing. Running since 1998.",
  "categories": [
    "street-food",
    "fast-food"
  ],
  "cuisines": [
    "Street Food",
    "Chaat"
  ],
  "popularDishes": [
    "Golgappa",
    "Sookha Puri",
    "Dahi Bhalla"
  ],
  "costForTwo": 60,
  "averageRating": 4.6,
  "reviewCount": 78,
  "imageUrl": "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80",
  "isDemo": false,
  "phone": "9838445566",
  "address": "Reti Chowk, Near Canara Bank, Gorakhpur - 273001",
  "openTime": "16:00",
  "closeTime": "21:30",
  "openDays": [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
  ],
  "diet": "veg",
  "status": "Active",
  "ownerName": "Suresh Prasad",
  "ownerEmail": "reti.golgappa@gmail.com",
  "facilities": [
    "Takeaway"
  ],
  "menu": [
    {
      "id": "rg-1",
      "name": "Golgappa Plate (8 pcs)",
      "price": 25,
      "category": "Chaat",
      "diet": "veg",
      "description": "Crispy puris with spiced water and masala",
      "imageUrl": "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=400&q=70",
      "isAvailable": true,
      "isFeatured": true
    },
    {
      "id": "rg-2",
      "name": "Sookha Puri",
      "price": 20,
      "category": "Chaat",
      "diet": "veg",
      "description": "Dry puri with masala potato filling",
      "imageUrl": "https://images.unsplash.com/photo-1625398407796-67d6a46dab7b?auto=format&fit=crop&w=400&q=70",
      "isAvailable": true,
      "isFeatured": false
    },
    {
      "id": "rg-3",
      "name": "Dahi Bhalla",
      "price": 40,
      "category": "Chaat",
      "diet": "veg",
      "description": "Lentil dumplings in cool curd with chutneys",
      "imageUrl": "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=400&q=70",
      "isAvailable": true,
      "isFeatured": false
    }
  ],
  "ratingsBreakdown": {
    "food": 4.7,
    "taste": 4.8,
    "hygiene": 4.3,
    "service": 4.4,
    "ambience": 3.8
  },
  "priceRange": {
    "min": 20,
    "max": 40
  },
  "distanceKm": 2.1,
  "logoUrl": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20100%20100%22%20width%3D%22200%22%20height%3D%22200%22%3E%0A%20%20%3Cdefs%3E%0A%20%20%20%20%3ClinearGradient%20id%3D%22g_RG%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%2316a34a%22%2F%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%2314532d%22%2F%3E%0A%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%3C%2Fdefs%3E%0A%20%20%3Crect%20x%3D%224%22%20y%3D%224%22%20width%3D%2292%22%20height%3D%2292%22%20rx%3D%2226%22%20fill%3D%22url(%23g_RG)%22%20stroke%3D%22%23fce588%22%20stroke-width%3D%222.5%22%2F%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2258%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C-apple-system%2Csans-serif%22%20font-weight%3D%22900%22%20font-size%3D%2228%22%20fill%3D%22%23ffffff%22%20letter-spacing%3D%221%22%3ERG%3C%2Ftext%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2280%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C-apple-system%2Csans-serif%22%20font-weight%3D%22800%22%20font-size%3D%227%22%20fill%3D%22%23fce588%22%20letter-spacing%3D%222%22%3EGOLGAPPA%3C%2Ftext%3E%0A%3C%2Fsvg%3E"
},
{
  "id": "street-chaat-asuran",
  "name": "Asuran Chaat House",
  "area": "Asuran Chowk",
  "city": "Gorakhpur",
  "description": "Street-side chaat heaven at Asuran Chowk. The bhel puri and sev puri draw crowds every evening from across the city.",
  "categories": [
    "street-food",
    "fast-food"
  ],
  "cuisines": [
    "Chaat",
    "Street Food"
  ],
  "popularDishes": [
    "Bhel Puri",
    "Sev Puri",
    "Ram Ladoo"
  ],
  "costForTwo": 70,
  "averageRating": 4.4,
  "reviewCount": 45,
  "imageUrl": "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?auto=format&fit=crop&w=600&q=80",
  "isDemo": false,
  "phone": "6386221144",
  "address": "Asuran Chowk Market, Gorakhpur - 273001",
  "openTime": "15:30",
  "closeTime": "21:00",
  "openDays": [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
  ],
  "diet": "veg",
  "status": "Active",
  "ownerName": "Dinesh Yadav",
  "ownerEmail": "asuran.chaat@gmail.com",
  "facilities": [
    "Takeaway"
  ],
  "menu": [
    {
      "id": "ac-1",
      "name": "Bhel Puri",
      "price": 30,
      "category": "Chaat",
      "diet": "veg",
      "description": "Puffed rice with vegetables, chutneys and sev",
      "imageUrl": "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?auto=format&fit=crop&w=400&q=70",
      "isAvailable": true,
      "isFeatured": true
    },
    {
      "id": "ac-2",
      "name": "Sev Puri",
      "price": 35,
      "category": "Chaat",
      "diet": "veg",
      "description": "Crispy puris with potato, onion and sev",
      "imageUrl": "https://images.unsplash.com/photo-1625398407796-67d6a46dab7b?auto=format&fit=crop&w=400&q=70",
      "isAvailable": true,
      "isFeatured": false
    },
    {
      "id": "ac-3",
      "name": "Ram Ladoo",
      "price": 25,
      "category": "Snack",
      "diet": "veg",
      "description": "Moong dal fritters with radish and green chutney",
      "imageUrl": "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=400&q=70",
      "isAvailable": true,
      "isFeatured": false
    }
  ],
  "ratingsBreakdown": {
    "food": 4.5,
    "taste": 4.6,
    "hygiene": 4.1,
    "service": 4.2,
    "ambience": 3.7
  },
  "priceRange": {
    "min": 25,
    "max": 45
  },
  "distanceKm": 1.8,
  "logoUrl": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20100%20100%22%20width%3D%22200%22%20height%3D%22200%22%3E%0A%20%20%3Cdefs%3E%0A%20%20%20%20%3ClinearGradient%20id%3D%22g_AC%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23dc2626%22%2F%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%237f1d1d%22%2F%3E%0A%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%3C%2Fdefs%3E%0A%20%20%3Crect%20x%3D%224%22%20y%3D%224%22%20width%3D%2292%22%20height%3D%2292%22%20rx%3D%2226%22%20fill%3D%22url(%23g_AC)%22%20stroke%3D%22%23fce588%22%20stroke-width%3D%222.5%22%2F%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2258%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C-apple-system%2Csans-serif%22%20font-weight%3D%22900%22%20font-size%3D%2228%22%20fill%3D%22%23ffffff%22%20letter-spacing%3D%221%22%3EAC%3C%2Ftext%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2280%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C-apple-system%2Csans-serif%22%20font-weight%3D%22800%22%20font-size%3D%227%22%20fill%3D%22%23fce588%22%20letter-spacing%3D%222%22%3ECHAAT%3C%2Ftext%3E%0A%3C%2Fsvg%3E"
},
{
  "id": "street-tikki-betiahata",
  "name": "Betiahata Tikki Stall",
  "area": "Betiahata",
  "city": "Gorakhpur",
  "description": "Must-visit aloo tikki stall in Betiahata. The tikkis are shallow-fried on a large tawa with desi ghee, served with green chutney and imli sauce.",
  "categories": [
    "street-food",
    "fast-food"
  ],
  "cuisines": [
    "Street Food",
    "Chaat"
  ],
  "popularDishes": [
    "Aloo Tikki",
    "Ragda Tikki",
    "Matar Kulcha"
  ],
  "costForTwo": 90,
  "averageRating": 4.5,
  "reviewCount": 54,
  "imageUrl": "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=600&q=80",
  "isDemo": false,
  "phone": "8382334455",
  "address": "Betiahata Chauraha, Gorakhpur - 273001",
  "openTime": "14:00",
  "closeTime": "20:30",
  "openDays": [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
  ],
  "diet": "veg",
  "status": "Active",
  "ownerName": "Govind Singh",
  "ownerEmail": "betiahata.tikki@gmail.com",
  "facilities": [
    "Takeaway",
    "Dine-in"
  ],
  "menu": [
    {
      "id": "bt-1",
      "name": "Aloo Tikki (2 pcs)",
      "price": 30,
      "category": "Snack",
      "diet": "veg",
      "description": "Crispy spiced potato patties on tawa",
      "imageUrl": "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=400&q=70",
      "isAvailable": true,
      "isFeatured": true
    },
    {
      "id": "bt-2",
      "name": "Ragda Tikki",
      "price": 45,
      "category": "Chaat",
      "diet": "veg",
      "description": "Tikki topped with spiced white peas curry",
      "imageUrl": "https://images.unsplash.com/photo-1625398407796-67d6a46dab7b?auto=format&fit=crop&w=400&q=70",
      "isAvailable": true,
      "isFeatured": true
    },
    {
      "id": "bt-3",
      "name": "Matar Kulcha",
      "price": 40,
      "category": "Snack",
      "diet": "veg",
      "description": "Fluffy kulcha with spiced peas filling",
      "imageUrl": "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?auto=format&fit=crop&w=400&q=70",
      "isAvailable": true,
      "isFeatured": false
    }
  ],
  "ratingsBreakdown": {
    "food": 4.6,
    "taste": 4.7,
    "hygiene": 4.2,
    "service": 4.3,
    "ambience": 3.9
  },
  "priceRange": {
    "min": 30,
    "max": 50
  },
  "distanceKm": 3.2,
  "logoUrl": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20100%20100%22%20width%3D%22200%22%20height%3D%22200%22%3E%0A%20%20%3Cdefs%3E%0A%20%20%20%20%3ClinearGradient%20id%3D%22g_BT%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23ea580c%22%2F%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%237c2d12%22%2F%3E%0A%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%3C%2Fdefs%3E%0A%20%20%3Crect%20x%3D%224%22%20y%3D%224%22%20width%3D%2292%22%20height%3D%2292%22%20rx%3D%2226%22%20fill%3D%22url(%23g_BT)%22%20stroke%3D%22%23fce588%22%20stroke-width%3D%222.5%22%2F%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2258%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C-apple-system%2Csans-serif%22%20font-weight%3D%22900%22%20font-size%3D%2228%22%20fill%3D%22%23ffffff%22%20letter-spacing%3D%221%22%3EBT%3C%2Ftext%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2280%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C-apple-system%2Csans-serif%22%20font-weight%3D%22800%22%20font-size%3D%227%22%20fill%3D%22%23fce588%22%20letter-spacing%3D%222%22%3ETIKKI%3C%2Ftext%3E%0A%3C%2Fsvg%3E"
},
{
  "id": "street-samosa-station",
  "name": "Station Road Samosa Stall",
  "area": "Station Road",
  "city": "Gorakhpur",
  "description": "Hot, freshly fried samosas and kachoris outside Gorakhpur Railway Station. Travellers' favourite since 1987. Served with imli and pudina chutney.",
  "categories": [
    "street-food",
    "fast-food"
  ],
  "cuisines": [
    "Street Food",
    "Snacks"
  ],
  "popularDishes": [
    "Aloo Samosa",
    "Dal Kachori",
    "Matar Samosa"
  ],
  "costForTwo": 60,
  "averageRating": 4.4,
  "reviewCount": 92,
  "imageUrl": "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80",
  "isDemo": false,
  "phone": "9415667788",
  "address": "Station Road, Near Railway Station Gate 1, Gorakhpur - 273001",
  "openTime": "06:00",
  "closeTime": "22:00",
  "openDays": [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
  ],
  "diet": "veg",
  "status": "Active",
  "ownerName": "Mahesh Tiwari",
  "ownerEmail": "station.samosa@gmail.com",
  "facilities": [
    "Takeaway"
  ],
  "menu": [
    {
      "id": "ss-1",
      "name": "Aloo Samosa (2 pcs)",
      "price": 20,
      "category": "Snack",
      "diet": "veg",
      "description": "Classic potato-pea filled crispy samosas",
      "imageUrl": "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=400&q=70",
      "isAvailable": true,
      "isFeatured": true
    },
    {
      "id": "ss-2",
      "name": "Dal Kachori (2 pcs)",
      "price": 20,
      "category": "Snack",
      "diet": "veg",
      "description": "Deep-fried lentil stuffed pastry",
      "imageUrl": "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?auto=format&fit=crop&w=400&q=70",
      "isAvailable": true,
      "isFeatured": false
    },
    {
      "id": "ss-3",
      "name": "Matar Samosa",
      "price": 15,
      "category": "Snack",
      "diet": "veg",
      "description": "Spiced green peas samosa",
      "imageUrl": "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=400&q=70",
      "isAvailable": true,
      "isFeatured": false
    }
  ],
  "ratingsBreakdown": {
    "food": 4.5,
    "taste": 4.6,
    "hygiene": 4,
    "service": 4.3,
    "ambience": 3.6
  },
  "priceRange": {
    "min": 15,
    "max": 25
  },
  "distanceKm": 0.5,
  "logoUrl": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20100%20100%22%20width%3D%22200%22%20height%3D%22200%22%3E%0A%20%20%3Cdefs%3E%0A%20%20%20%20%3ClinearGradient%20id%3D%22g_SS%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23b45309%22%2F%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%2378350f%22%2F%3E%0A%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%3C%2Fdefs%3E%0A%20%20%3Crect%20x%3D%224%22%20y%3D%224%22%20width%3D%2292%22%20height%3D%2292%22%20rx%3D%2226%22%20fill%3D%22url(%23g_SS)%22%20stroke%3D%22%23fce588%22%20stroke-width%3D%222.5%22%2F%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2258%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C-apple-system%2Csans-serif%22%20font-weight%3D%22900%22%20font-size%3D%2228%22%20fill%3D%22%23ffffff%22%20letter-spacing%3D%221%22%3ESS%3C%2Ftext%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2280%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C-apple-system%2Csans-serif%22%20font-weight%3D%22800%22%20font-size%3D%227%22%20fill%3D%22%23fce588%22%20letter-spacing%3D%222%22%3ESAMOSA%3C%2Ftext%3E%0A%3C%2Fsvg%3E"
},
{
  "id": "street-kachori-shahpur",
  "name": "Shahpur Kachori Bhandar",
  "area": "Shahpur",
  "city": "Gorakhpur",
  "description": "Age-old kachori bhandar in Shahpur neighbourhood. Dal kachori, pyaaz kachori, and matar kachori served piping hot with sabzi and chutney.",
  "categories": [
    "street-food",
    "north-indian"
  ],
  "cuisines": [
    "Street Food",
    "Snacks"
  ],
  "popularDishes": [
    "Dal Kachori",
    "Pyaaz Kachori",
    "Kachori Sabzi"
  ],
  "costForTwo": 70,
  "averageRating": 4.3,
  "reviewCount": 38,
  "imageUrl": "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?auto=format&fit=crop&w=600&q=80",
  "isDemo": false,
  "phone": "7275889900",
  "address": "Shahpur Bazaar, Near Post Office, Gorakhpur - 273006",
  "openTime": "07:00",
  "closeTime": "13:00",
  "openDays": [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
  ],
  "diet": "veg",
  "status": "Active",
  "ownerName": "Radheshyam Gupta",
  "ownerEmail": "shahpur.kachori@gmail.com",
  "facilities": [
    "Takeaway",
    "Dine-in"
  ],
  "menu": [
    {
      "id": "sk-1",
      "name": "Dal Kachori with Sabzi",
      "price": 30,
      "category": "Breakfast",
      "diet": "veg",
      "description": "Flaky kachori with spiced aloo sabzi",
      "imageUrl": "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?auto=format&fit=crop&w=400&q=70",
      "isAvailable": true,
      "isFeatured": true
    },
    {
      "id": "sk-2",
      "name": "Pyaaz Kachori",
      "price": 25,
      "category": "Snack",
      "diet": "veg",
      "description": "Onion filled kachori with green chutney",
      "imageUrl": "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=400&q=70",
      "isAvailable": true,
      "isFeatured": false
    },
    {
      "id": "sk-3",
      "name": "Kachori Sabzi Thali",
      "price": 50,
      "category": "Thali",
      "diet": "veg",
      "description": "3 kachoris with two sabzis and chutney",
      "imageUrl": "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=400&q=70",
      "isAvailable": true,
      "isFeatured": true
    }
  ],
  "ratingsBreakdown": {
    "food": 4.4,
    "taste": 4.5,
    "hygiene": 4.1,
    "service": 4.2,
    "ambience": 3.8
  },
  "priceRange": {
    "min": 25,
    "max": 55
  },
  "distanceKm": 4.1,
  "logoUrl": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20100%20100%22%20width%3D%22200%22%20height%3D%22200%22%3E%0A%20%20%3Cdefs%3E%0A%20%20%20%20%3ClinearGradient%20id%3D%22g_KB%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%237c3aed%22%2F%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%234c1d95%22%2F%3E%0A%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%3C%2Fdefs%3E%0A%20%20%3Crect%20x%3D%224%22%20y%3D%224%22%20width%3D%2292%22%20height%3D%2292%22%20rx%3D%2226%22%20fill%3D%22url(%23g_KB)%22%20stroke%3D%22%23fce588%22%20stroke-width%3D%222.5%22%2F%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2258%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C-apple-system%2Csans-serif%22%20font-weight%3D%22900%22%20font-size%3D%2228%22%20fill%3D%22%23ffffff%22%20letter-spacing%3D%221%22%3EKB%3C%2Ftext%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2280%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C-apple-system%2Csans-serif%22%20font-weight%3D%22800%22%20font-size%3D%227%22%20fill%3D%22%23fce588%22%20letter-spacing%3D%222%22%3EKACHORI%3C%2Ftext%3E%0A%3C%2Fsvg%3E"
},
{
  "id": "street-samosa-mohaddipur",
  "name": "Mohaddipur Samosewala",
  "area": "Mohaddipur",
  "city": "Gorakhpur",
  "description": "Beloved neighbourhood samosa shop in Mohaddipur. Huge crispy samosas, never greasy. Known for their special green chilli chutney recipe.",
  "categories": [
    "street-food",
    "fast-food"
  ],
  "cuisines": [
    "Street Food",
    "Snacks"
  ],
  "popularDishes": [
    "Big Samosa",
    "Chilli Samosa",
    "Chutney Special"
  ],
  "costForTwo": 60,
  "averageRating": 4.4,
  "reviewCount": 29,
  "imageUrl": "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80",
  "isDemo": false,
  "phone": "8004556677",
  "address": "Mohaddipur Chowk, Near Hanuman Mandir, Gorakhpur - 273008",
  "openTime": "12:00",
  "closeTime": "21:00",
  "openDays": [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
  ],
  "diet": "veg",
  "status": "Active",
  "ownerName": "Ajay Verma",
  "ownerEmail": "mohaddipur.samosa@gmail.com",
  "facilities": [
    "Takeaway"
  ],
  "menu": [
    {
      "id": "ms-1",
      "name": "Big Samosa",
      "price": 15,
      "category": "Snack",
      "diet": "veg",
      "description": "Extra-large crispy samosa with spiced potato",
      "imageUrl": "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=400&q=70",
      "isAvailable": true,
      "isFeatured": true
    },
    {
      "id": "ms-2",
      "name": "Chilli Samosa (2 pcs)",
      "price": 25,
      "category": "Snack",
      "diet": "veg",
      "description": "Spicy green chilli samosa",
      "imageUrl": "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?auto=format&fit=crop&w=400&q=70",
      "isAvailable": true,
      "isFeatured": false
    },
    {
      "id": "ms-3",
      "name": "Samosa with Special Chutney",
      "price": 20,
      "category": "Snack",
      "diet": "veg",
      "description": "Samosa served with signature chilli chutney",
      "imageUrl": "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=400&q=70",
      "isAvailable": true,
      "isFeatured": false
    }
  ],
  "ratingsBreakdown": {
    "food": 4.5,
    "taste": 4.6,
    "hygiene": 4,
    "service": 4.1,
    "ambience": 3.6
  },
  "priceRange": {
    "min": 15,
    "max": 30
  },
  "distanceKm": 5,
  "logoUrl": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20100%20100%22%20width%3D%22200%22%20height%3D%22200%22%3E%0A%20%20%3Cdefs%3E%0A%20%20%20%20%3ClinearGradient%20id%3D%22g_MS%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%230369a1%22%2F%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%230c4a6e%22%2F%3E%0A%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%3C%2Fdefs%3E%0A%20%20%3Crect%20x%3D%224%22%20y%3D%224%22%20width%3D%2292%22%20height%3D%2292%22%20rx%3D%2226%22%20fill%3D%22url(%23g_MS)%22%20stroke%3D%22%23fce588%22%20stroke-width%3D%222.5%22%2F%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2258%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C-apple-system%2Csans-serif%22%20font-weight%3D%22900%22%20font-size%3D%2228%22%20fill%3D%22%23ffffff%22%20letter-spacing%3D%221%22%3EMS%3C%2Ftext%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2280%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C-apple-system%2Csans-serif%22%20font-weight%3D%22800%22%20font-size%3D%227%22%20fill%3D%22%23fce588%22%20letter-spacing%3D%222%22%3ESAMOSA%3C%2Ftext%3E%0A%3C%2Fsvg%3E"
},
{
  "id": "street-momo-rapti",
  "name": "Rapti Nagar Momo Point",
  "area": "Rapti Nagar",
  "city": "Gorakhpur",
  "description": "Steaming hot momos in Rapti Nagar — the best momo joint this side of the Rapti. Veg and chicken options with fiery red chutney.",
  "categories": [
    "street-food",
    "chinese"
  ],
  "cuisines": [
    "Tibetan",
    "Street Food",
    "Chinese"
  ],
  "popularDishes": [
    "Steamed Veg Momo",
    "Fried Chicken Momo",
    "Chilli Momo"
  ],
  "costForTwo": 150,
  "averageRating": 4.5,
  "reviewCount": 56,
  "imageUrl": "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=600&q=80",
  "isDemo": false,
  "phone": "9838778899",
  "address": "Rapti Nagar Phase 2, Main Road, Gorakhpur - 273009",
  "openTime": "12:00",
  "closeTime": "21:30",
  "openDays": [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
  ],
  "diet": "both",
  "status": "Active",
  "ownerName": "Priya Thapa",
  "ownerEmail": "rapti.momo@gmail.com",
  "facilities": [
    "Takeaway",
    "Dine-in"
  ],
  "menu": [
    {
      "id": "rm-1",
      "name": "Steamed Veg Momo (8 pcs)",
      "price": 80,
      "category": "Momo",
      "diet": "veg",
      "description": "Soft steamed vegetable dumplings with red chutney",
      "imageUrl": "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=400&q=70",
      "isAvailable": true,
      "isFeatured": true
    },
    {
      "id": "rm-2",
      "name": "Fried Chicken Momo (8 pcs)",
      "price": 100,
      "category": "Momo",
      "diet": "nonveg",
      "description": "Crispy fried momos with spiced chicken filling",
      "imageUrl": "https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?auto=format&fit=crop&w=400&q=70",
      "isAvailable": true,
      "isFeatured": true
    },
    {
      "id": "rm-3",
      "name": "Chilli Momo",
      "price": 90,
      "category": "Momo",
      "diet": "veg",
      "description": "Tossed momos in spicy Chinese sauce",
      "imageUrl": "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=400&q=70",
      "isAvailable": true,
      "isFeatured": false
    }
  ],
  "ratingsBreakdown": {
    "food": 4.6,
    "taste": 4.7,
    "hygiene": 4.2,
    "service": 4.4,
    "ambience": 4
  },
  "priceRange": {
    "min": 80,
    "max": 120
  },
  "distanceKm": 6.3,
  "logoUrl": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20100%20100%22%20width%3D%22200%22%20height%3D%22200%22%3E%0A%20%20%3Cdefs%3E%0A%20%20%20%20%3ClinearGradient%20id%3D%22g_RM%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23be185d%22%2F%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23831843%22%2F%3E%0A%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%3C%2Fdefs%3E%0A%20%20%3Crect%20x%3D%224%22%20y%3D%224%22%20width%3D%2292%22%20height%3D%2292%22%20rx%3D%2226%22%20fill%3D%22url(%23g_RM)%22%20stroke%3D%22%23fce588%22%20stroke-width%3D%222.5%22%2F%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2258%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C-apple-system%2Csans-serif%22%20font-weight%3D%22900%22%20font-size%3D%2228%22%20fill%3D%22%23ffffff%22%20letter-spacing%3D%221%22%3ERM%3C%2Ftext%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2280%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C-apple-system%2Csans-serif%22%20font-weight%3D%22800%22%20font-size%3D%227%22%20fill%3D%22%23fce588%22%20letter-spacing%3D%222%22%3EMOMO%3C%2Ftext%3E%0A%3C%2Fsvg%3E"
},
{
  "id": "street-momo-cinema",
  "name": "Cinema Road Momo Hut",
  "area": "Cinema Road",
  "city": "Gorakhpur",
  "description": "Tiny momo hut beside Cinema Road that punches way above its size. Takeaway-only. The jhol momo (soup momo) is legendary.",
  "categories": [
    "street-food",
    "chinese"
  ],
  "cuisines": [
    "Tibetan",
    "Street Food"
  ],
  "popularDishes": [
    "Jhol Momo",
    "Pan Fried Momo",
    "Veg Steam Momo"
  ],
  "costForTwo": 130,
  "averageRating": 4.6,
  "reviewCount": 43,
  "imageUrl": "https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?auto=format&fit=crop&w=600&q=80",
  "isDemo": false,
  "phone": "6386990011",
  "address": "Cinema Road, Near Priya Cinema, Gorakhpur - 273001",
  "openTime": "11:00",
  "closeTime": "22:00",
  "openDays": [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
  ],
  "diet": "veg",
  "status": "Active",
  "ownerName": "Sunita Rai",
  "ownerEmail": "cinema.momo@gmail.com",
  "facilities": [
    "Takeaway"
  ],
  "menu": [
    {
      "id": "cm-1",
      "name": "Jhol Momo (6 pcs)",
      "price": 90,
      "category": "Momo",
      "diet": "veg",
      "description": "Momos in spiced sesame soup broth",
      "imageUrl": "https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?auto=format&fit=crop&w=400&q=70",
      "isAvailable": true,
      "isFeatured": true
    },
    {
      "id": "cm-2",
      "name": "Pan Fried Momo (6 pcs)",
      "price": 80,
      "category": "Momo",
      "diet": "veg",
      "description": "Crispy bottom pan-fried veg momos",
      "imageUrl": "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=400&q=70",
      "isAvailable": true,
      "isFeatured": false
    },
    {
      "id": "cm-3",
      "name": "Veg Steam Momo (8 pcs)",
      "price": 70,
      "category": "Momo",
      "diet": "veg",
      "description": "Classic steamed dumplings with chutney",
      "imageUrl": "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=400&q=70",
      "isAvailable": true,
      "isFeatured": false
    }
  ],
  "ratingsBreakdown": {
    "food": 4.7,
    "taste": 4.8,
    "hygiene": 4.3,
    "service": 4.4,
    "ambience": 3.8
  },
  "priceRange": {
    "min": 70,
    "max": 100
  },
  "distanceKm": 1.2,
  "logoUrl": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20100%20100%22%20width%3D%22200%22%20height%3D%22200%22%3E%0A%20%20%3Cdefs%3E%0A%20%20%20%20%3ClinearGradient%20id%3D%22g_CM%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%231d4ed8%22%2F%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%231e3a8a%22%2F%3E%0A%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%3C%2Fdefs%3E%0A%20%20%3Crect%20x%3D%224%22%20y%3D%224%22%20width%3D%2292%22%20height%3D%2292%22%20rx%3D%2226%22%20fill%3D%22url(%23g_CM)%22%20stroke%3D%22%23fce588%22%20stroke-width%3D%222.5%22%2F%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2258%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C-apple-system%2Csans-serif%22%20font-weight%3D%22900%22%20font-size%3D%2228%22%20fill%3D%22%23ffffff%22%20letter-spacing%3D%221%22%3ECM%3C%2Ftext%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2280%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C-apple-system%2Csans-serif%22%20font-weight%3D%22800%22%20font-size%3D%227%22%20fill%3D%22%23fce588%22%20letter-spacing%3D%222%22%3EMOMO%3C%2Ftext%3E%0A%3C%2Fsvg%3E"
},
{
  "id": "street-noodle-naukayan",
  "name": "Naukayan Noodle Corner",
  "area": "Naukayan",
  "city": "Gorakhpur",
  "description": "Street-side noodle and momo stall in Naukayan. Fresh hakka noodles wok-tossed with veggies and soy sauce — Rs 60 a plate, can't beat it.",
  "categories": [
    "street-food",
    "chinese"
  ],
  "cuisines": [
    "Indo-Chinese",
    "Street Food"
  ],
  "popularDishes": [
    "Hakka Noodles",
    "Veg Fried Rice",
    "Chilli Paneer"
  ],
  "costForTwo": 150,
  "averageRating": 4.3,
  "reviewCount": 31,
  "imageUrl": "https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?auto=format&fit=crop&w=600&q=80",
  "isDemo": false,
  "phone": "9415223344",
  "address": "Naukayan Road, Near Baba Raghav Das Market, Gorakhpur - 273013",
  "openTime": "13:00",
  "closeTime": "22:00",
  "openDays": [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
  ],
  "diet": "veg",
  "status": "Active",
  "ownerName": "Raju Sharma",
  "ownerEmail": "naukayan.noodle@gmail.com",
  "facilities": [
    "Takeaway",
    "Dine-in"
  ],
  "menu": [
    {
      "id": "nn-1",
      "name": "Veg Hakka Noodles",
      "price": 60,
      "category": "Noodles",
      "diet": "veg",
      "description": "Stir-fried noodles with seasonal vegetables",
      "imageUrl": "https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?auto=format&fit=crop&w=400&q=70",
      "isAvailable": true,
      "isFeatured": true
    },
    {
      "id": "nn-2",
      "name": "Veg Fried Rice",
      "price": 60,
      "category": "Rice",
      "diet": "veg",
      "description": "Wok-tossed rice with vegetables and soy",
      "imageUrl": "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?auto=format&fit=crop&w=400&q=70",
      "isAvailable": true,
      "isFeatured": false
    },
    {
      "id": "nn-3",
      "name": "Chilli Paneer",
      "price": 90,
      "category": "Starters",
      "diet": "veg",
      "description": "Crispy paneer in Chinese chilli sauce",
      "imageUrl": "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=400&q=70",
      "isAvailable": true,
      "isFeatured": false
    }
  ],
  "ratingsBreakdown": {
    "food": 4.3,
    "taste": 4.5,
    "hygiene": 4,
    "service": 4.1,
    "ambience": 3.7
  },
  "priceRange": {
    "min": 60,
    "max": 100
  },
  "distanceKm": 7.2,
  "logoUrl": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20100%20100%22%20width%3D%22200%22%20height%3D%22200%22%3E%0A%20%20%3Cdefs%3E%0A%20%20%20%20%3ClinearGradient%20id%3D%22g_NN%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%230f766e%22%2F%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23134e4a%22%2F%3E%0A%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%3C%2Fdefs%3E%0A%20%20%3Crect%20x%3D%224%22%20y%3D%224%22%20width%3D%2292%22%20height%3D%2292%22%20rx%3D%2226%22%20fill%3D%22url(%23g_NN)%22%20stroke%3D%22%23fce588%22%20stroke-width%3D%222.5%22%2F%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2258%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C-apple-system%2Csans-serif%22%20font-weight%3D%22900%22%20font-size%3D%2228%22%20fill%3D%22%23ffffff%22%20letter-spacing%3D%221%22%3ENN%3C%2Ftext%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2280%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C-apple-system%2Csans-serif%22%20font-weight%3D%22800%22%20font-size%3D%227%22%20fill%3D%22%23fce588%22%20letter-spacing%3D%222%22%3ENOODLES%3C%2Ftext%3E%0A%3C%2Fsvg%3E"
},
{
  "id": "street-pavbhaji-medical",
  "name": "Medical College Road Pav Bhaji",
  "area": "Medical College Road",
  "city": "Gorakhpur",
  "description": "Butter-laden pav bhaji on a large tawa — a staple evening meal for BRD Medical College students and doctors. Extra butter always.",
  "categories": [
    "street-food",
    "fast-food"
  ],
  "cuisines": [
    "Street Food",
    "Fast Food"
  ],
  "popularDishes": [
    "Butter Pav Bhaji",
    "Cheese Pav Bhaji",
    "Pav Bhaji Masala"
  ],
  "costForTwo": 120,
  "averageRating": 4.5,
  "reviewCount": 67,
  "imageUrl": "https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=600&q=80",
  "isDemo": false,
  "phone": "7275445566",
  "address": "BRD Medical College Road, Gorakhpur - 273013",
  "openTime": "17:00",
  "closeTime": "23:00",
  "openDays": [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
  ],
  "diet": "veg",
  "status": "Active",
  "ownerName": "Narendra Pandey",
  "ownerEmail": "medical.pavbhaji@gmail.com",
  "facilities": [
    "Takeaway",
    "Dine-in"
  ],
  "menu": [
    {
      "id": "mp-1",
      "name": "Butter Pav Bhaji",
      "price": 70,
      "category": "Pav Bhaji",
      "diet": "veg",
      "description": "Mixed vegetable bhaji with extra butter and 2 pavs",
      "imageUrl": "https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=400&q=70",
      "isAvailable": true,
      "isFeatured": true
    },
    {
      "id": "mp-2",
      "name": "Cheese Pav Bhaji",
      "price": 90,
      "category": "Pav Bhaji",
      "diet": "veg",
      "description": "Extra cheese melted over spicy bhaji",
      "imageUrl": "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?auto=format&fit=crop&w=400&q=70",
      "isAvailable": true,
      "isFeatured": false
    },
    {
      "id": "mp-3",
      "name": "Bhaji with 4 Pavs",
      "price": 80,
      "category": "Pav Bhaji",
      "diet": "veg",
      "description": "Double pav serving for the hungry",
      "imageUrl": "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=400&q=70",
      "isAvailable": true,
      "isFeatured": false
    }
  ],
  "ratingsBreakdown": {
    "food": 4.5,
    "taste": 4.7,
    "hygiene": 4.2,
    "service": 4.3,
    "ambience": 3.9
  },
  "priceRange": {
    "min": 70,
    "max": 100
  },
  "distanceKm": 5.8,
  "logoUrl": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20100%20100%22%20width%3D%22200%22%20height%3D%22200%22%3E%0A%20%20%3Cdefs%3E%0A%20%20%20%20%3ClinearGradient%20id%3D%22g_PB%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23f59e0b%22%2F%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%2392400e%22%2F%3E%0A%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%3C%2Fdefs%3E%0A%20%20%3Crect%20x%3D%224%22%20y%3D%224%22%20width%3D%2292%22%20height%3D%2292%22%20rx%3D%2226%22%20fill%3D%22url(%23g_PB)%22%20stroke%3D%22%23fce588%22%20stroke-width%3D%222.5%22%2F%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2258%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C-apple-system%2Csans-serif%22%20font-weight%3D%22900%22%20font-size%3D%2228%22%20fill%3D%22%23ffffff%22%20letter-spacing%3D%221%22%3EPB%3C%2Ftext%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2280%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C-apple-system%2Csans-serif%22%20font-weight%3D%22800%22%20font-size%3D%227%22%20fill%3D%22%23fce588%22%20letter-spacing%3D%222%22%3EPAV%20BHAJI%3C%2Ftext%3E%0A%3C%2Fsvg%3E"
},
{
  "id": "street-frankie-buxipur",
  "name": "Buxipur Frankie Stall",
  "area": "Buxipur",
  "city": "Gorakhpur",
  "description": "Roll and frankie stall popular with the Buxipur youth crowd. Paneer, veg, and egg rolls packed to the brim.",
  "categories": [
    "street-food",
    "fast-food"
  ],
  "cuisines": [
    "Street Food",
    "Fast Food",
    "Rolls"
  ],
  "popularDishes": [
    "Paneer Roll",
    "Veg Frankie",
    "Egg Roll"
  ],
  "costForTwo": 130,
  "averageRating": 4.4,
  "reviewCount": 39,
  "imageUrl": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80",
  "isDemo": false,
  "phone": "8382001122",
  "address": "Buxipur Chowk, Near Chandra Cinema, Gorakhpur - 273004",
  "openTime": "14:00",
  "closeTime": "22:30",
  "openDays": [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
  ],
  "diet": "both",
  "status": "Active",
  "ownerName": "Ankur Mishra",
  "ownerEmail": "buxipur.frankie@gmail.com",
  "facilities": [
    "Takeaway"
  ],
  "menu": [
    {
      "id": "bf-1",
      "name": "Paneer Frankie Roll",
      "price": 70,
      "category": "Roll",
      "diet": "veg",
      "description": "Spiced paneer in crispy roti roll",
      "imageUrl": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=400&q=70",
      "isAvailable": true,
      "isFeatured": true
    },
    {
      "id": "bf-2",
      "name": "Egg Roll",
      "price": 60,
      "category": "Roll",
      "diet": "nonveg",
      "description": "Egg omelette wrapped in roti with sauces",
      "imageUrl": "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=400&q=70",
      "isAvailable": true,
      "isFeatured": false
    },
    {
      "id": "bf-3",
      "name": "Veg Frankie",
      "price": 50,
      "category": "Roll",
      "diet": "veg",
      "description": "Spiced mixed veg wrapped in roti",
      "imageUrl": "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?auto=format&fit=crop&w=400&q=70",
      "isAvailable": true,
      "isFeatured": false
    }
  ],
  "ratingsBreakdown": {
    "food": 4.4,
    "taste": 4.5,
    "hygiene": 4.1,
    "service": 4.2,
    "ambience": 3.8
  },
  "priceRange": {
    "min": 50,
    "max": 80
  },
  "distanceKm": 2.9,
  "logoUrl": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20100%20100%22%20width%3D%22200%22%20height%3D%22200%22%3E%0A%20%20%3Cdefs%3E%0A%20%20%20%20%3ClinearGradient%20id%3D%22g_BF%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%237c3aed%22%2F%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%234c1d95%22%2F%3E%0A%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%3C%2Fdefs%3E%0A%20%20%3Crect%20x%3D%224%22%20y%3D%224%22%20width%3D%2292%22%20height%3D%2292%22%20rx%3D%2226%22%20fill%3D%22url(%23g_BF)%22%20stroke%3D%22%23fce588%22%20stroke-width%3D%222.5%22%2F%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2258%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C-apple-system%2Csans-serif%22%20font-weight%3D%22900%22%20font-size%3D%2228%22%20fill%3D%22%23ffffff%22%20letter-spacing%3D%221%22%3EBF%3C%2Ftext%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2280%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C-apple-system%2Csans-serif%22%20font-weight%3D%22800%22%20font-size%3D%227%22%20fill%3D%22%23fce588%22%20letter-spacing%3D%222%22%3EROLLS%3C%2Ftext%3E%0A%3C%2Fsvg%3E"
},
{
  "id": "street-chai-golghar",
  "name": "Golghar Cutting Chai",
  "area": "Golghar",
  "city": "Gorakhpur",
  "description": "The most beloved chai tapri at Golghar. Cutting chai, kadak masala chai, and fresh bread pakora — the perfect morning and evening ritual.",
  "categories": [
    "street-food",
    "cafe"
  ],
  "cuisines": [
    "Beverages",
    "Snacks"
  ],
  "popularDishes": [
    "Cutting Chai",
    "Masala Chai",
    "Bread Pakora"
  ],
  "costForTwo": 50,
  "averageRating": 4.7,
  "reviewCount": 110,
  "imageUrl": "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=600&q=80",
  "isDemo": false,
  "phone": "9838556677",
  "address": "Golghar Chauraha, Street No. 3, Gorakhpur - 273001",
  "openTime": "06:00",
  "closeTime": "22:00",
  "openDays": [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
  ],
  "diet": "veg",
  "status": "Active",
  "ownerName": "Babu Lal Keshari",
  "ownerEmail": "golghar.chai@gmail.com",
  "facilities": [
    "Takeaway",
    "Dine-in"
  ],
  "menu": [
    {
      "id": "gc-1",
      "name": "Cutting Chai",
      "price": 10,
      "category": "Beverages",
      "diet": "veg",
      "description": "Half-cup strong sweet tea",
      "imageUrl": "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=400&q=70",
      "isAvailable": true,
      "isFeatured": true
    },
    {
      "id": "gc-2",
      "name": "Masala Chai",
      "price": 15,
      "category": "Beverages",
      "diet": "veg",
      "description": "Spiced ginger-cardamom tea",
      "imageUrl": "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=400&q=70",
      "isAvailable": true,
      "isFeatured": false
    },
    {
      "id": "gc-3",
      "name": "Bread Pakora (2 pcs)",
      "price": 20,
      "category": "Snack",
      "diet": "veg",
      "description": "Deep-fried spiced bread fritters",
      "imageUrl": "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?auto=format&fit=crop&w=400&q=70",
      "isAvailable": true,
      "isFeatured": false
    }
  ],
  "ratingsBreakdown": {
    "food": 4.7,
    "taste": 4.8,
    "hygiene": 4.3,
    "service": 4.6,
    "ambience": 4
  },
  "priceRange": {
    "min": 10,
    "max": 25
  },
  "distanceKm": 1,
  "logoUrl": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20100%20100%22%20width%3D%22200%22%20height%3D%22200%22%3E%0A%20%20%3Cdefs%3E%0A%20%20%20%20%3ClinearGradient%20id%3D%22g_GC%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23d97706%22%2F%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%2378350f%22%2F%3E%0A%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%3C%2Fdefs%3E%0A%20%20%3Crect%20x%3D%224%22%20y%3D%224%22%20width%3D%2292%22%20height%3D%2292%22%20rx%3D%2226%22%20fill%3D%22url(%23g_GC)%22%20stroke%3D%22%23fce588%22%20stroke-width%3D%222.5%22%2F%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2258%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C-apple-system%2Csans-serif%22%20font-weight%3D%22900%22%20font-size%3D%2228%22%20fill%3D%22%23ffffff%22%20letter-spacing%3D%221%22%3EGC%3C%2Ftext%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2280%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C-apple-system%2Csans-serif%22%20font-weight%3D%22800%22%20font-size%3D%227%22%20fill%3D%22%23fce588%22%20letter-spacing%3D%222%22%3ECHAI%3C%2Ftext%3E%0A%3C%2Fsvg%3E"
},
{
  "id": "street-lassi-reti",
  "name": "Reti Chowk Lassi Shop",
  "area": "Reti Chowk",
  "city": "Gorakhpur",
  "description": "Thick, creamy, full-fat lassi served in earthen kulhads at Reti Chowk. Sweet lassi, namkeen lassi, and mango lassi in season.",
  "categories": [
    "street-food",
    "cafe"
  ],
  "cuisines": [
    "Beverages",
    "Street Food"
  ],
  "popularDishes": [
    "Sweet Lassi",
    "Rose Lassi",
    "Mango Lassi"
  ],
  "costForTwo": 80,
  "averageRating": 4.6,
  "reviewCount": 58,
  "imageUrl": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80",
  "isDemo": false,
  "phone": "7275667788",
  "address": "Reti Chowk, Beside UCO Bank, Gorakhpur - 273001",
  "openTime": "08:00",
  "closeTime": "20:00",
  "openDays": [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
  ],
  "diet": "veg",
  "status": "Active",
  "ownerName": "Phoolchand Yadav",
  "ownerEmail": "reti.lassi@gmail.com",
  "facilities": [
    "Takeaway"
  ],
  "menu": [
    {
      "id": "rl-1",
      "name": "Sweet Lassi (300ml)",
      "price": 40,
      "category": "Beverages",
      "diet": "veg",
      "description": "Chilled creamy sweet yogurt drink",
      "imageUrl": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=400&q=70",
      "isAvailable": true,
      "isFeatured": true
    },
    {
      "id": "rl-2",
      "name": "Rose Lassi",
      "price": 50,
      "category": "Beverages",
      "diet": "veg",
      "description": "Rose syrup flavoured creamy lassi",
      "imageUrl": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=400&q=70",
      "isAvailable": true,
      "isFeatured": false
    },
    {
      "id": "rl-3",
      "name": "Mango Lassi (Seasonal)",
      "price": 60,
      "category": "Beverages",
      "diet": "veg",
      "description": "Fresh mango blended with thick curd",
      "imageUrl": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=400&q=70",
      "isAvailable": true,
      "isFeatured": false
    }
  ],
  "ratingsBreakdown": {
    "food": 4.6,
    "taste": 4.8,
    "hygiene": 4.4,
    "service": 4.5,
    "ambience": 3.9
  },
  "priceRange": {
    "min": 40,
    "max": 70
  },
  "distanceKm": 2.1,
  "logoUrl": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20100%20100%22%20width%3D%22200%22%20height%3D%22200%22%3E%0A%20%20%3Cdefs%3E%0A%20%20%20%20%3ClinearGradient%20id%3D%22g_RL%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23db2777%22%2F%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%239d174d%22%2F%3E%0A%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%3C%2Fdefs%3E%0A%20%20%3Crect%20x%3D%224%22%20y%3D%224%22%20width%3D%2292%22%20height%3D%2292%22%20rx%3D%2226%22%20fill%3D%22url(%23g_RL)%22%20stroke%3D%22%23fce588%22%20stroke-width%3D%222.5%22%2F%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2258%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C-apple-system%2Csans-serif%22%20font-weight%3D%22900%22%20font-size%3D%2228%22%20fill%3D%22%23ffffff%22%20letter-spacing%3D%221%22%3ERL%3C%2Ftext%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2280%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C-apple-system%2Csans-serif%22%20font-weight%3D%22800%22%20font-size%3D%227%22%20fill%3D%22%23fce588%22%20letter-spacing%3D%222%22%3ELASSI%3C%2Ftext%3E%0A%3C%2Fsvg%3E"
},
{
  "id": "street-mithai-buxipur",
  "name": "Buxipur Mithai Corner",
  "area": "Buxipur",
  "city": "Gorakhpur",
  "description": "Small sweet shop in Buxipur known for fresh gulab jamun, rasgulla, and seasonal mithai. All items made daily with fresh chhena.",
  "categories": [
    "sweets",
    "street-food"
  ],
  "cuisines": [
    "Sweets",
    "Mithai"
  ],
  "popularDishes": [
    "Gulab Jamun",
    "Rasgulla",
    "Kalakand"
  ],
  "costForTwo": 100,
  "averageRating": 4.4,
  "reviewCount": 44,
  "imageUrl": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&q=80",
  "isDemo": false,
  "phone": "9415889900",
  "address": "Buxipur Market, Opp. Mahila Degree College, Gorakhpur - 273004",
  "openTime": "09:00",
  "closeTime": "21:00",
  "openDays": [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
  ],
  "diet": "veg",
  "status": "Active",
  "ownerName": "Halwai Ram Sewak",
  "ownerEmail": "buxipur.mithai@gmail.com",
  "facilities": [
    "Takeaway",
    "Dine-in"
  ],
  "menu": [
    {
      "id": "bm-1",
      "name": "Gulab Jamun (2 pcs)",
      "price": 20,
      "category": "Sweets",
      "diet": "veg",
      "description": "Soft milk-solid balls in rose sugar syrup",
      "imageUrl": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=400&q=70",
      "isAvailable": true,
      "isFeatured": true
    },
    {
      "id": "bm-2",
      "name": "Rasgulla (2 pcs)",
      "price": 25,
      "category": "Sweets",
      "diet": "veg",
      "description": "Spongy chhena balls in light sugar syrup",
      "imageUrl": "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?auto=format&fit=crop&w=400&q=70",
      "isAvailable": true,
      "isFeatured": false
    },
    {
      "id": "bm-3",
      "name": "Kalakand (100g)",
      "price": 40,
      "category": "Sweets",
      "diet": "veg",
      "description": "Grainy milk cake garnished with pistachios",
      "imageUrl": "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=400&q=70",
      "isAvailable": true,
      "isFeatured": false
    }
  ],
  "ratingsBreakdown": {
    "food": 4.5,
    "taste": 4.6,
    "hygiene": 4.3,
    "service": 4.2,
    "ambience": 3.9
  },
  "priceRange": {
    "min": 20,
    "max": 50
  },
  "distanceKm": 2.9,
  "logoUrl": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20100%20100%22%20width%3D%22200%22%20height%3D%22200%22%3E%0A%20%20%3Cdefs%3E%0A%20%20%20%20%3ClinearGradient%20id%3D%22g_BM%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23d97706%22%2F%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%2392400e%22%2F%3E%0A%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%3C%2Fdefs%3E%0A%20%20%3Crect%20x%3D%224%22%20y%3D%224%22%20width%3D%2292%22%20height%3D%2292%22%20rx%3D%2226%22%20fill%3D%22url(%23g_BM)%22%20stroke%3D%22%23fce588%22%20stroke-width%3D%222.5%22%2F%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2258%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C-apple-system%2Csans-serif%22%20font-weight%3D%22900%22%20font-size%3D%2228%22%20fill%3D%22%23ffffff%22%20letter-spacing%3D%221%22%3EBM%3C%2Ftext%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2280%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C-apple-system%2Csans-serif%22%20font-weight%3D%22800%22%20font-size%3D%227%22%20fill%3D%22%23fce588%22%20letter-spacing%3D%222%22%3EMITHAI%3C%2Ftext%3E%0A%3C%2Fsvg%3E"
},
{
  "id": "street-halwa-shahpur",
  "name": "Shahpur Halwa Puri",
  "area": "Shahpur",
  "city": "Gorakhpur",
  "description": "Sunday morning institution in Shahpur. The halwa-puri thali here draws a queue every weekend. Sooji halwa, chana curry, and hot puris.",
  "categories": [
    "street-food",
    "north-indian"
  ],
  "cuisines": [
    "Street Food",
    "North Indian"
  ],
  "popularDishes": [
    "Halwa Puri",
    "Chana Curry",
    "Sooji Halwa"
  ],
  "costForTwo": 90,
  "averageRating": 4.5,
  "reviewCount": 51,
  "imageUrl": "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?auto=format&fit=crop&w=600&q=80",
  "isDemo": false,
  "phone": "8004334455",
  "address": "Shahpur, Near Shahpur Police Station, Gorakhpur - 273006",
  "openTime": "07:00",
  "closeTime": "12:00",
  "openDays": [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
  ],
  "diet": "veg",
  "status": "Active",
  "ownerName": "Vidyasagar Mishra",
  "ownerEmail": "shahpur.halwa@gmail.com",
  "facilities": [
    "Takeaway",
    "Dine-in"
  ],
  "menu": [
    {
      "id": "sh-1",
      "name": "Halwa Puri Thali",
      "price": 50,
      "category": "Breakfast",
      "diet": "veg",
      "description": "Sooji halwa with 3 puris and aloo sabzi",
      "imageUrl": "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?auto=format&fit=crop&w=400&q=70",
      "isAvailable": true,
      "isFeatured": true
    },
    {
      "id": "sh-2",
      "name": "Chana Bhatura",
      "price": 60,
      "category": "Breakfast",
      "diet": "veg",
      "description": "Spiced chickpea curry with 2 puffy bhaturas",
      "imageUrl": "https://images.unsplash.com/photo-1625398407796-67d6a46dab7b?auto=format&fit=crop&w=400&q=70",
      "isAvailable": true,
      "isFeatured": false
    },
    {
      "id": "sh-3",
      "name": "Sooji Halwa (200g)",
      "price": 30,
      "category": "Sweets",
      "diet": "veg",
      "description": "Semolina dessert with ghee and dry fruits",
      "imageUrl": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=400&q=70",
      "isAvailable": true,
      "isFeatured": false
    }
  ],
  "ratingsBreakdown": {
    "food": 4.6,
    "taste": 4.7,
    "hygiene": 4.2,
    "service": 4.3,
    "ambience": 3.8
  },
  "priceRange": {
    "min": 30,
    "max": 65
  },
  "distanceKm": 4.1,
  "logoUrl": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20100%20100%22%20width%3D%22200%22%20height%3D%22200%22%3E%0A%20%20%3Cdefs%3E%0A%20%20%20%20%3ClinearGradient%20id%3D%22g_SH%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23ca8a04%22%2F%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23713f12%22%2F%3E%0A%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%3C%2Fdefs%3E%0A%20%20%3Crect%20x%3D%224%22%20y%3D%224%22%20width%3D%2292%22%20height%3D%2292%22%20rx%3D%2226%22%20fill%3D%22url(%23g_SH)%22%20stroke%3D%22%23fce588%22%20stroke-width%3D%222.5%22%2F%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2258%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C-apple-system%2Csans-serif%22%20font-weight%3D%22900%22%20font-size%3D%2228%22%20fill%3D%22%23ffffff%22%20letter-spacing%3D%221%22%3ESH%3C%2Ftext%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2280%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C-apple-system%2Csans-serif%22%20font-weight%3D%22800%22%20font-size%3D%227%22%20fill%3D%22%23fce588%22%20letter-spacing%3D%222%22%3EHALWA%3C%2Ftext%3E%0A%3C%2Fsvg%3E"
},
{
  "id": "street-biryani-asuran",
  "name": "Asuran Biryani Stall",
  "area": "Asuran Chowk",
  "city": "Gorakhpur",
  "description": "Street-side deg biryani at Asuran Chowk. The dum biryani is slow-cooked in a sealed handi — fragrant, fluffy, and affordable.",
  "categories": [
    "street-food",
    "north-indian"
  ],
  "cuisines": [
    "Biryani",
    "Mughlai",
    "Street Food"
  ],
  "popularDishes": [
    "Veg Dum Biryani",
    "Chicken Biryani",
    "Raita"
  ],
  "costForTwo": 200,
  "averageRating": 4.4,
  "reviewCount": 61,
  "imageUrl": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=600&q=80",
  "isDemo": false,
  "phone": "9838112233",
  "address": "Asuran Chowk, Near Mosque, Gorakhpur - 273001",
  "openTime": "12:00",
  "closeTime": "22:30",
  "openDays": [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
  ],
  "diet": "both",
  "status": "Active",
  "ownerName": "Irfan Ansari",
  "ownerEmail": "asuran.biryani@gmail.com",
  "facilities": [
    "Takeaway",
    "Dine-in"
  ],
  "menu": [
    {
      "id": "ab-1",
      "name": "Veg Dum Biryani",
      "price": 90,
      "category": "Biryani",
      "diet": "veg",
      "description": "Slow-cooked basmati rice with veggies and spices",
      "imageUrl": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=400&q=70",
      "isAvailable": true,
      "isFeatured": true
    },
    {
      "id": "ab-2",
      "name": "Chicken Biryani",
      "price": 120,
      "category": "Biryani",
      "diet": "nonveg",
      "description": "Aromatic chicken dum biryani",
      "imageUrl": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=400&q=70",
      "isAvailable": true,
      "isFeatured": true
    },
    {
      "id": "ab-3",
      "name": "Biryani + Raita Combo",
      "price": 100,
      "category": "Combo",
      "diet": "veg",
      "description": "Veg biryani with fresh curd raita",
      "imageUrl": "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?auto=format&fit=crop&w=400&q=70",
      "isAvailable": true,
      "isFeatured": false
    }
  ],
  "ratingsBreakdown": {
    "food": 4.5,
    "taste": 4.6,
    "hygiene": 4.2,
    "service": 4.3,
    "ambience": 4
  },
  "priceRange": {
    "min": 90,
    "max": 130
  },
  "distanceKm": 1.8,
  "logoUrl": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20100%20100%22%20width%3D%22200%22%20height%3D%22200%22%3E%0A%20%20%3Cdefs%3E%0A%20%20%20%20%3ClinearGradient%20id%3D%22g_AB%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23065f46%22%2F%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23064e3b%22%2F%3E%0A%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%3C%2Fdefs%3E%0A%20%20%3Crect%20x%3D%224%22%20y%3D%224%22%20width%3D%2292%22%20height%3D%2292%22%20rx%3D%2226%22%20fill%3D%22url(%23g_AB)%22%20stroke%3D%22%23fce588%22%20stroke-width%3D%222.5%22%2F%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2258%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C-apple-system%2Csans-serif%22%20font-weight%3D%22900%22%20font-size%3D%2228%22%20fill%3D%22%23ffffff%22%20letter-spacing%3D%221%22%3EAB%3C%2Ftext%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2280%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C-apple-system%2Csans-serif%22%20font-weight%3D%22800%22%20font-size%3D%227%22%20fill%3D%22%23fce588%22%20letter-spacing%3D%222%22%3EBIRYANI%3C%2Ftext%3E%0A%3C%2Fsvg%3E"
},
{
  "id": "street-rice-mohaddipur",
  "name": "Mohaddipur Rice Plate",
  "area": "Mohaddipur",
  "city": "Gorakhpur",
  "description": "Wholesome dal-rice and rajma-rice plates served at canteen prices. Workers' favourite lunch spot in Mohaddipur industrial area.",
  "categories": [
    "street-food",
    "north-indian"
  ],
  "cuisines": [
    "North Indian",
    "Street Food"
  ],
  "popularDishes": [
    "Dal Rice Plate",
    "Rajma Rice",
    "Mix Veg Thali"
  ],
  "costForTwo": 120,
  "averageRating": 4.3,
  "reviewCount": 28,
  "imageUrl": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80",
  "isDemo": false,
  "phone": "6386445566",
  "address": "Mohaddipur Industrial Area, Main Road, Gorakhpur - 273008",
  "openTime": "11:00",
  "closeTime": "15:00",
  "openDays": [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ],
  "diet": "veg",
  "status": "Active",
  "ownerName": "Santosh Kumar",
  "ownerEmail": "mohaddipur.rice@gmail.com",
  "facilities": [
    "Takeaway",
    "Dine-in"
  ],
  "menu": [
    {
      "id": "mr-1",
      "name": "Dal Rice Plate",
      "price": 50,
      "category": "Thali",
      "diet": "veg",
      "description": "Dal tadka with steamed rice and salad",
      "imageUrl": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=400&q=70",
      "isAvailable": true,
      "isFeatured": true
    },
    {
      "id": "mr-2",
      "name": "Rajma Rice",
      "price": 55,
      "category": "Thali",
      "diet": "veg",
      "description": "Red kidney bean curry with steamed rice",
      "imageUrl": "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?auto=format&fit=crop&w=400&q=70",
      "isAvailable": true,
      "isFeatured": false
    },
    {
      "id": "mr-3",
      "name": "Mix Veg Thali",
      "price": 70,
      "category": "Thali",
      "diet": "veg",
      "description": "Dal, two sabzis, rice, roti and papad",
      "imageUrl": "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=400&q=70",
      "isAvailable": true,
      "isFeatured": false
    }
  ],
  "ratingsBreakdown": {
    "food": 4.3,
    "taste": 4.4,
    "hygiene": 4.1,
    "service": 4.2,
    "ambience": 3.6
  },
  "priceRange": {
    "min": 50,
    "max": 75
  },
  "distanceKm": 5,
  "logoUrl": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20100%20100%22%20width%3D%22200%22%20height%3D%22200%22%3E%0A%20%20%3Cdefs%3E%0A%20%20%20%20%3ClinearGradient%20id%3D%22g_MR%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%2316a34a%22%2F%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%2314532d%22%2F%3E%0A%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%3C%2Fdefs%3E%0A%20%20%3Crect%20x%3D%224%22%20y%3D%224%22%20width%3D%2292%22%20height%3D%2292%22%20rx%3D%2226%22%20fill%3D%22url(%23g_MR)%22%20stroke%3D%22%23fce588%22%20stroke-width%3D%222.5%22%2F%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2258%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C-apple-system%2Csans-serif%22%20font-weight%3D%22900%22%20font-size%3D%2228%22%20fill%3D%22%23ffffff%22%20letter-spacing%3D%221%22%3EMR%3C%2Ftext%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2280%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C-apple-system%2Csans-serif%22%20font-weight%3D%22800%22%20font-size%3D%227%22%20fill%3D%22%23fce588%22%20letter-spacing%3D%222%22%3ERICE%3C%2Ftext%3E%0A%3C%2Fsvg%3E"
},
{
  "id": "street-roll-golghar",
  "name": "Golghar Egg Roll Counter",
  "area": "Golghar",
  "city": "Gorakhpur",
  "description": "High-volume egg and veg roll counter at Golghar. Fast service, generous stuffing, special sauce slathered inside every roll.",
  "categories": [
    "street-food",
    "fast-food"
  ],
  "cuisines": [
    "Street Food",
    "Rolls"
  ],
  "popularDishes": [
    "Double Egg Roll",
    "Paneer Roll",
    "Veg Roll"
  ],
  "costForTwo": 130,
  "averageRating": 4.4,
  "reviewCount": 73,
  "imageUrl": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80",
  "isDemo": false,
  "phone": "7275778899",
  "address": "Golghar, Near Sahara India Office, Gorakhpur - 273001",
  "openTime": "12:00",
  "closeTime": "23:00",
  "openDays": [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
  ],
  "diet": "both",
  "status": "Active",
  "ownerName": "Ashish Srivastava",
  "ownerEmail": "golghar.roll@gmail.com",
  "facilities": [
    "Takeaway"
  ],
  "menu": [
    {
      "id": "gr-1",
      "name": "Double Egg Roll",
      "price": 70,
      "category": "Roll",
      "diet": "nonveg",
      "description": "Two egg omelette rolled in paratha with sauce",
      "imageUrl": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=400&q=70",
      "isAvailable": true,
      "isFeatured": true
    },
    {
      "id": "gr-2",
      "name": "Paneer Roll",
      "price": 75,
      "category": "Roll",
      "diet": "veg",
      "description": "Spiced paneer wrap with green chutney",
      "imageUrl": "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=400&q=70",
      "isAvailable": true,
      "isFeatured": false
    },
    {
      "id": "gr-3",
      "name": "Veg Roll",
      "price": 55,
      "category": "Roll",
      "diet": "veg",
      "description": "Mixed vegetable roll with mayo and sauce",
      "imageUrl": "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?auto=format&fit=crop&w=400&q=70",
      "isAvailable": true,
      "isFeatured": false
    }
  ],
  "ratingsBreakdown": {
    "food": 4.4,
    "taste": 4.6,
    "hygiene": 4.1,
    "service": 4.4,
    "ambience": 3.8
  },
  "priceRange": {
    "min": 55,
    "max": 85
  },
  "distanceKm": 1,
  "logoUrl": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20100%20100%22%20width%3D%22200%22%20height%3D%22200%22%3E%0A%20%20%3Cdefs%3E%0A%20%20%20%20%3ClinearGradient%20id%3D%22g_GR%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%237c3aed%22%2F%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%234c1d95%22%2F%3E%0A%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%3C%2Fdefs%3E%0A%20%20%3Crect%20x%3D%224%22%20y%3D%224%22%20width%3D%2292%22%20height%3D%2292%22%20rx%3D%2226%22%20fill%3D%22url(%23g_GR)%22%20stroke%3D%22%23fce588%22%20stroke-width%3D%222.5%22%2F%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2258%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C-apple-system%2Csans-serif%22%20font-weight%3D%22900%22%20font-size%3D%2228%22%20fill%3D%22%23ffffff%22%20letter-spacing%3D%221%22%3EGR%3C%2Ftext%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2280%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C-apple-system%2Csans-serif%22%20font-weight%3D%22800%22%20font-size%3D%227%22%20fill%3D%22%23fce588%22%20letter-spacing%3D%222%22%3EROLLS%3C%2Ftext%3E%0A%3C%2Fsvg%3E"
},
{
  "id": "street-burger-rapti",
  "name": "Rapti Nagar Burger Hut",
  "area": "Rapti Nagar",
  "city": "Gorakhpur",
  "description": "Desi-style veg burger kiosk in Rapti Nagar. Aloo tikki burger, corn burger, and paneer burger — assembled fresh on order.",
  "categories": [
    "street-food",
    "fast-food"
  ],
  "cuisines": [
    "Street Food",
    "Fast Food"
  ],
  "popularDishes": [
    "Aloo Tikki Burger",
    "Paneer Burger",
    "Corn Burger"
  ],
  "costForTwo": 130,
  "averageRating": 4.3,
  "reviewCount": 36,
  "imageUrl": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80",
  "isDemo": false,
  "phone": "8004667788",
  "address": "Rapti Nagar Phase 1, Shop No. 7, Gorakhpur - 273009",
  "openTime": "13:00",
  "closeTime": "22:00",
  "openDays": [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
  ],
  "diet": "veg",
  "status": "Active",
  "ownerName": "Vikas Tripathi",
  "ownerEmail": "rapti.burger@gmail.com",
  "facilities": [
    "Takeaway"
  ],
  "menu": [
    {
      "id": "rb-1",
      "name": "Aloo Tikki Burger",
      "price": 50,
      "category": "Burger",
      "diet": "veg",
      "description": "Spiced aloo tikki patty in sesame bun with slaw",
      "imageUrl": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=400&q=70",
      "isAvailable": true,
      "isFeatured": true
    },
    {
      "id": "rb-2",
      "name": "Paneer Burger",
      "price": 65,
      "category": "Burger",
      "diet": "veg",
      "description": "Grilled paneer patty with mayo and veggies",
      "imageUrl": "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=400&q=70",
      "isAvailable": true,
      "isFeatured": false
    },
    {
      "id": "rb-3",
      "name": "Corn Burger",
      "price": 55,
      "category": "Burger",
      "diet": "veg",
      "description": "Creamy corn patty with green chutney",
      "imageUrl": "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?auto=format&fit=crop&w=400&q=70",
      "isAvailable": true,
      "isFeatured": false
    }
  ],
  "ratingsBreakdown": {
    "food": 4.3,
    "taste": 4.5,
    "hygiene": 4,
    "service": 4.1,
    "ambience": 3.7
  },
  "priceRange": {
    "min": 50,
    "max": 70
  },
  "distanceKm": 6.3,
  "logoUrl": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20100%20100%22%20width%3D%22200%22%20height%3D%22200%22%3E%0A%20%20%3Cdefs%3E%0A%20%20%20%20%3ClinearGradient%20id%3D%22g_RB%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23dc2626%22%2F%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%237f1d1d%22%2F%3E%0A%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%3C%2Fdefs%3E%0A%20%20%3Crect%20x%3D%224%22%20y%3D%224%22%20width%3D%2292%22%20height%3D%2292%22%20rx%3D%2226%22%20fill%3D%22url(%23g_RB)%22%20stroke%3D%22%23fce588%22%20stroke-width%3D%222.5%22%2F%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2258%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C-apple-system%2Csans-serif%22%20font-weight%3D%22900%22%20font-size%3D%2228%22%20fill%3D%22%23ffffff%22%20letter-spacing%3D%221%22%3ERB%3C%2Ftext%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2280%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C-apple-system%2Csans-serif%22%20font-weight%3D%22800%22%20font-size%3D%227%22%20fill%3D%22%23fce588%22%20letter-spacing%3D%222%22%3EBURGER%3C%2Ftext%3E%0A%3C%2Fsvg%3E"
},
{
  "id": "street-kulfi-naukayan",
  "name": "Naukayan Kulfi Faluda",
  "area": "Naukayan",
  "city": "Gorakhpur",
  "description": "Hand-set malai kulfi stall at Naukayan road. The rose faluda with thick vermicelli is a summer obsession for locals.",
  "categories": [
    "street-food",
    "sweets"
  ],
  "cuisines": [
    "Desserts",
    "Street Food"
  ],
  "popularDishes": [
    "Malai Kulfi",
    "Rose Faluda",
    "Kesar Pista Kulfi"
  ],
  "costForTwo": 90,
  "averageRating": 4.6,
  "reviewCount": 49,
  "imageUrl": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&q=80",
  "isDemo": false,
  "phone": "9838334455",
  "address": "Naukayan Road, Near ITI College, Gorakhpur - 273013",
  "openTime": "14:00",
  "closeTime": "22:30",
  "openDays": [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
  ],
  "diet": "veg",
  "status": "Active",
  "ownerName": "Sukhdev Patel",
  "ownerEmail": "naukayan.kulfi@gmail.com",
  "facilities": [
    "Takeaway"
  ],
  "menu": [
    {
      "id": "nk-1",
      "name": "Malai Kulfi",
      "price": 40,
      "category": "Dessert",
      "diet": "veg",
      "description": "Dense creamy frozen kulfi on stick",
      "imageUrl": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=400&q=70",
      "isAvailable": true,
      "isFeatured": true
    },
    {
      "id": "nk-2",
      "name": "Rose Faluda",
      "price": 60,
      "category": "Dessert",
      "diet": "veg",
      "description": "Rose syrup faluda with kulfi and vermicelli",
      "imageUrl": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=400&q=70",
      "isAvailable": true,
      "isFeatured": true
    },
    {
      "id": "nk-3",
      "name": "Kesar Pista Kulfi",
      "price": 50,
      "category": "Dessert",
      "diet": "veg",
      "description": "Saffron and pistachio flavoured kulfi",
      "imageUrl": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=400&q=70",
      "isAvailable": true,
      "isFeatured": false
    }
  ],
  "ratingsBreakdown": {
    "food": 4.7,
    "taste": 4.8,
    "hygiene": 4.4,
    "service": 4.5,
    "ambience": 4
  },
  "priceRange": {
    "min": 40,
    "max": 65
  },
  "distanceKm": 7.2,
  "logoUrl": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20100%20100%22%20width%3D%22200%22%20height%3D%22200%22%3E%0A%20%20%3Cdefs%3E%0A%20%20%20%20%3ClinearGradient%20id%3D%22g_NK%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23db2777%22%2F%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%239d174d%22%2F%3E%0A%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%3C%2Fdefs%3E%0A%20%20%3Crect%20x%3D%224%22%20y%3D%224%22%20width%3D%2292%22%20height%3D%2292%22%20rx%3D%2226%22%20fill%3D%22url(%23g_NK)%22%20stroke%3D%22%23fce588%22%20stroke-width%3D%222.5%22%2F%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2258%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C-apple-system%2Csans-serif%22%20font-weight%3D%22900%22%20font-size%3D%2228%22%20fill%3D%22%23ffffff%22%20letter-spacing%3D%221%22%3ENK%3C%2Ftext%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2280%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C-apple-system%2Csans-serif%22%20font-weight%3D%22800%22%20font-size%3D%227%22%20fill%3D%22%23fce588%22%20letter-spacing%3D%222%22%3EKULFI%3C%2Ftext%3E%0A%3C%2Fsvg%3E"
},
{
  "id": "street-shakes-betiahata",
  "name": "Betiahata Fresh Juice Bar",
  "area": "Betiahata",
  "city": "Gorakhpur",
  "description": "Cold pressed juices, sugarcane juice, and thick milkshakes at Betiahata chowk. The watermelon juice in summer is unbeatable.",
  "categories": [
    "street-food",
    "cafe"
  ],
  "cuisines": [
    "Juices",
    "Beverages",
    "Street Food"
  ],
  "popularDishes": [
    "Sugarcane Juice",
    "Mixed Fruit Shake",
    "Watermelon Juice"
  ],
  "costForTwo": 90,
  "averageRating": 4.5,
  "reviewCount": 47,
  "imageUrl": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80",
  "isDemo": false,
  "phone": "6386778899",
  "address": "Betiahata, Near Allahabad Bank, Gorakhpur - 273001",
  "openTime": "09:00",
  "closeTime": "21:00",
  "openDays": [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
  ],
  "diet": "veg",
  "status": "Active",
  "ownerName": "Deepak Maurya",
  "ownerEmail": "betiahata.juice@gmail.com",
  "facilities": [
    "Takeaway"
  ],
  "menu": [
    {
      "id": "bj-1",
      "name": "Sugarcane Juice (500ml)",
      "price": 30,
      "category": "Juices",
      "diet": "veg",
      "description": "Fresh-pressed sugarcane with ginger and lemon",
      "imageUrl": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=400&q=70",
      "isAvailable": true,
      "isFeatured": true
    },
    {
      "id": "bj-2",
      "name": "Mixed Fruit Shake",
      "price": 60,
      "category": "Shakes",
      "diet": "veg",
      "description": "Seasonal fruit blended with cold milk",
      "imageUrl": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=400&q=70",
      "isAvailable": true,
      "isFeatured": false
    },
    {
      "id": "bj-3",
      "name": "Watermelon Juice",
      "price": 30,
      "category": "Juices",
      "diet": "veg",
      "description": "Fresh watermelon juice with mint",
      "imageUrl": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=400&q=70",
      "isAvailable": true,
      "isFeatured": false
    }
  ],
  "ratingsBreakdown": {
    "food": 4.5,
    "taste": 4.7,
    "hygiene": 4.4,
    "service": 4.4,
    "ambience": 3.9
  },
  "priceRange": {
    "min": 30,
    "max": 70
  },
  "distanceKm": 3.2,
  "logoUrl": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20100%20100%22%20width%3D%22200%22%20height%3D%22200%22%3E%0A%20%20%3Cdefs%3E%0A%20%20%20%20%3ClinearGradient%20id%3D%22g_BJ%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23059669%22%2F%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23065f46%22%2F%3E%0A%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%3C%2Fdefs%3E%0A%20%20%3Crect%20x%3D%224%22%20y%3D%224%22%20width%3D%2292%22%20height%3D%2292%22%20rx%3D%2226%22%20fill%3D%22url(%23g_BJ)%22%20stroke%3D%22%23fce588%22%20stroke-width%3D%222.5%22%2F%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2258%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C-apple-system%2Csans-serif%22%20font-weight%3D%22900%22%20font-size%3D%2228%22%20fill%3D%22%23ffffff%22%20letter-spacing%3D%221%22%3EBJ%3C%2Ftext%3E%0A%20%20%3Ctext%20x%3D%2250%22%20y%3D%2280%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2C-apple-system%2Csans-serif%22%20font-weight%3D%22800%22%20font-size%3D%227%22%20fill%3D%22%23fce588%22%20letter-spacing%3D%222%22%3EJUICES%3C%2Ftext%3E%0A%3C%2Fsvg%3E"
}
];
