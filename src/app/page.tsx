import { HeroCarousel } from "@/components/hero-carousel";
import { SectionCarousel } from "../components/section-carousel";
import { DishCarousel } from "@/components/dish-carousel";
import { dishes } from "@/data/tradition-dishes";
import { dailyDishes } from "../data/daily-dishes";

export default function Home() {
  return (
    <main className="flex-1 overflow-x-clip bg-white text-zinc-900">
      {/* Hero Image */}
      <section id="home" className="pb-8 pt-4 sm:pb-10 sm:pt-6 lg:pb-12">
        <HeroCarousel />
      </section>

      {/* Pattern */}
      <section aria-label="Motif Batak berjalan" className="w-full overflow-hidden">
        <div className="pattern-marquee-track flex w-max">
          <div className="pattern-scroll h-16 w-screen shrink-0 sm:h-20 lg:h-24" />
          <div className="pattern-scroll h-16 w-screen shrink-0 sm:h-20 lg:h-24" />
        </div>
      </section>

      {/* History Section */}
      <section id="history" className="mx-auto mt-6 w-full max-w-7xl px-4 py-10 sm:mt-8 sm:px-6 sm:py-12 lg:mt-14 lg:px-8 lg:py-24">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="mt-2 text-3xl font-semibold leading-tight sm:text-4xl text-[#D98F2D]">Sejarah dan Filosofi</h2>
            <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-[#8F1C1D]">Menjelajahi Warisan Budaya Kuliner Batak Toba</h3>
            <p className="mt-6 leading-relaxed text-zinc-600">
              Bagi masyarakat Batak Toba, makanan memiliki peran sentral yang terintegrasi dalam sistem adat istiadat. Hal ini tercermin dalam filosofi Dalihan Na Tolu (DaT) yang menekohkan hubungan timbal balik
              antarindividu. Di antara berbagai kekayaan kuliner yang dimiliki, Arsik ikan Mas menempati posisi yang paling sakral sebagai representasi identitas budaya Toba.
            </p>
            <a href="#" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#8F1C1D] transition-opacity hover:opacity-75">
              Telusuri
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
          <div className="self-start">
            <SectionCarousel />
          </div>
        </div>
      </section>

      <section id="tradition-dishes" className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-12">
        <div className="text-center">
          <h2 className="text-3xl font-bold leading-tight text-[#D93B2D] sm:text-4xl [font-family:var(--font-roboto)]">Hidangan yang Disajikan pada Upacara Adat</h2>
          <p className="mx-auto mt-3 max-w-2xl text-xs font-normal leading-relaxed text-zinc-600 sm:text-base [font-family:var(--font-poppins)]">
            Dokumentasi dan informasi tentang ragam kuliner yang menjadi identitas budaya kuliner Batak Toba.
          </p>
        </div>

        <DishCarousel direction="ltr" items={dishes} />
      </section>

      <section id="daily-dishes" className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-12">
        <div className="text-center">
          <h2 className="text-3xl font-bold leading-tight text-[#D93B2D] sm:text-4xl [font-family:var(--font-roboto)]">Hidangan yang Disajikan Setiap Hari</h2>
          <p className="mx-auto mt-3 max-w-2xl text-xs font-normal leading-relaxed text-zinc-600 sm:text-base [font-family:var(--font-poppins)]">
            Dokumentasi dan informasi tentang ragam kuliner yang menjadi identitas budaya kuliner Batak Toba.
          </p>
        </div>

        <DishCarousel direction="rtl" items={dailyDishes} />
      </section>

      <section id="peta" className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-dashed border-black/10 p-8">
          <h2 className="text-2xl font-semibold">Peta interaktif</h2>
          <p className="mt-3 text-zinc-600">Placeholder untuk map yang bisa digeser dan diperbesar.</p>
        </div>
      </section>

      <section id="kontak" className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-black/5 bg-zinc-50 p-8">
          <h2 className="text-2xl font-semibold">Kontak</h2>
          <p className="mt-3 text-zinc-600">Bagian ini bisa dipakai untuk CTA, form, atau detail kontak.</p>
        </div>
      </section>
    </main>
  );
}
