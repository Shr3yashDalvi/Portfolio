import React, { useState } from "react";
import { motion, AnimatePresence, useSpring, useMotionValue } from "framer-motion";
import { projects } from "../data/projects";
import { ArrowUpRight, AlertCircle, Sparkles, Cpu, ShieldAlert, Database, Lock, MailX, Github } from "lucide-react";
import BackgroundWord from "./BackgroundWord";

export default function Projects() {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  
  // Custom cursor-following spring animation
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 250, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    // Offset card slightly so it sits next to the cursor instead of directly under it
    mouseX.set(e.clientX + 25);
    mouseY.set(e.clientY + 25);
  };

  const toggleExpand = (id: string) => {
    if (expandedId === id) {
      setExpandedId(null);
    } else {
      setExpandedId(id);
    }
  };

  // Icon mapping for the floating preview cards
  const getPreviewIcon = (id: string) => {
    switch (id) {
      case "movie-booking":
        return <Database className="w-12 h-12 text-[#4F3FF0] animate-pulse" />;
      case "auth-app":
        return <Lock className="w-12 h-12 text-[#059669] animate-pulse" />;
      case "spam-detector":
        return <MailX className="w-12 h-12 text-amber-600 animate-pulse" />;
      default:
        return <Cpu className="w-12 h-12 text-[#0891B2]" />;
    }
  };

  const getPreviewLabel = (id: string) => {
    switch (id) {
      case "movie-booking":
        return "CONCURRENCY // DB_LOCKS";
      case "auth-app":
        return "AUTHENTICATION // CRYPTO";
      case "spam-detector":
        return "NLP // VECTORIZER";
      default:
        return "SYSTEMS // CONFIG";
    }
  };

  return (
    <section 
      id="projects" 
      className="relative py-24 z-10 overflow-hidden bg-[#FAFAFA]"
      onMouseMove={handleMouseMove}
    >
      {/* Background Layered Outline Text */}
      <BackgroundWord 
        word="WORK" 
        className="bottom-[10%] right-[5%] text-[15vw]" 
        strokeWidth="thin" 
      />

      {/* Background elements */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 glow-spot-indigo opacity-10 z-0" />
      <div className="absolute bottom-0 right-1/4 translate-y-1/2 glow-spot-emerald opacity-5 z-0" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4F3FF0]" />
            <span className="text-xs font-mono tracking-widest text-[#4F3FF0] uppercase">03 / Deployed Pipelines</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#111111] font-sans">
            Selected Work
          </h2>
          <p className="text-sm text-[#111111]/55 mt-2 font-sans max-w-xl text-left">
            Hover over a project to preview its engine. Click to inspect the detailed architecture, core problems, and solutions.
          </p>
        </div>

        {/* Project List */}
        <div className="flex flex-col border-t border-black/5 max-w-5xl mx-auto relative select-none">
          {projects.map((project, idx) => {
            const isHovered = hoveredId === project.id;
            const isExpanded = expandedId === project.id;
            return (
              <div 
                key={project.id}
                className="border-b border-black/5"
              >
                {/* Expandable Project Row */}
                <div
                  onMouseEnter={() => setHoveredId(project.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  onClick={() => toggleExpand(project.id)}
                  className="flex flex-col md:flex-row items-start md:items-center justify-between py-8 px-4 cursor-pointer transition-all duration-300 relative group select-none hover:bg-black/[0.015]"
                  style={{
                    paddingLeft: isHovered ? "1.5rem" : "1rem",
                    transition: "padding-left 0.25s ease, background-color 0.25s ease"
                  }}
                >
                  {/* Left Column: Number + Title */}
                  <div className="flex items-center gap-6 text-left">
                     <span className={`font-mono text-xs transition-colors duration-300 ${isHovered ? "text-[#4F3FF0] font-bold" : "text-[#111111]/30"}`}>
                      0{idx + 1}
                    </span>
                    <div>
                      <h3 className={`text-xl sm:text-2xl font-bold transition-colors duration-300 ${isHovered ? "text-[#4F3FF0]" : "text-[#111111]"}`}>
                        {project.title}
                      </h3>
                      <p className="text-xs text-[#111111]/50 mt-1 font-sans font-light max-w-xl">
                        {project.description}
                      </p>
                    </div>
                  </div>

                  {/* Right Column: Badges + Metadata + Arrow */}
                  <div className="flex items-center gap-6 mt-4 md:mt-0 w-full md:w-auto justify-between md:justify-end">
                    <div className="flex flex-wrap gap-1.5">
                      {project.techStack.slice(0, 3).map((tech) => (
                        <span 
                          key={tech} 
                          className={`text-[9px] font-mono border px-2.5 py-0.5 rounded-full transition-all duration-300 ${
                            isHovered 
                              ? "border-[#4F3FF0]/25 bg-[#4F3FF0]/5 text-[#4F3FF0] font-semibold" 
                              : "border-black/5 bg-[#F5F5F7] text-[#111111]/60"
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <span className="text-[10px] font-mono text-[#111111]/35 hidden sm:block">
                      {project.techStack.includes("FastAPI") ? "Backend" : "ML System"}
                    </span>

                    <ArrowUpRight 
                      className={`w-5 h-5 transition-all duration-300 ${
                        isHovered 
                          ? "text-[#4F3FF0] rotate-90 scale-110" 
                          : "text-[#111111]/30 rotate-45"
                      }`} 
                    />
                  </div>
                </div>

                {/* Collapsible Details Body */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] as const }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 sm:p-8 bg-[#F5F5F7]/30 border-t border-black/5 grid grid-cols-1 md:grid-cols-12 gap-8 text-left">
                        {/* Case Study Details */}
                        <div className="md:col-span-7 flex flex-col gap-6">
                          <div>
                            <div className="flex items-center gap-2 mb-2 text-xs font-mono font-bold text-[#111111]/45 uppercase">
                              <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
                              The Problem
                            </div>
                            <p className="text-xs sm:text-sm text-[#111111]/70 leading-relaxed font-sans">
                              {project.problem}
                            </p>
                          </div>

                          <div>
                            <div className="flex items-center gap-2 mb-2 text-xs font-mono font-bold text-[#111111]/45 uppercase">
                              <Sparkles className="w-4 h-4 text-[#059669] shrink-0" />
                              The Solution
                            </div>
                            <p className="text-xs sm:text-sm text-[#111111]/70 leading-relaxed font-sans">
                              {project.solution}
                            </p>
                          </div>

                          <div>
                            <div className="flex items-center gap-2 mb-2 text-xs font-mono font-bold text-[#111111]/45 uppercase">
                              <Cpu className="w-4 h-4 text-[#4F3FF0] shrink-0" />
                              Key Tech Stack
                            </div>
                            <div className="flex flex-wrap gap-2">
                              {project.techStack.map((tech) => (
                                <span key={tech} className="text-[10px] font-mono bg-[#4F3FF0]/5 border border-[#4F3FF0]/20 px-3 py-1 rounded-full text-[#4F3FF0] font-bold">
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Spec Highlights */}
                        <div className="md:col-span-5 flex flex-col justify-between border-t md:border-t-0 md:border-l border-black/5 pt-6 md:pt-0 md:pl-8">
                          <div>
                            <div className="flex items-center gap-2 mb-4 text-xs font-mono font-bold text-[#111111]/45 uppercase">
                              <ShieldAlert className="w-4 h-4 text-[#0891B2] shrink-0" />
                              Impact & Features
                            </div>
                            <ul className="flex flex-col gap-3 list-none p-0 m-0">
                              {project.highlights.map((highlight, hIdx) => (
                                <li key={hIdx} className="flex gap-2.5 items-start">
                                  <span className="w-1.5 h-1.5 rounded-full bg-[#059669] shrink-0 mt-1.5" />
                                  <span className="text-xs text-[#111111]/60 leading-relaxed font-sans">{highlight}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {project.githubUrl && (
                            <div className="mt-8 pt-4 border-t border-black/5 flex gap-4">
                              <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#4F3FF0] border border-[#4F3FF0]/25 hover:border-[#4F3FF0] px-4 py-2 rounded-full bg-[#4F3FF0]/5 hover:bg-[#4F3FF0]/10 transition-all"
                              >
                                <Github className="w-4 h-4" />
                                View Source Code
                              </a>
                            </div>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>

      {/* BUTTERY SMOOTH CURSOR-FOLLOWING PREVIEW CARD */}
      <AnimatePresence>
        {hoveredId && (
          <motion.div
            style={{
              position: "fixed",
              left: cursorX,
              top: cursorY,
              pointerEvents: "none",
              zIndex: 50
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="hidden md:flex flex-col items-center justify-center w-72 h-52 rounded-2xl border border-black/10 bg-white/95 shadow-2xl overflow-hidden backdrop-blur-md"
          >
            {/* Ambient inner card glows */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#4F3FF0]/5 to-transparent blur-md" />
            <div className="absolute inset-0 grid-bg opacity-5" />

            {/* Glowing Icon */}
            <div className="z-10 flex flex-col items-center justify-center text-center">
              {getPreviewIcon(hoveredId)}
              <span className="text-[10px] font-mono font-bold text-[#111111]/80 uppercase tracking-widest mt-4">
                {getPreviewLabel(hoveredId)}
              </span>
              <span className="text-[8px] font-mono text-[#111111]/30 uppercase mt-1 tracking-wider">
                System Active // Click to Inspect
              </span>
            </div>
            
            {/* Border lines */}
            <div className="absolute inset-2 rounded-xl border border-dashed border-black/5" />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

