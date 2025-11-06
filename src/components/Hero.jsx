import { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { Download, ArrowRight, Linkedin } from 'lucide-react';

export default function Hero() {
  const containerRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();

  const [parallax, setParallax] = useState({ x: 0, y: 0 });
  const [spot, setSpot] = useState({ x: 0, y: 0 });
  const rafRef = useRef(0);
  const targetRef = useRef({ x: 0, y: 0, px: 0, py: 0 });

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const onMove = (e) => {
      const rect = el.getBoundingClientRect();
      const relX = e.clientX - rect.left;
      const relY = e.clientY - rect.top;
      const px = (relX - rect.width / 2) / rect.width;
      const py = (relY - rect.height / 2) / rect.height;
      targetRef.current = { x: relX, y: relY, px, py };
      if (!rafRef.current) {
        rafRef.current = requestAnimationFrame(() => {
          const { x, y, px: tx, py: ty } = targetRef.current;
          setSpot({ x, y });
          setParallax({ x: tx, y: ty });
          rafRef.current = 0;
        });
      }
    };

    el.addEventListener('mousemove', onMove, { passive: true });
    return () => {
      el.removeEventListener('mousemove', onMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  // Magnetic button helper
  const useMagnetic = () => {
    const ref = useRef(null);
    const [style, setStyle] = useState({ transform: 'translate3d(0,0,0)' });
    const onMouseMove = (e) => {
      if (prefersReducedMotion) return;
      const rect = ref.current?.getBoundingClientRect();
      if (!rect) return;
      const dx = e.clientX - (rect.left + rect.width / 2);
      const dy = e.clientY - (rect.top + rect.height / 2);
      setStyle({ transform: `translate3d(${dx * 0.06}px, ${dy * 0.06}px, 0)` });
    };
    const onMouseLeave = () => setStyle({ transform: 'translate3d(0,0,0)' });
    return { ref, style, onMouseMove, onMouseLeave };
  };

  const primaryMag = useMagnetic();
  const secondaryMag = useMagnetic();
  const tertiaryMag = useMagnetic();

  const parallaxStyle = prefersReducedMotion
    ? undefined
    : { transform: `translate3d(${parallax.x * -12}px, ${parallax.y * -12}px, 0)` };
  const tiltAnimate = prefersReducedMotion
    ? undefined
    : { rotateX: parallax.y * -6, rotateY: parallax.x * 6 };

  return (
    <section
      ref={containerRef}
      className="relative min-h-[92vh] w-full overflow-hidden bg-[#0b1020] text-slate-100 font-sans"
    >
      {/* 3D Spline background (dark, cursor‑interactive firefly) */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/iO74mq3KeYTXVmpB/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* Subtle vignette and star glow overlay that doesn't block interaction */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/50" />
      </div>

      {/* Cursor glow spotlight in green hues (disabled for reduced motion) */}
      {!prefersReducedMotion && (
        <div
          className="pointer-events-none absolute inset-0 transition-[background] duration-100"
          style={{
            background: `radial-gradient(360px at ${spot.x}px ${spot.y}px, rgba(16,185,129,0.15), transparent 60%)`,
          }}
        />
      )}

      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-10 px-6 py-20 md:flex-row md:gap-10 md:py-24">
        {/* Left content */}
        <motion.div
          className="flex-1"
          style={parallaxStyle}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.p className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium tracking-wide text-emerald-300 ring-1 ring-emerald-500/30 backdrop-blur">
            <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-emerald-400 shadow-[0_0_16px_2px_rgba(16,185,129,0.65)]" />
            Application Support • Software Testing
          </motion.p>

          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white md:text-6xl">
            Varshith Poojary
          </h1>
          <h2 className="mt-2 text-lg font-semibold text-emerald-200 md:text-2xl">
            Reliable, proactive support for mission‑critical apps
          </h2>
          <p className="mt-4 max-w-xl text-base text-slate-300 md:text-lg">
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
              className="group relative inline-flex items-center justify-center rounded-xl bg-emerald-500 px-6 py-3 text-emerald-950 shadow-xl shadow-emerald-500/20 transition [transform-style:preserve-3d] hover:bg-emerald-400"
            >
              <span className="mr-2">Explore Projects</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              <span className="pointer-events-none absolute -inset-px -z-[1] rounded-xl bg-emerald-400/20 blur-xl" />
            </motion.a>

            <motion.a
              href="/Varshith-Poojary-Resume.pdf"
              download
              ref={secondaryMag.ref}
              onMouseMove={secondaryMag.onMouseMove}
              onMouseLeave={secondaryMag.onMouseLeave}
              style={secondaryMag.style}
              whileTap={{ scale: 0.98 }}
              className="relative inline-flex items-center justify-center rounded-xl border border-emerald-400/40 bg-white/5 px-6 py-3 text-slate-100 shadow-sm backdrop-blur transition hover:border-emerald-300/60 hover:bg-white/10"
            >
              <Download className="mr-2 h-4 w-4 text-emerald-300" /> Download Resume
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
              className="inline-flex items-center justify-center rounded-xl border border-emerald-400/40 bg-white/5 px-5 py-3 text-slate-100 shadow-sm backdrop-blur transition hover:border-emerald-300/60 hover:bg-white/10"
            >
              <Linkedin className="mr-2 h-4 w-4 text-emerald-300" /> LinkedIn
            </motion.a>
          </div>
        </motion.div>

        {/* Right visual card with a subtle 3D tilt */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08 }}
        >
          <motion.div
            className="mx-auto max-w-sm rounded-2xl bg-white/5 p-3 shadow-xl backdrop-blur-md ring-1 ring-white/10"
            style={{ transformStyle: 'preserve-3d' }}
            animate={tiltAnimate}
            transition={{ type: 'spring', stiffness: 100, damping: 14 }}
          >
            <div className="overflow-hidden rounded-xl">
              <img
                src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=1200&auto=format&fit=crop"
                alt="Varshith at work — application support desk"
                className="h-72 w-full object-cover sm:h-96"
                loading="eager"
                decoding="async"
              />
            </div>
            <div className="mt-3 flex items-center justify-between px-1 text-xs text-emerald-200/80">
              <span>On‑call • SRE mindset</span>
              <span>ITIL • RCA • QA</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
