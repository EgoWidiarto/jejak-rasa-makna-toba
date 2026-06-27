"use client";

import Image from "next/image";
import InteractiveMap from "@/components/interactive-map";
import { RevealSection } from "@/components/reveal-section";
import { useLanguage } from "@/context/LanguageContext";

export default function GeographyPage() {
  const { t } = useLanguage();
  const description = t("geographyDesc");

  return (
    <main className="min-h-screen bg-[#F4F4F4] py-12">
      <RevealSection as="div" className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8 pt-10" delay={0.05}>
        <h1 className="mb-6 text-center text-3xl font-bold text-black [font-family:var(--font-roboto)]">{t("geographyTitle")}</h1>
        {/* Ensure Tailwind includes the arbitrary color utility used in injected HTML */}
        <span className="hidden text-[#B02627]">.</span>

        <div className="rounded-lg bg-white p-6 shadow-sm sm:p-8 lg:p-10">
          <div className="flex flex-col gap-6">
            <div className="w-full overflow-hidden rounded-lg">
              <Image src="/images/hero-img-3.png" alt="Letak Geografis" width={1200} height={700} className="h-auto w-full rounded-lg object-cover" priority />
            </div>

            <div>
              {description.split("\n\n").map((para, idx) => (
                <p
                  key={idx}
                  className="mb-4 text-sm leading-relaxed text-[#2C2424] [font-family:var(--font-poppins)]"
                  style={{ textAlign: "justify", textIndent: "2rem" }}
                  dangerouslySetInnerHTML={{ __html: para.replace(/className=/g, "class=") }}
                />
              ))}
            </div>
          </div>
        </div>
      </RevealSection>

      <RevealSection as="div" className="mx-auto mt-12 w-full max-w-5xl px-4 pb-20 sm:px-6 lg:px-8 pt-10" delay={0.1}>
        <div className="flex flex-col lg:flex-row lg:items-start">
          <div className="min-w-0 flex-1 justify-end">
            <InteractiveMap fullBleed={false} />
          </div>

          <div className="w-full lg:w-70 lg:pt-0">
            <h2 className="text-[2.4rem] text-end font-bold text-black [font-family:var(--font-roboto)] lg:sticky lg:top-3 lg:mt-0">{t("geographySub")}</h2>
          </div>
        </div>
      </RevealSection>
    </main>
  );
}
