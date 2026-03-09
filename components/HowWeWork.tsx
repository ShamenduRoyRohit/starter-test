// components/HowWeWork.tsx

const steps = [
  {
    title: "Discover",
    description:
      "We start by understanding your technical challenge, existing systems, constraints, and business goals.",
  },
  {
    title: "Design",
    description:
      "We define a practical engineering and software approach tailored to your environment, risks, and operational needs.",
  },
  {
    title: "Deliver",
    description:
      "We build, validate, and refine solutions with a focus on reliability, clarity, and long-term usability.",
  },
];

export default function HowWeWork() {
  return (
    <section className="border-b border-slate-200 bg-white py-14 dark:border-slate-900 dark:bg-slate-950">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl dark:text-slate-50">
          How We Work
        </h2>

        <p className="mt-2 max-w-2xl text-sm text-slate-600 dark:text-slate-300">
          A practical process focused on solving real technical problems with
          engineering rigor and modern software execution.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {steps.map((step, index) => (
            <article
              key={step.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/60"
            >
              <div className="text-xs font-semibold uppercase tracking-wide text-emerald-600 dark:text-emerald-400">
                Step {index + 1}
              </div>
              <h3 className="mt-2 text-lg font-semibold text-slate-900 dark:text-slate-50">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}