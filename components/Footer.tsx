import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-20 border-t border-gray-100 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-gray-600">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} {process.env.NEXT_PUBLIC_SITE_NAME || "Company"}. All rights reserved.</p>
          <div className="flex gap-4">
            <Link className="hover:underline" href="/privacy">Privacy</Link>
            <Link className="hover:underline" href="/terms">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
