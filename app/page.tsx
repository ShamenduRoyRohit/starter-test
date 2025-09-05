import Link from "next/link";

export default function Home() {
  return (
    <section className="space-y-12 relative min-h-screen">
      <div
      className="fixed inset-0 -z-10 h-screen w-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/images/background.png')" }}
      aria-hidden="true"
      />
      <div className="text-center pt-24">
      <h1 className="text-4xl font-bold tracking-tight md:text-6xl text-white drop-shadow-lg">
        Build trust with AI driven Technology.
      </h1>
      <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-200 drop-shadow">
        Ishpath is a cutting-edge web development agency specializing in creating high-performance, SEO-friendly, and accessible SCADA using the latest technologies.
      </p>
      <div className="mt-8 flex items-center justify-center gap-4">
        <Link href="/services" className="btn btn-outline">
        Our Services
        </Link>
      </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
      {[
        { title: "AI Driven SCADA Design", desc: "Utilizing AI to enhance SCADA system design and functionality." },
        { title: "Data Driven Decision", desc: "Real time data analysis and self-recovery capabilities." },
        { title: "Unlimited Device Connectivity", desc: "Seamless integration with various devices and platforms." }
      ].map((f) => (
        <div key={f.title} className="card bg-white/80 backdrop-blur">
        <h3 className="text-xl font-semibold">{f.title}</h3>
        <p className="mt-2 text-gray-700">{f.desc}</p>
        </div>
      ))}
      </div>

      <div className="card container-narrow bg-white/90 backdrop-blur">
      <h2 className="text-2xl font-semibold">Why Ishpath</h2>
      <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-700">
        <li>Trusted by Industry Leader</li>
        <li>Practical Application of AI in SCEMA design </li>
        <li>Expertise in Modern Web Technologies</li>
        <li>Customized Solutions Tailored to Your Needs</li>
        <li>Focus on Performance and User Experience</li>
        <li>Comprehensive Support and Maintenance</li>
        <li>Proven Track Record of Success</li>
        <li>Client-Centric Approach</li>
      </ul>
      </div>
    </section>
    
  );
}
