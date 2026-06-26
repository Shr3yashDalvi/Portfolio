import React, { useState } from "react";
import { motion } from "framer-motion";
import { skillCategories } from "../data/skills";
import { ChevronRight } from "lucide-react";
import BackgroundWord from "./BackgroundWord";

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>(skillCategories[0].category);

  return (
    <section id="skills" className="relative py-24 z-10 overflow-hidden bg-[#FAFAFA] border-t border-black/5">
      {/* Background Layered Outline Text */}
      <BackgroundWord 
        word="STACK" 
        className="bottom-[10%] left-[5%] text-[15vw]" 
        strokeWidth="thin" 
      />

      {/* Background decoration */}
      <div className="absolute top-1/4 right-1/4 -translate-y-1/2 glow-spot-indigo opacity-10 z-0" />
      <div className="absolute bottom-1/4 left-1/4 translate-y-1/2 glow-spot-emerald opacity-5 z-0" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4F3FF0]" />
            <span className="text-xs font-mono tracking-widest text-[#4F3FF0] uppercase">04 / Tech Inventory</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#111111] font-sans">
            Technical Stack & Core Skills
          </h2>
          <p className="text-sm text-[#111111]/55 mt-2 font-sans max-w-xl text-left">
            A comprehensive list of engineering languages, databases, tools, and practices I utilize.
          </p>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-5xl mx-auto">
          {/* Left Navigation Tabs */}
          <div className="lg:col-span-4 flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0 list-none m-0 p-0 shrink-0 border-b lg:border-b-0 lg:border-l border-black/5">
            {skillCategories.map((cat) => {
              const isActive = activeCategory === cat.category;
              return (
                <button
                  key={cat.category}
                  onClick={() => setActiveCategory(cat.category)}
                  className={`text-xs font-mono font-bold tracking-wider py-3 px-5 text-left rounded-xl transition-all cursor-pointer flex items-center justify-between whitespace-nowrap lg:whitespace-normal w-full border ${
                    isActive
                      ? "bg-[#4F3FF0] border-[#4F3FF0] text-white shadow-lg shadow-indigo-600/10"
                      : "bg-transparent border-transparent text-[#111111]/50 hover:text-[#111111]/85 hover:bg-black/5"
                  }`}
                >
                  <span>{cat.category}</span>
                  <ChevronRight className={`w-3.5 h-3.5 hidden lg:block transition-transform ${isActive ? "translate-x-1" : "opacity-30"}`} />
                </button>
              );
            })}
          </div>

          {/* Right Active Grid Panel */}
          <div className="lg:col-span-8 w-full min-h-[350px]">
            {skillCategories.map((cat) => {
              if (cat.category !== activeCategory) return null;
              return (
                <motion.div
                  key={cat.category}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4 }}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full"
                >
                  {cat.skills.map((skill, sIdx) => (
                    <div
                      key={skill.name}
                      className="glass-panel p-4 rounded-xl border border-black/5 bg-white shadow-sm flex flex-col justify-center relative overflow-hidden group"
                    >
                      {/* Inner hover glow */}
                      <div className="absolute top-0 left-0 bottom-0 w-[3px] bg-[#4F3FF0] opacity-60" />

                      <div className="flex items-center justify-between mb-2 text-left">
                        <span className="text-sm font-bold text-[#111111] leading-tight font-sans">
                          {skill.name}
                        </span>
                        <span className="text-[10px] font-mono text-[#111111]/35">
                          {skill.level}%
                        </span>
                      </div>

                      {/* Meter bar */}
                      <div className="w-full h-1.5 bg-[#F5F5F7] rounded-full overflow-hidden border border-black/5">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 0.8, ease: "easeOut", delay: sIdx * 0.05 }}
                          className="h-full bg-gradient-to-r from-[#4F3FF0] to-[#6366f1] rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

