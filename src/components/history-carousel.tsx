"use client";

import Image from "next/image";

const historySlides = [
  {
    src: "/images/history/history-img-1.png",
    alt: "Budaya Batak Toba",
  },
  {
    src: "/images/history/history-img-2.png",
    alt: "Arsitektur Tradisional",
  },
  {
    src: "/images/history/history-img-3.png",
    alt: "Acara Tradisional",
  },
  {
    src: "/images/history/history-img-4.png",
    alt: "Hidangan Tradisional",
  },
];

export function HistoryCarousel() {
  return (
    <div className="overflow-x-hidden overflow-y-visible pb-16 sm:pb-20">
      <div className="section-carousel-track section-carousel-reverse overflow-visible flex w-max items-start gap-4">
        {[0, 1].map((group) => (
          <div key={group} className="flex items-start gap-4 shrink-0">
            {historySlides.map((slide, i) => (
              <div key={`${group}-${slide.src}-${i}`} className="relative aspect-square w-[clamp(180px,25vw,280px)] shrink-0 overflow-hidden rounded-xl bg-zinc-50 shadow-md">
                <Image src={slide.src} alt={slide.alt} fill priority={group === 0 && i === 0} loading="eager" sizes="(max-width: 768px) 100vw, 280px" className="object-cover" />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
