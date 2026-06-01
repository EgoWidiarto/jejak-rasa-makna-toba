"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const slides = [
  {
    src: "/images/hero/img-hero-1.png",
    alt: "Kuliner Batak Toba pada jamuan tradisional",
  },
  {
    src: "/images/hero/hero-img-2.png",
    alt: "Hidangan Batak Toba disajikan dalam suasana budaya",
  },
  {
    src: "/images/hero/hero-img-3.png",
    alt: "Tampilan kuliner Batak Toba sebagai bagian dari warisan rasa",
  },
  {
    src: "/images/hero/img-hero-4.png",
    alt: "Hidangan Batak Toba yang menggugah selera dalam konteks budaya",
  },
];

export function HeroCarousel() {
  const defaultIndex = slides.findIndex((s) => s.src.endsWith("img-hero-1.png"));
  const initialIndex = defaultIndex === -1 ? 0 : defaultIndex;
  const [activeIndex, setActiveIndex] = useState(initialIndex);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % slides.length);
    }, 4500);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <div className="mx-auto w-full max-w-6xl px-4 pt-6 sm:px-6 lg:px-8">
      <div className="overflow-hidden rounded-3xl bg-zinc-100 shadow-[0_18px_50px_rgba(0,0,0,0.12)]">
        <div className="relative aspect-video w-full">
          {slides.map((slide, index) => (
            <div key={slide.src} aria-hidden={index !== activeIndex} className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${index === activeIndex ? "opacity-100" : "opacity-0"}`}>
              <Image src={slide.src} alt={slide.alt} fill priority={index === initialIndex} loading={index === initialIndex ? "eager" : "lazy"} sizes="(max-width: 1024px) 100vw, 1280px" className="object-cover" />
              <div className="absolute inset-0 bg-linear-to-t from-black/35 via-black/10 to-transparent" />
            </div>
          ))}

          <div className="absolute left-12 top-14 z-10 max-w-[80%] text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)] sm:left-10 sm:top-12">
            <p className="text-base sm:text-lg md:text-2xl tracking-[0.08em] font-roboto-bold font-bold sm:text-base">Website Informasi</p>
            <h1 className="mt-0 text-4xl sm:text-5xl md:text-6xl lg:text-7xl italic leading-none font-atziluth">Kuliner Batak Toba</h1>
          </div>

          <div className="absolute bottom-4 left-0 right-0 z-10 flex justify-center gap-2">
            {slides.map((slide, index) => (
              <button
                key={slide.src}
                type="button"
                aria-label={`Pindah ke slide ${index + 1}`}
                aria-pressed={index === activeIndex}
                onClick={() => setActiveIndex(index)}
                className={`h-2.5 rounded-full transition-all duration-300 ${index === activeIndex ? "w-8 bg-white" : "w-2.5 bg-white/55 hover:bg-white/80"}`}
              />
            ))}
          </div>
        </div>
      </div>

      <p className="mt-4 text-center text-sm italic text-[#891B1C] sm:text-base" style={{ fontFamily: "var(--font-poppins)" }}>
        Mari mengenal warisan kuliner batak toba
      </p>
    </div>
  );
}
