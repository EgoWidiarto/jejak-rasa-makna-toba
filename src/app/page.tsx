export default function Home() {
  return (
    <main className="flex-1 bg-white text-zinc-900">
      <section id="home" className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 py-20 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#8F1C1D]">Jejak Rasa Makna Toba</p>
        <h1 className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">Website interaktif untuk menampilkan cerita, visual, dan eksplorasi pengalaman budaya.</h1>
        <p className="max-w-2xl text-base leading-8 text-zinc-600 sm:text-lg">
          Navbar sudah aktif dengan logo website dan warna link utama sesuai identitas brand. Bagian lain bisa dilanjutkan ke carousel, galeri, dan peta interaktif.
        </p>
      </section>

      <section aria-label="Motif Batak berjalan" className="w-full overflow-hidden">
        <div className="pattern-scroll h-16 w-full sm:h-20 lg:h-24" />
      </section>

      <section id="tentang" className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-black/5 bg-zinc-50 p-8">
          <h2 className="text-2xl font-semibold">Tentang proyek</h2>
          <p className="mt-3 max-w-3xl text-zinc-600">Area ini siap diisi konten utama untuk memperkenalkan brand, cerita, dan elemen visual.</p>
        </div>
      </section>

      <section id="galeri" className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-dashed border-black/10 p-8">
          <h2 className="text-2xl font-semibold">Galeri</h2>
          <p className="mt-3 text-zinc-600">Nanti bisa diisi carousel gambar dan highlight konten.</p>
        </div>
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
