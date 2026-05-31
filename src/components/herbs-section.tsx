"use client";

import { useState } from "react";
import Image from "next/image";

type Herb = {
  name: string;
  src: string;
  description: string;
};

const herbs: Herb[] = [
  {
    name: "Andaliman",
    src: "/images/herbs/andaliman.png",
    description: "Andaliman, tuba atau itir-itir adalah tumbuhan dengan buah berbentuk bulat dan bergerombol yang biasa digunakan sebagai bumbu masak khas Batak dan Asia.",
  },
  {
    name: "Kecombrang",
    src: "/images/herbs/kecombrang.png",
    description: "Kecombrang memberi aroma segar khas pada masakan Batak Toba dan sering dipadukan untuk memperkaya rasa ikan serta olahan berkuah.",
  },
  {
    name: "Asam Gelugur",
    src: "/images/herbs/asam-gelugur.png",
    description: "Asam gelugur digunakan untuk memberi rasa asam yang ringan dan menyeimbangkan cita rasa rempah kuat pada hidangan tradisional.",
  },
  {
    name: "Asam Jungga",
    src: "/images/herbs/asam-jungga.png",
    description: "Asam jungga dikenal sebagai penambah rasa asam alami yang membuat rasa masakan menjadi lebih segar dan berlapis.",
  },
  {
    name: "Asam Cikala",
    src: "/images/herbs/asam-cikala.png",
    description: "Asam cikala umum dipakai dalam masakan Batak untuk menghadirkan rasa asam khas dan memperkuat karakter kuah berbumbu.",
  },
  {
    name: "Bawang Batak / Lokio",
    src: "/images/herbs/bawang-batak.png",
    description: "Lokio atau bawang Batak memberi wangi bawang yang tajam, gurih, dan menjadi penyeimbang penting dalam campuran rempah tradisional.",
  },
];

export function HerbsSection() {
  const [activeHerbName, setActiveHerbName] = useState<string | null>(null);
  const [previousHerbName, setPreviousHerbName] = useState<string | null>(null);
  const [isExiting, setIsExiting] = useState(false);

  const displayedHerb = herbs.find((herb) => herb.name === activeHerbName) || null;
  const isSwitching = previousHerbName !== null && activeHerbName !== null && previousHerbName !== activeHerbName;

  const handleToggleHerb = (herbName: string) => {
    if (activeHerbName === herbName) {
      // Deselecting - show exit animation first
      setIsExiting(true);
      setTimeout(() => {
        setActiveHerbName(null);
        setPreviousHerbName(null);
        setIsExiting(false);
      }, 560);
    } else {
      // Selecting or switching
      setPreviousHerbName(activeHerbName);
      setActiveHerbName(herbName);
      setIsExiting(false);
    }
  };

  return (
    <section id="herbs" className="mx-auto w-full max-w-5xl scroll-mt-28 px-4 py-12 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-black [font-family:var(--font-roboto)] sm:text-4xl">Rempah - Rempah</h2>
        <p className="mx-auto mt-2 max-w-3xl text-sm font-normal text-black [font-family:var(--font-poppins)] sm:text-base">
          Makanan khas Batak Toba banyak menggunakan berbagai macam rempah-rempah, namun rempah yang sangat ikonik dan khas, ada pada rempah andaliman.
        </p>
      </div>

      <div className="mt-8 sm:mt-10 flex flex-col lg:flex-row gap-6 lg:gap-12 justify-center items-start">
        {/* Herbs List */}
        <div className={`${isExiting && !displayedHerb ? "herb-list-slide-out" : ""} w-full max-w-sm`}>
          {herbs.map((herb) => {
            const isActive = herb.name === activeHerbName;
            return (
              <div key={herb.name} className="border-b border-zinc-300 last:border-b-0">
                <button onClick={() => handleToggleHerb(herb.name)} className="flex w-full items-center justify-between gap-4 py-3 text-left hover:bg-zinc-50 transition-colors" aria-expanded={isActive}>
                  <span className={`text-lg font-semibold [font-family:var(--font-roboto)] transition-colors ${isActive ? "text-zinc-900" : "text-zinc-700"}`}>{herb.name}</span>
                  <svg className={`h-5 w-5 shrink-0 text-zinc-500 transition-transform duration-300 ${isActive ? "rotate-180" : ""}`} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M5 7.5l5 5 5-5" />
                  </svg>
                </button>

                {isActive && <div className="pb-3 pr-4 text-sm leading-relaxed text-zinc-600 [font-family:var(--font-poppins)] animate-in fade-in duration-200">{herb.description}</div>}
              </div>
            );
          })}
        </div>

        {/* Image Container */}
        {displayedHerb && (
          <div key={displayedHerb.name} className={`${isSwitching ? "herb-image-cross-fade" : isExiting ? "herb-image-exit" : "herb-image-enter"} relative w-md aspect-square rounded-lg overflow-hidden`}>
            <Image src={displayedHerb.src} alt={displayedHerb.name} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 320px" priority />
          </div>
        )}
      </div>
    </section>
  );
}
