"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Scalerix completely changed my perspective. I went from being confused about my major to securing a top-tier software engineering internship in just 6 months.",
    name: "Priya Sharma",
    role: "Student, Computer Science",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Priya&backgroundColor=111111"
  },
  {
    quote: "As a parent, the biggest relief was seeing a structured, data-driven path for my son. The college predictor was incredibly accurate.",
    name: "Rajesh Kumar",
    role: "Parent",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rajesh&backgroundColor=111111"
  },
  {
    quote: "I use Scalerix to mentor students at scale. The AI handles the initial assessments, allowing me to focus on deep, meaningful conversations.",
    name: "Sarah Chen",
    role: "Senior PM, Industry Mentor",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah&backgroundColor=111111"
  },
  {
    quote: "The resume builder and interview coach helped me transition from operations into data analytics seamlessly. Worth every minute.",
    name: "Marcus Johnson",
    role: "Working Professional",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus&backgroundColor=111111"
  }
];

export function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end start"]
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

  return (
    <section id="testimonials" className="py-32 bg-surface/30 border-y border-border/30 overflow-hidden" ref={scrollRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-3xl md:text-5xl font-heading font-bold mb-6"
        >
          Trusted by <span className="text-text-secondary">Thousands.</span>
        </motion.h2>
      </div>

      <div className="relative w-full">
        {/* Left/Right Fade Gradients */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
        
        <motion.div style={{ x }} className="flex gap-6 px-4 md:px-12 w-max">
          {[...testimonials, ...testimonials].map((t, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className="w-[350px] md:w-[450px] glass-panel p-8 rounded-3xl border border-border shrink-0 flex flex-col justify-between"
            >
              <div>
                <Quote size={32} className="text-white/20 mb-6" />
                <p className="text-lg text-white mb-8 leading-relaxed">
                  &quot;{t.quote}&quot;
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full border border-border/50 bg-background overflow-hidden">
                  <img src={t.image} alt={t.name} className="w-full h-full object-cover opacity-80" />
                </div>
                <div>
                  <h4 className="font-medium text-white">{t.name}</h4>
                  <p className="text-sm text-text-secondary">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
