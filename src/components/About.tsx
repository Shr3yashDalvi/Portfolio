import React from "react";
import { motion } from "framer-motion";
import { Cpu, Terminal, Shield } from "lucide-react";
import BackgroundWord from "./BackgroundWord";

export default function About() {
  const specs = [
    { label: "OS", value: "B.Tech IT (Expected 2027)" },
    { label: "Node", value: "DY Patil College of Engineering, Pune" },
    { label: "Core Stack", value: "Python, SQL, FastAPI, React, ML" },
    { label: "Data Integrity", value: "anomalies_checked=15, records=50K+" },
    { label: "Athletic Thread", value: "guinness_record=1, sports=Taekwondo,Hockey" },
    { label: "Execution Mode", value: "production_ready=true" }
  ];

  return (
    <section id="about" className="relative py-24 z-10 overflow-hidden bg-[#FAFAFA]">
      {/* Background Layered Outline Text */}
      <BackgroundWord 
        word="ABOUT" 
        className="bottom-[10%] right-[5%] text-[15vw]" 
        strokeWidth="thin" 
      />

      {/* Subtle glows */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 glow-spot-indigo opacity-15 z-0" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4F3FF0]" />
            <span className="text-xs font-mono tracking-widest text-[#4F3FF0] uppercase">01 / Profile Ingestion</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#111111] font-sans">
            About the Systems Builder
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Block - Bio */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-base sm:text-lg text-[#111111]/80 leading-relaxed font-sans text-left"
            >
              I am a B.Tech Information Technology student passionate about building practical software systems, working with data, and applying machine learning to real-world problems.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-sm sm:text-base text-[#111111]/60 leading-relaxed font-sans mt-4 text-left"
            >
              My work includes backend APIs, secure authentication systems, data validation workflows, and NLP-based applications. I enjoy solving problems where logic, data, and engineering meet.
            </motion.p>

            {/* Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8 w-full text-left">
              <div className="flex gap-3">
                <Cpu className="w-5 h-5 text-[#4F3FF0] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-mono font-bold text-[#111111] uppercase tracking-wider">Logic First</h4>
                  <p className="text-[11px] text-[#111111]/55 mt-1">Clean, deterministic backend logic avoiding double bookings and security holes.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Terminal className="w-5 h-5 text-[#059669] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-mono font-bold text-[#111111] uppercase tracking-wider">Data Quality</h4>
                  <p className="text-[11px] text-[#111111]/55 mt-1">Python and SQL validation pipelines targeting clean data inputs.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Shield className="w-5 h-5 text-[#0891B2] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-mono font-bold text-[#111111] uppercase tracking-wider">Discipline</h4>
                  <p className="text-[11px] text-[#111111]/55 mt-1">Applying the training focus of a national athlete to software problems.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Block - System Specs */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
            className="lg:col-span-5 w-full border border-black/5 bg-white rounded-xl overflow-hidden shadow-sm backdrop-blur-md"
          >
            {/* Header bar */}
            <div className="flex items-center justify-between bg-[#F5F5F7] px-4 py-2.5 border-b border-black/5">
              <span className="text-[10px] text-[#111111]/45 font-mono tracking-wider">system_specs.config</span>
              <span className="text-[10px] text-[#4F3FF0] font-mono font-bold">STATUS: ACTIVE</span>
            </div>

            {/* List */}
            <div className="p-5 font-mono text-[11px] flex flex-col gap-3">
              {specs.map((spec, idx) => (
                <div key={idx} className="flex justify-between border-b border-black/5 pb-2 last:border-0 last:pb-0">
                  <span className="text-[#111111]/45 uppercase">{spec.label}</span>
                  <span className="text-[#111111]/80 text-right truncate max-w-[220px]" title={spec.value}>
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

