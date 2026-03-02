'use client';

import { useState } from "react";
import Image from "next/image";

type Testimonial = {
  name: string;
  role: string;
  avatar: string;
  content: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Jordan Michaels",
    role: "Full Stack Developer",
    avatar: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=80",
    content:
      "Switching to full-stack development was the best career decision I made. This platform provided structured guidance and hands-on projects that helped me land a role at a SaaS startup within months.",
  },
  {
    name: "Priya Sharma",
    role: "Full Stack Developer",
    avatar: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=80",
    content:
      "From frontend fundamentals to backend systems design, the resources here made complex concepts easier to understand.",
  },
  {
    name: "Carlos Vega",
    role: "Full Stack Developer",
    avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=80",
    content:
      "The mentorship and coding challenges gave me real-world exposure. I now build scalable applications confidently.",
  },
];

export default function Testimonials() {
  const [selected, setSelected] = useState<number>(0);

  return (
    <section className="py-10 sm:py-16 px-2 sm:px-4 bg-white text-center">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">
        Testimonials
      </h2>

      <p className="text-gray-500 max-w-xl mx-auto mb-6 text-sm">
        Hear from successful developers about how this platform helped them grow.
      </p>

      <div className="flex justify-center space-x-2 mb-8">
        {testimonials.map((t, index) => (
          <button
            key={index}
            onClick={() => setSelected(index)}
            className={`w-10 h-10 rounded-full border-2 transition ${
              index === selected
                ? "border-purple-600 scale-110"
                : "border-gray-300"
            } overflow-hidden`}
          >
            <Image
              src={t.avatar}
              alt={t.name}
              width={40}
              height={40}
              className="w-full h-full object-cover rounded-full"
            />
          </button>
        ))}
      </div>

      <div className="max-w-2xl mx-auto bg-purple-600 text-white rounded-xl shadow-xl p-6">
        <p className="leading-relaxed mb-4">
          {testimonials[selected].content}
        </p>

        <div className="font-semibold">
          {testimonials[selected].name}
        </div>

        <div className="opacity-80">
          {testimonials[selected].role}
        </div>

        <div className="text-yellow-300 mt-2">★★★★★</div>
      </div>
    </section>
  );
}