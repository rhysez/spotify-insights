import { getCategories, getSpotifyToken } from '@/app/lib/data';
import CategoryCard from '../../ui/dashboard/categories/CategoryCard';
import { Suspense } from 'react';

export default async function Page() {
  const token = await getSpotifyToken();
  const categories = await getCategories(token);

  return (
    <>
      <h2 className="text-center text-4xl font-bold md:text-left">
        Categories
      </h2>

      <main className="mt-10 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-4">
        {categories ? (
          categories.map((category: any, index: number) => (
            <CategoryCard key={index} category={category} />
          ))
        ) : (
          <p>Could not fetch categories</p>
        )}
      </main>
    </>
  );
}
