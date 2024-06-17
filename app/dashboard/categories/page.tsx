import { getCategories, getSpotifyToken } from "@/app/lib/data";
import CategoryCard from "../../ui/dashboard/categories/CategoryCard";
import { Suspense } from "react";
import LoadingCategories from "./LoadingCategories";

export default async function Page() {

  const token = await getSpotifyToken();
  const categories = await getCategories(token);

  return (
    <>
      <h2 className="font-bold text-4xl text-center md:text-left">Categories</h2>
      <Suspense fallback={<LoadingCategories />}>
        <main className="mt-10 grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-2">
            {
              categories ?
              categories.map((category: any, index: number) => <CategoryCard key={index} category={category} />)
              :
              <p>Could not fetch categories</p>
            }
        </main>
      </Suspense>
    </>
  );
}