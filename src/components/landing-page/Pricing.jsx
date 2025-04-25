import React from "react";

const plans = [
  { name: "Free", price: "$0", features: ["Demo voice", "Limited voices"] },
  { name: "Pro",  price: "$19", features: ["All voices", "Commercial license"] },
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-white text-center py-16">
      <h2 className="text-3xl font-semibold text-indigo-600">Choose Your Plan</h2>
      <div className="flex justify-center gap-8 mt-8">
        {plans.map((plan) => (
          <div key={plan.name} className="bg-gray-50 p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-800">{plan.name} Plan</h3>
            <p className="mt-2 text-gray-600">{plan.price} / month</p>
            <button className="mt-4 bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700 transition">
              Get Started
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
