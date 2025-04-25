import React from "react";

export default function Footer() {
  return (
    <footer className="bg-white text-center p-6 border-t">
      <p className="text-gray-600">© 2025 Vocora.cloud. All rights reserved.</p>
      <div className="mt-4 space-x-4">
        {["Privacy","Terms"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="text-indigo-600 hover:text-indigo-800 transition"
          >
            {item}
          </a>
        ))}
      </div>
    </footer>
  );
}
