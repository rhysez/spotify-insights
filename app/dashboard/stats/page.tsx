import { getCurrentSession, getFavourites } from '@/app/lib/data';
import Pie from '@/app/ui/dashboard/stats/Pie';
import Bar from '@/app/ui/dashboard/stats/Bar';

export default async function Page() {
  const user: any = await getCurrentSession();
  const favourites: any = await getFavourites(user.id);

  type PieData = {
    id: string,
    label: string,
    value: number,
    color: string
  }

  // all of our favourite genres
  const genres = favourites.map((fav: any, index: number) => fav.genres[0]);
  const artistPopularity = favourites.map((fav: any, index: number) => {
    return {
      name: fav.artist_name,
      popularity: fav.popularity
    }
  })
  const artistFollowers = favourites.map((fav: any, index: number) => {
    return {
      name: fav.artist_name,
      followers: fav.follower_count
    }
  })

  const genresPieData: PieData = genres.map((genre: any, index: number) => {

    function getOccurrence(array: string[], value: string) {
      let count = 0;
      array.forEach((v) => (v === value && count++));
      return count;
    }

    return {
      "id": genre,
      "label": genre,
      "value": getOccurrence(genres, genre),
      "color": "hsl(141, 73%, 42%)"
    }
  })

  const popularityPieData: PieData = artistPopularity.map((artist: any, index: number) => {
    return {
      "id": artist.name,
      "label": artist.name,
      "value": artist.popularity,
      "color": "hsl(141, 73%, 42%)"
    }
  })

  type BarData = {
    artist: string,
    followers: number,
    color: string
  }

  const followersBarData: BarData = artistFollowers.map((artist: any, index: number) => {
    return {
      "artist": artist.name,
      "followers": artist.followers,
      "followersColor": "hsl(141, 73%, 42%)"
    }
  })

  console.log(followersBarData)

  if (!favourites) {
    return (
      <main>
        <h1 className="text-center text-6xl font-bold bg-gradient-to-r from-spotify_white to-spotify_green bg-clip-text text-transparent">
          Based On Your Favourites
        </h1>
        <p className="mt-8 text-center text-2xl font-bold">
          Add artists to your favourites to discover your stats
        </p>
      </main>
    );
  }

  return (
    <main>
      <h1 className="text-center text-6xl font-bold bg-gradient-to-r from-spotify_white to-spotify_green bg-clip-text text-transparent">
        Based On Your Favourites
      </h1>
      <section className="mt-16">
        <section className="flex xl:flex-row flex-col justify-around items-center">
          <div className="flex-col items-center">
            <p className="text-xl text-center font-bold">Genre Breakdown</p>
            <Pie data={genresPieData} />
          </div>

          <div className="flex-col items-center">
            <p className="text-xl text-center font-bold">Popularity Breakdown</p>
            <Pie data={popularityPieData} />
          </div>
        </section>
        <section className="flex justify-center">
          <section className="flex-col w-full">
            <p className="text-xl text-center font-bold">Follower Count Rankings</p>
            <Bar data={followersBarData}/>
          </section>
        </section>
      </section>
    </main>
  );
}
