"use client";

import { useTransition } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { ArrowRight, Loader2 } from "lucide-react";
import { loginUser } from "@/lib/services/auth";

export default function LoginPage() {
  const [isPending, startTransition] = useTransition();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    startTransition(async () => {
      const result = await loginUser(formData);
      if (result?.error) {
        toast.error(result.error);
      } else {
        toast.success("Login successful!");
      }
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[20%] left-[20%] w-[400px] h-[400px] rounded-full bg-white/5 blur-[100px]" />
        <div className="absolute bottom-[20%] right-[20%] w-[500px] h-[500px] rounded-full bg-white/5 blur-[120px]" />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="glass-panel w-full max-w-md rounded-3xl p-8 relative z-10 border border-border shadow-2xl"
      >
        <div className="flex flex-col items-center mb-8">
          {/* Logo with existing animation styling */}
          <div className="relative z-10 w-24 h-24 mb-6 border border-white/20 rounded-full flex items-center justify-center">
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
              className="absolute inset-0 border-t border-r border-white/40 rounded-full"
            />
            <motion.div 
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
              className="absolute inset-4 border-b border-l border-white/30 rounded-full"
            />
            <div className="w-16 h-16 bg-white shadow-[0_0_50px_rgba(255,255,255,0.3)] rounded-full flex items-center justify-center overflow-hidden">
              <Image src="/logo.jpg" alt="Scalerix Logo" width={64} height={64} className="object-cover w-full h-full" />
            </div>
          </div>
          <h2 className="text-3xl font-heading font-bold text-white mb-2">Welcome Back</h2>
          <p className="text-text-secondary text-sm">Sign in to your Scalerix account.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input 
              name="email"
              type="email" 
              placeholder="Email address" 
              required
              className="w-full bg-surface border border-border rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-white/50 transition-colors"
            />
          </div>
          <div>
            <input 
              name="password"
              type="password" 
              placeholder="Password" 
              required
              className="w-full bg-surface border border-border rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-white/50 transition-colors"
            />
          </div>
          
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-text-secondary cursor-pointer">
              <input type="checkbox" name="remember" className="rounded border-border bg-surface text-white focus:ring-0 focus:ring-offset-0" />
              <span>Remember me</span>
            </label>
            <Link href="/forgot-password" className="text-white hover:underline">
              Forgot password?
            </Link>
          </div>

          <button 
            type="submit" 
            disabled={isPending}
            className="w-full bg-white text-black px-6 py-3.5 rounded-full font-medium flex items-center justify-center gap-2 hover:bg-white/90 transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] group disabled:opacity-70 disabled:cursor-not-allowed mt-6"
          >
            {isPending ? <Loader2 size={18} className="animate-spin" /> : (
              <>
                Sign In
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </button>
        </form>

        <div className="mt-6">
          <button 
            type="button" 
            onClick={() => toast.info("Google OAuth is not configured on Supabase yet.")}
            className="w-full bg-surface border border-border px-6 py-3.5 rounded-full font-medium text-white flex items-center justify-center gap-2 hover:bg-surface/80 transition-all"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            Continue with Google
          </button>
        </div>

        <p className="mt-8 text-center text-sm text-text-secondary">
          Don&apos;t have an account?{" "}
          <Link href="/register" className="text-white hover:underline font-medium">
            Register here
          </Link>
        </p>
      </motion.div>
    </div>
  );
}
