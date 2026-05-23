import Image from "next/image";
import { dishes } from "@/data/tradition-dishes";
import Link from "next/link";
import { DishCarousel } from "@/components/dish-carousel";

interface PageProps {
  params: Promise<{
    dish: string;
  }>;
}

export async function generateStaticParams() {
  return dishes.map((dish) => ({
    dish: encodeURIComponent(dish.title),
  }));
}

export default async function DishDetailPage(props: PageProps) {
  const params = await props.params;
  const dishTitle = decodeURIComponent(params.dish);
  const dish = dishes.find((d) => d.title === dishTitle);

  if (!dish) {
    return (
      <main className="min-h-screen bg-[#F4F4F4] flex items-center justify-center py-8 sm:py-12 lg:py-16">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-[#B02627]">Hidangan Tidak Ditemukan</h1>
          <Link href="/tradition-dishes" className="mt-6 inline-block text-[#D93B2D] hover:text-[#B02627] font-semibold">
            Kembali ke Daftar Hidangan
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#F4F4F4] py-8 sm:py-12 lg:py-16">
      {/* Hero Section */}
      <section className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Title Outside Container */}
        <h1 className="text-2xl text-center font-bold text-[#B02627] sm:text-3xl lg:text-4xl mb-6 [font-family:var(--font-roboto)]">{dish.title}</h1>

        <div className="rounded-lg bg-white p-6 sm:p-8 lg:p-10">
          <div className="flex flex-col gap-8">
            {/* Image Container */}
            <div className="relative h-96 w-full sm:h-125 lg:h-150">
              <Image src={dish.fullImgSrc} alt={dish.title} fill priority className="rounded-lg object-cover" sizes="(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 100vw" />
              {/* Bottom Left Text Overlay */}
              <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6">
                <p className="text-md font-bold leading-tight text-white drop-shadow-lg sm:text-base [font-family:var(--font-roboto)]">Mari Menjelajahi Warisan Budaya</p>
                <p className="mt-2 text-3xl font-bold text-white drop-shadow-lg sm:text-4xl lg:text-5xl [font-family:var(--font-dancing-script)]">Mari Menjelajahi</p>
              </div>
            </div>

            {/* Description Container */}
            <div className="flex flex-col justify-start">
              <p className="text-sm leading-relaxed text-black sm:text-base">{dish.description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Recipe Section */}
      {dish.recipe && (
        <section className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 mt-12">
          <div className="rounded-lg bg-white p-6 sm:p-8 lg:p-10">
            <div className="grid gap-8 lg:grid-cols-2">
              {/* Left Column - Ingredients and Spice */}
              <div className="flex flex-col gap-8">
                {/* Ingredients */}
                <div>
                  <h3 className="text-lg font-bold text-[#B02627] mb-4 [font-family:var(--font-roboto)]">Bahan - bahan:</h3>
                  <ul className="space-y-2 text-sm text-black sm:text-base">
                    {dish.recipe.ingredients.map((ingredient, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-[#B02627] font-bold mt-0.5">•</span>
                        <span>{ingredient}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Spice */}
                {dish.recipe.spice.length > 0 && (
                  <div>
                    <h3 className="text-lg font-bold text-[#B02627] mb-4 [font-family:var(--font-roboto)]">Bumbu yang diperlukan:</h3>
                    <ul className="space-y-2 text-sm text-black sm:text-base">
                      {dish.recipe.spice.map((spice, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-[#B02627] font-bold mt-0.5">•</span>
                          <span>{spice}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Right Column - Recipe Image */}
              {dish.recipeImgSrc && (
                <div className="relative h-96 w-full sm:h-125 lg:h-150 flex items-center justify-center">
                  <div className="relative h-full w-48 sm:w-64 lg:w-80">
                    <Image src={dish.recipeImgSrc} alt={`${dish.title} recipe`} fill className="rounded-lg object-cover" sizes="(max-width: 768px) 192px, (max-width: 1024px) 256px, 320px" />
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Steps Section */}
      {dish.recipe && dish.recipe.steps.length > 0 && (
        <section className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 mt-12">
          <div className="rounded-lg bg-white p-6 sm:p-8 lg:p-10">
            <h3 className="text-lg font-bold text-[#B02627] mb-6 [font-family:var(--font-roboto)]">Cara Membuat:</h3>
            <ol className="space-y-3 text-sm text-black sm:text-base list-decimal list-inside">
              {dish.recipe.steps.map((step, index) => (
                <li key={index} className="leading-relaxed">
                  {step}
                </li>
              ))}
            </ol>
          </div>
        </section>
      )}

      {/* Navigation / More Dishes Section */}
      <section className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 mt-12">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold leading-tight text-[#B02627] sm:text-4xl [font-family:var(--font-roboto)]">Kenali Lebih Dalam</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm [font-family:var(--font-roboto)] text-[#B02627]">Hidangan yang Disajikan pada Upacara Adat</p>
        </div>

        <DishCarousel direction="ltr" items={dishes} />
      </section>
    </main>
  );
}
