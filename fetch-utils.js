const SUPABASE_URL = 'https://rtgjuzfenqqzvbeuakok.supabase.co';
const SUPABASE_KEY =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ0Z2p1emZlbnFxenZiZXVha29rIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjA0OTk4NTUsImV4cCI6MTk3NjA3NTg1NX0.8oeztp3xsNKS41oByRVPcWzX-MM8_vXfcKfiEyH8A5s';
const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

/* Auth related functions */

export function getUser() {
    return client.auth.user();
    // > Part A: supabase get user
}

export async function signUpUser(email, password) {
    cosnt response = client.auth.signUp({email, password});

    return response;
    // > Part A: supabase signup
}

export async function signInUser(email, password) {
    const response = client.auth.signIn({ email, password});

    return response;
    // > Part A: supabase signin
}

export async function signOutUser() {
    const response = client.auth.signOut();
    return response;
    // > Part B: supabase signout
}
