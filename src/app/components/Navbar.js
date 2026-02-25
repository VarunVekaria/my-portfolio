"use client";

import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const navLinks = [
    { label: "About", id: "about" },
    { label: "Technologies", id: "technologies" },
    { label: "Experience", id: "experience" },
    { label: "Projects", id: "projects" },
    { label: "Achievements", id: "achievements" },
  ];

  return (
    <nav
      className="fixed top-0 left-0 w-full z-50 py-4"
      style={{ backgroundColor: "#1A1B26" }}
    >
      <div className="container mx-auto flex justify-between items-center px-4 max-w-6xl">
        <button
          onClick={() => scrollToSection("about")}
          className="flex items-center gap-2 text-white font-medium hover:opacity-90"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </span>
          <span>Portfolio</span>
        </button>

        <button
          className="md:hidden p-2 -mr-2 text-neutral-300 hover:text-white"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>

        <div
          className={`${isOpen ? "flex flex-col absolute top-full left-0 right-0 py-4 gap-2 px-4" : "hidden"} md:flex md:flex-row md:static md:gap-8 md:items-center`}
          style={isOpen ? { backgroundColor: "#1A1B26" } : {}}
        >
          {navLinks.map(({ label, id }) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className="text-left md:text-center text-neutral-400 hover:text-white text-sm py-2 md:py-0 transition-colors"
            >
              {label}
            </button>
          ))}
          <div className="flex gap-4 pt-2 md:pt-0 md:pl-4 md:border-l border-neutral-700">
            <a
              href="https://github.com/VarunVekaria"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0a12 12 0 0 0-3.81 23.4c.6.11.82-.26.82-.58 0-.29-.01-1.04-.02-2.04-3.34.73-4.04-1.61-4.04-1.61-.54-1.38-1.33-1.75-1.33-1.75-1.09-.74.08-.73.08-.73 1.2.08 1.83 1.24 1.83 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.98 0-1.32.47-2.39 1.24-3.24-.13-.3-.54-1.52.12-3.16 0 0 1.01-.32 3.31 1.23.96-.27 1.99-.4 3.01-.4s2.05.14 3.01.4c2.3-1.55 3.31-1.23 3.31-1.23.66 1.64.25 2.86.12 3.16.77.85 1.24 1.91 1.24 3.24 0 4.66-2.8 5.68-5.48 5.98.43.37.82 1.1.82 2.22 0 1.6-.01 2.9-.01 3.29 0 .32.22.69.83.57A12 12 0 0 0 12 0" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/varun-vekaria-a5836a1b2/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.28c-.97 0-1.72-.79-1.72-1.72s.75-1.72 1.72-1.72 1.72.79 1.72 1.72-.75 1.72-1.72 1.72zm13.5 11.28h-3v-5.5c0-1.33-.02-3.03-1.84-3.03-1.84 0-2.12 1.43-2.12 2.92v5.61h-3v-10h2.88v1.37h.04c.4-.76 1.37-1.56 2.81-1.56 3.01 0 3.57 1.98 3.57 4.56v5.63z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
