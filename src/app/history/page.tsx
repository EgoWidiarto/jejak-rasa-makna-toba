"use client";

import Image from "next/image";
import { HistoryCarousel } from "@/components/history-carousel";
import { RevealSection } from "@/components/reveal-section";

export default function HistoryPage() {
  return (
    <main className="flex-1 overflow-x-clip bg-[#F4F4F4] text-zinc-900 pb-40">
      {/* Judul di luar card hero */}
      <RevealSection as="div" className="mt-8 mb-6" delay={0.05}>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center [font-family:var(--font-roboto)]">Sejarah dan Makna Dibalik Sajian</h1>
      </RevealSection>
      {/* Hero Section dalam bentuk card */}
      <RevealSection className="mx-auto w-[90%] max-w-6xl rounded-3xl bg-white shadow-md px-5 sm:px-10 lg:px-14 pt-8 sm:pt-12 lg:pt-16 mb-10" delay={0.08}>
        <div className="relative w-full h-75 sm:h-100 lg:h-125 overflow-hidden rounded-3xl">
          <Image src="/images/hero-img-3.png" alt="Kuliner Batak Toba" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute bottom-0 left-0 right-0 w-full h-full flex items-end">
            <div className="w-full px-6 sm:px-8 lg:px-12 pb-6 sm:pb-8 lg:pb-12">
              <p className="text-l sm:text-xl lg:text-2xl font-black text-white mb-1 [font-family:var(--font-roboto)]">Menjelajahi Warisan Budaya</p>
              <span className="text-3xl sm:text-4xl lg:text-5xl text-white italic font-['Atziluth']">Kuliner Batak Toba</span>
            </div>
          </div>
        </div>

        <div className="px-2 sm:px-4 lg:px-6 py-6 sm:py-8">
          <p className="indent-8 text-justify leading-relaxed text-zinc-600 [font-family:var(--font-poppins)]">
            &ldquo; Batak Toba merupakan sub-etnis yang memiliki kekayaan budaya luar biasa, mulai dari arsitektur Rumah Bolon yang khas, kain Ulos, hingga tarian Tor-Tor. Keberagaman ini tidak hanya terlihat secara
            visual, tetapi juga menyatu dalam bahasa dan sistem adat yang dijaga erat secara turun-temurun. Hal menarik lainnya adalah bagaimana warisan ini tercermin dalam kulinernya. Bagi masyarakat Toba, setiap
            makanan tradisional bukan sekadar sajian, melainkan identitas yang sarat akan makna dan filosofi hidup.&rdquo;
          </p>
        </div>
      </RevealSection>

      {/* History Images Carousel Section */}
      <RevealSection className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8" delay={0.1}>
        <div className="flex justify-center">
          <HistoryCarousel />
        </div>
      </RevealSection>

      {/* Description and Large Arsik Image Section in Card */}
      <RevealSection className="mx-auto w-[90%] max-w-6xl rounded-3xl bg-white shadow-md px-5 sm:px-10 lg:px-14 pt-8 sm:pt-12 lg:pt-16 mt-12 mb-10" delay={0.12}>
        <div className="relative w-full h-75 sm:h-100 lg:h-125 overflow-hidden rounded-3xl mb-6 sm:mb-8">
          <Image src="/images/hero-img-1.png" alt="Arsik Ikan Mas yang Disajikan" fill className="object-cover" />
          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 sm:bottom-5 lg:bottom-6">
            <p className="text-sm italic text-[#891B1C] [font-family:var(--font-poppins)] sm:text-base lg:text-lg">Arsik Ikan Mas</p>
          </div>
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
