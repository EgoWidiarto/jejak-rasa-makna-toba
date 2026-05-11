"use client";

import Link from "next/link";
import Image from "next/image";
import { HistoryCarousel } from "@/components/history-carousel";

export default function HistoryPage() {
  return (
    <main className="flex-1 overflow-x-clip bg-white text-zinc-900">
      {/* Hero Section dengan Background Image */}
      <section className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px] overflow-hidden">
        <Image src="/images/hero-img-3.png" alt="Kuliner Batak Toba" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative h-full flex items-end">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 sm:pb-12 lg:pb-16">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2">Menjelajahi Warisan Budaya Kuliner Batak Toba</h1>
            <p className="text-lg sm:text-xl text-white/90 font-light">Sejarah, Filosofi, dan Makna Mendalam di Balik Setiap Hidangan</p>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="prose prose-sm sm:prose lg:prose-lg max-w-none">
          <p className="text-zinc-600 leading-relaxed mb-6">
            Batak Toba merupakan sub-etnis yang memiliki kekayaan budaya luar biasa, mulai dari arsitektur Rumah Bolon yang memikat hingga inovasi tarian Tor-Tor. Keberagaman ini tentunya juga menyatu dalam bahasa dan
            sistem adat yang dijaga erat secara turun-temurun. Hal menarik darinya adalah bagaimana warisan ini tercermin dalam kulinernya. Bagi masyarakat Toba, setiap makanan tradisional bukan sekadar sajian, melainkan
            identitas yang sarat akan makna dan filosofi hidup.
          </p>
          <p className="text-zinc-600 leading-relaxed mb-6">
            Seluruh sendi kehidupan masyarakat Batak Toba memang diatur oleh sistem adat yang bertujuan menciptakan harmoni bersama. Adat-adat ini terangkum dalam tiga lapisan dalam tata cara hidup. Dalam setiap tahapan
            krusial ini, makanan hadir bukan hanya sebagai jamuan, melainkan sebagai sistem adat yang mengatur kematian, kepemimpinan, pernikahan, dan kekeluargaan. Arsik ikan Mas menjadi menu wajib yang memperdalam
            simbol kehidupan dan filosofi hidup masyarakat Toba.
          </p>
          <p className="text-zinc-600 leading-relaxed">
            Di antara berbagai kekayaan kuliner yang dimiliki, Arsik ikan Mas menempati posisi yang paling sakral sebagai representasi identitas budaya Batak Toba. Hidangan ini merupakan elemen wajib dalam upacara daur
            hidup, mulai dari adat kelahiran (tardidi) hingga upacara pernikahan (tardidi). Lebih dari itu, setiap aspek dari penyajian arsik ikan Mas mengandung nilai essensial sebagai simbol kehidupan, berkat
            (pasu-pasu), keakraban, dan harapan baik. Autentisitas dari kesakralan hidangan penyajianya yang sangat spesifik, di mana ikan harus dibedah secara utuh tanpa dibedah, di jumlah ganji (1, 3, 5, atau 7),
            dengan posisi menghadap penerima sebagai simbol doa restu demi kesuksesan.
          </p>
        </div>
      </section>

      {/* History Images Carousel Section */}
      <section className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="flex justify-center">
          <HistoryCarousel />
        </div>
      </section>

      {/* Main Content Sections */}
      <section className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-24 space-y-16">
        {/* Section 1: Dalihan Na Tolu */}
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-[#D98F2D] sm:text-4xl">Dalihan Na Tolu (DaT)</h2>
            <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-[#8F1C1D]">Filosofi Hubungan Timbal Balik</h3>
            <p className="leading-relaxed text-zinc-600">
              Bagi masyarakat Batak Toba, makanan memiliki peran sentral yang terintegrasi dalam sistem adat istiadat. Hal ini tercermin dalam filosofi Dalihan Na Tolu (DaT) yang menekankan hubungan timbal balik
              antarindividu.
            </p>
            <p className="leading-relaxed text-zinc-600">Konsep ini melibatkan tiga pilar utama dalam kehidupan sosial Batak Toba:</p>
            <ul className="space-y-2 text-zinc-600">
              <li className="flex gap-3">
                <span className="font-semibold text-[#8F1C1D]">•</span>
                <span>
                  <strong>Mora</strong> - Kelompok keluarga penggaris (garis ayah)
                </span>
              </li>
              <li className="flex gap-3">
                <span className="font-semibold text-[#8F1C1D]">•</span>
                <span>
                  <strong>Boru</strong> - Kelompok keluarga perempuan
                </span>
              </li>
              <li className="flex gap-3">
                <span className="font-semibold text-[#8F1C1D]">•</span>
                <span>
                  <strong>Dongan Tubu</strong> - Kelompok keluarga yang memiliki hubungan darah yang sama
                </span>
              </li>
            </ul>
          </div>
          <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
            <Image src="/images/tradition-dishes/arsik.jpeg" alt="Dalihan Na Tolu" fill className="object-cover" />
          </div>
        </div>

        {/* Section 2: Arsik Ikan Mas */}
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative h-96 rounded-lg overflow-hidden shadow-lg order-last lg:order-first">
            <Image src="/images/tradition-dishes/arsik.jpeg" alt="Arsik Ikan Mas" fill className="object-cover" />
          </div>
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-[#D98F2D] sm:text-4xl">Arsik Ikan Mas</h2>
            <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-[#8F1C1D]">Hidangan Paling Sakral</h3>
            <p className="leading-relaxed text-zinc-600">
              Arsik ikan Mas menempati posisi yang paling sakral di antara berbagai kekayaan kuliner Batak Toba. Hidangan ini bukan hanya sekadar makanan, melainkan representasi identitas budaya yang kuat.
            </p>
            <p className="leading-relaxed text-zinc-600">
              Ikan Mas dalam arsik dipilih karena dianggap memiliki makna simbolis yang mendalam dalam adat Batak. Persiapan dan penyajian arsik mengikuti protokol adat yang ketat, mencerminkan nilai-nilai kehormatan dan
              penghargaan.
            </p>
            <p className="leading-relaxed text-zinc-600">
              Rempah-rempah yang digunakan dalam arsik seperti andaliman, kecombrang, dan asam cikala dipilih dengan cermat untuk menciptakan cita rasa yang kompleks dan bermakna.
            </p>
          </div>
        </div>

        {/* Section 3: Filosofi Kuliner */}
        <div className="rounded-lg bg-gradient-to-r from-[#8F1C1D]/10 to-[#D98F2D]/10 p-8 lg:p-12">
          <h2 className="text-3xl font-bold text-[#8F1C1D] sm:text-4xl mb-6">Filosofi Kuliner Batak Toba</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="space-y-3">
              <h3 className="font-semibold text-[#D98F2D] text-lg">Kehormatan</h3>
              <p className="text-sm leading-relaxed text-zinc-600">Setiap hidangan disajikan sebagai bentuk penghormatan kepada tamu dan keluarga.</p>
            </div>
            <div className="space-y-3">
              <h3 className="font-semibold text-[#D98F2D] text-lg">Solidaritas</h3>
              <p className="text-sm leading-relaxed text-zinc-600">Makanan bersama memperkuat ikatan sosial dan saling ketergantungan antaranggota masyarakat.</p>
            </div>
            <div className="space-y-3">
              <h3 className="font-semibold text-[#D98F2D] text-lg">Spiritualitas</h3>
              <p className="text-sm leading-relaxed text-zinc-600">Ritual kuliner dihubungkan dengan kepercayaan animisme dan hormat kepada leluhur.</p>
            </div>
            <div className="space-y-3">
              <h3 className="font-semibold text-[#D98F2D] text-lg">Keberlanjutan</h3>
              <p className="text-sm leading-relaxed text-zinc-600">Penggunaan rempah-rempah lokal menjaga kelestarian kearifan lokal dan sumber daya alam.</p>
            </div>
            <div className="space-y-3">
              <h3 className="font-semibold text-[#D98F2D] text-lg">Identitas</h3>
              <p className="text-sm leading-relaxed text-zinc-600">Kuliner menjadi penanda identitas yang membedakan Batak Toba dari komunitas lain.</p>
            </div>
            <div className="space-y-3">
              <h3 className="font-semibold text-[#D98F2D] text-lg">Tradisi</h3>
              <p className="text-sm leading-relaxed text-zinc-600">Resep dan cara penyajian diwariskan turun-temurun sebagai warisan budaya yang berharga.</p>
            </div>
          </div>
        </div>

        {/* Section 4: Upacara dan Hidangan */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-[#8F1C1D] sm:text-4xl">Upacara Adat dan Hidangan Khas</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-lg border border-zinc-200 p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-semibold text-[#D98F2D] text-lg mb-3">Pernikahan (Parjamuan)</h3>
              <p className="text-sm leading-relaxed text-zinc-600">Acara pernikahan Batak ditandai dengan sajian hidangan istimewa yang mencerminkan kebersamaan dua keluarga besar.</p>
            </div>
            <div className="rounded-lg border border-zinc-200 p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-semibold text-[#D98F2D] text-lg mb-3">Kematian (Pariwas)</h3>
              <p className="text-sm leading-relaxed text-zinc-600">Acara penghormatan arwah disertai dengan hidangan spesial sebagai bentuk penghargaan dan doa untuk orang yang telah meninggal.</p>
            </div>
            <div className="rounded-lg border border-zinc-200 p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-semibold text-[#D98F2D] text-lg mb-3">Kelahiran</h3>
              <p className="text-sm leading-relaxed text-zinc-600">Perayaan kelahiran bayi dilengkapi dengan hidangan khusus yang dipercaya membawa berkah dan perlindungan.</p>
            </div>
            <div className="rounded-lg border border-zinc-200 p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-semibold text-[#D98F2D] text-lg mb-3">Ongkos-Ogkosan</h3>
              <p className="text-sm leading-relaxed text-zinc-600">Acara pengangkatan anak dilakukan dengan ritual khusus dan sajian hidangan sebagai simbol penerimaan resmi dalam keluarga.</p>
            </div>
          </div>
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
