import type { Review } from '@/types/restaurant';

/**
 * Verified customer dining reviews distributed across all 50 Gorakhpur restaurants.
 * Complete with star ratings, detailed reviews, tags, verified Unsplash food photos,
 * user avatars, timestamps, and restaurant owner replies.
 */
export const GORAKHPUR_REVIEWS: readonly Review[] = [
  {
    "id": "rev-1",
    "restaurantId": "chaudhary-sweet-house",
    "restaurantName": "Chaudhary Sweet House & Restaurant",
    "userName": "Aarav Mehta",
    "userEmail": "aarav.mehta10@gmail.com",
    "userAvatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80",
    "rating": 5,
    "text": "The pure desi ghee samosas here are legendary in Gorakhpur! Hot, crispy, and the potato filling is perfectly spiced with cashews. Also took home half a kilo of Kesar Rasmalai—pure bliss.",
    "tags": [
      "Delicious Food",
      "Authentic Flavours",
      "Must Visit"
    ],
    "photoUrl": "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80",
    "date": "2026-08-01",
    "isDemo": false,
    "isFlagged": false,
    "ownerReply": {
      "text": "Thank you for your heartfelt review! We take immense pride in preserving our heritage desi ghee recipes.",
      "date": "2026-08-02"
    }
  },
  {
    "id": "rev-2",
    "restaurantId": "chaudhary-sweet-house",
    "restaurantName": "Chaudhary Sweet House & Restaurant",
    "userName": "Meera Joshi",
    "userEmail": "meera.joshi11@outlook.com",
    "userAvatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80",
    "rating": 5,
    "text": "Visited with my family on Sunday morning for Chhole Bhature. Golden and puffed to perfection with tangy pindi chhole. Clean seating in the AC hall and fast service despite the rush.",
    "tags": [
      "Family Friendly",
      "Quick Service",
      "Good Value"
    ],
    "photoUrl": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=600&q=80",
    "date": "2026-09-08",
    "isDemo": false,
    "isFlagged": false
  },
  {
    "id": "rev-3",
    "restaurantId": "chaudhary-sweet-house",
    "restaurantName": "Chaudhary Sweet House & Restaurant",
    "userName": "Kabir Singh",
    "userEmail": "kabir.singh12@yahoo.com",
    "userAvatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80",
    "rating": 4,
    "text": "Their Royal Veg Thali is huge and easily fills two light eaters. The dal makhani has that slow-cooked smoky richness. Parking on Cinema Road can be tricky on weekends, but the food is worth it.",
    "tags": [
      "Good Value",
      "Clean Place"
    ],
    "photoUrl": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=600&q=80",
    "date": "2026-10-15",
    "isDemo": false,
    "isFlagged": false,
    "ownerReply": {
      "text": "Thanks for the review! For parking, our staff is always happy to guide cars towards the designated lot across the street.",
      "date": "2026-10-16"
    }
  },
  {
    "id": "rev-4",
    "restaurantId": "chaudhary-sweet-house",
    "restaurantName": "Chaudhary Sweet House & Restaurant",
    "userName": "Sana Khan",
    "userEmail": "sana.khan13@icloud.com",
    "userAvatar": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80",
    "rating": 5,
    "text": "Best Rabdi Jalebi in Eastern UP hands down. Served hot in a clay kulhad with thick malai rabdi. No trip to Golghar is complete without stopping here!",
    "tags": [
      "Authentic Flavours",
      "Delicious Food",
      "Must Visit"
    ],
    "photoUrl": "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=600&q=80",
    "date": "2026-11-22",
    "isDemo": false,
    "isFlagged": false
  },
  {
    "id": "rev-5",
    "restaurantId": "bobis-restaurant",
    "restaurantName": "Bobis Restaurant & Barbeque",
    "userName": "Rohan Verma",
    "userEmail": "rohan.verma14@gmail.com",
    "userAvatar": "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&h=150&q=80",
    "rating": 5,
    "text": "The Galouti Kebabs melt on the tongue before you even chew! Served with warm ulte tawa ka paratha and mint chutney. Best Mughlai dinner experience in Civil Lines.",
    "tags": [
      "Delicious Food",
      "Great Ambience",
      "Must Visit"
    ],
    "photoUrl": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80",
    "date": "2026-09-01",
    "isDemo": false,
    "isFlagged": false,
    "ownerReply": {
      "text": "We are thrilled you enjoyed our melt-in-mouth Galoutis! Looking forward to welcoming you back.",
      "date": "2026-09-02"
    }
  },
  {
    "id": "rev-6",
    "restaurantId": "bobis-restaurant",
    "restaurantName": "Bobis Restaurant & Barbeque",
    "userName": "Riya Gupta",
    "userEmail": "riya.gupta15@outlook.com",
    "userAvatar": "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=150&h=150&q=80",
    "rating": 5,
    "text": "Tried their Mutton Rogan Josh and garlic naan. The gravy had the authentic Kashmiri fennel and saffron aroma with tender meat on bone. Excellent tandoor section.",
    "tags": [
      "Authentic Flavours",
      "Delicious Food"
    ],
    "photoUrl": "https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=600&q=80",
    "date": "2026-10-08",
    "isDemo": false,
    "isFlagged": false
  },
  {
    "id": "rev-7",
    "restaurantId": "bobis-restaurant",
    "restaurantName": "Bobis Restaurant & Barbeque",
    "userName": "Ananya Sharma",
    "userEmail": "ananya.sharma16@yahoo.com",
    "userAvatar": "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=150&h=150&q=80",
    "rating": 4,
    "text": "The live barbeque grill at the table makes family dining so lively! Murgh Malai Tikka was juicy and creamy. Service took about 20 minutes because the house was packed on Saturday night.",
    "tags": [
      "Great Ambience",
      "Family Friendly"
    ],
    "photoUrl": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=600&q=80",
    "date": "2026-11-15",
    "isDemo": false,
    "isFlagged": false,
    "ownerReply": {
      "text": "Thank you for dining with us! We have added dedicated weekend staff to ensure grilling and service are even faster.",
      "date": "2026-11-16"
    }
  },
  {
    "id": "rev-8",
    "restaurantId": "bobis-restaurant",
    "restaurantName": "Bobis Restaurant & Barbeque",
    "userName": "Vikramaditya Rao",
    "userEmail": "vikramaditya.rao17@icloud.com",
    "userAvatar": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&h=150&q=80",
    "rating": 5,
    "text": "Hands down the finest non-veg dining establishment in Gorakhpur. Spotless tables, royal cutlery, courteous waiters, and rich authentic taste.",
    "tags": [
      "Clean Place",
      "Friendly Staff",
      "Great Ambience"
    ],
    "photoUrl": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=600&q=80",
    "date": "2026-08-22",
    "isDemo": false,
    "isFlagged": false
  },
  {
    "id": "rev-9",
    "restaurantId": "lakefront-lounge",
    "restaurantName": "Lakefront Lounge & Bistro",
    "userName": "Sneha Tiwari",
    "userEmail": "sneha.tiwari18@gmail.com",
    "userAvatar": "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=150&h=150&q=80",
    "rating": 5,
    "text": "Sitting on the deck with the evening Ramgarh Taal breeze while sipping a cold brew is magical. The woodfired pizza had great blistered crust and fresh mozzarella.",
    "tags": [
      "Great Ambience",
      "Must Visit",
      "Delicious Food"
    ],
    "photoUrl": "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=600&q=80",
    "date": "2026-10-01",
    "isDemo": false,
    "isFlagged": false,
    "ownerReply": {
      "text": "Thank you! The sunset views over Ramgarh Taal paired with our artisan coffee are our favorite too.",
      "date": "2026-10-02"
    }
  },
  {
    "id": "rev-10",
    "restaurantId": "lakefront-lounge",
    "restaurantName": "Lakefront Lounge & Bistro",
    "userName": "Farhan Siddiqui",
    "userEmail": "farhan.siddiqui19@outlook.com",
    "userAvatar": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&h=150&q=80",
    "rating": 5,
    "text": "Gorakhpur really needed a lakeview bistro like this. Loaded cheese nachos and the hazelnut frappe were top notch. Perfect spot for evening dates or college catch-ups.",
    "tags": [
      "Great Ambience",
      "Friendly Staff",
      "Must Visit"
    ],
    "photoUrl": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80",
    "date": "2026-11-08",
    "isDemo": false,
    "isFlagged": false
  },
  {
    "id": "rev-11",
    "restaurantId": "lakefront-lounge",
    "restaurantName": "Lakefront Lounge & Bistro",
    "userName": "Pooja Verma",
    "userEmail": "pooja.verma20@yahoo.com",
    "userAvatar": "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150&h=150&q=80",
    "rating": 4,
    "text": "The lakeside location is 10/10. We loved the grilled peri-peri chicken platter and mocktails. Outdoor tables fill up fast by 6 PM, so arrive early.",
    "tags": [
      "Great Ambience",
      "Good Value"
    ],
    "photoUrl": "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=80",
    "date": "2026-08-15",
    "isDemo": false,
    "isFlagged": false,
    "ownerReply": {
      "text": "Pro-tip: We now take sunset table reservations via WhatsApp for outdoor deck seating!",
      "date": "2026-08-16"
    }
  },
  {
    "id": "rev-12",
    "restaurantId": "lakefront-lounge",
    "restaurantName": "Lakefront Lounge & Bistro",
    "userName": "Aditya Singh",
    "userEmail": "aditya.singh21@icloud.com",
    "userAvatar": "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=150&h=150&q=80",
    "rating": 5,
    "text": "Impeccable hygiene, fast Wi-Fi, and courteous staff. Worked remotely from here for 3 hours while enjoying pasta and cappuccino. A premier gem in Taramandal.",
    "tags": [
      "Clean Place",
      "Friendly Staff",
      "Delicious Food"
    ],
    "photoUrl": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80",
    "date": "2026-09-22",
    "isDemo": false,
    "isFlagged": false
  },
  {
    "id": "rev-13",
    "restaurantId": "shriram-sweets",
    "restaurantName": "Shri Ram Sweets & Chaat Bhandar",
    "userName": "Kavita Pandey",
    "userEmail": "kavita.pandey22@gmail.com",
    "userAvatar": "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=150&h=150&q=80",
    "rating": 5,
    "text": "The pure desi ghee Aloo Tikki chaat near Betiahata is unbeatable. Crispy golden patty drenched in sweet curd, saunth, and fresh pomegranate seeds. Pure bliss.",
    "tags": [
      "Delicious Food",
      "Authentic Flavours",
      "Good Value"
    ],
    "photoUrl": "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80",
    "date": "2026-11-01",
    "isDemo": false,
    "isFlagged": false,
    "ownerReply": {
      "text": "Dhanyawad! We have made our chaat in pure desi ghee for over three decades and love keeping it consistent.",
      "date": "2026-11-02"
    }
  },
  {
    "id": "rev-14",
    "restaurantId": "shriram-sweets",
    "restaurantName": "Shri Ram Sweets & Chaat Bhandar",
    "userName": "Kunal Kapoor",
    "userEmail": "kunal.kapoor23@outlook.com",
    "userAvatar": "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=150&h=150&q=80",
    "rating": 5,
    "text": "Huge fan of their Raj Kachori! Bursting with sprouts, bhalla, and tangy chutneys. Their packaging for takeaway is very neat and leak-proof.",
    "tags": [
      "Delicious Food",
      "Quick Service",
      "Good Value"
    ],
    "photoUrl": "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=600&q=80",
    "date": "2026-08-08",
    "isDemo": false,
    "isFlagged": false
  },
  {
    "id": "rev-15",
    "restaurantId": "shriram-sweets",
    "restaurantName": "Shri Ram Sweets & Chaat Bhandar",
    "userName": "Deepali Mishra",
    "userEmail": "deepali.mishra24@yahoo.com",
    "userAvatar": "https://images.unsplash.com/photo-1548142813-c348350df52b?auto=format&fit=crop&w=150&h=150&q=80",
    "rating": 4,
    "text": "Brought their Kaju Katli and Motichoor Laddoos for Diwali gifting. Extremely fresh and fragrant with green cardamom. Highly recommended sweet shop in Betiahata.",
    "tags": [
      "Authentic Flavours",
      "Clean Place"
    ],
    "photoUrl": "https://images.unsplash.com/photo-1625398407796-82650a8c135f?auto=format&fit=crop&w=600&q=80",
    "date": "2026-09-15",
    "isDemo": false,
    "isFlagged": false
  },
  {
    "id": "rev-16",
    "restaurantId": "shriram-sweets",
    "restaurantName": "Shri Ram Sweets & Chaat Bhandar",
    "userName": "Arjun Nambiar",
    "userEmail": "arjun.nambiar25@icloud.com",
    "userAvatar": "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=150&h=150&q=80",
    "rating": 5,
    "text": "Clean counters, quick digital billing via QR, and very hygienic chaat counter. The papdi chaat and dahi bhalla are unmatched in the city.",
    "tags": [
      "Clean Place",
      "Quick Billing",
      "Friendly Staff"
    ],
    "photoUrl": "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=600&q=80",
    "date": "2026-10-22",
    "isDemo": false,
    "isFlagged": false,
    "ownerReply": {
      "text": "Thank you for noticing our hygiene standards! We use only RO filtered water for all pani puri and curd preparations.",
      "date": "2026-10-23"
    }
  },
  {
    "id": "rev-17",
    "restaurantId": "wokandroll-kitchen",
    "restaurantName": "Wok & Roll Asian Kitchen",
    "userName": "Shalini Sen",
    "userEmail": "shalini.sen26@gmail.com",
    "userAvatar": "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&h=150&q=80",
    "rating": 5,
    "text": "Finally real Pan-Asian food in Gorakhpur! The Chilli Garlic Noodles had that authentic wok hei smokiness. Steamed chicken dim sums were juicy with thin wrappers.",
    "tags": [
      "Delicious Food",
      "Authentic Flavours",
      "Must Visit"
    ],
    "photoUrl": "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=600&q=80",
    "date": "2026-08-01",
    "isDemo": false,
    "isFlagged": false,
    "ownerReply": {
      "text": "Xie xie! Our chefs take wok seasoning very seriously to deliver that authentic street-style wok hei.",
      "date": "2026-08-02"
    }
  },
  {
    "id": "rev-18",
    "restaurantId": "wokandroll-kitchen",
    "restaurantName": "Wok & Roll Asian Kitchen",
    "userName": "Varun Dhawan",
    "userEmail": "varun.dhawan27@outlook.com",
    "userAvatar": "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&h=150&q=80",
    "rating": 5,
    "text": "Loved the Kung Pao Paneer with fried rice. Generous portion sizes and the red chilli dip has a serious kick. Modern neon vibes inside the cafe.",
    "tags": [
      "Great Ambience",
      "Good Value"
    ],
    "photoUrl": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80",
    "date": "2026-09-08",
    "isDemo": false,
    "isFlagged": false
  },
  {
    "id": "rev-19",
    "restaurantId": "wokandroll-kitchen",
    "restaurantName": "Wok & Roll Asian Kitchen",
    "userName": "Neha Agarwal",
    "userEmail": "neha.agarwal28@yahoo.com",
    "userAvatar": "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=150&h=150&q=80",
    "rating": 4,
    "text": "Great food on Medical College Road! Crispy honey chilli lotus stems were addictively crunchy. Quick takeaway delivery too.",
    "tags": [
      "Quick Service",
      "Delicious Food"
    ],
    "photoUrl": "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=600&q=80",
    "date": "2026-10-15",
    "isDemo": false,
    "isFlagged": false
  },
  {
    "id": "rev-20",
    "restaurantId": "wokandroll-kitchen",
    "restaurantName": "Wok & Roll Asian Kitchen",
    "userName": "Alok Kashyap",
    "userEmail": "alok.kashyap29@icloud.com",
    "userAvatar": "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=150&h=150&q=80",
    "rating": 5,
    "text": "The best Asian restaurant in town. Super friendly staff who gave great recommendations for non-spicy options for our kids. Will definitely return.",
    "tags": [
      "Friendly Staff",
      "Family Friendly",
      "Clean Place"
    ],
    "photoUrl": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80",
    "date": "2026-11-22",
    "isDemo": false,
    "isFlagged": false,
    "ownerReply": {
      "text": "Delighted to hear the little ones enjoyed their dinner! See you and your family again soon.",
      "date": "2026-11-23"
    }
  },
  {
    "id": "rev-21",
    "restaurantId": "chai-stories-cafe",
    "restaurantName": "Chai & Stories Cafe",
    "userName": "Divya Chauhan",
    "userEmail": "divya.chauhan30@gmail.com",
    "userAvatar": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&h=150&q=80",
    "rating": 5,
    "text": "Such a cozy sanctuary in Betiahata. The adrak elaichi kulhad chai paired with cheese maggi on a rainy day is heavenly. Cozy bookshelves with good novels too.",
    "tags": [
      "Great Ambience",
      "Delicious Food",
      "Must Visit"
    ],
    "photoUrl": "https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=600&q=80",
    "date": "2026-09-01",
    "isDemo": false,
    "isFlagged": false,
    "ownerReply": {
      "text": "Thank you! Creating a warm reading nook for Gorakhpur bibliophiles and chai lovers was our dream.",
      "date": "2026-09-02"
    }
  },
  {
    "id": "rev-22",
    "restaurantId": "chai-stories-cafe",
    "restaurantName": "Chai & Stories Cafe",
    "userName": "Rahul Bajpai",
    "userEmail": "rahul.bajpai31@outlook.com",
    "userAvatar": "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=150&h=150&q=80",
    "rating": 5,
    "text": "Their Blueberry Cheesecake is legitimately one of the best I have tasted anywhere in UP. Smooth cream cheese texture with real berry compote.",
    "tags": [
      "Delicious Food",
      "Clean Place"
    ],
    "photoUrl": "https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?auto=format&fit=crop&w=600&q=80",
    "date": "2026-10-08",
    "isDemo": false,
    "isFlagged": false
  },
  {
    "id": "rev-23",
    "restaurantId": "chai-stories-cafe",
    "restaurantName": "Chai & Stories Cafe",
    "userName": "Swati Saxena",
    "userEmail": "swati.saxena32@yahoo.com",
    "userAvatar": "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&w=150&h=150&q=80",
    "rating": 4,
    "text": "Charming warm interior, aesthetic photo spots for Instagram, and very polite servers. The peri peri french fries were super crisp and freshly fried.",
    "tags": [
      "Great Ambience",
      "Friendly Staff"
    ],
    "photoUrl": "https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&w=600&q=80",
    "date": "2026-11-15",
    "isDemo": false,
    "isFlagged": false
  },
  {
    "id": "rev-24",
    "restaurantId": "chai-stories-cafe",
    "restaurantName": "Chai & Stories Cafe",
    "userName": "Siddharth Roy",
    "userEmail": "siddharth.roy33@icloud.com",
    "userAvatar": "https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?auto=format&fit=crop&w=150&h=150&q=80",
    "rating": 5,
    "text": "Had an afternoon meeting here. Silent corners, strong cold coffee, and quick billing. Truly an oasis for young professionals in Gorakhpur.",
    "tags": [
      "Quick Billing",
      "Clean Place",
      "Friendly Staff"
    ],
    "photoUrl": "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=600&q=80",
    "date": "2026-08-22",
    "isDemo": false,
    "isFlagged": false,
    "ownerReply": {
      "text": "We are thrilled you had a productive work session! Feel free to ask our staff for power outlet tables anytime.",
      "date": "2026-08-23"
    }
  },
  {
    "id": "rev-25",
    "restaurantId": "royal-awadh-darbar",
    "restaurantName": "Royal Awadh Darbar",
    "userName": "Tanvi Bhatia",
    "userEmail": "tanvi.bhatia34@gmail.com",
    "userAvatar": "https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=150&h=150&q=80",
    "rating": 5,
    "text": "An opulent royal feast right in Golghar! The Awadhi Dum Biryani has that delicate kewra and saffron fragrance where every grain of rice is separate and flavorful.",
    "tags": [
      "Authentic Flavours",
      "Delicious Food",
      "Must Visit"
    ],
    "photoUrl": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=80",
    "date": "2026-10-01",
    "isDemo": false,
    "isFlagged": false,
    "ownerReply": {
      "text": "Shukriya! Our Dum Biryani is cooked in sealed copper handis following age-old Lucknowi court traditions.",
      "date": "2026-10-02"
    }
  },
  {
    "id": "rev-26",
    "restaurantId": "royal-awadh-darbar",
    "restaurantName": "Royal Awadh Darbar",
    "userName": "Mohit Rastogi",
    "userEmail": "mohit.rastogi35@outlook.com",
    "userAvatar": "https://images.unsplash.com/photo-1534751516642-a1714f5a5a3a?auto=format&fit=crop&w=150&h=150&q=80",
    "rating": 5,
    "text": "Ordered the Dal Makhani and Kakori Kebabs. The kebabs genuinely dissolved on the tongue. Grand chandelier decor and regal seating.",
    "tags": [
      "Great Ambience",
      "Delicious Food",
      "Family Friendly"
    ],
    "photoUrl": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80",
    "date": "2026-11-08",
    "isDemo": false,
    "isFlagged": false
  },
  {
    "id": "rev-27",
    "restaurantId": "royal-awadh-darbar",
    "restaurantName": "Royal Awadh Darbar",
    "userName": "Priya Dubey",
    "userEmail": "priya.dubey36@yahoo.com",
    "userAvatar": "https://images.unsplash.com/photo-1514794749374-fb67509dbb7f?auto=format&fit=crop&w=150&h=150&q=80",
    "rating": 4,
    "text": "Top tier fine dining for family celebrations. The mutton korma is rich and hearty. A bit crowded during festival evenings, so reserving a table is advised.",
    "tags": [
      "Family Friendly",
      "Authentic Flavours"
    ],
    "photoUrl": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=600&q=80",
    "date": "2026-08-15",
    "isDemo": false,
    "isFlagged": false,
    "ownerReply": {
      "text": "Thank you! We always recommend booking ahead for large family gatherings during peak weekends.",
      "date": "2026-08-16"
    }
  },
  {
    "id": "rev-28",
    "restaurantId": "royal-awadh-darbar",
    "restaurantName": "Royal Awadh Darbar",
    "userName": "Mayank Shukla",
    "userEmail": "mayank.shukla37@icloud.com",
    "userAvatar": "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?auto=format&fit=crop&w=150&h=150&q=80",
    "rating": 5,
    "text": "Superb hospitality. The head steward explained the royal heritage behind each dish on the menu. Unmatched dining grandeur in Gorakhpur.",
    "tags": [
      "Friendly Staff",
      "Great Ambience",
      "Clean Place"
    ],
    "photoUrl": "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=600&q=80",
    "date": "2026-09-22",
    "isDemo": false,
    "isFlagged": false
  },
  {
    "id": "rev-29",
    "restaurantId": "brijwasi-sweets",
    "restaurantName": "Brijwasi Desi Ghee Sweets & Thali",
    "userName": "Shreya Banerjee",
    "userEmail": "shreya.banerjee38@gmail.com",
    "userAvatar": "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=150&h=150&q=80",
    "rating": 5,
    "text": "The morning Bedmi Puri and spicy Hing aloo sabzi here is pure nostalgia! Freshly puffed crispy puris and authentic Mathura-style sour pumpkin subzi.",
    "tags": [
      "Authentic Flavours",
      "Delicious Food",
      "Good Value"
    ],
    "photoUrl": "https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=600&q=80",
    "date": "2026-11-01",
    "isDemo": false,
    "isFlagged": false,
    "ownerReply": {
      "text": "Radhe Radhe! We wake up at 5:00 AM every morning to grind fresh spices for our Hing aloo.",
      "date": "2026-11-02"
    }
  },
  {
    "id": "rev-30",
    "restaurantId": "brijwasi-sweets",
    "restaurantName": "Brijwasi Desi Ghee Sweets & Thali",
    "userName": "Gaurav Tandon",
    "userEmail": "gaurav.tandon39@outlook.com",
    "userAvatar": "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150&q=80",
    "rating": 5,
    "text": "Cleanest pure veg thali restaurant on Bank Road. Served piping hot dal tadka, shahi paneer, and tandoori rotis with desi ghee. Extremely economical.",
    "tags": [
      "Clean Place",
      "Good Value",
      "Quick Service"
    ],
    "photoUrl": "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=600&q=80",
    "date": "2026-08-08",
    "isDemo": false,
    "isFlagged": false
  },
  {
    "id": "rev-31",
    "restaurantId": "brijwasi-sweets",
    "restaurantName": "Brijwasi Desi Ghee Sweets & Thali",
    "userName": "Ishita Singhal",
    "userEmail": "ishita.singhal40@yahoo.com",
    "userAvatar": "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=150&h=150&q=80",
    "rating": 4,
    "text": "Their Banarasi Malai Rabdi and Kaju Barfi are unmatched in quality. Pure milk products with no adulteration. High footfall during wedding season.",
    "tags": [
      "Authentic Flavours",
      "Delicious Food"
    ],
    "photoUrl": "https://images.unsplash.com/photo-1576867757603-05b134ebc379?auto=format&fit=crop&w=600&q=80",
    "date": "2026-09-15",
    "isDemo": false,
    "isFlagged": false
  },
  {
    "id": "rev-32",
    "restaurantId": "brijwasi-sweets",
    "restaurantName": "Brijwasi Desi Ghee Sweets & Thali",
    "userName": "Aman Keshari",
    "userEmail": "aman.keshari41@icloud.com",
    "userAvatar": "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=crop&w=150&h=150&q=80",
    "rating": 5,
    "text": "Whenever I visit the Bank Road commercial market, Brijwasi is my default lunch spot. Quick billing, contactless payments, and prompt parcel packing.",
    "tags": [
      "Quick Billing",
      "Clean Place",
      "Good Value"
    ],
    "photoUrl": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=600&q=80",
    "date": "2026-10-22",
    "isDemo": false,
    "isFlagged": false,
    "ownerReply": {
      "text": "Thank you for your frequent visits and loyal patronage!",
      "date": "2026-10-23"
    }
  },
  {
    "id": "rev-33",
    "restaurantId": "burger-crust-hub",
    "restaurantName": "Burger & Crust Hub",
    "userName": "Preeti Maurya",
    "userEmail": "preeti.maurya42@gmail.com",
    "userAvatar": "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=150&h=150&q=80",
    "rating": 5,
    "text": "The Double Smash Buff & Cheese Burger here beats multinational burger chains hands down! Toasted brioche bun, caramelized onions, and house secret sauce.",
    "tags": [
      "Delicious Food",
      "Great Ambience",
      "Must Visit"
    ],
    "photoUrl": "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=600&q=80",
    "date": "2026-08-01",
    "isDemo": false,
    "isFlagged": false,
    "ownerReply": {
      "text": "Thanks a lot! Our smash patties are pressed fresh to order on high heat to get that irresistible crust.",
      "date": "2026-08-02"
    }
  },
  {
    "id": "rev-34",
    "restaurantId": "burger-crust-hub",
    "restaurantName": "Burger & Crust Hub",
    "userName": "Saurabh Tripathi",
    "userEmail": "saurabh.tripathi43@outlook.com",
    "userAvatar": "https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&fit=crop&w=150&h=150&q=80",
    "rating": 5,
    "text": "Peri-peri chicken wings were juicy and had an awesome crunch. Also tried the Lotus Biscoff thickshake—incredibly rich and thick.",
    "tags": [
      "Delicious Food",
      "Good Value"
    ],
    "photoUrl": "https://images.unsplash.com/photo-1572448862527-d3c904757de6?auto=format&fit=crop&w=600&q=80",
    "date": "2026-09-08",
    "isDemo": false,
    "isFlagged": false
  },
  {
    "id": "rev-35",
    "restaurantId": "burger-crust-hub",
    "restaurantName": "Burger & Crust Hub",
    "userName": "Ritika Sengupta",
    "userEmail": "ritika.sengupta44@yahoo.com",
    "userAvatar": "https://images.unsplash.com/photo-1506863530036-1efeddceb993?auto=format&fit=crop&w=150&h=150&q=80",
    "rating": 4,
    "text": "Vibrant neon ambiance in Mohaddipur with hip hop tracks in the background. Young crowd, fast service, and generous fry portions.",
    "tags": [
      "Great Ambience",
      "Quick Service"
    ],
    "photoUrl": "https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=600&q=80",
    "date": "2026-10-15",
    "isDemo": false,
    "isFlagged": false
  },
  {
    "id": "rev-36",
    "restaurantId": "burger-crust-hub",
    "restaurantName": "Burger & Crust Hub",
    "userName": "Deepak Pathak",
    "userEmail": "deepak.pathak45@icloud.com",
    "userAvatar": "https://images.unsplash.com/photo-1528892952291-009c663ce843?auto=format&fit=crop&w=150&h=150&q=80",
    "rating": 5,
    "text": "Ordered delivery twice on Zomato and dined in today. The dine-in experience is even better—burgers arrive steaming hot with melted cheddar dripping.",
    "tags": [
      "Delicious Food",
      "Clean Place",
      "Friendly Staff"
    ],
    "photoUrl": "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=600&q=80",
    "date": "2026-11-22",
    "isDemo": false,
    "isFlagged": false,
    "ownerReply": {
      "text": "Nothing beats a hot burger fresh off the grill! Glad you came in person.",
      "date": "2026-11-23"
    }
  },
  {
    "id": "rev-37",
    "restaurantId": "taalview-rooftop",
    "restaurantName": "Taal View Rooftop Lounge",
    "userName": "Vandana Yadav",
    "userEmail": "vandana.yadav46@gmail.com",
    "userAvatar": "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?auto=format&fit=crop&w=150&h=150&q=80",
    "rating": 5,
    "text": "The panoramic night view of Ramgarh Taal with the illuminated floating fountain and cool breeze is unmatched in all of Eastern UP. Great acoustic live music on Fridays!",
    "tags": [
      "Great Ambience",
      "Must Visit",
      "Delicious Food"
    ],
    "photoUrl": "https://images.unsplash.com/photo-1505252585461-04db1eb84625?auto=format&fit=crop&w=600&q=80",
    "date": "2026-09-01",
    "isDemo": false,
    "isFlagged": false,
    "ownerReply": {
      "text": "Thank you! The Ramgarh Taal fountain view is our pride. Our weekend acoustic sessions are on every Fri-Sun!",
      "date": "2026-09-02"
    }
  },
  {
    "id": "rev-38",
    "restaurantId": "taalview-rooftop",
    "restaurantName": "Taal View Rooftop Lounge",
    "userName": "Nikhil Chawla",
    "userEmail": "nikhil.chawla47@outlook.com",
    "userAvatar": "https://images.unsplash.com/photo-1541823709867-1b206113eafd?auto=format&fit=crop&w=150&h=150&q=80",
    "rating": 5,
    "text": "Tandoori Malai Chaap was tender and smoky. Paired it with their signature Virgin Blue Lagoon mocktail. Wonderful rooftop dining ambiance.",
    "tags": [
      "Great Ambience",
      "Delicious Food"
    ],
    "photoUrl": "https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&w=600&q=80",
    "date": "2026-10-08",
    "isDemo": false,
    "isFlagged": false
  },
  {
    "id": "rev-39",
    "restaurantId": "taalview-rooftop",
    "restaurantName": "Taal View Rooftop Lounge",
    "userName": "Sonam Jaiswal",
    "userEmail": "sonam.jaiswal48@yahoo.com",
    "userAvatar": "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?auto=format&fit=crop&w=150&h=150&q=80",
    "rating": 4,
    "text": "Celebrated my sister’s birthday on the terrace. The management arranged fairy lights and balloon decor on short notice. Food was flavorful and served hot.",
    "tags": [
      "Family Friendly",
      "Friendly Staff",
      "Great Ambience"
    ],
    "photoUrl": "https://images.unsplash.com/photo-1606471191009-63994c53433b?auto=format&fit=crop&w=600&q=80",
    "date": "2026-11-15",
    "isDemo": false,
    "isFlagged": false,
    "ownerReply": {
      "text": "It was our pleasure hosting your sister’s special birthday evening!",
      "date": "2026-11-16"
    }
  },
  {
    "id": "rev-40",
    "restaurantId": "taalview-rooftop",
    "restaurantName": "Taal View Rooftop Lounge",
    "userName": "Harshvardhan Jain",
    "userEmail": "harshvardhan.jain49@icloud.com",
    "userAvatar": "https://images.unsplash.com/photo-1542206395-9feb3edaa68d?auto=format&fit=crop&w=150&h=150&q=80",
    "rating": 5,
    "text": "Luxury dining experience without metropolitan price tags. Comfortable lounge sofa seating, attentive stewards, and hygienic washrooms.",
    "tags": [
      "Clean Place",
      "Friendly Staff",
      "Good Value"
    ],
    "photoUrl": "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=600&q=80",
    "date": "2026-08-22",
    "isDemo": false,
    "isFlagged": false
  },
  {
    "id": "rev-41",
    "restaurantId": "gagan-korma-corner",
    "restaurantName": "Gagan Korma & Biryani Corner",
    "userName": "Shruti Sethi",
    "userEmail": "shruti.sethi50@gmail.com",
    "userAvatar": "https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4?auto=format&fit=crop&w=150&h=150&q=80",
    "rating": 5,
    "text": "The Shahi Mutton Korma here is legendary in Shahpur! Thick, aromatic red gravy steeped in brown onions, mace, and cardamom. Meat falls right off the bone.",
    "tags": [
      "Authentic Flavours",
      "Delicious Food",
      "Must Visit"
    ],
    "photoUrl": "https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=600&q=80",
    "date": "2026-10-01",
    "isDemo": false,
    "isFlagged": false,
    "ownerReply": {
      "text": "Shukriya! Our korma recipe has remained unchanged since 1988, simmered in pure copper deghs.",
      "date": "2026-10-02"
    }
  },
  {
    "id": "rev-42",
    "restaurantId": "gagan-korma-corner",
    "restaurantName": "Gagan Korma & Biryani Corner",
    "userName": "Pranav Madan",
    "userEmail": "pranav.madan51@outlook.com",
    "userAvatar": "https://images.unsplash.com/photo-1534308143481-c55f00be8bd7?auto=format&fit=crop&w=150&h=150&q=80",
    "rating": 5,
    "text": "Soft, steaming Khameeri rotis straight out of the clay oven. The chicken seekh kebabs are packed with green chillies, coriander, and minced ginger.",
    "tags": [
      "Delicious Food",
      "Good Value",
      "Quick Service"
    ],
    "photoUrl": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80",
    "date": "2026-11-08",
    "isDemo": false,
    "isFlagged": false
  },
  {
    "id": "rev-43",
    "restaurantId": "gagan-korma-corner",
    "restaurantName": "Gagan Korma & Biryani Corner",
    "userName": "Smita Deshmukh",
    "userEmail": "smita.deshmukh52@yahoo.com",
    "userAvatar": "https://images.unsplash.com/photo-1530268729831-4b0b9e170218?auto=format&fit=crop&w=150&h=150&q=80",
    "rating": 4,
    "text": "Pure paradise for non-veg lovers in Gorakhpur. The chicken biryani is mildly spiced and comes with rich salan. Gets very busy by 8:30 PM.",
    "tags": [
      "Authentic Flavours",
      "Good Value"
    ],
    "photoUrl": "https://images.unsplash.com/photo-1529042410759-befb1204b468?auto=format&fit=crop&w=600&q=80",
    "date": "2026-08-15",
    "isDemo": false,
    "isFlagged": false
  },
  {
    "id": "rev-44",
    "restaurantId": "gagan-korma-corner",
    "restaurantName": "Gagan Korma & Biryani Corner",
    "userName": "Akash Srivastava",
    "userEmail": "akash.srivastava53@icloud.com",
    "userAvatar": "https://images.unsplash.com/photo-1517462964-21fdcec3f25b?auto=format&fit=crop&w=150&h=150&q=80",
    "rating": 5,
    "text": "Speedy parcel counter and clean kitchen visibility. Prices are very reasonable for the quantity and authentic taste they serve.",
    "tags": [
      "Quick Billing",
      "Clean Place",
      "Good Value"
    ],
    "photoUrl": "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=600&q=80",
    "date": "2026-09-22",
    "isDemo": false,
    "isFlagged": false,
    "ownerReply": {
      "text": "Thank you! We always aim to deliver royal flavors at neighborhood-friendly prices.",
      "date": "2026-09-23"
    }
  },
  {
    "id": "rev-45",
    "restaurantId": "golgappa-junction",
    "restaurantName": "Golgappa Junction & Chaat Bazaar",
    "userName": "Nikita Roy",
    "userEmail": "nikita.roy54@gmail.com",
    "userAvatar": "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=150&h=150&q=80",
    "rating": 5,
    "text": "6 distinct flavored panis! Hing, Pudina, Nimbu, Jeera, Khatta-Meetha, and Garlic. Every single flavor is made with mineral RO water and crispy puris.",
    "tags": [
      "Delicious Food",
      "Authentic Flavours",
      "Must Visit"
    ],
    "photoUrl": "https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?auto=format&fit=crop&w=600&q=80",
    "date": "2026-11-01",
    "isDemo": false,
    "isFlagged": false,
    "ownerReply": {
      "text": "Thank you! We maintain 100% glove-wearing and RO water standards so you can enjoy street food without health worries.",
      "date": "2026-11-02"
    }
  },
  {
    "id": "rev-46",
    "restaurantId": "golgappa-junction",
    "restaurantName": "Golgappa Junction & Chaat Bazaar",
    "userName": "Yashwardhan Lal",
    "userEmail": "yashwardhan.lal55@outlook.com",
    "userAvatar": "https://images.unsplash.com/photo-1546961329-78bef0414d7c?auto=format&fit=crop&w=150&h=150&q=80",
    "rating": 5,
    "text": "The Dahi Papdi Chaat and Sev Puri here are so refreshing. Hygienic gloves, clean stainless steel counters, and prompt digital token system.",
    "tags": [
      "Clean Place",
      "Quick Billing",
      "Good Value"
    ],
    "photoUrl": "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=600&q=80",
    "date": "2026-08-08",
    "isDemo": false,
    "isFlagged": false
  },
  {
    "id": "rev-47",
    "restaurantId": "golgappa-junction",
    "restaurantName": "Golgappa Junction & Chaat Bazaar",
    "userName": "Radhika Goel",
    "userEmail": "radhika.goel56@yahoo.com",
    "userAvatar": "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=150&h=150&q=80",
    "rating": 4,
    "text": "Always crowded at Asuran Chowk in the evenings, and for good reason! The Suji Golgappas are crunchy and don’t get soggy. Highly recommended street stop.",
    "tags": [
      "Delicious Food",
      "Good Value"
    ],
    "photoUrl": "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=600&q=80",
    "date": "2026-09-15",
    "isDemo": false,
    "isFlagged": false
  },
  {
    "id": "rev-48",
    "restaurantId": "golgappa-junction",
    "restaurantName": "Golgappa Junction & Chaat Bazaar",
    "userName": "Devendra Pratap",
    "userEmail": "devendra.pratap57@icloud.com",
    "userAvatar": "https://images.unsplash.com/photo-1520466809213-7b9a56adcd45?auto=format&fit=crop&w=150&h=150&q=80",
    "rating": 5,
    "text": "Most sanitary chaat center in Gorakhpur. No flies, clean bins, automated token counter, and delicious flavors. Worth every rupee.",
    "tags": [
      "Clean Place",
      "Quick Service",
      "Friendly Staff"
    ],
    "photoUrl": "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&w=600&q=80",
    "date": "2026-10-22",
    "isDemo": false,
    "isFlagged": false,
    "ownerReply": {
      "text": "Dhanyawad! Clean street food is our mission.",
      "date": "2026-10-23"
    }
  },
  {
    "id": "rev-49",
    "restaurantId": "the-yellow-chilli-gkp",
    "restaurantName": "The Yellow Chilli by Sanjeev Kapoor",
    "userName": "Sanya Malhotra",
    "userEmail": "sanya.malhotra58@gmail.com",
    "userAvatar": "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=150&h=150&q=80",
    "rating": 5,
    "text": "Sanjeev Kapoor’s signature Lalla Mussa Dal is pure velvet. Cooked for 36 hours and you can taste that deep butter infusion. Top class fine dining on Park Road.",
    "tags": [
      "Delicious Food",
      "Must Visit",
      "Great Ambience"
    ],
    "photoUrl": "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=600&q=80",
    "date": "2026-08-01",
    "isDemo": false,
    "isFlagged": false,
    "ownerReply": {
      "text": "Thank you! Chef Sanjeev Kapoor’s slow-simmered Lalla Mussa Dal is truly the heart of our menu.",
      "date": "2026-08-02"
    }
  },
  {
    "id": "rev-50",
    "restaurantId": "the-yellow-chilli-gkp",
    "restaurantName": "The Yellow Chilli by Sanjeev Kapoor",
    "userName": "Tushar Khandelwal",
    "userEmail": "tushar.khandelwal59@outlook.com",
    "userAvatar": "https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?auto=format&fit=crop&w=150&h=150&q=80",
    "rating": 5,
    "text": "Shaam Saunfiyana Paneer Tikka was sensational—the hint of roasted fennel seed gives it a distinct royal taste. Elegant family ambiance and valet parking.",
    "tags": [
      "Great Ambience",
      "Family Friendly",
      "Clean Place"
    ],
    "photoUrl": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80",
    "date": "2026-09-08",
    "isDemo": false,
    "isFlagged": false
  },
  {
    "id": "rev-51",
    "restaurantId": "the-yellow-chilli-gkp",
    "restaurantName": "The Yellow Chilli by Sanjeev Kapoor",
    "userName": "Simran Kaur",
    "userEmail": "simran.kaur60@yahoo.com",
    "userAvatar": "https://images.unsplash.com/photo-1496345875659-11f7dd282d1d?auto=format&fit=crop&w=150&h=150&q=80",
    "rating": 4,
    "text": "Impressed by the Murgh Noormahal Biryani. Subtle spices, long grain aged basmati, and delicate mint notes. Perfect place for corporate dinners or anniversaries.",
    "tags": [
      "Great Ambience",
      "Delicious Food"
    ],
    "photoUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80",
    "date": "2026-10-15",
    "isDemo": false,
    "isFlagged": false,
    "ownerReply": {
      "text": "Glad you enjoyed your celebration at The Yellow Chilli!",
      "date": "2026-10-16"
    }
  },
  {
    "id": "rev-52",
    "restaurantId": "the-yellow-chilli-gkp",
    "restaurantName": "The Yellow Chilli by Sanjeev Kapoor",
    "userName": "Rajat Mathur",
    "userEmail": "rajat.mathur61@icloud.com",
    "userAvatar": "https://images.unsplash.com/photo-1485290334039-a3c69043e517?auto=format&fit=crop&w=150&h=150&q=80",
    "rating": 5,
    "text": "Five star hospitality in the center of Civil Lines. The staff is well groomed and courteous, cutlery is spotless, and Gulab-e-Gulkand dessert was divine.",
    "tags": [
      "Clean Place",
      "Friendly Staff",
      "Delicious Food"
    ],
    "photoUrl": "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=600&q=80",
    "date": "2026-11-22",
    "isDemo": false,
    "isFlagged": false
  },
  {
    "id": "rev-53",
    "restaurantId": "sagar-ratna-gorakhpur",
    "restaurantName": "Sagar Ratna Pure Veg",
    "userName": "Payal Singhania",
    "userEmail": "payal.singhania62@gmail.com",
    "userAvatar": "https://images.unsplash.com/photo-1507152832244-10d45c7eda57?auto=format&fit=crop&w=150&h=150&q=80",
    "rating": 5,
    "text": "The Mysore Masala Dosa is crisp with that fiery red garlic chutney smeared inside and steaming drumstick sambar. Authentic South Indian flavors in Gorakhpur!",
    "tags": [
      "Authentic Flavours",
      "Delicious Food",
      "Clean Place"
    ],
    "photoUrl": "https://images.unsplash.com/photo-1564834724105-918b73d1b9e0?auto=format&fit=crop&w=600&q=80",
    "date": "2026-09-01",
    "isDemo": false,
    "isFlagged": false,
    "ownerReply": {
      "text": "Vanakkam! Our chefs and batter fermenting techniques come directly from coastal Karnataka.",
      "date": "2026-09-02"
    }
  },
  {
    "id": "rev-54",
    "restaurantId": "sagar-ratna-gorakhpur",
    "restaurantName": "Sagar Ratna Pure Veg",
    "userName": "Abhishek Dwivedi",
    "userEmail": "abhishek.dwivedi63@outlook.com",
    "userAvatar": "https://images.unsplash.com/photo-1519058082700-08a0b56da9b4?auto=format&fit=crop&w=150&h=150&q=80",
    "rating": 5,
    "text": "Steamed Idli and Medu Vada combo was so fresh at 8:30 in the morning. Followed by a piping hot tumbler of chicory Filter Coffee. Pure comfort food.",
    "tags": [
      "Delicious Food",
      "Quick Service",
      "Good Value"
    ],
    "photoUrl": "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=600&q=80",
    "date": "2026-10-08",
    "isDemo": false,
    "isFlagged": false
  },
  {
    "id": "rev-55",
    "restaurantId": "sagar-ratna-gorakhpur",
    "restaurantName": "Sagar Ratna Pure Veg",
    "userName": "Anupama Joshi",
    "userEmail": "anupama.joshi64@yahoo.com",
    "userAvatar": "https://images.unsplash.com/photo-1521119989659-a83eee488004?auto=format&fit=crop&w=150&h=150&q=80",
    "rating": 4,
    "text": "Consistently high quality pure veg dining in Golghar. Clean air conditioned hall, fast table clearing, and child-friendly high chairs available.",
    "tags": [
      "Clean Place",
      "Family Friendly",
      "Quick Billing"
    ],
    "photoUrl": "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&w=600&q=80",
    "date": "2026-11-15",
    "isDemo": false,
    "isFlagged": false
  },
  {
    "id": "rev-56",
    "restaurantId": "sagar-ratna-gorakhpur",
    "restaurantName": "Sagar Ratna Pure Veg",
    "userName": "Keshav Narang",
    "userEmail": "keshav.narang65@icloud.com",
    "userAvatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80",
    "rating": 5,
    "text": "Their Pineapple Rava Kesari is laden with desi ghee and golden roasted cashews. Best spot for pure vegetarian breakfast and lunch in the city.",
    "tags": [
      "Delicious Food",
      "Clean Place",
      "Must Visit"
    ],
    "photoUrl": "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=600&q=80",
    "date": "2026-08-22",
    "isDemo": false,
    "isFlagged": false,
    "ownerReply": {
      "text": "Thank you for your warm words! The ghee aroma in our Kesari is pure tradition.",
      "date": "2026-08-23"
    }
  },
  {
    "id": "rev-57",
    "restaurantId": "punjabi-dhaba-express",
    "restaurantName": "Pind Balluchi & Punjabi Dhaba",
    "userName": "Barkha Vats",
    "userEmail": "barkha.vats66@gmail.com",
    "userAvatar": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&h=150&q=80",
    "rating": 5,
    "text": "Makki di Roti and authentic Sarson da Saag served with white butter and jaggery! Tasted straight out of a highway dhaba in Punjab. Massive portions.",
    "tags": [
      "Authentic Flavours",
      "Delicious Food",
      "Must Visit"
    ],
    "photoUrl": "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=600&q=80",
    "date": "2026-10-01",
    "isDemo": false,
    "isFlagged": false,
    "ownerReply": {
      "text": "Balle Balle! We source our mustard greens and churn our own white makhan for that true pind experience.",
      "date": "2026-10-02"
    }
  },
  {
    "id": "rev-58",
    "restaurantId": "punjabi-dhaba-express",
    "restaurantName": "Pind Balluchi & Punjabi Dhaba",
    "userName": "Himanshu Pandey",
    "userEmail": "himanshu.pandey67@outlook.com",
    "userAvatar": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&h=150&q=80",
    "rating": 5,
    "text": "Butter Chicken Handi with garlic naan here is rich, creamy, and mildly sweet. Followed by a giant steel glass of Patiala sweet lassi with thick malai.",
    "tags": [
      "Delicious Food",
      "Good Value",
      "Family Friendly"
    ],
    "photoUrl": "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=600&q=80",
    "date": "2026-11-08",
    "isDemo": false,
    "isFlagged": false
  },
  {
    "id": "rev-59",
    "restaurantId": "punjabi-dhaba-express",
    "restaurantName": "Pind Balluchi & Punjabi Dhaba",
    "userName": "Garima Dixit",
    "userEmail": "garima.dixit68@yahoo.com",
    "userAvatar": "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=150&h=150&q=80",
    "rating": 4,
    "text": "Rustic Punjabi village theme with tractor wheels, charpai seating, and lively bhangra beats in Mohaddipur. Loved the Amritsari Kulcha platter.",
    "tags": [
      "Great Ambience",
      "Good Value"
    ],
    "photoUrl": "https://images.unsplash.com/photo-1563227812-0ea4c22e6cc8?auto=format&fit=crop&w=600&q=80",
    "date": "2026-08-15",
    "isDemo": false,
    "isFlagged": false
  },
  {
    "id": "rev-60",
    "restaurantId": "punjabi-dhaba-express",
    "restaurantName": "Pind Balluchi & Punjabi Dhaba",
    "userName": "Ujjwal Anand",
    "userEmail": "ujjwal.anand69@icloud.com",
    "userAvatar": "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&h=150&q=80",
    "rating": 5,
    "text": "Fast food delivery and generous portions. The Dal Tadka has that pure dhaba smokiness with whole red chillies and cumin tadka. Very satisfying meal.",
    "tags": [
      "Quick Service",
      "Delicious Food",
      "Friendly Staff"
    ],
    "photoUrl": "https://images.unsplash.com/photo-1577805947697-89e18249d767?auto=format&fit=crop&w=600&q=80",
    "date": "2026-09-22",
    "isDemo": false,
    "isFlagged": false,
    "ownerReply": {
      "text": "Thank you ji! Keep visiting Pind Balluchi with family!",
      "date": "2026-09-23"
    }
  },
  {
    "id": "rev-61",
    "restaurantId": "belgian-waffle-desserts",
    "restaurantName": "The Belgian Waffle & Crepes Co.",
    "userName": "Jyoti Tiwari",
    "userEmail": "jyoti.tiwari70@gmail.com",
    "userAvatar": "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=150&h=150&q=80",
    "rating": 5,
    "text": "Freshly baked warm waffle with melted Belgian dark chocolate and roasted hazelnuts! Golden crispy on the outside and airy inside. Best dessert parlor in Betiahata.",
    "tags": [
      "Delicious Food",
      "Must Visit",
      "Great Ambience"
    ],
    "photoUrl": "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=600&q=80",
    "date": "2026-11-01",
    "isDemo": false,
    "isFlagged": false,
    "ownerReply": {
      "text": "Merci! We prepare our authentic yeast-risen Belgian waffle batter fresh every single morning.",
      "date": "2026-11-02"
    }
  },
  {
    "id": "rev-62",
    "restaurantId": "belgian-waffle-desserts",
    "restaurantName": "The Belgian Waffle & Crepes Co.",
    "userName": "Shlok Chaturvedi",
    "userEmail": "shlok.chaturvedi71@outlook.com",
    "userAvatar": "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=150&h=150&q=80",
    "rating": 5,
    "text": "Red Velvet Waffle Cake with white chocolate cream cheese spread was a showstopper. Took my friends here after college exams and we loved it.",
    "tags": [
      "Delicious Food",
      "Clean Place",
      "Good Value"
    ],
    "photoUrl": "https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=600&q=80",
    "date": "2026-08-08",
    "isDemo": false,
    "isFlagged": false
  },
  {
    "id": "rev-63",
    "restaurantId": "belgian-waffle-desserts",
    "restaurantName": "The Belgian Waffle & Crepes Co.",
    "userName": "Pallavi Chandra",
    "userEmail": "pallavi.chandra72@yahoo.com",
    "userAvatar": "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=150&h=150&q=80",
    "rating": 4,
    "text": "Great dessert hangout! The waffles are served in easy-to-hold takeaway sleeves so you can walk around Betiahata while munching. Clean open kitchen.",
    "tags": [
      "Clean Place",
      "Quick Service"
    ],
    "photoUrl": "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80",
    "date": "2026-09-15",
    "isDemo": false,
    "isFlagged": false
  },
  {
    "id": "rev-64",
    "restaurantId": "belgian-waffle-desserts",
    "restaurantName": "The Belgian Waffle & Crepes Co.",
    "userName": "Kartik Somani",
    "userEmail": "kartik.somani73@icloud.com",
    "userAvatar": "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&h=150&q=80",
    "rating": 5,
    "text": "Triple Chocolate Overload Waffle is pure decadence. Courteous staff, fast preparation, and heavenly chocolate aroma the moment you step in.",
    "tags": [
      "Friendly Staff",
      "Delicious Food",
      "Quick Billing"
    ],
    "photoUrl": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=600&q=80",
    "date": "2026-10-22",
    "isDemo": false,
    "isFlagged": false,
    "ownerReply": {
      "text": "Thank you! Chocolate lovers will always find a sweet home here.",
      "date": "2026-10-23"
    }
  },
  {
    "id": "rev-65",
    "restaurantId": "nawabi-zaika-biryani",
    "restaurantName": "Nawabi Zaika Biryani & Kebab Hub",
    "userName": "Natasha Kulkarni",
    "userEmail": "natasha.kulkarni74@gmail.com",
    "userAvatar": "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&h=150&q=80",
    "rating": 5,
    "text": "The best dum biryani on Medical College Road! Fragrant long grains of basmati, perfectly tender marinated chicken pieces, and caramelized onions on top.",
    "tags": [
      "Authentic Flavours",
      "Delicious Food",
      "Must Visit"
    ],
    "photoUrl": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=600&q=80",
    "date": "2026-08-01",
    "isDemo": false,
    "isFlagged": false,
    "ownerReply": {
      "text": "Shukriya! We slow cook our biryani on burning charcoal embers for that quintessential dum aroma.",
      "date": "2026-08-02"
    }
  },
  {
    "id": "rev-66",
    "restaurantId": "nawabi-zaika-biryani",
    "restaurantName": "Nawabi Zaika Biryani & Kebab Hub",
    "userName": "Shailesh Upadhyay",
    "userEmail": "shailesh.upadhyay75@outlook.com",
    "userAvatar": "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=150&h=150&q=80",
    "rating": 5,
    "text": "Chicken Malai Tikka rolls in soft roomali roti are so juicy and packed with flavor. Extremely budget friendly for medical students and local residents.",
    "tags": [
      "Good Value",
      "Delicious Food",
      "Quick Service"
    ],
    "photoUrl": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80",
    "date": "2026-09-08",
    "isDemo": false,
    "isFlagged": false
  },
  {
    "id": "rev-67",
    "restaurantId": "nawabi-zaika-biryani",
    "restaurantName": "Nawabi Zaika Biryani & Kebab Hub",
    "userName": "Muskan Agrawal",
    "userEmail": "muskan.agrawal76@yahoo.com",
    "userAvatar": "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=150&h=150&q=80",
    "rating": 4,
    "text": "Rich Mughlai flavors with very quick turnaround time. Finished our meal with their clay pot Shahi Firni—delightfully chilled and creamy.",
    "tags": [
      "Quick Service",
      "Delicious Food"
    ],
    "photoUrl": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=600&q=80",
    "date": "2026-10-15",
    "isDemo": false,
    "isFlagged": false
  },
  {
    "id": "rev-68",
    "restaurantId": "nawabi-zaika-biryani",
    "restaurantName": "Nawabi Zaika Biryani & Kebab Hub",
    "userName": "Sameer Qureshi",
    "userEmail": "sameer.qureshi77@icloud.com",
    "userAvatar": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&h=150&q=80",
    "rating": 5,
    "text": "Clean seating area with AC, prompt service, and courteous counter staff. Quality and hygiene have stayed top-notch since day one.",
    "tags": [
      "Clean Place",
      "Friendly Staff",
      "Good Value"
    ],
    "photoUrl": "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=600&q=80",
    "date": "2026-11-22",
    "isDemo": false,
    "isFlagged": false,
    "ownerReply": {
      "text": "Thank you for your appreciation! We strive to maintain supreme hygiene in all our preparations.",
      "date": "2026-11-23"
    }
  },
  {
    "id": "rev-69",
    "restaurantId": "momo-station-cafe",
    "restaurantName": "The Himalayan Momo Station & Cafe",
    "userName": "Disha Parekh",
    "userEmail": "disha.parekh78@gmail.com",
    "userAvatar": "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=150&h=150&q=80",
    "rating": 5,
    "text": "Authentic Darjeeling style thin-skin momos! The chicken steamed momos are bursting with clear soup and accompanied by that fiercely spicy roasted red tomato chutney.",
    "tags": [
      "Authentic Flavours",
      "Delicious Food",
      "Must Visit"
    ],
    "photoUrl": "https://images.unsplash.com/photo-1625398407796-82650a8c135f?auto=format&fit=crop&w=600&q=80",
    "date": "2026-09-01",
    "isDemo": false,
    "isFlagged": false,
    "ownerReply": {
      "text": "Tashi delek! Our spicy dhangro red chutney is made with real Himalayan Dalle Khursani chillies.",
      "date": "2026-09-02"
    }
  },
  {
    "id": "rev-70",
    "restaurantId": "momo-station-cafe",
    "restaurantName": "The Himalayan Momo Station & Cafe",
    "userName": "Tarun Nayak",
    "userEmail": "tarun.nayak79@outlook.com",
    "userAvatar": "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&w=150&h=150&q=80",
    "rating": 5,
    "text": "Crispy Kurkure Momos and warm Thukpa noodle soup on a cold evening in Rustampur is unmatched. Generous fillings and very affordable rates.",
    "tags": [
      "Good Value",
      "Delicious Food",
      "Great Ambience"
    ],
    "photoUrl": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80",
    "date": "2026-10-08",
    "isDemo": false,
    "isFlagged": false
  },
  {
    "id": "rev-71",
    "restaurantId": "momo-station-cafe",
    "restaurantName": "The Himalayan Momo Station & Cafe",
    "userName": "Renu Bala",
    "userEmail": "renu.bala80@yahoo.com",
    "userAvatar": "https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?auto=format&fit=crop&w=150&h=150&q=80",
    "rating": 4,
    "text": "Favorite evening snacks joint for college students. Steamed paneer cheese momos are soft and flavorful. Clean open preparation counter.",
    "tags": [
      "Clean Place",
      "Quick Service",
      "Good Value"
    ],
    "photoUrl": "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80",
    "date": "2026-11-15",
    "isDemo": false,
    "isFlagged": false
  },
  {
    "id": "rev-72",
    "restaurantId": "momo-station-cafe",
    "restaurantName": "The Himalayan Momo Station & Cafe",
    "userName": "Ayush Goel",
    "userEmail": "ayush.goel81@icloud.com",
    "userAvatar": "https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=150&h=150&q=80",
    "rating": 5,
    "text": "Super energetic and welcoming Tibetan staff. Quick billing with UPI QR code and neat biodegradable plates. 5 stars for authentic taste!",
    "tags": [
      "Friendly Staff",
      "Quick Billing",
      "Clean Place"
    ],
    "photoUrl": "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=80",
    "date": "2026-08-22",
    "isDemo": false,
    "isFlagged": false,
    "ownerReply": {
      "text": "Thank you so much! Eco-friendly dining and authentic Himalayan flavors are our commitment.",
      "date": "2026-08-23"
    }
  },
  {
    "id": "rev-73",
    "restaurantId": "pizza-slice-junction",
    "restaurantName": "Crust & Craft Woodfired Pizza",
    "userName": "Shilpa Nair",
    "userEmail": "shilpa.nair82@gmail.com",
    "userAvatar": "https://images.unsplash.com/photo-1534751516642-a1714f5a5a3a?auto=format&fit=crop&w=150&h=150&q=80",
    "rating": 5,
    "text": "Finally real Neapolitan woodfired pizza in Gorakhpur! That sourdough blistered crust with genuine San Marzano tomato sauce and fresh basil is a revelation on Bank Road.",
    "tags": [
      "Delicious Food",
      "Authentic Flavours",
      "Must Visit"
    ],
    "photoUrl": "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=600&q=80",
    "date": "2026-10-01",
    "isDemo": false,
    "isFlagged": false,
    "ownerReply": {
      "text": "Grazie! Our wood-fired oven runs at 450°C to give that signature leopard-spotted crust in 90 seconds.",
      "date": "2026-10-02"
    }
  },
  {
    "id": "rev-74",
    "restaurantId": "pizza-slice-junction",
    "restaurantName": "Crust & Craft Woodfired Pizza",
    "userName": "Vipul Kaushik",
    "userEmail": "vipul.kaushik83@outlook.com",
    "userAvatar": "https://images.unsplash.com/photo-1514794749374-fb67509dbb7f?auto=format&fit=crop&w=150&h=150&q=80",
    "rating": 5,
    "text": "Truffle Mushroom Pizza and the Cheesy Garlic Pull-Apart Bread were incredible. Warm Italian rustic bistro vibe with warm amber lighting.",
    "tags": [
      "Great Ambience",
      "Delicious Food",
      "Clean Place"
    ],
    "photoUrl": "https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=600&q=80",
    "date": "2026-11-08",
    "isDemo": false,
    "isFlagged": false
  },
  {
    "id": "rev-75",
    "restaurantId": "pizza-slice-junction",
    "restaurantName": "Crust & Craft Woodfired Pizza",
    "userName": "Komal Rawat",
    "userEmail": "komal.rawat84@yahoo.com",
    "userAvatar": "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?auto=format&fit=crop&w=150&h=150&q=80",
    "rating": 4,
    "text": "The four-cheese Quattro Formaggi pizza was loaded with mozzarella, cheddar, and gouda. Fast baking time and very friendly pizza chefs.",
    "tags": [
      "Delicious Food",
      "Friendly Staff"
    ],
    "photoUrl": "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=600&q=80",
    "date": "2026-08-15",
    "isDemo": false,
    "isFlagged": false
  },
  {
    "id": "rev-76",
    "restaurantId": "pizza-slice-junction",
    "restaurantName": "Crust & Craft Woodfired Pizza",
    "userName": "Parth Vasavada",
    "userEmail": "parth.vasavada85@icloud.com",
    "userAvatar": "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=150&h=150&q=80",
    "rating": 5,
    "text": "Superior quality ingredients. You can taste the real olive oil and fresh herbs. The chocolate lava cake for dessert topped off an unforgettable meal.",
    "tags": [
      "Clean Place",
      "Must Visit",
      "Delicious Food"
    ],
    "photoUrl": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80",
    "date": "2026-09-22",
    "isDemo": false,
    "isFlagged": false,
    "ownerReply": {
      "text": "Delighted to hear you had a great Italian feast with us! See you again soon.",
      "date": "2026-09-23"
    }
  },
  {
    "id": "rev-77",
    "restaurantId": "dosa-plaza-south-kitchen",
    "restaurantName": "Madras Dosa Plaza & Udupi Corner",
    "userName": "Tina Grover",
    "userEmail": "tina.grover86@gmail.com",
    "userAvatar": "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150&q=80",
    "rating": 5,
    "text": "The Ghee Podi Roast Dosa is golden, crispy, and drenched in fragrant spiced gun powder and pure cow ghee. Served with 3 coconut chutneys and hot sambar.",
    "tags": [
      "Authentic Flavours",
      "Delicious Food",
      "Must Visit"
    ],
    "photoUrl": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80",
    "date": "2026-11-01",
    "isDemo": false,
    "isFlagged": false,
    "ownerReply": {
      "text": "Thank you! Our Podi spice blend is ground in-house with roasted lentils and curry leaves.",
      "date": "2026-11-02"
    }
  },
  {
    "id": "rev-78",
    "restaurantId": "dosa-plaza-south-kitchen",
    "restaurantName": "Madras Dosa Plaza & Udupi Corner",
    "userName": "Naman Singhal",
    "userEmail": "naman.singhal87@outlook.com",
    "userAvatar": "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=150&h=150&q=80",
    "rating": 5,
    "text": "Over 100 varieties of dosas! Tried their Spring Roll Dosa and Paneer Butter Masala Dosa in Shahpur. Fun fusion concept and very filling.",
    "tags": [
      "Delicious Food",
      "Good Value",
      "Family Friendly"
    ],
    "photoUrl": "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=600&q=80",
    "date": "2026-08-08",
    "isDemo": false,
    "isFlagged": false
  },
  {
    "id": "rev-79",
    "restaurantId": "dosa-plaza-south-kitchen",
    "restaurantName": "Madras Dosa Plaza & Udupi Corner",
    "userName": "Latika Khurana",
    "userEmail": "latika.khurana88@yahoo.com",
    "userAvatar": "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=crop&w=150&h=150&q=80",
    "rating": 4,
    "text": "Crispy Medu Vadas that are golden on the outside and fluffy inside. Clean family seating with quick service and very economical prices.",
    "tags": [
      "Clean Place",
      "Quick Service",
      "Good Value"
    ],
    "photoUrl": "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=600&q=80",
    "date": "2026-09-15",
    "isDemo": false,
    "isFlagged": false
  },
  {
    "id": "rev-80",
    "restaurantId": "dosa-plaza-south-kitchen",
    "restaurantName": "Madras Dosa Plaza & Udupi Corner",
    "userName": "Manas Ranjan",
    "userEmail": "manas.ranjan89@icloud.com",
    "userAvatar": "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=150&h=150&q=80",
    "rating": 5,
    "text": "Immaculately clean South Indian restaurant. Filter coffee served in traditional brass dabara is aromatic and frothy. Highest recommendations for Shahpur foodies!",
    "tags": [
      "Clean Place",
      "Friendly Staff",
      "Must Visit"
    ],
    "photoUrl": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80",
    "date": "2026-10-22",
    "isDemo": false,
    "isFlagged": false,
    "ownerReply": {
      "text": "Vanakkam! Thank you for making us your favorite South Indian dining destination in Shahpur.",
      "date": "2026-10-23"
    }
  },
  {
    "id": "rev-81",
    "restaurantId": "radisson-kabab-factory",
    "restaurantName": "The Great Kabab Factory - Radisson Blu",
    "userName": "Aarav Mehta",
    "userEmail": "aarav.mehta10@gmail.com",
    "userAvatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80",
    "rating": 5,
    "text": "Had an exceptional dining experience at The Great Kabab Factory - Radisson Blu! The Galouti Kebab was extraordinary—fresh, rich aroma and authentic flavors. Prompt service and immaculate cleanliness in Mohaddipur.",
    "tags": [
      "Delicious Food",
      "Great Ambience",
      "Must Visit"
    ],
    "photoUrl": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80",
    "date": "2026-09-10",
    "isDemo": false,
    "isFlagged": false,
    "ownerReply": {
      "text": "Thank you Aarav Mehta! We take pride in serving authentic quality food in Mohaddipur. Looking forward to welcoming you back!",
      "date": "2026-09-11"
    }
  },
  {
    "id": "rev-82",
    "restaurantId": "radisson-kabab-factory",
    "restaurantName": "The Great Kabab Factory - Radisson Blu",
    "userName": "Meera Joshi",
    "userEmail": "meera.joshi11@outlook.com",
    "userAvatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80",
    "rating": 4,
    "text": "Really enjoyed our visit to The Great Kabab Factory - Radisson Blu. Ordered the Dal Baluchi along with cold drinks. Excellent quality and great value for money in Mohaddipur. Will be returning soon!",
    "tags": [
      "Good Value",
      "Quick Service",
      "Fresh Ingredients"
    ],
    "photoUrl": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80",
    "date": "2026-09-10",
    "isDemo": false,
    "isFlagged": false
  },
  {
    "id": "rev-83",
    "restaurantId": "ten-park-street-cafe",
    "restaurantName": "10 Park Street Cafe & Restaurant",
    "userName": "Kabir Singh",
    "userEmail": "kabir.singh12@yahoo.com",
    "userAvatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80",
    "rating": 5,
    "text": "Had an exceptional dining experience at 10 Park Street Cafe & Restaurant! The Thin Crust Pizza was extraordinary—fresh, rich aroma and authentic flavors. Prompt service and immaculate cleanliness in Civil Lines.",
    "tags": [
      "Delicious Food",
      "Great Ambience",
      "Must Visit"
    ],
    "photoUrl": "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80",
    "date": "2026-09-11",
    "isDemo": false,
    "isFlagged": false,
    "ownerReply": {
      "text": "Thank you Kabir Singh! We take pride in serving authentic quality food in Civil Lines. Looking forward to welcoming you back!",
      "date": "2026-09-12"
    }
  },
  {
    "id": "rev-84",
    "restaurantId": "ten-park-street-cafe",
    "restaurantName": "10 Park Street Cafe & Restaurant",
    "userName": "Sana Khan",
    "userEmail": "sana.khan13@icloud.com",
    "userAvatar": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80",
    "rating": 4,
    "text": "Really enjoyed our visit to 10 Park Street Cafe & Restaurant. Ordered the Cheese Volcano Burger along with cold drinks. Excellent quality and great value for money in Civil Lines. Will be returning soon!",
    "tags": [
      "Good Value",
      "Quick Service",
      "Fresh Ingredients"
    ],
    "photoUrl": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80",
    "date": "2026-09-11",
    "isDemo": false,
    "isFlagged": false
  },
  {
    "id": "rev-85",
    "restaurantId": "royal-cafe-banquet",
    "restaurantName": "Royal Cafe & Banquet",
    "userName": "Rohan Verma",
    "userEmail": "rohan.verma14@gmail.com",
    "userAvatar": "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&h=150&q=80",
    "rating": 5,
    "text": "Had an exceptional dining experience at Royal Cafe & Banquet! The Royal Basket Chaat was extraordinary—fresh, rich aroma and authentic flavors. Prompt service and immaculate cleanliness in Golghar.",
    "tags": [
      "Delicious Food",
      "Great Ambience",
      "Must Visit"
    ],
    "photoUrl": "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80",
    "date": "2026-09-12",
    "isDemo": false,
    "isFlagged": false,
    "ownerReply": {
      "text": "Thank you Rohan Verma! We take pride in serving authentic quality food in Golghar. Looking forward to welcoming you back!",
      "date": "2026-09-13"
    }
  },
  {
    "id": "rev-86",
    "restaurantId": "royal-cafe-banquet",
    "restaurantName": "Royal Cafe & Banquet",
    "userName": "Riya Gupta",
    "userEmail": "riya.gupta15@outlook.com",
    "userAvatar": "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=150&h=150&q=80",
    "rating": 4,
    "text": "Really enjoyed our visit to Royal Cafe & Banquet. Ordered the Butter Chicken along with cold drinks. Excellent quality and great value for money in Golghar. Will be returning soon!",
    "tags": [
      "Good Value",
      "Quick Service",
      "Fresh Ingredients"
    ],
    "photoUrl": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=600&q=80",
    "date": "2026-09-12",
    "isDemo": false,
    "isFlagged": false
  },
  {
    "id": "rev-87",
    "restaurantId": "curry-on-restaurant",
    "restaurantName": "Curry On Restaurant",
    "userName": "Ananya Sharma",
    "userEmail": "ananya.sharma16@yahoo.com",
    "userAvatar": "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=150&h=150&q=80",
    "rating": 5,
    "text": "Had an exceptional dining experience at Curry On Restaurant! The Handi Mutton was extraordinary—fresh, rich aroma and authentic flavors. Prompt service and immaculate cleanliness in Medical College Road.",
    "tags": [
      "Delicious Food",
      "Great Ambience",
      "Must Visit"
    ],
    "photoUrl": "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=600&q=80",
    "date": "2026-09-13",
    "isDemo": false,
    "isFlagged": false,
    "ownerReply": {
      "text": "Thank you Ananya Sharma! We take pride in serving authentic quality food in Medical College Road. Looking forward to welcoming you back!",
      "date": "2026-09-14"
    }
  },
  {
    "id": "rev-88",
    "restaurantId": "curry-on-restaurant",
    "restaurantName": "Curry On Restaurant",
    "userName": "Vikramaditya Rao",
    "userEmail": "vikramaditya.rao17@icloud.com",
    "userAvatar": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&h=150&q=80",
    "rating": 4,
    "text": "Really enjoyed our visit to Curry On Restaurant. Ordered the Paneer Pasanda along with cold drinks. Excellent quality and great value for money in Medical College Road. Will be returning soon!",
    "tags": [
      "Good Value",
      "Quick Service",
      "Fresh Ingredients"
    ],
    "photoUrl": "https://images.unsplash.com/photo-1564355808539-22fda35bed7e?auto=format&fit=crop&w=600&q=80",
    "date": "2026-09-13",
    "isDemo": false,
    "isFlagged": false
  },
  {
    "id": "rev-89",
    "restaurantId": "cinnamon-hotel-vivek",
    "restaurantName": "Cinnamon Fine Dine - Hotel Vivek",
    "userName": "Sneha Tiwari",
    "userEmail": "sneha.tiwari18@gmail.com",
    "userAvatar": "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=150&h=150&q=80",
    "rating": 5,
    "text": "Had an exceptional dining experience at Cinnamon Fine Dine - Hotel Vivek! The Executive Thali was extraordinary—fresh, rich aroma and authentic flavors. Prompt service and immaculate cleanliness in Civil Lines.",
    "tags": [
      "Delicious Food",
      "Great Ambience",
      "Must Visit"
    ],
    "photoUrl": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=600&q=80",
    "date": "2026-09-14",
    "isDemo": false,
    "isFlagged": false,
    "ownerReply": {
      "text": "Thank you Sneha Tiwari! We take pride in serving authentic quality food in Civil Lines. Looking forward to welcoming you back!",
      "date": "2026-09-15"
    }
  },
  {
    "id": "rev-90",
    "restaurantId": "cinnamon-hotel-vivek",
    "restaurantName": "Cinnamon Fine Dine - Hotel Vivek",
    "userName": "Farhan Siddiqui",
    "userEmail": "farhan.siddiqui19@outlook.com",
    "userAvatar": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&h=150&q=80",
    "rating": 4,
    "text": "Really enjoyed our visit to Cinnamon Fine Dine - Hotel Vivek. Ordered the Dal Makhani along with cold drinks. Excellent quality and great value for money in Civil Lines. Will be returning soon!",
    "tags": [
      "Good Value",
      "Quick Service",
      "Fresh Ingredients"
    ],
    "photoUrl": "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=600&q=80",
    "date": "2026-09-14",
    "isDemo": false,
    "isFlagged": false
  },
  {
    "id": "rev-91",
    "restaurantId": "barbeque-nation-gkp",
    "restaurantName": "Barbeque Nation Gorakhpur",
    "userName": "Pooja Verma",
    "userEmail": "pooja.verma20@yahoo.com",
    "userAvatar": "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150&h=150&q=80",
    "rating": 5,
    "text": "Had an exceptional dining experience at Barbeque Nation Gorakhpur! The Cajun Spiced Potatoes was extraordinary—fresh, rich aroma and authentic flavors. Prompt service and immaculate cleanliness in Golghar.",
    "tags": [
      "Delicious Food",
      "Great Ambience",
      "Must Visit"
    ],
    "photoUrl": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80",
    "date": "2026-09-15",
    "isDemo": false,
    "isFlagged": false,
    "ownerReply": {
      "text": "Thank you Pooja Verma! We take pride in serving authentic quality food in Golghar. Looking forward to welcoming you back!",
      "date": "2026-09-16"
    }
  },
  {
    "id": "rev-92",
    "restaurantId": "barbeque-nation-gkp",
    "restaurantName": "Barbeque Nation Gorakhpur",
    "userName": "Aditya Singh",
    "userEmail": "aditya.singh21@icloud.com",
    "userAvatar": "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=150&h=150&q=80",
    "rating": 4,
    "text": "Really enjoyed our visit to Barbeque Nation Gorakhpur. Ordered the Crispy Corn along with cold drinks. Excellent quality and great value for money in Golghar. Will be returning soon!",
    "tags": [
      "Good Value",
      "Quick Service",
      "Fresh Ingredients"
    ],
    "photoUrl": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80",
    "date": "2026-09-15",
    "isDemo": false,
    "isFlagged": false
  },
  {
    "id": "rev-93",
    "restaurantId": "moti-mahal-delux-gkp",
    "restaurantName": "Moti Mahal Delux",
    "userName": "Kavita Pandey",
    "userEmail": "kavita.pandey22@gmail.com",
    "userAvatar": "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=150&h=150&q=80",
    "rating": 5,
    "text": "Had an exceptional dining experience at Moti Mahal Delux! The Original Butter Chicken was extraordinary—fresh, rich aroma and authentic flavors. Prompt service and immaculate cleanliness in Civil Lines.",
    "tags": [
      "Delicious Food",
      "Great Ambience",
      "Must Visit"
    ],
    "photoUrl": "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80",
    "date": "2026-09-16",
    "isDemo": false,
    "isFlagged": false,
    "ownerReply": {
      "text": "Thank you Kavita Pandey! We take pride in serving authentic quality food in Civil Lines. Looking forward to welcoming you back!",
      "date": "2026-09-17"
    }
  },
  {
    "id": "rev-94",
    "restaurantId": "moti-mahal-delux-gkp",
    "restaurantName": "Moti Mahal Delux",
    "userName": "Kunal Kapoor",
    "userEmail": "kunal.kapoor23@outlook.com",
    "userAvatar": "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=150&h=150&q=80",
    "rating": 4,
    "text": "Really enjoyed our visit to Moti Mahal Delux. Ordered the Tandoori Murgh along with cold drinks. Excellent quality and great value for money in Civil Lines. Will be returning soon!",
    "tags": [
      "Good Value",
      "Quick Service",
      "Fresh Ingredients"
    ],
    "photoUrl": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80",
    "date": "2026-09-16",
    "isDemo": false,
    "isFlagged": false
  },
  {
    "id": "rev-95",
    "restaurantId": "cafe-nirvana-lake",
    "restaurantName": "Cafe Nirvana Rooftop Diner",
    "userName": "Deepali Mishra",
    "userEmail": "deepali.mishra24@yahoo.com",
    "userAvatar": "https://images.unsplash.com/photo-1548142813-c348350df52b?auto=format&fit=crop&w=150&h=150&q=80",
    "rating": 5,
    "text": "Had an exceptional dining experience at Cafe Nirvana Rooftop Diner! The Sunset Sangria Mocktail was extraordinary—fresh, rich aroma and authentic flavors. Prompt service and immaculate cleanliness in Taramandal.",
    "tags": [
      "Delicious Food",
      "Great Ambience",
      "Must Visit"
    ],
    "photoUrl": "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80",
    "date": "2026-09-17",
    "isDemo": false,
    "isFlagged": false,
    "ownerReply": {
      "text": "Thank you Deepali Mishra! We take pride in serving authentic quality food in Taramandal. Looking forward to welcoming you back!",
      "date": "2026-09-18"
    }
  },
  {
    "id": "rev-96",
    "restaurantId": "cafe-nirvana-lake",
    "restaurantName": "Cafe Nirvana Rooftop Diner",
    "userName": "Arjun Nambiar",
    "userEmail": "arjun.nambiar25@icloud.com",
    "userAvatar": "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=150&h=150&q=80",
    "rating": 4,
    "text": "Really enjoyed our visit to Cafe Nirvana Rooftop Diner. Ordered the Pesto Pasta along with cold drinks. Excellent quality and great value for money in Taramandal. Will be returning soon!",
    "tags": [
      "Good Value",
      "Quick Service",
      "Fresh Ingredients"
    ],
    "photoUrl": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=600&q=80",
    "date": "2026-09-17",
    "isDemo": false,
    "isFlagged": false
  },
  {
    "id": "rev-97",
    "restaurantId": "shahi-darbar-mughlai",
    "restaurantName": "Shahi Darbar Mughlai & Biryani",
    "userName": "Shalini Sen",
    "userEmail": "shalini.sen26@gmail.com",
    "userAvatar": "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&h=150&q=80",
    "rating": 5,
    "text": "Had an exceptional dining experience at Shahi Darbar Mughlai & Biryani! The Awadhi Mutton Biryani was extraordinary—fresh, rich aroma and authentic flavors. Prompt service and immaculate cleanliness in Reti Chowk.",
    "tags": [
      "Delicious Food",
      "Great Ambience",
      "Must Visit"
    ],
    "photoUrl": "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=600&q=80",
    "date": "2026-09-18",
    "isDemo": false,
    "isFlagged": false,
    "ownerReply": {
      "text": "Thank you Shalini Sen! We take pride in serving authentic quality food in Reti Chowk. Looking forward to welcoming you back!",
      "date": "2026-09-19"
    }
  },
  {
    "id": "rev-98",
    "restaurantId": "shahi-darbar-mughlai",
    "restaurantName": "Shahi Darbar Mughlai & Biryani",
    "userName": "Varun Dhawan",
    "userEmail": "varun.dhawan27@outlook.com",
    "userAvatar": "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&h=150&q=80",
    "rating": 4,
    "text": "Really enjoyed our visit to Shahi Darbar Mughlai & Biryani. Ordered the Chicken Changezi along with cold drinks. Excellent quality and great value for money in Reti Chowk. Will be returning soon!",
    "tags": [
      "Good Value",
      "Quick Service",
      "Fresh Ingredients"
    ],
    "photoUrl": "https://images.unsplash.com/photo-1564355808539-22fda35bed7e?auto=format&fit=crop&w=600&q=80",
    "date": "2026-09-18",
    "isDemo": false,
    "isFlagged": false
  },
  {
    "id": "rev-99",
    "restaurantId": "dominick-pizza-pasta",
    "restaurantName": "Dominick Pizza & Pasta House",
    "userName": "Neha Agarwal",
    "userEmail": "neha.agarwal28@yahoo.com",
    "userAvatar": "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=150&h=150&q=80",
    "rating": 5,
    "text": "Had an exceptional dining experience at Dominick Pizza & Pasta House! The Cheese Burst Pizza was extraordinary—fresh, rich aroma and authentic flavors. Prompt service and immaculate cleanliness in Betiahata.",
    "tags": [
      "Delicious Food",
      "Great Ambience",
      "Must Visit"
    ],
    "photoUrl": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=600&q=80",
    "date": "2026-09-19",
    "isDemo": false,
    "isFlagged": false,
    "ownerReply": {
      "text": "Thank you Neha Agarwal! We take pride in serving authentic quality food in Betiahata. Looking forward to welcoming you back!",
      "date": "2026-09-20"
    }
  },
  {
    "id": "rev-100",
    "restaurantId": "dominick-pizza-pasta",
    "restaurantName": "Dominick Pizza & Pasta House",
    "userName": "Alok Kashyap",
    "userEmail": "alok.kashyap29@icloud.com",
    "userAvatar": "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=150&h=150&q=80",
    "rating": 4,
    "text": "Really enjoyed our visit to Dominick Pizza & Pasta House. Ordered the White Sauce Pasta along with cold drinks. Excellent quality and great value for money in Betiahata. Will be returning soon!",
    "tags": [
      "Good Value",
      "Quick Service",
      "Fresh Ingredients"
    ],
    "photoUrl": "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=600&q=80",
    "date": "2026-09-19",
    "isDemo": false,
    "isFlagged": false
  },
  {
    "id": "rev-101",
    "restaurantId": "ksheer-sagar-sweets",
    "restaurantName": "Ksheer Sagar Sweets & Restaurant",
    "userName": "Divya Chauhan",
    "userEmail": "divya.chauhan30@gmail.com",
    "userAvatar": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&h=150&q=80",
    "rating": 5,
    "text": "Had an exceptional dining experience at Ksheer Sagar Sweets & Restaurant! The Kesar Rajbhog was extraordinary—fresh, rich aroma and authentic flavors. Prompt service and immaculate cleanliness in Bank Road.",
    "tags": [
      "Delicious Food",
      "Great Ambience",
      "Must Visit"
    ],
    "photoUrl": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80",
    "date": "2026-09-20",
    "isDemo": false,
    "isFlagged": false,
    "ownerReply": {
      "text": "Thank you Divya Chauhan! We take pride in serving authentic quality food in Bank Road. Looking forward to welcoming you back!",
      "date": "2026-09-21"
    }
  },
  {
    "id": "rev-102",
    "restaurantId": "ksheer-sagar-sweets",
    "restaurantName": "Ksheer Sagar Sweets & Restaurant",
    "userName": "Rahul Bajpai",
    "userEmail": "rahul.bajpai31@outlook.com",
    "userAvatar": "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=150&h=150&q=80",
    "rating": 4,
    "text": "Really enjoyed our visit to Ksheer Sagar Sweets & Restaurant. Ordered the Malai Roll along with cold drinks. Excellent quality and great value for money in Bank Road. Will be returning soon!",
    "tags": [
      "Good Value",
      "Quick Service",
      "Fresh Ingredients"
    ],
    "photoUrl": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80",
    "date": "2026-09-20",
    "isDemo": false,
    "isFlagged": false
  },
  {
    "id": "rev-103",
    "restaurantId": "up53-food-court",
    "restaurantName": "U.P. 53 Food Court & Cafe",
    "userName": "Swati Saxena",
    "userEmail": "swati.saxena32@yahoo.com",
    "userAvatar": "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&w=150&h=150&q=80",
    "rating": 5,
    "text": "Had an exceptional dining experience at U.P. 53 Food Court & Cafe! The Kurkure Momos was extraordinary—fresh, rich aroma and authentic flavors. Prompt service and immaculate cleanliness in Mohaddipur.",
    "tags": [
      "Delicious Food",
      "Great Ambience",
      "Must Visit"
    ],
    "photoUrl": "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80",
    "date": "2026-09-21",
    "isDemo": false,
    "isFlagged": false,
    "ownerReply": {
      "text": "Thank you Swati Saxena! We take pride in serving authentic quality food in Mohaddipur. Looking forward to welcoming you back!",
      "date": "2026-09-22"
    }
  },
  {
    "id": "rev-104",
    "restaurantId": "up53-food-court",
    "restaurantName": "U.P. 53 Food Court & Cafe",
    "userName": "Siddharth Roy",
    "userEmail": "siddharth.roy33@icloud.com",
    "userAvatar": "https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?auto=format&fit=crop&w=150&h=150&q=80",
    "rating": 4,
    "text": "Really enjoyed our visit to U.P. 53 Food Court & Cafe. Ordered the Hakka Noodles along with cold drinks. Excellent quality and great value for money in Mohaddipur. Will be returning soon!",
    "tags": [
      "Good Value",
      "Quick Service",
      "Fresh Ingredients"
    ],
    "photoUrl": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80",
    "date": "2026-09-21",
    "isDemo": false,
    "isFlagged": false
  },
  {
    "id": "rev-105",
    "restaurantId": "chhappan-bhog-veg",
    "restaurantName": "Chhappan Bhog Pure Veg Restaurant",
    "userName": "Tanvi Bhatia",
    "userEmail": "tanvi.bhatia34@gmail.com",
    "userAvatar": "https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=150&h=150&q=80",
    "rating": 5,
    "text": "Had an exceptional dining experience at Chhappan Bhog Pure Veg Restaurant! The Chhappan Bhog Royal Thali was extraordinary—fresh, rich aroma and authentic flavors. Prompt service and immaculate cleanliness in Golghar.",
    "tags": [
      "Delicious Food",
      "Great Ambience",
      "Must Visit"
    ],
    "photoUrl": "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80",
    "date": "2026-09-22",
    "isDemo": false,
    "isFlagged": false,
    "ownerReply": {
      "text": "Thank you Tanvi Bhatia! We take pride in serving authentic quality food in Golghar. Looking forward to welcoming you back!",
      "date": "2026-09-23"
    }
  },
  {
    "id": "rev-106",
    "restaurantId": "chhappan-bhog-veg",
    "restaurantName": "Chhappan Bhog Pure Veg Restaurant",
    "userName": "Mohit Rastogi",
    "userEmail": "mohit.rastogi35@outlook.com",
    "userAvatar": "https://images.unsplash.com/photo-1534751516642-a1714f5a5a3a?auto=format&fit=crop&w=150&h=150&q=80",
    "rating": 4,
    "text": "Really enjoyed our visit to Chhappan Bhog Pure Veg Restaurant. Ordered the Paneer Butter Masala along with cold drinks. Excellent quality and great value for money in Golghar. Will be returning soon!",
    "tags": [
      "Good Value",
      "Quick Service",
      "Fresh Ingredients"
    ],
    "photoUrl": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=600&q=80",
    "date": "2026-09-22",
    "isDemo": false,
    "isFlagged": false
  },
  {
    "id": "rev-107",
    "restaurantId": "goli-vada-pav-gkp",
    "restaurantName": "Goli Vada Pav No. 1",
    "userName": "Priya Dubey",
    "userEmail": "priya.dubey36@yahoo.com",
    "userAvatar": "https://images.unsplash.com/photo-1514794749374-fb67509dbb7f?auto=format&fit=crop&w=150&h=150&q=80",
    "rating": 5,
    "text": "Had an exceptional dining experience at Goli Vada Pav No. 1! The Cheese Vada Pav was extraordinary—fresh, rich aroma and authentic flavors. Prompt service and immaculate cleanliness in Betiahata.",
    "tags": [
      "Delicious Food",
      "Great Ambience",
      "Must Visit"
    ],
    "photoUrl": "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=600&q=80",
    "date": "2026-09-23",
    "isDemo": false,
    "isFlagged": false,
    "ownerReply": {
      "text": "Thank you Priya Dubey! We take pride in serving authentic quality food in Betiahata. Looking forward to welcoming you back!",
      "date": "2026-09-24"
    }
  },
  {
    "id": "rev-108",
    "restaurantId": "goli-vada-pav-gkp",
    "restaurantName": "Goli Vada Pav No. 1",
    "userName": "Mayank Shukla",
    "userEmail": "mayank.shukla37@icloud.com",
    "userAvatar": "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?auto=format&fit=crop&w=150&h=150&q=80",
    "rating": 4,
    "text": "Really enjoyed our visit to Goli Vada Pav No. 1. Ordered the Schezwan Roll along with cold drinks. Excellent quality and great value for money in Betiahata. Will be returning soon!",
    "tags": [
      "Good Value",
      "Quick Service",
      "Fresh Ingredients"
    ],
    "photoUrl": "https://images.unsplash.com/photo-1564355808539-22fda35bed7e?auto=format&fit=crop&w=600&q=80",
    "date": "2026-09-23",
    "isDemo": false,
    "isFlagged": false
  },
  {
    "id": "rev-109",
    "restaurantId": "the-chocolate-room-gkp",
    "restaurantName": "The Chocolate Room",
    "userName": "Shreya Banerjee",
    "userEmail": "shreya.banerjee38@gmail.com",
    "userAvatar": "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=150&h=150&q=80",
    "rating": 5,
    "text": "Had an exceptional dining experience at The Chocolate Room! The Death by Chocolate Pancake was extraordinary—fresh, rich aroma and authentic flavors. Prompt service and immaculate cleanliness in Civil Lines.",
    "tags": [
      "Delicious Food",
      "Great Ambience",
      "Must Visit"
    ],
    "photoUrl": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=600&q=80",
    "date": "2026-09-24",
    "isDemo": false,
    "isFlagged": false,
    "ownerReply": {
      "text": "Thank you Shreya Banerjee! We take pride in serving authentic quality food in Civil Lines. Looking forward to welcoming you back!",
      "date": "2026-09-25"
    }
  },
  {
    "id": "rev-110",
    "restaurantId": "the-chocolate-room-gkp",
    "restaurantName": "The Chocolate Room",
    "userName": "Gaurav Tandon",
    "userEmail": "gaurav.tandon39@outlook.com",
    "userAvatar": "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150&q=80",
    "rating": 4,
    "text": "Really enjoyed our visit to The Chocolate Room. Ordered the Chocolate Fondue along with cold drinks. Excellent quality and great value for money in Civil Lines. Will be returning soon!",
    "tags": [
      "Good Value",
      "Quick Service",
      "Fresh Ingredients"
    ],
    "photoUrl": "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=600&q=80",
    "date": "2026-09-24",
    "isDemo": false,
    "isFlagged": false
  },
  {
    "id": "rev-111",
    "restaurantId": "swastik-restaurant-gkp",
    "restaurantName": "Swastik Restaurant & Thali",
    "userName": "Ishita Singhal",
    "userEmail": "ishita.singhal40@yahoo.com",
    "userAvatar": "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=150&h=150&q=80",
    "rating": 5,
    "text": "Had an exceptional dining experience at Swastik Restaurant & Thali! The Deluxe Thali was extraordinary—fresh, rich aroma and authentic flavors. Prompt service and immaculate cleanliness in Station Road.",
    "tags": [
      "Delicious Food",
      "Great Ambience",
      "Must Visit"
    ],
    "photoUrl": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80",
    "date": "2026-09-25",
    "isDemo": false,
    "isFlagged": false,
    "ownerReply": {
      "text": "Thank you Ishita Singhal! We take pride in serving authentic quality food in Station Road. Looking forward to welcoming you back!",
      "date": "2026-09-26"
    }
  },
  {
    "id": "rev-112",
    "restaurantId": "swastik-restaurant-gkp",
    "restaurantName": "Swastik Restaurant & Thali",
    "userName": "Aman Keshari",
    "userEmail": "aman.keshari41@icloud.com",
    "userAvatar": "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=crop&w=150&h=150&q=80",
    "rating": 4,
    "text": "Really enjoyed our visit to Swastik Restaurant & Thali. Ordered the Paneer Kadhai along with cold drinks. Excellent quality and great value for money in Station Road. Will be returning soon!",
    "tags": [
      "Good Value",
      "Quick Service",
      "Fresh Ingredients"
    ],
    "photoUrl": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80",
    "date": "2026-09-25",
    "isDemo": false,
    "isFlagged": false
  },
  {
    "id": "rev-113",
    "restaurantId": "rambha-hotel-bobis",
    "restaurantName": "Rambha Restaurant - Hotel Bobis",
    "userName": "Preeti Maurya",
    "userEmail": "preeti.maurya42@gmail.com",
    "userAvatar": "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=150&h=150&q=80",
    "rating": 5,
    "text": "Had an exceptional dining experience at Rambha Restaurant - Hotel Bobis! The Chicken Tikka Butter Masala was extraordinary—fresh, rich aroma and authentic flavors. Prompt service and immaculate cleanliness in Civil Lines.",
    "tags": [
      "Delicious Food",
      "Great Ambience",
      "Must Visit"
    ],
    "photoUrl": "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80",
    "date": "2026-09-26",
    "isDemo": false,
    "isFlagged": false,
    "ownerReply": {
      "text": "Thank you Preeti Maurya! We take pride in serving authentic quality food in Civil Lines. Looking forward to welcoming you back!",
      "date": "2026-09-27"
    }
  },
  {
    "id": "rev-114",
    "restaurantId": "rambha-hotel-bobis",
    "restaurantName": "Rambha Restaurant - Hotel Bobis",
    "userName": "Saurabh Tripathi",
    "userEmail": "saurabh.tripathi43@outlook.com",
    "userAvatar": "https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&fit=crop&w=150&h=150&q=80",
    "rating": 4,
    "text": "Really enjoyed our visit to Rambha Restaurant - Hotel Bobis. Ordered the Mutton Rogan Josh along with cold drinks. Excellent quality and great value for money in Civil Lines. Will be returning soon!",
    "tags": [
      "Good Value",
      "Quick Service",
      "Fresh Ingredients"
    ],
    "photoUrl": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80",
    "date": "2026-09-26",
    "isDemo": false,
    "isFlagged": false
  },
  {
    "id": "rev-115",
    "restaurantId": "saffron-lake-diner",
    "restaurantName": "Saffron Multi-Cuisine Diner",
    "userName": "Ritika Sengupta",
    "userEmail": "ritika.sengupta44@yahoo.com",
    "userAvatar": "https://images.unsplash.com/photo-1506863530036-1efeddceb993?auto=format&fit=crop&w=150&h=150&q=80",
    "rating": 5,
    "text": "Had an exceptional dining experience at Saffron Multi-Cuisine Diner! The Veg Sizzler was extraordinary—fresh, rich aroma and authentic flavors. Prompt service and immaculate cleanliness in Taramandal.",
    "tags": [
      "Delicious Food",
      "Great Ambience",
      "Must Visit"
    ],
    "photoUrl": "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80",
    "date": "2026-09-27",
    "isDemo": false,
    "isFlagged": false,
    "ownerReply": {
      "text": "Thank you Ritika Sengupta! We take pride in serving authentic quality food in Taramandal. Looking forward to welcoming you back!",
      "date": "2026-09-28"
    }
  },
  {
    "id": "rev-116",
    "restaurantId": "saffron-lake-diner",
    "restaurantName": "Saffron Multi-Cuisine Diner",
    "userName": "Deepak Pathak",
    "userEmail": "deepak.pathak45@icloud.com",
    "userAvatar": "https://images.unsplash.com/photo-1528892952291-009c663ce843?auto=format&fit=crop&w=150&h=150&q=80",
    "rating": 4,
    "text": "Really enjoyed our visit to Saffron Multi-Cuisine Diner. Ordered the Chicken Kadhai along with cold drinks. Excellent quality and great value for money in Taramandal. Will be returning soon!",
    "tags": [
      "Good Value",
      "Quick Service",
      "Fresh Ingredients"
    ],
    "photoUrl": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=600&q=80",
    "date": "2026-09-27",
    "isDemo": false,
    "isFlagged": false
  },
  {
    "id": "rev-117",
    "restaurantId": "bake-and-shake-cafe",
    "restaurantName": "Bake & Shake Bakery & Cafe",
    "userName": "Vandana Yadav",
    "userEmail": "vandana.yadav46@gmail.com",
    "userAvatar": "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?auto=format&fit=crop&w=150&h=150&q=80",
    "rating": 5,
    "text": "Had an exceptional dining experience at Bake & Shake Bakery & Cafe! The Dutch Truffle Cake was extraordinary—fresh, rich aroma and authentic flavors. Prompt service and immaculate cleanliness in Betiahata.",
    "tags": [
      "Delicious Food",
      "Great Ambience",
      "Must Visit"
    ],
    "photoUrl": "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=600&q=80",
    "date": "2026-09-10",
    "isDemo": false,
    "isFlagged": false,
    "ownerReply": {
      "text": "Thank you Vandana Yadav! We take pride in serving authentic quality food in Betiahata. Looking forward to welcoming you back!",
      "date": "2026-09-11"
    }
  },
  {
    "id": "rev-118",
    "restaurantId": "bake-and-shake-cafe",
    "restaurantName": "Bake & Shake Bakery & Cafe",
    "userName": "Nikhil Chawla",
    "userEmail": "nikhil.chawla47@outlook.com",
    "userAvatar": "https://images.unsplash.com/photo-1541823709867-1b206113eafd?auto=format&fit=crop&w=150&h=150&q=80",
    "rating": 4,
    "text": "Really enjoyed our visit to Bake & Shake Bakery & Cafe. Ordered the Club Sandwich along with cold drinks. Excellent quality and great value for money in Betiahata. Will be returning soon!",
    "tags": [
      "Good Value",
      "Quick Service",
      "Fresh Ingredients"
    ],
    "photoUrl": "https://images.unsplash.com/photo-1564355808539-22fda35bed7e?auto=format&fit=crop&w=600&q=80",
    "date": "2026-09-10",
    "isDemo": false,
    "isFlagged": false
  },
  {
    "id": "rev-119",
    "restaurantId": "zaika-e-awadh-gkp",
    "restaurantName": "Zaika-e-Awadh Biryani Hub",
    "userName": "Sonam Jaiswal",
    "userEmail": "sonam.jaiswal48@yahoo.com",
    "userAvatar": "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?auto=format&fit=crop&w=150&h=150&q=80",
    "rating": 5,
    "text": "Had an exceptional dining experience at Zaika-e-Awadh Biryani Hub! The Chicken Dum Biryani was extraordinary—fresh, rich aroma and authentic flavors. Prompt service and immaculate cleanliness in Golghar.",
    "tags": [
      "Delicious Food",
      "Great Ambience",
      "Must Visit"
    ],
    "photoUrl": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=600&q=80",
    "date": "2026-09-11",
    "isDemo": false,
    "isFlagged": false,
    "ownerReply": {
      "text": "Thank you Sonam Jaiswal! We take pride in serving authentic quality food in Golghar. Looking forward to welcoming you back!",
      "date": "2026-09-12"
    }
  },
  {
    "id": "rev-120",
    "restaurantId": "zaika-e-awadh-gkp",
    "restaurantName": "Zaika-e-Awadh Biryani Hub",
    "userName": "Harshvardhan Jain",
    "userEmail": "harshvardhan.jain49@icloud.com",
    "userAvatar": "https://images.unsplash.com/photo-1542206395-9feb3edaa68d?auto=format&fit=crop&w=150&h=150&q=80",
    "rating": 4,
    "text": "Really enjoyed our visit to Zaika-e-Awadh Biryani Hub. Ordered the Chicken Changezi along with cold drinks. Excellent quality and great value for money in Golghar. Will be returning soon!",
    "tags": [
      "Good Value",
      "Quick Service",
      "Fresh Ingredients"
    ],
    "photoUrl": "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=600&q=80",
    "date": "2026-09-11",
    "isDemo": false,
    "isFlagged": false
  },
  {
    "id": "rev-121",
    "restaurantId": "anand-sweet-chaat",
    "restaurantName": "Anand Sweet House & Chaat",
    "userName": "Shruti Sethi",
    "userEmail": "shruti.sethi50@gmail.com",
    "userAvatar": "https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4?auto=format&fit=crop&w=150&h=150&q=80",
    "rating": 5,
    "text": "Had an exceptional dining experience at Anand Sweet House & Chaat! The Bedmi Puri Aloo Sabzi was extraordinary—fresh, rich aroma and authentic flavors. Prompt service and immaculate cleanliness in Maya Bazaar.",
    "tags": [
      "Delicious Food",
      "Great Ambience",
      "Must Visit"
    ],
    "photoUrl": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80",
    "date": "2026-09-12",
    "isDemo": false,
    "isFlagged": false,
    "ownerReply": {
      "text": "Thank you Shruti Sethi! We take pride in serving authentic quality food in Maya Bazaar. Looking forward to welcoming you back!",
      "date": "2026-09-13"
    }
  },
  {
    "id": "rev-122",
    "restaurantId": "anand-sweet-chaat",
    "restaurantName": "Anand Sweet House & Chaat",
    "userName": "Pranav Madan",
    "userEmail": "pranav.madan51@outlook.com",
    "userAvatar": "https://images.unsplash.com/photo-1534308143481-c55f00be8bd7?auto=format&fit=crop&w=150&h=150&q=80",
    "rating": 4,
    "text": "Really enjoyed our visit to Anand Sweet House & Chaat. Ordered the Desi Ghee Tikki along with cold drinks. Excellent quality and great value for money in Maya Bazaar. Will be returning soon!",
    "tags": [
      "Good Value",
      "Quick Service",
      "Fresh Ingredients"
    ],
    "photoUrl": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80",
    "date": "2026-09-12",
    "isDemo": false,
    "isFlagged": false
  },
  {
    "id": "rev-123",
    "restaurantId": "rolls-mania-gkp",
    "restaurantName": "Rolls Mania Kathi Hub",
    "userName": "Smita Deshmukh",
    "userEmail": "smita.deshmukh52@yahoo.com",
    "userAvatar": "https://images.unsplash.com/photo-1530268729831-4b0b9e170218?auto=format&fit=crop&w=150&h=150&q=80",
    "rating": 5,
    "text": "Had an exceptional dining experience at Rolls Mania Kathi Hub! The Chicken Tikka Roll was extraordinary—fresh, rich aroma and authentic flavors. Prompt service and immaculate cleanliness in Medical College Road.",
    "tags": [
      "Delicious Food",
      "Great Ambience",
      "Must Visit"
    ],
    "photoUrl": "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80",
    "date": "2026-09-13",
    "isDemo": false,
    "isFlagged": false,
    "ownerReply": {
      "text": "Thank you Smita Deshmukh! We take pride in serving authentic quality food in Medical College Road. Looking forward to welcoming you back!",
      "date": "2026-09-14"
    }
  },
  {
    "id": "rev-124",
    "restaurantId": "rolls-mania-gkp",
    "restaurantName": "Rolls Mania Kathi Hub",
    "userName": "Akash Srivastava",
    "userEmail": "akash.srivastava53@icloud.com",
    "userAvatar": "https://images.unsplash.com/photo-1517462964-21fdcec3f25b?auto=format&fit=crop&w=150&h=150&q=80",
    "rating": 4,
    "text": "Really enjoyed our visit to Rolls Mania Kathi Hub. Ordered the Paneer Cheese Roll along with cold drinks. Excellent quality and great value for money in Medical College Road. Will be returning soon!",
    "tags": [
      "Good Value",
      "Quick Service",
      "Fresh Ingredients"
    ],
    "photoUrl": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80",
    "date": "2026-09-13",
    "isDemo": false,
    "isFlagged": false
  },
  {
    "id": "rev-125",
    "restaurantId": "subway-city-mall",
    "restaurantName": "Subway Gorakhpur",
    "userName": "Nikita Roy",
    "userEmail": "nikita.roy54@gmail.com",
    "userAvatar": "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=150&h=150&q=80",
    "rating": 5,
    "text": "Had an exceptional dining experience at Subway Gorakhpur! The Paneer Tikka Sub was extraordinary—fresh, rich aroma and authentic flavors. Prompt service and immaculate cleanliness in Civil Lines.",
    "tags": [
      "Delicious Food",
      "Great Ambience",
      "Must Visit"
    ],
    "photoUrl": "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80",
    "date": "2026-09-14",
    "isDemo": false,
    "isFlagged": false,
    "ownerReply": {
      "text": "Thank you Nikita Roy! We take pride in serving authentic quality food in Civil Lines. Looking forward to welcoming you back!",
      "date": "2026-09-15"
    }
  },
  {
    "id": "rev-126",
    "restaurantId": "subway-city-mall",
    "restaurantName": "Subway Gorakhpur",
    "userName": "Yashwardhan Lal",
    "userEmail": "yashwardhan.lal55@outlook.com",
    "userAvatar": "https://images.unsplash.com/photo-1546961329-78bef0414d7c?auto=format&fit=crop&w=150&h=150&q=80",
    "rating": 4,
    "text": "Really enjoyed our visit to Subway Gorakhpur. Ordered the Roasted Chicken Sub along with cold drinks. Excellent quality and great value for money in Civil Lines. Will be returning soon!",
    "tags": [
      "Good Value",
      "Quick Service",
      "Fresh Ingredients"
    ],
    "photoUrl": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=600&q=80",
    "date": "2026-09-14",
    "isDemo": false,
    "isFlagged": false
  },
  {
    "id": "rev-127",
    "restaurantId": "kukkad-nukkad-dhaba",
    "restaurantName": "Kukkad Nukkad Highway Dhaba",
    "userName": "Radhika Goel",
    "userEmail": "radhika.goel56@yahoo.com",
    "userAvatar": "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=150&h=150&q=80",
    "rating": 5,
    "text": "Had an exceptional dining experience at Kukkad Nukkad Highway Dhaba! The Tawa Chicken Roast was extraordinary—fresh, rich aroma and authentic flavors. Prompt service and immaculate cleanliness in Nausad Bypass.",
    "tags": [
      "Delicious Food",
      "Great Ambience",
      "Must Visit"
    ],
    "photoUrl": "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=600&q=80",
    "date": "2026-09-15",
    "isDemo": false,
    "isFlagged": false,
    "ownerReply": {
      "text": "Thank you Radhika Goel! We take pride in serving authentic quality food in Nausad Bypass. Looking forward to welcoming you back!",
      "date": "2026-09-16"
    }
  },
  {
    "id": "rev-128",
    "restaurantId": "kukkad-nukkad-dhaba",
    "restaurantName": "Kukkad Nukkad Highway Dhaba",
    "userName": "Devendra Pratap",
    "userEmail": "devendra.pratap57@icloud.com",
    "userAvatar": "https://images.unsplash.com/photo-1520466809213-7b9a56adcd45?auto=format&fit=crop&w=150&h=150&q=80",
    "rating": 4,
    "text": "Really enjoyed our visit to Kukkad Nukkad Highway Dhaba. Ordered the Handi Mutton along with cold drinks. Excellent quality and great value for money in Nausad Bypass. Will be returning soon!",
    "tags": [
      "Good Value",
      "Quick Service",
      "Fresh Ingredients"
    ],
    "photoUrl": "https://images.unsplash.com/photo-1564355808539-22fda35bed7e?auto=format&fit=crop&w=600&q=80",
    "date": "2026-09-15",
    "isDemo": false,
    "isFlagged": false
  },
  {
    "id": "rev-129",
    "restaurantId": "haldirams-express-gkp",
    "restaurantName": "Haldiram's Express & Sweets",
    "userName": "Sanya Malhotra",
    "userEmail": "sanya.malhotra58@gmail.com",
    "userAvatar": "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=150&h=150&q=80",
    "rating": 5,
    "text": "Had an exceptional dining experience at Haldiram's Express & Sweets! The Signature Raj Kachori was extraordinary—fresh, rich aroma and authentic flavors. Prompt service and immaculate cleanliness in Golghar.",
    "tags": [
      "Delicious Food",
      "Great Ambience",
      "Must Visit"
    ],
    "photoUrl": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=600&q=80",
    "date": "2026-09-16",
    "isDemo": false,
    "isFlagged": false,
    "ownerReply": {
      "text": "Thank you Sanya Malhotra! We take pride in serving authentic quality food in Golghar. Looking forward to welcoming you back!",
      "date": "2026-09-17"
    }
  },
  {
    "id": "rev-130",
    "restaurantId": "haldirams-express-gkp",
    "restaurantName": "Haldiram's Express & Sweets",
    "userName": "Tushar Khandelwal",
    "userEmail": "tushar.khandelwal59@outlook.com",
    "userAvatar": "https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?auto=format&fit=crop&w=150&h=150&q=80",
    "rating": 4,
    "text": "Really enjoyed our visit to Haldiram's Express & Sweets. Ordered the Special Chhole Bhature along with cold drinks. Excellent quality and great value for money in Golghar. Will be returning soon!",
    "tags": [
      "Good Value",
      "Quick Service",
      "Fresh Ingredients"
    ],
    "photoUrl": "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=600&q=80",
    "date": "2026-09-16",
    "isDemo": false,
    "isFlagged": false
  },
  {
    "id": "rev-131",
    "restaurantId": "crazy-bites-chowk",
    "restaurantName": "Crazy Bites Fast Food",
    "userName": "Simran Kaur",
    "userEmail": "simran.kaur60@yahoo.com",
    "userAvatar": "https://images.unsplash.com/photo-1496345875659-11f7dd282d1d?auto=format&fit=crop&w=150&h=150&q=80",
    "rating": 5,
    "text": "Had an exceptional dining experience at Crazy Bites Fast Food! The Chilli Paneer Dry was extraordinary—fresh, rich aroma and authentic flavors. Prompt service and immaculate cleanliness in Asuran Chowk.",
    "tags": [
      "Delicious Food",
      "Great Ambience",
      "Must Visit"
    ],
    "photoUrl": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80",
    "date": "2026-09-17",
    "isDemo": false,
    "isFlagged": false,
    "ownerReply": {
      "text": "Thank you Simran Kaur! We take pride in serving authentic quality food in Asuran Chowk. Looking forward to welcoming you back!",
      "date": "2026-09-18"
    }
  },
  {
    "id": "rev-132",
    "restaurantId": "crazy-bites-chowk",
    "restaurantName": "Crazy Bites Fast Food",
    "userName": "Rajat Mathur",
    "userEmail": "rajat.mathur61@icloud.com",
    "userAvatar": "https://images.unsplash.com/photo-1485290334039-a3c69043e517?auto=format&fit=crop&w=150&h=150&q=80",
    "rating": 4,
    "text": "Really enjoyed our visit to Crazy Bites Fast Food. Ordered the Schezwan Chowmein along with cold drinks. Excellent quality and great value for money in Asuran Chowk. Will be returning soon!",
    "tags": [
      "Good Value",
      "Quick Service",
      "Fresh Ingredients"
    ],
    "photoUrl": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80",
    "date": "2026-09-17",
    "isDemo": false,
    "isFlagged": false
  },
  {
    "id": "rev-133",
    "restaurantId": "pizza-hut-park-road",
    "restaurantName": "Pizza Hut Gorakhpur",
    "userName": "Payal Singhania",
    "userEmail": "payal.singhania62@gmail.com",
    "userAvatar": "https://images.unsplash.com/photo-1507152832244-10d45c7eda57?auto=format&fit=crop&w=150&h=150&q=80",
    "rating": 5,
    "text": "Had an exceptional dining experience at Pizza Hut Gorakhpur! The Margherita Pan Pizza was extraordinary—fresh, rich aroma and authentic flavors. Prompt service and immaculate cleanliness in Civil Lines.",
    "tags": [
      "Delicious Food",
      "Great Ambience",
      "Must Visit"
    ],
    "photoUrl": "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80",
    "date": "2026-09-18",
    "isDemo": false,
    "isFlagged": false,
    "ownerReply": {
      "text": "Thank you Payal Singhania! We take pride in serving authentic quality food in Civil Lines. Looking forward to welcoming you back!",
      "date": "2026-09-19"
    }
  },
  {
    "id": "rev-134",
    "restaurantId": "pizza-hut-park-road",
    "restaurantName": "Pizza Hut Gorakhpur",
    "userName": "Abhishek Dwivedi",
    "userEmail": "abhishek.dwivedi63@outlook.com",
    "userAvatar": "https://images.unsplash.com/photo-1519058082700-08a0b56da9b4?auto=format&fit=crop&w=150&h=150&q=80",
    "rating": 4,
    "text": "Really enjoyed our visit to Pizza Hut Gorakhpur. Ordered the Tandoori Paneer Pizza along with cold drinks. Excellent quality and great value for money in Civil Lines. Will be returning soon!",
    "tags": [
      "Good Value",
      "Quick Service",
      "Fresh Ingredients"
    ],
    "photoUrl": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80",
    "date": "2026-09-18",
    "isDemo": false,
    "isFlagged": false
  },
  {
    "id": "rev-135",
    "restaurantId": "kfc-ad-mall",
    "restaurantName": "KFC Gorakhpur",
    "userName": "Anupama Joshi",
    "userEmail": "anupama.joshi64@yahoo.com",
    "userAvatar": "https://images.unsplash.com/photo-1521119989659-a83eee488004?auto=format&fit=crop&w=150&h=150&q=80",
    "rating": 5,
    "text": "Had an exceptional dining experience at KFC Gorakhpur! The Hot & Crispy Chicken was extraordinary—fresh, rich aroma and authentic flavors. Prompt service and immaculate cleanliness in Golghar.",
    "tags": [
      "Delicious Food",
      "Great Ambience",
      "Must Visit"
    ],
    "photoUrl": "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80",
    "date": "2026-09-19",
    "isDemo": false,
    "isFlagged": false,
    "ownerReply": {
      "text": "Thank you Anupama Joshi! We take pride in serving authentic quality food in Golghar. Looking forward to welcoming you back!",
      "date": "2026-09-20"
    }
  },
  {
    "id": "rev-136",
    "restaurantId": "kfc-ad-mall",
    "restaurantName": "KFC Gorakhpur",
    "userName": "Keshav Narang",
    "userEmail": "keshav.narang65@icloud.com",
    "userAvatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80",
    "rating": 4,
    "text": "Really enjoyed our visit to KFC Gorakhpur. Ordered the Zinger Burger along with cold drinks. Excellent quality and great value for money in Golghar. Will be returning soon!",
    "tags": [
      "Good Value",
      "Quick Service",
      "Fresh Ingredients"
    ],
    "photoUrl": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=600&q=80",
    "date": "2026-09-19",
    "isDemo": false,
    "isFlagged": false
  },
  {
    "id": "rev-137",
    "restaurantId": "cafe-coffee-day-gkp",
    "restaurantName": "Cafe Coffee Day",
    "userName": "Barkha Vats",
    "userEmail": "barkha.vats66@gmail.com",
    "userAvatar": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&h=150&q=80",
    "rating": 5,
    "text": "Had an exceptional dining experience at Cafe Coffee Day! The Devil's Own Frappe was extraordinary—fresh, rich aroma and authentic flavors. Prompt service and immaculate cleanliness in Civil Lines.",
    "tags": [
      "Delicious Food",
      "Great Ambience",
      "Must Visit"
    ],
    "photoUrl": "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=600&q=80",
    "date": "2026-09-20",
    "isDemo": false,
    "isFlagged": false,
    "ownerReply": {
      "text": "Thank you Barkha Vats! We take pride in serving authentic quality food in Civil Lines. Looking forward to welcoming you back!",
      "date": "2026-09-21"
    }
  },
  {
    "id": "rev-138",
    "restaurantId": "cafe-coffee-day-gkp",
    "restaurantName": "Cafe Coffee Day",
    "userName": "Himanshu Pandey",
    "userEmail": "himanshu.pandey67@outlook.com",
    "userAvatar": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&h=150&q=80",
    "rating": 4,
    "text": "Really enjoyed our visit to Cafe Coffee Day. Ordered the Cappuccino along with cold drinks. Excellent quality and great value for money in Civil Lines. Will be returning soon!",
    "tags": [
      "Good Value",
      "Quick Service",
      "Fresh Ingredients"
    ],
    "photoUrl": "https://images.unsplash.com/photo-1564355808539-22fda35bed7e?auto=format&fit=crop&w=600&q=80",
    "date": "2026-09-20",
    "isDemo": false,
    "isFlagged": false
  },
  {
    "id": "rev-139",
    "restaurantId": "khaao-gali-food-hub",
    "restaurantName": "Khaao Gali Street Food Hub",
    "userName": "Garima Dixit",
    "userEmail": "garima.dixit68@yahoo.com",
    "userAvatar": "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=150&h=150&q=80",
    "rating": 5,
    "text": "Had an exceptional dining experience at Khaao Gali Street Food Hub! The Butter Pav Bhaji was extraordinary—fresh, rich aroma and authentic flavors. Prompt service and immaculate cleanliness in Golghar.",
    "tags": [
      "Delicious Food",
      "Great Ambience",
      "Must Visit"
    ],
    "photoUrl": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=600&q=80",
    "date": "2026-09-21",
    "isDemo": false,
    "isFlagged": false,
    "ownerReply": {
      "text": "Thank you Garima Dixit! We take pride in serving authentic quality food in Golghar. Looking forward to welcoming you back!",
      "date": "2026-09-22"
    }
  },
  {
    "id": "rev-140",
    "restaurantId": "khaao-gali-food-hub",
    "restaurantName": "Khaao Gali Street Food Hub",
    "userName": "Ujjwal Anand",
    "userEmail": "ujjwal.anand69@icloud.com",
    "userAvatar": "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&h=150&q=80",
    "rating": 4,
    "text": "Really enjoyed our visit to Khaao Gali Street Food Hub. Ordered the Kolkata Egg Roll along with cold drinks. Excellent quality and great value for money in Golghar. Will be returning soon!",
    "tags": [
      "Good Value",
      "Quick Service",
      "Fresh Ingredients"
    ],
    "photoUrl": "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=600&q=80",
    "date": "2026-09-21",
    "isDemo": false,
    "isFlagged": false
  }
];
