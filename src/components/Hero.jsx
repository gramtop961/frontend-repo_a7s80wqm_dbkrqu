import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { Download, ArrowRight, Linkedin } from 'lucide-react';

export default function Hero() {
  const containerRef = useRef(null);
  const [parallax, setParallax] = useState({ x: 0, y: 0 });
  const [spot, setSpot] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const onMove = (e) => {
      const rect = el.getBoundingClientRect();
      const relX = e.clientX - rect.left;
      const relY = e.clientY - rect.top;
      setSpot({ x: relX, y: relY });

      const px = (relX - rect.width / 2) / rect.width;
      const py = (relY - rect.height / 2) / rect.height;
      setParallax({ x: px, y: py });
    };

    el.addEventListener('mousemove', onMove);
    return () => el.removeEventListener('mousemove', onMove);
  }, []);

  // Magnetic button helper (safe, no external deps)
  const useMagnetic = () => {
    const ref = useRef(null);
    const [style, setStyle] = useState({ transform: 'translate3d(0,0,0)' });
    const onMouseMove = (e) => {
      const rect = ref.current?.getBoundingClientRect();
      if (!rect) return;
      const dx = e.clientX - (rect.left + rect.width / 2);
      const dy = e.clientY - (rect.top + rect.height / 2);
      setStyle({ transform: `translate3d(${dx * 0.08}px, ${dy * 0.08}px, 0)` });
    };
    const onMouseLeave = () => setStyle({ transform: 'translate3d(0,0,0)' });
    return { ref, style, onMouseMove, onMouseLeave };
  };

  const primaryMag = useMagnetic();
  const secondaryMag = useMagnetic();
  const tertiaryMag = useMagnetic();

  return (
    <section
      ref={containerRef}
      className="relative min-h-[92vh] w-full overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50 text-gray-900 font-sans"
    >
      {/* 3D Spline background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/fA4LwfT7IUUelEGO/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* Gradient veil to improve text contrast; doesn't block interactions */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/40 to-white/70" />
      </div>

      {/* Cursor spotlight following mouse (subtle) */}
      <div
        className="pointer-events-none absolute inset-0 transition-[background] duration-100"
        style={{
          background: `radial-gradient(500px at ${spot.x}px ${spot.y}px, rgba(124,58,237,0.12), transparent 60%)`,
        }}
      />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-12 px-6 py-24 md:flex-row md:gap-10 md:py-28">
        {/* Left content */}
        <motion.div
          className="flex-1"
          style={{ transform: `translate3d(${parallax.x * -12}px, ${parallax.y * -12}px, 0)` }}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.p className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-xs font-medium tracking-wide text-slate-700 ring-1 ring-slate-200 backdrop-blur">
            <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
            Application Support • Software Testing
          </motion.p>

          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-slate-900 md:text-6xl">
            Varshith Poojary
          </h1>
          <h2 className="mt-2 text-lg font-semibold text-slate-700 md:text-2xl">
            Reliable, proactive support for mission‑critical apps
          </h2>
          <p className="mt-4 max-w-xl text-base text-slate-600 md:text-lg">
            I keep systems healthy, users happy, and releases smooth — from incident response and root‑cause analysis to test planning and automation.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <motion.a
              href="#projects"
              ref={primaryMag.ref}
              onMouseMove={primaryMag.onMouseMove}
              onMouseLeave={primaryMag.onMouseLeave}
              style={primaryMag.style}
              whileTap={{ scale: 0.98 }}
              className="group relative inline-flex items-center justify-center rounded-xl bg-slate-900 px-6 py-3 text-white shadow-xl shadow-slate-900/20 transition [transform-style:preserve-3d] hover:bg-slate-800"
            >
              <span className="mr-2">Explore Projects</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              <span className="pointer-events-none absolute -inset-px -z-[1] rounded-xl bg-gradient-to-r from-violet-600/30 via-fuchsia-500/20 to-emerald-500/20 blur-xl" />
            </motion.a>

            <motion.a
              href="/Varshith-Poojary-Resume.pdf"
              download
              ref={secondaryMag.ref}
              onMouseMove={secondaryMag.onMouseMove}
              onMouseLeave={secondaryMag.onMouseLeave}
              style={secondaryMag.style}
              whileTap={{ scale: 0.98 }}
              className="relative inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-6 py-3 text-slate-800 shadow-sm transition hover:border-slate-400 hover:shadow"
            >
              <Download className="mr-2 h-4 w-4" /> Download Resume
            </motion.a>

            <motion.a
              href="https://linkedin.com/in/varshith-v-poojary"
              target="_blank"
              rel="noreferrer"
              ref={tertiaryMag.ref}
              onMouseMove={tertiaryMag.onMouseMove}
              onMouseLeave={tertiaryMag.onMouseLeave}
              style={tertiaryMag.style}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-5 py-3 text-slate-800 shadow-sm transition hover:border-slate-400 hover:shadow"
            >
              <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
            </motion.a>
          </div>
        </motion.div>

        {/* Right visual card with a subtle 3D tilt */}
        <motion.div
          className="flex-1"
          style={{ transform: `translate3d(${parallax.x * 12}px, ${parallax.y * 12}px, 0)` }}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08 }}
        >
          <motion.div
            className="mx-auto max-w-sm rounded-2xl bg-white/80 p-3 shadow-xl backdrop-blur-md ring-1 ring-slate-200"
            style={{ transformStyle: 'preserve-3d' }}
            animate={{ rotateX: parallax.y * -6, rotateY: parallax.x * 6 }}
            transition={{ type: 'spring', stiffness: 100, damping: 14 }}
          >
            <div className="overflow-hidden rounded-xl">
              <img
                src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=1200&auto=format&fit=crop"
                alt="Varshith at work — application support desk"
                className="h-72 w-full object-cover sm:h-96"
              />
            </div>
            <div className="mt-3 flex items-center justify-between px-1 text-xs text-slate-600">
              <span>On‑call • SRE mindset</span>
              <span>ITIL • RCA • QA</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
