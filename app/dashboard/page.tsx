import { getSpotifyToken, getGenres } from "../lib/data";

export default async function Page() {
  const token = await getSpotifyToken();

  const categories = await getGenres(token);

  console.log(categories);

  return (
    <>
      <h2 className="font-bold text-4xl text-center md:text-left">Dashboard</h2>
    </>
  );
} 