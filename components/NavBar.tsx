'use client';
import Link from "next/link";
import { useState } from "react";

export function NavBar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="border-b border-gray-100 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <img src="/logo.svg" alt="Logo" className="h-8 w-8" />
          <span>{process.env.NEXT_PUBLIC_SITE_NAME || "Company"}</span>
        </Link>
        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle Menu">☰</button>
        <nav className={`${open ? 'block' : 'hidden'} w-full md:block md:w-auto`}>
          <ul className="mt-4 flex flex-col gap-4 md:mt-0 md:flex-row md:items-center">
            <li><Link className="hover:underline" href="/about">About</Link></li>
            <li><Link className="hover:underline" href="/services">Services</Link></li>
            <li><Link className="hover:underline" href="/contact">Contact</Link></li>
            <li><Link className="btn btn-primary" href="/contact">Get a Quote</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
