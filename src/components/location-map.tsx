import Image from "next/image";

export function LocationMap() {
  return (
    <section id="location" className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="overflow-hidden rounded-[28px] border border-black/5 bg-[#f1f1ef] p-3 shadow-[0_12px_40px_rgba(0,0,0,0.08)] sm:p-4 lg:p-5">
        <div className="relative min-h-124 overflow-hidden rounded-3xl bg-[#ddebf3]">
          <iframe
            title="Peta lokasi Toba"
            src="https://www.openstreetmap.org/export/embed.html?bbox=98.86%2C2.12%2C99.23%2C2.53&layer=mapnik&marker=2.3307%2C99.0615"
            className="absolute inset-0 h-full w-full border-0"
            loading="lazy"
          />

          <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-white/12 via-transparent to-black/5" />

          <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-start px-5 text-center sm:px-10 lg:pl-14">
            <div className="max-w-xl rounded-[28px] border border-white/25 bg-white/10 p-6 shadow-[0_10px_28px_rgba(0,0,0,0.08)] backdrop-blur-[2px] sm:translate-x-6 sm:p-8 lg:translate-x-10">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-white/65 shadow-[0_8px_24px_rgba(0,0,0,0.10)]">
                <Image src="/icon/logo-jejak-rasa.png" alt="Lokasi Toba" width={34} height={34} className="h-8 w-8 object-contain" />
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-[#2C2424] [font-family:var(--font-roboto)] sm:text-5xl">Letak Geografis</h2>
              <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-[#2C2424] [font-family:var(--font-poppins)] sm:text-base">
                Wilayah Sumatera Utara yang didiami oleh suku Batak yaitu Batak Toba, Batak Karo, Batak Simalungun, Batak Pakpak, Batak Mandailing, Batak Angkola.
              </p>

              <div className="mt-7 flex justify-center">
                <a
                  href="https://www.openstreetmap.org/?mlat=2.6127&mlon=98.8203#map=9/2.6127/98.8203"
                  target="_blank"
                  rel="noreferrer"
                  className="pointer-events-auto inline-flex items-center rounded-lg bg-[#D9D9D9]/80 px-5 py-2.5 text-sm font-normal text-[#B02627] transition-transform duration-200 hover:scale-[1.02] [font-family:var(--font-poppins)]">
                  Lihat peta budaya
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
