"use client";

import { motion } from "framer-motion";
import { 
  BarChart3, Code2, Target, Calendar, 
  ChevronRight, ArrowUpRight, CheckCircle2, Circle, Sparkles
} from "lucide-react";

export function DashboardPreview() {
  return (
    <section id="dashboard" className="py-32 relative overflow-hidden bg-surface/20 border-y border-border/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-3xl md:text-5xl font-heading font-bold mb-6"
          >
            Your Command <span className="text-text-secondary">Center.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="text-lg text-text-secondary max-w-2xl mx-auto"
          >
            Track progress, manage applications, and execute your career strategy from a single, beautifully designed dashboard.
          </motion.p>
        </div>

        {/* Dashboard Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="glass-panel border border-border/50 rounded-2xl md:rounded-3xl p-2 sm:p-4 overflow-hidden shadow-2xl mx-auto max-w-5xl"
        >
          <div className="bg-background rounded-xl md:rounded-2xl border border-border/50 overflow-hidden flex flex-col md:flex-row h-auto md:h-[600px]">
            
            {/* Sidebar Mock */}
            <div className="w-full md:w-64 border-r border-border/50 bg-surface/30 p-6 hidden md:flex flex-col gap-8">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-black font-bold font-heading">
                  S
                </div>
                <span className="font-medium text-white">Alex Morgan</span>
              </div>
              
              <nav className="flex flex-col gap-2">
                {["Overview", "Roadmap", "Applications", "Interviews", "Settings"].map((item, i) => (
                  <div key={item} className={`px-4 py-2 rounded-lg text-sm font-medium ${i === 0 ? 'bg-white text-black' : 'text-text-secondary hover:text-white hover:bg-surface'}`}>
                    {item}
                  </div>
                ))}
              </nav>

              <div className="mt-auto glass-panel p-4 rounded-xl border border-border">
                <p className="text-xs text-text-secondary mb-2">Profile Score</p>
                <div className="flex items-end gap-2 mb-3">
                  <span className="text-2xl font-bold text-white">85</span>
                  <span className="text-xs text-green-400 mb-1 flex items-center"><ArrowUpRight size={12} /> 12%</span>
                </div>
                <div className="w-full h-1.5 bg-background rounded-full overflow-hidden">
                  <div className="h-full bg-white w-[85%]" />
                </div>
              </div>
            </div>

            {/* Main Content Mock */}
            <div className="flex-1 p-6 md:p-8 overflow-y-auto custom-scrollbar">
              <div className="flex justify-between items-end mb-8">
                <div>
                  <h3 className="text-2xl font-heading font-bold text-white mb-1">Welcome back, Alex</h3>
                  <p className="text-sm text-text-secondary">Here&apos;s what&apos;s happening with your career journey today.</p>
                </div>
              </div>

              {/* KPI Cards */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                {[
                  { label: "Active Applications", value: "12", icon: <Target size={16} /> },
                  { label: "Interviews Scheduled", value: "3", icon: <Calendar size={16} /> },
                  { label: "Skills Mastered", value: "24", icon: <Code2 size={16} /> },
                  { label: "Profile Views", value: "148", icon: <BarChart3 size={16} /> },
                ].map((kpi) => (
                  <div key={kpi.label} className="bg-surface/50 border border-border p-4 rounded-xl">
                    <div className="flex items-center gap-2 text-text-secondary mb-3">
                      {kpi.icon}
                      <span className="text-xs font-medium uppercase tracking-wider">{kpi.label}</span>
                    </div>
                    <span className="text-3xl font-bold text-white">{kpi.value}</span>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                
                {/* AI Suggestions */}
                <div className="lg:col-span-2 glass-panel border border-border rounded-xl p-6">
                  <h4 className="font-medium text-white mb-4 flex items-center gap-2">
                    <Sparkles size={16} className="text-white" /> 
                    AI Recommended Actions
                  </h4>
                  <div className="space-y-4">
                    {[
                      { title: "Update Resume: React.js", desc: "You completed the Advanced React course. Add it to your resume to increase match score by 8%." },
                      { title: "Apply: Frontend Intern at TechCorp", desc: "Your profile is a 92% match for their new opening. Deadline in 3 days." },
                      { title: "Practice: System Design Interview", desc: "You have an interview next week. Schedule a mock session with AI." }
                    ].map((task, i) => (
                      <div key={i} className="flex items-start gap-4 p-4 rounded-lg bg-background border border-border/50 hover:border-border transition-colors group cursor-pointer">
                        <div className="mt-1 text-text-secondary group-hover:text-white transition-colors">
                          <Circle size={16} />
                        </div>
                        <div className="flex-1">
                          <h5 className="text-sm font-medium text-white mb-1">{task.title}</h5>
                          <p className="text-xs text-text-secondary">{task.desc}</p>
                        </div>
                        <ChevronRight size={16} className="text-text-secondary group-hover:text-white transition-colors" />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Timeline */}
                <div className="glass-panel border border-border rounded-xl p-6">
                  <h4 className="font-medium text-white mb-4">Upcoming</h4>
                  <div className="relative border-l border-border/50 ml-3 space-y-6 pb-2">
                    {[
                      { date: "Tomorrow, 10:00 AM", event: "Mock Interview: Behavioral" },
                      { date: "Friday, 2:00 PM", event: "Application Deadline: Stripe" },
                      { date: "Next Mon, 9:00 AM", event: "Mentorship Session" },
                    ].map((item, i) => (
                      <div key={i} className="pl-6 relative">
                        <div className="absolute -left-[5px] top-1 w-2.5 h-2.5 rounded-full bg-white border-2 border-background" />
                        <p className="text-xs text-text-secondary mb-1">{item.date}</p>
                        <p className="text-sm font-medium text-white">{item.event}</p>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
