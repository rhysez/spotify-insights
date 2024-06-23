'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState, useEffect} from 'react';
import { searchSpotify } from '@/app/lib/actions';
import { Artist } from '@/app/lib/definitions';
import SearchItemCard from './SearchItemCard';

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const [displayTerm, setDisplayTerm] = useState<string>('');

  const [artists, setArtists] = useState<Artist[] | null>(null);

  const handleSearchTermInput = (e: any) => setSearchTerm(e.target.value);

  const handleSubmit = async(e: any) => {
    if (!searchTerm) {
      setArtists([])
      setDisplayTerm("");
      return;
    };
    
    e.preventDefault();
    const result = await searchSpotify(searchTerm);
    setDisplayTerm(searchTerm);
    setArtists(result.artists.items);
  }

  return (
    <section>
      <div className="flex items-center justify-center space-x-2">
        <Input
          type="text"
          className="rounded-full border-2 px-3 py-2 text-spotify_black sm:w-80"
          placeholder="The Weeknd..."
          onChange={(value: any) => handleSearchTermInput(value)}
        />
        <Button onClick={handleSubmit} className="rounded-full bg-spotify_green px-3 py-2 text-spotify_white hover:bg-spotify_white hover:text-spotify_green">
          Search
        </Button>
      </div>

      {
        displayTerm ? <p className="text-center mt-8">Showing results for <span className="text-spotify_green font-bold">{displayTerm}</span></p> : null
      }

      <main className="mt-10 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-4">
        {artists ? (
          artists.map((artist: Artist, index: number) => (
            <SearchItemCard key={index} searchItem={artist} />
          ))
        ) : (
            null
        )}
      </main>
    </section>
  );
}
