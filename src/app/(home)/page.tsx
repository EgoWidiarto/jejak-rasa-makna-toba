import { HeroCarousel } from "@/components/hero-carousel";
import { SectionCarousel } from "../../components/section-carousel";
import { DishCarousel } from "@/components/dish-carousel";
import { dishes } from "@/data/tradition-dishes";
import { dailyDishes } from "../../data/daily-dishes";
import { LocationMap } from "@/components/location-map";
import { HerbsSection } from "@/components/herbs-section";
import { RevealSection } from "@/components/reveal-section";
import { TestimonialsList } from "@/components/testimonials-list";

export default function Home() {
  return (
    <main className="flex-1 overflow-x-clip bg-[#F4F4F4] text-zinc-900 pb-20">
      {/* Hero Image */}
      <RevealSection id="home" className="pb-8 pt-4 sm:pb-10 sm:pt-6 md:pt-8 lg:pt-10">
        <HeroCarousel />
      </RevealSection>

      {/* Pattern */}
      <RevealSection aria-label="Motif Batak berjalan" className="w-full overflow-hidden pt-10" delay={0.05}>
        <div className="pattern-marquee-track flex w-max">
          <div className="pattern-scroll h-16 w-screen shrink-0 sm:h-20 lg:h-24" />
          <div className="pattern-scroll h-16 w-screen shrink-0 sm:h-20 lg:h-24" />
        </div>
      </RevealSection>

      {/* History Section */}
      <RevealSection id="history" className="mx-auto mt-6 w-full max-w-7xl scroll-mt-28 px-4 pb-10 sm:mt-8 sm:px-6 sm:pb-12 lg:mt-14 lg:px-8 lg:pb-24 pt-10" delay={0.05}>
        <div className="rounded-3xl bg-[#FFF] p-3 shadow-sm sm:p-4 lg:p-6">
          <div className="grid items-start gap-4 lg:grid-cols-3 lg:gap-6">
            <div className="lg:col-span-1">
              <h2 className="mt-1 text-[22px] sm:text-[28px] md:text-[36px] lg:text-[42px] font-roboto-bold text-[#000000] leading-tight">Sejarah dan Filosofi</h2>
              <h3 className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[18px] font-roboto-medium uppercase tracking-[0.12em] text-[#D98F2D]">Menjelajahi Warisan Budaya Kuliner Batak Toba</h3>
              <p className="mt-4 sm:mt-6 leading-relaxed text-[#282F26] text-[14px] sm:text-[16px] md:text-[16px] font-poppins-regular">
                Bagi masyarakat Batak Toba, makanan memiliki peran sentral yang terintegrasi dalam sistem adat istiadat untuk menciptakan keteraturan dan kerukunan. Hal ini tercermin dalam falsafah{" "}
                <span className="text-[#B02627] font-poppins-italic text-[14px] sm:text-[16px] md:text-[16px]">Dalihan Na Tolu (DNT)</span>
                yang menekankan hubungan timbal balik antarindividu.
              </p>
              <a href="/history" className="mt-4 inline-flex items-center gap-2 text-[10px] font-poppins-regular text-[#B02627] transition-opacity hover:opacity-75">
                Telusuri
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
            <div className="self-start w-full lg:col-span-2">
              <SectionCarousel />
            </div>
          </div>
        </div>
      </RevealSection>

      {/* Tradition Dishes Section */}
      <RevealSection id="tradition-dishes" className="mx-auto w-full max-w-7xl scroll-mt-28 px-4 pb-6 sm:px-6 sm:pb-8 lg:px-8 lg:pb-12 pt-10" delay={0.08}>
        <div className="text-center">
          <h2 className="text-3xl font-bold leading-tight text-[#D93B2D] sm:text-4xl [font-family:var(--font-roboto)]">Hidangan yang Disajikan pada Upacara Adat</h2>
          <p className="mx-auto mt-3 max-w-2xl text-xs font-normal leading-relaxed text-zinc-600 sm:text-base [font-family:var(--font-poppins)]">
            Dokumentasi dan informasi tentang ragam kuliner yang menjadi identitas budaya kuliner Batak Toba.
          </p>
        </div>

        <DishCarousel direction="ltr" items={dishes} section="tradition-dishes" />
      </RevealSection>

      {/* Daily Dishes Section */}
      <RevealSection id="daily-dishes" className="mx-auto w-full max-w-7xl scroll-mt-28 px-4 pb-6 sm:px-6 sm:pb-8 lg:px-8 lg:pb-12 pt-10" delay={0.08}>
        <div className="text-center">
          <h2 className="text-3xl font-bold leading-tight text-[#D93B2D] sm:text-4xl [font-family:var(--font-roboto)]">Hidangan yang Disajikan Setiap Hari</h2>
          <p className="mx-auto mt-3 max-w-2xl text-xs font-normal leading-relaxed text-zinc-600 sm:text-base [font-family:var(--font-poppins)]">
            Dokumentasi dan informasi tentang ragam kuliner yang menjadi identitas budaya kuliner Batak Toba.
          </p>
        </div>

        <DishCarousel direction="rtl" items={dailyDishes} section="daily-dishes" />
      </RevealSection>

      <RevealSection as="div" className="pt-10">
        <HerbsSection />
      </RevealSection>

      {/* Map Location Section */}
      <RevealSection as="div" className="pt-10">
        <LocationMap />
      </RevealSection>

      {/* Testimonials Section */}
      <RevealSection id="testimonials" className="mx-auto w-full max-w-7xl scroll-mt-28 px-4 pb-6 sm:px-6 sm:pb-8 lg:px-8 lg:pb-12 pt-10" delay={0.08}>
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#D98F2D]">Apresiasi Budaya</p>
          <h2 className="mt-2 text-3xl font-bold leading-tight text-[#B02627] sm:text-4xl [font-family:var(--font-roboto)]">Komentar Penikmat Budaya</h2>
        </div>

        <TestimonialsList />
      </RevealSection>

      {/* Bottom Pattern */}
      <section aria-label="Motif Batak bawah peta" className="w-full overflow-hidden mt-10 mb-40">
        <div className="pattern-marquee-track pattern-marquee-reverse flex w-max">
          <div className="pattern-scroll h-16 w-screen shrink-0 sm:h-20 lg:h-24" />
          <div className="pattern-scroll h-16 w-screen shrink-0 sm:h-20 lg:h-24" />
        </div>
      </section>
    </main>
  );
}
