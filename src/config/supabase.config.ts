import { createClient, SupabaseClient } from '@supabase/supabase-js';
import type { Database } from '../types/database.types';

const supabaseConfig = {
    url: process.env.SUPABASE_URL || '',
    anonKey: process.env.SUPABASE_ANON_KEY || '',
    serviceRoleKey: process.env.SUPABASE_SERVICE_ROLE_KEY || '',
};

// console.log('--- supabaseConfig init ---');
// console.log('SUPABASE_URL:', supabaseConfig.url ? 'defined' : 'empty');
// console.log('SUPABASE_ANON_KEY:', supabaseConfig.anonKey ? 'defined' : 'empty');
// console.log('SUPABASE_SERVICE_ROLE_KEY:', supabaseConfig.serviceRoleKey ? 'defined' : 'empty');


if (!supabaseConfig.url || !supabaseConfig.anonKey) {
    throw new Error('Missing Supabase configuration, please check environment variables SUPABASE_URL and SUPABASE_ANON_KEY');
}

export function createSupabaseClient(): SupabaseClient<Database> {
    return createClient<Database>(supabaseConfig.url, supabaseConfig.anonKey, {
        auth: {
            persistSession: true,
            autoRefreshToken: true,
        },
    });
}

export function createSupabaseServiceClient(): SupabaseClient<Database> {
    if (!supabaseConfig.serviceRoleKey) {
        throw new Error('Missing SUPABASE_SERVICE_ROLE_KEY, cannot create service client');
    }

    return createClient<Database>(supabaseConfig.url, supabaseConfig.serviceRoleKey, {
        auth: {
            persistSession: false,
            autoRefreshToken: false,
        },
    });
}

export const supabase: SupabaseClient<Database> = supabaseConfig.serviceRoleKey
    ? createSupabaseServiceClient()
    : createSupabaseClient();
