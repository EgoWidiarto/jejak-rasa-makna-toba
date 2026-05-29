import { kv } from "@vercel/kv";
import fs from "fs/promises";
import path from "path";

const DATA_FILE = path.join(process.cwd(), "data", "testimonials.json");
const IS_PRODUCTION = process.env.NODE_ENV === "production";

type Testimonial = {
  id: string;
  rating: number;
  name: string;
  comment: string;
  createdAt: string;
};

async function readLocal(): Promise<Testimonial[]> {
  try {
    const raw = await fs.readFile(DATA_FILE, "utf-8");
    const parsed = JSON.parse(raw || "[]");
    return Array.isArray(parsed) ? (parsed as Testimonial[]) : [];
  } catch {
    return [];
  }
}

async function writeLocal(arr: Testimonial[]) {
  await fs.mkdir(path.dirname(DATA_FILE), { recursive: true });
  await fs.writeFile(DATA_FILE, JSON.stringify(arr, null, 2), "utf-8");
}

export async function GET() {
  try {
    const raw = await kv.get("testimonials");
    if (raw) {
      try {
        return new Response(JSON.stringify(JSON.parse(raw as string)), { headers: { "Content-Type": "application/json" } });
      } catch {
        return new Response(JSON.stringify(raw), { headers: { "Content-Type": "application/json" } });
      }
    }
  } catch {
    // fallthrough to local
  }

  const local = await readLocal();
  return new Response(JSON.stringify(local), {
    headers: { "Content-Type": "application/json", "Cache-Control": "no-store" },
  });
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { rating, name, comment } = body;
    if (!name || !comment) return new Response(JSON.stringify({ error: "invalid" }), { status: 400 });
    const item: Testimonial = {
      id: Date.now().toString(),
      rating: Math.max(1, Math.min(5, Number(rating) || 1)),
      name,
      comment,
      createdAt: new Date().toISOString(),
    };

    try {
      const raw = await kv.get("testimonials");
      const arr = raw ? (Array.isArray(raw) ? (raw as Testimonial[]) : (JSON.parse(raw as string) as Testimonial[])) : [];
      arr.unshift(item);
      await kv.set("testimonials", JSON.stringify(arr));
      return new Response(JSON.stringify(item), { status: 201, headers: { "Content-Type": "application/json" } });
    } catch {
      if (IS_PRODUCTION) {
        return new Response(JSON.stringify({ error: "Storage belum terkonfigurasi di server (Vercel KV)." }), {
          status: 503,
          headers: { "Content-Type": "application/json" },
        });
      }

      // local development fallback
      try {
        const arr = await readLocal();
        arr.unshift(item);
        await writeLocal(arr);
        return new Response(JSON.stringify(item), { status: 201, headers: { "Content-Type": "application/json" } });
      } catch {
        return new Response(JSON.stringify({ error: "Gagal menyimpan komentar di lokal." }), {
          status: 500,
          headers: { "Content-Type": "application/json" },
        });
      }
    }
  } catch {
    return new Response(JSON.stringify({ error: "invalid" }), { status: 400, headers: { "Content-Type": "application/json" } });
  }
}
