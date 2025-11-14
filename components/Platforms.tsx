// components/Platforms.tsx
const platforms = [
  {
    title: "ISHPATH.IO Cloud",
    description:
      "Cloud-native SCADA & data platform for solar, storage, microgrids and industrial plants.",
    tag: "Cloud platform",
  },
  {
    title: "ISHPATH Edge Gateway",
    description:
      "Rugged edge layer for protocol conversion, data buffering and local control logic.",
    tag: "Edge computing",
  },
  {
    title: "ISHPATH Data Hub",
    description:
      "Unified data hub for historian, analytics and BI tools with secure APIs.",
    tag: "Data hub",
  },
];

export default function Platforms() {
  return (
    <section className="border-b border-brand-gray-100 bg-brand-gray-50 py-14 dark:border-slate-900 dark:bg-slate-950">

      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl dark:text-slate-50">
          Platforms
        </h2>
        <p className="mt-2 max-w-2xl text-sm text-slate-600 dark:text-slate-300">
          A modular stack to modernize your SCADA, without rewriting your field
          systems or control logic.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {platforms.map((item) => (
            <article
              key={item.title}
              className="flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900/60 dark:shadow-none"
            >
              <span className="inline-flex w-fit rounded-full border border-brand-orange-100 bg-brand-orange-50 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-brand-orange-600 dark:border-brand-orange-500/40 dark:bg-brand-orange-500/10 dark:text-brand-orange-100">
                {item.tag}
              </span>

              <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-50">
                {item.title}
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300">
                {item.description}</p>
              <button className="mt-auto w-fit text-xs font-semibold text-brand-teal-600 hover:text-brand-teal-700 dark:text-brand-teal-400 dark:hover:text-brand-teal-300">
                Learn more →
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
