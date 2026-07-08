import { createClient } from '@/lib/supabase/server';
import { updateSettings } from '@/lib/services/auth';
import Link from 'next/link';
import { ArrowLeft, Bell } from 'lucide-react';

export default async function SettingsPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  
  const emailNotifications = user?.user_metadata?.email_notifications ?? true; // default true

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
      <Link href="/dashboard" className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-white transition-colors mb-6">
        <ArrowLeft size={16} /> Back to Dashboard
      </Link>
      
      <div className="glass-panel border border-white/10 rounded-3xl p-8 shadow-2xl">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
            <Bell size={20} className="text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-heading font-bold text-white">Notification Preferences</h1>
            <p className="text-text-secondary text-sm">Manage how you receive updates</p>
          </div>
        </div>

        <form action={updateSettings} className="space-y-6">
          <div className="flex items-center justify-between p-4 rounded-2xl bg-surface/50 border border-border">
            <div>
              <label htmlFor="emailNotifications" className="font-medium text-white block">Email Notifications</label>
              <p className="text-sm text-text-secondary">Receive updates and guidance directly to your inbox.</p>
            </div>
            <div className="relative inline-flex items-center cursor-pointer">
              <input 
                type="checkbox" 
                id="emailNotifications" 
                name="emailNotifications" 
                defaultChecked={emailNotifications}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-surface border border-border peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-white/20"></div>
            </div>
          </div>

          <div className="pt-4 border-t border-border/50">
            <button type="submit" className="btn-primary w-full sm:w-auto">
              Save Preferences
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
