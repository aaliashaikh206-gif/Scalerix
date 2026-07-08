"use client";

import { motion } from "framer-motion";
import { Brain, User, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: <Brain size={24} className="text-white" />,
    title: "AI-Powered Guidance",
    description: "Smart insights that help you navigate your career path seamlessly."
  },
  {
    icon: <User size={24} className="text-white" />,
    title: "Personalized Learning",
    description: "A tailored approach to focus on what matters most for your goals."
  },
  {
    icon: <ShieldCheck size={24} className="text-white" />,
    title: "Simple & Secure Experience",
    description: "A clean interface with robust security for your peace of mind."
  }
];

export function WhyChoose() {
  return (
    <section id="features" className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-heading font-bold text-white"
          >
            Why Choose Scalerix
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-panel p-8 rounded-2xl hover-card flex flex-col items-start"
            >
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-heading font-semibold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-text-secondary font-light leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
