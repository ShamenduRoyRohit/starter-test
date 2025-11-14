// components/CTA.tsx
export default function CTA() {
  return (
    <section
      id="contact"
      className="border-b border-slate-900 bg-gradient-to-r from-emerald-600 to-teal-500 py-12"
    >
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-4 md:flex-row md:items-center">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
            Ready to modernize your SCADA?
          </h2>
          <p className="mt-2 text-sm text-slate-900/80">
            Share a brief overview of your plant or project, and we’ll outline a
            pragmatic approach—no slideware, just actionable steps.
          </p>
        </div>
        <a
          href="mailto:info@ishpath.com"
          className="rounded-full bg-slate-950 px-6 py-2.5 text-sm font-semibold text-emerald-300 hover:bg-slate-900"
        >
          Email us: info@ishpath.com
        </a>
      </div>
    </section>
  );
}
