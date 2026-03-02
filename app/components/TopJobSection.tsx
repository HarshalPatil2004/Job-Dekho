'use client'

import React, { useState, useEffect } from "react";

// 1. Define the Type for consistency
export interface Job {
  company: string;
  imgSrc: string;
  title: string;
  desc: string;
  type: "Full Time" | "Part Time" | "Contract" | "Internship";
  location: string;
  salary: string;
  isFeatured: boolean;
  hoverBg: string;
}

export const jobs: Job[] = [
  {
    company: "Google",
    imgSrc: "https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_Reference_Icon.svg",
    title: "UI/UX Designer",
    desc: "Seeking a passionate designer to join our creative frontend team.",
    type: "Contract",
    location: "4 Positions",
    salary: "$13k/Month",
    isFeatured: false,
    hoverBg: "from-blue-600 to-indigo-700"
  },
  {
    company: "Airbnb",
    imgSrc: "https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_Bélo.svg",
    title: "Frontend Engineer",
    desc: "Looking for an experienced professional in design and user experience.",
    type: "Internship",
    location: "11 Positions",
    salary: "$11k/Month",
    isFeatured: false,
    hoverBg: "from-rose-500 to-orange-600"
  },
  {
    company: "Twitter",
    imgSrc: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Logo_of_Twitter.svg",
    title: "Product Manager",
    desc: "Conduct cutting-edge research in artificial intelligence and product growth.",
    type: "Contract",
    location: "19 Positions",
    salary: "$12k/Month",
    isFeatured: true,
    hoverBg: "from-sky-400 to-blue-600"
  },
  {
    company: "Facebook",
    imgSrc: "https://upload.wikimedia.org/wikipedia/commons/b/b8/2021_Facebook_icon.svg",
    title: "Data Analyst",
    desc: "Design intuitive user experiences for web and mobile applications.",
    type: "Internship",
    location: "7 Positions",
    salary: "$5k/Month",
    isFeatured: true,
    hoverBg: "from-blue-700 to-cyan-600"
  },
  {
    company: "Spotify",
    imgSrc: "https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_with_text.svg",
    title: "AI Researcher",
    desc: "Work on CI/CD pipelines and deployment automation for audio streaming.",
    type: "Internship",
    location: "13 Positions",
    salary: "$9k/Month",
    isFeatured: true,
    hoverBg: "from-green-500 to-emerald-700"
  },
  {
    company: "Amazon",
    imgSrc: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    title: "Cloud Architect",
    desc: "Architect cloud solutions and manage global cloud infrastructure.",
    type: "Part Time",
    location: "20 Positions",
    salary: "$13k/Month",
    isFeatured: true,
    hoverBg: "from-orange-400 to-yellow-600"
  },
  {
    company: "Netflix",
    imgSrc: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
    title: "Backend Developer",
    desc: "Develop scalable mobile apps for Android and iOS platforms.",
    type: "Full Time",
    location: "12 Positions",
    salary: "$12k/Month",
    isFeatured: false,
    hoverBg: "from-red-600 to-black"
  },
  {
    company: "Microsoft",
    imgSrc: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    title: "DevOps Engineer",
    desc: "Design intuitive user experiences for web and cloud applications.",
    type: "Part Time",
    location: "11 Positions",
    salary: "$7k/Month",
    isFeatured: true,
    hoverBg: "from-blue-500 to-teal-500"
  },
  {
    company: "Figma",
    imgSrc: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",
    title: "Senior Product Designer",
    desc: "Analyze data and provide insights to boost product design performance.",
    type: "Full Time",
    location: "10 Positions",
    salary: "$11k/Month",
    isFeatured: true,
    hoverBg: "from-purple-500 to-pink-500"
  },
  {
    company: "Adobe",
    imgSrc: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Adobe_Corporate_logo.svg",
    title: "Mobile Developer",
    desc: "Help us build scalable backend systems for millions of creative users.",
    type: "Contract",
    location: "7 Positions",
    salary: "$11k/Month",
    isFeatured: false,
    hoverBg: "from-red-500 to-orange-500"
  }
];
export default function TopJobsSection() {
  const [jobsToShowCount, setJobsToShowCount] = useState(6);
  const [mounted, setMounted] = useState(false);

  // Hydration Guard
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  const jobsToShow = jobs.slice(0, jobsToShowCount);

  if (!mounted) return null;

  return (
    <section id="job" className="py-20 px-4 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-black mb-4 text-slate-900">
            <span className="text-indigo-600">Latest & Top</span> Job Openings
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            Discover the finest career opportunities from Fortune 500 companies and tech startups.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {jobsToShow.map((job, index) => (
            <div
              key={`${job.company}-${index}`}
              className={`group relative overflow-hidden bg-white p-8 rounded-3xl shadow-sm border border-slate-100 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl cursor-pointer`}
            >
              {/* Hover Gradient Overlay */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${job.hoverBg}`} />

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-slate-50 group-hover:bg-white/20 transition-colors">
                    <img src={job.imgSrc} alt={job.company} className="w-8 h-8 object-contain group-hover:brightness-0 group-hover:invert" />
                  </div>
                  {job.isFeatured && (
                    <span className="text-[10px] font-bold uppercase tracking-widest bg-amber-100 text-amber-700 px-3 py-1 rounded-full group-hover:bg-white group-hover:text-amber-600">
                      Featured
                    </span>
                  )}
                </div>

                <p className="text-sm font-bold text-indigo-600 group-hover:text-indigo-100 mb-1">
                  {job.company}
                </p>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-white mb-3">
                  {job.title}
                </h3>
                <p className="text-slate-500 group-hover:text-slate-100 text-sm leading-relaxed mb-6">
                  {job.desc}
                </p>

                <div className="flex flex-wrap gap-2">
                  <Badge text={job.location} color="bg-blue-50 text-blue-600" />
                  <Badge text={job.type} color="bg-rose-50 text-rose-600" />
                  <Badge text={job.salary} color="bg-emerald-50 text-emerald-600" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="mt-16 flex flex-col sm:flex-row justify-center items-center gap-4">
          {jobsToShowCount < jobs.length && (
            <button
              onClick={() => setJobsToShowCount(prev => prev + 6)}
              className="px-8 py-3 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200"
            >
              Load More Jobs
            </button>
          )}
          {jobsToShowCount > 6 && (
            <button
              onClick={() => setJobsToShowCount(6)}
              className="px-8 py-3 border-2 border-slate-200 text-slate-600 font-bold rounded-xl hover:bg-slate-100 transition-all"
            >
              Show Less
            </button>
          )}
        </div>
      </div>
    </section>
  );
}

// Sub-component for cleaner code
function Badge({ text, color }: { text: string; color: string }) {
  return (
    <span className={`px-4 py-1.5 rounded-xl text-xs font-bold ${color} group-hover:bg-white/10 group-hover:text-white transition-colors`}>
      {text}
    </span>
  );
}