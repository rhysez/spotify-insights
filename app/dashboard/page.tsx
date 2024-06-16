import { getSpotifyToken } from "../lib/data";

export default async function Page() {
  const token = await getSpotifyToken();

  console.log(token);

  return (
    <>
      <h2 className="font-bold text-4xl text-center md:text-left">Dashboard</h2>
    </>
  );
} 