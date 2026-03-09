// components/Solutions.tsx
const solutions = [
  {
    title: "Utility-scale solar + storage",
    description:
      "Monitoring and PPC visualization tuned for IEEE 1547-2018 and UL 1741 SB behavior.",
  },
  {
    title: "Microgrids & critical power",
    description:
      "Multi-source microgrid dashboards with islanding status, load shedding and resiliency KPIs.",
  },
  {
    title: "Substations & transmission",
    description:
      "Clean, secure web views for RTUs, IEDs and gateways without exposing your OT network.",
  },
  {
    title: "Industrial plants",
    description:
      "Modernize legacy HMI with responsive browser UIs and OT-aware data models.",
  },
];

export default function Solutions() {
  return (
    <section
      id="solutions"
      className="border-b border-slate-200 bg-white py-14 dark:border-slate-900 dark:bg-slate-950"
    >
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl dark:text-slate-50">
          Solutions
        </h2>
        <p className="mt-2 max-w-2xl text-sm text-slate-600 dark:text-slate-300">
          From single sites to fleets, Ishpath adapts to your control
          architecture and cybersecurity requirements.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {solutions.map((solution) => (
            <article
              key={solution.title}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900/60 dark:shadow-none"
            >
              <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-50">
                {solution.title}
              </h3>
              <p className="mt-2 text-xs text-slate-600 dark:text-slate-300">
                {solution.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
