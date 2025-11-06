import { motion } from 'framer-motion';

const certs = [
  { org: 'Deloitte', title: 'Cyber Simulation', date: 'Completed' },
  { org: 'Accenture', title: 'Data Analytics', date: 'Completed' },
  { org: 'Infosys', title: 'Python Programming', date: 'Completed' },
  { org: 'Microsoft', title: 'Copilot Productivity', date: 'Completed' },
  { org: 'TCS iON', title: 'Career Edge', date: 'Completed' },
  { org: 'PMI', title: 'Project Management Basics', date: 'Completed' },
];

export default function Certifications() {
  return (
    <section id="certifications" className="bg-[#0b1020] py-20 text-slate-100">
      <div className="mx-auto max-w-7xl px-6">
        <h3 className="text-2xl font-bold text-white md:text-3xl">Certifications</h3>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certs.map((c, idx) => (
            <motion.div
              key={`${c.org}-${c.title}`}
              className="rounded-2xl bg-white/5 p-6 shadow-sm ring-1 ring-white/10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
            >
              <p className="text-sm font-medium text-emerald-300/90">{c.org}</p>
              <p className="mt-1 text-lg font-semibold text-white">{c.title}</p>
              <p className="mt-2 text-xs text-slate-400">{c.date}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
