// components/ServicesSplit.tsx
const electricalServices = [
  "Electrical System Design",
  "Power System Studies",
  "Protection & Coordination",
  "Commissioning Support",
  "Industrial Electrification",
  "Technical Due Diligence",
];

const softwareServices = [
  "Custom Web Applications",
  "Internal Business Tools",
  "Data Dashboards & Reporting",
  "System Integration",
  "Workflow Automation",
  "Cloud-Based Platforms",
];

export default function ServicesSplit() {
  return (
    <section
      id="services"
      className="border-b border-slate-200 bg-white py-14 dark:border-slate-900 dark:bg-slate-950"
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl dark:text-slate-50">
            Services
          </h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
            We provide practical engineering support across both electrical and
            software disciplines—helping clients design, build, and improve
            modern technical systems.
          </p>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {/* Electrical Services */}
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900/60">
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-50">
                Electrical Services
              </h3>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                Engineering support for industrial, infrastructure, and energy
                systems.
              </p>
            </div>

            <ul className="space-y-3">
              {electricalServices.map((service) => (
                <li
                  key={service}
                  className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-200"
                >
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Software Services */}
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900/60">
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-50">
                Software Services
              </h3>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                Digital tools and applications built to improve visibility,
                workflow, and operations.
              </p>
            </div>

            <ul className="space-y-3">
              {softwareServices.map((service) => (
                <li
                  key={service}
                  className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-200"
                >
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}