import SearchContainer from "../ui/dashboard/search/SearchContainer";
import { Suspense } from "react";
import Loading from "./loading";

export default async function Page() {

  return (
    <section className="flex-col space-y-12">
      <h2 className="text-center md:text-5xl text-4xl font-bold md:mt-36">Discover insights</h2>
      <SearchContainer />
    </section>
  );
}
