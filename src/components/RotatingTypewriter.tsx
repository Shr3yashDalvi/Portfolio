"use client";

import React, { useState, useEffect } from "react";

interface RotatingTypewriterProps {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
}

export default function RotatingTypewriter({
  words,
  typingSpeed = 70,
  deletingSpeed = 40,
  pauseDuration = 1200
}: RotatingTypewriterProps) {
  const [mounted, setMounted] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    let timer: NodeJS.Timeout;
    const currentWord = words[wordIndex];

    if (!isDeleting) {
      // Typing phase
      if (currentText.length < currentWord.length) {
        timer = setTimeout(() => {
          setCurrentText(currentWord.slice(0, currentText.length + 1));
        }, typingSpeed);
      } else {
        // Pause at full word before deleting
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, pauseDuration);
      }
    } else {
      // Deleting phase
      if (currentText.length > 0) {
        timer = setTimeout(() => {
          setCurrentText(currentWord.slice(0, currentText.length - 1));
        }, deletingSpeed);
      } else {
        // Move to next word
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, wordIndex, words, mounted, typingSpeed, deletingSpeed, pauseDuration]);

  if (!mounted) {
    // Return static initial skeleton to prevent Next.js hydration mismatch
    return (
      <div className="min-h-[2rem] flex items-center font-mono text-lg sm:text-xl md:text-2xl text-[#4F3FF0] font-semibold">
        <span>Backend + Data Developer</span>
        <span className="w-[3px] h-[1.2em] bg-[#4F3FF0] ml-1 opacity-100" />
      </div>
    );
  }

  return (
    <div 
      className="min-h-[2rem] flex items-center font-mono text-lg sm:text-xl md:text-2xl text-[#4F3FF0] font-semibold select-none"
      aria-live="polite"
    >
      <span>{currentText}</span>
      <span className="w-[3px] h-[1.2em] bg-[#4F3FF0] ml-1 animate-[blink_1s_step-end_infinite] inline-block align-middle" />
      <style jsx global>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </div>
  );
}
