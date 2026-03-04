import FakeScadaDashboard from "./FakeScadaDashboard"

// components/Hero.tsx
export default function Hero() {
  return (
    <section className="border-b border-slate-200 bg-white dark:border-slate-900 dark:bg-gradient-to-b dark:from-slate-950 dark:to-slate-900">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-2 md:items-center md:py-20">
        <div className="space-y-6">
          <span className="inline-flex rounded-full border border-brand-blue-100 bg-brand-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-blue-600 dark:border-brand-blue-500/40 dark:bg-brand-blue-500/10 dark:text-brand-blue-100">
            Electrical Engineering and Software Applications
            </span>
            <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl dark:text-slate-50">
            Build trust with{" "}
            <span className="text-brand-blue-600 dark:text-brand-blue-300">
                Cutting-Edge Technology
            </span>{" "}
            for utilities and critical power.
            </h1>

          <p className="text-sm text-slate-600 sm:text-base dark:text-slate-300">
            Ishpath is a cutting-edge web development studio focused on
            high-performance, SEO-friendly and accessible SCADA and industrial
            visualization using modern web stacks.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="#solutions"
              className="rounded-full bg-brand-teal-500 px-5 py-2 text-sm font-semibold text-white hover:bg-brand-teal-400 dark:bg-brand-teal-400 dark:hover:bg-brand-teal-300 dark:text-slate-950"
            >
              Explore solutions
            </a>
            <a
              href="#contact"
              className="rounded-full border border-slate-300 px-5 py-2 text-sm font-semibold text-slate-700 hover:border-brand-teal-500 hover:text-brand-teal-700 dark:border-slate-700 dark:text-slate-100 dark:hover:border-brand-teal-400 dark:hover:text-brand-teal-300"
            >
              Get a quote
            </a>
          </div>

          <div className="flex flex-wrap gap-6 pt-4 text-xs text-slate-500 dark:text-slate-400">
            <div>
              <div className="font-semibold text-slate-800 dark:text-slate-200">
                Utility-grade UX
              </div>
              <div>Designed for operators, not just dashboards.</div>
            </div>
            <div>
              <div className="font-semibold text-slate-800 dark:text-slate-200">
                Protocol aware
              </div>
              <div>DNP3, IEC 61850, Modbus, MQTT & more.</div>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-md dark:border-slate-800 dark:bg-slate-900/70 dark:shadow-xl">
          <div className="mb-3 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
            <span>Live plant view</span>
            <span>SCADA Web HMI</span>
          </div>
          <div className="aspect-video rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-950/80">
            {/* Fake dashboard layout */}
            <FakeScadaDashboard />
            </div>

          <p className="mt-3 text-xs text-slate-500 dark:text-slate-400">
            Modern, responsive SCADA screens that run in any browser and speak
            your existing automation protocols.
          </p>
        </div>
      </div>
    </section>
  );
}
