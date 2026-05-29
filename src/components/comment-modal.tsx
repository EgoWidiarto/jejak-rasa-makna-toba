"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function CommentModal({ open, onClose }: Props) {
  const [rating, setRating] = useState(0);
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    if (!rating) {
      setError("Pilih jumlah hati terlebih dahulu.");
      return;
    }
    if (!name.trim() || !comment.trim()) {
      setError("Nama dan komentar harus diisi.");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("/api/testimonials", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ rating, name: name.trim(), comment: comment.trim() }),
      });
      if (!res.ok) throw new Error("Gagal menyimpan komentar");
      // notify other components to refresh
      window.dispatchEvent(new CustomEvent("testimonials:updated"));
      onClose();
    } catch (err) {
      setError((err as Error).message || "Terjadi kesalahan");
    } finally {
      setLoading(false);
    }
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div className="fixed inset-0 z-50 flex items-center justify-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2, ease: "easeOut" }}>
          <motion.div className="absolute inset-0 bg-black/40" onClick={onClose} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }} />

          <motion.form
            onSubmit={handleSubmit}
            className="relative z-10 w-[92%] max-w-lg rounded-2xl bg-[#E7E7E7] p-6 shadow-lg"
            initial={{ opacity: 0, y: 18, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.26, ease: [0.22, 1, 0.36, 1] }}>
            <h3 className="text-lg font-semibold text-zinc-900">Tinggalkan Komentar</h3>

            <p className="mt-3 text-sm text-zinc-700">Pilih jumlah hati, masukkan nama, lalu tulis komentarmu.</p>

            <div className="mt-4 flex items-center gap-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Berikan ${i} hati`}
                  aria-pressed={rating === i}
                  onClick={() => setRating(i)}
                  className={`rounded-md px-2 py-1 text-2xl leading-none transition-all ${i <= rating ? "text-[#B02627]" : "text-zinc-400"} hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B02627]`}>
                  {i <= rating ? "♥" : "♡"}
                </button>
              ))}
            </div>

            <div className="mt-4">
              <label className="sr-only" htmlFor="comment-name">
                Nama
              </label>
              <input
                id="comment-name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
                className="h-10 w-full rounded-full border border-zinc-400 bg-[#D3D3D3] px-4 text-sm text-zinc-900 outline-none placeholder:text-zinc-600 focus:border-zinc-600"
              />
            </div>

            <div className="mt-3">
              <label className="sr-only" htmlFor="comment-text">
                Komentar
              </label>
              <textarea
                id="comment-text"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Komentarmu"
                className="h-28 w-full rounded-lg border border-zinc-400 bg-[#D3D3D3] p-3 text-sm text-zinc-900 outline-none placeholder:text-zinc-600 focus:border-zinc-600"
              />
            </div>

            {error && <p className="mt-2 text-sm text-red-600">{error}</p>}

            <div className="mt-4 flex justify-end gap-2">
              <button type="button" onClick={onClose} className="rounded-full border px-4 py-2 text-sm">
                Batal
              </button>
              <button type="submit" disabled={loading} className="rounded-full bg-[#D98F2D] px-4 py-2 text-sm font-semibold text-white disabled:opacity-60">
                {loading ? "Mengirim..." : "Kirim Komentar"}
              </button>
            </div>
          </motion.form>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
