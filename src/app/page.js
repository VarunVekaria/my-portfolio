import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AgenticStack from "./components/AgenticStack";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Publications from "./components/Publications";
import Achievements from "./components/Achievements";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AgenticStack />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Publications />
        <Achievements />
      </main>
      <Footer />
    </>
  );
}
