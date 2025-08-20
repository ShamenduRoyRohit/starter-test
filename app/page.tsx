import Link from "next/link";

export default function Home() {
  return (
    <section className="space-y-12">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
          Build trust with a clean, fast website
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
          A production-ready Next.js starter for your company, pre-tuned for Vercel.
        </p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <Link href="/contact" className="btn btn-primary">Get Started</Link>
          <Link href="/services" className="btn btn-outline">Our Services</Link>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {[
          { title: "Blazing Fast", desc: "Edge-ready, optimized images & caching." },
          { title: "SEO-Friendly", desc: "Metadata, sitemaps & robots ready." },
          { title: "Accessible", desc: "Semantic HTML with a11y in mind." }
        ].map((f) => (
          <div key={f.title} className="card">
            <h3 className="text-xl font-semibold">{f.title}</h3>
            <p className="mt-2 text-gray-600">{f.desc}</p>
          </div>
        ))}
      </div>

      <div className="card container-narrow">
        <h2 className="text-2xl font-semibold">Why this starter?</h2>
        <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-700">
          <li>App Router + TypeScript</li>
          <li>Tailwind CSS preconfigured</li>
          <li>Contact form API route</li>
          <li>Robots & sitemap endpoints</li>
          <li>Easy environment config</li>
        </ul>
      </div>
    </section>
  );
}
