import React from "react";

const faqs = [
  { q: "How realistic are the voices?", a: "Our AI voices are indistinguishable from human speech." },
  { q: "Can I use the voices commercially?", a: "Yes—licensed for personal & commercial use." },
];

export default function FAQ() {
  return (
    <section id="faq" className="bg-gray-50 text-center py-16">
      <h2 className="text-3xl font-semibold text-indigo-600">FAQ</h2>
      <div className="mt-8 space-y-4 px-4">
        {faqs.map((f) => (
          <details key={f.q} className="bg-white p-4 rounded-lg shadow">
            <summary className="text-lg font-medium text-gray-800 cursor-pointer">{f.q}</summary>
            <p className="mt-2 text-gray-600">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
