"use client";

import { motion } from "framer-motion";
import { 
  MessagesSquare, GraduationCap, Building2, Coins, 
  Map, Award, Briefcase, FileText, Search, Users 
} from "lucide-react";

const steps = [
  { id: 1, title: "Career Counselling", description: "Discover your strengths and get matched with ideal career paths using AI.", icon: <MessagesSquare size={20} /> },
  { id: 2, title: "Education Planning", description: "Map out the exact degrees and courses required for your chosen path.", icon: <GraduationCap size={20} /> },
  { id: 3, title: "College Recommendations", description: "Get personalized college suggestions based on your profile and budget.", icon: <Building2 size={20} /> },
  { id: 4, title: "Scholarships", description: "Find and apply for financial aid and scholarships you actually qualify for.", icon: <Coins size={20} /> },
  { id: 5, title: "Skill Roadmaps", description: "Follow step-by-step guides to acquire the technical and soft skills needed.", icon: <Map size={20} /> },
  { id: 6, title: "Certifications", description: "Earn industry-recognized certifications to stand out to employers.", icon: <Award size={20} /> },
  { id: 7, title: "Internships", description: "Gain practical experience through curated internship opportunities.", icon: <Briefcase size={20} /> },
  { id: 8, title: "Resume Building", description: "Auto-generate ATS-friendly resumes optimized for your target roles.", icon: <FileText size={20} /> },
  { id: 9, title: "Job Discovery", description: "Connect with top companies hiring for your specific skill set.", icon: <Search size={20} /> },
  { id: 10, title: "Mentorship", description: "Get ongoing guidance from industry professionals and alumni.", icon: <Users size={20} /> },
];

export function CareerJourney() {
  return (
    <section id="journey" className="py-32 bg-surface/30 border-y border-border/30 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-3xl md:text-5xl font-heading font-bold mb-6"
          >
            The Complete <span className="text-text-secondary">Journey.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="text-lg text-text-secondary max-w-2xl mx-auto"
          >
            From high school to your first promotion, we provide the tools and guidance you need at every single step.
          </motion.p>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-px bg-border/50 md:-translate-x-1/2" />
          
          <div className="space-y-12">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;
              
              return (
                <motion.div 
                  key={step.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5 }}
                  className="relative flex items-center md:justify-between flex-col md:flex-row gap-6 md:gap-0"
                >
                  {/* Desktop Left Content */}
                  <div className={`hidden md:block w-[45%] text-right ${isEven ? 'md:visible' : 'md:invisible'}`}>
                    <h3 className="text-xl font-medium text-white mb-2">{step.title}</h3>
                    <p className="text-sm text-text-secondary">{step.description}</p>
                  </div>

                  {/* Center Node */}
                  <div className="absolute left-0 md:left-1/2 -translate-x-0 md:-translate-x-1/2 w-14 h-14 rounded-full bg-background border-2 border-border flex items-center justify-center z-10 text-white shadow-[0_0_15px_rgba(255,255,255,0.05)]">
                    {step.icon}
                  </div>

                  {/* Desktop Right Content */}
                  <div className={`hidden md:block w-[45%] text-left ${isEven ? 'md:invisible' : 'md:visible'}`}>
                    <h3 className="text-xl font-medium text-white mb-2">{step.title}</h3>
                    <p className="text-sm text-text-secondary">{step.description}</p>
                  </div>
                  
                  {/* Mobile Content */}
                  <div className="pl-20 md:hidden w-full text-left">
                    <h3 className="text-xl font-medium text-white mb-2">{step.title}</h3>
                    <p className="text-sm text-text-secondary">{step.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
