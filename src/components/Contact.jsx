import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h3 className="text-2xl font-bold text-slate-900 md:text-3xl">Contact</h3>
        <div className="mt-8 grid gap-10 md:grid-cols-2">
          <motion.form
            className="space-y-4 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200"
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
              <label className="mb-1 block text-sm font-medium text-slate-700">Name</label>
              <input className="w-full rounded-md border border-slate-300 px-3 py-2 outline-none transition focus:border-slate-400" required />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium text-slate-700">Email</label>
              <input type="email" className="w-full rounded-md border border-slate-300 px-3 py-2 outline-none transition focus:border-slate-400" required />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium text-slate-700">Message</label>
              <textarea rows="5" className="w-full rounded-md border border-slate-300 px-3 py-2 outline-none transition focus:border-slate-400" required />
            </div>
            <button type="submit" className="rounded-md bg-slate-900 px-5 py-2.5 text-white shadow-md transition hover:bg-slate-800">
              Send Message
            </button>
          </motion.form>

          <motion.div
            className="space-y-4 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
          >
            <p className="text-sm text-slate-600">Reach me directly</p>
            <div className="space-y-2 text-slate-800">
              <p>📧 <a className="text-slate-900 underline-offset-2 hover:underline" href="mailto:poojaryvarshith98@gmail.com">poojaryvarshith98@gmail.com</a></p>
              <p>📍 Udupi, Karnataka</p>
              <p>🔗 <a className="text-slate-900 underline-offset-2 hover:underline" href="https://linkedin.com/in/varshith-v-poojary" target="_blank" rel="noreferrer">linkedin.com/in/varshith-v-poojary</a></p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
