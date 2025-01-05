import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import TechStack from "./components/TechStack";
import { Poppins } from 'next/font/google';
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Publications from "./components/Publications";

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
        <About />
        <TechStack />
        <Experience /> 
        <Projects />
        <Publications />
       
      </body>
    </html>
  );
}
