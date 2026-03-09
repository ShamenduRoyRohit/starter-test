"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const slides = [
  {src:"/slide1.png", alt:" Our Moto"},
  {src:"/slide2.png", alt:" Our Electrical Services"},
  {src:"/slide3.png", alt:" Our Software Services"},
  {src:"/slide4.png", alt:" Our System Intigration Services"},
  
  // { src: "/hero-3.png", alt: "Engineering intelligence and applied AI" },
];

export default function HeroSlideshow() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [paused]);

  return (
    <div
      className="relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-lg dark:border-slate-800 dark:bg-slate-900"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Image container */}
      <div className="relative aspect-[3/2] w-full">
        {slides.map((slide, index) => (
          <div
            key={slide.src}
            className={`absolute inset-0 transition-opacity duration-700 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              className="object-contain p-6"
              priority={index === 0}
            />
          </div>
        ))}
      </div>

      {/* Navigation dots */}
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-2.5 w-2.5 rounded-full transition ${
              index === current
                ? "bg-emerald-500"
                : "bg-slate-300 dark:bg-slate-600"
            }`}
          />
        ))}
      </div>
    </div>
  );}