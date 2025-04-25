import React from "react";

export default function SocialProof() {
  return (
    <section className="bg-gray-50 py-16 text-center">
      <h2 className="text-3xl font-semibold text-indigo-600">Trusted by 1000+ Creators</h2>
      <div className="mt-8 flex justify-center space-x-6">
        {[1,2,3].map((i) => (
          <img
            key={i}
            src={`https://via.placeholder.com/150?text=Logo+${i}`}
            alt={`client${i}`}
            className="h-12"
          />
        ))}
      </div>
    </section>
  );
}
