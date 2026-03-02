'use client';

import { useState, useEffect } from 'react';
import {
  FaPalette,
  FaBullhorn,
  FaChartLine,
  FaCar,
  FaTruckMoving,
  FaUserCog,
  FaBuilding,
  FaRegEdit,
} from 'react-icons/fa';
import { IconType } from 'react-icons';

/* -------------------- ICON MAP -------------------- */
/* Store component references, NOT JSX */

const iconMap: Record<string, IconType> = {
  FaPalette,
  FaBullhorn,
  FaChartLine,
  FaCar,
  FaTruckMoving,
  FaUserCog,
  FaBuilding,
  FaRegEdit,
};

/* -------------------- TYPES -------------------- */

type Category = {
  _id: string;
  icon: string;
  title: string;
  jobs: string;
  color?: string;
};

/* -------------------- DEFAULT DATA -------------------- */

const defaultCategories: Category[] = [
  { _id: '1', icon: 'FaPalette', title: 'Design', jobs: '50+ jobs', color: 'text-purple-600' },
  { _id: '2', icon: 'FaBullhorn', title: 'Marketing', jobs: '30+ jobs', color: 'text-blue-600' },
  { _id: '3', icon: 'FaChartLine', title: 'Finance', jobs: '45+ jobs', color: 'text-green-600' },
  { _id: '4', icon: 'FaCar', title: 'Automotive', jobs: '20+ jobs', color: 'text-orange-600' },
  { _id: '5', icon: 'FaTruckMoving', title: 'Logistics', jobs: '25+ jobs', color: 'text-red-600' },
  { _id: '6', icon: 'FaUserCog', title: 'HR', jobs: '35+ jobs', color: 'text-indigo-600' },
  { _id: '7', icon: 'FaBuilding', title: 'Real Estate', jobs: '40+ jobs', color: 'text-cyan-600' },
  { _id: '8', icon: 'FaRegEdit', title: 'Content', jobs: '28+ jobs', color: 'text-amber-600' },
];

/* -------------------- COMPONENT -------------------- */

export default function CareerCategories() {
  const [categories, setCategories] = useState<Category[]>(defaultCategories);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const loadCategories = async () => {
      try {
        const res = await fetch('/api/categories');
        if (!res.ok) return;

        const data: Category[] = await res.json();

        if (Array.isArray(data) && data.length > 0) {
          setCategories(data);
        }
      } catch (error) {
        console.error('Failed to fetch categories:', error);
      }
    };

    loadCategories();
  }, []);

  const visibleCategories = showAll
    ? categories
    : categories.slice(0, 8);

  return (
    <section className="relative py-10 sm:py-20 px-2 sm:px-4 text-center overflow-hidden bg-gradient-to-tr from-rose-100 via-orange-100 to-sky-100">
      
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8">
        <span className="text-purple-700">Countless Career Options</span> Are Waiting
        <br />
        For You to Explore
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {visibleCategories.map((cat) => {
          const IconComponent = iconMap[cat.icon] || FaUserCog;

          return (
            <div
              key={cat._id}
              className="bg-white hover:bg-purple-600 text-gray-800 hover:text-white transition rounded-xl p-6 shadow-md hover:shadow-2xl"
            >
              <div className={`text-3xl mb-4 ${cat.color ?? ''}`}>
                <IconComponent />
              </div>

              <h3 className="text-lg font-semibold mb-1">
                {cat.title}
              </h3>

              <p className="text-sm text-gray-500 hover:text-purple-100 transition">
                {cat.jobs}
              </p>
            </div>
          );
        })}
      </div>

      <div className="mt-10">
        <button
          className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full text-sm font-medium shadow-lg"
          onClick={() => setShowAll((prev) => !prev)}
        >
          {showAll ? 'Show Less' : 'More Options'}
        </button>
      </div>
    </section>
  );
}