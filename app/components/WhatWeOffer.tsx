'use client'

import React, { useState, useEffect } from 'react';

interface Offer {
  id: string;
  title: string;
  desc: string;
  img: string;
}

const offers: Offer[] = [
  {
    id: "01",
    title: "Smart Recommendations",
    desc: "Our AI-driven platform helps you discover countless job opportunities tailored specifically to your skills.",
    img: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: "02",
    title: "Professional Profile Builder",
    desc: "Craft a standout professional identity with our intuitive tools designed to get you noticed by top recruiters.",
    img: "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: "03",
    title: "Expert Career Coaching",
    desc: "Gain a competitive edge with personalized guidance from industry veterans to accelerate your career trajectory.",
    img: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
];

export default function WhatWeOffer() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section id="services" className="py-20 px-6 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">
          What We <span className="text-purple-600">Offer</span>
        </h2>
        <p className="text-slate-600 max-w-2xl mx-auto mb-16 text-lg">
          <span className="font-bold text-indigo-600">Job Dekho</span> provides the essential tools and guidance you need to build your ideal career and land your dream role.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {offers.map((offer) => (
            <div 
              key={offer.id} 
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 group border border-slate-100"
            >
              <div className="h-56 overflow-hidden relative">
                <img
                  src={offer.img}
                  alt={offer.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              
              <div className="p-8 text-left relative">
                <span className="absolute -top-6 right-8 text-5xl font-black text-slate-100 group-hover:text-purple-50 transition-colors pointer-events-none">
                  {offer.id}
                </span>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-purple-600 transition-colors">
                  {offer.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {offer.desc}
                </p>
                
                <button className="mt-6 text-sm font-bold text-purple-600 hover:text-purple-800 flex items-center gap-2 group/btn">
                  Learn more 
                  <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}