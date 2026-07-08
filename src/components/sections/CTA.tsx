"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function CTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center">
        <div className="w-[400px] h-[400px] rounded-full bg-white/5 blur-[100px]" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-panel rounded-3xl p-12 border border-white/10 shadow-2xl"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-8">
            Start Your Journey with Scalerix
          </h2>
          <Link
            href="/register"
            className="btn-primary inline-block"
          >
            Create Free Account
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
