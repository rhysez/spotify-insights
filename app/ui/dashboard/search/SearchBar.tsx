'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState, useEffect} from 'react';
import { searchSpotify } from '@/app/lib/actions';

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleSearchTermInput = (e: any) => setSearchTerm(e.target.value);

  const handleSubmit = async(e: any) => {
    e.preventDefault();
    const result = await searchSpotify(searchTerm)
    console.log(result)
  }

  useEffect(() => {
    console.log(searchTerm)
  }, [searchTerm])

  return (
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
  );
}
