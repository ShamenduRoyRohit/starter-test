import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { NavBar } from "@/components/NavBar";

export const metadata: Metadata = {
  title: process.env.NEXT_PUBLIC_SITE_NAME || "Company",
  description: "Modern, fast company website starter on Next.js + Vercel",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://example.com"),
  openGraph: {
    title: process.env.NEXT_PUBLIC_SITE_NAME || "Company",
    description: "Modern, fast company website starter on Next.js + Vercel",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://example.com",
    siteName: process.env.NEXT_PUBLIC_SITE_NAME || "Company",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-gray-900 antialiased">
        <NavBar />
        <main className="mx-auto max-w-6xl px-4 py-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
