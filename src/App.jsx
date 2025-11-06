import { useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SectionBoundary from './components/SectionBoundary';

function App() {
  useEffect(() => {
    const prev = document.documentElement.style.scrollBehavior;
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = prev;
    };
  }, []);

  return (
    <div
      className="min-h-screen bg-[#0b1020] text-slate-100"
      style={{ fontFamily: 'Geist, Inter, Manrope, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif' }}
    >
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0b1020]/70 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#" className="text-lg font-extrabold tracking-tight text-white">Varshith Poojary</a>
          <nav className="hidden gap-6 text-sm md:flex">
            <a href="#about" className="text-slate-300 transition hover:text-white">About</a>
            <a href="#skills" className="text-slate-300 transition hover:text-white">Skills</a>
            <a href="#projects" className="text-slate-300 transition hover:text-white">Projects</a>
            <a href="#certifications" className="text-slate-300 transition hover:text-white">Certifications</a>
            <a href="#contact" className="text-slate-300 transition hover:text-white">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <SectionBoundary name="Hero"><Hero /></SectionBoundary>
        <SectionBoundary name="About"><About /></SectionBoundary>
        <SectionBoundary name="Skills"><Skills /></SectionBoundary>
        <SectionBoundary name="Projects"><Projects /></SectionBoundary>
        <SectionBoundary name="Certifications"><Certifications /></SectionBoundary>
        <SectionBoundary name="Contact"><Contact /></SectionBoundary>
      </main>

      <Footer />
    </div>
  );
}

export default App;
