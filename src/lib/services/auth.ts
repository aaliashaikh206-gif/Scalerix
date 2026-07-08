'use server';

import { createClient } from '@/lib/supabase/server';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function loginUser(formData: FormData) {
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  if (!email || !password) {
    return { error: 'Email and password are required' };
  }

  const supabase = await createClient();

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    return { error: error.message };
  }

  revalidatePath('/', 'layout');
  redirect('/dashboard');
}

export async function registerUser(formData: FormData) {
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;
  const fullName = formData.get('fullName') as string;

  if (!email || !password || !fullName) {
    return { error: 'All fields are required' };
  }

  const supabase = await createClient();

  // 1. Sign up the user (auto logs in if email confirmations are disabled)
  const { error: authError } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        full_name: fullName,
      },
    },
  });

  if (authError) {
    return { error: authError.message };
  }

  // Profile creation is handled automatically by the database trigger on auth.users

  revalidatePath('/', 'layout');
  // 3. Redirect directly to the dashboard
  redirect('/dashboard');
}

export async function logoutUser() {
  const supabase = await createClient();
  await supabase.auth.signOut();
  revalidatePath('/', 'layout');
  redirect('/login');
}

export async function resetPassword(formData: FormData) {
  const email = formData.get('email') as string;

  if (!email) {
    return { error: 'Email is required' };
  }

  const supabase = await createClient();

  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/update-password`,
  });

  if (error) {
    return { error: error.message };
  }

  return { success: true };
}

export async function updateProfile(formData: FormData) {
  const fullName = formData.get('fullName') as string;
  
  if (!fullName) {
    throw new Error('Full Name is required');
  }

  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    throw new Error('Not authenticated');
  }

  // Update profile table
  const { error: profileError } = await supabase
    .from('profiles')
    .update({ full_name: fullName })
    .eq('id', user.id);

  if (profileError) {
    throw new Error(profileError.message);
  }

  // Also update user metadata
  await supabase.auth.updateUser({
    data: { full_name: fullName }
  });

  revalidatePath('/dashboard', 'layout');
  redirect('/dashboard');
}

export async function updatePassword(formData: FormData) {
  const password = formData.get('password') as string;
  const confirmPassword = formData.get('confirmPassword') as string;

  if (!password || password !== confirmPassword) {
    throw new Error('Passwords must match and cannot be empty');
  }

  const supabase = await createClient();
  const { error } = await supabase.auth.updateUser({
    password: password
  });

  if (error) {
    throw new Error(error.message);
  }

  revalidatePath('/dashboard', 'layout');
  redirect('/dashboard');
}

export async function updateSettings(formData: FormData) {
  const emailNotifications = formData.get('emailNotifications') === 'on';

  const supabase = await createClient();
  
  const { error } = await supabase.auth.updateUser({
    data: { email_notifications: emailNotifications }
  });

  if (error) {
    throw new Error(error.message);
  }

  revalidatePath('/dashboard', 'layout');
  redirect('/dashboard');
}
