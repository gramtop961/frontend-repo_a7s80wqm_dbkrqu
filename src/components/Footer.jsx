import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0b1020] py-8 text-slate-300">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-sm md:flex-row">
        <p>© {new Date().getFullYear()} Varshith Poojary. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a href="mailto:poojaryvarshith98@gmail.com" className="hover:text-white" aria-label="Email">
            <Mail className="h-5 w-5" />
          </a>
          <a href="https://linkedin.com/in/varshith-v-poojary" target="_blank" rel="noreferrer" className="hover:text-white" aria-label="LinkedIn">
            <Linkedin className="h-5 w-5" />
          </a>
          <a href="#" className="hover:text-white" aria-label="GitHub">
            <Github className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
