import SearchContainer from "../ui/dashboard/search/SearchContainer";
import { Suspense } from "react";
import Loading from "./loading";
import Icon from '@mdi/react';
import { mdiGuitarElectric } from '@mdi/js';

export default async function Page() {

  return (
    <section className="flex-col space-y-10">
      <div className="space-y-3">
        <Icon className="mx-auto mb-2 text-spotify_green animate-[bounce_2s_linear_infinite]" path={mdiGuitarElectric} size={4} />
        <h2 className="text-center md:text-5xl text-4xl font-bold md:mt-36">Discover insights</h2>
        <p className="text-center md:text-xl text-xl font-bold text-spotify_green">Search for an artist...</p>
      </div>
      <SearchContainer />
    </section>
  );
}
