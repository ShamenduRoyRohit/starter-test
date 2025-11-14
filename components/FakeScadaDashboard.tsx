// components/FakeScadaDashboard.tsx
export default function FakeScadaDashboard() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-950">
      {/* Header */}
      <div className="mb-3 flex items-center justify-between text-xs text-slate-600 dark:text-slate-300">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-emerald-500" />
          <span>Plant: SAMPLE_BESS</span>
        </div>
        <div className="flex gap-4">
          <span>Grid: 60.02 Hz</span>
          <span>POI: 27.4 MW / 8.1 Mvar</span>
        </div>
      </div>

      <div className="grid gap-3 md:grid-cols-3">
        {/* Left column: KPIs */}
        <div className="space-y-3">
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-3 text-xs dark:border-slate-800 dark:bg-slate-900/80">
            <div className="mb-2 text-[11px] font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
              Active Power
            </div>
            <div className="flex items-end justify-between">
              <div>
                <div className="text-2xl font-semibold text-slate-900 dark:text-slate-50">
                  27.4
                  <span className="ml-1 text-xs font-normal text-slate-500 dark:text-slate-400">
                    MW
                  </span>
                </div>
                <div className="mt-1 text-[11px] text-emerald-600 dark:text-emerald-400">
                  ▲ +3.2 MW (last 5 min)
                </div>
              </div>
              <div className="h-10 w-24 rounded-md bg-gradient-to-r from-emerald-200 to-emerald-500/70 dark:from-emerald-900 dark:to-emerald-500/70" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-3 dark:border-slate-800 dark:bg-slate-900/80">
              <div className="text-[11px] font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                SOC
              </div>
              <div className="mt-1 text-lg font-semibold text-slate-900 dark:text-slate-50">
                68%
              </div>
              <div className="mt-1 h-1.5 w-full rounded-full bg-slate-200 dark:bg-slate-800">
                <div className="h-1.5 w-2/3 rounded-full bg-emerald-500" />
              </div>
            </div>
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-3 dark:border-slate-800 dark:bg-slate-900/80">
              <div className="text-[11px] font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                Grid Status
              </div>
              <div className="mt-1 text-[13px] font-semibold text-emerald-600 dark:text-emerald-400">
                On-grid · PQ Mode
              </div>
              <div className="mt-1 text-[11px] text-slate-500 dark:text-slate-400">
                IEEE 1547-2018 · UL 1741 SB
              </div>
            </div>
          </div>
        </div>

        {/* Middle column: single-line diagram */}
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-3 text-xs dark:border-slate-800 dark:bg-slate-900/80">
          <div className="mb-2 text-[11px] font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
            Single-line Overview
          </div>
          <div className="flex h-40 items-center justify-between gap-2">
            {/* Inverters */}
            <div className="flex flex-col items-center gap-2">
              <div className="h-6 w-14 rounded-md border border-slate-300 bg-white text-[10px] text-center leading-6 dark:border-slate-700 dark:bg-slate-900">
                INV-01
              </div>
              <div className="h-6 w-14 rounded-md border border-slate-300 bg-white text-[10px] text-center leading-6 dark:border-slate-700 dark:bg-slate-900">
                INV-02
              </div>
              <div className="h-6 w-14 rounded-md border border-slate-300 bg-white text-[10px] text-center leading-6 dark:border-slate-700 dark:bg-slate-900">
                INV-03
              </div>
            </div>

            {/* Bus & breaker */}
            <div className="relative flex h-full flex-1 items-center justify-center">
              <div className="h-1 w-full rounded bg-slate-300 dark:bg-slate-700" />
              <div className="absolute h-10 w-10 rounded-full border-2 border-emerald-500 text-[10px] font-semibold text-emerald-600 dark:text-emerald-400 flex items-center justify-center bg-white dark:bg-slate-950">
                POI
              </div>
            </div>

            {/* Grid & load */}
            <div className="flex flex-col items-center gap-3">
              <div className="h-6 w-16 rounded-md border border-slate-300 bg-white text-[10px] text-center leading-6 dark:border-slate-700 dark:bg-slate-900">
                GRID
              </div>
              <div className="h-6 w-16 rounded-md border border-slate-300 bg-white text-[10px] text-center leading-6 dark:border-slate-700 dark:bg-slate-900">
                LOAD
              </div>
            </div>
          </div>
        </div>

        {/* Right column: alarms */}
        <div className="flex flex-col gap-3">
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-3 text-xs dark:border-slate-800 dark:bg-slate-900/80">
            <div className="mb-2 flex items-center justify-between">
              <span className="text-[11px] font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                Alarms
              </span>
              <span className="rounded-full bg-red-100 px-2 py-0.5 text-[10px] font-semibold text-red-700 dark:bg-red-900/40 dark:text-red-300">
                2 Active
              </span>
            </div>
            <ul className="space-y-1">
              <li className="flex items-start justify-between gap-2">
                <span className="mt-0.5 h-1.5 w-1.5 rounded-full bg-red-500" />
                <div className="flex-1">
                  <div className="text-[11px] font-semibold text-slate-800 dark:text-slate-100">
                    INV-02 DC Insulation Low
                  </div>
                  <div className="text-[10px] text-slate-500 dark:text-slate-400">
                    Ack pending · 10:42:13
                  </div>
                </div>
              </li>
              <li className="flex items-start justify-between gap-2">
                <span className="mt-0.5 h-1.5 w-1.5 rounded-full bg-amber-400" />
                <div className="flex-1">
                  <div className="text-[11px] font-semibold text-slate-800 dark:text-slate-100">
                    BESS-01 Cell Temp High (Warning)
                  </div>
                  <div className="text-[10px] text-slate-500 dark:text-slate-400">
                    Auto-derate enabled
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <div className="rounded-xl border border-slate-200 bg-slate-50 p-3 text-xs dark:border-slate-800 dark:bg-slate-900/80">
            <div className="mb-2 flex items-center justify-between">
              <span className="text-[11px] font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                Commands
              </span>
              <span className="text-[10px] text-slate-400 dark:text-slate-500">
                PPC · Remote
              </span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <button className="rounded-md border border-slate-300 bg-white px-2 py-1 text-[11px] font-semibold text-slate-700 hover:border-emerald-500 hover:text-emerald-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:border-emerald-500 dark:hover:text-emerald-300">
                Set P Limit
              </button>
              <button className="rounded-md border border-slate-300 bg-white px-2 py-1 text-[11px] font-semibold text-slate-700 hover:border-emerald-500 hover:text-emerald-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:border-emerald-300">
                Set Q Mode
              </button>
              <button className="rounded-md border border-slate-300 bg-white px-2 py-1 text-[11px] font-semibold text-slate-700 hover:border-red-500 hover:text-red-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:border-red-400 dark:hover:text-red-300">
                Open POI
              </button>
              <button className="rounded-md border border-slate-300 bg-white px-2 py-1 text-[11px] font-semibold text-slate-700 hover:border-slate-500 hover:text-slate-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:border-slate-400 dark:hover:text-slate-200">
                Ack Alarms
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom: fake trend */}
      <div className="mt-4 rounded-xl border border-slate-200 bg-slate-50 p-3 text-xs dark:border-slate-800 dark:bg-slate-900/80">
        <div className="mb-2 flex items-center justify-between">
          <span className="text-[11px] font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
            Active Power · Last 15 minutes
          </span>
          <span className="text-[10px] text-slate-500 dark:text-slate-400">
            Resolution: 5s · Source: PPC
          </span>
        </div>
        <div className="h-20 rounded-md bg-gradient-to-b from-slate-200 to-slate-100 dark:from-slate-800 dark:to-slate-900">
          {/* fake sparkline bars */}
          <div className="flex h-full items-end gap-1 px-2">
            {Array.from({ length: 30 }).map((_, i) => (
              <div
                key={i}
                className="w-[3px] rounded-t bg-emerald-500/70 dark:bg-emerald-400/70"
                style={{
                  height: `${30 + ((i * 19) % 50)}%`,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
