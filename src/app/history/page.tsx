"use client";

import Image from "next/image";
import { HistoryCarousel } from "@/components/history-carousel";
import { RevealSection } from "@/components/reveal-section";
import { HeroHistoryCarousel } from "@/components/hero-history-caousel";

export default function HistoryPage() {
  return (
    <main className="flex-1 overflow-x-clip bg-[#F4F4F4] text-zinc-900 pb-40">
      {/* Judul di luar card hero */}
      <RevealSection as="div" className="mt-8 mb-6 pt-10" delay={0.05}>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center [font-family:var(--font-roboto)]">Sejarah dan Makna Dibalik Sajian</h1>
      </RevealSection>
      {/* Hero Section dalam bentuk card */}
      <RevealSection className="mx-auto w-[90%] max-w-6xl rounded-3xl bg-white shadow-md px-5 sm:px-10 lg:px-14 pt-10 mb-10" delay={0.08}>
        <HeroHistoryCarousel />

        <div className="px-2 sm:px-4 lg:px-6 py-6 sm:py-8">
          <p className="indent-8 text-justify leading-relaxed text-xs lg:text-lg text-zinc-600 [font-family:var(--font-poppins)]">
            &ldquo; Batak Toba merupakan sub-etnis yang memiliki kekayaan budaya luar biasa, mulai dari arsitektur Rumah Bolon yang khas, kain Ulos, hingga tarian Tor-Tor. Keberagaman ini tidak hanya terlihat secara
            visual, tetapi juga menyatu dalam bahasa dan sistem adat yang dijaga erat secara turun-temurun. Hal menarik lainnya adalah bagaimana warisan ini tercermin dalam kulinernya. Bagi masyarakat Toba, setiap
            makanan tradisional bukan sekadar sajian, melainkan identitas yang sarat akan makna dan filosofi hidup.&rdquo;
          </p>
        </div>
      </RevealSection>

      {/* History Images Carousel Section */}
      <RevealSection className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 pt-10" delay={0.1}>
        <div className="flex justify-center">
          <HistoryCarousel />
        </div>
      </RevealSection>

      {/* Description and Large Arsik Image Section in Card */}
      <RevealSection className="mx-auto w-[90%] max-w-6xl rounded-3xl bg-white shadow-md px-5 sm:px-10 lg:px-14 pt-10 mt-12 mb-10" delay={0.12}>
        <div className="relative w-full h-75 sm:h-100 lg:h-125 overflow-hidden rounded-3xl mb-6 sm:mb-8">
          <Image src="/images/history/bottom-img.png" alt="Arsik Ikan Mas yang Disajikan" fill className="object-cover" />
        </div>

        <div className="px-2 sm:px-4 lg:px-6 pb-6 sm:pb-8">
          <p className="text-zinc-600 leading-relaxed mb-6 indent-8 text-justify [font-family:var(--font-poppins)]">
            Di antara berbagai kekayaan kuliner yang dimiliki, Arsik Ikan Mas menempati posisi yang paling sakral sebagai representasi identitas budaya Batak Toba. Hidangan ini merupakan elemen wajib dalam upacara daur
            hidup, mulai dari adat kelahiran (tardidi) hingga upacara pernikahan. Lebih dari sekadar sajian fisik, Arsik Ikan Mas mengandung nilai esensial sebagai simbol kehidupan, berkat (pasu-pasu), kemakmuran, dan
            harapan baik. Autentisitas dan kesakralan hidangan ini tercermin dalam aturan penyajiannya yang sangat spesifik, di mana ikan harus disajikan secara utuh tanpa dibelah, dalam jumlah ganjil (1, 3, 5, atau 7),
            dengan posisi kepala menghadap penerima sebagai simbol doa restu dan kesuburan.
          </p>
        </div>
      </RevealSection>
    </main>
  );
}
