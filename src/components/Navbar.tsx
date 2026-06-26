"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, Activity } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const navLinks = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "discipline", label: "Discipline" },
    { id: "contact", label: "Contact" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Simple intersection observer approximation for active navigation links
      const scrollPosition = window.scrollY + 100;
      for (const link of navLinks) {
        const el = document.getElementById(link.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(link.id);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
      setActiveSection(id);
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#FAFAFA]/90 backdrop-blur-md py-4 border-b border-black/5 shadow-sm"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo / Brand */}
          <a
            href="#hero"
            onClick={(e) => handleLinkClick(e, "hero")}
            className="flex items-center gap-2.5 group text-[#111111] font-mono text-sm tracking-widest font-bold"
          >
            <div className="relative flex items-center justify-center w-5 h-5">
              <Activity className="absolute w-4 h-4 text-[#4F3FF0] animate-pulse z-10" />
              <Activity className="w-4 h-4 text-[#4F3FF0]/50 animate-ping absolute" />
            </div>
            <span>Shreyash<span className="text-[#4F3FF0]">.</span>Dalvi</span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-8 list-none m-0 p-0">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => handleLinkClick(e, link.id)}
                    className={`text-xs font-mono tracking-wider transition-all relative py-1 ${
                      activeSection === link.id
                        ? "text-[#4F3FF0] font-bold"
                        : "text-[#111111]/60 hover:text-[#4F3FF0]"
                    }`}
                  >
                    {link.label}
                    {activeSection === link.id && (
                      <motion.span
                        layoutId="activeNavIndicator"
                        className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#4F3FF0] rounded"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </a>
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, "contact")}
              className="text-xs font-mono tracking-wider border border-[#4F3FF0]/30 hover:border-[#4F3FF0] px-4 py-2 rounded-full text-[#4F3FF0] bg-[#4F3FF0]/5 hover:bg-[#4F3FF0]/10 transition-all"
            >
              Contact
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-1.5 text-[#111111]/70 hover:text-[#111111] rounded-lg hover:bg-black/5 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 top-[60px] z-[49] md:hidden bg-[#FAFAFA] border-b border-black/5 backdrop-blur-lg px-6 py-8"
          >
            <ul className="flex flex-col gap-6 list-none m-0 p-0">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => handleLinkClick(e, link.id)}
                    className={`block text-sm font-mono tracking-wider py-2 ${
                      activeSection === link.id ? "text-[#4F3FF0] font-bold" : "text-[#111111]/70 hover:text-[#4F3FF0]"
                    }`}
                  >
                    <span className="text-[#4F3FF0] mr-2">&gt;</span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-8 pt-6 border-t border-black/5">
              <a
                href="#contact"
                onClick={(e) => handleLinkClick(e, "contact")}
                className="w-full text-center block font-mono text-sm border border-[#4F3FF0]/30 hover:border-[#4F3FF0] py-3 rounded-full text-[#4F3FF0] bg-[#4F3FF0]/5 hover:bg-[#4F3FF0]/10 transition-all"
              >
                Contact
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

