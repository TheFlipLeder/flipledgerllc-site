// Shared Supabase client — loaded by every portal page (login.html, dashboard.html, etc.)
// Fill in your project's URL and anon key below. Find them in:
// Supabase dashboard -> Project Settings -> API

const SUPABASE_URL = "PASTE_YOUR_SUPABASE_URL_HERE";
const SUPABASE_ANON_KEY = "PASTE_YOUR_SUPABASE_ANON_KEY_HERE";

const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
