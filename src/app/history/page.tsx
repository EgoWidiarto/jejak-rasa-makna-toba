"use client";

import Image from "next/image";
import { HistoryCarousel } from "@/components/history-carousel";

export default function HistoryPage() {
  return (
    <main className="flex-1 overflow-x-clip bg-white text-zinc-900 pb-40">
      {/* Hero Section dengan Background Image */}
      <section className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 lg:pt-16">
        <div className="relative w-full h-75 sm:h-100 lg:h-125 overflow-hidden rounded-3xl">
          <Image src="/images/hero-img-3.png" alt="Kuliner Batak Toba" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute bottom-0 left-0 right-0 w-full h-full flex items-end">
            <div className="w-full px-6 sm:px-8 lg:px-12 pb-6 sm:pb-8 lg:pb-12">
              <p className="text-l sm:text-xl lg:text-2xl font-black text-white mb-1 [font-family:var(--font-roboto)]">Menjelajahi Warisan Budaya</p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl text-white italic [font-family:var(--font-cardo)]">Kuliner Batak Toba</h1>
            </div>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="mx-auto w-full max-w-7xl px-4 sm:px-6 sm:py-16 lg:px-8">
        <div className="prose prose-sm sm:prose lg:prose-lg max-w-none">
          <p className="text-zinc-600 leading-relaxed mb-6 indent-8 text-justify [font-family:var(--font-poppins)]">
            &ldquo;Batak Toba merupakan sub-etnis yang memiliki kekayaan budaya luar biasa, mulai dari arsitektur Rumah Bolon yang khas, kain Ulos, hingga tarian Tor-Tor. Keberagaman ini tidak hanya terlihat secara
            visual, tetapi juga menyatu dalam bahasa dan sistem adat yang dijaga erat secara turun-temurun. Hal menarik lainnya adalah bagaimana warisan ini tercermin dalam kulinernya. Bagi masyarakat Toba, setiap
            makanan tradisional bukan sekadar sajian, melainkan identitas yang sarat akan makna dan filosofi hidup.&rdquo;
          </p>
        </div>
      </section>

      {/* History Images Carousel Section */}
      <section className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <HistoryCarousel />
        </div>
      </section>

      {/* Description Section */}
      <section className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="prose prose-sm sm:prose lg:prose-lg max-w-none">
          <p className="text-zinc-600 leading-relaxed mb-6 indent-8 text-justify [font-family:var(--font-poppins)]">
            Seluruh sendi kehidupan masyarakat Batak Toba memang diatur oleh sistem adat yang bertujuan menciptakan harmoni. Adat-istiadat ini terangkum dalam tiga fase besar daur hidup: kelahiran, pernikahan, dan
            kematian. Dalam setiap tahapan krusial ini, makanan hadir bukan hanya sebagai jamuan, melainkan sebagai sistem adat yang krusial. Seperti halnya dalam upacara kelahiran dan perkawinan, kehadiran Arsik Ikan
            Mas menjadi menu wajib yang mempertegas simbol kehidupan dan doa tulus bagi mereka yang menerimanya.
          </p>
          <p className="text-zinc-600 leading-relaxed mb-6 indent-8 text-justify [font-family:var(--font-poppins)]">
            Di antara berbagai kekayaan kuliner yang dimiliki, Arsik Ikan Mas menempati posisi yang paling sakral sebagai representasi identitas budaya Batak Toba. Hidangan ini merupakan elemen wajib dalam upacara daur
            hidup, mulai dari adat kelahiran (tardidi) hingga upacara pernikahan. Lebih dari sekadar sajian fisik, Arsik Ikan Mas mengandung nilai esensial sebagai simbol kehidupan, berkat (pasu-pasu), kemakmuran, dan
            harapan baik. Autentisitas dan kesakralan hidangan ini tercermin dalam aturan penyajiannya yang sangat spesifik, di mana ikan harus disajikan secara utuh tanpa dibelah, dalam jumlah ganjil (1, 3, 5, atau 7),
            dengan posisi kepala menghadap penerima sebagai simbol doa restu dan kesuburan.
          </p>
        </div>
      </section>

      {/* Large Arsik Image Section */}
      <section className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 mt-16">
        <div className="relative w-full h-75 sm:h-100 lg:h-125 overflow-hidden rounded-3xl">
          <Image src="/images/hero-img-1.png" alt="Arsik Ikan Mas yang Disajikan" fill className="object-cover" />
          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 sm:bottom-5 lg:bottom-6">
            <p className="text-sm italic text-[#891B1C] [font-family:var(--font-poppins)] sm:text-base lg:text-lg">Arsik Ikan Mas</p>
          </div>
        </div>
      </section>
    </main>
  );
}
