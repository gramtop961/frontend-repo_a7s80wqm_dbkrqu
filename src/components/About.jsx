import { motion } from 'framer-motion';
import { ShieldCheck, Cpu, GraduationCap, Zap } from 'lucide-react';

const items = [
  { icon: ShieldCheck, title: 'Deloitte', subtitle: 'Cyber Simulation' },
  { icon: Cpu, title: 'Accenture', subtitle: 'Data Analytics' },
  { icon: GraduationCap, title: 'Infosys', subtitle: 'Python Programming' },
  { icon: Zap, title: 'Microsoft Copilot', subtitle: 'Productivity' },
];

export default function About() {
  return (
    <section id="about" className="relative w-full bg-[#0b1020] py-20 text-slate-100">
      <div className="mx-auto max-w-7xl px-6">
        <motion.h3
          className="text-2xl font-bold text-white md:text-3xl"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h3>
        <motion.p
          className="mt-4 max-w-3xl text-slate-300"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05 }}
        >
          BCA Graduate from St. Mary’s College, Shirva – Mangalore University (CGPA 8.4/10). Passionate about
          software quality and system stability with hands-on experience in functional test planning, application
          support and troubleshooting.
        </motion.p>
        <p className="mt-3 text-sm text-slate-400">
          BCA Graduate | Functional Test Planning | Application Support | QA & Troubleshooting
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, title, subtitle }, idx) => (
            <motion.div
              key={title}
              className="group rounded-2xl bg-white/5 p-6 shadow-sm ring-1 ring-white/10 transition hover:ring-white/20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
            >
              <div className="flex items-center gap-4">
                <div className="rounded-xl bg-emerald-500/20 p-3 text-emerald-300 shadow-md ring-1 ring-emerald-400/30">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-semibold text-white">{title}</p>
                  <p className="text-sm text-slate-300">{subtitle}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
