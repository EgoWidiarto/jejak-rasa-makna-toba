# Jejak Rasa Makna Toba

Website interaktif untuk proyek DKV bertema Jejak Rasa Makna Toba. Project ini dibangun dengan Next.js dan disiapkan untuk konten visual, carousel, peta interaktif, navbar, dan footer yang konsisten secara branding.

## Stack

- Next.js 16 App Router
- TypeScript
- Tailwind CSS v4
- Swiper untuk carousel
- Mapbox GL JS untuk peta interaktif

## Fitur yang sudah disiapkan

- Navbar dengan logo brand dan link navigasi berwarna `#8F1C1D`
- Footer dengan warna dasar `#2C2424`, aksen `#D98F2D`, dan teks `#FFFDF0`
- Font global `Poppins` dan `Roboto`
- Strip pattern bergerak di bawah hero section
- Asset statis tersimpan di `public/icon` dan `public/images`

## Struktur Folder

- `src/app` — layout, globals, dan homepage
- `src/components` — komponen reusable seperti navbar dan footer
- `src/lib` — helper atau utilitas proyek
- `public/icon` — logo dan ikon brand
- `public/images` — gambar dan pattern visual

## Menjalankan Project

```bash
npm install
npm run dev
```

Buka `http://localhost:3000` untuk melihat hasilnya.

## Script Utama

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## Catatan

- Logo utama website ada di `public/icon/logo-jejak-rasa.png`
- Ikon footer ada di `public/icon/icon-footer.png`
- Pattern bergerak memakai `public/images/pattern.png`
