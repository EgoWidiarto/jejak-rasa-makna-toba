"use client";

import { useEffect, useState } from "react";

type Testimonial = {
  id: string;
  rating: number;
  name: string;
  comment: string;
  createdAt: string;
};

const DUMMY_TESTIMONIALS: Testimonial[] = [
  {
    id: "dummy-1",
    rating: 5,
    name: "Raditia Rahman",
    comment: "Dokumentasi makanan khas Batak Toba yang sangat lengkap dan mendalam. Memberikan wawasan baru tentang kekayaan kuliner Indonesia.",
    createdAt: "2026-01-03T10:00:00.000Z",
  },
  {
    id: "dummy-2",
    rating: 5,
    name: "Dera Montannah",
    comment: "Sangat menghargai usaha melestarikan warisan budaya kuliner Batak Toba melalui platform digital ini.",
    createdAt: "2026-01-06T10:00:00.000Z",
  },
  {
    id: "dummy-3",
    rating: 4,
    name: "Arya Tariq",
    comment: "Platform ini memberikan informasi yang akurat dan menarik tentang tradisi kuliner Batak Toba.",
    createdAt: "2026-01-11T10:00:00.000Z",
  },
  {
    id: "dummy-4",
    rating: 5,
    name: "Rari Yunitagus",
    comment: "Apresiasi tinggi untuk dokumentasi yang detail dan informatif tentang makanan tradisional Batak.",
    createdAt: "2026-01-16T10:00:00.000Z",
  },
];

export function TestimonialsList() {
  const [items, setItems] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);

  async function fetchItems(): Promise<Testimonial[]> {
    const res = await fetch("/api/testimonials", { cache: "no-store" });
    if (!res.ok) throw new Error("Gagal memuat komentar");
    const data = await res.json();
    return Array.isArray(data) ? (data as Testimonial[]) : [];
  }

  useEffect(() => {
    let active = true;

    void (async () => {
      try {
        const data = await fetchItems();
        if (!active) return;
        setItems(data);
      } catch (err) {
        console.error(err);
      } finally {
        if (active) setLoading(false);
      }
    })();

    const handler = async () => {
      setLoading(true);
      try {
        const data = await fetchItems();
        if (!active) return;
        setItems(data);
      } catch (err) {
        console.error(err);
      } finally {
        if (active) setLoading(false);
      }
    };

    window.addEventListener("testimonials:updated", handler);
    return () => {
      active = false;
      window.removeEventListener("testimonials:updated", handler);
    };
  }, []);

  if (loading) return <div className="mt-10 text-center text-sm text-zinc-600">Memuat komentar...</div>;

  const displayedItems = items.length > 0 ? items : DUMMY_TESTIMONIALS;

  return (
    <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {displayedItems.map((t) => (
        <div key={t.id} className="flex min-h-65 flex-col rounded-2xl bg-[#F1F1F1] p-5 shadow-sm transition-shadow hover:shadow-md">
          <div className="flex gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <span key={i} className={`text-sm leading-none ${i < t.rating ? "text-[#B02627]" : "text-zinc-300"}`}>
                ♥
              </span>
            ))}
          </div>
          <p className="mt-4 text-[13px] italic leading-6 text-zinc-600 [font-family:var(--font-poppins)] [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:2] overflow-hidden">{t.comment}</p>
          <div className="mt-auto flex items-center gap-2 pt-6">
            <div className="h-7 w-7 rounded-full bg-zinc-300" />
            <div>
              <p className="text-sm font-semibold text-[#B02627] [font-family:var(--font-poppins)]">{t.name}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
