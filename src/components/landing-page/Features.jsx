import React from "react";

const features = [
  { title: "Multiple Voices", desc: "Wide range of AI voices to match your brand." },
  { title: "Fast Rendering", desc: "Generate voiceovers in seconds with our AI engine." },
  { title: "High Quality", desc: "Indistinguishable from human speech." },
];

export default function Features() {
  return (
    <section id="features" className="bg-gray-50 text-center py-16">
      <h2 className="text-3xl font-semibold text-indigo-600">Key Features</h2>
      <div className="grid md:grid-cols-3 gap-8 mt-8 px-4">
        {features.map((f) => (
          <div key={f.title} className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-800">{f.title}</h3>
            <p className="mt-2 text-gray-600">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
