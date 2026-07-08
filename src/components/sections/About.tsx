"use client";

import { motion } from "framer-motion";
import { Target, Compass, Zap } from "lucide-react";
import Image from "next/image";

export function About() {
  const features = [
    {
      icon: <div className="w-6 h-6 rounded-full overflow-hidden"><Image src="/logo.jpg" alt="AI" width={24} height={24} className="object-cover w-full h-full" /></div>,
      title: "AI-Powered Insights",
      description: "Our proprietary AI analyzes millions of data points to find your perfect career match."
    },
    {
      icon: <Target size={24} />,
      title: "Precision Targeting",
      description: "Get pinpoint recommendations for colleges, courses, and skills you actually need."
    },
    {
      icon: <Compass size={24} />,
      title: "Dynamic Roadmaps",
      description: "Your path adapts in real-time as you complete milestones and gain new skills."
    },
    {
      icon: <Zap size={24} />,
      title: "Instant Execution",
      description: "Apply to internships and scholarships directly through your personalized dashboard."
    }
  ];

  return (
    <section id="about" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          
          {/* Left Side: Text & Features */}
          <div className="w-full md:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
                Intelligence meets <br /> 
                <span className="text-text-secondary">Ambition.</span>
              </h2>
              <p className="text-lg text-text-secondary mb-12">
                Scalerix is not just another counseling platform. It&apos;s a comprehensive career operating system designed to eliminate guesswork and accelerate your growth.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {features.map((feature, idx) => (
                <motion.div 
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="flex flex-col gap-3"
                >
                  <div className="w-12 h-12 rounded-xl bg-surface border border-border flex items-center justify-center text-white">
                    {feature.icon}
                  </div>
                  <h4 className="text-lg font-medium text-white">{feature.title}</h4>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Side: Illustration/Visuals */}
          <div className="w-full md:w-1/2 relative h-[500px]">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0 rounded-3xl overflow-hidden border border-border/50 glass-panel flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1974&auto=format&fit=crop')] bg-cover bg-center"
            >
              <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
              
              {/* Abstract AI Visualization */}
              <div className="relative z-10 w-64 h-64 border border-white/20 rounded-full flex items-center justify-center">
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
                <div className="w-24 h-24 bg-white shadow-[0_0_50px_rgba(255,255,255,0.3)] rounded-full flex items-center justify-center overflow-hidden">
                  <Image src="/logo.jpg" alt="Scalerix Logo" width={96} height={96} className="object-cover w-full h-full" />
                </div>
              </div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
