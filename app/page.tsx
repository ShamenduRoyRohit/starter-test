// app/page.tsx

import Footer from "@/components/Footer";
import Navbar from "@/components/NavBar";
import Hero from "@/components/Hero";
import Platforms from "@/components/Platforms";
import Solutions from "@/components/Solutions";
import Services from "@/components/Services";
import WhyIshpath from "@/components/WhyIshpath";
import CTA from "@/components/CTS";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-50">
      <Navbar />

      <div className="flex-1">
        <Hero />
        <Solutions />
        <Services />
        <WhyIshpath />
        <CTA />
      </div>

      <Footer />
    </div>
  );
}
