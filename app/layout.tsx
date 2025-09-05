import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { NavBar } from "@/components/NavBar";

export const metadata: Metadata = {
  title: "ISHPATH",
  description: "Ishpath is a cutting-edge SCADA development agency specializing in creating high-performance, SEO-friendly, and accessible SCADA using the latest technologies.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://example.com"),
  openGraph: {
    title:  "ISHPATH - AI Driven SCADA Design",
    description: "Modern, fast company website starter on Next.js + Vercel",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://example.com",
    siteName: "ISHPATH",
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
