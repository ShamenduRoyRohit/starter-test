// components/Services.tsx
const services = [
  {
    title: "SCADA UX & HMI Design",
    description:
      "Operator-centric layouts, alarm views, trend screens and KPIs tailored to each role.",
  },
  {
    title: "Protocol & Data Integration",
    description:
      "DNP3, IEC 61850, Modbus, MQTT, OPC UA – mapped into clean, consistent data models.",
  },
  {
    title: "Custom Web Development",
    description:
      "Next.js and modern web stack builds for fast, secure and SEO-friendly SCADA portals.",
  },
  {
    title: "Performance & Security",
    description:
      "Hardening, network architecture input and efficient data flows between OT and IT.",
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
          We blend control engineering and modern web development to reduce the
          gap between your field devices and decision makers.
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
      </div>
    </section>
  );
}
