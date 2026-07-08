"use client";

import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="py-24 bg-surface/50 border-y border-border">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-heading font-bold text-white mb-6"
        >
          About Scalerix
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg text-text-secondary leading-relaxed mb-4 font-light"
        >
          Scalerix is an AI-powered platform designed to help students begin their learning journey with confidence. From creating an account to exploring future career guidance, everything starts in one place.
        </motion.p>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-lg text-text-secondary leading-relaxed font-light"
        >
          Our mission is to simplify the transition from education to a professional career through smart insights and a tailored experience, all wrapped in a minimal and premium interface.
        </motion.p>
      </div>
    </section>
  );
}
