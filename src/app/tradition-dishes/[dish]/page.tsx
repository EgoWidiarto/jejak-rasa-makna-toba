import { dishes } from "@/data/tradition-dishes";
import { DishDetailClient } from "@/components/dish-detail-client";

interface PageProps {
  params: Promise<{
    dish: string;
  }>;
}

export async function generateStaticParams() {
  return dishes.map((dish) => ({
    dish: dish.slug,
  }));
}

export default async function DishDetailPage(props: PageProps) {
  const params = await props.params;
  const dishSlug = params.dish;
  const dish = dishes.find((d) => d.slug === dishSlug);

  return (
    <DishDetailClient
      dish={dish}
      type="traditional"
      allDishes={dishes}
    />
  );
}
