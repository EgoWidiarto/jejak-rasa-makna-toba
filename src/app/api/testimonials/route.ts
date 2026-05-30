import { createSupabaseAdminClient } from "@/lib/supabase";

export const dynamic = "force-dynamic";

type Testimonial = {
  id: string;
  rating: number;
  name: string;
  comment: string;
  createdAt: string;
};

type SupabaseTestimonialRow = {
  id: string;
  rating: number;
  name: string;
  comment: string;
  created_at: string;
};

export async function GET() {
  try {
    const supabase = createSupabaseAdminClient();
    const { data, error } = await supabase
      .from("testimonials")
      .select("id, rating, name, comment, created_at")
      .order("created_at", { ascending: false })
      .limit(48);

    if (error) {
      return new Response(JSON.stringify({ error: error.message }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }

    const testimonials: Testimonial[] = (data ?? []).map((item: SupabaseTestimonialRow) => ({
      id: item.id,
      rating: item.rating,
      name: item.name,
      comment: item.comment,
      createdAt: item.created_at,
    }));

    return new Response(JSON.stringify(testimonials), {
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "no-store",
      },
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Gagal mengambil komentar.";
    return new Response(JSON.stringify({ error: message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const rating = Math.max(1, Math.min(5, Number(body.rating) || 1));
    const name = String(body.name ?? "").trim();
    const comment = String(body.comment ?? "").trim();

    if (!name || !comment) {
      return new Response(JSON.stringify({ error: "Nama dan komentar harus diisi." }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const supabase = createSupabaseAdminClient();
    const { data, error } = await supabase
      .from("testimonials")
      .insert({ rating, name, comment })
      .select("id, rating, name, comment, created_at")
      .single<SupabaseTestimonialRow>();

    if (error) {
      return new Response(JSON.stringify({ error: error.message }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }

    const inserted: Testimonial = {
      id: data.id,
      rating: data.rating,
      name: data.name,
      comment: data.comment,
      createdAt: data.created_at,
    };

    return new Response(JSON.stringify(inserted), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Permintaan tidak valid.";
    return new Response(JSON.stringify({ error: message }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }
}
