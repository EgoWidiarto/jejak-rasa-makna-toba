"use client";

import Image from "next/image";
import Link from "next/link";
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

  return (
    <div className="overflow-x-hidden overflow-y-visible py-16 sm:py-20">
      <div className={`section-carousel-track ${direction === "ltr" ? "section-carousel-reverse" : ""} overflow-visible flex w-max items-stretch`}>
        {[0, 1].map((group) => (
          <div key={group} className="flex shrink-0 items-stretch gap-4 pr-4 sm:gap-5 sm:pr-5">
            {itemsList.map((dish, index) => (
              <Link key={`${group}-${dish.title}`} href={`/${finalSection}/${encodeURIComponent(dish.title)}`}>
                <article className="relative min-h-82 w-60 shrink-0 cursor-pointer self-end rounded-[28px] border border-black/10 bg-white px-5 pb-6 pt-16 shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-200 hover:mx-3 hover:scale-104 hover:z-9999 origin-bottom sm:min-h-103 sm:w-70 sm:px-6 sm:pb-6 sm:pt-16">
                  <div className="absolute left-1/2 top-0 z-10 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-white bg-white shadow-lg flex items-center justify-center overflow-hidden sm:h-32 sm:w-32">
                    <Image src={dish.thumbnailSrc} alt={dish.title} fill sizes="128px" priority={group === 0 && index === 0} loading="eager" className="rounded-full object-contain object-center" />
                  </div>

                  <div className="flex h-full gap-0 flex-col">
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
  );
}
