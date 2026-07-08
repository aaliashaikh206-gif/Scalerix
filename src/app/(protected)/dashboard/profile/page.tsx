import { createClient } from '@/lib/supabase/server';
import { updateProfile } from '@/lib/services/auth';
import Link from 'next/link';
import { ArrowLeft, User } from 'lucide-react';

export default async function EditProfilePage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  
  let profile = null;
  if (user) {
    const { data } = await supabase.from('profiles').select('full_name').eq('id', user.id).single();
    profile = data;
  }

  const defaultName = profile?.full_name || user?.user_metadata?.full_name || '';

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
      <Link href="/dashboard" className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-white transition-colors mb-6">
        <ArrowLeft size={16} /> Back to Dashboard
      </Link>
      
      <div className="glass-panel border border-white/10 rounded-3xl p-8 shadow-2xl">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
            <User size={20} className="text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-heading font-bold text-white">Edit Profile</h1>
            <p className="text-text-secondary text-sm">Update your personal information</p>
          </div>
        </div>

        <form action={updateProfile} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-text-secondary mb-2">Full Name</label>
            <input 
              name="fullName"
              type="text" 
              defaultValue={defaultName}
              placeholder="Your Full Name" 
              required
              className="input-premium"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-text-secondary mb-2">Email Address</label>
            <input 
              type="email" 
              value={user?.email || ''}
              disabled
              className="input-premium opacity-50 cursor-not-allowed"
            />
            <p className="text-xs text-text-secondary mt-1">Email cannot be changed at this time.</p>
          </div>

          <div className="pt-4 border-t border-border/50">
            <button type="submit" className="btn-primary w-full sm:w-auto">
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
