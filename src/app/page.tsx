"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import IntroLoader from "../components/IntroLoader";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Metrics from "../components/Metrics";
import About from "../components/About";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Education from "../components/Education";
import BeyondCode from "../components/BeyondCode";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {/* Cinematic Boot sequence */}
      <AnimatePresence mode="wait">
        {loading ? (
          <IntroLoader key="loader" onComplete={() => setLoading(false)} />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col min-h-screen bg-[#FAFAFA]"
          >
            {/* Nav */}
            <Navbar />

            {/* Main Sections */}
            <main className="flex-1 flex flex-col w-full relative">
              <Hero />
              <Metrics />
              <About />
              <Experience />
              <Projects />
              <Skills />
              <Education />
              <BeyondCode />
              <Contact />
            </main>

            {/* Footer */}
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
