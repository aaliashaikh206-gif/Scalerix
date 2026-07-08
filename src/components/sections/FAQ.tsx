"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "How does the AI career counselor work?",
    answer: "Our AI analyzes your interests, academic background, and real-time market data to suggest career paths, colleges, and skills with a high degree of personalization. It adapts as your profile grows."
  },
  {
    question: "Is Scalerix only for high school students?",
    answer: "No. While we have dedicated tools for high schoolers (like college predictors), Scalerix also serves college students and early-career professionals with resume building, interview prep, and job matching."
  },
  {
    question: "Are the college predictions accurate?",
    answer: "Our predictor uses historical admission data, standardized test scores, and profile strength to give you a highly accurate probability. However, admissions can be subjective, so we always recommend a balanced list of safe, target, and reach schools."
  },
  {
    question: "Does the resume builder bypass ATS systems?",
    answer: "Yes, all resumes generated on our platform are strictly formatted to be parsed accurately by Applicant Tracking Systems (ATS), significantly increasing your chances of getting an interview."
  },
  {
    question: "How do I connect with mentors?",
    answer: "Once you create a profile, you can browse our network of vetted industry professionals and alumni. You can request 1-on-1 sessions, ask quick questions, or join group AMAs."
  },
  {
    question: "Is there a free version available?",
    answer: "We offer a generous free tier that includes the AI counselor, basic roadmaps, and the resume builder. Premium features like unlimited mock interviews and 1-on-1 mentorship require a subscription."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-3xl md:text-5xl font-heading font-bold mb-6"
          >
            Common <span className="text-text-secondary">Questions.</span>
          </motion.h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={cn(
                  "border border-border rounded-2xl overflow-hidden transition-colors duration-300",
                  isOpen ? "bg-surface/50" : "bg-transparent hover:bg-surface/30"
                )}
              >
                <button
                  onClick={() => toggleOpen(index)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none"
                >
                  <span className="font-medium text-white pr-8">{faq.question}</span>
                  <div className="shrink-0 w-8 h-8 rounded-full border border-border flex items-center justify-center text-white">
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                  </div>
                </button>
                
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-0 text-text-secondary text-sm leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
