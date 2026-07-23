import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

// Este cliente usa la llave "anon" (pública), que solo puede LEER productos,
// gracias a la regla de seguridad (RLS) que ya creamos en Supabase.
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
