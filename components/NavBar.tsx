'use client';
import Link from "next/link";
import { useState } from "react";

export function NavBar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="border-b border-gray-100 bg-blue-100">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="flex items-center gap-2 font-semibold text-blue-700">
          <img src="/ishpath-logo.svg" alt="Logo" className="h-12 w-12" />
          <span>ISHPATH</span>
        </Link>
        <button className="md:hidden text-blue-700" onClick={() => setOpen(!open)} aria-label="Toggle Menu">☰</button>
        <nav className={`${open ? 'block' : 'hidden'} w-full md:block md:w-auto`}>
          <ul className="mt-4 flex flex-col gap-4 md:mt-0 md:flex-row md:items-center">
            <li><Link className="hover:underline text-blue-700" href="/about">About</Link></li>
            <li><Link className="hover:underline text-blue-700" href="/services">Services</Link></li>
            <li><Link className="hover:underline text-blue-700" href="/contact">Contact</Link></li>
            <li>
              <Link className="btn btn-primary bg-blue-500 text-white hover:bg-blue-600" href="/contact">
                Get a Quote
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
