"use client";

import { useState, useTransition } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { ArrowRight, Loader2 } from "lucide-react";
import { registerUser } from "@/lib/services/auth";

export default function RegisterPage() {
  const [isPending, startTransition] = useTransition();
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validatePassword = (password: string) => {
    if (password.length < 8) return "Password must be at least 8 characters.";
    if (!/[A-Z]/.test(password)) return "Password must contain an uppercase letter.";
    if (!/[a-z]/.test(password)) return "Password must contain a lowercase letter.";
    if (!/[0-9]/.test(password)) return "Password must contain a number.";
    if (!/[^A-Za-z0-9]/.test(password)) return "Password must contain a special character.";
    return null;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const password = formData.get("password") as string;
    const confirmPassword = formData.get("confirmPassword") as string;
    const terms = formData.get("terms");

    setErrors({});
    let hasError = false;
    const newErrors: { [key: string]: string } = {};

    const passwordError = validatePassword(password);
    if (passwordError) {
      newErrors.password = passwordError;
      hasError = true;
    }

    if (password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match.";
      hasError = true;
    }

    if (!terms) {
      newErrors.terms = "You must accept the terms and conditions.";
      hasError = true;
    }

    if (hasError) {
      setErrors(newErrors);
      return;
    }
    
    startTransition(async () => {
      const result = await registerUser(formData);
      if (result?.error) {
        toast.error(result.error);
      } else {
        toast.success("Registration successful! Welcome to Scalerix.");
      }
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden py-12">
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
          <h2 className="text-3xl font-heading font-bold text-white mb-2">Create Account</h2>
          <p className="text-text-secondary text-sm">Join Scalerix and scale your career.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input 
              name="fullName"
              type="text" 
              placeholder="Full Name" 
              required
              className="w-full bg-surface border border-border rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-white/50 transition-colors"
            />
          </div>
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
              className={`w-full bg-surface border ${errors.password ? 'border-red-500' : 'border-border'} rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-white/50 transition-colors`}
            />
            {errors.password && <p className="text-red-400 text-xs mt-1">{errors.password}</p>}
          </div>
          <div>
            <input 
              name="confirmPassword"
              type="password" 
              placeholder="Confirm Password" 
              required
              className={`w-full bg-surface border ${errors.confirmPassword ? 'border-red-500' : 'border-border'} rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-white/50 transition-colors`}
            />
            {errors.confirmPassword && <p className="text-red-400 text-xs mt-1">{errors.confirmPassword}</p>}
          </div>
          
          <div className="flex items-start gap-2 text-sm">
            <input 
              type="checkbox" 
              name="terms" 
              className="mt-1 rounded border-border bg-surface text-white focus:ring-0 focus:ring-offset-0" 
            />
            <div>
              <span className="text-text-secondary">I accept the </span>
              <Link href="#" className="text-white hover:underline">Terms of Service</Link>
              <span className="text-text-secondary"> and </span>
              <Link href="#" className="text-white hover:underline">Privacy Policy</Link>
              {errors.terms && <p className="text-red-400 text-xs mt-1">{errors.terms}</p>}
            </div>
          </div>

          <button 
            type="submit" 
            disabled={isPending}
            className="w-full bg-white text-black px-6 py-3.5 rounded-full font-medium flex items-center justify-center gap-2 hover:bg-white/90 transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] group disabled:opacity-70 disabled:cursor-not-allowed mt-6"
          >
            {isPending ? <Loader2 size={18} className="animate-spin" /> : (
              <>
                Create Account
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </button>
        </form>

        <p className="mt-8 text-center text-sm text-text-secondary">
          Already have an account?{" "}
          <Link href="/login" className="text-white hover:underline font-medium">
            Sign In
          </Link>
        </p>
      </motion.div>
    </div>
  );
}
