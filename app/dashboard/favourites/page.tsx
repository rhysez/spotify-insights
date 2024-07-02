import { getCurrentSession, getFavourites } from "@/app/lib/data";

export default async function Page() {
  

  const user: any = await getCurrentSession();
  const favourites: any = await getFavourites(user.id);

  console.log(favourites)

  return (
    <p>Favourites</p>
  )
} 