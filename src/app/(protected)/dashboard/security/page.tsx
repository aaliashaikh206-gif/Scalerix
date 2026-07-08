import { updatePassword } from '@/lib/services/auth';
import Link from 'next/link';
import { ArrowLeft, Shield } from 'lucide-react';

export default function SecurityPage() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
      <Link href="/dashboard" className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-white transition-colors mb-6">
        <ArrowLeft size={16} /> Back to Dashboard
      </Link>
      
      <div className="glass-panel border border-white/10 rounded-3xl p-8 shadow-2xl">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
            <Shield size={20} className="text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-heading font-bold text-white">Security</h1>
            <p className="text-text-secondary text-sm">Update your password to keep your account safe</p>
          </div>
        </div>

        <form action={updatePassword} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-text-secondary mb-2">New Password</label>
            <input 
              name="password"
              type="password" 
              placeholder="Enter new password" 
              required
              minLength={6}
              className="input-premium"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-text-secondary mb-2">Confirm New Password</label>
            <input 
              name="confirmPassword"
              type="password" 
              placeholder="Confirm new password" 
              required
              minLength={6}
              className="input-premium"
            />
          </div>

          <div className="pt-4 border-t border-border/50">
            <button type="submit" className="btn-primary w-full sm:w-auto">
              Update Password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
