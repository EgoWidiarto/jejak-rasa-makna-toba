"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { dishes } from "@/data/tradition-dishes";
import { useLanguage } from "@/context/LanguageContext";

type DishItem = {
  thumbnailSrc: string;
  fullImgSrc: string;
  title: string;
  titleEn?: string;
  description: string;
  descriptionEn?: string;
  slug: string;
  imageScale?: string;
  imageScaleSm?: string;
};

function getPreviewText(description: string, wordCount = 30) {
  const words = description.trim().split(/\s+/);

  if (words.length <= wordCount) {
    return description;
  }

  return `${words.slice(0, wordCount).join(" ")}...`;
}

export function DishCarousel({ direction = "rtl", items, section }: { direction?: "ltr" | "rtl"; items?: DishItem[]; section?: "tradition-dishes" | "daily-dishes" }) {
  const itemsList = (items ?? dishes) as DishItem[];
  const finalSection = section ?? "tradition-dishes";
  const showScrollButtons = finalSection !== "daily-dishes";
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const { language } = useLanguage();

  const scroll = (scrollAmount: number) => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="overflow-visible py-10 sm:py-18">
      <div className="relative">
        {/* Carousel Container */}
        <div ref={scrollContainerRef} className="-mt-20 overflow-x-auto overflow-y-visible scrollbar-hide pt-32 sm:-mt-12 sm:pt-36 lg:-mt-14 lg:pt-40">
          <div className={`section-carousel-track ${direction === "ltr" ? "section-carousel-reverse" : ""} overflow-visible flex w-max items-stretch`}>
            <div className="flex shrink-0 items-stretch gap-4 pr-4 sm:gap-5 sm:pr-5">
              {itemsList.map((dish, index) => {
                const scaleClass = dish.imageScale ?? "w-[110%] h-[110%]";
                const scaleSmClass = dish.imageScaleSm ?? "sm:w-[112%] sm:h-[112%]";
                const titleText = language === 'en' && dish.titleEn ? dish.titleEn : dish.title;
                const descText = language === 'en' && dish.descriptionEn ? dish.descriptionEn : dish.description;
                return (
                  <Link
                    key={dish.slug}
                    href={`/${finalSection}/${dish.slug}`}
                    className="group relative block w-60 shrink-0 self-end transition-all duration-300 hover:mx-3 hover:scale-106 origin-bottom sm:w-70 sm:hover:mx-4"
                  >
                    {/* Floating Dish Image */}
                    <div className="absolute left-1/2 top-0 z-20 h-36 w-36 -translate-x-1/2 -translate-y-1/2 overflow-visible rounded-full border-4 border-white bg-white shadow-lg flex items-center justify-center sm:h-40 sm:w-40">
                      <div className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ${scaleClass} ${scaleSmClass} overflow-visible`}>
                        <Image
                          src={dish.thumbnailSrc}
                          alt={titleText}
                          fill
                          sizes="200px"
                          priority={index === 0}
                          loading={index === 0 ? "eager" : "lazy"}
                          className="object-contain"
                        />
                      </div>
                    </div>

                    {/* SVG Notch Border Overlay */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[160px] h-[80px] sm:w-[192px] sm:h-[96px] pointer-events-none overflow-visible z-10">
                      <svg viewBox="0 0 160 80" className="w-full h-full overflow-visible">
                        <path
                          d="M 0,0 A 80,80 0 0,0 160,0"
                          fill="none"
                          stroke="rgba(0,0,0,0.1)"
                          strokeWidth="1"
                          vectorEffect="non-scaling-stroke"
                        />
                      </svg>
                    </div>

                    {/* Card Wrapper with Drop Shadow */}
                    <div className="filter drop-shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-300 group-hover:drop-shadow-[0_20px_40px_rgba(0,0,0,0.12)]">
                      {/* Card Body (masked to create the cutout) */}
                      <article
                        className="[--cutout-radius:80px] [--cutout-inner:79px] sm:[--cutout-radius:96px] sm:[--cutout-inner:95px] relative min-h-82 w-full rounded-[21px] border border-black/10 bg-white px-5 pb-6 pt-24 sm:min-h-103 sm:px-6 sm:pb-6 sm:pt-32"
                        style={{
                          WebkitMaskImage: "radial-gradient(circle var(--cutout-radius) at 50% 0, transparent var(--cutout-inner), #000 var(--cutout-radius))",
                          maskImage: "radial-gradient(circle var(--cutout-radius) at 50% 0, transparent var(--cutout-inner), #000 var(--cutout-radius))",
                        }}
                      >
                        <div className="flex h-full flex-col gap-0">
                          <h3 className="-mt-1 min-h-10 text-center text-[1rem] font-semibold text-[#B02627] sm:min-h-10">
                            {titleText}
                          </h3>
                          <p
                            className="min-h-18 text-center text-[0.7rem] leading-relaxed text-black sm:min-h-18 sm:text-[0.8rem]"
                            suppressHydrationWarning
                          >
                            {getPreviewText(descText)}
                          </p>
                        </div>
                      </article>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom-center scroll buttons */}
        {showScrollButtons ? (
          <div className="mt-6 flex justify-center gap-3">
            <button
              onClick={() => scroll(-300)}
              className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#B02627] bg-white text-sm font-semibold text-[#B02627] shadow-md transition-colors duration-200 hover:bg-[#B02627] hover:text-white"
              aria-label="Scroll left">
              &lt;
            </button>
            <button
              onClick={() => scroll(300)}
              className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#B02627] bg-white text-sm font-semibold text-[#B02627] shadow-md transition-colors duration-200 hover:bg-[#B02627] hover:text-white"
              aria-label="Scroll right">
              &gt;
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
}
