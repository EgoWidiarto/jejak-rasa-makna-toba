"use client";

import Image from "next/image";

const historySlides = [
  {
    src: "/images/history/history-img-1.png",
    alt: "Budaya Batak Toba",
    description:
      "Seluruh sendi kehidupan masyarakat Batak Toba memang diatur oleh sistem adat yang bertujuan menciptakan harmoni. Adat-istiadat ini terangkum dalam tiga fase besar daur hidup yaitu kelahiran, pernikahan, dan kematian",
  },
  {
    src: "/images/history/history-img-2.png",
    alt: "Arsitektur Tradisional",
    description:
      "Pada suku ini makanan hadir bukan hanya sebagai jamuan, melainkan sebagai sistem adat yang krusial. Seperti halnya dalam upacara kelahiran dan perkawinan, kehadiran Arsik Ikan Mas menjadi menu wajib yang mempertegas simbol kehidupan dan doa tulus bagi mereka yang menerimanya.",
  },
  {
    src: "/images/history/history-img-3.png",
    alt: "Acara Tradisional",
    description:
      "Keunikan masakan Batak ini salah satunya dimahkotai oleh penggunaan Andaliman dengan bahasa latinnya yaitu Zanthoxylum acanthopodium, sebuah rempah endemik yang dijuluki “merica Batak”. Andaliman memberikan sensasi pedas dengan getaran lembut di lidah serta aroma sitrus yang segar",
  },
  {
    src: "/images/history/history-img-4.png",
    alt: "Hidangan Tradisional",
    description: "Untuk bahan utamanya, hidangan Batak Toba ini banyak memanfaatkan hasil tangkapan ikan air tawar dari Danau Toba, aneka olahan ayam, hingga daging babi untuk ragam pilihan non-halal.",
  },
];

export function HistoryCarousel() {
  return (
    <div className="overflow-x-hidden overflow-y-visible pb-16 sm:pb-20">
      <div className="section-carousel-track section-carousel-reverse overflow-visible flex w-max items-start gap-4">
        {[0, 1].map((group) => (
          <div key={group} className="flex items-start gap-4 shrink-0">
            {historySlides.map((slide, i) => (
              <div key={`${group}-${slide.src}-${i}`} className="flex h-107.5 w-[clamp(220px,28vw,320px)] shrink-0 flex-col overflow-hidden rounded-[22px] border border-zinc-100 bg-white shadow-md sm:h-117.5 lg:h-125">
                <div className="px-3 pt-3 sm:px-4 sm:pt-4">
                  <div className="relative aspect-4/3 w-full overflow-hidden rounded-[18px]">
                    <Image src={slide.src} alt={slide.alt} fill priority={group === 0 && i === 0} loading="eager" sizes="(max-width: 768px) 100vw, 320px" className="object-cover" />
                  </div>
                </div>
                <div className="flex flex-1 items-start px-4 py-4 sm:px-5 sm:py-5">
                  <p className="text-sm text-center leading-relaxed text-zinc-600 [font-family:var(--font-poppins)]">{slide.description}</p>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
