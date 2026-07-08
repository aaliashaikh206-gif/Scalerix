"use client";

import { motion } from "framer-motion";
import { 
  Bot, Building2, Map, FileText, Mic, 
  Coins, Briefcase, Search, Users, Sparkles
} from "lucide-react";

const features = [
  { icon: <Bot size={24} />, title: "AI Career Counselor", description: "24/7 personalized guidance based on your changing interests and market trends." },
  { icon: <Building2 size={24} />, title: "College Predictor", description: "Data-driven admission chances for top universities worldwide." },
  { icon: <Map size={24} />, title: "Skill Roadmaps", description: "Step-by-step learning paths tailored to your target role." },
  { icon: <FileText size={24} />, title: "Resume Builder", description: "Auto-generate industry-standard resumes that beat ATS systems." },
  { icon: <Mic size={24} />, title: "Interview Coach", description: "Practice with AI avatars and get real-time feedback on your answers." },
  { icon: <Coins size={24} />, title: "Scholarship Finder", description: "Discover financial aid opportunities matched to your profile." },
  { icon: <Briefcase size={24} />, title: "Internship Finder", description: "Connect with early-career opportunities at fast-growing startups." },
  { icon: <Search size={24} />, title: "Job Discovery", description: "Access exclusive entry-level roles hand-picked for our community." },
  { icon: <Users size={24} />, title: "Mentor Network", description: "Book 1-on-1 sessions with professionals in your dream roles." },
  { icon: <Sparkles size={24} />, title: "Community", description: "Join ambitious peers, collaborate on projects, and grow together." },
];

export function Features() {
  return (
    <section id="features" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-3xl md:text-5xl font-heading font-bold mb-6"
          >
            Everything you need. <br />
            <span className="text-text-secondary">In one place.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="text-lg text-text-secondary max-w-2xl mx-auto"
          >
            Ten powerful modules working in harmony to supercharge your career trajectory.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {features.map((feature, idx) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="glass-panel p-6 rounded-2xl flex flex-col items-start gap-4 group cursor-pointer"
            >
              <div className="w-12 h-12 rounded-xl bg-surface/50 border border-border flex items-center justify-center text-white group-hover:scale-110 group-hover:bg-white group-hover:text-black transition-all duration-300">
                {feature.icon}
              </div>
              <div>
                <h3 className="text-lg font-medium text-white mb-2">{feature.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
