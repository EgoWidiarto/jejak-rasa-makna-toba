"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

const slides = [
  {
    src: "/images/history/history-hero.png",
    alt: "Kuliner Batak Toba pada jamuan tradisional",
    altEn: "Batak Toba culinary at a traditional feast",
  },
  {
    src: "/images/history/history-hero-2.png",
    alt: "Hidangan Batak Toba disajikan dalam suasana budaya",
    altEn: "Batak Toba dishes served in a cultural setting",
  },
];

export function HeroHistoryCarousel() {
  const defaultIndex = slides.findIndex((s) => s.src.endsWith("img-hero-1.png"));
  const initialIndex = defaultIndex === -1 ? 0 : defaultIndex;
  const [activeIndex, setActiveIndex] = useState(initialIndex);
  const { language, t } = useLanguage();

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % slides.length);
    }, 4500);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <div className="mx-auto w-full max-w-6xl px-4 pt-6 sm:px-6 lg:px-8">
      <div className="overflow-hidden rounded-3xl bg-zinc-100">
        <div className="relative w-full h-80 sm:h-100 lg:h-125 overflow-hidden rounded-3xl">
          {slides.map((slide, index) => {
            const altText = language === 'en' && slide.altEn ? slide.altEn : slide.alt;
            return (
              <div key={slide.src} aria-hidden={index !== activeIndex} className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${index === activeIndex ? "opacity-100" : "opacity-0"}`}>
                <Image
                  src={slide.src}
                  alt={altText}
                  fill
                  priority={index === initialIndex}
                  loading={index === initialIndex ? "eager" : "lazy"}
                  sizes="(max-width: 1024px) 100vw, 1280px"
                  className="object-cover object-center"
                />
              </div>
            );
          })}

          <div className="absolute inset-0 flex items-end">
            <div className="w-full px-6 pb-10 sm:px-8 sm:pb-14 lg:px-10 lg:pb-18">
              <p className="mb-1 text-lg font-black text-white sm:text-xl lg:text-2xl [font-family:var(--font-roboto)]">
                {t("historyCarouselTitle")}
              </p>
              <span className="text-3xl italic text-white sm:text-4xl lg:text-5xl font-['Atziluth']">
                {t("historyCarouselSub")}
              </span>
            </div>
          </div>

          <div className="absolute bottom-4 sm:bottom-6 left-0 right-0 z-10 flex justify-center gap-2">
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
    </div>
  );
}
