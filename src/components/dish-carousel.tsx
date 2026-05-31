"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { dishes } from "@/data/tradition-dishes";

type DishItem = {
  thumbnailSrc: string;
  fullImgSrc: string;
  title: string;
  description: string;
};

function getPreviewText(description: string, wordCount = 30) {
  const words = description.trim().split(/\s+/);

  if (words.length <= wordCount) {
    return description;
  }

  return `${words.slice(0, wordCount).join(" ")}...`;
}

export function DishCarousel({ direction = "rtl", items, section }: { direction?: "ltr" | "rtl"; items?: DishItem[]; section?: "tradition-dishes" | "daily-dishes" }) {
  const itemsList = items ?? dishes;
  const finalSection = section ?? "tradition-dishes";
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (scrollAmount: number) => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="overflow-visible py-16 sm:py-20">
      <div className="relative">
        <button
          onClick={() => scroll(-300)}
          className="absolute left-0 top-1/2 z-20 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-[#B02627] bg-white text-lg font-bold text-[#B02627] shadow-md transition-all duration-200 hover:bg-[#B02627] hover:text-white sm:h-12 sm:w-12"
          aria-label="Scroll left">
          ←
        </button>
        <button
          onClick={() => scroll(300)}
          className="absolute right-0 top-1/2 z-20 flex h-10 w-10 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-[#B02627] bg-white text-lg font-bold text-[#B02627] shadow-md transition-all duration-200 hover:bg-[#B02627] hover:text-white sm:h-12 sm:w-12"
          aria-label="Scroll right">
          →
        </button>

        {/* Carousel Container */}
        <div ref={scrollContainerRef} className="overflow-x-auto overflow-y-visible scrollbar-hide pt-24 sm:pt-28 lg:pt-32">
          <div className={`section-carousel-track ${direction === "ltr" ? "section-carousel-reverse" : ""} overflow-visible flex w-max items-stretch`}>
            {[0, 1].map((group) => (
              <div key={group} className="flex shrink-0 items-stretch gap-4 pr-4 sm:gap-5 sm:pr-5">
                {itemsList.map((dish, index) => (
                  <Link key={`${group}-${dish.title}`} href={`/${finalSection}/${encodeURIComponent(dish.title)}`}>
                    <article className="relative min-h-82 w-60 shrink-0 cursor-pointer self-end rounded-[28px] border border-black/10 bg-white px-5 pb-6 pt-16 shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-300 hover:mx-3 hover:scale-110 hover:shadow-lg hover:-translate-y-3 origin-bottom sm:min-h-103 sm:w-70 sm:px-6 sm:pb-6 sm:pt-16 sm:hover:mx-4">
                      <div className="absolute left-1/2 top-0 z-10 h-32 w-32 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full border-4 border-white bg-white shadow-lg flex items-center justify-center sm:h-32 sm:w-32">
                        <Image src={dish.thumbnailSrc} alt={dish.title} fill sizes="128px" priority={group === 0 && index === 0} loading="eager" className="rounded-full object-contain object-center" />
                      </div>

                      <div className="flex h-full flex-col gap-0">
                        <h3 className="mt-3 min-h-10 text-center text-[1rem] font-semibold text-[#D93B2D] sm:min-h-10">{dish.title}</h3>
                        <p className="min-h-18 text-center text-[0.7rem] leading-relaxed text-zinc-600 sm:min-h-18 sm:text-[0.8rem]" suppressHydrationWarning>
                          {getPreviewText(dish.description)}
                        </p>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
