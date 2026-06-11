"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

const slides = [
  {
    src: "/images/history-img-1.png",
    alt: "Pemandangan alam Toba",
    altEn: "Natural landscape of Lake Toba",
  },
  {
    src: "/images/history-img-2.png",
    alt: "Budaya Batak Toba",
    altEn: "Batak Toba Culture",
  },
];

export function SectionCarousel() {
  const { language } = useLanguage();

  return (
    <div className="overflow-hidden rounded-2xl">
      {/* fixed small-screen height so carousel doesn't become excessively tall */}
      <div className="relative w-full overflow-hidden h-52 sm:h-64 lg:h-auto">
        <div className="history-carousel-track flex h-full w-max items-stretch">
          {[0, 1].map((group) => (
            <div key={group} className="flex h-full items-center gap-3 pr-3 shrink-0">
              {slides.map((slide, i) => {
                const altText = language === 'en' && slide.altEn ? slide.altEn : slide.alt;
                return (
                  <div key={`${group}-${slide.src}-${i}`} className="relative h-full lg:aspect-video w-[clamp(450px,50vw,750px)] shrink-0 overflow-hidden rounded-2xl bg-zinc-50 p-2 lg:p-0">
                    {/* card fills the track height on small screens; uses video aspect on lg+ */}
                    <Image src={slide.src} alt={altText} width={1200} height={600} priority={group === 0 && i === 0} sizes="(max-width: 768px) 100vw, 800px" className="object-cover w-full h-full rounded-xl" />
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
