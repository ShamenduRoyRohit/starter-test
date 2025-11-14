// components/Footer.tsx
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-950 py-6">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 text-xs text-slate-400 md:flex-row md:items-center md:justify-between">
        <div>© {new Date().getFullYear()} ISHPATH. All rights reserved.</div>
        <div className="flex flex-wrap gap-4">
          <Link href="/privacy" className="hover:text-emerald-300">
            Privacy
          </Link>
          <Link href="/terms" className="hover:text-emerald-300">
            Terms
          </Link>
        </div>
      </div>
    </footer>
  );
}
