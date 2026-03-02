'use client';

import {
  FaUserPlus,
  FaSearch,
  FaFileUpload,
  FaSmile,
  FaClipboardCheck,
} from "react-icons/fa";

type Step = {
  icon: React.ReactNode;
  title: string;
  description: string;
  bg: string;
};

const steps: Step[] = [
  {
    icon: <FaUserPlus className="text-white text-xl" />,
    title: "Create an Account",
    description:
      "Sign up for a job account to submit resumes and applications, post experience, and favorite jobs.",
    bg: "bg-orange-500",
  },
  {
    icon: <FaClipboardCheck className="text-white text-xl" />,
    title: "Register",
    description:
      "Complete your registration by verifying your email and filling out basic profile details.",
    bg: "bg-blue-500",
  },
  {
    icon: <FaSearch className="text-white text-xl" />,
    title: "Search Job",
    description:
      "Set job-finding parameters to receive matching results tailored to your preferences.",
    bg: "bg-purple-500",
  },
  {
    icon: <FaFileUpload className="text-white text-xl" />,
    title: "Upload CV / Resume",
    description:
      "Upload your resume and apply for jobs matching your skills.",
    bg: "bg-teal-500",
  },
  {
    icon: <FaSmile className="text-white text-xl" />,
    title: "Get Job",
    description:
      "Schedule interview, receive offer, and get hired through a simple process.",
    bg: "bg-yellow-500",
  },
];

export default function Steps() {
  return (
    <section className="text-center py-10 sm:py-16 px-2 sm:px-4 bg-white">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
        Get Hired in{" "}
        <span className="text-purple-600">
          4 Quick Easy Steps
        </span>
      </h2>

      <p className="text-gray-500 max-w-xl mx-auto mb-6 sm:mb-10 text-xs sm:text-base">
        The quickest and most effective way to get hired by top firms.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 sm:gap-6 max-w-6xl mx-auto">
        {steps.map((step, idx) => (
          <div
            key={idx}
            className="bg-white shadow-lg rounded-2xl p-4 sm:p-6 flex flex-col items-center text-center transition hover:shadow-xl"
          >
            <div
              className={`w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full mb-2 sm:mb-4 ${step.bg}`}
            >
              {step.icon}
            </div>

            <h3 className="font-semibold text-base sm:text-lg mb-1 sm:mb-2">
              {step.title}
            </h3>

            <p className="text-xs sm:text-sm text-gray-500">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}