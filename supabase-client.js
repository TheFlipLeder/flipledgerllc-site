// Shared Supabase client — loaded by every portal page (login.html, dashboard.html, etc.)
// Fill in your project's URL and anon key below. Find them in:
// Supabase dashboard -> Project Settings -> API

const SUPABASE_URL = "https://xspaofaiffxrqdebvgih.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhzcGFvZmFpZmZ4cnFkZWJ2Z2loIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTA1MTA1MTksImV4cCI6MjEwNjA4NjUxOX0.J7K-UlvpJOdnFPuJetc1AVa7cr0XhRErWt22khIpKmA";

const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
