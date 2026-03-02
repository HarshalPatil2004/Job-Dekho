'use client';

import Image from "next/image";

export default function JobUpdates() {
  return (
    <section className="bg-gray-900 text-white px-2 sm:px-6 py-8 sm:py-12 rounded-xl relative flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto mt-8 sm:mt-12 shadow-lg">
      
      <div className="md:w-2/3 z-10">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">
          Get Latest Job Updates
        </h2>

        <p className="text-gray-300 mb-4 max-w-lg text-sm sm:text-base">
          Tired of searching for jobs? Sign up for email updates and get the best openings directly.
        </p>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col sm:flex-row gap-2 sm:gap-4"
        >
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 rounded-md text-gray-900 focus:outline-none w-full sm:w-auto"
          />

          <button
            type="submit"
            className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-md transition font-semibold"
          >
            Subscribe
          </button>
        </form>
      </div>

      <div className="md:w-1/3 mt-4 sm:mt-8 md:mt-0 flex justify-center relative z-10">
        <Image
          src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=300"
          alt="Job portal professional"
          width={300}
          height={224}
          className="h-32 sm:h-48 md:h-56 object-cover rounded-xl"
        />
      </div>

      <div className="absolute right-10 bottom-0 w-72 h-72 bg-white opacity-5 rounded-full pointer-events-none hidden md:block" />
    </section>
  );
}