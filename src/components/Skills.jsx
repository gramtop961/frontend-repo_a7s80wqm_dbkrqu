import { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

const technical = [
  { name: 'Functional Test Planning', level: 90 },
  { name: 'SQL', level: 80 },
  { name: 'Selenium', level: 75 },
  { name: 'SOAP UI', level: 70 },
  { name: 'JIRA', level: 80 },
  { name: 'Manual Testing', level: 85 },
  { name: 'SDLC / STLC', level: 80 },
];

const professional = [
  { name: 'Problem Solving', level: 90 },
  { name: 'Application Support', level: 88 },
  { name: 'Root Cause Analysis', level: 85 },
  { name: 'Communication', level: 86 },
  { name: 'Team Collaboration', level: 88 },
];

function Bar({ label, value }) {
  const ref = useRef(null);
  const controls = useAnimation();
  const inView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (inView) controls.start({ width: `${value}%` });
  }, [inView, value, controls]);

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-slate-200">{label}</span>
        <span className="text-xs text-slate-400">{value}%</span>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-white/10">
        <motion.div
          ref={ref}
          initial={{ width: 0 }}
          animate={controls}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="h-full rounded-full bg-emerald-400"
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="bg-[#0b1020] py-20 text-slate-100">
      <div className="mx-auto max-w-7xl px-6">
        <h3 className="text-2xl font-bold text-white md:text-3xl">Skills</h3>
        <div className="mt-8 grid gap-10 md:grid-cols-2">
          <div>
            <h4 className="mb-4 text-lg font-semibold text-emerald-200">Technical Skills</h4>
            <div className="space-y-4">
              {technical.map((s) => (
                <Bar key={s.name} label={s.name} value={s.level} />
              ))}
            </div>
          </div>
          <div>
            <h4 className="mb-4 text-lg font-semibold text-emerald-200">Professional Skills</h4>
            <div className="space-y-4">
              {professional.map((s) => (
                <Bar key={s.name} label={s.name} value={s.level} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
