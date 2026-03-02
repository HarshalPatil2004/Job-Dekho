'use client'

import React, { useState, useEffect } from 'react';
import { FaPlay } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaMeta } from "react-icons/fa6";



interface JobTag {
  title: string;
  color: string;
}

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  const jobTags: JobTag[] = [
    { title: "Full Stack Developer", color: "border-blue-400 text-blue-600" },
    { title: "Back-end Developer", color: "border-indigo-400 text-indigo-600" },
    { title: "Graphic Designer", color: "border-pink-400 text-pink-600" },
    { title: "Senior Accountant", color: "border-amber-400 text-amber-600" },
    { title: "UI Designer", color: "border-green-400 text-green-600" },
    { title: "Employer Branding Associate", color: "border-cyan-400 text-cyan-600" },
    { title: "Lead DevOps Engineer", color: "border-red-400 text-red-600" },
  ];

  // Prevent hydration mismatch for animations and random floating positions
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className="relative bg-gradient-to-b from-slate-50 to-slate-200 py-16 px-4 sm:py-32 sm:px-8 overflow-hidden">

      {/* Floating Logos - Optimized for Next.js Images or high-quality icons */}
      <div className=" inset-0 pointer-events-none hidden lg:block">
        <img
          src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
          className="absolute top-10 left-[10%] w-8 opacity-20 animate-bounce"
          style={{ animationDuration: '3s' }}
          alt="Facebook"
        />
        <div className="absolute top-20 right-[15%] opacity-20  animate-bounce"  >
          <FcGoogle size={40} />
        </div>
        <img
          src="https://cdn-icons-png.flaticon.com/512/270/270798.png"
          className="absolute bottom-21 left-[17%] w-8 opacity-20 animate-bounce"
          style={{ animationDuration: '5s' }}
          alt="github"
        />
        <img
          src="https://cdn-icons-png.flaticon.com/512/732/732221.png"
          className="absolute bottom-24 right-[12%] w-8 opacity-20 animate-bounce"
          style={{ animationDuration: '4s' }}
          alt="microsoft"
        />

      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <p className="text-sm sm:text-base text-indigo-600 font-bold uppercase mb-4 tracking-widest">
          🚀 #1 Job Hunt Platform in India
        </p>

        <h1 className="text-4xl sm:text-6xl font-black mb-6 text-slate-900 leading-[1.1] tracking-tight">
          Search, Apply & <br />
          Get Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Dream Job</span>
        </h1>

        <p className="text-slate-600 mb-10 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
          Start your hunt for life-changing career opportunities. Explore thousands of jobs from top-tier companies and apply with one click.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-16">
          <button
            className="group relative px-10 py-4 bg-indigo-600 text-white font-bold rounded-xl shadow-xl shadow-indigo-200 transition-all hover:bg-indigo-700 hover:scale-105 active:scale-95 overflow-hidden"
          >
            <span className="relative z-10">Browse Jobs Now</span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          </button>

          <button className="flex items-center gap-3 text-slate-700 font-bold hover:text-indigo-600 transition group">
            <div className="p-3 bg-white rounded-full shadow-md group-hover:bg-indigo-50 transition">
              <div>
                <FaPlay />
              </div>
            </div>
            How it Works?
          </button>
        </div>

        {/* Marquee Section */}
       <div className="relative w-screen left-1/2 -translate-x-1/2 mt-10 overflow-hidden">
  <div className="flex gap-6 w-max marquee-track px-6">
    {[...jobTags, ...jobTags].map((tag, idx) => (
      <div
        key={`${tag.title}-${idx}`}
        className={`flex-shrink-0 border-2 ${tag.color} px-10 py-4 rounded-2xl text-sm font-bold bg-white/50 backdrop-blur-sm shadow-sm transition-transform duration-300 hover:scale-110 cursor-default`}
      >
        {tag.title}
      </div>
    ))}
  </div>

  <style jsx global>{`
    @keyframes ultraMarquee {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }

    .marquee-track {
      animation: ultraMarquee 35s linear infinite;
    }

    .marquee-track:hover {
      animation-play-state: paused;
    }
  `}</style>
</div>
      </div>
    </section>  
  );
}