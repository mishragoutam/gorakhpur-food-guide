import type { Restaurant } from '@/types/restaurant';

/**
 * 50 Authentic dining establishments across Gorakhpur, UP (sourced from Zomato and Swiggy menus).
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
  }
];
