// components/Navbar.tsx
"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";

const navItems = [
  {
    label: "Services",
    href: "/services",
    submenu: [
      { label: "Asset Management", href: "/services/project-management/asset" },
      { label: "Electrical Engineering", href: "/services/electrical-engineering" },
      { label: "PMO Services", href: "/services/project-management/pmo" },
      { label: "Software Engineering", href: "/services/software-engineering" },
      { label: "Systems Integration", href: "/services/systems-integration" },
    ].sort((a, b) => a.label.localeCompare(b.label)),
  },
  { label: "Why Ishpath", href: "#why-ishpath" },
  { label: "Approach ", href: "#howwework"},
  { label: "Contact", href: "#contact" },
];

const SunIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="5" />
    <path d="M12 1v2" />
    <path d="M12 21v2" />
    <path d="M4.22 4.22l1.42 1.42" />
    <path d="M18.36 18.36l1.42 1.42" />
    <path d="M1 12h2" />
    <path d="M21 12h2" />
    <path d="M4.22 19.78l1.42-1.42" />
    <path d="M18.36 5.64l1.42-1.42" />
  </svg>
);

const MoonIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 12.79A9 9 0 0111.21 3 7 7 0 0021 12.79z" />
  </svg>
);

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownTimeout = useRef<NodeJS.Timeout | null>(null);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () =>
    setTheme(theme === "dark" ? "light" : "dark");

  // Dropdown handlers
  const handleDropdownEnter = () => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setDropdownOpen(true);
  };
  const handleDropdownLeave = () => {
    dropdownTimeout.current = setTimeout(() => setDropdownOpen(false), 120);
  };

  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/80 backdrop-blur dark:border-slate-800 dark:bg-slate-950/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:py-4">
        <Link href="/" className="flex items-center gap-2">
        <Image
              src="/ishpath-logo.svg"  
              alt="ISHPATH Logo"
              width={32}
              height={32}
              className="rounded-md"
              priority
            />

          <span className="text-lg font-semibold tracking-tight text-slate-900 dark:text-slate-50">
            ISHPATH
          </span>
        </Link>

        {/* Mobile right side: theme toggle + menu button */}
        <div className="flex items-center gap-3 md:hidden">
          {/* Theme toggle mobile */}
          <button
            onClick={toggleTheme}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-700 shadow-sm hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800 transition-colors"
            aria-label="Toggle theme"
          >
            <span
              className={`inline-flex items-center justify-center transition-all duration-300 ${
                mounted && theme === "dark"
                  ? "opacity-100 scale-100 rotate-0"
                  : "opacity-90 scale-95 rotate-6"
              }`}
            >
              {mounted && theme === "dark" ? <SunIcon /> : <MoonIcon />}
            </span>
          </button>

          {/* Mobile menu button */}
          <button
            className="inline-flex items-center justify-center rounded-md border border-slate-300 px-2 py-1 text-sm text-slate-700 dark:border-slate-700 dark:text-slate-100"
            onClick={() => setOpen((v) => !v)}
          >
            ☰
          </button>
        </div>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 text-sm text-slate-700 dark:text-slate-200 md:flex">
          {navItems.map((item) => (
            item.submenu ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={handleDropdownEnter}
                onMouseLeave={handleDropdownLeave}
                onFocus={handleDropdownEnter}
                onBlur={handleDropdownLeave}
                tabIndex={0}
              >
                <button
                  type="button"
                  className="hover:text-emerald-600 dark:hover:text-emerald-400 flex items-center gap-1 focus:outline-none bg-transparent border-0 p-0"
                  aria-haspopup="true"
                  aria-expanded={dropdownOpen}
                  tabIndex={0}
                >
                  {item.label}
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                </button>
                <div
                  className={`absolute left-0 top-full z-50 mt-2 min-w-[220px] rounded-md bg-white p-2 shadow-lg ring-1 ring-black ring-opacity-5 transition-opacity duration-150 dark:bg-slate-800 ${dropdownOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
                >
                  <div className="flex flex-col gap-1">
                    {item.submenu.map((s) => (
                      <a
                        key={s.href}
                        href={s.href}
                        className="rounded px-3 py-2 text-sm text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-700"
                        tabIndex={dropdownOpen ? 0 : -1}
                      >
                        {s.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <a
                key={item.href}
                href={item.href}
                className="hover:text-emerald-600 dark:hover:text-emerald-400"
              >
                {item.label}
              </a>
            )
          ))}

          {/* Theme toggle desktop */}
          <button
            onClick={toggleTheme}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-700 shadow-sm hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800 transition-colors"
            aria-label="Toggle theme"
          >
            <span
              className={`inline-flex items-center justify-center transition-all duration-300 ${
                mounted && theme === "dark"
                  ? "opacity-100 scale-100 rotate-0"
                  : "opacity-90 scale-95 rotate-6"
              }`}
            >
              {mounted && theme === "dark" ? <SunIcon /> : <MoonIcon />}
            </span>
          </button>
          <a
            href="#contact"
            className="rounded-full bg-brand-orange-500 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-orange-600"
          >
            Get a Quote
          </a>
        </nav>
      </div>

      {open && (
        <div className="border-t border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950 md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-3 text-sm text-slate-700 dark:text-slate-200">
            {navItems.map((item) => (
              item.submenu ? (
                <div key={item.label}>
                  <a
                    href={item.href}
                    className="py-1 hover:text-emerald-600 dark:hover:text-emerald-400"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </a>
                  <div className="ml-3 mt-1 flex flex-col gap-1">
                    {item.submenu.map((s) => (
                      <a
                        key={s.href}
                        href={s.href}
                        className="py-1 text-sm text-slate-600 hover:text-emerald-600 dark:text-slate-300 dark:hover:text-emerald-400"
                        onClick={() => setOpen(false)}
                      >
                        {s.label}
                      </a>
                    ))}
                  </div>
                </div>
              ) : (
                <a
                  key={item.href}
                  href={item.href}
                  className="py-1 hover:text-emerald-600 dark:hover:text-emerald-400"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              )
            ))}
            <a
              href="#contact"
              className="mt-2 rounded-full bg-emerald-600 px-4 py-2 text-center text-sm font-semibold text-white hover:bg-emerald-500"
              onClick={() => setOpen(false)}
            >
              Get a Quote
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
