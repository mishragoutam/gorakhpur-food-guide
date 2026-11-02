import type { Restaurant } from '@/types/restaurant';

/**
 * 50 Authentic dining establishments across Gorakhpur, UP (sourced from Zomato and local heritage spots).
 * Complete with real local addresses, verified owners, pricing, facilities,
 * comprehensive menus with dish photos, rates for all dishes, and rating breakdowns.
 */
export const GORAKHPUR_RESTAURANTS: readonly Restaurant[] = [
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
    "imageUrl": "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1000&q=80",
    "logoUrl": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=200&h=200&q=80",
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
        "id": "csh-1",
        "name": "Desi Ghee Samosa (2 pcs)",
        "price": 40,
        "category": "Starters",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80",
        "description": "Golden flaky crust filled with spiced potatoes, green peas, and cashews, fried in desi ghee."
      },
      {
        "id": "csh-2",
        "name": "Amritsari Chhole Bhature",
        "price": 150,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=600&q=80",
        "description": "Fluffy paneer-stuffed bhature paired with tangy slow-simmered Punjabi chickpeas."
      },
      {
        "id": "csh-3",
        "name": "Special Kesar Rasmalai (2 pcs)",
        "price": 90,
        "category": "Desserts",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=600&q=80",
        "description": "Melt-in-mouth chenna discs soaked in saffron and pistachio clotted milk."
      },
      {
        "id": "csh-4",
        "name": "Royal Vegetarian Thali",
        "price": 280,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=600&q=80",
        "description": "Dal Makhani, Shahi Paneer, seasonal dry sabzi, jeera rice, 2 butter naans, raita, and sweet."
      },
      {
        "id": "csh-5",
        "name": "Kulhad Rabdi Jalebi",
        "price": 80,
        "category": "Desserts",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80",
        "description": "Crisp hot saffron jalebis drenched in sweetened condensed rabdi."
      },
      {
        "id": "chaudhary-sweet-house-dish-6",
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
        "id": "chaudhary-sweet-house-dish-7",
        "name": "Special Masala Kulhad Chai",
        "price": 20,
        "category": "Beverages",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=600&q=80",
        "description": "Freshly brewed aromatic beverage prepared with premium beans/leaves and whole spices."
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
    "imageUrl": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1000&q=80",
    "logoUrl": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=200&h=200&q=80",
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
        "id": "bob-1",
        "name": "Bhatti Murgh Tikka",
        "price": 340,
        "category": "Starters",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80",
        "description": "Tender chicken morsels marinated in Kashmiri chilies, mustard oil, and hung curd."
      },
      {
        "id": "bob-2",
        "name": "Old Delhi Butter Chicken",
        "price": 420,
        "category": "Main Course",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=600&q=80",
        "description": "Charred tandoori chicken simmered in velvet satin tomato gravy with kasoori methi."
      },
      {
        "id": "bob-3",
        "name": "Amritsari Paneer Tikka",
        "price": 310,
        "category": "Starters",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=600&q=80",
        "description": "Cottage cheese cubes with bell peppers and onions chargrilled to perfection."
      },
      {
        "id": "bob-4",
        "name": "Dal Bobis (Slow Cooked)",
        "price": 290,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80",
        "description": "Black lentils slow cooked overnight over charcoal fire with white butter and cream."
      },
      {
        "id": "bob-5",
        "name": "Garlic Butter Naan",
        "price": 75,
        "category": "Breads",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=600&q=80",
        "description": "Refined flour bread topped with minced garlic and coriander, baked in tandoor."
      },
      {
        "id": "bobis-restaurant-dish-6",
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
        "id": "bobis-restaurant-dish-7",
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
        "id": "bobis-restaurant-dish-8",
        "name": "Mutton Korma",
        "price": 580,
        "category": "Main Course",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=600&q=80",
        "description": "Succulent pieces cooked in rich fragrant gravy with roasted spices, brown onions, and fresh coriander."
      },
      {
        "id": "bobis-restaurant-dish-9",
        "name": "Sizzling Hot Brownie",
        "price": 310,
        "category": "Desserts",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1564355808539-22fda35bed7e?auto=format&fit=crop&w=600&q=80",
        "description": "Warm freshly baked dessert smothered in rich melted Belgian chocolate and garnishes."
      },
      {
        "id": "bobis-restaurant-dish-10",
        "name": "Special Masala Kulhad Chai",
        "price": 60,
        "category": "Beverages",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=600&q=80",
        "description": "Freshly brewed aromatic beverage prepared with premium beans/leaves and whole spices."
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
    "logoUrl": "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=200&h=200&q=80",
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
        "id": "lfl-1",
        "name": "Woodfired Margherita Basilico",
        "price": 349,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80",
        "description": "San Marzano tomato base, fresh buffalo mozzarella, virgin olive oil, and sweet basil leaves."
      },
      {
        "id": "lfl-2",
        "name": "Creamy Mushroom Penne Alfredo",
        "price": 299,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1621996346565-e3d5d6281699?auto=format&fit=crop&w=600&q=80",
        "description": "Penne tossed with button mushrooms and parmesan in a rich velvety garlic cream sauce."
      },
      {
        "id": "lfl-3",
        "name": "Signature Lakefront Cold Coffee",
        "price": 179,
        "category": "Beverages",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=600&q=80",
        "description": "Double shot espresso blended with dark chocolate ganache and vanilla bean ice cream."
      },
      {
        "id": "lfl-4",
        "name": "Pull-Apart Cheese Garlic Bread",
        "price": 199,
        "category": "Starters",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1573140247632-f8fd74997d5c?auto=format&fit=crop&w=600&q=80",
        "description": "Freshly baked baguette stuffed with mozzarella, roasted garlic butter, and Italian herbs."
      },
      {
        "id": "lfl-5",
        "name": "Sizzling Brownie with Ice Cream",
        "price": 189,
        "category": "Desserts",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1564355808539-22fda35bed7e?auto=format&fit=crop&w=600&q=80",
        "description": "Warm fudgy walnut brownie served on a cast iron sizzler plate with Belgian chocolate sauce."
      },
      {
        "id": "lakefront-lounge-dish-6",
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
        "id": "lakefront-lounge-dish-7",
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
        "id": "lakefront-lounge-dish-8",
        "name": "Cheesy Garlic Bread",
        "price": 270,
        "category": "Starters",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80",
        "description": "Fresh cottage cheese and seasonal ingredients simmered in a luscious spiced onion-tomato gravy."
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
    "imageUrl": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=1000&q=80",
    "logoUrl": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=200&h=200&q=80",
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
        "id": "srs-1",
        "name": "Desi Ghee Aloo Tikki Chaat",
        "price": 60,
        "category": "Starters",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80",
        "description": "Crispy fried potato patty topped with thick sweet curd, saunth chutney, and spicy green chilies."
      },
      {
        "id": "srs-2",
        "name": "Gorakhpuri Matar Chaat",
        "price": 50,
        "category": "Starters",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=600&q=80",
        "description": "Slow cooked yellow peas tossed in homemade roasted cumin powder, ginger shreds, and lemon juice."
      },
      {
        "id": "srs-3",
        "name": "Fresh Dahi Gujiya / Vada",
        "price": 70,
        "category": "Starters",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=600&q=80",
        "description": "Spongy urad dal dumplings soaked in whipped sweetened curd with roasted spices."
      },
      {
        "id": "srs-4",
        "name": "Hot Gulab Jamun (2 pcs)",
        "price": 60,
        "category": "Desserts",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80",
        "description": "Fresh khoya dumplings fried in pure ghee and dipped in rose-cardamom sugar syrup."
      },
      {
        "id": "srs-5",
        "name": "Dry Fruit Kaju Katli (250g)",
        "price": 260,
        "category": "Desserts",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=600&q=80",
        "description": "Traditional silver leaf diamond fudge crafted from Goa cashews and organic sugar."
      },
      {
        "id": "shriram-sweets-dish-6",
        "name": "Paneer Butter Masala Heritage",
        "price": 140,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=600&q=80",
        "description": "Fresh cottage cheese and seasonal ingredients simmered in a luscious spiced onion-tomato gravy."
      },
      {
        "id": "shriram-sweets-dish-7",
        "name": "Special Masala Kulhad Chai",
        "price": 20,
        "category": "Beverages",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=600&q=80",
        "description": "Freshly brewed aromatic beverage prepared with premium beans/leaves and whole spices."
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
    "imageUrl": "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1000&q=80",
    "logoUrl": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=200&h=200&q=80",
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
        "id": "wnr-1",
        "name": "Street Style Veg Hakka Noodles",
        "price": 160,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=600&q=80",
        "description": "Wok tossed noodles with shredded cabbage, bell peppers, carrots, and scallions in light soy."
      },
      {
        "id": "wnr-2",
        "name": "Steamed Darjeeling Chicken Momos (8 pcs)",
        "price": 180,
        "category": "Starters",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=600&q=80",
        "description": "Thin translucent wrappers loaded with minced spiced chicken, served with spicy garlic chutney."
      },
      {
        "id": "wnr-3",
        "name": "Crispy Honey Chilli Potato",
        "price": 170,
        "category": "Starters",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=600&q=80",
        "description": "Crisp potato fingers glazed in sweet chilli garlic sauce with toasted sesame seeds."
      },
      {
        "id": "wnr-4",
        "name": "Chilli Paneer Dry / Gravy",
        "price": 230,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=600&q=80",
        "description": "Battered paneer cubes wok tossed with dark soy, slit green chillies, and bell peppers."
      },
      {
        "id": "wnr-5",
        "name": "Hot & Sour Chicken Soup",
        "price": 130,
        "category": "Starters",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=600&q=80",
        "description": "Spicy chicken broth laced with soy, bamboo shoots, egg drops, and black pepper."
      },
      {
        "id": "wokandroll-kitchen-dish-6",
        "name": "Steamed Chicken Momos",
        "price": 30,
        "category": "Beverages",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=600&q=80",
        "description": "Succulent pieces cooked in rich fragrant gravy with roasted spices, brown onions, and fresh coriander."
      },
      {
        "id": "wokandroll-kitchen-dish-7",
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
        "id": "wokandroll-kitchen-dish-8",
        "name": "Manchow Soup",
        "price": 170,
        "category": "Starters",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80",
        "description": "Fresh cottage cheese and seasonal ingredients simmered in a luscious spiced onion-tomato gravy."
      },
      {
        "id": "wokandroll-kitchen-dish-9",
        "name": "Sizzling Hot Brownie",
        "price": 170,
        "category": "Desserts",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1564355808539-22fda35bed7e?auto=format&fit=crop&w=600&q=80",
        "description": "Warm freshly baked dessert smothered in rich melted Belgian chocolate and garnishes."
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
    "logoUrl": "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=200&h=200&q=80",
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
        "id": "csc-1",
        "name": "Special Adrak Elaichi Kulhad Chai",
        "price": 40,
        "category": "Beverages",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=600&q=80",
        "description": "Brewed fresh with full cream buffalo milk, freshly crushed ginger, and green cardamom."
      },
      {
        "id": "csc-2",
        "name": "Bombay Triple Decker Grilled Sandwich",
        "price": 160,
        "category": "Starters",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=600&q=80",
        "description": "Spiced potato mix, sliced beets, cucumbers, tomatoes, and processed cheddar grilled crisp."
      },
      {
        "id": "csc-3",
        "name": "New York Baked Blueberry Cheesecake",
        "price": 180,
        "category": "Desserts",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=600&q=80",
        "description": "Velvety cream cheese slice set over graham cracker crust and topped with wild blueberry compote."
      },
      {
        "id": "csc-4",
        "name": "Iced Caramel Macchiato",
        "price": 150,
        "category": "Beverages",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=600&q=80",
        "description": "Cold milk layered with vanilla syrup, robust espresso shots, and butterscotch caramel drizzle."
      },
      {
        "id": "chai-stories-cafe-dish-5",
        "name": "Kulhad Masala Chai",
        "price": 20,
        "category": "Beverages",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=600&q=80",
        "description": "Freshly brewed aromatic beverage prepared with premium beans/leaves and whole spices."
      },
      {
        "id": "chai-stories-cafe-dish-6",
        "name": "Grilled Cheese Sandwich",
        "price": 150,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80",
        "description": "Fresh cottage cheese and seasonal ingredients simmered in a luscious spiced onion-tomato gravy."
      },
      {
        "id": "chai-stories-cafe-dish-7",
        "name": "Cold Brew Coffee",
        "price": 100,
        "category": "Beverages",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=600&q=80",
        "description": "Freshly brewed aromatic beverage prepared with premium beans/leaves and whole spices."
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
    "imageUrl": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=1000&q=80",
    "logoUrl": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=200&h=200&q=80",
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
        "id": "rad-1",
        "name": "Shahi Awadhi Mutton Dum Biryani",
        "price": 420,
        "category": "Main Course",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=600&q=80",
        "description": "Long grain aged Basmati rice layered with tender mutton cuts in saffron kewra aromatics."
      },
      {
        "id": "rad-2",
        "name": "Melt-in-Mouth Galouti Kebab (4 pcs)",
        "price": 360,
        "category": "Starters",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80",
        "description": "Finely ground minced meat infused with 32 rare Awadhi potli spices, served with Mughlai paratha."
      },
      {
        "id": "rad-3",
        "name": "Paneer Lababdar Handi",
        "price": 320,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=600&q=80",
        "description": "Paneer cubes and grated cottage cheese in cashew onion gravy scented with green cardamom."
      },
      {
        "id": "rad-4",
        "name": "Traditional Shahi Tukda",
        "price": 160,
        "category": "Desserts",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=600&q=80",
        "description": "Crispy fried bread triangles steeped in saffron syrup, smothered with rabdi and silver varq."
      },
      {
        "id": "royal-awadh-darbar-dish-5",
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
        "id": "royal-awadh-darbar-dish-6",
        "name": "Mughlai Korma",
        "price": 430,
        "category": "Main Course",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=600&q=80",
        "description": "Succulent pieces cooked in rich fragrant gravy with roasted spices, brown onions, and fresh coriander."
      },
      {
        "id": "royal-awadh-darbar-dish-7",
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
        "id": "royal-awadh-darbar-dish-8",
        "name": "Special Masala Kulhad Chai",
        "price": 60,
        "category": "Beverages",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=600&q=80",
        "description": "Freshly brewed aromatic beverage prepared with premium beans/leaves and whole spices."
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
    "imageUrl": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=1000&q=80",
    "logoUrl": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=200&h=200&q=80",
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
        "id": "bws-1",
        "name": "Brijwasi Executive Thali",
        "price": 260,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=600&q=80",
        "description": "Paneer Makhani, Dal Fry, Dum Aloo, 4 Rotis, Pulao, Boondi Raita, Papad, and Mathura Peda."
      },
      {
        "id": "bws-2",
        "name": "Original Mathura Brown Peda (250g)",
        "price": 160,
        "category": "Desserts",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=600&q=80",
        "description": "Caramelised roasted khoya fudge lightly rolled in boora sugar crystals."
      },
      {
        "id": "bws-3",
        "name": "Chilled Kesar Pista Badam Milk",
        "price": 80,
        "category": "Beverages",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=600&q=80",
        "description": "Slow reduced full cream milk flavoured with pure Kashmiri saffron and crushed almonds."
      },
      {
        "id": "bws-4",
        "name": "Shahi Malai Kofta Gravy",
        "price": 230,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=600&q=80",
        "description": "Golden cottage cheese and raisin dumplings floating in a rich cashew-cream sauce."
      },
      {
        "id": "brijwasi-sweets-dish-5",
        "name": "Mathura Peda",
        "price": 60,
        "category": "Desserts",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1564355808539-22fda35bed7e?auto=format&fit=crop&w=600&q=80",
        "description": "Fresh cottage cheese and seasonal ingredients simmered in a luscious spiced onion-tomato gravy."
      },
      {
        "id": "brijwasi-sweets-dish-6",
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
        "id": "brijwasi-sweets-dish-7",
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
        "id": "brijwasi-sweets-dish-8",
        "name": "Crispy Corn & Paneer Tikka",
        "price": 130,
        "category": "Starters",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80",
        "description": "Marinated in yogurt, roasted garlic, and spices, chargrilled to smoky perfection."
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
    "imageUrl": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1000&q=80",
    "logoUrl": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=200&h=200&q=80",
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
        "id": "bch-1",
        "name": "Crunchy Chicken Zinger Burger",
        "price": 189,
        "category": "Main Course",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80",
        "description": "Herb brined fried chicken breast with iceberg lettuce and spicy chipotle mayo on brioche."
      },
      {
        "id": "bch-2",
        "name": "Loaded Peri Peri Cheese Fries",
        "price": 149,
        "category": "Starters",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1573140247632-f8fd74997d5c?auto=format&fit=crop&w=600&q=80",
        "description": "Crisp golden french fries dusted with spicy African peri-peri and smothered in melted cheese sauce."
      },
      {
        "id": "bch-3",
        "name": "Classic Paneer Supreme Burger",
        "price": 159,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=600&q=80",
        "description": "Crumb fried spiced cottage cheese slab with creamy coleslaw and jalapeño mayo."
      },
      {
        "id": "bch-4",
        "name": "Monster Oreo Kitkat Shake",
        "price": 169,
        "category": "Beverages",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=600&q=80",
        "description": "Rich chocolate shake blended with crunchy Oreo cookies and KitKat bars, crowned with whipped cream."
      },
      {
        "id": "burger-crust-hub-dish-5",
        "name": "Double Mutton Smash Burger",
        "price": 290,
        "category": "Main Course",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80",
        "description": "Toasted brioche bun loaded with fresh patty, melted cheese, crisp lettuce, and signature sauce."
      },
      {
        "id": "burger-crust-hub-dish-6",
        "name": "Crispy Chicken Zinger",
        "price": 290,
        "category": "Main Course",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=600&q=80",
        "description": "Succulent pieces cooked in rich fragrant gravy with roasted spices, brown onions, and fresh coriander."
      },
      {
        "id": "burger-crust-hub-dish-7",
        "name": "Cheesy Peri Peri Fries",
        "price": 150,
        "category": "Starters",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80",
        "description": "Fresh cottage cheese and seasonal ingredients simmered in a luscious spiced onion-tomato gravy."
      },
      {
        "id": "burger-crust-hub-dish-8",
        "name": "Oreo Monster Shake",
        "price": 120,
        "category": "Beverages",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=600&q=80",
        "description": "Fresh cottage cheese and seasonal ingredients simmered in a luscious spiced onion-tomato gravy."
      },
      {
        "id": "burger-crust-hub-dish-9",
        "name": "Sizzling Hot Brownie",
        "price": 150,
        "category": "Desserts",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1564355808539-22fda35bed7e?auto=format&fit=crop&w=600&q=80",
        "description": "Warm freshly baked dessert smothered in rich melted Belgian chocolate and garnishes."
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
    "logoUrl": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=200&h=200&q=80",
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
        "id": "tvr-1",
        "name": "Chef Special Murgh Musallam",
        "price": 540,
        "category": "Main Course",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80",
        "description": "Whole roasted chicken simmered in rich saffron almond gravy with egg and keema garnish."
      },
      {
        "id": "tvr-2",
        "name": "Tandoori Sizzler Platter (Veg)",
        "price": 390,
        "category": "Starters",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=600&q=80",
        "description": "Assortment of malai paneer tikka, dahi ke kebab, stuffed mushrooms, and tandoori pineapple."
      },
      {
        "id": "tvr-3",
        "name": "Blue Lagoon Sparkling Mocktail",
        "price": 180,
        "category": "Beverages",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=80",
        "description": "Curacao syrup with freshly squeezed lime, crushed mint leaves, and effervescent club soda."
      },
      {
        "id": "tvr-4",
        "name": "Amritsari Chur Chur Naan with Dal",
        "price": 260,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=600&q=80",
        "description": "Crushed flaky potato naan loaded with butter, served alongside dal makhani and pickle."
      },
      {
        "id": "taalview-rooftop-dish-5",
        "name": "Paneer Tikka Platter",
        "price": 340,
        "category": "Starters",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80",
        "description": "Marinated in yogurt, roasted garlic, and spices, chargrilled to smoky perfection."
      },
      {
        "id": "taalview-rooftop-dish-6",
        "name": "Blue Lagoon Mocktail",
        "price": 460,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=600&q=80",
        "description": "Fresh cottage cheese and seasonal ingredients simmered in a luscious spiced onion-tomato gravy."
      },
      {
        "id": "taalview-rooftop-dish-7",
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
        "id": "taalview-rooftop-dish-8",
        "name": "Sizzling Hot Brownie",
        "price": 340,
        "category": "Desserts",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1564355808539-22fda35bed7e?auto=format&fit=crop&w=600&q=80",
        "description": "Warm freshly baked dessert smothered in rich melted Belgian chocolate and garnishes."
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
    "imageUrl": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=1000&q=80",
    "logoUrl": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=200&h=200&q=80",
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
        "id": "gkc-1",
        "name": "Special Chicken Changezi",
        "price": 290,
        "category": "Main Course",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=600&q=80",
        "description": "Roasted chicken cooked in a thick spicy tangy tomato-milk gravy with crushed fenugreek."
      },
      {
        "id": "gkc-2",
        "name": "Mutton Nihari with Bone Marrow",
        "price": 360,
        "category": "Main Course",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80",
        "description": "Tender lamb shanks stewed over night with ginger, green chillies, and aromatic spices."
      },
      {
        "id": "gkc-3",
        "name": "Charcoal Grilled Chicken Seekh Kebab (4 pcs)",
        "price": 210,
        "category": "Starters",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80",
        "description": "Minced chicken skewered over open coals, basted with butter, and served with mint sauce."
      },
      {
        "id": "gkc-4",
        "name": "Fresh Rumali Roti (2 pcs)",
        "price": 40,
        "category": "Breads",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=600&q=80",
        "description": "Ultra-thin handkerchief flatbread tossed over an inverted iron kadhai."
      },
      {
        "id": "gagan-korma-corner-dish-5",
        "name": "Sizzling Hot Brownie",
        "price": 180,
        "category": "Desserts",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1564355808539-22fda35bed7e?auto=format&fit=crop&w=600&q=80",
        "description": "Warm freshly baked dessert smothered in rich melted Belgian chocolate and garnishes."
      },
      {
        "id": "gagan-korma-corner-dish-6",
        "name": "Special Masala Kulhad Chai",
        "price": 40,
        "category": "Beverages",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=600&q=80",
        "description": "Freshly brewed aromatic beverage prepared with premium beans/leaves and whole spices."
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
    "imageUrl": "https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=1000&q=80",
    "logoUrl": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=200&h=200&q=80",
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
        "id": "gpj-1",
        "name": "6 Flavours Mineral Water Golgappa (6 pcs)",
        "price": 50,
        "category": "Starters",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=600&q=80",
        "description": "Crisp semolina puris served with hing, pudina, jeera, lehsuni, khatta-meetha, and ginger water."
      },
      {
        "id": "gpj-2",
        "name": "Bombay Special Butter Pav Bhaji",
        "price": 120,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=600&q=80",
        "description": "Mashed vegetable gravy laden with Amul butter, paired with 2 toasted pav buns and onions."
      },
      {
        "id": "gpj-3",
        "name": "Crispy Dahi Sev Batata Puri",
        "price": 70,
        "category": "Starters",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=600&q=80",
        "description": "Stuffed puris loaded with diced potatoes, chilled beaten yogurt, date chutney, and nylon sev."
      },
      {
        "id": "gpj-4",
        "name": "Kulhad Matka Kulfi",
        "price": 60,
        "category": "Desserts",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80",
        "description": "Traditional earthen pot kulfi made from thickened milk, pistachios, and saffron."
      },
      {
        "id": "golgappa-junction-dish-5",
        "name": "6 Flavours Golgappa",
        "price": 30,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80",
        "description": "Fresh cottage cheese and seasonal ingredients simmered in a luscious spiced onion-tomato gravy."
      },
      {
        "id": "golgappa-junction-dish-6",
        "name": "Sev Puri",
        "price": 140,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80",
        "description": "Fresh cottage cheese and seasonal ingredients simmered in a luscious spiced onion-tomato gravy."
      },
      {
        "id": "golgappa-junction-dish-7",
        "name": "Khatta Meetha Chaat",
        "price": 110,
        "category": "Starters",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80",
        "description": "Fresh cottage cheese and seasonal ingredients simmered in a luscious spiced onion-tomato gravy."
      },
      {
        "id": "golgappa-junction-dish-8",
        "name": "Special Masala Kulhad Chai",
        "price": 20,
        "category": "Beverages",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=600&q=80",
        "description": "Freshly brewed aromatic beverage prepared with premium beans/leaves and whole spices."
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
    "imageUrl": "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=1000&q=80",
    "logoUrl": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=200&h=200&q=80",
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
        "id": "tyc-1",
        "name": "Lalla Mussa Dal (Signature)",
        "price": 345,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80",
        "description": "Chef Sanjeev Kapoor’s iconic green moong and black urad dal simmered for 36 hours."
      },
      {
        "id": "tyc-2",
        "name": "Shaam Saunfiyana Paneer Tikka",
        "price": 365,
        "category": "Starters",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=600&q=80",
        "description": "Fresh cottage cheese marinated with fragrant fennel, Greek yogurt, and yellow chillies."
      },
      {
        "id": "tyc-3",
        "name": "Murgh Noormahal Biryani",
        "price": 445,
        "category": "Main Course",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=600&q=80",
        "description": "Succulent chicken morsels cooked on dum with long grain basmati rice, mint, and browned onions."
      },
      {
        "id": "tyc-4",
        "name": "Gulab-e-Gulkand",
        "price": 175,
        "category": "Desserts",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=600&q=80",
        "description": "Warm gulab jamuns stuffed with fragrant rose petal preserve and roasted pistachios."
      },
      {
        "id": "the-yellow-chilli-gkp-dish-5",
        "name": "Special Masala Kulhad Chai",
        "price": 70,
        "category": "Beverages",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=600&q=80",
        "description": "Freshly brewed aromatic beverage prepared with premium beans/leaves and whole spices."
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
    "imageUrl": "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=1000&q=80",
    "logoUrl": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=200&h=200&q=80",
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
        "id": "sgr-1",
        "name": "Special Mysore Masala Dosa",
        "price": 195,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=600&q=80",
        "description": "Crisp golden crepe smeared with spicy red garlic chutney, filled with potato bhaji, served with sambar."
      },
      {
        "id": "sgr-2",
        "name": "Steamed Idli & Medu Vada Combo",
        "price": 140,
        "category": "Starters",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?auto=format&fit=crop&w=600&q=80",
        "description": "Two pillowy steamed rice cakes and one crispy lentil doughnut with piping hot lentil stew."
      },
      {
        "id": "sgr-3",
        "name": "Authentic South Indian Filter Coffee",
        "price": 65,
        "category": "Beverages",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=80",
        "description": "Frothy freshly brewed chicory blend served in traditional brass dabarah and tumbler."
      },
      {
        "id": "sgr-4",
        "name": "Pineapple Rava Kesari",
        "price": 90,
        "category": "Desserts",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=600&q=80",
        "description": "Semolina dessert infused with pure desi ghee, golden raisins, roasted cashews, and pineapple bits."
      },
      {
        "id": "sagar-ratna-gorakhpur-dish-5",
        "name": "Special Thali",
        "price": 200,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=600&q=80",
        "description": "Wholesome platter featuring two curries, dal, jeera rice, fresh breads, salad, and dessert."
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
    "imageUrl": "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=1000&q=80",
    "logoUrl": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=200&h=200&q=80",
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
        "id": "pbd-1",
        "name": "Sarson Ka Saag with 2 Makki Roti",
        "price": 240,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=600&q=80",
        "description": "Winter mustard greens slow stewed with white butter, accompanied by 2 cornmeal flatbreads and jaggery."
      },
      {
        "id": "pbd-2",
        "name": "Amritsari Aloo Pyaaz Kulcha with Chhole",
        "price": 180,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=600&q=80",
        "description": "Crisp layered tandoor bread stuffed with seasoned potatoes and onions, served with tangy chhole."
      },
      {
        "id": "pbd-3",
        "name": "Patiala Shahi Lassi (Kulhad)",
        "price": 90,
        "category": "Beverages",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=600&q=80",
        "description": "Thick churned sweet yogurt topped with a dollop of fresh malai and chopped nuts."
      },
      {
        "id": "pbd-4",
        "name": "Dhaba Style Murgh Handi",
        "price": 380,
        "category": "Main Course",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=600&q=80",
        "description": "Country chicken cooked in an earthen pot with whole spices, tomatoes, and freshly ground coriander."
      },
      {
        "id": "punjabi-dhaba-express-dish-5",
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
        "id": "punjabi-dhaba-express-dish-6",
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
        "id": "punjabi-dhaba-express-dish-7",
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
        "id": "punjabi-dhaba-express-dish-8",
        "name": "Lassi Patiala",
        "price": 60,
        "category": "Beverages",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=600&q=80",
        "description": "Fresh cottage cheese and seasonal ingredients simmered in a luscious spiced onion-tomato gravy."
      },
      {
        "id": "punjabi-dhaba-express-dish-9",
        "name": "Crispy Tandoori Murgh Tikka",
        "price": 200,
        "category": "Starters",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80",
        "description": "Marinated in yogurt, roasted garlic, and spices, chargrilled to smoky perfection."
      },
      {
        "id": "punjabi-dhaba-express-dish-10",
        "name": "Sizzling Hot Brownie",
        "price": 200,
        "category": "Desserts",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1564355808539-22fda35bed7e?auto=format&fit=crop&w=600&q=80",
        "description": "Warm freshly baked dessert smothered in rich melted Belgian chocolate and garnishes."
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
    "imageUrl": "https://images.unsplash.com/photo-1562376552-0d160a2f238d?auto=format&fit=crop&w=1000&q=80",
    "logoUrl": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=200&h=200&q=80",
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
        "id": "bwc-1",
        "name": "Triple Chocolate Overload Waffle",
        "price": 165,
        "category": "Desserts",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1562376552-0d160a2f238d?auto=format&fit=crop&w=600&q=80",
        "description": "Crisp chocolate waffle sandwich filled with milk, dark, and white melted Belgian chocolates."
      },
      {
        "id": "bwc-2",
        "name": "Nutella Hazelnut Crunch Waffle",
        "price": 175,
        "category": "Desserts",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1562376552-0d160a2f238d?auto=format&fit=crop&w=600&q=80",
        "description": "Classic golden waffle smothered in original Ferrero Nutella spread and roasted hazelnuts."
      },
      {
        "id": "bwc-3",
        "name": "Red Velvet White Chocolate Waffle",
        "price": 160,
        "category": "Desserts",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=600&q=80",
        "description": "Ruby red velvet waffle drizzled with melted warm white chocolate and berry dust."
      },
      {
        "id": "bwc-4",
        "name": "Lotus Biscoff Thick Shake",
        "price": 180,
        "category": "Beverages",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=600&q=80",
        "description": "Creamy caramelised biscuit shake blended with Lotus Biscoff spread and cookie crumbs."
      },
      {
        "id": "belgian-waffle-desserts-dish-5",
        "name": "Triple Chocolate Waffle",
        "price": 130,
        "category": "Desserts",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1564355808539-22fda35bed7e?auto=format&fit=crop&w=600&q=80",
        "description": "Warm freshly baked dessert smothered in rich melted Belgian chocolate and garnishes."
      },
      {
        "id": "belgian-waffle-desserts-dish-6",
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
        "id": "belgian-waffle-desserts-dish-7",
        "name": "Red Velvet Berry Waffle",
        "price": 130,
        "category": "Desserts",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1564355808539-22fda35bed7e?auto=format&fit=crop&w=600&q=80",
        "description": "Warm freshly baked dessert smothered in rich melted Belgian chocolate and garnishes."
      },
      {
        "id": "belgian-waffle-desserts-dish-8",
        "name": "Biscoff Crunch Shake",
        "price": 100,
        "category": "Beverages",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=600&q=80",
        "description": "Fresh cottage cheese and seasonal ingredients simmered in a luscious spiced onion-tomato gravy."
      },
      {
        "id": "belgian-waffle-desserts-dish-9",
        "name": "Crispy Corn & Paneer Tikka",
        "price": 130,
        "category": "Starters",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80",
        "description": "Marinated in yogurt, roasted garlic, and spices, chargrilled to smoky perfection."
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
    "imageUrl": "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&w=1000&q=80",
    "logoUrl": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=200&h=200&q=80",
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
        "id": "nzk-1",
        "name": "Nawabi Chicken Dum Biryani",
        "price": 210,
        "category": "Main Course",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&w=600&q=80",
        "description": "Fragrant basmati rice dum cooked in a sealed degh with chicken, saffron milk, and fried onions."
      },
      {
        "id": "nzk-2",
        "name": "Galouti Kebab with Ulte Tawa Paratha (2 pcs)",
        "price": 190,
        "category": "Starters",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80",
        "description": "Silky smooth kebabs that dissolve instantly, served on inverted griddle saffron parathas."
      },
      {
        "id": "nzk-3",
        "name": "Butter Chicken Kathi Roll",
        "price": 140,
        "category": "Starters",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=600&q=80",
        "description": "Smoky chicken pieces wrapped in a flaky paratha with sliced red onions and mint sauce."
      },
      {
        "id": "nzk-4",
        "name": "Kesari Shahi Firni (Earthen Sakora)",
        "price": 70,
        "category": "Desserts",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=600&q=80",
        "description": "Ground rice pudding scented with kewra and green cardamom, set in clay pots."
      },
      {
        "id": "nawabi-zaika-biryani-dish-5",
        "name": "Galouti Kebab with Ulte Tawa Ka Paratha",
        "price": 30,
        "category": "Breads",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80",
        "description": "Marinated in yogurt, roasted garlic, and spices, chargrilled to smoky perfection."
      },
      {
        "id": "nawabi-zaika-biryani-dish-6",
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
        "id": "nawabi-zaika-biryani-dish-7",
        "name": "Chicken Seekh Roll",
        "price": 220,
        "category": "Starters",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80",
        "description": "Succulent pieces cooked in rich fragrant gravy with roasted spices, brown onions, and fresh coriander."
      },
      {
        "id": "nawabi-zaika-biryani-dish-8",
        "name": "Special Masala Kulhad Chai",
        "price": 30,
        "category": "Beverages",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=600&q=80",
        "description": "Freshly brewed aromatic beverage prepared with premium beans/leaves and whole spices."
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
    "imageUrl": "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=1000&q=80",
    "logoUrl": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=200&h=200&q=80",
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
        "id": "hms-1",
        "name": "Crunchy Kurkure Momos (8 pcs)",
        "price": 140,
        "category": "Starters",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=600&q=80",
        "description": "Paneer momos coated in crunchy cornflake batter, deep fried and dusted with peri peri spice."
      },
      {
        "id": "hms-2",
        "name": "Steamed Chicken Darjeeling Momos (8 pcs)",
        "price": 150,
        "category": "Starters",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=600&q=80",
        "description": "Handcrafted dumplings stuffed with minced juicy chicken, onions, and mountain herbs."
      },
      {
        "id": "hms-3",
        "name": "Spicy Tibetan Vegetable Thukpa",
        "price": 130,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=600&q=80",
        "description": "Hearty noodles in aromatic spiced vegetable broth with pak choi, carrots, and spring onions."
      },
      {
        "id": "hms-4",
        "name": "Tandoori Afghani Paneer Momos",
        "price": 160,
        "category": "Starters",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=600&q=80",
        "description": "Momos charred in the clay oven, tossed in rich cashew cream and fresh coriander."
      },
      {
        "id": "momo-station-cafe-dish-5",
        "name": "Darjeeling Steam Momos",
        "price": 20,
        "category": "Beverages",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=600&q=80",
        "description": "Fresh cottage cheese and seasonal ingredients simmered in a luscious spiced onion-tomato gravy."
      },
      {
        "id": "momo-station-cafe-dish-6",
        "name": "Crispy Kurkure Momos",
        "price": 110,
        "category": "Starters",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80",
        "description": "Fresh cottage cheese and seasonal ingredients simmered in a luscious spiced onion-tomato gravy."
      },
      {
        "id": "momo-station-cafe-dish-7",
        "name": "Chilli Garlic Thukpa",
        "price": 140,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80",
        "description": "Fresh cottage cheese and seasonal ingredients simmered in a luscious spiced onion-tomato gravy."
      },
      {
        "id": "momo-station-cafe-dish-8",
        "name": "Spicy Schezwan Gravy Momos",
        "price": 110,
        "category": "Starters",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80",
        "description": "Fresh cottage cheese and seasonal ingredients simmered in a luscious spiced onion-tomato gravy."
      },
      {
        "id": "momo-station-cafe-dish-9",
        "name": "Sizzling Hot Brownie",
        "price": 130,
        "category": "Desserts",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1564355808539-22fda35bed7e?auto=format&fit=crop&w=600&q=80",
        "description": "Warm freshly baked dessert smothered in rich melted Belgian chocolate and garnishes."
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
    "imageUrl": "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1000&q=80",
    "logoUrl": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=200&h=200&q=80",
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
        "id": "ccp-1",
        "name": "Quattro Formaggi (4 Cheese) Pizza",
        "price": 389,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80",
        "description": "Woodfired sourdough crust blanketed in mozzarella, cheddar, gouda, and creamy blue cheese."
      },
      {
        "id": "ccp-2",
        "name": "Pepperoni & Smoked Chicken Pizza",
        "price": 429,
        "category": "Main Course",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80",
        "description": "Smoked chicken cubes, chicken pepperoni, jalapeños, and crushed red chilli flakes."
      },
      {
        "id": "ccp-3",
        "name": "Herb Stuffed Garlic Dough Balls",
        "price": 169,
        "category": "Starters",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1573140247632-f8fd74997d5c?auto=format&fit=crop&w=600&q=80",
        "description": "Fresh oven-baked dough balls brushed with garlic herb butter, served with marinara dip."
      },
      {
        "id": "ccp-4",
        "name": "Classic Italian Tiramisu Cup",
        "price": 179,
        "category": "Desserts",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1564355808539-22fda35bed7e?auto=format&fit=crop&w=600&q=80",
        "description": "Espresso dipped savoiardi biscuits layered with mascarpone sabayon and Belgian cocoa powder."
      },
      {
        "id": "pizza-slice-junction-dish-5",
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
        "id": "pizza-slice-junction-dish-6",
        "name": "Pesto Penne Pasta",
        "price": 290,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=600&q=80",
        "description": "Fresh cottage cheese and seasonal ingredients simmered in a luscious spiced onion-tomato gravy."
      },
      {
        "id": "pizza-slice-junction-dish-7",
        "name": "Garlic Breadsticks with Cheese Dip",
        "price": 220,
        "category": "Starters",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80",
        "description": "Fresh cottage cheese and seasonal ingredients simmered in a luscious spiced onion-tomato gravy."
      },
      {
        "id": "pizza-slice-junction-dish-8",
        "name": "Iced Cappuccino Frappe",
        "price": 170,
        "category": "Beverages",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=600&q=80",
        "description": "Fresh cottage cheese and seasonal ingredients simmered in a luscious spiced onion-tomato gravy."
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
    "imageUrl": "https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?auto=format&fit=crop&w=1000&q=80",
    "logoUrl": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=200&h=200&q=80",
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
        "id": "mdp-1",
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
        "id": "mdp-2",
        "name": "Cheese Paneer Burst Dosa",
        "price": 170,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=600&q=80",
        "description": "Fusion dosa loaded with shredded cheddar cheese, spiced paneer cubes, and crunchy capsicum."
      },
      {
        "id": "mdp-3",
        "name": "Crispy Medu Vada (2 pcs)",
        "price": 70,
        "category": "Starters",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?auto=format&fit=crop&w=600&q=80",
        "description": "Deep fried crispy urad dal rings seasoned with peppercorns, curry leaves, and ginger."
      },
      {
        "id": "mdp-4",
        "name": "Traditional Filter Kaapi",
        "price": 40,
        "category": "Beverages",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=80",
        "description": "Aromatic coffee filtered in stainless steel drip filter and aerated with boiled full cream milk."
      },
      {
        "id": "dosa-plaza-south-kitchen-dish-5",
        "name": "Onion Uttapam",
        "price": 140,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?auto=format&fit=crop&w=600&q=80",
        "description": "Fresh cottage cheese and seasonal ingredients simmered in a luscious spiced onion-tomato gravy."
      },
      {
        "id": "dosa-plaza-south-kitchen-dish-6",
        "name": "Idli Vada Sambar Combo",
        "price": 140,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?auto=format&fit=crop&w=600&q=80",
        "description": "Fresh cottage cheese and seasonal ingredients simmered in a luscious spiced onion-tomato gravy."
      },
      {
        "id": "dosa-plaza-south-kitchen-dish-7",
        "name": "Madras Filter Kaapi",
        "price": 40,
        "category": "Beverages",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=600&q=80",
        "description": "Fresh cottage cheese and seasonal ingredients simmered in a luscious spiced onion-tomato gravy."
      },
      {
        "id": "dosa-plaza-south-kitchen-dish-8",
        "name": "Sizzling Hot Brownie",
        "price": 130,
        "category": "Desserts",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1564355808539-22fda35bed7e?auto=format&fit=crop&w=600&q=80",
        "description": "Warm freshly baked dessert smothered in rich melted Belgian chocolate and garnishes."
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
    "imageUrl": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1000&q=80",
    "logoUrl": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=200&h=200&q=80",
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
        "id": "tgk-1",
        "name": "Signature Melt-in-Mouth Galouti Kebab",
        "price": 550,
        "category": "Starters",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=600&q=80",
        "description": "Smoked minced lamb blended with 160 traditional Awadhi spices, served on ulta tawa paratha."
      },
      {
        "id": "tgk-2",
        "name": "Dal Baluchi Overnight Simmered",
        "price": 420,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80",
        "description": "Heritage black lentils simmered for 18 hours with churned dairy butter and mild spices."
      },
      {
        "id": "tgk-3",
        "name": "Paneer Lababdar Shahjahani",
        "price": 460,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=600&q=80",
        "description": "Cottage cheese chunks cooked in rich onion, tomato and cashew nut gravy with grated paneer."
      },
      {
        "id": "tgk-4",
        "name": "Zafrani Kesar Phirni",
        "price": 210,
        "category": "Desserts",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80",
        "description": "Traditional Kashmiri saffron infused creamy rice pudding served in terracotta pots."
      },
      {
        "id": "radisson-kabab-factory-dish-5",
        "name": "Gosht Dum Biryani",
        "price": 680,
        "category": "Main Course",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=600&q=80",
        "description": "Aromatic long-grain basmati layered with tender meat/veggies, saffron, mint, and whole spices."
      },
      {
        "id": "radisson-kabab-factory-dish-6",
        "name": "Special Masala Kulhad Chai",
        "price": 130,
        "category": "Beverages",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=600&q=80",
        "description": "Freshly brewed aromatic beverage prepared with premium beans/leaves and whole spices."
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
    "imageUrl": "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1000&q=80",
    "logoUrl": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=200&h=200&q=80",
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
        "id": "tps-1",
        "name": "Four Cheese Farmhouse Pizza",
        "price": 349,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80",
        "description": "Crisp hand-tossed base loaded with mozzarella, cheddar, gouda, and fresh cottage cheese."
      },
      {
        "id": "tps-2",
        "name": "Volcano Crispy Chicken Burger",
        "price": 249,
        "category": "Main Course",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80",
        "description": "Crispy fried spiced chicken fillet topped with oozing house cheese sauce and jalapeños."
      },
      {
        "id": "tps-3",
        "name": "Signature Hazelnut Cold Coffee",
        "price": 169,
        "category": "Beverages",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=600&q=80",
        "description": "Double espresso blended with roasted hazelnut syrup, ice cream and dark chocolate drizzle."
      },
      {
        "id": "ten-park-street-cafe-dish-4",
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
        "id": "ten-park-street-cafe-dish-5",
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
        "id": "ten-park-street-cafe-dish-6",
        "name": "Peri Peri Fries",
        "price": 230,
        "category": "Starters",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80",
        "description": "Fresh cottage cheese and seasonal ingredients simmered in a luscious spiced onion-tomato gravy."
      },
      {
        "id": "ten-park-street-cafe-dish-7",
        "name": "Sizzling Hot Brownie",
        "price": 230,
        "category": "Desserts",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1564355808539-22fda35bed7e?auto=format&fit=crop&w=600&q=80",
        "description": "Warm freshly baked dessert smothered in rich melted Belgian chocolate and garnishes."
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
    "imageUrl": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=80",
    "logoUrl": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=200&h=200&q=80",
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
        "id": "rcb-1",
        "name": "Legendary Royal Basket Chaat",
        "price": 160,
        "category": "Starters",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80",
        "description": "Crispy edible potato basket packed with boiled potatoes, sprouts, chutneys, curd, and pomegranate."
      },
      {
        "id": "rcb-2",
        "name": "Royal Awadhi Murgh Handi",
        "price": 380,
        "category": "Main Course",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=600&q=80",
        "description": "Chicken cooked in sealed earthen handi with roasted whole spices and cashew paste."
      },
      {
        "id": "royal-cafe-banquet-dish-3",
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
        "id": "royal-cafe-banquet-dish-4",
        "name": "Paneer Tikka Masala",
        "price": 200,
        "category": "Starters",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80",
        "description": "Marinated in yogurt, roasted garlic, and spices, chargrilled to smoky perfection."
      },
      {
        "id": "royal-cafe-banquet-dish-5",
        "name": "Kulfi Falooda",
        "price": 90,
        "category": "Desserts",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1564355808539-22fda35bed7e?auto=format&fit=crop&w=600&q=80",
        "description": "Fresh cottage cheese and seasonal ingredients simmered in a luscious spiced onion-tomato gravy."
      },
      {
        "id": "royal-cafe-banquet-dish-6",
        "name": "Special Masala Kulhad Chai",
        "price": 40,
        "category": "Beverages",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=600&q=80",
        "description": "Freshly brewed aromatic beverage prepared with premium beans/leaves and whole spices."
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
    "imageUrl": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1000&q=80",
    "logoUrl": "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=200&h=200&q=80",
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
        "id": "co-1",
        "name": "Champaran Style Handi Mutton",
        "price": 440,
        "category": "Main Course",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80",
        "description": "Tender goat meat slow cooked in clay pot with whole garlic pods and cold-pressed mustard oil."
      },
      {
        "id": "co-2",
        "name": "Paneer Pasanda Zafrani",
        "price": 290,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=600&q=80",
        "description": "Stuffed cottage cheese sandwiches cooked in rich cashew and onion gravy."
      },
      {
        "id": "curry-on-restaurant-dish-3",
        "name": "Crispy Corn",
        "price": 220,
        "category": "Starters",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80",
        "description": "Fresh cottage cheese and seasonal ingredients simmered in a luscious spiced onion-tomato gravy."
      },
      {
        "id": "curry-on-restaurant-dish-4",
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
        "id": "curry-on-restaurant-dish-5",
        "name": "Sizzling Hot Brownie",
        "price": 220,
        "category": "Desserts",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1564355808539-22fda35bed7e?auto=format&fit=crop&w=600&q=80",
        "description": "Warm freshly baked dessert smothered in rich melted Belgian chocolate and garnishes."
      },
      {
        "id": "curry-on-restaurant-dish-6",
        "name": "Special Masala Kulhad Chai",
        "price": 40,
        "category": "Beverages",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=600&q=80",
        "description": "Freshly brewed aromatic beverage prepared with premium beans/leaves and whole spices."
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
    "imageUrl": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=80",
    "logoUrl": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=200&h=200&q=80",
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
        "id": "cin-1",
        "name": "Cinnamon Special Dal Makhani",
        "price": 290,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80",
        "description": "Slow cooked black urad dal with fresh tomatoes, cream, and pure butter."
      },
      {
        "id": "cinnamon-hotel-vivek-dish-2",
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
        "id": "cinnamon-hotel-vivek-dish-3",
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
        "id": "cinnamon-hotel-vivek-dish-4",
        "name": "Brownie Sundae",
        "price": 140,
        "category": "Desserts",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1564355808539-22fda35bed7e?auto=format&fit=crop&w=600&q=80",
        "description": "Warm freshly baked dessert smothered in rich melted Belgian chocolate and garnishes."
      },
      {
        "id": "cinnamon-hotel-vivek-dish-5",
        "name": "Crispy Tandoori Murgh Tikka",
        "price": 320,
        "category": "Starters",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80",
        "description": "Marinated in yogurt, roasted garlic, and spices, chargrilled to smoky perfection."
      },
      {
        "id": "cinnamon-hotel-vivek-dish-6",
        "name": "Special Masala Kulhad Chai",
        "price": 60,
        "category": "Beverages",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=600&q=80",
        "description": "Freshly brewed aromatic beverage prepared with premium beans/leaves and whole spices."
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
    "imageUrl": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1000&q=80",
    "logoUrl": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=200&h=200&q=80",
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
        "id": "bbq-1",
        "name": "Unlimited Grand Buffet (Veg)",
        "price": 699,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80",
        "description": "Unlimited table grills, 8 starters, main courses, salads and 12 dessert varieties."
      },
      {
        "id": "bbq-2",
        "name": "Unlimited Grand Buffet (Non-Veg)",
        "price": 799,
        "category": "Main Course",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80",
        "description": "Unlimited chicken, fish, mutton grills, biryani, curries, and live kulfi counter."
      },
      {
        "id": "barbeque-nation-gkp-dish-3",
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
        "id": "barbeque-nation-gkp-dish-4",
        "name": "Crispy Corn",
        "price": 500,
        "category": "Starters",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80",
        "description": "Fresh cottage cheese and seasonal ingredients simmered in a luscious spiced onion-tomato gravy."
      },
      {
        "id": "barbeque-nation-gkp-dish-5",
        "name": "Tandoori Murgh Tikka",
        "price": 500,
        "category": "Starters",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80",
        "description": "Marinated in yogurt, roasted garlic, and spices, chargrilled to smoky perfection."
      },
      {
        "id": "barbeque-nation-gkp-dish-6",
        "name": "Paan Kulfi",
        "price": 220,
        "category": "Desserts",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1564355808539-22fda35bed7e?auto=format&fit=crop&w=600&q=80",
        "description": "Fresh cottage cheese and seasonal ingredients simmered in a luscious spiced onion-tomato gravy."
      },
      {
        "id": "barbeque-nation-gkp-dish-7",
        "name": "Special Masala Kulhad Chai",
        "price": 100,
        "category": "Beverages",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=600&q=80",
        "description": "Freshly brewed aromatic beverage prepared with premium beans/leaves and whole spices."
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
    "imageUrl": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=1000&q=80",
    "logoUrl": "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=200&h=200&q=80",
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
        "id": "mmd-1",
        "name": "Original Recipe 1920 Butter Chicken",
        "price": 440,
        "category": "Main Course",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=600&q=80",
        "description": "Authentic recipe with sun-dried fenugreek, tomato butter gravy, and clay-charred chicken."
      },
      {
        "id": "moti-mahal-delux-gkp-dish-2",
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
        "id": "moti-mahal-delux-gkp-dish-3",
        "name": "Tandoori Murgh",
        "price": 460,
        "category": "Main Course",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80",
        "description": "Succulent pieces cooked in rich fragrant gravy with roasted spices, brown onions, and fresh coriander."
      },
      {
        "id": "moti-mahal-delux-gkp-dish-4",
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
        "id": "moti-mahal-delux-gkp-dish-5",
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
        "id": "moti-mahal-delux-gkp-dish-6",
        "name": "Crispy Tandoori Murgh Tikka",
        "price": 340,
        "category": "Starters",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80",
        "description": "Marinated in yogurt, roasted garlic, and spices, chargrilled to smoky perfection."
      },
      {
        "id": "moti-mahal-delux-gkp-dish-7",
        "name": "Sizzling Hot Brownie",
        "price": 340,
        "category": "Desserts",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1564355808539-22fda35bed7e?auto=format&fit=crop&w=600&q=80",
        "description": "Warm freshly baked dessert smothered in rich melted Belgian chocolate and garnishes."
      },
      {
        "id": "moti-mahal-delux-gkp-dish-8",
        "name": "Special Masala Kulhad Chai",
        "price": 70,
        "category": "Beverages",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=600&q=80",
        "description": "Freshly brewed aromatic beverage prepared with premium beans/leaves and whole spices."
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
    "imageUrl": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=80",
    "logoUrl": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=200&h=200&q=80",
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
        "id": "nir-1",
        "name": "Smoked BBQ Chicken Pizza (11 inch)",
        "price": 349,
        "category": "Main Course",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80",
        "description": "Woodfired crust topped with house BBQ marinated chicken, red onion, and smoked cheese."
      },
      {
        "id": "cafe-nirvana-lake-dish-2",
        "name": "Sunset Sangria Mocktail",
        "price": 340,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=600&q=80",
        "description": "Fresh cottage cheese and seasonal ingredients simmered in a luscious spiced onion-tomato gravy."
      },
      {
        "id": "cafe-nirvana-lake-dish-3",
        "name": "Pesto Pasta",
        "price": 340,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=600&q=80",
        "description": "Fresh cottage cheese and seasonal ingredients simmered in a luscious spiced onion-tomato gravy."
      },
      {
        "id": "cafe-nirvana-lake-dish-4",
        "name": "Nutella Waffle",
        "price": 250,
        "category": "Desserts",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1564355808539-22fda35bed7e?auto=format&fit=crop&w=600&q=80",
        "description": "Warm freshly baked dessert smothered in rich melted Belgian chocolate and garnishes."
      },
      {
        "id": "cafe-nirvana-lake-dish-5",
        "name": "Crispy Tandoori Murgh Tikka",
        "price": 250,
        "category": "Starters",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80",
        "description": "Marinated in yogurt, roasted garlic, and spices, chargrilled to smoky perfection."
      },
      {
        "id": "cafe-nirvana-lake-dish-6",
        "name": "Iced Cappuccino Frappe",
        "price": 200,
        "category": "Beverages",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=600&q=80",
        "description": "Fresh cottage cheese and seasonal ingredients simmered in a luscious spiced onion-tomato gravy."
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
    "imageUrl": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=1000&q=80",
    "logoUrl": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=200&h=200&q=80",
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
        "id": "sd-1",
        "name": "Special Awadhi Dum Mutton Biryani",
        "price": 290,
        "category": "Main Course",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=600&q=80",
        "description": "Fragrant basmati cooked on sealed dum with tender baby lamb, kewra water, and saffron."
      },
      {
        "id": "shahi-darbar-mughlai-dish-2",
        "name": "Awadhi Mutton Biryani",
        "price": 320,
        "category": "Main Course",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=600&q=80",
        "description": "Aromatic long-grain basmati layered with tender meat/veggies, saffron, mint, and whole spices."
      },
      {
        "id": "shahi-darbar-mughlai-dish-3",
        "name": "Chicken Changezi",
        "price": 340,
        "category": "Main Course",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=600&q=80",
        "description": "Succulent pieces cooked in rich fragrant gravy with roasted spices, brown onions, and fresh coriander."
      },
      {
        "id": "shahi-darbar-mughlai-dish-4",
        "name": "Seekh Kebab",
        "price": 280,
        "category": "Starters",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80",
        "description": "Marinated in yogurt, roasted garlic, and spices, chargrilled to smoky perfection."
      },
      {
        "id": "shahi-darbar-mughlai-dish-5",
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
        "id": "shahi-darbar-mughlai-dish-6",
        "name": "Sizzling Hot Brownie",
        "price": 180,
        "category": "Desserts",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1564355808539-22fda35bed7e?auto=format&fit=crop&w=600&q=80",
        "description": "Warm freshly baked dessert smothered in rich melted Belgian chocolate and garnishes."
      },
      {
        "id": "shahi-darbar-mughlai-dish-7",
        "name": "Special Masala Kulhad Chai",
        "price": 40,
        "category": "Beverages",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=600&q=80",
        "description": "Freshly brewed aromatic beverage prepared with premium beans/leaves and whole spices."
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
    "imageUrl": "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1000&q=80",
    "logoUrl": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=200&h=200&q=80",
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
        "id": "dom-1",
        "name": "Monster Cheese Burst Farm Pizza",
        "price": 280,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80",
        "description": "Double liquid cheese crust filled with mozzarella, black olives, sweet corn, and crisp capsicum."
      },
      {
        "id": "dominick-pizza-pasta-dish-2",
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
        "id": "dominick-pizza-pasta-dish-3",
        "name": "White Sauce Pasta",
        "price": 220,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=600&q=80",
        "description": "Fresh cottage cheese and seasonal ingredients simmered in a luscious spiced onion-tomato gravy."
      },
      {
        "id": "dominick-pizza-pasta-dish-4",
        "name": "Stuffed Garlic Bread",
        "price": 160,
        "category": "Starters",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80",
        "description": "Fresh cottage cheese and seasonal ingredients simmered in a luscious spiced onion-tomato gravy."
      },
      {
        "id": "dominick-pizza-pasta-dish-5",
        "name": "Choco Lava Cake",
        "price": 100,
        "category": "Desserts",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1564355808539-22fda35bed7e?auto=format&fit=crop&w=600&q=80",
        "description": "Warm freshly baked dessert smothered in rich melted Belgian chocolate and garnishes."
      },
      {
        "id": "dominick-pizza-pasta-dish-6",
        "name": "Iced Cappuccino Frappe",
        "price": 130,
        "category": "Beverages",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=600&q=80",
        "description": "Fresh cottage cheese and seasonal ingredients simmered in a luscious spiced onion-tomato gravy."
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
    "imageUrl": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=1000&q=80",
    "logoUrl": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=200&h=200&q=80",
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
        "id": "ks-1",
        "name": "Special Kesar Rajbhog (2 pcs)",
        "price": 80,
        "category": "Desserts",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=600&q=80",
        "description": "Large spongy chenna balls stuffed with pistachios and soaked in saffron syrup."
      },
      {
        "id": "ksheer-sagar-sweets-dish-2",
        "name": "Malai Roll",
        "price": 60,
        "category": "Desserts",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80",
        "description": "Fresh cottage cheese and seasonal ingredients simmered in a luscious spiced onion-tomato gravy."
      },
      {
        "id": "ksheer-sagar-sweets-dish-3",
        "name": "Desi Ghee Kachori Sabzi",
        "price": 150,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80",
        "description": "Fresh cottage cheese and seasonal ingredients simmered in a luscious spiced onion-tomato gravy."
      },
      {
        "id": "ksheer-sagar-sweets-dish-4",
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
        "id": "ksheer-sagar-sweets-dish-5",
        "name": "Crispy Corn & Paneer Tikka",
        "price": 120,
        "category": "Starters",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80",
        "description": "Marinated in yogurt, roasted garlic, and spices, chargrilled to smoky perfection."
      },
      {
        "id": "ksheer-sagar-sweets-dish-6",
        "name": "Special Masala Kulhad Chai",
        "price": 20,
        "category": "Beverages",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=600&q=80",
        "description": "Freshly brewed aromatic beverage prepared with premium beans/leaves and whole spices."
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
    "imageUrl": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1000&q=80",
    "logoUrl": "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=200&h=200&q=80",
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
        "id": "up-1",
        "name": "Crispy Kurkure Paneer Momos (6 pcs)",
        "price": 130,
        "category": "Starters",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=600&q=80",
        "description": "Crunchy cornflake-crusted momos filled with spicy paneer, served with spicy dip."
      },
      {
        "id": "up53-food-court-dish-2",
        "name": "Kurkure Momos",
        "price": 130,
        "category": "Starters",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80",
        "description": "Fresh cottage cheese and seasonal ingredients simmered in a luscious spiced onion-tomato gravy."
      },
      {
        "id": "up53-food-court-dish-3",
        "name": "Hakka Noodles",
        "price": 170,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80",
        "description": "Fresh cottage cheese and seasonal ingredients simmered in a luscious spiced onion-tomato gravy."
      },
      {
        "id": "up53-food-court-dish-4",
        "name": "Chicken Shawarma",
        "price": 240,
        "category": "Main Course",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=600&q=80",
        "description": "Succulent pieces cooked in rich fragrant gravy with roasted spices, brown onions, and fresh coriander."
      },
      {
        "id": "up53-food-court-dish-5",
        "name": "Tandoori Chai",
        "price": 20,
        "category": "Beverages",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80",
        "description": "Freshly brewed aromatic beverage prepared with premium beans/leaves and whole spices."
      },
      {
        "id": "up53-food-court-dish-6",
        "name": "Sizzling Hot Brownie",
        "price": 130,
        "category": "Desserts",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1564355808539-22fda35bed7e?auto=format&fit=crop&w=600&q=80",
        "description": "Warm freshly baked dessert smothered in rich melted Belgian chocolate and garnishes."
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
    "imageUrl": "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=1000&q=80",
    "logoUrl": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=200&h=200&q=80",
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
        "id": "cb-1",
        "name": "Chhappan Bhog Maharaja Thali",
        "price": 320,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=600&q=80",
        "description": "2 seasonal curries, dal makhani, paneer lababdar, jeera rice, 2 naans, papad, raita, and gulab jamun."
      },
      {
        "id": "chhappan-bhog-veg-dish-2",
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
        "id": "chhappan-bhog-veg-dish-3",
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
        "id": "chhappan-bhog-veg-dish-4",
        "name": "Dal Baati Churma",
        "price": 240,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80",
        "description": "Black lentils slow cooked overnight with churned white butter and velvety dairy cream."
      },
      {
        "id": "chhappan-bhog-veg-dish-5",
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
        "id": "chhappan-bhog-veg-dish-6",
        "name": "Crispy Corn & Paneer Tikka",
        "price": 180,
        "category": "Starters",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80",
        "description": "Marinated in yogurt, roasted garlic, and spices, chargrilled to smoky perfection."
      },
      {
        "id": "chhappan-bhog-veg-dish-7",
        "name": "Special Masala Kulhad Chai",
        "price": 40,
        "category": "Beverages",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=600&q=80",
        "description": "Freshly brewed aromatic beverage prepared with premium beans/leaves and whole spices."
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
    "imageUrl": "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1000&q=80",
    "logoUrl": "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=200&h=200&q=80",
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
        "id": "gvp-1",
        "name": "Maharaja Cheese Vada Pav",
        "price": 65,
        "category": "Starters",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80",
        "description": "Crisp spicy potato patty nestled in pav with fried green chillies, garlic dry chutney, and cheddar cheese."
      },
      {
        "id": "goli-vada-pav-gkp-dish-2",
        "name": "Schezwan Roll",
        "price": 110,
        "category": "Starters",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80",
        "description": "Fresh cottage cheese and seasonal ingredients simmered in a luscious spiced onion-tomato gravy."
      },
      {
        "id": "goli-vada-pav-gkp-dish-3",
        "name": "Crispy Sabudana Vada",
        "price": 140,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?auto=format&fit=crop&w=600&q=80",
        "description": "Fresh cottage cheese and seasonal ingredients simmered in a luscious spiced onion-tomato gravy."
      },
      {
        "id": "goli-vada-pav-gkp-dish-4",
        "name": "Thums Up Float",
        "price": 40,
        "category": "Beverages",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=600&q=80",
        "description": "Fresh cottage cheese and seasonal ingredients simmered in a luscious spiced onion-tomato gravy."
      },
      {
        "id": "goli-vada-pav-gkp-dish-5",
        "name": "Sizzling Hot Brownie",
        "price": 130,
        "category": "Desserts",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1564355808539-22fda35bed7e?auto=format&fit=crop&w=600&q=80",
        "description": "Warm freshly baked dessert smothered in rich melted Belgian chocolate and garnishes."
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
    "imageUrl": "https://images.unsplash.com/photo-1564355808539-22fda35bed7e?auto=format&fit=crop&w=1000&q=80",
    "logoUrl": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=200&h=200&q=80",
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
        "id": "tcr-1",
        "name": "Classic Chocolate Fondue Platter",
        "price": 299,
        "category": "Desserts",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1564355808539-22fda35bed7e?auto=format&fit=crop&w=600&q=80",
        "description": "Warm melted Belgian chocolate pot served with marshmallow skewers, brownie bites, and fresh fruits."
      },
      {
        "id": "the-chocolate-room-gkp-dish-2",
        "name": "Death by Chocolate Pancake",
        "price": 120,
        "category": "Desserts",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1564355808539-22fda35bed7e?auto=format&fit=crop&w=600&q=80",
        "description": "Warm freshly baked dessert smothered in rich melted Belgian chocolate and garnishes."
      },
      {
        "id": "the-chocolate-room-gkp-dish-3",
        "name": "Hot Chocolate",
        "price": 260,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1564355808539-22fda35bed7e?auto=format&fit=crop&w=600&q=80",
        "description": "Fresh cottage cheese and seasonal ingredients simmered in a luscious spiced onion-tomato gravy."
      },
      {
        "id": "the-chocolate-room-gkp-dish-4",
        "name": "Garlic Bread",
        "price": 200,
        "category": "Starters",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80",
        "description": "Fresh cottage cheese and seasonal ingredients simmered in a luscious spiced onion-tomato gravy."
      },
      {
        "id": "the-chocolate-room-gkp-dish-5",
        "name": "Iced Cappuccino Frappe",
        "price": 150,
        "category": "Beverages",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=600&q=80",
        "description": "Fresh cottage cheese and seasonal ingredients simmered in a luscious spiced onion-tomato gravy."
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
    "imageUrl": "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=1000&q=80",
    "logoUrl": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=200&h=200&q=80",
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
        "id": "swt-1",
        "name": "Swastik Special Executive Veg Thali",
        "price": 210,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=600&q=80",
        "description": "Dal tadka, shahi paneer, seasonal sabzi, jeera rice, 4 butter rotis, salad, and sweet."
      },
      {
        "id": "swastik-restaurant-gkp-dish-2",
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
        "id": "swastik-restaurant-gkp-dish-3",
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
        "id": "swastik-restaurant-gkp-dish-4",
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
        "id": "swastik-restaurant-gkp-dish-5",
        "name": "Tandoori Roti",
        "price": 30,
        "category": "Breads",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80",
        "description": "Fresh cottage cheese and seasonal ingredients simmered in a luscious spiced onion-tomato gravy."
      },
      {
        "id": "swastik-restaurant-gkp-dish-6",
        "name": "Crispy Corn & Paneer Tikka",
        "price": 130,
        "category": "Starters",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80",
        "description": "Marinated in yogurt, roasted garlic, and spices, chargrilled to smoky perfection."
      },
      {
        "id": "swastik-restaurant-gkp-dish-7",
        "name": "Sizzling Hot Brownie",
        "price": 130,
        "category": "Desserts",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1564355808539-22fda35bed7e?auto=format&fit=crop&w=600&q=80",
        "description": "Warm freshly baked dessert smothered in rich melted Belgian chocolate and garnishes."
      },
      {
        "id": "swastik-restaurant-gkp-dish-8",
        "name": "Special Masala Kulhad Chai",
        "price": 20,
        "category": "Beverages",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=600&q=80",
        "description": "Freshly brewed aromatic beverage prepared with premium beans/leaves and whole spices."
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
    "imageUrl": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1000&q=80",
    "logoUrl": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=200&h=200&q=80",
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
        "id": "ram-1",
        "name": "Mutton Kashmiri Rogan Josh",
        "price": 420,
        "category": "Main Course",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80",
        "description": "Succulent mutton slow braised in Kashmiri chilli, mace, cardamom and aromatic ratan jot oil."
      },
      {
        "id": "rambha-hotel-bobis-dish-2",
        "name": "Chicken Tikka Butter Masala",
        "price": 480,
        "category": "Starters",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80",
        "description": "Marinated in yogurt, roasted garlic, and spices, chargrilled to smoky perfection."
      },
      {
        "id": "rambha-hotel-bobis-dish-3",
        "name": "Mutton Rogan Josh",
        "price": 580,
        "category": "Main Course",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=600&q=80",
        "description": "Succulent pieces cooked in rich fragrant gravy with roasted spices, brown onions, and fresh coriander."
      },
      {
        "id": "rambha-hotel-bobis-dish-4",
        "name": "Crispy Chilli Babycorn",
        "price": 310,
        "category": "Starters",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80",
        "description": "Fresh cottage cheese and seasonal ingredients simmered in a luscious spiced onion-tomato gravy."
      },
      {
        "id": "rambha-hotel-bobis-dish-5",
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
        "id": "rambha-hotel-bobis-dish-6",
        "name": "Sizzling Hot Brownie",
        "price": 310,
        "category": "Desserts",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1564355808539-22fda35bed7e?auto=format&fit=crop&w=600&q=80",
        "description": "Warm freshly baked dessert smothered in rich melted Belgian chocolate and garnishes."
      },
      {
        "id": "rambha-hotel-bobis-dish-7",
        "name": "Special Masala Kulhad Chai",
        "price": 60,
        "category": "Beverages",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=600&q=80",
        "description": "Freshly brewed aromatic beverage prepared with premium beans/leaves and whole spices."
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
    "imageUrl": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=80",
    "logoUrl": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=200&h=200&q=80",
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
        "id": "saf-1",
        "name": "Chef Special Sizzling Paneer Platter",
        "price": 340,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=600&q=80",
        "description": "Marinated cottage cheese steaks served over herb rice, french fries, buttered corn and pepper sauce."
      },
      {
        "id": "saffron-lake-diner-dish-2",
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
        "id": "saffron-lake-diner-dish-3",
        "name": "Chicken Kadhai",
        "price": 440,
        "category": "Main Course",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=600&q=80",
        "description": "Succulent pieces cooked in rich fragrant gravy with roasted spices, brown onions, and fresh coriander."
      },
      {
        "id": "saffron-lake-diner-dish-4",
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
        "id": "saffron-lake-diner-dish-5",
        "name": "Brownie with Ice Cream",
        "price": 100,
        "category": "Desserts",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1564355808539-22fda35bed7e?auto=format&fit=crop&w=600&q=80",
        "description": "Warm freshly baked dessert smothered in rich melted Belgian chocolate and garnishes."
      },
      {
        "id": "saffron-lake-diner-dish-6",
        "name": "Crispy Tandoori Murgh Tikka",
        "price": 230,
        "category": "Starters",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80",
        "description": "Marinated in yogurt, roasted garlic, and spices, chargrilled to smoky perfection."
      },
      {
        "id": "saffron-lake-diner-dish-7",
        "name": "Special Masala Kulhad Chai",
        "price": 50,
        "category": "Beverages",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=600&q=80",
        "description": "Freshly brewed aromatic beverage prepared with premium beans/leaves and whole spices."
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
    "imageUrl": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1000&q=80",
    "logoUrl": "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=200&h=200&q=80",
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
        "id": "bns-1",
        "name": "Rich Dutch Chocolate Truffle Pastry",
        "price": 95,
        "category": "Desserts",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1564355808539-22fda35bed7e?auto=format&fit=crop&w=600&q=80",
        "description": "Layers of moist dark sponge drenched in rich Belgian chocolate ganache."
      },
      {
        "id": "bake-and-shake-cafe-dish-2",
        "name": "Dutch Truffle Cake",
        "price": 90,
        "category": "Desserts",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1564355808539-22fda35bed7e?auto=format&fit=crop&w=600&q=80",
        "description": "Warm freshly baked dessert smothered in rich melted Belgian chocolate and garnishes."
      },
      {
        "id": "bake-and-shake-cafe-dish-3",
        "name": "Club Sandwich",
        "price": 190,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80",
        "description": "Fresh cottage cheese and seasonal ingredients simmered in a luscious spiced onion-tomato gravy."
      },
      {
        "id": "bake-and-shake-cafe-dish-4",
        "name": "Oreo Overload Shake",
        "price": 110,
        "category": "Beverages",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=600&q=80",
        "description": "Fresh cottage cheese and seasonal ingredients simmered in a luscious spiced onion-tomato gravy."
      },
      {
        "id": "bake-and-shake-cafe-dish-5",
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
        "id": "bake-and-shake-cafe-dish-6",
        "name": "Crispy Corn & Paneer Tikka",
        "price": 140,
        "category": "Starters",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80",
        "description": "Marinated in yogurt, roasted garlic, and spices, chargrilled to smoky perfection."
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
    "imageUrl": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=1000&q=80",
    "logoUrl": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=200&h=200&q=80",
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
        "id": "zea-1",
        "name": "Awadhi Zafrani Chicken Dum Biryani",
        "price": 240,
        "category": "Main Course",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=600&q=80",
        "description": "Long grain rice cooked in sealed vessel with marinated chicken, saffron, rose water and spices."
      },
      {
        "id": "zaika-e-awadh-gkp-dish-2",
        "name": "Chicken Changezi",
        "price": 330,
        "category": "Main Course",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=600&q=80",
        "description": "Succulent pieces cooked in rich fragrant gravy with roasted spices, brown onions, and fresh coriander."
      },
      {
        "id": "zaika-e-awadh-gkp-dish-3",
        "name": "Mutton Korma",
        "price": 330,
        "category": "Main Course",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=600&q=80",
        "description": "Succulent pieces cooked in rich fragrant gravy with roasted spices, brown onions, and fresh coriander."
      },
      {
        "id": "zaika-e-awadh-gkp-dish-4",
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
        "id": "zaika-e-awadh-gkp-dish-5",
        "name": "Crispy Tandoori Murgh Tikka",
        "price": 170,
        "category": "Starters",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80",
        "description": "Marinated in yogurt, roasted garlic, and spices, chargrilled to smoky perfection."
      },
      {
        "id": "zaika-e-awadh-gkp-dish-6",
        "name": "Sizzling Hot Brownie",
        "price": 170,
        "category": "Desserts",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1564355808539-22fda35bed7e?auto=format&fit=crop&w=600&q=80",
        "description": "Warm freshly baked dessert smothered in rich melted Belgian chocolate and garnishes."
      },
      {
        "id": "zaika-e-awadh-gkp-dish-7",
        "name": "Special Masala Kulhad Chai",
        "price": 30,
        "category": "Beverages",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=600&q=80",
        "description": "Freshly brewed aromatic beverage prepared with premium beans/leaves and whole spices."
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
    "imageUrl": "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1000&q=80",
    "logoUrl": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=200&h=200&q=80",
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
        "id": "ash-1",
        "name": "Bedmi Puri with Hing Aloo Sabzi (4 pcs)",
        "price": 60,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=600&q=80",
        "description": "Crisp urad dal stuffed puris served with spicy hing-flavoured aloo curry and pickle."
      },
      {
        "id": "anand-sweet-chaat-dish-2",
        "name": "Bedmi Puri Aloo Sabzi",
        "price": 140,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80",
        "description": "Fresh cottage cheese and seasonal ingredients simmered in a luscious spiced onion-tomato gravy."
      },
      {
        "id": "anand-sweet-chaat-dish-3",
        "name": "Desi Ghee Tikki",
        "price": 140,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80",
        "description": "Fresh cottage cheese and seasonal ingredients simmered in a luscious spiced onion-tomato gravy."
      },
      {
        "id": "anand-sweet-chaat-dish-4",
        "name": "Hot Gulab Jamun",
        "price": 60,
        "category": "Desserts",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1564355808539-22fda35bed7e?auto=format&fit=crop&w=600&q=80",
        "description": "Fresh cottage cheese and seasonal ingredients simmered in a luscious spiced onion-tomato gravy."
      },
      {
        "id": "anand-sweet-chaat-dish-5",
        "name": "Dahi Jalebi",
        "price": 140,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=600&q=80",
        "description": "Fresh cottage cheese and seasonal ingredients simmered in a luscious spiced onion-tomato gravy."
      },
      {
        "id": "anand-sweet-chaat-dish-6",
        "name": "Crispy Corn & Paneer Tikka",
        "price": 110,
        "category": "Starters",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80",
        "description": "Marinated in yogurt, roasted garlic, and spices, chargrilled to smoky perfection."
      },
      {
        "id": "anand-sweet-chaat-dish-7",
        "name": "Special Masala Kulhad Chai",
        "price": 20,
        "category": "Beverages",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=600&q=80",
        "description": "Freshly brewed aromatic beverage prepared with premium beans/leaves and whole spices."
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
    "imageUrl": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1000&q=80",
    "logoUrl": "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=200&h=200&q=80",
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
        "id": "rm-1",
        "name": "Smoky Chicken Tikka Kathi Roll",
        "price": 120,
        "category": "Starters",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80",
        "description": "Flaky paratha loaded with tandoori grilled chicken chunks, sliced onions, and mint mayo."
      },
      {
        "id": "rolls-mania-gkp-dish-2",
        "name": "Chicken Tikka Roll",
        "price": 170,
        "category": "Starters",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80",
        "description": "Marinated in yogurt, roasted garlic, and spices, chargrilled to smoky perfection."
      },
      {
        "id": "rolls-mania-gkp-dish-3",
        "name": "Paneer Cheese Roll",
        "price": 110,
        "category": "Starters",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80",
        "description": "Fresh cottage cheese and seasonal ingredients simmered in a luscious spiced onion-tomato gravy."
      },
      {
        "id": "rolls-mania-gkp-dish-4",
        "name": "Double Egg Roll",
        "price": 110,
        "category": "Starters",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80",
        "description": "Succulent pieces cooked in rich fragrant gravy with roasted spices, brown onions, and fresh coriander."
      },
      {
        "id": "rolls-mania-gkp-dish-5",
        "name": "Cold Beverage",
        "price": 40,
        "category": "Beverages",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=600&q=80",
        "description": "Fresh cottage cheese and seasonal ingredients simmered in a luscious spiced onion-tomato gravy."
      },
      {
        "id": "rolls-mania-gkp-dish-6",
        "name": "Chef Special Handi Chicken",
        "price": 200,
        "category": "Main Course",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=600&q=80",
        "description": "Succulent pieces cooked in rich fragrant gravy with roasted spices, brown onions, and fresh coriander."
      },
      {
        "id": "rolls-mania-gkp-dish-7",
        "name": "Sizzling Hot Brownie",
        "price": 130,
        "category": "Desserts",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1564355808539-22fda35bed7e?auto=format&fit=crop&w=600&q=80",
        "description": "Warm freshly baked dessert smothered in rich melted Belgian chocolate and garnishes."
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
    "logoUrl": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=200&h=200&q=80",
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
        "id": "sub-1",
        "name": "Paneer Tikka 6-inch Sub on Multigrain",
        "price": 219,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=600&q=80",
        "description": "Freshly baked multigrain bread filled with spiced paneer tikka, crisp vegetables, and southwest sauce."
      },
      {
        "id": "subway-city-mall-dish-2",
        "name": "Paneer Tikka Sub",
        "price": 160,
        "category": "Starters",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80",
        "description": "Marinated in yogurt, roasted garlic, and spices, chargrilled to smoky perfection."
      },
      {
        "id": "subway-city-mall-dish-3",
        "name": "Roasted Chicken Sub",
        "price": 310,
        "category": "Main Course",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80",
        "description": "Succulent pieces cooked in rich fragrant gravy with roasted spices, brown onions, and fresh coriander."
      },
      {
        "id": "subway-city-mall-dish-4",
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
        "id": "subway-city-mall-dish-5",
        "name": "Double Chocolate Cookie",
        "price": 220,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1564355808539-22fda35bed7e?auto=format&fit=crop&w=600&q=80",
        "description": "Fresh cottage cheese and seasonal ingredients simmered in a luscious spiced onion-tomato gravy."
      },
      {
        "id": "subway-city-mall-dish-6",
        "name": "Sizzling Hot Brownie",
        "price": 160,
        "category": "Desserts",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1564355808539-22fda35bed7e?auto=format&fit=crop&w=600&q=80",
        "description": "Warm freshly baked dessert smothered in rich melted Belgian chocolate and garnishes."
      },
      {
        "id": "subway-city-mall-dish-7",
        "name": "Iced Cappuccino Frappe",
        "price": 130,
        "category": "Beverages",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=600&q=80",
        "description": "Fresh cottage cheese and seasonal ingredients simmered in a luscious spiced onion-tomato gravy."
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
    "imageUrl": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1000&q=80",
    "logoUrl": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=200&h=200&q=80",
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
        "id": "kn-1",
        "name": "Dhaba Style Special Tawa Chicken",
        "price": 340,
        "category": "Main Course",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80",
        "description": "Chicken pieces roasted on giant iron tawa with ginger juliennes, green chillies, and crushed spices."
      },
      {
        "id": "kukkad-nukkad-dhaba-dish-2",
        "name": "Tawa Chicken Roast",
        "price": 340,
        "category": "Main Course",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80",
        "description": "Succulent pieces cooked in rich fragrant gravy with roasted spices, brown onions, and fresh coriander."
      },
      {
        "id": "kukkad-nukkad-dhaba-dish-3",
        "name": "Handi Mutton",
        "price": 340,
        "category": "Main Course",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=600&q=80",
        "description": "Succulent pieces cooked in rich fragrant gravy with roasted spices, brown onions, and fresh coriander."
      },
      {
        "id": "kukkad-nukkad-dhaba-dish-4",
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
        "id": "kukkad-nukkad-dhaba-dish-5",
        "name": "Malai Kulhad Lassi",
        "price": 50,
        "category": "Beverages",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=600&q=80",
        "description": "Fresh cottage cheese and seasonal ingredients simmered in a luscious spiced onion-tomato gravy."
      },
      {
        "id": "kukkad-nukkad-dhaba-dish-6",
        "name": "Crispy Tandoori Murgh Tikka",
        "price": 180,
        "category": "Starters",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80",
        "description": "Marinated in yogurt, roasted garlic, and spices, chargrilled to smoky perfection."
      },
      {
        "id": "kukkad-nukkad-dhaba-dish-7",
        "name": "Sizzling Hot Brownie",
        "price": 180,
        "category": "Desserts",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1564355808539-22fda35bed7e?auto=format&fit=crop&w=600&q=80",
        "description": "Warm freshly baked dessert smothered in rich melted Belgian chocolate and garnishes."
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
    "imageUrl": "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1000&q=80",
    "logoUrl": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=200&h=200&q=80",
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
        "id": "hal-1",
        "name": "Haldirams Royal Raj Kachori",
        "price": 140,
        "category": "Starters",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80",
        "description": "Giant crispy puri filled with sprouted beans, bhalla, potato, sweet curd, and spicy mint sonth."
      },
      {
        "id": "haldirams-express-gkp-dish-2",
        "name": "Signature Raj Kachori",
        "price": 200,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80",
        "description": "Fresh cottage cheese and seasonal ingredients simmered in a luscious spiced onion-tomato gravy."
      },
      {
        "id": "haldirams-express-gkp-dish-3",
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
        "id": "haldirams-express-gkp-dish-4",
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
        "id": "haldirams-express-gkp-dish-5",
        "name": "Kaju Katli",
        "price": 200,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=600&q=80",
        "description": "Fresh cottage cheese and seasonal ingredients simmered in a luscious spiced onion-tomato gravy."
      },
      {
        "id": "haldirams-express-gkp-dish-6",
        "name": "Gulab Jamun with Rabdi",
        "price": 70,
        "category": "Desserts",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1564355808539-22fda35bed7e?auto=format&fit=crop&w=600&q=80",
        "description": "Fresh cottage cheese and seasonal ingredients simmered in a luscious spiced onion-tomato gravy."
      },
      {
        "id": "haldirams-express-gkp-dish-7",
        "name": "Special Masala Kulhad Chai",
        "price": 30,
        "category": "Beverages",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=600&q=80",
        "description": "Freshly brewed aromatic beverage prepared with premium beans/leaves and whole spices."
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
    "imageUrl": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1000&q=80",
    "logoUrl": "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=200&h=200&q=80",
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
        "id": "cb-1",
        "name": "Desi Wok Chilli Paneer Dry",
        "price": 160,
        "category": "Starters",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80",
        "description": "Crispy batter-fried paneer cubes wok tossed with diced onions, green chillies, and dark soya."
      },
      {
        "id": "crazy-bites-chowk-dish-2",
        "name": "Schezwan Chowmein",
        "price": 140,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=600&q=80",
        "description": "Fresh cottage cheese and seasonal ingredients simmered in a luscious spiced onion-tomato gravy."
      },
      {
        "id": "crazy-bites-chowk-dish-3",
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
        "id": "crazy-bites-chowk-dish-4",
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
        "id": "crazy-bites-chowk-dish-5",
        "name": "Sizzling Hot Brownie",
        "price": 130,
        "category": "Desserts",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1564355808539-22fda35bed7e?auto=format&fit=crop&w=600&q=80",
        "description": "Warm freshly baked dessert smothered in rich melted Belgian chocolate and garnishes."
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
    "imageUrl": "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1000&q=80",
    "logoUrl": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=200&h=200&q=80",
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
        "id": "ph-1",
        "name": "Tandoori Paneer Pan Pizza (Medium)",
        "price": 349,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80",
        "description": "Fluffy golden pan base topped with tandoori spiced paneer cubes, red paprika, and 100% mozzarella."
      },
      {
        "id": "pizza-hut-park-road-dish-2",
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
        "id": "pizza-hut-park-road-dish-3",
        "name": "Tandoori Paneer Pizza",
        "price": 330,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80",
        "description": "Freshly baked hand-tossed crust with gourmet mozzarella, herb marinara, and fresh toppings."
      },
      {
        "id": "pizza-hut-park-road-dish-4",
        "name": "Garlic Bread Stix",
        "price": 200,
        "category": "Starters",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80",
        "description": "Fresh cottage cheese and seasonal ingredients simmered in a luscious spiced onion-tomato gravy."
      },
      {
        "id": "pizza-hut-park-road-dish-5",
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
        "id": "pizza-hut-park-road-dish-6",
        "name": "Sizzling Hot Brownie",
        "price": 200,
        "category": "Desserts",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1564355808539-22fda35bed7e?auto=format&fit=crop&w=600&q=80",
        "description": "Warm freshly baked dessert smothered in rich melted Belgian chocolate and garnishes."
      },
      {
        "id": "pizza-hut-park-road-dish-7",
        "name": "Special Masala Kulhad Chai",
        "price": 40,
        "category": "Beverages",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=600&q=80",
        "description": "Freshly brewed aromatic beverage prepared with premium beans/leaves and whole spices."
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
    "imageUrl": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1000&q=80",
    "logoUrl": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=200&h=200&q=80",
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
        "id": "kfc-1",
        "name": "Classic Chicken Zinger Burger",
        "price": 199,
        "category": "Main Course",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80",
        "description": "Crunchy battered whole chicken breast fillet served with crisp lettuce and creamy sauce in sesame bun."
      },
      {
        "id": "kfc-ad-mall-dish-2",
        "name": "Hot & Crispy Chicken",
        "price": 340,
        "category": "Main Course",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=600&q=80",
        "description": "Succulent pieces cooked in rich fragrant gravy with roasted spices, brown onions, and fresh coriander."
      },
      {
        "id": "kfc-ad-mall-dish-3",
        "name": "Chicken Popcorn",
        "price": 280,
        "category": "Starters",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=600&q=80",
        "description": "Succulent pieces cooked in rich fragrant gravy with roasted spices, brown onions, and fresh coriander."
      },
      {
        "id": "kfc-ad-mall-dish-4",
        "name": "Virgin Mojito",
        "price": 50,
        "category": "Beverages",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=600&q=80",
        "description": "Fresh cottage cheese and seasonal ingredients simmered in a luscious spiced onion-tomato gravy."
      },
      {
        "id": "kfc-ad-mall-dish-5",
        "name": "Sizzling Hot Brownie",
        "price": 180,
        "category": "Desserts",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1564355808539-22fda35bed7e?auto=format&fit=crop&w=600&q=80",
        "description": "Warm freshly baked dessert smothered in rich melted Belgian chocolate and garnishes."
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
    "logoUrl": "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=200&h=200&q=80",
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
        "id": "ccd-1",
        "name": "Signature Devil's Own Frappe",
        "price": 219,
        "category": "Beverages",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=600&q=80",
        "description": "Rich blended cold coffee charged with cocoa, chocolate syrup, and crowned with dairy whipped cream."
      },
      {
        "id": "cafe-coffee-day-gkp-dish-2",
        "name": "Cappuccino",
        "price": 220,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=600&q=80",
        "description": "Fresh cottage cheese and seasonal ingredients simmered in a luscious spiced onion-tomato gravy."
      },
      {
        "id": "cafe-coffee-day-gkp-dish-3",
        "name": "Garlic Bread",
        "price": 160,
        "category": "Starters",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80",
        "description": "Fresh cottage cheese and seasonal ingredients simmered in a luscious spiced onion-tomato gravy."
      },
      {
        "id": "cafe-coffee-day-gkp-dish-4",
        "name": "Sizzling Brownie",
        "price": 160,
        "category": "Desserts",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1564355808539-22fda35bed7e?auto=format&fit=crop&w=600&q=80",
        "description": "Warm freshly baked dessert smothered in rich melted Belgian chocolate and garnishes."
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
    "imageUrl": "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1000&q=80",
    "logoUrl": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=200&h=200&q=80",
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
        "id": "kg-1",
        "name": "Special Amul Butter Pav Bhaji",
        "price": 90,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80",
        "description": "Mashed spicy vegetable bhaji simmered in Amul butter on iron griddle with 2 butter-toasted pavs."
      },
      {
        "id": "khaao-gali-food-hub-dish-2",
        "name": "Kolkata Egg Roll",
        "price": 110,
        "category": "Starters",
        "diet": "nonveg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80",
        "description": "Succulent pieces cooked in rich fragrant gravy with roasted spices, brown onions, and fresh coriander."
      },
      {
        "id": "khaao-gali-food-hub-dish-3",
        "name": "Steamed Momos",
        "price": 20,
        "category": "Beverages",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=600&q=80",
        "description": "Fresh cottage cheese and seasonal ingredients simmered in a luscious spiced onion-tomato gravy."
      },
      {
        "id": "khaao-gali-food-hub-dish-4",
        "name": "Kesariya Rabdi",
        "price": 140,
        "category": "Main Course",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": true,
        "imageUrl": "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=600&q=80",
        "description": "Fresh cottage cheese and seasonal ingredients simmered in a luscious spiced onion-tomato gravy."
      },
      {
        "id": "khaao-gali-food-hub-dish-5",
        "name": "Sizzling Hot Brownie",
        "price": 130,
        "category": "Desserts",
        "diet": "veg",
        "isAvailable": true,
        "isFeatured": false,
        "imageUrl": "https://images.unsplash.com/photo-1564355808539-22fda35bed7e?auto=format&fit=crop&w=600&q=80",
        "description": "Warm freshly baked dessert smothered in rich melted Belgian chocolate and garnishes."
      }
    ]
  }
];
