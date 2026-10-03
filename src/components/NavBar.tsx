import { useState } from 'react';
import { navLinks } from '../constants/info';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <header className="sticky top-0 left-0 z-50 w-full border-b border-slate-800 bg-slate-900/60 text-white backdrop-blur-xs">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#" className="group flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-linear-to-tr from-amber-400 to-rose-500 text-sm font-bold text-slate-950 shadow-md transition-transform group-hover:scale-105">
            <img src="public/round-icons-RCe3YDMELyk-unsplash.svg" alt="" />
          </div>
          <span className="bg-linear-to-r from-amber-200 via-rose-300 to-amber-400 bg-clip-text text-xl font-extrabold tracking-tight text-transparent">
            Cocktails
          </span>
        </a>
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className="text-sm font-medium tracking-wide text-slate-300 transition-colors hover:text-amber-400"
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>
        <button
          onClick={toggleMenu}
          type="button"
          aria-label="Toggle Navigation Menu"
          aria-expanded={isOpen}
          className="rounded-md p-2 text-slate-300 hover:bg-slate-800 hover:text-white focus:outline-none md:hidden"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>
      {isOpen && (
        <div className="space-y-3 border-b border-slate-800 bg-slate-900 px-4 pt-2 pb-6 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => setIsOpen(false)}
              className="block rounded-md px-3 py-2 text-base font-medium text-slate-300 transition-colors hover:bg-slate-800/50 hover:text-amber-400"
            >
              {link.title}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
