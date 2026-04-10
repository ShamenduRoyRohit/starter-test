// app/page.tsx

import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import WhyIshpath from "@/components/WhyIshpath";
import CTA from "@/components/CTS";
import HowWeWork from "@/components/HowWeWork";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-50">
      <div className="flex-1">
        <Hero />
        <WhyIshpath />
        <HowWeWork />
        <CTA />
      </div>

      <Footer />
    </div>
  );
}
