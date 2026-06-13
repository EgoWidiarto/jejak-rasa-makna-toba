"use client";

import { HeroCarousel } from "@/components/hero-carousel";
import { SectionCarousel } from "../../components/section-carousel";
import { DishCarousel } from "@/components/dish-carousel";
import { dishes } from "@/data/tradition-dishes";
import { dailyDishes } from "../../data/daily-dishes";
import { LocationMap } from "@/components/location-map";
import { HerbsSection } from "@/components/herbs-section";
import { RevealSection } from "@/components/reveal-section";
import { TestimonialsList } from "@/components/testimonials-list";
import { useLanguage } from "@/context/LanguageContext";

export default function Home() {
  const { t } = useLanguage();

  return (
    <main className="flex-1 overflow-x-clip bg-[#F4F4F4] text-zinc-900 pb-20">
      {/* Hero Image */}
      <RevealSection id="home" className="pb-8 pt-4 sm:pb-10 sm:pt-6 md:pt-8 lg:pt-10">
        <HeroCarousel />
      </RevealSection>

      {/* Pattern */}
      <RevealSection aria-label="Motif Batak berjalan" className="w-full overflow-hidden pt-10" delay={0.05}>
        <div className="pattern-marquee-track flex w-max">
          <div className="pattern-scroll h-16 shrink-0 sm:h-20 lg:h-24" />
          <div className="pattern-scroll h-16 shrink-0 sm:h-20 lg:h-24" />
        </div>
      </RevealSection>

      {/* History Section */}
      <RevealSection id="history" className="mx-auto mt-6 w-full max-w-7xl scroll-mt-28 px-4 pb-10 sm:mt-8 sm:px-6 sm:pb-12 lg:mt-14 lg:px-8 lg:pb-24 pt-10" delay={0.05}>
        <div className="rounded-3xl overflow-hidden bg-[#FFF] p-4 shadow-sm sm:p-5 lg:p-6">
          <div className="grid items-start gap-2 lg:grid-cols-3 lg:items-stretch lg:gap-6">
            <div className="min-w-0 lg:col-span-1 flex flex-col justify-center lg:h-full pr-0 lg:pr-4">
              <h2 className="mt-1 text-[17px] sm:text-[23px] md:text-[31px] lg:text-[41px] xl:text-[43px] font-roboto-bold text-[#000000] leading-tight" dangerouslySetInnerHTML={{ __html: t("homeHistoryTitle") }} />
              <h3 className="text-[11px] sm:text-[13px] md:text-[15px] lg:text-[17px] xl:text-[17px] font-roboto-bold tracking-[0.04em] text-[#D98F2D] mt-2" dangerouslySetInnerHTML={{ __html: t("homeHistorySub") }} />
              <p className="mt-4 sm:mt-6 lg:mt-4 leading-relaxed text-[#282F26] text-[11px] sm:text-[13px] md:text-[14px] lg:text-[16px] xl:text-[17px] font-poppins-regular whitespace-normal wrap-break-word">
                {t("homeHistoryDesc")}{" "}
                <span className="text-[#B02627] font-poppins-italic text-[11px] sm:text-[13px] md:text-[14px] lg:text-[16px] xl:text-[17px]"> Dalihan Na Tolu (DNT) </span>{" "}
                {t("homeHistoryDescEnd")}
              </p>
              <a href="/history" className="mt-4 inline-flex items-center gap-2 text-[14px] sm:text-[17px] xl:text-[18px] font-poppins-regular text-[#B02627] transition-opacity hover:opacity-75">
                {t("exploreLink")}
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
            <div className="min-w-0 w-full h-full lg:col-span-2 lg:self-stretch">
              <div className="min-w-0 h-full lg:aspect-auto">
                <SectionCarousel />
              </div>
            </div>
          </div>
        </div>
      </RevealSection>

      {/* Tradition Dishes Section */}
      <RevealSection id="tradition-dishes" className="mx-auto w-full max-w-7xl scroll-mt-28 px-4 pb-6 sm:px-6 sm:pb-8 lg:px-8 lg:pb-12 pt-2" delay={0.08}>
        <div className="text-center">
          <h2 className="text-2xl font-bold leading-tight text-[#B02627] sm:text-4xl [font-family:var(--font-roboto)]">{t("upacaraAdatSub")}</h2>
          <p className="mx-auto mt-0 max-w-2xl text-lg font-normal leading-relaxed text-[#B02627] sm:text-2xl [font-family:var(--font-roboto)]">{t("knowMore")}</p>
        </div>

        <DishCarousel direction="ltr" items={dishes} section="tradition-dishes" />
      </RevealSection>

      {/* Daily Dishes Section */}
      <RevealSection id="daily-dishes" className="mx-auto w-full max-w-7xl scroll-mt-28 px-4 pb-6 sm:px-6 sm:pb-8 lg:px-8 lg:pb-12 pt-2" delay={0.08}>
        <div className="text-center">
          <h2 className="text-2xl font-bold leading-tight text-[#B02627] sm:text-4xl [font-family:var(--font-roboto)]">{t("harianSub")}</h2>
          <p className="mx-auto mt-0 max-w-2xl text-lg font-normal leading-relaxed text-[#B02627] sm:text-2xl [font-family:var(--font-roboto)]">{t("knowMore")}</p>
        </div>

        <DishCarousel direction="rtl" items={dailyDishes} section="daily-dishes" />
      </RevealSection>

      <RevealSection as="div" className="pt-10 bg-white pb-10">
        <HerbsSection />
      </RevealSection>

      {/* Map Location Section */}
      <RevealSection as="div" className="pt-10">
        <LocationMap />
      </RevealSection>

      {/* Testimonials Section */}
      <RevealSection id="testimonials" className="mx-auto w-full max-w-7xl scroll-mt-28 px-4 pb-6 sm:px-6 sm:pb-8 lg:px-8 lg:pb-12 pt-10" delay={0.08}>
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal leading-tight text-[#D98F2D] font-roboto-bold">{t("apresiasiBudaya")}</h2>
          <p className="mt-2 text-md sm:text-lg md:text-xl font-normal leading-tight text-black [font-family:var(--font-roboto)]">{t("testiSub")}</p>
        </div>

        <TestimonialsList />
      </RevealSection>

      {/* Bottom Pattern */}
      <section aria-label="Motif Batak bawah peta" className="w-full overflow-hidden mt-10 mb-40">
        <div className="pattern-marquee-track pattern-marquee-reverse flex w-max">
          <div className="pattern-scroll h-16 shrink-0 sm:h-20 lg:h-24" />
          <div className="pattern-scroll h-16 shrink-0 sm:h-20 lg:h-24" />
        </div>
      </section>
    </main>
  );
}
