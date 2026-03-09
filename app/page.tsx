// app/page.tsx

import Footer from "@/components/Footer";
import Navbar from "@/components/NavBar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyIshpath from "@/components/WhyIshpath";
import CTA from "@/components/CTS";
import HowWeWork from "@/components/HowWeWork";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-50">
      <Navbar />

      <div className="flex-1">
        <Hero />
        <Services />
        <WhyIshpath />
        <HowWeWork />
        <CTA />
      </div>

      <Footer />
    </div>
  );
}
