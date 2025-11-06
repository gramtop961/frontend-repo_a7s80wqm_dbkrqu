import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import SectionBoundary from './components/SectionBoundary';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900" style={{ fontFamily: 'Geist, Inter, Manrope, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif' }}>
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-slate-200">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#" className="text-lg font-extrabold tracking-tight">Varshith Poojary</a>
          <nav className="hidden gap-6 text-sm text-slate-700 md:flex">
            <a href="#about" className="hover:text-slate-900">About</a>
            <a href="#skills" className="hover:text-slate-900">Skills</a>
            <a href="#projects" className="hover:text-slate-900">Projects</a>
          </nav>
        </div>
      </header>

      <main>
        <SectionBoundary name="Hero"><Hero /></SectionBoundary>
        <SectionBoundary name="About"><About /></SectionBoundary>
        <SectionBoundary name="Skills"><Skills /></SectionBoundary>
        <SectionBoundary name="Projects"><Projects /></SectionBoundary>
      </main>
    </div>
  );
}

export default App;
