'use client';

import { useState } from 'react';
import { Forminit } from 'forminit';

export default function ContactUs() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const forminit = new Forminit({
    proxyUrl: '/api/forminit',
  });

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const { error } = await forminit.submit('xzd3cdt4pma', formData);

    if (error) {
      setStatus('error');
      setErrorMsg(error.message);
      return;
    }

    setStatus('success');
    form.reset();
  }

  return (
    <section className="bg-gray-100 py-10 sm:py-16 px-2 sm:px-4" id="contact">

      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-gray-500">
          Candidate <span className="text-purple-600">Registration</span>
        </h2>

        <p className="text-gray-600 mb-10 text-sm sm:text-base">
          Submit your details and our team will get in touch.
        </p>
      </div>

      <div className="max-w-5xl mx-auto">

        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded-2xl p-8 space-y-6"
        >

          {/* Personal Details */}
          <h3 className="text-lg font-semibold text-gray-800">Personal Details</h3>

          <input
            type="text"
            name="fi-sender-fullName"
            placeholder="Full Name"
            className="w-full p-3 border text-gray-500 border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
            required
          />

          <input
            type="email"
            name="fi-sender-email"
            placeholder="Email Address"
            className="w-full p-3 border text-gray-500 border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
            required
          />

          <input
            type="tel"
            name="fi-sender-phone"
            placeholder="Mobile Number (+919876543210)"
            pattern="^\+[1-9]\d{9,14}$"
            className="w-full p-3 border text-gray-500 border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
            required
          />

          <input
            type="text"
            name="fi-text-currentLocation"
            placeholder="Current Location"
            className="w-full p-3 border text-gray-500 border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
            required
          />

          {/* Resume Upload */}
          <h3 className="text-lg font-semibold text-gray-500 text-gray-800">Resume</h3>

          <input
            type="file"
            name="fi-file-resume"
            accept=".pdf,.doc,.docx"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none text-gray-500"
            required
          />

          {/* Availability */}
          <h3 className="text-lg font-semibold text-gray-800">Availability</h3>

          <input
            type="date"
            name="fi-date-availableFrom"
            className="w-full p-3 border text-gray-500 border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
            required
          />

          {status === 'error' && (
            <p className="text-red-500 text-sm">{errorMsg}</p>
          )}

          {status === 'success' && (
            <p className="text-green-600 text-sm font-medium">
              Application submitted successfully!
            </p>
          )}

          <div className="flex gap-4">
            <button
              type="submit"
              disabled={status === 'loading'}
              className="flex-1 bg-purple-600 text-white font-semibold py-3 rounded-lg hover:bg-purple-700 transition disabled:opacity-50"
            >
              {status === 'loading' ? 'Submitting...' : 'Submit Application'}
            </button>

            <button
              type="reset"
              className="flex-1 bg-gray-400 text-white font-semibold py-3 rounded-lg hover:bg-gray-500 transition"
            >
              Reset
            </button>
          </div>

        </form>
      </div>
    </section>
  );
}