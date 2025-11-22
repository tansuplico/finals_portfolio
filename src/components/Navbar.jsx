"use client";

import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setOpen(false);
    }
  };

  const navItems = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Projects", id: "projects" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50  dark:bg-[rgba(6,7,23,0.95)] bg-white/80 backdrop-blur-xl border-b border-slate-800/50 dark:border-slate-700/50">
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="h-20 flex items-center justify-between">
          <button
            onClick={() => scrollToSection("home")}
            className="text-xl font-bold text-white dark:text-white hover:text-[#8000FF] transition"
          >
            Tristan.dev
          </button>

          <nav className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-slate-300 dark:text-slate-300 hover:text-white dark:hover:text-white hover:scale-105 transition-all duration-300 font-medium"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden p-2 text-white"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {open ? (
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
          </div>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-slate-700/50 bg-[rgba(10,12,20,0.98)] dark:bg-[rgba(250,250,250,0.98)] backdrop-blur-xl">
          <div className="px-6 py-8 space-y-5">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left text-lg font-medium text-white dark:text-slate-800 hover:text-[#8000FF] transition"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
