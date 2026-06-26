"use client";

import React, { useState, useEffect } from "react";
import { ArrowUp, Github } from "lucide-react";

export default function Footer() {
  const [localTime, setLocalTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true
      };
      const formatter = new Intl.DateTimeFormat("en-US", options);
      setLocalTime(formatter.format(new Date()));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative py-12 z-10 border-t border-black/5 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left Section: Info */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-1">
          <div className="text-xs font-mono font-semibold text-[#111111]/85">
            Shreyash Dalvi <span className="text-[#4F3FF0] font-bold">.</span> Software Developer
          </div>
          <div className="text-[10px] text-[#111111]/45 font-mono mt-1">
            Built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.
          </div>
        </div>

        {/* Middle Section: Time */}
        <div className="text-[11px] font-mono text-[#111111]/60 flex items-center gap-2 border border-black/5 px-4 py-2 rounded-full bg-white shadow-sm select-none">
          <span className="w-1.5 h-1.5 rounded-full bg-[#4F3FF0] animate-pulse" />
          <span>Pune, India: <strong>{localTime || "00:00:00 AM"}</strong> (IST)</span>
        </div>

        {/* Right Section: Actions */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/Shr3yashDalvi"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-black/5 hover:bg-black/10 border border-black/5 text-[#111111]/50 hover:text-[#4F3FF0] transition-all"
            aria-label="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>

          <button
            onClick={scrollToTop}
            className="p-2 rounded-lg bg-[#4F3FF0] hover:bg-[#3d2ed0] text-white transition-all flex items-center gap-1.5 text-xs font-mono font-bold cursor-pointer shadow-md shadow-[#4F3FF0]/10"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
            Top
          </button>
        </div>
      </div>
    </footer>
  );
}

