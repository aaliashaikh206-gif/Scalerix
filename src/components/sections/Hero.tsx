"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section id="home" className="relative w-full h-full flex items-center justify-center overflow-hidden">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 -z-10 bg-animated-grid pointer-events-none" />

      {/* Subtle Background Glow */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center"
      >
        <motion.div 
          animate={{ scale: [1, 1.05, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="w-[600px] h-[600px] rounded-full bg-white/5 blur-[120px]" 
        />
      </motion.div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="w-20 h-20 mx-auto mb-8 relative rounded-full overflow-hidden border border-white/10 shadow-[0_0_30px_rgba(255,255,255,0.05)]"
        >
          <Image src="/logo.jpg" alt="Scalerix Logo" fill className="object-cover" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl font-heading font-bold text-white tracking-tight mb-6"
        >
          AI-Powered Career Guidance <br className="hidden md:block" />
          <span className="text-text-secondary">for Students</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-text-secondary mb-10 max-w-2xl mx-auto font-light leading-relaxed"
        >
          Scalerix helps students start their career journey with smart AI guidance and personalized learning.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/register"
            className="btn-primary w-full sm:w-auto text-center"
          >
            Join Waitlist
          </Link>
          <Link
            href="/register"
            className="btn-secondary w-full sm:w-auto text-center"
          >
            Register
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
