"use client";

import Image from "next/image";

const slides = [
  {
    src: "/images/hero-img-1.png",
    alt: "Pemandangan alam Toba",
  },
  {
    src: "/images/hero-img-2.png",
    alt: "Budaya Batak Toba",
  },
  {
    src: "/images/hero-img-3.png",
    alt: "Warisan kuliner Batak Toba",
  },
];

export function SectionCarousel() {
  // duplicate slides for seamless looping
  const tripled = [...slides, ...slides, ...slides];

  return (
    <div className="overflow-hidden rounded-2xl">
      <div className="relative aspect-square w-full">
        <div className="section-carousel-track flex h-full items-start gap-3">
          {tripled.map((slide, i) => (
            <div key={`${slide.src}-${i}`} className="relative aspect-square w-[clamp(200px,30vw,320px)] shrink-0 overflow-hidden rounded-2xl bg-zinc-50">
              {/* card div is the moving block; image fills the card */}
              <Image src={slide.src} alt={slide.alt} fill priority={i === 0} loading="eager" sizes="(max-width: 768px) 100vw, 520px" className="object-cover" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
