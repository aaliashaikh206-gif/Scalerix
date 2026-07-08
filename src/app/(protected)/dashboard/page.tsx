import { createClient } from '@/lib/supabase/server';
import { logoutUser } from '@/lib/services/auth';
import { LogOut, User, Mail, Shield, Calendar, Settings, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default async function DashboardPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  // Fetch profile data
  let profile = null;
  if (user) {
    const { data } = await supabase.from('profiles').select('*').eq('id', user.id).single();
    profile = data;
  }

  const joinDate = profile?.created_at ? new Date(profile.created_at).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) : 'Unknown';

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <div className="glass-panel border border-white/10 rounded-3xl p-8 mb-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-2xl">
        <div>
          <h1 className="text-3xl font-heading font-bold text-white mb-2">Welcome, {profile?.full_name?.split(' ')[0] || 'User'}!</h1>
          <p className="text-text-secondary text-sm">Here is an overview of your account.</p>
        </div>
        <form action={logoutUser}>
          <button type="submit" className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/20 hover:bg-white hover:text-black transition-all text-white text-sm font-medium shadow-[0_0_15px_rgba(255,255,255,0.05)]">
            <LogOut size={16} />
            Sign Out
          </button>
        </form>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Card 1: Identity */}
        <div className="glass-panel border border-white/10 rounded-3xl p-8 hover-card">
          <h3 className="text-sm font-medium text-text-secondary uppercase tracking-wider mb-6 flex items-center gap-2">
            <User size={16} /> Account Details
          </h3>
          <div className="space-y-5">
            <div className="flex justify-between items-center border-b border-border/50 pb-3">
              <p className="text-sm text-text-secondary flex items-center gap-2"><User size={14}/> Name</p>
              <p className="font-medium text-white text-sm">{profile?.full_name || user?.user_metadata?.full_name || 'Not provided'}</p>
            </div>
            <div className="flex justify-between items-center border-b border-border/50 pb-3">
              <p className="text-sm text-text-secondary flex items-center gap-2"><Mail size={14}/> Email</p>
              <p className="font-medium text-white text-sm">{user?.email || 'Unknown'}</p>
            </div>
            <div className="flex justify-between items-center border-b border-border/50 pb-3">
              <p className="text-sm text-text-secondary flex items-center gap-2"><Calendar size={14}/> Joined Date</p>
              <p className="font-medium text-white text-sm">{joinDate}</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-sm text-text-secondary flex items-center gap-2"><Shield size={14}/> Status</p>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white text-xs font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-white"></span> Active
              </div>
            </div>
          </div>
        </div>

        {/* Card 2: Quick Actions */}
        <div className="glass-panel border border-white/10 rounded-3xl p-8 hover-card">
          <h3 className="text-sm font-medium text-text-secondary uppercase tracking-wider mb-6 flex items-center gap-2">
            <Settings size={16} /> Quick Actions
          </h3>
          <div className="space-y-4">
            <Link href="/dashboard/profile" className="w-full flex items-center justify-between p-4 rounded-2xl bg-surface/50 border border-border hover:bg-white/5 transition-colors group">
              <span className="text-sm font-medium text-white">Edit Profile</span>
              <ArrowRight size={16} className="text-text-secondary group-hover:text-white transition-all group-hover:translate-x-1" />
            </Link>
            <Link href="/dashboard/security" className="w-full flex items-center justify-between p-4 rounded-2xl bg-surface/50 border border-border hover:bg-white/5 transition-colors group">
              <span className="text-sm font-medium text-white">Change Password</span>
              <ArrowRight size={16} className="text-text-secondary group-hover:text-white transition-all group-hover:translate-x-1" />
            </Link>
            <Link href="/dashboard/settings" className="w-full flex items-center justify-between p-4 rounded-2xl bg-surface/50 border border-border hover:bg-white/5 transition-colors group">
              <span className="text-sm font-medium text-white">Notification Preferences</span>
              <ArrowRight size={16} className="text-text-secondary group-hover:text-white transition-all group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
