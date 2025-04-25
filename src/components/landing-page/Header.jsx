import React from "react";
import Logo from "../../assets/clogo.png";

export default function Header() {
  return (
    <header className="bg-white text-gray-800 flex justify-between items-center p-6 shadow">
      <img src={Logo} alt="logo" width={80} />
      <nav className="space-x-6">
        {["Features", "Pricing", "FAQ"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="text-gray-600 hover:text-indigo-600 transition"
          >
            {item}
          </a>
        ))}
      </nav>
    </header>
  );
}
