'use client';
import { Input } from '@/components/ui/input';
import { useState, useEffect } from 'react';
import { getManyArtists } from '@/app/lib/actions';
import { Artist } from '@/app/lib/definitions';
import SearchItemCard from './SearchItemCard';
import Loading from '@/app/dashboard/loading';
import { useDebouncedCallback } from 'use-debounce';

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [displayTerm, setDisplayTerm] = useState<string>('');
  const [artists, setArtists] = useState<Artist[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSearchTermInput = useDebouncedCallback((e: any) => {
    setSearchTerm(e.target.value);
  }, 300)

  const handleSubmit = async (e: any) => {
    if (!searchTerm) {
      setArtists([]);
      setDisplayTerm('');
      return;
    }
    setLoading(true)
    const result = await getManyArtists(searchTerm);
    setDisplayTerm(searchTerm);
    setArtists(result.artists.items);
    setLoading(false);
  };

  useEffect(() => {
    handleSubmit(searchTerm); 
  }, [searchTerm])

  return (
    <section>
      <div className="flex items-center justify-center space-x-2">
        <Input
          type="text"
          className="rounded-full px-3 py-2 text-spotify_black sm:w-80 transition-all ease-in-out hover:shadow-[8px_4px_0px_1px_#1DB954]"
          placeholder="The Weeknd..."
          onChange={(value: any) => handleSearchTermInput(value)}
        />
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
