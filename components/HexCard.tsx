'use client';

import Image from "next/image";

export default function HexCard({ title, desc, icon }: { title: string; desc: string; icon: string }) {
  return (
    <div className="relative flex flex-col items-center text-center p-5">
      <div className="w-20 h-20 flex items-center justify-center mb-3">
        <div className="hexagon bg-emerald-50 dark:bg-slate-900 border border-emerald-200 dark:border-emerald-900 flex items-center justify-center w-full h-full">
          <Image src={icon} alt={title} width={48} height={48} className="object-contain" />
        </div>
      </div>
      <h3 className="text-lg font-semibold text-emerald-800 dark:text-emerald-300">{title}</h3>
      <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{desc}</p>
      <style jsx>{`
        .hexagon {
          clip-path: polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%);
        }
      `}</style>
    </div>
  );
}
