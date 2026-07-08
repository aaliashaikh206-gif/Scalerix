import { createClient } from '@/lib/supabase/server';
import { logoutUser } from '@/lib/services/auth';
import { LogOut, User, Mail, Shield, Calendar, LogIn, Activity, Clock, CheckCircle2 } from 'lucide-react';

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
  const lastLogin = user?.last_sign_in_at ? new Date(user.last_sign_in_at).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute:'2-digit' }) : 'Unknown';

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="glass-panel border border-border/50 rounded-3xl p-8 mb-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-heading font-bold text-white mb-2">Dashboard</h1>
          <p className="text-text-secondary">Welcome back, {profile?.full_name || user?.user_metadata?.full_name || user?.email}</p>
        </div>
        <form action={logoutUser}>
          <button type="submit" className="flex items-center gap-2 px-4 py-2 rounded-xl border border-border/50 hover:bg-surface transition-colors text-white text-sm font-medium shadow-[0_0_15px_rgba(255,255,255,0.05)]">
            <LogOut size={16} />
            Sign Out
          </button>
        </form>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Card 1: Identity */}
        <div className="glass-panel border border-border/50 rounded-2xl p-6 bg-surface/10 hover:bg-surface/20 transition-colors">
          <h3 className="text-sm font-medium text-text-secondary uppercase tracking-wider mb-6 flex items-center gap-2">
            <User size={16} /> Personal Info
          </h3>
          <div className="space-y-4">
            <div>
              <p className="text-xs text-text-secondary mb-1 flex items-center gap-1.5"><User size={12}/> Name</p>
              <p className="font-medium text-white">{profile?.full_name || user?.user_metadata?.full_name || 'Not provided'}</p>
            </div>
            <div>
              <p className="text-xs text-text-secondary mb-1 flex items-center gap-1.5"><Mail size={12}/> Email</p>
              <p className="font-medium text-white">{user?.email || 'Unknown'}</p>
            </div>
            <div>
              <p className="text-xs text-text-secondary mb-1 flex items-center gap-1.5"><Shield size={12}/> Account Status</p>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span> Active
              </div>
            </div>
          </div>
        </div>

        {/* Card 2: Account Details */}
        <div className="glass-panel border border-border/50 rounded-2xl p-6 bg-surface/10 hover:bg-surface/20 transition-colors">
          <h3 className="text-sm font-medium text-text-secondary uppercase tracking-wider mb-6 flex items-center gap-2">
            <Shield size={16} /> Account Details
          </h3>
          <div className="space-y-4">
            <div>
              <p className="text-xs text-text-secondary mb-1 flex items-center gap-1.5"><Calendar size={12}/> Joined Date</p>
              <p className="font-medium text-white">{joinDate}</p>
            </div>
            <div>
              <p className="text-xs text-text-secondary mb-1 flex items-center gap-1.5"><LogIn size={12}/> Total Logins</p>
              <p className="font-medium text-white">1</p>
            </div>
            <div>
              <p className="text-xs text-text-secondary mb-1 flex items-center gap-1.5"><Shield size={12}/> Account Type</p>
              <p className="font-medium text-white capitalize">{profile?.role || 'User'}</p>
            </div>
          </div>
        </div>

        {/* Card 3: Activity & Progress */}
        <div className="glass-panel border border-border/50 rounded-2xl p-6 bg-surface/10 hover:bg-surface/20 transition-colors">
          <h3 className="text-sm font-medium text-text-secondary uppercase tracking-wider mb-6 flex items-center gap-2">
            <Activity size={16} /> Activity
          </h3>
          <div className="space-y-4">
            <div>
              <p className="text-xs text-text-secondary mb-1 flex items-center gap-1.5"><Clock size={12}/> Last Login</p>
              <p className="font-medium text-white">{lastLogin}</p>
            </div>
            <div>
              <p className="text-xs text-text-secondary mb-1 flex items-center gap-1.5"><Activity size={12}/> Recent Activity</p>
              <p className="font-medium text-white">Account Created</p>
            </div>
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <p className="text-xs text-text-secondary flex items-center gap-1.5"><CheckCircle2 size={12}/> Profile Completion</p>
                <span className="text-xs font-bold text-white">100%</span>
              </div>
              <div className="w-full h-1.5 bg-background rounded-full overflow-hidden border border-border">
                <div className="h-full bg-white w-full shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
