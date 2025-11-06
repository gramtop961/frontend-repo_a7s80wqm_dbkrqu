import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Chess App',
    desc: 'A cross-platform chess application with smooth gameplay built using React Native.',
    tech: ['React Native'],
    img: 'https://images.unsplash.com/photo-1541633836131-cb0b3fd36338?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Mahadevi Holidays',
    desc: 'Travel booking system enabling users to browse packages and book trips securely.',
    tech: ['PHP', 'MySQL'],
    img: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'SMC Food Fiesta',
    desc: 'Event management system for organizing and managing food festivals and stalls.',
    tech: ['Web App'],
    img: 'https://images.unsplash.com/photo-1511689660979-10d2b1aada49?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Portfolio Website',
    desc: 'A modern, responsive portfolio showcasing projects, skills, and certifications.',
    tech: ['React', 'Tailwind CSS', 'Framer Motion'],
    img: 'https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?q=80&w=1200&auto=format&fit=crop',
  },
];

function ProjectCard({ title, desc, tech, img, idx }) {
  return (
    <motion.div
      className="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200 transition hover:shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: idx * 0.05 }}
    >
      <div className="overflow-hidden">
        <img src={img} alt={title} className="h-52 w-full object-cover transition duration-300 group-hover:scale-105" />
      </div>
      <div className="space-y-3 p-5">
        <h4 className="text-lg font-semibold text-slate-900">{title}</h4>
        <p className="text-sm text-slate-600">{desc}</p>
        <div className="flex flex-wrap gap-2">
          {tech.map((t) => (
            <span key={t} className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-700">
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h3 className="text-2xl font-bold text-slate-900 md:text-3xl">Projects</h3>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((p, idx) => (
            <ProjectCard key={p.title} {...p} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
