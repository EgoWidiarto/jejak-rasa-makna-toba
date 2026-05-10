
Jejak Rasa Makna Toba adalah website interaktif yang dirancang untuk mendukung presentasi visual dan narasi budaya dalam konteks proyek DKV. Project ini disiapkan sebagai fondasi website yang akan menampilkan pengalaman eksploratif, identitas visual yang kuat, serta elemen interaktif seperti carousel dan peta.

## Ringkasan Project

Website ini dibangun dengan pendekatan modular agar mudah dikembangkan untuk kebutuhan presentasi, promosi, maupun publikasi konten budaya. Struktur dasarnya sudah menyiapkan area utama untuk navigasi, hero section, konten informasi, galeri visual, peta interaktif, dan footer.

## Teknologi yang Digunakan

- Next.js 16 dengan App Router
- TypeScript
- Tailwind CSS v4
- Swiper untuk kebutuhan carousel
- Mapbox GL JS untuk tampilan peta interaktif

## Komponen yang Sudah Disiapkan

- Navbar dengan logo brand dan navigasi utama
- Footer dengan identitas visual brand
- Font global `Poppins` dan `Roboto`
- Section pattern bergerak sebagai elemen visual
- Asset statis pada `public/icon` dan `public/images`

## Struktur Folder Utama

- `src/app` — layout aplikasi, global styles, dan halaman utama
- `src/components` — komponen reusable seperti navbar dan footer
- `src/lib` — utilitas atau helper pendukung
- `public/icon` — logo dan ikon brand
- `public/images` — gambar, pattern, dan asset visual lainnya

## Menjalankan Project Secara Lokal

```bash
npm install
npm run dev
```

Setelah server berjalan, buka `http://localhost:3000` di browser.

## Script yang Tersedia

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## Catatan Implementasi

- Logo utama website tersedia di `public/icon/logo-jejak-rasa.png`
- Ikon footer tersedia di `public/icon/icon-footer.png`
- Pattern bergerak menggunakan `public/images/pattern.png`
