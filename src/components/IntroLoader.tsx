"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface IntroLoaderProps {
  onComplete: () => void;
}

export default function IntroLoader({ onComplete }: IntroLoaderProps) {
  const [lines, setLines] = useState<string[]>([]);
  const [visible, setVisible] = useState(true);

  const logs = [
    "SHREYASH_SYSTEM_BOOT_INITIATED",
    "LOADING: Core theme 'Code. Data. Systems. Discipline.'",
    "CHECKING COMPILING ENGINE: TypeScript & Next.js... OK",
    "CONNECTING DATA PIPELINES: Ingesting database specifications... OK",
    "VALIDATING SCHEMAS: 50,000+ records successfully scanned",
    "DETECTING ANOMALIES: 15 errors identified and patched (20% quality increase)",
    "BOOTING ENGINE: Machine learning models (scikit-learn, TF-IDF)... ONLINE",
    "CHECKING SYSTEM ACCESSORIES: 24-Hour Skating Endurance... LOADED",
    "STATUS: SYSTEM FULLY OPERATIONAL. ACCESSIBILITY: OPEN."
  ];

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < logs.length) {
        setLines((prev) => [...prev, logs[index]]);
        index++;
      } else {
        clearInterval(interval);
        // Let it stay visible for a second before fading out
        setTimeout(() => {
          setVisible(false);
          setTimeout(onComplete, 800); // Trigger complete callback after fadeout transition
        }, 1200);
      }
    }, 280);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#FAFAFA] font-mono text-sm px-6"
        >
          {/* Decorative corner glows */}
          <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 glow-spot-indigo w-60 h-60 opacity-20" />
          <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 glow-spot-emerald w-60 h-60 opacity-10" />

          <div className="w-full max-w-2xl border border-black/10 bg-white rounded-xl overflow-hidden shadow-xl backdrop-blur-md">
            {/* Terminal Window Header Bar */}
            <div className="flex items-center justify-between bg-[#F5F5F7] px-4 py-3 border-b border-black/5">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#E0746A]" />
                <span className="w-3 h-3 rounded-full bg-[#E0B860]" />
                <span className="w-3 h-3 rounded-full bg-[#6FBF80]" />
              </div>
              <div className="text-[11px] text-[#111111]/45 tracking-wider">shreyash@command-center:~</div>
              <div className="w-12" /> {/* Spacer */}
            </div>

            {/* Terminal Logs Content */}
            <div className="p-6 min-h-[320px] flex flex-col justify-end gap-2 text-[#111111]/80 select-none text-left">
              {lines.map((line, idx) => {
                const isSystemHeader = idx === 0;
                const isComplete = idx === logs.length - 1;
                return (
                  <div key={idx} className="flex gap-2">
                    <span className="text-[#4F3FF0] shrink-0 font-bold">&gt;</span>
                    <span
                      className={`leading-relaxed ${
                        isSystemHeader
                          ? "text-[#111111] font-semibold"
                          : isComplete
                          ? "text-[#059669] font-bold"
                          : "text-[#111111]/70"
                      }`}
                    >
                      {line}
                    </span>
                  </div>
                );
              })}
              
              {lines.length < logs.length && (
                <div className="flex gap-2 items-center">
                  <span className="text-[#4F3FF0] shrink-0 font-bold">&gt;</span>
                  <span className="w-2.5 h-4 bg-[#4F3FF0]/70 terminal-cursor inline-block" />
                </div>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

