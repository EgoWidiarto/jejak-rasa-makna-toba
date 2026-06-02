import { redirect } from "next/navigation";
import { dishes } from "@/data/tradition-dishes";

export default function TraditionDishesPage() {
  if (dishes.length > 0) {
    redirect(`/tradition-dishes/${dishes[0].slug}`);
  }

  return null;
}
