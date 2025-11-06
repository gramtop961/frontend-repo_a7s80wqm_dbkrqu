import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-sm text-slate-600 md:flex-row">
        <p>© {new Date().getFullYear()} Varshith Poojary. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a href="mailto:poojaryvarshith98@gmail.com" className="hover:text-slate-900" aria-label="Email">
            <Mail className="h-5 w-5" />
          </a>
          <a href="https://linkedin.com/in/varshith-v-poojary" target="_blank" rel="noreferrer" className="hover:text-slate-900" aria-label="LinkedIn">
            <Linkedin className="h-5 w-5" />
          </a>
          <a href="#" className="hover:text-slate-900" aria-label="GitHub">
            <Github className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
