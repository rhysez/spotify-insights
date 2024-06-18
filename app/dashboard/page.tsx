import SearchBar from "../ui/dashboard/search/SearchBar";
import { searchSpotify } from "../lib/actions";
import { Artist } from "../lib/definitions";
import SearchItemCard from "../ui/dashboard/search/SearchItemCard";

export default async function Page() {
  // const rawData: any = await searchSpotify('The Weeknd');
  // const trimmedData: Artist[] = rawData.artists.items;

  // console.log(trimmedData);

  return (
    <section className="flex-col space-y-12">
      <h2 className="text-center md:text-5xl text-4xl font-bold md:mt-36">Discover insights</h2>

      <section>
        <SearchBar />
      </section>

      <main className="mt-10 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-4">
        {/* {trimmedData ? (
          trimmedData.map((artist: Artist, index: number) => (
            <SearchItemCard key={index} searchItem={artist} />
          ))
        ) : (
          null
        )} */}
      </main>
    </section>
  );
}
