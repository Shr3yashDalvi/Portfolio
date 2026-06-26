"use client";

import React from "react";

interface BackgroundWordProps {
  word: string;
  className?: string;
  strokeWidth?: "thin" | "medium" | "thick";
}

export default function BackgroundWord({ word, className = "", strokeWidth = "medium" }: BackgroundWordProps) {
  // Map stroke styles as requested by the user
  const strokeStyle = (() => {
    switch (strokeWidth) {
      case "thin":
        return { 
          WebkitTextStroke: "1.5px rgba(0, 0, 0, 0.14)",
          opacity: 1
        };
      case "thick":
        return { 
          WebkitTextStroke: "2px rgba(0, 0, 0, 0.18)",
          opacity: 1
        };
      case "medium":
      default:
        return { 
          WebkitTextStroke: "1.5px rgba(0, 0, 0, 0.16)",
          opacity: 1
        };
    }
  })();

  return (
    <div
      className={`absolute select-none pointer-events-none z-0 font-sans font-black uppercase tracking-wider leading-none text-transparent ${className}`}
      style={strokeStyle}
    >
      {word}
    </div>
  );
}
