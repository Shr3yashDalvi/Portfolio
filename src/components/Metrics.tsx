"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Metrics() {
  const stats = [
    { value: "2027", label: "Graduating" },
    { value: "3+", label: "Featured Projects" },
    { value: "1", label: "Internship" },
    { value: "50K+", label: "Records Validated" },
    { value: "20%", label: "Data Quality Improvement" }
  ];

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const } }
  };

  return (
    <section className="relative py-10 z-10 border-y border-black/5 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-col md:flex-row md:items-center justify-between gap-8 md:gap-4 md:divide-x md:divide-black/5"
        >
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className={`flex flex-col items-start md:items-center text-left md:text-center w-full ${idx > 0 ? "md:pl-6" : ""}`}
            >
              <span className="text-3xl sm:text-4xl font-mono font-black text-[#111111] tracking-tight leading-none">
                {stat.value}
              </span>
              <span className="text-[10px] font-mono text-[#111111]/45 uppercase tracking-widest mt-2 font-bold">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}


