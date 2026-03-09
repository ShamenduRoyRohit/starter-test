// components/Services.tsx

const capabilityGroups = [
  {
    title: "Electrical Engineering",
    description:
      "Engineering analysis and design for reliable industrial, infrastructure, and energy systems.",
    services: [
      "Electrical system design",
      "Power system studies",
      "Protection & coordination",
      "Commissioning support",
      "Industrial electrification",
      "Technical due diligence",
    ],
  },
  {
    title: "Software Engineering",
    description:
      "Custom software platforms, data systems, and AI-enabled tools that improve engineering workflows and operational insight.",
    services: [
      "Custom web applications",
      "Engineering dashboards & reporting platforms",
      "Workflow automation tools",
      "AI-assisted data analysis",
      "Machine learning models for operational insights",
      "Predictive analytics for infrastructure systems",
      "Anomaly detection & event intelligence",
      "Cloud-based engineering platforms",
    ],
  },
  {
    title: "Systems Integration",
    description:
      "Connecting engineering systems and digital platforms into practical, usable solutions.",
    services: [
      "Data integration pipelines",
      "Operational reporting systems",
      "Digital engineering workflows",
      "Infrastructure monitoring tools",
      "Cross-system interoperability",
      "End-to-end technical solution design",
    ],
  },
];

const outcomes = [
  "Reliable electrical system performance",
  "Faster engineering and operational workflows",
  "Better visibility across technical systems",
  "Reduced technical and delivery risk",
  "Clear documentation and engineering traceability",
  "Practical integration between engineering and software",
];

export default function Services() {
  return (
    <section
      id="services"
      className="border-b border-slate-200 bg-white py-16 dark:border-slate-900 dark:bg-slate-950"
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className="max-w-3xl">
          <p className="text-sm font-medium text-emerald-600 dark:text-emerald-400">
            Electrical Engineering + Software Engineering
          </p>

          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl dark:text-slate-50">
            Capabilities
          </h2>

          <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
            We combine electrical engineering expertise with modern software
            development and AI-powered analytics to design, analyze, and improve
            complex technical systems.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {capabilityGroups.map((group) => (
            <article
              key={group.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/60"
            >
              <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-50">
                {group.title}
              </h3>

              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                {group.description}
              </p>

              <ul className="mt-5 space-y-2 text-sm text-slate-700 dark:text-slate-300">
                {group.services.map((service) => (
                  <li key={service} className="flex items-start gap-2">
                    <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900/30">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-900 dark:text-slate-50">
            Typical Outcomes
          </h3>

          <div className="mt-4 grid gap-3 md:grid-cols-2">
            {outcomes.map((item) => (
              <div
                key={item}
                className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-300"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}