"use client"; // Mark the component as a client component

import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false); // Close the menu on mobile after clicking
    }
  };

  return (
    <div>
      <nav className="text-white py-4 fixed top-0 left-0 w-full z-50" style={{ backgroundColor: "#074799" }}>
        <div className="container mx-auto flex justify-between items-center px-4">
          {/* Logo */}
          <div className="text-xl font-bold">VV's Portfolio</div>

          {/* Hamburger Menu Button */}
          <button
            className="md:hidden focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>

          {/* Links */}
          <div
            className={`${
              isOpen ? "block" : "hidden"
            } md:flex md:space-x-10 uppercase font-light tracking-custom`}
          >
            <button
              onClick={() => scrollToSection("about")}
              className="block md:inline-block hover:underline"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("experience")}
              className="block md:inline-block hover:underline"
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="block md:inline-block hover:underline"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("publications")}
              className="block md:inline-block hover:underline"
            >
              Publications
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}
