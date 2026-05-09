"use client";

import Image from "next/image";
import { dishes } from "@/data/tradition-dishes";

type DishItem = {
  src: string;
  title: string;
  description: string;
};

function getPreviewText(description: string, wordCount = 8) {
  const words = description.trim().split(/\s+/);

  if (words.length <= wordCount) {
    return description;
  }

  return `${words.slice(0, wordCount).join(" ")}...`;
}

export function DishCarousel({ direction = "rtl", items }: { direction?: "ltr" | "rtl"; items?: DishItem[] }) {
  const itemsList = items ?? dishes;

  return (
    <div className="overflow-x-hidden overflow-y-visible py-16 sm:py-20">
      <div className={`section-carousel-track ${direction === "ltr" ? "section-carousel-reverse" : ""} overflow-visible flex w-max items-stretch`}>
        {[0, 1].map((group) => (
          <div key={group} className="flex shrink-0 items-stretch gap-4 pr-4 sm:gap-5 sm:pr-5">
            {itemsList.map((dish, index) => (
              <article
                key={`${group}-${dish.title}`}
                className="relative h-82 w-60 shrink-0 cursor-pointer self-end rounded-[28px] border border-black/10 bg-white px-5 pb-6 pt-16 shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-200 hover:mx-3 hover:scale-104 hover:z-9999 origin-bottom sm:h-103 sm:w-70 sm:px-6 sm:pb-6 sm:pt-16">
                <div className="absolute left-1/2 top-1 z-10 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-white bg-white shadow-lg sm:h-32 sm:w-32">
                  <Image src={dish.src} alt={dish.title} fill priority={group === 0 && index === 0} loading="eager" sizes="(max-width: 640px) 128px, 160px" className="rounded-full object-cover" />
                </div>

                <div className="flex h-full gap-0 flex-col">
                  <h3 className="mt-3 min-h-10 text-center text-[1rem] font-semibold text-[#D93B2D] sm:min-h-10">{dish.title}</h3>
                  <p className="min-h-18 text-center text-[0.7rem] leading-relaxed text-zinc-600 sm:min-h-18 sm:text-[0.8rem]">{getPreviewText(dish.description)}</p>
                </div>
              </article>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
