// components/Services.tsx
const services = [
  {
    title: "Hybrid Plant Stability (Machines + Inverters)",
    description:
      "EMT and dynamic stability assessments for hybrid systems combining synchronous machines, grid-forming BESS and inverter-based generation—focused on weak-grid behavior and control interaction risk.",
  },
  {
    title: "Grid-Forming & Inverter Controls Validation",
    description:
      "Controller tuning reviews, droop/virtual inertia strategy evaluation, ride-through behavior validation and interaction screening across PPC, inverters and plant-level controls.",
  },
  {
    title: "Protection Engineering for Inverter-Dominated Systems",
    description:
      "Protection philosophy and coordination tailored to limited and dynamic inverter fault current—relay settings, misoperation risk review and practical mitigation plans.",
  },
  {
    title: "Black Start & Islanding Readiness",
    description:
      "End-to-end black-start and islanding transition studies for microgrids and critical sites—sequencing logic, stability margins, re-synchronization strategy and test planning.",
  },
  {
    title: "Power Quality, Harmonics & Resonance Risk",
    description:
      "Harmonic screening, impedance/resonance checks and mitigation design to reduce nuisance trips and overheating—especially in sites with large drives, transformers and inverter plants.",
  },
  {
    title: "Commissioning Diagnostics & Grid Code Support",
    description:
      "Commissioning support that shortens schedule risk—event capture strategy, disturbance test readiness, settings verification and clear technical reporting for utilities and AHJs.",
  },
  {
    title: "Industrial Electrification & Heavy Industry Integration",
    description:
      "Feasibility and integration engineering for electrifying heavy loads (large motors, process plants, mining sites)—including motor starting impacts, voltage regulation and reliability planning.",
  },
  {
    title: "Independent Technical Due Diligence",
    description:
      "Owner’s-engineer style reviews of designs, studies and vendor claims—focused on stability, protection, compliance and long-term operability before you commit capital.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="border-b border-slate-200 bg-white py-14 dark:border-slate-900 dark:bg-slate-950"
    >
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl dark:text-slate-50">
          Services
        </h2>
        <p className="mt-2 max-w-2xl text-sm text-slate-600 dark:text-slate-300">
          We help owners, EPCs and OEMs de-risk hybrid power systems—where rotating
          machines meet inverter-based resources. Our work focuses on stability,
          protection, commissioning readiness and long-term operability.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <article
              key={service.title}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900/60 dark:shadow-none"
            >
              <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-50">
                {service.title}
              </h3>
              <p className="mt-2 text-xs text-slate-600 dark:text-slate-300">
                {service.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-900/30">
          <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-50">
            Typical Outcomes
          </h3>
          <ul className="mt-3 grid gap-2 text-xs text-slate-700 dark:text-slate-300 md:grid-cols-2">
            <li>• Reduced commissioning delays and fewer failed grid tests</li>
            <li>• Lower oscillation and nuisance-trip risk in weak grids</li>
            <li>• Protection schemes aligned to inverter fault behavior</li>
            <li>• Clear, utility-ready documentation and settings traceability</li>
            <li>• Practical mitigation options with cost/benefit tradeoffs</li>
            <li>• Better confidence for owners, lenders and insurers</li>
          </ul>
        </div>
      </div>
    </section>
  );
}