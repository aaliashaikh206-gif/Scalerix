"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, User, ArrowRight, Sparkles } from "lucide-react";

const SUGGESTIONS = [
  "What should I do after 10th?",
  "Suggest colleges under my budget.",
  "How can I become a Software Engineer?",
  "Recommend AI certifications."
];

export function AiAssistant() {
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Hi! I'm Scalerix AI. How can I help you scale your career today?" }
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const handleSuggestionClick = (suggestion: string) => {
    if (isTyping) return;
    
    setMessages(prev => [...prev, { role: "user", content: suggestion }]);
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      setMessages(prev => [...prev, { 
        role: "assistant", 
        content: "I can certainly help with that. Based on the latest industry data and your current profile, here is a structured roadmap we can follow..." 
      }]);
    }, 1500);
  };

  return (
    <section className="py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="w-full lg:w-1/2">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-3xl md:text-5xl font-heading font-bold mb-6"
            >
              Meet your new <br />
              <span className="text-text-secondary">Career Mentor.</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.1 }}
              className="text-lg text-text-secondary mb-10"
            >
              Get instant, personalized advice on any career-related question. From picking a major to negotiating your salary, Scalerix AI has you covered 24/7.
            </motion.p>

            <div className="space-y-4">
              {SUGGESTIONS.map((suggestion, idx) => (
                <motion.button
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: 0.2 + (idx * 0.1) }}
                  onClick={() => handleSuggestionClick(suggestion)}
                  disabled={isTyping}
                  className="w-full text-left p-4 rounded-xl border border-border/50 bg-surface/30 hover:bg-surface hover:border-border transition-all flex items-center justify-between group cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span className="text-sm font-medium text-white">{suggestion}</span>
                  <ArrowRight size={16} className="text-text-secondary group-hover:text-white transition-colors" />
                </motion.button>
              ))}
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="glass-panel rounded-3xl border border-border overflow-hidden h-[500px] flex flex-col"
            >
              {/* Chat Header */}
              <div className="p-4 border-b border-border/50 bg-background/50 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-black shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                  <Bot size={20} />
                </div>
                <div>
                  <h3 className="font-medium text-white text-sm">Scalerix Career AI</h3>
                  <p className="text-xs text-text-secondary flex items-center gap-1">
                    <Sparkles size={10} className="text-white" /> Powered by Intelligence
                  </p>
                </div>
              </div>

              {/* Chat Area */}
              <div className="flex-1 overflow-y-auto p-6 space-y-6 flex flex-col custom-scrollbar">
                <AnimatePresence>
                  {messages.map((msg, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      className={`flex gap-3 max-w-[85%] ${msg.role === 'user' ? 'ml-auto flex-row-reverse' : ''}`}
                    >
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${msg.role === 'user' ? 'bg-surface border border-border' : 'bg-white text-black'}`}>
                        {msg.role === 'user' ? <User size={14} className="text-white" /> : <Bot size={14} />}
                      </div>
                      <div className={`p-4 rounded-2xl text-sm leading-relaxed ${msg.role === 'user' ? 'bg-surface border border-border rounded-tr-sm text-text-secondary' : 'bg-white/5 border border-white/10 rounded-tl-sm text-white'}`}>
                        {msg.content}
                      </div>
                    </motion.div>
                  ))}
                  {isTyping && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      className="flex gap-3 max-w-[85%]"
                    >
                      <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shrink-0 text-black">
                        <Bot size={14} />
                      </div>
                      <div className="p-4 rounded-2xl rounded-tl-sm bg-white/5 border border-white/10 flex items-center gap-1.5 h-[52px]">
                        <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0 }} className="w-1.5 h-1.5 rounded-full bg-white/50" />
                        <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }} className="w-1.5 h-1.5 rounded-full bg-white/50" />
                        <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }} className="w-1.5 h-1.5 rounded-full bg-white/50" />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
