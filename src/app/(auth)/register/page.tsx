"use client";

import { useState, useTransition } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import { registerUser } from "@/lib/services/auth";

export default function RegisterPage() {
  const [isPending, startTransition] = useTransition();
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const password = formData.get("password") as string;
    const confirmPassword = formData.get("confirmPassword") as string;

    setErrors({});
    
    if (password !== confirmPassword) {
      setErrors({ confirmPassword: "Passwords do not match." });
      return;
    }
    
    startTransition(async () => {
      const result = await registerUser(formData);
      if (result?.error) {
        toast.error(result.error);
      } else {
        toast.success("Account created successfully!");
      }
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden bg-background">
      <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center">
        <div className="w-[500px] h-[500px] rounded-full bg-white/5 blur-[120px]" />
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="glass-panel w-full max-w-md rounded-3xl p-8 relative z-10 border border-white/10 shadow-2xl"
      >
        <div className="flex flex-col items-center mb-6">
          <div className="w-16 h-16 rounded-full overflow-hidden mb-4 border border-white/20 p-2 bg-white/5">
            <Image src="/logo.jpg" alt="Scalerix" width={64} height={64} className="object-contain w-full h-full" />
          </div>
          <h2 className="text-2xl font-heading font-bold text-white mb-1">Create Account</h2>
          <p className="text-text-secondary text-sm">Join Scalerix to get started.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input 
            name="fullName"
            type="text" 
            placeholder="Full Name" 
            required
            className="input-premium"
          />
          <input 
            name="email"
            type="email" 
            placeholder="Email Address" 
            required
            className="input-premium"
          />
          <input 
            name="password"
            type="password" 
            placeholder="Password" 
            required
            className="input-premium"
          />
          <div>
            <input 
              name="confirmPassword"
              type="password" 
              placeholder="Confirm Password" 
              required
              className={`input-premium ${errors.confirmPassword ? 'border-red-500 ring-red-500/20' : ''}`}
            />
            {errors.confirmPassword && <p className="text-red-400 text-xs mt-1 px-1">{errors.confirmPassword}</p>}
          </div>

          <button 
            type="submit" 
            disabled={isPending}
            className="btn-primary w-full flex items-center justify-center gap-2 mt-4 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isPending ? <Loader2 size={18} className="animate-spin" /> : "Create Account"}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-text-secondary">
          Already have an account?{" "}
          <Link href="/login" className="text-white hover:underline font-medium">
            Login
          </Link>
        </p>
      </motion.div>
    </div>
  );
}
