import { createClient } from "@supabase/supabase-js";

// You should replace these with your actual Supabase URL and Anon Key
// from your Supabase Project Settings > API
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || "https://your-project-url.supabase.co";
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || "your-anon-key";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
