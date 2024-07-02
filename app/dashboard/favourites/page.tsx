import { getCurrentSession, getFavourites } from "@/app/lib/data";
import FavouritesList from "@/app/ui/dashboard/favourites/FavouritesList";

export default async function Page() {
  

  const user: any = await getCurrentSession();
  const favourites: any = await getFavourites(user.id);

  console.log(favourites)

  return (
    <main>
      <h2 className="md:text-4xl text-3xl font-bold text-center">Favourites</h2>
      <FavouritesList favourites={favourites} />
    </main>
  )
} 