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
        <div id="experience" className="text-white py-12 md:py-16" style={{ backgroundColor: "#16171E" }}>
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-2xl font-semibold text-white mb-2">Experience</h2>
            <div
              className="h-0.5 w-16 mb-8 rounded-full"
              style={{ background: "linear-gradient(90deg, #8B5CF6 0%, #38BDF8 100%)" }}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Experience />
              <Experience4 />
              <Experience2 />
              <Experience3 />
            </div>
          </div>
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
