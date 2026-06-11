"use client";

import Image from "next/image";
import { useRef, useState, type MouseEvent } from "react";
import { useLanguage } from "@/context/LanguageContext";

const historySlides = [
  {
    src: "/images/history/history-img-1.png",
    alt: "Budaya Batak Toba",
    altEn: "Batak Toba Culture",
    description:
      "Seluruh sendi kehidupan masyarakat Batak Toba memang diatur oleh sistem adat yang bertujuan menciptakan harmoni. Adat-istiadat ini terangkum dalam tiga fase besar daur hidup yaitu kelahiran, pernikahan, dan kematian",
    descriptionEn:
      "Every aspect of Batak Toba community life is indeed governed by a customary system aimed at creating harmony. These customs are summarized in three major phases of the life cycle: birth, marriage, and death.",
  },
  {
    src: "/images/history/history-img-2.png",
    alt: "Arsitektur Tradisional",
    altEn: "Traditional Architecture",
    description:
      "Pada suku ini makanan hadir bukan hanya sebagai jamuan, melainkan sebagai sistem adat yang krusial. Seperti halnya dalam upacara kelahiran dan perkawinan, kehadiran Arsik Ikan Mas menjadi menu wajib yang mempertegas simbol kehidupan dan doa tulus bagi mereka yang menerimanya.",
    descriptionEn:
      "In this tribe, food is present not just as a feast, but as a crucial customary system. As in birth and marriage ceremonies, the presence of Goldfish Arsik is a mandatory menu that reinforces the symbol of life and sincere prayers for those who receive it.",
  },
  {
    src: "/images/history/history-img-3.png",
    alt: "Acara Tradisional",
    altEn: "Traditional Events",
    description:
      "Keunikan masakan Batak ini salah satunya dimahkotai oleh penggunaan Andaliman dengan bahasa latinnya yaitu Zanthoxylum acanthopodium, sebuah rempah endemik yang dijuluki “merica Batak”. Andaliman memberikan sensasi pedas dengan getaran lembut di lidah serta aroma sitrus yang segar",
    descriptionEn:
      "The uniqueness of Batak cuisine is partly crowned by the use of Andaliman, scientifically known as Zanthoxylum acanthopodium, an endemic spice dubbed the 'Batak pepper'. Andaliman provides a spicy sensation with a gentle vibration on the tongue and a fresh citrus aroma.",
  },
  {
    src: "/images/history/history-img-4.png",
    alt: "Hidangan Tradisional",
    altEn: "Traditional Dishes",
    description: "Untuk bahan utamanya, hidangan Batak Toba ini banyak memanfaatkan hasil tangkapan ikan air tawar dari Danau Toba, aneka olahan ayam, hingga daging babi untuk ragam pilihan non-halal.",
    descriptionEn: "For its main ingredients, this Batak Toba dish heavily utilizes freshwater fish caught from Lake Toba, various processed chicken dishes, to pork for non-halal options.",
  },
];

export function HistoryCarousel() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const { language } = useLanguage();

  const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
    if (!carouselRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !carouselRef.current) return;
    e.preventDefault(); // Mencegah highlight text atau perilaku default lainnya
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Angka 2 adalah kecepatan scroll
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div
      ref={carouselRef}
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      className="overflow-x-auto overflow-y-visible pb-16 sm:pb-20 select-none [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
      style={{ cursor: isDragging ? "grabbing" : "grab" }}>
      {/* Container flex diubah jadi w-max agar bisa di-scroll secara natural */}
      <div className="flex w-max items-start gap-4 px-4 sm:px-6 lg:px-8 pointer-events-none">
        {historySlides.map((slide, i) => {
          const altText = language === 'en' && slide.altEn ? slide.altEn : slide.alt;
          const descText = language === 'en' && slide.descriptionEn ? slide.descriptionEn : slide.description;
          return (
            <div key={`${slide.src}-${i}`} className="flex h-130 w-[clamp(180px,28vw,290px)] shrink-0 flex-col overflow-hidden rounded-[22px] border border-zinc-100 bg-white shadow-md sm:h-125 lg:h-140">
              <div className="px-3 pt-3 sm:px-4 sm:pt-4">
                <div className="relative aspect-square w-full overflow-hidden rounded-[18px]">
                  <Image
                    src={slide.src}
                    alt={altText}
                    fill
                    priority={i === 0}
                    loading="eager"
                    sizes="(max-width: 768px) 100vw, 320px"
                    className="object-cover"
                    draggable={false}
                  />
                </div>
              </div>
              <div className="flex flex-1 items-start px-4 py-4 sm:px-5 sm:py-5">
                <p className="lg:text-sm text-center text-xs leading-relaxed text-zinc-600 [font-family:var(--font-poppins)]">{descText}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
