// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

function ConstructionBanner() {
  return (
    <div className="w-full bg-yellow-300 text-slate-900 text-sm py-2 text-center font-medium shadow-sm">
      🚧 This site is under construction — Features are being updated.
    </div>
  );
}

export const metadata: Metadata = {
  icons: {
    icon: "/ishpath-logo.svg",
    shortcut: "/ishpath-logo.svg",
    apple: "/ishpath-logo.svg",
  },
  title: "ISHPATH",
  description:
    "Ishpath Provides Elelctrical Engineering Service alongside building high-performance, secure AI driven Software Application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className="bg-white text-slate-800 antialiased transition-colors duration-300 ease-out dark:bg-slate-950 dark:text-slate-50">
        <ThemeProvider>
          
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
