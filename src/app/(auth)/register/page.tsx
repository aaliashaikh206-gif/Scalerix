"use client";

import { useState, useTransition } from "react";
import Link from "next/link";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import { registerUser } from "@/lib/services/auth";

interface TechInputProps {
  label: string;
  type: string;
  name: string;
  placeholder?: string;
  required?: boolean;
  error?: string;
}

const TechInput = ({ label, type, name, placeholder, required, error }: TechInputProps) => (
  <div className={`relative border p-4 mt-6 group transition-colors ${error ? 'border-red-500/50' : 'border-white/10'} hover:border-white/20`}>
    {/* Corners + */}
    <span className="absolute -top-[9px] -left-[4px] text-white/40 text-sm font-mono leading-none pointer-events-none">+</span>
    <span className="absolute -top-[9px] -right-[4px] text-white/40 text-sm font-mono leading-none pointer-events-none">+</span>
    <span className="absolute -bottom-[9px] -left-[4px] text-white/40 text-sm font-mono leading-none pointer-events-none">+</span>
    <span className="absolute -bottom-[9px] -right-[4px] text-white/40 text-sm font-mono leading-none pointer-events-none">+</span>

    {/* Label */}
    <div className="absolute -top-[10px] left-4 bg-background px-2 flex items-center gap-2 pointer-events-none">
      <span className="text-white/20 italic text-xs font-mono font-bold">{"///"}</span>
      <span className="text-white/60 text-xs font-mono tracking-widest">{label}</span>
    </div>

    <input
      type={type}
      name={name}
      placeholder={placeholder}
      required={required}
      className="w-full bg-transparent border-none outline-none text-white/90 placeholder:text-white/20 font-mono text-sm py-1"
    />
  </div>
);

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
    <div className="min-h-screen flex items-center justify-center p-4 bg-noise bg-background relative overflow-hidden">
      {/* Top angled cut-out decorative element */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[240px] h-[20px] bg-black border-b border-l border-r border-white/5 z-0" 
        style={{ clipPath: "polygon(5% 100%, 95% 100%, 100% 0, 0 0)" }} 
      />

      <div className="w-full max-w-[440px] relative z-10 pt-12 pb-8">
        <div className="flex flex-col items-center mb-10 text-center">
          <div className="text-white/90 mb-5">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" fill="currentColor"/>
            </svg>
          </div>
          <h2 className="text-[32px] font-medium text-white mb-2 tracking-tight">Get Early Access</h2>
          <p className="text-text-secondary/50 text-sm font-light tracking-wide">Be among the first to experience Scalerix.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <TechInput 
            label="Name"
            name="fullName"
            type="text" 
            placeholder="Dr. Abdul Kalam" 
            required
          />
          <TechInput 
            label="Email"
            name="email"
            type="email" 
            placeholder="apj.kalam@nic.in" 
            required
          />
          <TechInput 
            label="Password"
            name="password"
            type="password" 
            placeholder="••••••••" 
            required
          />
          <div>
            <TechInput 
              label="Confirm Password"
              name="confirmPassword"
              type="password" 
              placeholder="••••••••" 
              required
              error={errors.confirmPassword}
            />
            {errors.confirmPassword && <p className="text-red-400/70 font-mono text-[11px] mt-2 px-4">{errors.confirmPassword}</p>}
          </div>

          <div className="mt-8 mb-8 px-4 flex items-center gap-3">
            <input type="checkbox" required className="w-[14px] h-[14px] rounded-[2px] border-white/20 bg-transparent appearance-none checked:bg-white/30 checked:border-white/50 border transition-all cursor-pointer relative after:content-[''] checked:after:absolute checked:after:inset-[3px] checked:after:bg-white/80 checked:after:rounded-[1px]" />
            <span className="text-white/30 text-xs font-mono">By signing up you accept Terms</span>
          </div>

          <button 
            type="submit" 
            disabled={isPending}
            className="w-full bg-[#141414] hover:bg-[#1a1a1a] border border-white/[0.03] text-white/70 hover:text-white/90 py-4 rounded-[14px] font-mono text-[13px] tracking-wider transition-colors flex items-center justify-center gap-2 disabled:opacity-50 shadow-[0_10px_30px_rgba(0,0,0,0.5)] mt-6"
          >
            {isPending ? <Loader2 size={16} className="animate-spin" /> : (
              <>Join Waitlist <span className="text-white/30 ml-1 group-hover:text-white/50 transition-colors">→</span></>
            )}
          </button>
        </form>

        <p className="mt-8 text-center text-xs font-mono text-text-secondary/40">
          Already have an account?{" "}
          <Link href="/login" className="text-white/50 hover:text-white/80 transition-colors">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
