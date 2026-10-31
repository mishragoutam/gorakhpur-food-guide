-- ==============================================================================
-- Gorakhpur Food Guide (RateIt) - Complete Supabase PostgreSQL Schema & Seed Data
-- ==============================================================================
-- Run this script in your Supabase SQL Editor (Dashboard -> SQL Editor -> New Query)
-- to create all database tables, configure Row Level Security (RLS), enable
-- real-time subscriptions, and insert initial Gorakhpur restaurants and reviews.
-- ==============================================================================

-- 1. EXTENSIONS
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- 2. RESTAURANTS TABLE
CREATE TABLE IF NOT EXISTS public.restaurants (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    area TEXT NOT NULL,
    city TEXT NOT NULL DEFAULT 'Gorakhpur',
    description TEXT NOT NULL DEFAULT '',
    categories JSONB NOT NULL DEFAULT '[]'::jsonb,
    cuisines JSONB NOT NULL DEFAULT '[]'::jsonb,
    popular_dishes JSONB NOT NULL DEFAULT '[]'::jsonb,
    cost_for_two NUMERIC NOT NULL DEFAULT 0,
    average_rating NUMERIC NOT NULL DEFAULT 0,
    review_count INTEGER NOT NULL DEFAULT 0,
    image_url TEXT,
    is_demo BOOLEAN NOT NULL DEFAULT false,
    phone TEXT,
    address TEXT,
    open_time TEXT,
    close_time TEXT,
    open_days JSONB DEFAULT '[]'::jsonb,
    diet TEXT DEFAULT 'both',
    status TEXT DEFAULT 'Active',
    owner_name TEXT,
    owner_email TEXT,
    facilities JSONB DEFAULT '[]'::jsonb,
    menu JSONB DEFAULT '[]'::jsonb,
    ratings_breakdown JSONB DEFAULT '{}'::jsonb,
    price_range JSONB DEFAULT '{}'::jsonb,
    logo_url TEXT,
    distance_km NUMERIC,
    created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now()),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

-- Index for searching and filtering restaurants
CREATE INDEX IF NOT EXISTS idx_restaurants_area ON public.restaurants(area);
CREATE INDEX IF NOT EXISTS idx_restaurants_status ON public.restaurants(status);
CREATE INDEX IF NOT EXISTS idx_restaurants_cost ON public.restaurants(cost_for_two);
CREATE INDEX IF NOT EXISTS idx_restaurants_rating ON public.restaurants(average_rating);

-- 3. REVIEWS TABLE
CREATE TABLE IF NOT EXISTS public.reviews (
    id TEXT PRIMARY KEY,
    restaurant_id TEXT NOT NULL REFERENCES public.restaurants(id) ON DELETE CASCADE,
    restaurant_name TEXT,
    user_name TEXT NOT NULL,
    user_email TEXT,
    rating NUMERIC NOT NULL CHECK (rating >= 1 AND rating <= 5),
    text TEXT NOT NULL,
    tags JSONB DEFAULT '[]'::jsonb,
    photo_url TEXT,
    date TEXT NOT NULL,
    is_demo BOOLEAN DEFAULT false,
    is_flagged BOOLEAN DEFAULT false,
    owner_reply JSONB,
    created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now()),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

CREATE INDEX IF NOT EXISTS idx_reviews_restaurant_id ON public.reviews(restaurant_id);
CREATE INDEX IF NOT EXISTS idx_reviews_rating ON public.reviews(rating);
CREATE INDEX IF NOT EXISTS idx_reviews_date ON public.reviews(date DESC);

-- 4. CONTACT INQUIRIES TABLE
CREATE TABLE IF NOT EXISTS public.inquiries (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT,
    category TEXT NOT NULL,
    message TEXT NOT NULL,
    status TEXT NOT NULL DEFAULT 'New',
    created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

CREATE INDEX IF NOT EXISTS idx_inquiries_status ON public.inquiries(status);
CREATE INDEX IF NOT EXISTS idx_inquiries_created_at ON public.inquiries(created_at DESC);

-- 5. AUDIT LOGS TABLE
CREATE TABLE IF NOT EXISTS public.audit_logs (
    id TEXT PRIMARY KEY,
    action TEXT NOT NULL,
    target TEXT,
    details TEXT,
    timestamp TEXT NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

CREATE INDEX IF NOT EXISTS idx_audit_logs_created_at ON public.audit_logs(created_at DESC);

-- 6. GROUP DINING SESSIONS TABLE
CREATE TABLE IF NOT EXISTS public.group_sessions (
    id TEXT PRIMARY KEY,
    title TEXT NOT NULL,
    creator_id TEXT NOT NULL,
    creator_name TEXT NOT NULL,
    target_budget NUMERIC,
    target_area TEXT,
    status TEXT NOT NULL DEFAULT 'collecting',
    participants JSONB NOT NULL DEFAULT '[]'::jsonb,
    recommendations JSONB NOT NULL DEFAULT '[]'::jsonb,
    votes JSONB NOT NULL DEFAULT '[]'::jsonb,
    winning_restaurant_id TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now()),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

CREATE INDEX IF NOT EXISTS idx_group_sessions_status ON public.group_sessions(status);

-- ==============================================================================
-- 7. ROW LEVEL SECURITY (RLS) POLICIES
-- ==============================================================================
ALTER TABLE public.restaurants ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.reviews ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.inquiries ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.audit_logs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.group_sessions ENABLE ROW LEVEL SECURITY;

-- Allow public read access (anon and authenticated)
DROP POLICY IF EXISTS "Public read restaurants" ON public.restaurants;
CREATE POLICY "Public read restaurants" ON public.restaurants FOR SELECT USING (true);

DROP POLICY IF EXISTS "Public insert/update restaurants" ON public.restaurants;
CREATE POLICY "Public insert/update restaurants" ON public.restaurants FOR ALL USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "Public read reviews" ON public.reviews;
CREATE POLICY "Public read reviews" ON public.reviews FOR SELECT USING (true);

DROP POLICY IF EXISTS "Public insert/update reviews" ON public.reviews;
CREATE POLICY "Public insert/update reviews" ON public.reviews FOR ALL USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "Public insert inquiries" ON public.inquiries;
CREATE POLICY "Public insert inquiries" ON public.inquiries FOR ALL USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "Public read/write audit logs" ON public.audit_logs;
CREATE POLICY "Public read/write audit logs" ON public.audit_logs FOR ALL USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "Public read/write group sessions" ON public.group_sessions;
CREATE POLICY "Public read/write group sessions" ON public.group_sessions FOR ALL USING (true) WITH CHECK (true);

-- ==============================================================================
-- 8. REALTIME REPLICATION CONFIGURATION
-- ==============================================================================
-- Enable Realtime publication so clients receive instant live updates
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_publication WHERE pubname = 'supabase_realtime'
  ) THEN
    CREATE PUBLICATION supabase_realtime;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM pg_publication_tables 
    WHERE pubname = 'supabase_realtime' AND schemaname = 'public' AND tablename = 'restaurants'
  ) THEN
    ALTER PUBLICATION supabase_realtime ADD TABLE public.restaurants;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM pg_publication_tables 
    WHERE pubname = 'supabase_realtime' AND schemaname = 'public' AND tablename = 'reviews'
  ) THEN
    ALTER PUBLICATION supabase_realtime ADD TABLE public.reviews;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM pg_publication_tables 
    WHERE pubname = 'supabase_realtime' AND schemaname = 'public' AND tablename = 'group_sessions'
  ) THEN
    ALTER PUBLICATION supabase_realtime ADD TABLE public.group_sessions;
  END IF;
END $$;

-- ==============================================================================
-- 9. INITIAL PRODUCTION DATA (GORAKHPUR AUTHENTIC RESTAURANTS & REVIEWS)
-- ==============================================================================

-- 9.1 RESTAURANTS
INSERT INTO public.restaurants (
    id, name, area, city, description, categories, cuisines, popular_dishes,
    cost_for_two, average_rating, review_count, image_url, is_demo, phone, address,
    open_time, close_time, open_days, diet, status, owner_name, owner_email,
    facilities, menu, ratings_breakdown, price_range, distance_km
) VALUES
(
    'chaudhary-sweet-house',
    'Chaudhary Sweet House & Restaurant',
    'Golghar',
    'Gorakhpur',
    'Iconic Gorakhpur dining institution famous for pure desi ghee samosas, crispy chhole bhature, rich thalis, and fresh morning jalebis.',
    '["north-indian", "sweets", "street-food"]'::jsonb,
    '["North Indian", "Mithai", "Street Food"]'::jsonb,
    '["Desi Ghee Samosa", "Chhole Bhature", "Rasmalai", "Paneer Butter Masala"]'::jsonb,
    350, 4.7, 428, NULL, false,
    '+91 98380 44210', 'Cinema Road, Golghar, Gorakhpur', '08:00', '23:00',
    '["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]'::jsonb,
    'veg', 'Active', 'Vikas Chaudhary', 'owner.chaudhary@gorakhpurfoodguide.in',
    '["Air Conditioned", "Family Dining Hall", "Takeaway Counter", "UPI & Card Payments"]'::jsonb,
    '[
      {"id": "csh-1", "name": "Desi Ghee Samosa (2 pcs)", "price": 40, "category": "Starters", "diet": "veg", "isAvailable": true, "isFeatured": true, "description": "Golden flaky crust filled with spiced potatoes and peas."},
      {"id": "csh-2", "name": "Amritsari Chhole Bhature", "price": 150, "category": "Main Course", "diet": "veg", "isAvailable": true, "isFeatured": true, "description": "Fluffy paneer-stuffed bhature paired with tangy slow-simmered chickpeas."},
      {"id": "csh-3", "name": "Special Kesar Rasmalai (2 pcs)", "price": 90, "category": "Desserts", "diet": "veg", "isAvailable": true, "isFeatured": true, "description": "Melt-in-mouth chenna discs in saffron clotted milk."}
    ]'::jsonb,
    '{"food": 4.8, "taste": 4.9, "hygiene": 4.6, "service": 4.4, "ambience": 4.3}'::jsonb,
    '{"min": 140, "max": 350}'::jsonb,
    0.5
),
(
    'bobis-restaurant',
    'Bobis Restaurant & Barbeque',
    'Civil Lines',
    'Gorakhpur',
    'Premier Mughlai and tandoori barbeque hub on Park Road, celebrated for succulent kebabs, slow-simmered gravies, and live coal grilling.',
    '["north-indian"]'::jsonb,
    '["North Indian", "Mughlai", "Barbeque"]'::jsonb,
    '["Tandoori Chicken", "Butter Chicken", "Dal Makhani", "Mutton Korma"]'::jsonb,
    850, 4.6, 380, NULL, false,
    '+91 98380 55120', 'Park Road, Civil Lines, Gorakhpur', '12:00', '23:30',
    '["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]'::jsonb,
    'both', 'Active', 'Gurpreet Singh', 'bobis.dine@gorakhpurfoodguide.in',
    '["Air Conditioned", "Live Barbeque", "Private Dining Area", "Free Wi-Fi", "Valet Parking"]'::jsonb,
    '[
      {"id": "bob-1", "name": "Charcoal Tandoori Murgh (Full)", "price": 420, "category": "Starters", "diet": "nonveg", "isAvailable": true, "isFeatured": true, "description": "Spring chicken marinated 12 hours in hung curd and tandoori spices."},
      {"id": "bob-2", "name": "Murgh Makhani (Butter Chicken)", "price": 380, "category": "Main Course", "diet": "nonveg", "isAvailable": true, "isFeatured": true, "description": "Tandoori chicken shreds simmered in velvety tomato cashew gravy."}
    ]'::jsonb,
    '{"food": 4.7, "taste": 4.8, "hygiene": 4.5, "service": 4.4, "ambience": 4.6}'::jsonb,
    '{"min": 350, "max": 850}'::jsonb,
    1.1
),
(
    'the-lakefront-lounge',
    'The Lakefront Lounge & Cafe',
    'Taramandal',
    'Gorakhpur',
    'Scenic waterfront cafe overlooking the majestic Ramgarh Taal, serving wood-fired pizzas, artisanal coffees, and Italian continental delicacies.',
    '["cafe", "fast-food"]'::jsonb,
    '["Cafe", "Continental", "Italian", "Pizza"]'::jsonb,
    '["Wood-fired Pizza", "Alfredo Pasta", "Cold Brew", "Hazelnut Frappe"]'::jsonb,
    650, 4.8, 512, NULL, false,
    '+91 98380 77340', 'Marine Drive, Ramgarh Taal, Taramandal, Gorakhpur', '11:00', '23:30',
    '["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]'::jsonb,
    'both', 'Active', 'Ananya Srivastava', 'lakefront.cafe@gorakhpurfoodguide.in',
    '["Lake View Seating", "Outdoor Terrace", "High-Speed Wi-Fi", "Air Conditioned", "Live Music"]'::jsonb,
    '[
      {"id": "lfl-1", "name": "Lakefront Farmhouse Pizza (12\")", "price": 380, "category": "Main Course", "diet": "veg", "isAvailable": true, "isFeatured": true, "description": "Wood-fired crust with mozzarella, button mushrooms, capsicum and olives."},
      {"id": "lfl-2", "name": "Nitro Cold Brew Coffee", "price": 160, "category": "Beverages", "diet": "veg", "isAvailable": true, "isFeatured": true, "description": "18-hour cold steeped single-origin Arabica roast."}
    ]'::jsonb,
    '{"food": 4.7, "taste": 4.8, "hygiene": 4.9, "service": 4.7, "ambience": 5.0}'::jsonb,
    '{"min": 250, "max": 650}'::jsonb,
    3.4
),
(
    'shri-ram-sweets',
    'Shri Ram Sweets & Chaat Corner',
    'Asuran Chowk',
    'Gorakhpur',
    'Legendary street food hotspot at Asuran Chowk known for crunchy desi ghee aloo tikkis, tangy matar chaat, and traditional khoya sweets.',
    '["street-food", "sweets"]'::jsonb,
    '["Street Food", "Chaat", "Mithai"]'::jsonb,
    '["Aloo Tikki Chaat", "Desi Ghee Jalebi", "Matar Chaat", "Dahi Bhalla"]'::jsonb,
    200, 4.6, 640, NULL, false,
    '+91 98380 91823', 'Asuran Chowk, Medical College Road, Gorakhpur', '07:30', '22:30',
    '["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]'::jsonb,
    'veg', 'Active', 'Rameshwar Gupta', 'shriram.sweets@gorakhpurfoodguide.in',
    '["Fast Service", "Desi Ghee Preparation", "Takeaway", "Digital Payments"]'::jsonb,
    '[
      {"id": "srs-1", "name": "Desi Ghee Aloo Tikki Chaat", "price": 70, "category": "Starters", "diet": "veg", "isAvailable": true, "isFeatured": true, "description": "Crisp potato patties with spiced matar and sweetened dahi."},
      {"id": "srs-2", "name": "Gorakhpuri Dahi Bhalla", "price": 70, "category": "Starters", "diet": "veg", "isAvailable": true, "isFeatured": true, "description": "Soft lentil dumplings in sweetened churned curd."}
    ]'::jsonb,
    '{"food": 4.8, "taste": 4.9, "hygiene": 4.3, "service": 4.3, "ambience": 4.0}'::jsonb,
    '{"min": 60, "max": 200}'::jsonb,
    2.1
)
ON CONFLICT (id) DO UPDATE SET
    name = EXCLUDED.name,
    area = EXCLUDED.area,
    city = EXCLUDED.city,
    description = EXCLUDED.description,
    categories = EXCLUDED.categories,
    cuisines = EXCLUDED.cuisines,
    popular_dishes = EXCLUDED.popular_dishes,
    cost_for_two = EXCLUDED.cost_for_two,
    average_rating = EXCLUDED.average_rating,
    review_count = EXCLUDED.review_count,
    facilities = EXCLUDED.facilities,
    menu = EXCLUDED.menu,
    ratings_breakdown = EXCLUDED.ratings_breakdown,
    price_range = EXCLUDED.price_range,
    updated_at = timezone('utc'::text, now());

-- 9.2 REVIEWS
INSERT INTO public.reviews (
    id, restaurant_id, restaurant_name, user_name, user_email, rating,
    text, tags, photo_url, date, is_demo, is_flagged, owner_reply
) VALUES
(
    'rev-csh-1',
    'chaudhary-sweet-house',
    'Chaudhary Sweet House & Restaurant',
    'Aarav Sharma',
    'aarav.sharma@gmail.com',
    5,
    'Best Chhole Bhature and Desi Ghee Samosas in all of Golghar! Quality never dips.',
    '["Delicious Food", "Good Value", "Clean Place"]'::jsonb,
    NULL,
    '2026-10-15',
    false,
    false,
    '{"text": "Thank you Aarav ji! We take immense pride in preserving our heritage desi ghee recipes.", "date": "2026-10-16"}'::jsonb
),
(
    'rev-lfl-1',
    'the-lakefront-lounge',
    'The Lakefront Lounge & Cafe',
    'Pooja Verma',
    'pooja.verma@gmail.com',
    5,
    'Unbeatable view of Ramgarh Taal during sunset! Wood-fired pizza was outstanding.',
    '["Great Ambience", "Delicious Food", "Friendly Staff"]'::jsonb,
    NULL,
    '2026-10-20',
    false,
    false,
    '{"text": "So happy you enjoyed the sunset vibes, Pooja! Welcome back anytime.", "date": "2026-10-21"}'::jsonb
)
ON CONFLICT (id) DO UPDATE SET
    restaurant_id = EXCLUDED.restaurant_id,
    restaurant_name = EXCLUDED.restaurant_name,
    user_name = EXCLUDED.user_name,
    rating = EXCLUDED.rating,
    text = EXCLUDED.text,
    tags = EXCLUDED.tags,
    date = EXCLUDED.date,
    owner_reply = EXCLUDED.owner_reply,
    updated_at = timezone('utc'::text, now());

