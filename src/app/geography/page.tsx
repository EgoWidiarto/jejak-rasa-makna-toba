import Image from "next/image";
import InteractiveMap from "@/components/interactive-map";
import { RevealSection } from "@/components/reveal-section";

export default function GeographyPage() {
  const description = `Pulau Sumatera merupakan salah satu wilayah di Indonesia yang memiliki kekayaan budaya luar biasa dengan keragaman suku bangsa yang mendiaminya. Di antara sekian banyak etnis tersebut, suku Batak menjadi kelompok masyarakat yang paling dominan di Provinsi Sumatera Utara. Penting untuk dipahami bahwa suku Batak bukanlah sebuah entitas tunggal, melainkan sebuah rumpun besar yang terdiri dari beberapa sub-etnis. Setiap cabang ini memiliki identitas, adat istiadat, dialek, serta wilayah persebaran geografis yang spesifik dan berbeda satu sama lain.
\nNah... Secara garis besar, suku Batak terbagi ke dalam enam kelompok utama, yaitu Batak Mandailing, Batak Karo, Batak Simalungun, Batak Pakpak Dairi, Batak Toba, dan Batak Angkola (Nelson, 2012). Masing-masing kelompok tersebut menetap di wilayah teritorial tertentu yang memengaruhi corak tradisi mereka. Batak Toba, sebagai salah satu sub-etnis terbesar, mendiami wilayah yang mengelilingi Danau Toba, meliputi Kabupaten Tapanuli Utara, Kabupaten Toba Samosir, Kabupaten Samosir, dan Kabupaten Humbang Hasundutan.
\nSecara lebih spesifik, E.H. Tambunan dalam bukunya yang berjudul Sekelumit Mengenai Masyarakat Batak Toba dan Kebudayaannya menjelaskan bahwa inti dari wilayah Toba mencakup area Kabupaten Tapanuli Utara.  Wilayah ini terletak  di sebelah tenggara Kota Medan dengan Tarutung sebagai kota terbesar sekaligus ibu kota kabupaten yang berfungsi sebagai pusat pemerintahan.
\nMeski sering disebut sebagai satu kesatuan, suku Batak sebenarnya terbagi ke dalam beberapa kelompok atau cabang yang masing-masing menetap di wilayah teritorial tertentu. Pembagian wilayah ini tidak hanya mencerminkan letak geografis, tetapi juga perbedaan dialek dan tradisi yang menyertainya. Mari kita lihat dibawah, letak geografis persebaran suku Batak di Sumatera Utara.`;

  return (
    <main className="min-h-screen bg-[#F4F4F4] py-12">
      <RevealSection as="div" className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8 pt-10" delay={0.05}>
        <h1 className="mb-6 text-center text-3xl font-bold text-black [font-family:var(--font-roboto)]">Letak Geografi Suku Batak</h1>

        <div className="rounded-lg bg-white p-6 shadow-sm sm:p-8 lg:p-10">
          <div className="flex flex-col gap-6">
            <div className="w-full overflow-hidden rounded-lg">
              <Image src="/images/hero-img-3.png" alt="Letak Geografi" width={1200} height={700} className="h-auto w-full rounded-lg object-cover" priority />
            </div>

            <div>
              {description.split("\n\n").map((para, idx) => (
                <p key={idx} className="mb-4 text-sm leading-relaxed text-[#2C2424] [font-family:var(--font-poppins)]" style={{ textAlign: "justify", textIndent: "2rem" }}>
                  {para}
                </p>
              ))}
            </div>
          </div>
        </div>
      </RevealSection>

      <RevealSection as="div" className="mx-auto mt-12 w-full max-w-7xl px-4 pb-20 sm:px-6 lg:px-8 pt-10" delay={0.1}>
        <div className="flex flex-col lg:flex-row lg:items-start">
          <div className="min-w-0 flex-1 justify-end">
            <InteractiveMap fullBleed={false} />
          </div>

          <div className="w-full lg:w-70 lg:pt-0">
            <h2 className="text-2xl font-bold text-black [font-family:var(--font-roboto)] lg:sticky lg:top-3 lg:mt-0">Peta Interaktif Persebaran Suku Batak</h2>
          </div>
        </div>
      </RevealSection>
    </main>
  );
}
