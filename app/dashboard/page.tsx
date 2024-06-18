import SearchBar from "../ui/dashboard/search/SearchBar";

export default async function Page() {
  return (
    <section className="flex-col space-y-8">
      <h2 className="text-center md:text-5xl text-4xl font-bold md:mt-36">What&apos;s your vibe?</h2>
      <main>
        <SearchBar />
      </main>
    </section>
  );
}
