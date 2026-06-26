import React from "react";
import { motion } from "framer-motion";
import { experiences } from "../data/experience";
import { Calendar, Briefcase, MapPin, CheckCircle2, Award, Settings, GitCompare, GraduationCap, CheckCircle } from "lucide-react";
import BackgroundWord from "./BackgroundWord";

export default function Experience() {
  const exp = experiences[0]; // Orionsoft Internship

  const tools = [
    "Python",
    "SQL",
    "Data Validation",
    "Data Quality Checks",
    "Issue Reporting",
    "Production Dataset Testing"
  ];

  const workflowSteps = [
    { label: "Raw Data", desc: "Production Feeds" },
    { label: "Validation", desc: "Python/SQL Scripts" },
    { label: "Anomaly Detection", desc: "15+ Errors Caught" },
    { label: "Issue Report", desc: "QA Logs" },
    { label: "Corrective Action", desc: "System Patched" }
  ];

  const whatILearned = [
    "Production data quality workflows",
    "Python and SQL validation logic",
    "Clear issue reporting",
    "Why data accuracy matters in real systems"
  ];

  return (
    <section id="experience" className="relative py-24 z-10 overflow-hidden bg-[#FAFAFA] border-t border-black/5">
      {/* Background Layered Outline Text */}
      <BackgroundWord 
        word="JOURNEY" 
        className="bottom-[10%] left-[5%] text-[15vw]" 
        strokeWidth="thick" 
      />

      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 glow-spot-indigo opacity-10 z-0" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4F3FF0]" />
            <span className="text-xs font-mono tracking-widest text-[#4F3FF0] uppercase">02 / Execution History</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#111111] font-sans">
            Work Experience
          </h2>
        </div>

        {/* Content Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-5xl mx-auto">
          {/* Left Column - Main Experience Card */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-left">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
              className="glass-panel p-8 rounded-2xl w-full transition-all relative overflow-hidden group border border-black/5 bg-white shadow-sm"
            >
              {/* Glowing highlight indicator */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#4F3FF0] to-[#059669]" />

              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#4F3FF0]/10 border border-[#4F3FF0]/20 flex items-center justify-center text-[#4F3FF0]">
                  <Briefcase className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-mono text-[#111111]/30 uppercase">ID: qa_intern_ops</span>
              </div>

              {/* Meta details */}
              <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                <span className="inline-flex items-center gap-1.5 text-xs font-mono text-[#4F3FF0] bg-[#4F3FF0]/5 px-3 py-1 rounded-full border border-[#4F3FF0]/15">
                  <Calendar className="w-3.5 h-3.5" />
                  Jan 2026 – Feb 2026
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs font-mono text-[#111111]/45">
                  <MapPin className="w-3.5 h-3.5" />
                  Pune, India
                </span>
              </div>

              <h3 className="text-2xl font-bold text-[#111111] font-sans leading-tight">
                Data Analyst and Testing Intern
              </h3>
              <h4 className="text-sm font-mono text-[#111111]/50 mt-1 font-semibold">
                Orionsoft Tech Services Pvt. Ltd.
              </h4>

              {/* Detailed Bullets */}
              <ul className="mt-8 flex flex-col gap-4 list-none p-0 m-0">
                <li className="flex gap-3.5 items-start">
                  <CheckCircle className="w-5 h-5 text-[#4F3FF0] shrink-0 mt-0.5" />
                  <span className="text-sm text-[#111111]/70 leading-relaxed font-sans">
                    Performed data analytics and quality assurance testing on production datasets.
                  </span>
                </li>
                <li className="flex gap-3.5 items-start">
                  <CheckCircle className="w-5 h-5 text-[#4F3FF0] shrink-0 mt-0.5" />
                  <span className="text-sm text-[#111111]/70 leading-relaxed font-sans">
                    Identified 15+ data anomalies and helped improve overall data quality by 20%.
                  </span>
                </li>
                <li className="flex gap-3.5 items-start">
                  <CheckCircle className="w-5 h-5 text-[#4F3FF0] shrink-0 mt-0.5" />
                  <span className="text-sm text-[#111111]/70 leading-relaxed font-sans">
                    Implemented Python and SQL-based data validation checks across 50,000+ records.
                  </span>
                </li>
                <li className="flex gap-3.5 items-start">
                  <CheckCircle className="w-5 h-5 text-[#4F3FF0] shrink-0 mt-0.5" />
                  <span className="text-sm text-[#111111]/70 leading-relaxed font-sans">
                    Prepared issue reports and collaborated with team members to support corrective actions and continuous improvement.
                  </span>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Right Column - Supporting Cards */}
          <div className="lg:col-span-5 flex flex-col gap-6 text-left w-full">
            {/* Card 1: Impact Snapshot */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="glass-panel p-6 rounded-2xl border border-black/5 bg-white shadow-sm relative overflow-hidden"
            >
              <h4 className="text-xs font-mono font-bold text-[#111111]/45 uppercase tracking-widest mb-4 flex items-center gap-2">
                <Award className="w-4 h-4 text-amber-600" />
                Impact Snapshot
              </h4>
              <div className="grid grid-cols-3 gap-2 text-center">
                <div className="flex flex-col bg-[#F5F5F7]/50 p-3 rounded-xl border border-black/5">
                  <span className="text-lg font-mono font-bold text-[#111111] leading-none">50K+</span>
                  <span className="text-[9px] text-[#111111]/45 uppercase mt-1.5 leading-tight">Records Checked</span>
                </div>
                <div className="flex flex-col bg-[#F5F5F7]/50 p-3 rounded-xl border border-black/5">
                  <span className="text-lg font-mono font-bold text-amber-600 leading-none">15+</span>
                  <span className="text-[9px] text-[#111111]/45 uppercase mt-1.5 leading-tight">Anomalies Found</span>
                </div>
                <div className="flex flex-col bg-[#F5F5F7]/50 p-3 rounded-xl border border-black/5">
                  <span className="text-lg font-mono font-bold text-[#059669] leading-none">20%</span>
                  <span className="text-[9px] text-[#111111]/45 uppercase mt-1.5 leading-tight">Quality Gain</span>
                </div>
              </div>
            </motion.div>

            {/* Card 2: Tools & Methods */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="glass-panel p-6 rounded-2xl border border-black/5 bg-white shadow-sm relative overflow-hidden"
            >
              <h4 className="text-xs font-mono font-bold text-[#111111]/45 uppercase tracking-widest mb-4 flex items-center gap-2">
                <Settings className="w-4 h-4 text-[#4F3FF0]" />
                Tools & Methods
              </h4>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool) => (
                  <span
                    key={tool}
                    className="text-[10px] font-mono bg-[#4F3FF0]/5 border border-[#4F3FF0]/15 px-3 py-1.5 rounded-lg text-[#4F3FF0] font-semibold"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Card 3: Validation Workflow */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="glass-panel p-6 rounded-2xl border border-black/5 bg-white shadow-sm relative overflow-hidden"
            >
              <h4 className="text-xs font-mono font-bold text-[#111111]/45 uppercase tracking-widest mb-4 flex items-center gap-2">
                <GitCompare className="w-4 h-4 text-[#0891B2]" />
                Validation Workflow
              </h4>
              
              <div className="flex flex-col gap-3 relative">
                {/* Vertical flow path line */}
                <div className="absolute left-[9px] top-3 bottom-3 w-[1px] border-l border-dashed border-black/10" />

                {workflowSteps.map((step, idx) => (
                  <div key={idx} className="flex items-start gap-4 z-10">
                    <div className="w-5 h-5 rounded-full bg-white border border-black/10 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-[9px] font-mono text-[#111111]/60">{idx + 1}</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs font-bold text-[#111111] leading-tight font-sans">{step.label}</span>
                      <span className="text-[9px] text-[#111111]/50 font-mono mt-0.5">{step.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Card 4: What I Learned */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-panel p-6 rounded-2xl border border-black/5 bg-white shadow-sm relative overflow-hidden"
            >
              <h4 className="text-xs font-mono font-bold text-[#111111]/45 uppercase tracking-widest mb-4 flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-[#4F3FF0]" />
                What I Learned
              </h4>
              <ul className="flex flex-col gap-2.5 list-none p-0 m-0">
                {whatILearned.map((item, idx) => (
                  <li key={idx} className="flex gap-2.5 items-start">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#4F3FF0] shrink-0 mt-0.5" />
                    <span className="text-xs text-[#111111]/65 leading-normal font-sans">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}


