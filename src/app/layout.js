import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import TechStack from "./components/TechStack";
import { Poppins } from 'next/font/google';
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Publications from "./components/Publications";
import Experience2 from "./components/Experience2";
import Experience3 from "./components/Experience3";
import Projects2 from "./components/Projects2";
import { Analytics } from "@vercel/analytics/react"

// Load the Poppins font
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'], // Add the font weights you need
});

export const metadata = {
  title: "Portfolio",
  description: "My Portfolio",
};

export default function RootLayout({ }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${poppins.className} scroll-smooth`}
      >
         <Navbar />
        <div id="about" className="bg-blue-900 text-white">
          <About />
        </div>
        <div id="about" className="bg-blue-900 text-white">
          <TechStack />
        </div>
        <div id="experience" className="bg-white text-black">
          <Experience />
          <Experience2 />
          <Experience3 />
        </div>
        <div id="projects" className="bg-white text-black">
          <Projects />
          <Projects2 />
        </div>
        <div id="publications" className="bg-blue-900 text-white">
          <Publications />
        </div>
      </body>
    </html>
  );
}
