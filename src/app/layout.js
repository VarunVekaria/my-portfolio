import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import TechStack from "./components/TechStack";
import { Poppins } from 'next/font/google';
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Publications from "./components/Publications";
import Achievements from "./components/Achievements";
import Experience2 from "./components/Experience2";
import Experience3 from "./components/Experience3";
import Experience4 from "./components/Experience4";
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
        <div id="about" className="text-white" style={{ backgroundColor: "#1A1B26" }}>
          <About />
        </div>
        <div id="technologies" className="text-white" style={{ backgroundColor: "#1A1B26" }}>
          <TechStack />
        </div>
        <div id="experience" className="text-white" style={{ backgroundColor: "#16171E" }}>
          <Experience4 />
          <Experience />
          <Experience2 />
          <Experience3 />
        </div>
        <div id="projects" className="text-white" style={{ backgroundColor: "#1A1B26" }}>
          <Projects />
          <Projects2 />
        </div>
        <div id="publications" className="text-white" style={{ backgroundColor: "#1A1B26" }}>
          <Publications />
        </div>
        <div className="text-white" style={{ backgroundColor: "#1A1B26" }}>
          <Achievements />
        </div>
        <Analytics />
      </body>
    </html>
  );
}
