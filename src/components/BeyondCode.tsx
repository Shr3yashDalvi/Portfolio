import React from "react";
import { motion } from "framer-motion";
import { achievements } from "../data/achievements";
import { Award, Zap, Users, Compass } from "lucide-react";
import BackgroundWord from "./BackgroundWord";

export default function BeyondCode() {
  // Mapping icons based on indices to keep it simple and beautiful
  const icons = [Award, Zap, Compass, Users];
  const colors = [
    "text-[#4F3FF0] bg-[#4F3FF0]/10 border-[#4F3FF0]/20",
    "text-amber-600 bg-amber-500/10 border-amber-500/20",
    "text-[#059669] bg-[#059669]/10 border-[#059669]/20",
    "text-[#0891B2] bg-[#0891B2]/10 border-[#0891B2]/20"
  ];

  return (
    <section id="discipline" className="relative py-24 z-10 overflow-hidden bg-[#FAFAFA] border-t border-black/5">
      {/* Background Layered Outline Text */}
      <BackgroundWord 
        word="DISCIPLINE" 
        className="bottom-[10%] left-[5%] text-[13vw]" 
        strokeWidth="thick" 
      />

      {/* Background decoration */}
      <div className="absolute top-1/3 right-1/4 -translate-y-1/2 glow-spot-indigo opacity-10 z-0" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4F3FF0]" />
            <span className="text-xs font-mono tracking-widest text-[#4F3FF0] uppercase">06 / Human Core / Beyond Code</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#111111] font-sans">
            Athletic Discipline & Endurance
          </h2>
          <p className="text-sm text-[#111111]/55 mt-2 font-sans max-w-xl text-left">
            I build systems with the same endurance, focus, and drive that I brought to national-level sports and 24-hour skating marathons.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {achievements.map((item, idx) => {
            const Icon = icons[idx % icons.length];
            const colorClass = colors[idx % colors.length];
            
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.05 }}
                className="glass-panel p-6 rounded-2xl border border-black/5 bg-white shadow-sm flex flex-col justify-between items-start transition-all relative overflow-hidden group"
              >
                {/* Micro-glow */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-black/2 blur-2xl group-hover:bg-[#4F3FF0]/5 transition-colors rounded-full" />

                <div className="w-full text-left">
                  <div className="flex items-center justify-between w-full mb-6">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center border ${colorClass}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    {item.badge && (
                      <span className="text-[9px] font-mono border border-black/10 px-2 py-0.5 rounded-full text-[#111111]/50 bg-[#F5F5F7] tracking-wider">
                        {item.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="text-base font-bold text-[#111111] font-sans leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#111111]/60 mt-3 leading-relaxed font-sans">
                    {item.description}
                  </p>
                </div>

                <div className="mt-8 text-[9px] font-mono text-[#111111]/30 uppercase w-full text-left">
                  DISCIPLINE_CORE_NODE_{idx + 1}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

