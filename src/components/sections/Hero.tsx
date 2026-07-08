"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, CheckCircle2, Bot } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen pt-32 pb-20 overflow-hidden flex items-center">
      {/* Background Gradients & Particles Placeholder */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-white/5 blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-white/5 blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          
          {/* Left Side: Copy & CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col gap-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/60 bg-surface/50 backdrop-blur-md w-fit">
              <Sparkles size={14} className="text-white" />
              <span className="text-xs font-medium tracking-wide text-text-secondary uppercase">
                Next-Gen Career Intelligence
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-heading font-bold leading-[1.1] tracking-tight">
              Scale Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-white/50">
                Career Journey.
              </span>
            </h1>

            <p className="text-lg text-text-secondary max-w-xl leading-relaxed">
              AI-powered personalized roadmaps, college predictions, and mentorship. Make data-driven decisions for your future, not guesses.
            </p>

            <div className="flex flex-wrap items-center gap-4 mt-2">
              <button className="bg-white text-black px-8 py-4 rounded-full font-medium flex items-center gap-2 hover:bg-white/90 transition-all hover:scale-105 shadow-[0_0_30px_rgba(255,255,255,0.15)] group">
                Request Early Access
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 rounded-full font-medium border border-border hover:bg-surface transition-all text-white">
                View Demo
              </button>
            </div>

            <div className="flex items-center gap-6 mt-6 pt-6 border-t border-border/50">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-background bg-surface flex items-center justify-center overflow-hidden">
                    <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i}&backgroundColor=111111`} alt="User" className="w-full h-full object-cover opacity-80" />
                  </div>
                ))}
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <svg key={i} className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm text-text-secondary mt-1">Trusted by 10,000+ students</span>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Visuals */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative lg:h-[600px] flex items-center justify-center lg:justify-end"
          >
            {/* Main AI Chat Mockup */}
            <div className="glass-panel w-full max-w-md rounded-2xl p-6 relative z-10 border border-border shadow-2xl">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border/50">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-black">
                  <Bot size={20} />
                </div>
                <div>
                  <h3 className="font-medium text-white">Scalerix AI</h3>
                  <p className="text-xs text-text-secondary flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-green-500 block"></span> Online
                  </p>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex justify-end">
                  <div className="bg-surface border border-border rounded-2xl rounded-tr-sm px-4 py-3 text-sm text-text-secondary max-w-[85%]">
                    What should I do after 10th if I love math but hate coding?
                  </div>
                </div>
                <div className="flex justify-start">
                  <div className="bg-white/5 border border-white/10 rounded-2xl rounded-tl-sm px-4 py-3 text-sm text-white max-w-[90%]">
                    Based on your profile, I recommend exploring <span className="font-semibold text-white">Actuarial Science</span>, <span className="font-semibold text-white">Quantitative Finance</span>, or <span className="font-semibold text-white">Architecture</span>. Let&apos;s build a roadmap.
                  </div>
                </div>
              </div>

              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Ask anything about your career..." 
                  className="w-full bg-surface border border-border rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-white/30 transition-colors"
                  readOnly
                />
                <div className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-lg bg-white flex items-center justify-center text-black">
                  <ArrowRight size={14} />
                </div>
              </div>
            </div>

            {/* Floating Cards */}
            <motion.div 
              animate={{ y: [-10, 10, -10] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="absolute top-10 -left-12 glass-panel p-4 rounded-xl border border-border/50 hidden md:flex items-center gap-3 shadow-xl z-20"
            >
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white">
                <CheckCircle2 size={18} />
              </div>
              <div>
                <p className="text-xs text-text-secondary uppercase tracking-wider">Profile Match</p>
                <p className="font-medium text-white">98% Fit Found</p>
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [10, -10, 10] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="absolute bottom-16 -right-8 glass-panel p-4 rounded-xl border border-border/50 hidden md:block shadow-xl z-20"
            >
              <p className="text-xs text-text-secondary uppercase tracking-wider mb-1">Top Career Path</p>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-white" />
                <p className="font-medium text-white text-sm">Data Scientist</p>
              </div>
              <div className="w-full h-1 bg-surface mt-3 rounded-full overflow-hidden">
                <div className="h-full bg-white w-[85%]" />
              </div>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
