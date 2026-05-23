import { redirect } from "next/navigation";
import { dailyDishes } from "@/data/daily-dishes";

export default function DailyDishesPage() {
  if (dailyDishes.length > 0) {
    redirect(`/daily-dishes/${encodeURIComponent(dailyDishes[0].title)}`);
  }
  redirect("/");
}
