"use client";

import Link from "next/link";
import Image from "next/image";
import { HistoryCarousel } from "@/components/history-carousel";

export default function HistoryPage() {
  return (
    <main className="flex-1 overflow-x-clip bg-white text-zinc-900">
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
          <p className="text-zinc-600 leading-relaxed mb-6 [font-family:var(--font-poppins)]">
            Batak Toba merupakan sub-etnis yang memiliki kekayaan budaya luar biasa, mulai dari arsitektur Rumah Bolon yang khas, kain Ulos, hingga tarian Tor-Tor. Keberagaman ini tidak hanya terlihat secara visual,
            tetapi juga menyatu dalam bahasa dan sistem adat yang dijaga erat secara turun-temurun. Hal menarik lainnya adalah bagaimana warisan ini tercermin dalam kulinernya. Bagi masyarakat Toba, setiap makanan
            tradisional bukan sekadar sajian, melainkan identitas yang sarat akan makna dan filosofi hidup.
          </p>
        </div>
      </section>

      {/* History Images Carousel Section */}
      <section className="mx-auto w-full max-w-7xl px-4 pb-12 sm:px-6 sm:pb-16 lg:px-8 lg:pb-20">
        <div className="flex justify-center">
          <HistoryCarousel />
        </div>
      </section>

      {/* Large Arsik Image Section */}
      <section className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px] overflow-hidden mt-16">
        <Image src="/images/tradition-dishes/arsik.jpeg" alt="Arsik Ikan Mas yang Disajikan" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/20" />
      </section>

      {/* CTA Section */}
      <section className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
        <div className="rounded-lg bg-[#8F1C1D]/5 p-8 lg:p-12 text-center">
          <h2 className="text-3xl font-bold text-[#8F1C1D] sm:text-4xl mb-4">Jelajahi Lebih Lanjut</h2>
          <p className="mx-auto max-w-2xl text-zinc-600 mb-8">Temukan lebih banyak informasi tentang hidangan tradisional, rempah-rempah, dan warisan kuliner Batak Toba di halaman utama kami.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#tradition-dishes" className="inline-flex items-center justify-center rounded-lg bg-[#8F1C1D] px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90">
              Lihat Hidangan Tradisional
            </Link>
            <Link href="/" className="inline-flex items-center justify-center rounded-lg border border-[#8F1C1D] px-6 py-3 text-sm font-semibold text-[#8F1C1D] transition-colors hover:bg-[#8F1C1D]/5">
              Kembali ke Beranda
            </Link>
          </div>
        </div>
      </section>

      {/* Bottom Pattern */}
      <section aria-label="Motif Batak bawah" className="w-full overflow-hidden mt-10">
        <div className="pattern-marquee-track pattern-marquee-reverse flex w-max">
          <div className="pattern-scroll h-16 w-screen shrink-0 sm:h-20 lg:h-24" />
          <div className="pattern-scroll h-16 w-screen shrink-0 sm:h-20 lg:h-24" />
        </div>
      </section>
    </main>
  );
}
