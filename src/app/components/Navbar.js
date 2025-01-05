"use client"; // Add this at the top of the file

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className="bg-blue-700 text-white py-4">
        <div className="container mx-auto flex justify-between items-center px-4">
          {/* Logo */}
          <div className="text-xl font-bold">MyPortfolio</div>

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
                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>

          {/* Links */}
          <div
            className={`${
              isOpen ? 'block' : 'hidden'
            } md:flex md:space-x-10 uppercase font-light tracking-wide`}
          >
            <Link href="/" className="block md:inline-block hover:underline">
              About
            </Link>
            <Link
              href="/experience"
              className="block md:inline-block hover:underline"
            >
              Experience
            </Link>
            <Link
              href="/projects"
              className="block md:inline-block hover:underline"
            >
              Projects
            </Link>
            <Link
              href="/publications"
              className="block md:inline-block hover:underline"
            >
              Publications
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
