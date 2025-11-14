// components/WhyIshpath.tsx
const reasons = [
  "Trusted by industry leaders",
  "Practical application of AI in SCADA design",
  "Expertise in modern web technologies",
  "Customized solutions tailored to your needs",
  "Focus on performance and user experience",
  "Comprehensive support and maintenance",
  "Proven track record of success",
  "Client-centric approach",
];

export default function WhyIshpath() {
  return (
    <section
      id="why-ishpath"
      className="border-b border-slate-200 bg-white py-14 dark:border-slate-900 dark:bg-slate-950"
    >
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl dark:text-slate-50">
          Why Ishpath
        </h2>

        <p className="mt-2 max-w-2xl text-sm text-slate-600 dark:text-slate-300">
          Utility-aware engineering, combined with modern software practices,
          so your SCADA is both reliable and future-ready.
        </p>

        <div className="mt-6 grid gap-3 md:grid-cols-2">
          {reasons.map((reason) => (
            <div
              key={reason}
              className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-200"
            >
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-600 dark:bg-emerald-400" />
              <span>{reason}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
