import SearchContainer from "../ui/dashboard/search/SearchContainer";
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
      <SearchContainer />
    </section>
  );
}
