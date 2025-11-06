import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { Download, ArrowRight, Linkedin } from 'lucide-react';

export default function Hero() {
  const containerRef = useRef(null);
  const [parallax, setParallax] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;
      const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
      const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
      setParallax({ x, y });
    };
    const el = containerRef.current;
    el?.addEventListener('mousemove', handleMouseMove);
    return () => el?.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-[90vh] w-full overflow-hidden bg-white text-gray-900">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/60 to-white/90 dark:from-slate-900/70 dark:via-slate-900/60 dark:to-slate-900/90" />
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-10 px-6 py-20 md:flex-row md:py-28">
        <motion.div
          className="flex-1"
          style={{
            transform: `translate3d(${parallax.x * -10}px, ${parallax.y * -10}px, 0)`
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-3 text-sm font-medium tracking-wide text-slate-600">Professional Portfolio</p>
          <h1 className="text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
            Hi, I’m Varshith Poojary <span className="inline-block">👋</span>
          </h1>
          <h2 className="mt-3 text-xl font-semibold text-slate-700 md:text-2xl">
            Application Support Engineer | Software Tester
          </h2>
          <p className="mt-4 max-w-xl text-slate-600">
            I specialize in functional test planning, troubleshooting, and software reliability.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center justify-center rounded-md bg-slate-900 px-5 py-3 text-white shadow-lg shadow-slate-900/20 transition hover:bg-slate-800"
            >
              View Projects
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="/Varshith-Poojary-Resume.pdf"
              className="inline-flex items-center justify-center rounded-md border border-slate-300 bg-white px-5 py-3 text-slate-800 shadow-sm transition hover:border-slate-400 hover:shadow"
              download
            >
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </a>
            <a
              href="https://linkedin.com/in/varshith-v-poojary"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-md border border-slate-300 bg-white px-4 py-3 text-slate-800 shadow-sm transition hover:border-slate-400 hover:shadow"
            >
              <Linkedin className="mr-2 h-4 w-4" />
              LinkedIn
            </a>
          </div>
        </motion.div>

        <motion.div
          className="flex-1"
          style={{
            transform: `translate3d(${parallax.x * 10}px, ${parallax.y * 10}px, 0)`
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="mx-auto max-w-sm rounded-2xl bg-white/80 p-3 shadow-xl backdrop-blur-md ring-1 ring-slate-200">
            <div className="overflow-hidden rounded-xl">
              <img
                src="https://i.pravatar.cc/600?img=5"
                alt="Varshith Poojary"
                className="h-72 w-full object-cover sm:h-96"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
