"use client";

import { useTransition } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { ArrowRight, Loader2, ArrowLeft } from "lucide-react";
import { resetPassword } from "@/lib/services/auth";

export default function ForgotPasswordPage() {
  const [isPending, startTransition] = useTransition();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    startTransition(async () => {
      const result = await resetPassword(formData);
      if (result?.error) {
        toast.error(result.error);
      } else {
        toast.success("Password reset instructions have been sent to your email.");
      }
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
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
          <h2 className="text-3xl font-heading font-bold text-white mb-2">Reset Password</h2>
          <p className="text-text-secondary text-sm text-center">
            Enter your email and we&apos;ll send you instructions to reset your password.
          </p>
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
          
          <button 
            type="submit" 
            disabled={isPending}
            className="w-full bg-white text-black px-6 py-3.5 rounded-full font-medium flex items-center justify-center gap-2 hover:bg-white/90 transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] group disabled:opacity-70 disabled:cursor-not-allowed mt-6"
          >
            {isPending ? <Loader2 size={18} className="animate-spin" /> : (
              <>
                Send Instructions
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </button>
        </form>

        <div className="mt-8">
          <Link href="/login" className="text-text-secondary hover:text-white transition-colors flex items-center justify-center gap-2 text-sm font-medium">
            <ArrowLeft size={16} />
            Back to Sign In
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
