"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

type Herb = {
  name: string;
  src: string;
  description: string;
  descriptionEn?: string;
};

const herbs: Herb[] = [
  {
    name: "Andaliman",
    src: "/images/herbs/andaliman.png",
    description: "Andaliman, tuba atau itir-itir adalah tumbuhan dengan buah berbentuk bulat dan bergerombol yang biasa digunakan sebagai bumbu masak khas Batak dan Asia.",
    descriptionEn: "Andaliman is a flowering plant in the citrus family, producing berries that are widely used as a spice in Batak and Asian cuisine.",
  },
  {
    name: "Kecombrang",
    src: "/images/herbs/kecombrang.png",
    description: "Kecombrang  (Etlingera elatior) adalah sejenis tumbuhan rempah yang bunga, buah, serta bijinya dimanfaatkan sebagai bahan sayuran. ",
    descriptionEn: "Kecombrang (torch ginger) is a species of herbaceous perennial plant whose showy pink flowers, fruits, and seeds are used in local culinary.",
  },
  {
    name: "Asam Gelugur",
    src: "/images/herbs/asam-gelugur.png",
    description: "Asam gelugur, disebut juga asam potong biasanya dimanfaatkan untuk bumbu masak, bahan perasa minuman, dan bahan dasar pengobatan.",
    descriptionEn: "Asam gelugur, also known as Garcinia atroviridis, is commonly used as a cooking spice, beverage flavoring, and in traditional medicine.",
  },
  {
    name: "Asam Jungga",
    src: "/images/herbs/asam-jungga.png",
    description: "Jeruk jungga atau disebut juga dengan utte junga atau asam jungga adalah sejenis jeruk purut. Hanya saja jeruk jungga memiliki tingkat keasaman yang tinggi.",
    descriptionEn: "Jangga lime, also called utte junga or asam jungga, is a type of kaffir lime with extremely high acidity.",
  },
  {
    name: "Asam Cikala",
    src: "/images/herbs/asam-cikala.png",
    description: "Asam cikala adalah buah dari tanaman kecombrang yang  digunakan dalam masakan tradisional Batak Toba, untuk memberikan rasa asam segar.",
    descriptionEn: "Asam cikala is the fruit of the torch ginger plant used in traditional Batak Toba dishes to provide a fresh, sour taste.",
  },
  {
    name: "Bawang Batak / Lokio",
    src: "/images/herbs/bawang-batak.png",
    description: "Lokio memiliki nama ilmiah  Allium schoenoprasum. Lokio memiliki bentuk yang hampir sama  seperti bawang, namun memiliki tangkai yang lebih panjang.",
    descriptionEn: "Batak onions, scientifically named Allium schoenoprasum, are similar to green onions/chives but with longer stems.",
  },
];

export function HerbsSection() {
  const [activeHerbName, setActiveHerbName] = useState<string | null>("Andaliman");
  const [previousHerbName, setPreviousHerbName] = useState<string | null>(null);
  const [isExiting, setIsExiting] = useState(false);
  const { language, t } = useLanguage();

  useEffect(() => {
    const herbParam = sessionStorage.getItem("selectedHerb");
    if (herbParam) {
      const herb = herbs.find((h) => h.name === herbParam);
      if (herb) {
        setTimeout(() => {
          setActiveHerbName(herbParam);
          setPreviousHerbName(null);
          setIsExiting(false);
        }, 0);
      }
      sessionStorage.removeItem("selectedHerb");
    }
  }, []);

  const displayedHerb = herbs.find((herb) => herb.name === activeHerbName) || null;
  const isSwitching = previousHerbName !== null && activeHerbName !== null && previousHerbName !== activeHerbName;

  const handleToggleHerb = (herbName: string) => {
    if (activeHerbName === herbName) {
      setIsExiting(true);
      setTimeout(() => {
        setActiveHerbName(null);
        setPreviousHerbName(null);
        setIsExiting(false);
      }, 560);
    } else {
      setPreviousHerbName(activeHerbName);
      setActiveHerbName(herbName);
      setIsExiting(false);
    }
  };

  return (
    <section id="herbs" className="mx-auto w-full rounded-xl max-w-5xl scroll-mt-28 px-4 py-12 sm:px-6 lg:px-8 bg-[#F4F4F4]">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-start text-[#B02627] [font-family:var(--font-roboto)] sm:text-4xl">{t("rempahUtama")}</h2>
      </div>

      <div className="mt-8 sm:mt-10 flex flex-col items-center lg:items-start lg:flex-row gap-6 lg:gap-12 justify-center">
        {/* Herbs List */}
        <div className={`${isExiting && !displayedHerb ? "herb-list-slide-out" : ""} w-full max-w-sm`}>
          {herbs.map((herb) => {
            const isActive = herb.name === activeHerbName;
            return (
              <div key={herb.name} className="border-b border-zinc-300 last:border-b-0 text-black">
                <button onClick={() => handleToggleHerb(herb.name)} className="flex w-full items-center justify-between gap-4 py-3 text-left hover:bg-zinc-50 transition-colors" aria-expanded={isActive}>
                  <span className={`text-lg font-semibold [font-family:var(--font-roboto)] transition-colors ${isActive ? "text-zinc-900" : "text-zinc-700"}`}>{herb.name}</span>
                  <svg className={`h-5 w-5 shrink-0 text-zinc-500 transition-transform duration-300 ${isActive ? "rotate-180" : ""}`} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M5 7.5l5 5 5-5" />
                  </svg>
                </button>

                {isActive && (
                  <div className="pb-3 pr-4 text-sm leading-relaxed text-zinc-600 [font-family:var(--font-poppins)] animate-in fade-in duration-200">
                    {language === 'en' && herb.descriptionEn ? herb.descriptionEn : herb.description}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Image Container */}
        {displayedHerb && (
          <div key={displayedHerb.name} className={`${isSwitching ? "herb-image-cross-fade" : isExiting ? "herb-image-exit" : "herb-image-enter"} relative w-full sm:w-md aspect-square rounded-lg overflow-hidden`}>
            <Image src={displayedHerb.src} alt={displayedHerb.name} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 320px" priority />
          </div>
        )}
      </div>
    </section>
  );
}
