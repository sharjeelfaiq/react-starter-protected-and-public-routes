import React from "react";

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-indigo-100 to-indigo-200 text-center p-20">
      <h1 className="text-5xl font-bold text-gray-800">
        AI-Powered Voiceovers in Seconds
      </h1>
      <p className="mt-4 text-lg text-gray-600">
        Choose from 50+ realistic AI voices to create high-quality voiceovers instantly.
      </p>
      <button className="mt-6 bg-indigo-600 text-white px-8 py-3 rounded-lg text-xl hover:bg-indigo-700 transition">
        Get Started
      </button>
    </section>
  );
}
