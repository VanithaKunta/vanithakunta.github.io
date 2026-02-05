import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Publications from "./components/Publications";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useTheme } from "./components/useTheme";

export default function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="app">
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <Navbar theme={theme} onToggleTheme={toggleTheme} />

      <main id="main" className="main">
        <Hero />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Publications />
        <Certifications />
        <Contact />
      </main>

      <Footer theme={theme} onToggleTheme={toggleTheme} />
    </div>
  );
}
