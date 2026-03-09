// components/WhyIshpath.tsx

const reasons = [
  "Electrical engineering expertise combined with modern software development",
  "Ability to bridge physical infrastructure and digital systems",
  "Solutions designed for complex industrial and infrastructure environments",
  "AI-driven analytics and data insights for engineering systems",
  "Focus on reliability, performance, and long-term operability",
  "Clear technical documentation and engineering traceability",
  "Independent, client-focused engineering approach",
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
          Ishpath brings together electrical engineering expertise and modern
          software development to solve complex technical challenges across
          industrial and infrastructure systems.
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