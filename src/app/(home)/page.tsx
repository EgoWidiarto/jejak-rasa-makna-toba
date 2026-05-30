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
      <RevealSection id="home" className="pb-8 pt-4 sm:pb-10 sm:pt-6 lg:pb-12">
        <HeroCarousel />
      </RevealSection>

      {/* Pattern */}
      <RevealSection aria-label="Motif Batak berjalan" className="w-full overflow-hidden" delay={0.05}>
        <div className="pattern-marquee-track flex w-max">
          <div className="pattern-scroll h-16 w-screen shrink-0 sm:h-20 lg:h-24" />
          <div className="pattern-scroll h-16 w-screen shrink-0 sm:h-20 lg:h-24" />
        </div>
      </RevealSection>

      {/* History Section */}
      <RevealSection id="history" className="mx-auto mt-6 w-full max-w-7xl scroll-mt-28 px-4 py-10 sm:mt-8 sm:px-6 sm:py-12 lg:mt-14 lg:px-8 lg:py-24" delay={0.05}>
        <div className="rounded-3xl bg-[#FFF] p-6 shadow-sm sm:p-8 lg:p-10">
          <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="mt-2 text-3xl font-semibold leading-tight sm:text-4xl text-[#D98F2D]">Sejarah dan Filosofi</h2>
              <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-[#8F1C1D]">Menjelajahi Warisan Budaya Kuliner Batak Toba</h3>
              <p className="mt-6 leading-relaxed text-zinc-600">
                Bagi masyarakat Batak Toba, makanan memiliki peran sentral yang terintegrasi dalam sistem adat istiadat. Hal ini tercermin dalam filosofi Dalihan Na Tolu (DaT) yang menekohkan hubungan timbal balik
                antarindividu. Di antara berbagai kekayaan kuliner yang dimiliki, Arsik ikan Mas menempati posisi yang paling sakral sebagai representasi identitas budaya Toba.
              </p>
              <a href="/history" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#8F1C1D] transition-opacity hover:opacity-75">
                Telusuri
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
            <div className="self-start w-full max-w-105 lg:max-w-115">
              <SectionCarousel />
            </div>
          </div>
        </div>
      </RevealSection>

      {/* Tradition Dishes Section */}
      <RevealSection id="tradition-dishes" className="mx-auto w-full max-w-7xl scroll-mt-28 px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-12" delay={0.08}>
        <div className="text-center">
          <h2 className="text-3xl font-bold leading-tight text-[#D93B2D] sm:text-4xl [font-family:var(--font-roboto)]">Hidangan yang Disajikan pada Upacara Adat</h2>
          <p className="mx-auto mt-3 max-w-2xl text-xs font-normal leading-relaxed text-zinc-600 sm:text-base [font-family:var(--font-poppins)]">
            Dokumentasi dan informasi tentang ragam kuliner yang menjadi identitas budaya kuliner Batak Toba.
          </p>
        </div>

        <DishCarousel direction="ltr" items={dishes} section="tradition-dishes" />
      </RevealSection>

      {/* Daily Dishes Section */}
      <RevealSection id="daily-dishes" className="mx-auto w-full max-w-7xl scroll-mt-28 px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-12" delay={0.08}>
        <div className="text-center">
          <h2 className="text-3xl font-bold leading-tight text-[#D93B2D] sm:text-4xl [font-family:var(--font-roboto)]">Hidangan yang Disajikan Setiap Hari</h2>
          <p className="mx-auto mt-3 max-w-2xl text-xs font-normal leading-relaxed text-zinc-600 sm:text-base [font-family:var(--font-poppins)]">
            Dokumentasi dan informasi tentang ragam kuliner yang menjadi identitas budaya kuliner Batak Toba.
          </p>
        </div>

        <DishCarousel direction="rtl" items={dailyDishes} section="daily-dishes" />
      </RevealSection>

      <RevealSection as="div">
        <HerbsSection />
      </RevealSection>

      {/* Map Location Section */}
      <RevealSection as="div">
        <LocationMap />
      </RevealSection>

      {/* Testimonials Section */}
      <RevealSection id="testimonials" className="mx-auto w-full max-w-7xl scroll-mt-28 px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-12" delay={0.08}>
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#D98F2D]">Apresiasi Budaya</p>
          <h2 className="mt-2 text-3xl font-bold leading-tight text-[#B02627] sm:text-4xl [font-family:var(--font-roboto)]">Komentar Penikmat Budaya</h2>
        </div>

        <TestimonialsList />
      </RevealSection>

      {/* Bottom Pattern */}
      <section aria-label="Motif Batak bawah peta" className="w-full overflow-hidden mt-10">
        <div className="pattern-marquee-track pattern-marquee-reverse flex w-max">
          <div className="pattern-scroll h-16 w-screen shrink-0 sm:h-20 lg:h-24" />
          <div className="pattern-scroll h-16 w-screen shrink-0 sm:h-20 lg:h-24" />
        </div>
      </section>
    </main>
  );
}
