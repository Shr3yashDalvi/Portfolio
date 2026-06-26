import React from "react";
import { GraduationCap, Award, BookOpen, Clock } from "lucide-react";
import BackgroundWord from "./BackgroundWord";

export default function Education() {
  const courses = [
    "Data Structures & Algorithms",
    "Cloud Computing",
    "DBMS (Database Management)",
    "OOP (Object Oriented Programming)",
    "Operating Systems",
    "Computer Networks",
    "Machine Learning Basics",
    "Data Science Fundamentals",
    "Big Data Analysis"
  ];

  return (
    <section className="relative py-24 z-10 overflow-hidden bg-[#FAFAFA]">
      {/* Background Layered Outline Text */}
      <BackgroundWord 
        word="ACADEMICS" 
        className="bottom-[10%] right-[5%] text-[14vw]" 
        strokeWidth="thin" 
      />

      {/* Background blur */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 glow-spot-indigo opacity-10 z-0" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4F3FF0]" />
            <span className="text-xs font-mono tracking-widest text-[#4F3FF0] uppercase">05 / Education Ingestion</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#111111] font-sans">
            Academic Background
          </h2>
        </div>

        {/* Education Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl mx-auto items-stretch mt-12 lg:mt-16">
          {/* Main Institution Card */}
          <div className="lg:col-span-6 glass-panel p-6 sm:p-8 rounded-2xl border border-black/5 bg-white shadow-sm relative flex flex-col justify-between overflow-hidden">
            {/* Corner glow */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#4F3FF0]/5 blur-xl rounded-full" />
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#4F3FF0]" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#4F3FF0]/10 border border-[#4F3FF0]/20 flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-[#4F3FF0]" />
                </div>
                <span className="text-[10px] font-mono text-[#111111]/30 uppercase">Academic ID: 411044</span>
              </div>

              <h3 className="text-xl font-bold text-[#111111] font-sans leading-tight text-left">
                B.Tech in Information Technology
              </h3>
              <p className="text-sm font-mono text-[#111111]/60 mt-1 font-semibold text-left">
                DY Patil College of Engineering, Pune
              </p>

              <div className="flex flex-col gap-3 mt-6 text-left">
                <div className="flex items-center gap-2 text-xs text-[#111111]/70">
                  <Clock className="w-4 h-4 text-[#111111]/30 shrink-0" />
                  <span>Expected Graduation: <strong>May 2027</strong></span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#111111]/70">
                  <Award className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>Grade / Performance: <strong>7.5 CGPA</strong></span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-black/5 text-[10px] font-mono text-[#111111]/35 text-left">
              STATUS: ENROLLED // PIPELINE ACTIVE
            </div>
          </div>

          {/* Coursework Block */}
          <div className="lg:col-span-6 glass-panel p-6 sm:p-8 rounded-2xl border border-black/5 bg-white shadow-sm flex flex-col justify-between overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#4F3FF0]" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#4F3FF0]/10 border border-[#4F3FF0]/20 flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-[#4F3FF0]" />
                </div>
                <span className="text-[10px] font-mono text-[#111111]/30 uppercase">Course Catalog</span>
              </div>

              <h3 className="text-lg font-bold text-[#111111] font-sans leading-tight mb-4 text-left">
                Core & Relevant Coursework
              </h3>
              
              <div className="flex flex-wrap gap-2 justify-start">
                {courses.map((course) => (
                  <span
                    key={course}
                    className="text-xs font-mono bg-[#F5F5F7] border border-black/5 px-3 py-1.5 rounded-lg text-[#111111]/80 hover:bg-[#4F3FF0]/5 hover:text-[#4F3FF0] hover:border-[#4F3FF0]/25 transition-all"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-black/5 text-[10px] font-mono text-[#111111]/35 text-left">
              CATALOG_COUNT: 9 ACTIVE CORE MODULES
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

