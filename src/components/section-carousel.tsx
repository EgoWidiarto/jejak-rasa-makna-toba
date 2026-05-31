"use client";

import Image from "next/image";

const slides = [
  {
    src: "/images/history-img-1.png",
    alt: "Pemandangan alam Toba",
  },
  {
    src: "/images/history-img-2.png",
    alt: "Budaya Batak Toba",
  },
];

export function SectionCarousel() {
  return (
    <div className="overflow-hidden rounded-2xl">
      <div className="relative aspect-video w-full overflow-hidden">
        <div className="section-carousel-track flex h-full w-max items-stretch">
          {[0, 1].map((group) => (
            <div key={group} className="flex h-full items-center gap-3 pr-3 shrink-0">
              {slides.map((slide, i) => (
                <div key={`${group}-${slide.src}-${i}`} className="relative aspect-video w-[clamp(300px,50vw,600px)] shrink-0 overflow-hidden rounded-2xl bg-zinc-50">
                  {/* card div is the moving block; image fills the card */}
                  <Image src={slide.src} alt={slide.alt} fill priority={group === 0 && i === 0} loading="eager" sizes="(max-width: 768px) 100vw, 800px" className="object-cover" />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
