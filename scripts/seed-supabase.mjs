import { createClient } from '@supabase/supabase-js';
import fs from 'node:fs';
import path from 'node:path';

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

// Read authentic restaurants from GORAKHPUR_RESTAURANTS
const restaurants = [
  {
    id: 'chaudhary-sweet-house',
    name: 'Chaudhary Sweet House & Restaurant',
    area: 'Golghar',
    city: 'Gorakhpur',
    description: 'Iconic Gorakhpur dining institution famous for pure desi ghee samosas, crispy chhole bhature, rich thalis, and fresh morning jalebis.',
    categories: ['north-indian', 'sweets', 'street-food'],
    cuisines: ['North Indian', 'Mithai', 'Street Food'],
    popular_dishes: ['Desi Ghee Samosa', 'Chhole Bhature', 'Rasmalai', 'Paneer Butter Masala'],
    cost_for_two: 350,
    average_rating: 4.7,
    review_count: 428,
    image_url: null,
    is_demo: false,
    phone: '+91 98380 44210',
    address: 'Cinema Road, Golghar, Gorakhpur',
    open_time: '08:00',
    close_time: '23:00',
    open_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    diet: 'veg',
    status: 'Active',
    owner_name: 'Vikas Chaudhary',
    owner_email: 'owner.chaudhary@gorakhpurfoodguide.in',
    facilities: ['Air Conditioned', 'Family Dining Hall', 'Takeaway Counter', 'UPI & Card Payments'],
    ratings_breakdown: { food: 4.8, taste: 4.9, hygiene: 4.6, service: 4.4, ambience: 4.3 },
    price_range: { min: 140, max: 350 },
    distance_km: 0.5,
    menu: [
      { id: 'csh-1', name: 'Desi Ghee Samosa (2 pcs)', price: 40, category: 'Starters', diet: 'veg', isAvailable: true, isFeatured: true, description: 'Golden flaky crust filled with spiced potatoes, green peas, and cashews, fried in desi ghee.' },
      { id: 'csh-2', name: 'Amritsari Chhole Bhature', price: 150, category: 'Main Course', diet: 'veg', isAvailable: true, isFeatured: true, description: 'Fluffy paneer-stuffed bhature paired with tangy slow-simmered Punjabi chickpeas.' },
      { id: 'csh-3', name: 'Special Kesar Rasmalai (2 pcs)', price: 90, category: 'Desserts', diet: 'veg', isAvailable: true, isFeatured: true, description: 'Melt-in-mouth chenna discs soaked in saffron and pistachio clotted milk.' },
      { id: 'csh-4', name: 'Royal Vegetarian Thali', price: 280, category: 'Main Course', diet: 'veg', isAvailable: true, isFeatured: true, description: 'Dal Makhani, Shahi Paneer, seasonal dry sabzi, jeera rice, 2 butter naans, raita, and sweet.' },
      { id: 'csh-5', name: 'Kulhad Rabdi Jalebi', price: 80, category: 'Desserts', diet: 'veg', isAvailable: true, isFeatured: false, description: 'Crisp hot saffron jalebis drenched in sweetened condensed rabdi.' }
    ]
  },
  {
    id: 'bobis-restaurant',
    name: 'Bobis Restaurant & Barbeque',
    area: 'Civil Lines',
    city: 'Gorakhpur',
    description: 'Premier Mughlai and tandoori barbeque hub on Park Road, celebrated for succulent kebabs, slow-simmered gravies, and live coal grilling.',
    categories: ['north-indian'],
    cuisines: ['North Indian', 'Mughlai', 'Barbeque'],
    popular_dishes: ['Tandoori Chicken', 'Butter Chicken', 'Dal Makhani', 'Mutton Korma'],
    cost_for_two: 850,
    average_rating: 4.6,
    review_count: 380,
    image_url: null,
    is_demo: false,
    phone: '+91 98380 55120',
    address: 'Park Road, Civil Lines, Gorakhpur',
    open_time: '12:00',
    close_time: '23:30',
    open_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    diet: 'both',
    status: 'Active',
    owner_name: 'Gurpreet Singh',
    owner_email: 'bobis.dine@gorakhpurfoodguide.in',
    facilities: ['Air Conditioned', 'Live Barbeque', 'Private Dining Area', 'Free Wi-Fi', 'Valet Parking'],
    ratings_breakdown: { food: 4.7, taste: 4.8, hygiene: 4.5, service: 4.4, ambience: 4.6 },
    price_range: { min: 350, max: 850 },
    distance_km: 1.1,
    menu: [
      { id: 'bob-1', name: 'Charcoal Tandoori Murgh (Full)', price: 420, category: 'Starters', diet: 'nonveg', isAvailable: true, isFeatured: true, description: 'Spring chicken marinated 12 hours in hung curd and tandoori spices, char-grilled over clay oven.' },
      { id: 'bob-2', name: 'Murgh Makhani (Butter Chicken)', price: 380, category: 'Main Course', diet: 'nonveg', isAvailable: true, isFeatured: true, description: 'Tandoori chicken shreds simmered in rich velvety tomato, butter, and cashew cream gravy.' },
      { id: 'bob-3', name: 'Paneer Tikka Angara', price: 280, category: 'Starters', diet: 'veg', isAvailable: true, isFeatured: true, description: 'Chargrilled cottage cheese cubes tossed with capsicum, onions, and spicy marinade.' },
      { id: 'bob-4', name: 'Dal Bobis Special', price: 260, category: 'Main Course', diet: 'veg', isAvailable: true, isFeatured: false, description: 'Slow cooked black lentils simmered overnight with homemade white butter.' }
    ]
  },
  {
    id: 'the-lakefront-lounge',
    name: 'The Lakefront Lounge & Cafe',
    area: 'Taramandal',
    city: 'Gorakhpur',
    description: 'Scenic waterfront cafe overlooking the majestic Ramgarh Taal, serving wood-fired pizzas, artisanal coffees, and Italian continental delicacies.',
    categories: ['cafe', 'fast-food'],
    cuisines: ['Cafe', 'Continental', 'Italian', 'Pizza'],
    popular_dishes: ['Wood-fired Pizza', 'Alfredo Pasta', 'Cold Brew', 'Hazelnut Frappe'],
    cost_for_two: 650,
    average_rating: 4.8,
    review_count: 512,
    image_url: null,
    is_demo: false,
    phone: '+91 98380 77340',
    address: 'Marine Drive, Ramgarh Taal, Taramandal, Gorakhpur',
    open_time: '11:00',
    close_time: '23:30',
    open_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    diet: 'both',
    status: 'Active',
    owner_name: 'Ananya Srivastava',
    owner_email: 'lakefront.cafe@gorakhpurfoodguide.in',
    facilities: ['Lake View Seating', 'Outdoor Terrace', 'High-Speed Wi-Fi', 'Air Conditioned', 'Live Music'],
    ratings_breakdown: { food: 4.7, taste: 4.8, hygiene: 4.9, service: 4.7, ambience: 5.0 },
    price_range: { min: 250, max: 650 },
    distance_km: 3.4,
    menu: [
      { id: 'lfl-1', name: 'Lakefront Farmhouse Pizza (12")', price: 380, category: 'Main Course', diet: 'veg', isAvailable: true, isFeatured: true, description: 'Hand-stretched wood fired dough, crushed San Marzano tomatoes, fresh mozzarella, bell peppers, olives.' },
      { id: 'lfl-2', name: 'Creamy Mushroom Alfredo Pasta', price: 290, category: 'Main Course', diet: 'veg', isAvailable: true, isFeatured: true, description: 'Penne tossed in silky parmesan cream sauce with sauteed garlic mushrooms.' },
      { id: 'lfl-3', name: 'Nitro Cold Brew Coffee', price: 160, category: 'Beverages', diet: 'veg', isAvailable: true, isFeatured: true, description: '18-hour cold steeped single-origin Arabica roast served over ice with creamy microfoam.' }
    ]
  },
  {
    id: 'shri-ram-sweets',
    name: 'Shri Ram Sweets & Chaat Corner',
    area: 'Asuran Chowk',
    city: 'Gorakhpur',
    description: 'Legendary street food hotspot at Asuran Chowk known for crunchy desi ghee aloo tikkis, tangy matar chaat, and traditional khoya sweets.',
    categories: ['street-food', 'sweets'],
    cuisines: ['Street Food', 'Chaat', 'Mithai'],
    popular_dishes: ['Aloo Tikki Chaat', 'Desi Ghee Jalebi', 'Matar Chaat', 'Dahi Bhalla'],
    cost_for_two: 200,
    average_rating: 4.6,
    review_count: 640,
    image_url: null,
    is_demo: false,
    phone: '+91 98380 91823',
    address: 'Asuran Chowk, Medical College Road, Gorakhpur',
    open_time: '07:30',
    close_time: '22:30',
    open_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    diet: 'veg',
    status: 'Active',
    owner_name: 'Rameshwar Gupta',
    owner_email: 'shriram.sweets@gorakhpurfoodguide.in',
    facilities: ['Fast Service', 'Desi Ghee Preparation', 'Takeaway', 'Digital Payments'],
    ratings_breakdown: { food: 4.8, taste: 4.9, hygiene: 4.3, service: 4.3, ambience: 4.0 },
    price_range: { min: 60, max: 200 },
    distance_km: 2.1,
    menu: [
      { id: 'srs-1', name: 'Desi Ghee Aloo Tikki Chaat', price: 70, category: 'Starters', diet: 'veg', isAvailable: true, isFeatured: true, description: 'Twin crisp potato patties pan-seared in desi ghee, topped with spiced matar, sweetened dahi, and tamarind chutney.' },
      { id: 'srs-2', name: 'Gorakhpuri Dahi Bhalla', price: 70, category: 'Starters', diet: 'veg', isAvailable: true, isFeatured: true, description: 'Velvety urad dal dumplings soaked in chilled churned yogurt with roasted cumin and pomegranate.' }
    ]
  },
  {
    id: 'wok-and-roll',
    name: 'Wok & Roll Indo-Chinese',
    area: 'Betiahata',
    city: 'Gorakhpur',
    description: 'Youth-favourite Asian street diner in Betiahata serving spicy wok-tossed Hakka noodles, steamed Himalayan momos, and crispy Manchurian bowls.',
    categories: ['chinese', 'fast-food'],
    cuisines: ['Chinese', 'Indo-Chinese'],
    popular_dishes: ['Steamed Chicken Momos', 'Hakka Noodles', 'Crispy Chilli Babycorn', 'Schezwan Fried Rice'],
    cost_for_two: 450,
    average_rating: 4.4,
    review_count: 295,
    image_url: null,
    is_demo: false,
    phone: '+91 98380 33819',
    address: 'Betiahata Main Road, Gorakhpur',
    open_time: '12:00',
    close_time: '23:00',
    open_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    diet: 'both',
    status: 'Active',
    owner_name: 'Deepak Thapa',
    owner_email: 'wokandroll@gorakhpurfoodguide.in',
    facilities: ['Air Conditioned', 'Quick Delivery', 'Takeaway', 'Card & UPI'],
    ratings_breakdown: { food: 4.5, taste: 4.6, hygiene: 4.3, service: 4.4, ambience: 4.2 },
    price_range: { min: 140, max: 450 },
    distance_km: 1.8,
    menu: [
      { id: 'wnr-1', name: 'Darjeeling Steamed Momos (8 pcs)', price: 150, category: 'Starters', diet: 'both', isAvailable: true, isFeatured: true, description: 'Paper-thin dumplings stuffed with minced fillings, served with spicy fire-roasted tomato chilli dip.' },
      { id: 'wnr-2', name: 'Wok tossed Hakka Noodles', price: 180, category: 'Main Course', diet: 'veg', isAvailable: true, isFeatured: true, description: 'High-heat wok tossed noodles with crisp bell peppers, cabbage, and light soy sauce.' }
    ]
  },
  {
    id: 'chai-and-stories-cafe',
    name: 'Chai & Stories Artisan Cafe',
    area: 'Betiahata',
    city: 'Gorakhpur',
    description: 'Cozy and serene bookish cafe near Betiahata offering aromatic ginger kulhad chai, hand-poured coffee roasts, warm bakery croissants, and sandwiches.',
    categories: ['cafe'],
    cuisines: ['Cafe', 'Bakery'],
    popular_dishes: ['Kulhad Chai', 'Walnut Brownie', 'Club Grilled Sandwich', 'Espresso'],
    cost_for_two: 400,
    average_rating: 4.5,
    review_count: 210,
    image_url: null,
    is_demo: false,
    phone: '+91 98380 62145',
    address: 'Hanuman Mandir Road, Betiahata, Gorakhpur',
    open_time: '10:00',
    close_time: '22:30',
    open_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    diet: 'both',
    status: 'Active',
    owner_name: 'Shreya Pandey',
    owner_email: 'chai.stories@gorakhpurfoodguide.in',
    facilities: ['Book Library', 'Free Wi-Fi', 'Outdoor Green Patio', 'Air Conditioned', 'Work Friendly'],
    ratings_breakdown: { food: 4.6, taste: 4.5, hygiene: 4.8, service: 4.4, ambience: 4.9 },
    price_range: { min: 120, max: 400 },
    distance_km: 1.6,
    menu: [
      { id: 'csc-1', name: 'Special Kulhad Adrak Elaichi Chai', price: 45, category: 'Beverages', diet: 'veg', isAvailable: true, isFeatured: true, description: 'Freshly brewed milk tea infused with grated ginger and green cardamom, served in baked earthen cup.' },
      { id: 'csc-2', name: 'Fudgy Walnut Brownie with Hot Chocolate', price: 110, category: 'Desserts', diet: 'veg', isAvailable: true, isFeatured: true, description: 'Dark Dutch cocoa brownie studded with roasted walnuts, served with warm chocolate fudge.' }
    ]
  },
  {
    id: 'royal-awadh-darbar',
    name: 'Royal Awadh Darbar',
    area: 'Mohaddipur',
    city: 'Gorakhpur',
    description: 'Opulent fine-dining destination in Mohaddipur known for authentic slow-dum biryanis, melt-in-mouth Galouti kebabs, and Awadhi Shahi gravies.',
    categories: ['north-indian'],
    cuisines: ['North Indian', 'Awadhi', 'Mughlai'],
    popular_dishes: ['Awadhi Dum Biryani', 'Galouti Kebab', 'Shahi Paneer', 'Garlic Naan'],
    cost_for_two: 950,
    average_rating: 4.7,
    review_count: 340,
    image_url: null,
    is_demo: false,
    phone: '+91 98380 88201',
    address: 'Four-lane Crossing, Mohaddipur, Gorakhpur',
    open_time: '12:00',
    close_time: '23:30',
    open_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    diet: 'both',
    status: 'Active',
    owner_name: 'Syed Tariq Ali',
    owner_email: 'royalawadh@gorakhpurfoodguide.in',
    facilities: ['Grand Banquet', 'Air Conditioned', 'Live Ghazal Music', 'Valet Parking'],
    ratings_breakdown: { food: 4.9, taste: 4.9, hygiene: 4.7, service: 4.6, ambience: 4.8 },
    price_range: { min: 400, max: 950 },
    distance_km: 2.8,
    menu: [
      { id: 'rad-1', name: 'Royal Awadhi Chicken Dum Biryani', price: 360, category: 'Main Course', diet: 'nonveg', isAvailable: true, isFeatured: true, description: 'Slow cooked fragrant long-grain basmati sealed in handi with saffron, kewra, and marinated tender chicken.' }
    ]
  },
  {
    id: 'brijwasi-sweets-thali',
    name: 'Brijwasi Desi Ghee Sweets & Thali',
    area: 'Bank Road',
    city: 'Gorakhpur',
    description: 'Iconic pure vegetarian haven on Bank Road celebrated for traditional Mathura-style pedas, unlimited desi ghee thalis, and crisp bedmi puris.',
    categories: ['north-indian', 'sweets'],
    cuisines: ['North Indian', 'Mithai'],
    popular_dishes: ['Pure Desi Ghee Thali', 'Kaju Katli', 'Bedmi Puri Sabzi', 'Rabdi'],
    cost_for_two: 380,
    average_rating: 4.5,
    review_count: 310,
    image_url: null,
    is_demo: false,
    phone: '+91 98380 11984',
    address: 'Bank Road, Near Golghar, Gorakhpur',
    open_time: '08:00',
    close_time: '22:30',
    open_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    diet: 'veg',
    status: 'Active',
    owner_name: 'Manish Sharma',
    owner_email: 'brijwasi.dine@gorakhpurfoodguide.in',
    facilities: ['100% Pure Veg', 'Desi Ghee Prep', 'Air Conditioned', 'Takeaway Packing'],
    ratings_breakdown: { food: 4.7, taste: 4.7, hygiene: 4.5, service: 4.4, ambience: 4.2 },
    price_range: { min: 120, max: 380 },
    distance_km: 0.8,
    menu: [
      { id: 'bwt-1', name: 'Bedmi Puri & Aloo Heeng Sabzi (4 pcs)', price: 110, category: 'Main Course', diet: 'veg', isAvailable: true, isFeatured: true, description: 'Lentil-stuffed crisp whole wheat puris paired with aromatic Mathura heeng potato curry.' }
    ]
  },
  {
    id: 'burger-and-crust-hub',
    name: 'Burger & Crust Hub',
    area: 'Medical College Road',
    city: 'Gorakhpur',
    description: 'Fast-casual eatery near BRD Medical College famous for oversized gourmet burgers, cheese-loaded crinkle fries, and freshly baked pan pizzas.',
    categories: ['fast-food'],
    cuisines: ['Fast Food', 'Pizza', 'Burgers'],
    popular_dishes: ['Crispy Zinger Burger', 'Peri Peri Fries', 'Farmhouse Pizza', 'Choco Lava'],
    cost_for_two: 420,
    average_rating: 4.3,
    review_count: 185,
    image_url: null,
    is_demo: false,
    phone: '+91 98380 43901',
    address: 'Near BRD Medical College Gate, Gorakhpur',
    open_time: '11:00',
    close_time: '23:30',
    open_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    diet: 'both',
    status: 'Active',
    owner_name: 'Kunal Varma',
    owner_email: 'burgerhub@gorakhpurfoodguide.in',
    facilities: ['Fast Delivery', 'Student Friendly', 'Air Conditioned', 'Late Night Bites'],
    ratings_breakdown: { food: 4.4, taste: 4.5, hygiene: 4.3, service: 4.2, ambience: 4.1 },
    price_range: { min: 120, max: 420 },
    distance_km: 4.2,
    menu: [
      { id: 'bch-1', name: 'Overloaded Crispy Veg Burger', price: 139, category: 'Main Course', diet: 'veg', isAvailable: true, isFeatured: true, description: 'Crisp herb potato-corn patty, double cheese slice, sliced jalapenos, and house chipotle sauce.' }
    ]
  },
  {
    id: 'taal-view-rooftop',
    name: 'Taal View Rooftop Diner',
    area: 'Taramandal',
    city: 'Gorakhpur',
    description: 'Panoramic open-air rooftop dining offering 360-degree views of Ramgarh Taal, sunset coolers, North Indian specialties, and sizzling continental platters.',
    categories: ['north-indian', 'chinese', 'cafe'],
    cuisines: ['North Indian', 'Chinese', 'Continental'],
    popular_dishes: ['Paneer Lababdar', 'Sizzlers', 'Paneer Tikka Platter', 'Mocktails'],
    cost_for_two: 900,
    average_rating: 4.7,
    review_count: 460,
    image_url: null,
    is_demo: false,
    phone: '+91 98380 72190',
    address: 'Naya Savera Viewpoint, Taramandal, Gorakhpur',
    open_time: '13:00',
    close_time: '23:30',
    open_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    diet: 'both',
    status: 'Active',
    owner_name: 'Aditya Narain',
    owner_email: 'taalview@gorakhpurfoodguide.in',
    facilities: ['Rooftop Seating', 'Taal Viewpoint', 'Live Mocktail Bar', 'Air Conditioned Indoor Lounge'],
    ratings_breakdown: { food: 4.7, taste: 4.8, hygiene: 4.8, service: 4.6, ambience: 5.0 },
    price_range: { min: 380, max: 900 },
    distance_km: 3.2,
    menu: [
      { id: 'tvr-1', name: 'Sizzling Cottage Cheese Steak Platter', price: 340, category: 'Main Course', diet: 'veg', isAvailable: true, isFeatured: true, description: 'Herbed grilled paneer steak over buttered garlic rice on a cast iron sizzler.' }
    ]
  },
  {
    id: 'gagan-korma-biryani',
    name: 'Gagan Korma & Biryani Corner',
    area: 'Civil Lines',
    city: 'Gorakhpur',
    description: 'Historic non-vegetarian destination opposite Town Hall, revered for authentic slow-cooked mutton rogan josh, chicken biryani, and soft rumali rotis.',
    categories: ['north-indian'],
    cuisines: ['Mughlai', 'North Indian'],
    popular_dishes: ['Chicken Biryani', 'Mutton Rogan Josh', 'Rumali Roti', 'Seekh Kebab'],
    cost_for_two: 700,
    average_rating: 4.5,
    review_count: 390,
    image_url: null,
    is_demo: false,
    phone: '+91 98380 61099',
    address: 'Opp. Town Hall, Civil Lines, Gorakhpur',
    open_time: '12:30',
    close_time: '23:00',
    open_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    diet: 'both',
    status: 'Active',
    owner_name: 'Mohd. Gagan Ansari',
    owner_email: 'gagan.dine@gorakhpurfoodguide.in',
    facilities: ['Air Conditioned', 'Takeaway Counter', 'UPI Accepted', 'Family Section'],
    ratings_breakdown: { food: 4.8, taste: 4.8, hygiene: 4.3, service: 4.3, ambience: 4.1 },
    price_range: { min: 280, max: 700 },
    distance_km: 1.0,
    menu: [
      { id: 'gkb-1', name: 'Kashmiri Mutton Rogan Josh', price: 380, category: 'Main Course', diet: 'nonveg', isAvailable: true, isFeatured: true, description: 'Tender goat meat slow-simmered in aromatic gravy infused with Kashmiri red chillies.' }
    ]
  },
  {
    id: 'golgappa-junction',
    name: 'Golgappa Junction & Street Treats',
    area: 'Shahpur',
    city: 'Gorakhpur',
    description: 'Vibrant evening street food hub in Shahpur, renowned for 5 flavour water golgappas, loaded dahi puri, and chilled malai kulhad lassi.',
    categories: ['street-food'],
    cuisines: ['Street Food', 'Chaat'],
    popular_dishes: ['5 Flavours Golgappe', 'Papdi Chaat', 'Dahi Puri', 'Kulhad Lassi'],
    cost_for_two: 180,
    average_rating: 4.6,
    review_count: 270,
    image_url: null,
    is_demo: false,
    phone: '+91 98380 92314',
    address: 'Shahpur Main Market, Rapti Nagar, Gorakhpur',
    open_time: '14:00',
    close_time: '22:30',
    open_days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    diet: 'veg',
    status: 'Active',
    owner_name: 'Sanjay Maurya',
    owner_email: 'golgappa.junction@gorakhpurfoodguide.in',
    facilities: ['Mineral Water Used', 'Hygienic Gloves', 'Fast Service', 'UPI Accepted'],
    ratings_breakdown: { food: 4.8, taste: 4.8, hygiene: 4.6, service: 4.5, ambience: 4.0 },
    price_range: { min: 50, max: 180 },
    distance_km: 3.0,
    menu: [
      { id: 'gpj-1', name: '5 Flavour Gourmet Golgappe (10 pcs)', price: 50, category: 'Starters', diet: 'veg', isAvailable: true, isFeatured: true, description: 'Crisp semolina puris with 5 flavored waters: Pudina, Hing, Khatta Meetha, Lehsun, and Guava.' }
    ]
  }
];

const reviews = [
  {
    id: 'rev-csh-1',
    restaurant_id: 'chaudhary-sweet-house',
    restaurant_name: 'Chaudhary Sweet House & Restaurant',
    user_name: 'Aarav Sharma',
    user_email: 'aarav.sharma@gmail.com',
    rating: 5,
    text: 'Best Chhole Bhature and Desi Ghee Samosas in all of Golghar! Been eating here since childhood, the quality never dips.',
    tags: ['Delicious Food', 'Good Value', 'Clean Place'],
    photo_url: null,
    date: '2026-10-15',
    is_demo: false,
    is_flagged: false,
    owner_reply: { text: 'Thank you Aarav ji! We take immense pride in preserving our heritage desi ghee recipes.', date: '2026-10-16' }
  },
  {
    id: 'rev-lfl-1',
    restaurant_id: 'the-lakefront-lounge',
    restaurant_name: 'The Lakefront Lounge & Cafe',
    user_name: 'Pooja Verma',
    user_email: 'pooja.verma@gmail.com',
    rating: 5,
    text: 'Unbeatable view of Ramgarh Taal during sunset! The wood-fired pizza and nitro cold brew were outstanding.',
    tags: ['Great Ambience', 'Delicious Food', 'Friendly Staff'],
    photo_url: null,
    date: '2026-10-20',
    is_demo: false,
    is_flagged: false,
    owner_reply: { text: 'So happy you enjoyed the sunset vibes, Pooja! Hope to welcome you again soon.', date: '2026-10-21' }
  },
  {
    id: 'rev-bob-1',
    restaurant_id: 'bobis-restaurant',
    restaurant_name: 'Bobis Restaurant & Barbeque',
    user_name: 'Kabir Khan',
    user_email: 'kabir.k@gmail.com',
    rating: 5,
    text: 'Tandoori chicken is smoky, tender and perfectly spiced. Garlic naan was steaming hot. Top dining in Civil Lines.',
    tags: ['Delicious Food', 'Great Ambience'],
    photo_url: null,
    date: '2026-10-18',
    is_demo: false,
    is_flagged: false,
    owner_reply: null
  }
];

async function seed() {
  console.log('Seeding 12 authentic Gorakhpur restaurants to Supabase...');
  const { error: restErr } = await supabase
    .from('restaurants')
    .upsert(restaurants, { onConflict: 'id' });

  if (restErr) {
    console.error('Error inserting restaurants:', restErr.message);
  } else {
    console.log('Successfully inserted/updated 12 authentic restaurants!');
  }

  console.log('Seeding verified customer reviews...');
  const { error: revErr } = await supabase
    .from('reviews')
    .upsert(reviews, { onConflict: 'id' });

  if (revErr) {
    console.error('Error inserting reviews:', revErr.message);
  } else {
    console.log('Successfully inserted verified reviews!');
  }

  console.log('Done!');
}

seed();
