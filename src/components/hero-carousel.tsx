"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const slides = [
  {
    src: "/images/hero-img-1.png",
    alt: "Kuliner Batak Toba pada jamuan tradisional",
  },
  {
    src: "/images/hero-img-2.png",
    alt: "Hidangan Batak Toba disajikan dalam suasana budaya",
  },
  {
    src: "/images/hero-img-3.png",
    alt: "Tampilan kuliner Batak Toba sebagai bagian dari warisan rasa",
  },
];

export function HeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

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
              <Image src={slide.src} alt={slide.alt} fill priority={index === 0} loading={index <= 1 ? "eager" : "lazy"} sizes="(max-width: 1024px) 100vw, 1280px" className="object-cover" />
              <div className="absolute inset-0 bg-linear-to-t from-black/35 via-black/10 to-transparent" />
            </div>
          ))}

          <div className="absolute left-6 top-6 z-10 max-w-[80%] text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)] sm:left-8 sm:top-8">
            <p className="text-sm tracking-[0.08em] sm:text-base" style={{ fontFamily: "var(--font-roboto)", fontWeight: 700 }}>
              Website Informasi
            </p>
            <h1 className="mt-1 text-2xl italic leading-none sm:text-4xl" style={{ fontFamily: "Atziluth" }}>
              Kuliner Batak Toba
            </h1>
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
