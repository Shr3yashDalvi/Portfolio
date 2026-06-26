"use client";

import React from "react";
import { motion } from "framer-motion";
import { FileText, ArrowRight } from "lucide-react";
import RotatingTypewriter from "./RotatingTypewriter";
import BackgroundWord from "./BackgroundWord";

export default function Hero() {
  const handleScrollToProjects = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleScrollToContact = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const roles = [
    "Backend + Data Developer",
    "FastAPI Systems Builder",
    "Python & SQL Problem Solver",
    "ML/NLP Project Builder",
    "Built with Discipline"
  ];

  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden bg-[#FAFAFA]">
      {/* Background Grids & Faint Blur Blobs */}
      <div className="absolute inset-0 grid-bg opacity-40 z-0" />
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 glow-spot-indigo opacity-30 z-0" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 glow-spot-emerald opacity-10 z-0" />

      {/* Huge Background Layered Outline Text */}
      <BackgroundWord 
        word="SHREYASH" 
        className="top-[18%] left-[5%] text-[15vw]" 
        strokeWidth="thin" // maps to -webkit-text-stroke: 1.5px rgba(0, 0, 0, 0.14) or similar
      />

      {/* Flat Content List ordered using Flex-col & Order utilities on mobile, and grid on desktop */}
      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 flex flex-col lg:grid lg:grid-cols-12 lg:gap-x-12 lg:gap-y-4 lg:items-center">
        
        {/* 1. Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="order-1 lg:col-span-7 lg:col-start-1 lg:row-start-1 inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#4F3FF0]/20 bg-[#4F3FF0]/5 text-xs text-[#4F3FF0] font-mono mb-4 lg:mb-0 w-fit"
        >
          <span className="w-2 h-2 rounded-full bg-[#4F3FF0] status-dot-pulse" />
          <span>Available for work</span>
        </motion.div>

        {/* 2. Big Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="order-2 lg:col-span-7 lg:col-start-1 lg:row-start-2 text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-[#111111] leading-none font-sans text-left"
        >
          Shreyash Dalvi
        </motion.h1>

        {/* 3. Rotating Typewriter Role Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="order-3 lg:col-span-7 lg:col-start-1 lg:row-start-3 mt-2 lg:mt-1 text-left"
        >
          <RotatingTypewriter words={roles} />
        </motion.div>

        {/* 4. Large Circular Photo Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const, delay: 0.3 }}
          className="order-4 lg:col-span-5 lg:col-start-8 lg:row-start-1 lg:row-span-6 lg:self-center flex items-center justify-center relative w-64 h-64 sm:w-80 sm:h-80 mx-auto my-8 lg:my-0 rounded-full border border-black/10 bg-white shadow-xl overflow-hidden"
        >
          <img 
            src="/shreyash.jpg" 
            alt="Shreyash Dalvi" 
            className="w-full h-full object-cover"
          />
          
          {/* Subtle screen grid overlay */}
          <div className="absolute inset-0 grid-bg opacity-5 z-10 pointer-events-none" />
        </motion.div>

        {/* 5. Main Headline */}
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="order-5 lg:col-span-7 lg:col-start-1 lg:row-start-4 text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#111111]/90 leading-snug text-left mt-4 lg:mt-2"
        >
          I turn logic, data, and code into systems that actually work.
        </motion.h3>

        {/* 6. Short Intro Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="order-6 lg:col-span-7 lg:col-start-1 lg:row-start-5 text-sm sm:text-base text-[#111111]/60 mt-3 max-w-xl leading-relaxed text-left"
        >
          I build practical systems that connect backend logic, clean data, and intelligent applications — from secure APIs and race-safe booking flows to ML-powered tools. Based in India, building with discipline and real-world problem solving.
        </motion.p>

        {/* 7. Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="order-7 lg:col-span-7 lg:col-start-1 lg:row-start-6 flex flex-wrap gap-4 mt-6 w-full justify-start"
        >
          <button
            onClick={handleScrollToProjects}
            className="px-6 py-3.5 bg-black hover:bg-neutral-800 text-white font-mono text-xs rounded-full font-bold transition-all flex items-center gap-2 group cursor-pointer shadow-md shadow-black/10"
          >
            View My Work
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <a
            href="/Shreyash_Dalvi_Resume.pdf"
            download
            className="px-6 py-3.5 border border-black/10 hover:border-black/20 bg-white text-[#111111] hover:bg-neutral-50 font-mono text-xs rounded-full font-bold transition-all flex items-center gap-2"
          >
            <FileText className="w-4 h-4" />
            Download Resume
          </a>
          <button
            onClick={handleScrollToContact}
            className="px-6 py-3.5 border border-black/10 hover:border-black/20 bg-white text-[#111111] hover:bg-neutral-50 font-mono text-xs rounded-full font-bold transition-all flex items-center gap-2 cursor-pointer"
          >
            Contact
          </button>
        </motion.div>

      </div>
    </section>
  );
}


