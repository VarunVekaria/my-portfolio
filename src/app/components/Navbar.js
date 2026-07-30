"use client";

import { useEffect, useState } from "react";
import { profile } from "../data/content";

const navLinks = [
  { label: "About", id: "about" },
  { label: "Agentic AI", id: "agentic" },
  { label: "Stack", id: "skills" },
  { label: "Experience", id: "experience" },
  { label: "Projects", id: "projects" },
  { label: "Education", id: "education" },
  { label: "Research", id: "publications" },
  { label: "Awards", id: "achievements" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState("about");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scrollspy: highlight whichever section currently owns the upper viewport.
  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        const inView = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (inView[0]) setActiveId(inView[0].target.id);
      },
      { rootMargin: "-20% 0px -70% 0px", threshold: 0 }
    );

    navLinks.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "py-3 border-b border-white/10 backdrop-blur-xl"
          : "py-5 border-b border-transparent"
      }`}
      style={{ backgroundColor: scrolled ? "rgba(18,19,28,0.82)" : "transparent" }}
    >
      <div className="container mx-auto flex justify-between items-center px-5 max-w-6xl">
        <button
          onClick={() => scrollToSection("about")}
          className="flex items-center gap-2.5 text-white font-semibold text-sm hover:opacity-90 transition-opacity"
        >
          <span
            className="flex h-8 w-8 items-center justify-center rounded-lg text-white text-xs font-bold"
            style={{ background: "linear-gradient(135deg, #8B5CF6 0%, #38BDF8 100%)" }}
          >
            VV
          </span>
          <span className="hidden sm:inline">Varun Vekaria</span>
        </button>

        <button
          className="lg:hidden p-2 -mr-2 text-neutral-300 hover:text-white"
          onClick={() => setIsOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        <div
          className={`${
            isOpen
              ? "flex flex-col absolute top-full left-0 right-0 py-4 gap-1 px-5 border-b border-white/10 backdrop-blur-xl"
              : "hidden"
          } lg:flex lg:flex-row lg:static lg:gap-6 lg:items-center lg:py-0 lg:border-0`}
          style={isOpen ? { backgroundColor: "rgba(18,19,28,0.96)" } : undefined}
        >
          {navLinks.map(({ label, id }) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className={`text-left lg:text-center text-sm py-2 lg:py-0 transition-colors ${
                activeId === id ? "text-white font-medium" : "text-neutral-400 hover:text-white"
              }`}
            >
              {label}
            </button>
          ))}

          <div className="flex gap-4 items-center pt-3 mt-2 border-t border-white/10 lg:pt-0 lg:mt-0 lg:border-t-0 lg:pl-5 lg:border-l lg:border-white/10">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 0a12 12 0 0 0-3.81 23.4c.6.11.82-.26.82-.58 0-.29-.01-1.04-.02-2.04-3.34.73-4.04-1.61-4.04-1.61-.54-1.38-1.33-1.75-1.33-1.75-1.09-.74.08-.73.08-.73 1.2.08 1.83 1.24 1.83 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.98 0-1.32.47-2.39 1.24-3.24-.13-.3-.54-1.52.12-3.16 0 0 1.01-.32 3.31 1.23.96-.27 1.99-.4 3.01-.4s2.05.14 3.01.4c2.3-1.55 3.31-1.23 3.31-1.23.66 1.64.25 2.86.12 3.16.77.85 1.24 1.91 1.24 3.24 0 4.66-2.8 5.68-5.48 5.98.43.37.82 1.1.82 2.22 0 1.6-.01 2.9-.01 3.29 0 .32.22.69.83.57A12 12 0 0 0 12 0" />
              </svg>
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.28c-.97 0-1.72-.79-1.72-1.72s.75-1.72 1.72-1.72 1.72.79 1.72 1.72-.75 1.72-1.72 1.72zm13.5 11.28h-3v-5.5c0-1.33-.02-3.03-1.84-3.03-1.84 0-2.12 1.43-2.12 2.92v5.61h-3v-10h2.88v1.37h.04c.4-.76 1.37-1.56 2.81-1.56 3.01 0 3.57 1.98 3.57 4.56v5.63z" />
              </svg>
            </a>
            <a
              href={profile.videofolio}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-medium px-3 py-1.5 rounded-md text-white transition-transform hover:-translate-y-0.5"
              style={{ background: "linear-gradient(90deg, #8B5CF6 0%, #38BDF8 100%)" }}
            >
              Videofolio
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
