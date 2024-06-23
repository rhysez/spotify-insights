'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState, useEffect, Suspense } from 'react';
import { searchSpotify } from '@/app/lib/actions';
import { Artist } from '@/app/lib/definitions';
import SearchItemCard from './SearchItemCard';
import Loading from '@/app/dashboard/loading';

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [displayTerm, setDisplayTerm] = useState<string>('');
  const [artists, setArtists] = useState<Artist[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSearchTermInput = (e: any) => setSearchTerm(e.target.value);

  const handleSubmit = async (e: any) => {
    if (!searchTerm) {
      setArtists([]);
      setDisplayTerm('');
      return;
    }
    setLoading(true)
    e.preventDefault();
    const result = await searchSpotify(searchTerm);
    setDisplayTerm(searchTerm);
    setArtists(result.artists.items);
    setLoading(false);
  };

  return (
    <section>
      <div className="flex items-center justify-center space-x-2">
        <Input
          type="text"
          className="rounded-full border-2 px-3 py-2 text-spotify_black sm:w-80"
          placeholder="The Weeknd..."
          onChange={(value: any) => handleSearchTermInput(value)}
        />
        <Button
          onClick={handleSubmit}
          className="rounded-full bg-spotify_green px-3 py-2 text-spotify_white hover:bg-spotify_white hover:text-spotify_green"
        >
          Search
        </Button>
      </div>

      {displayTerm ? (
        <p className="mt-8 text-center">
          Showing results for{' '}
          <span className="font-bold text-spotify_green">{displayTerm}</span>
        </p>
      ) : null}

      {
        !loading ?
          <main className="mt-10 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-4">
          {artists
            ? artists.map((artist: Artist, index: number) => (
                <SearchItemCard key={index} searchItem={artist} />
              ))
            : null}
          </main>
          :
          <Loading />
      }
    </section>
  );
}
