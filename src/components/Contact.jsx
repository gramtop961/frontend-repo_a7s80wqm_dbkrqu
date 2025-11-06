import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="bg-[#0b1020] py-20 text-slate-100">
      <div className="mx-auto max-w-7xl px-6">
        <h3 className="text-2xl font-bold text-white md:text-3xl">Contact</h3>
        <div className="mt-8 grid gap-10 md:grid-cols-2">
          <motion.form
            className="space-y-4 rounded-2xl bg-white/5 p-6 shadow-sm ring-1 ring-white/10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            onSubmit={(e) => {
              e.preventDefault();
              alert('Thanks for your message!');
            }}
          >
            <div>
              <label className="mb-1 block text-sm font-medium text-slate-200">Name</label>
              <input className="w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-slate-100 outline-none transition placeholder:text-slate-400 focus:border-emerald-300/60" required />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium text-slate-200">Email</label>
              <input type="email" className="w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-slate-100 outline-none transition placeholder:text-slate-400 focus:border-emerald-300/60" required />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium text-slate-200">Message</label>
              <textarea rows="5" className="w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-slate-100 outline-none transition placeholder:text-slate-400 focus:border-emerald-300/60" required />
            </div>
            <button type="submit" className="rounded-md bg-emerald-500 px-5 py-2.5 text-emerald-950 shadow-md transition hover:bg-emerald-400">
              Send Message
            </button>
          </motion.form>

          <motion.div
            className="space-y-4 rounded-2xl bg-white/5 p-6 shadow-sm ring-1 ring-white/10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
          >
            <p className="text-sm text-slate-300">Reach me directly</p>
            <div className="space-y-2 text-slate-200">
              <p>📧 <a className="text-emerald-300 underline-offset-2 hover:underline" href="mailto:poojaryvarshith98@gmail.com">poojaryvarshith98@gmail.com</a></p>
              <p>📍 Udupi, Karnataka</p>
              <p>🔗 <a className="text-emerald-300 underline-offset-2 hover:underline" href="https://linkedin.com/in/varshith-v-poojary" target="_blank" rel="noreferrer">linkedin.com/in/varshith-v-poojary</a></p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
