import { HeroCarousel } from "@/components/hero-carousel";
import { SectionCarousel } from "../components/section-carousel";
import { DishCarousel } from "@/components/dish-carousel";
import { dishes } from "@/data/tradition-dishes";
import { dailyDishes } from "../data/daily-dishes";
import Image from "next/image";
import { LocationMap } from "@/components/location-map";

export default function Home() {
  const herbs = [
    { src: "/images/herbs/herb-1.png", name: "Kecombrang" },
    { src: "/images/herbs/herb-2.png", name: "Andaliman" },
    { src: "/images/herbs/herb-3.png", name: "Asam Cikala" },
    { src: "/images/herbs/herb-4.png", name: "Jeruk Purut" },
    { src: "/images/herbs/herb-5.png", name: "Kincung" },
    { src: "/images/herbs/herb-6.png", name: "Lokio" },
  ];

  return (
    <main className="flex-1 overflow-x-clip bg-white text-zinc-900 pb-60">
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

      {/* Tradition Dishes Section */}
      <section id="tradition-dishes" className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-12">
        <div className="text-center">
          <h2 className="text-3xl font-bold leading-tight text-[#D93B2D] sm:text-4xl [font-family:var(--font-roboto)]">Hidangan yang Disajikan pada Upacara Adat</h2>
          <p className="mx-auto mt-3 max-w-2xl text-xs font-normal leading-relaxed text-zinc-600 sm:text-base [font-family:var(--font-poppins)]">
            Dokumentasi dan informasi tentang ragam kuliner yang menjadi identitas budaya kuliner Batak Toba.
          </p>
        </div>

        <DishCarousel direction="ltr" items={dishes} />
      </section>

      {/* Daily Dishes Section */}
      <section id="daily-dishes" className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-12">
        <div className="text-center">
          <h2 className="text-3xl font-bold leading-tight text-[#D93B2D] sm:text-4xl [font-family:var(--font-roboto)]">Hidangan yang Disajikan Setiap Hari</h2>
          <p className="mx-auto mt-3 max-w-2xl text-xs font-normal leading-relaxed text-zinc-600 sm:text-base [font-family:var(--font-poppins)]">
            Dokumentasi dan informasi tentang ragam kuliner yang menjadi identitas budaya kuliner Batak Toba.
          </p>
        </div>

        <DishCarousel direction="rtl" items={dailyDishes} />
      </section>

      {/* Herbs Section */}
      <section id="herbs" className="mx-auto w-full max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-black [font-family:var(--font-roboto)] sm:text-4xl">Rempah - Rempah</h2>
          <p className="mx-auto mt-2 max-w-3xl text-sm font-normal text-black [font-family:var(--font-poppins)] sm:text-base">
            Makanan khas Batak Toba banyak menggunakan berbagai macam rempah-rempah, namun rempah yang sangat ikonik dan khas, ada pada rempah andaliman.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-2 justify-items-center gap-3 sm:mt-10 sm:grid-cols-3 sm:gap-4">
          {herbs.map((herb, index) => (
            <article key={herb.name} className="group relative w-full max-w-52 h-42.5 shadow-md overflow-hidden rounded-xl border border-black/10 sm:max-w-64 sm:h-55">
              <div className="relative h-full w-full">
                <Image src={herb.src} alt={herb.name} fill priority={index < 3} sizes="(max-width: 640px) 48vw, (max-width: 1024px) 32vw, 300px" className="h-full w-full scale-[1.07] transform-gpu object-cover" />
              </div>

              <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white/20 opacity-0 backdrop-blur-md transition-opacity duration-300 group-hover:opacity-100">
                <span className="rounded-full border border-white/30 bg-white/25 px-4 py-2 text-sm font-medium text-zinc-700 [font-family:var(--font-poppins)] sm:text-base">{herb.name}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Map Location Section */}
      <LocationMap />

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
