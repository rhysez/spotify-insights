'use client';
import { useSearchParams } from 'next/navigation';
import { getOneArtist } from '@/app/lib/actions';
import { useEffect, useState } from 'react';
import { Artist } from '@/app/lib/definitions';
import Loading from './loading';
import Image from 'next/image';
import MetricsIcons from '@/app/ui/dashboard/artist/MetricsIcons';
import { Button } from '@/components/ui/button';

export default function Page() {
  const searchParams = useSearchParams();
  const artistId: any = searchParams.get('artist');

  const [artist, setArtist] = useState<Artist | any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchArtist() {
      try {
        const response = await getOneArtist(artistId);
        setArtist(response);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }

    fetchArtist();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <main className="space-y-16">
      <section className="relative">
      {artist.images[0] ? (
        <div>
          <Image
            className="mx-auto border-2 border-spotify_dark_gray"
            width={250}
            height={300}
            src={artist.images[0].url}
            alt="artist image"
          />
        </div>
      ) : null}
        <h2 className="text-center text-transparent bg-clip-text bg-gradient-to-r from-spotify_white to-spotify_green text-4xl font-bold md:text-7xl absolute left-0 right-0 bottom-6">
          {artist.name}
        </h2>
      </section>
      <div className="flex justify-center">
        <Button className="bg-spotify_green font-semibold hover:bg-spotify_white hover:text-spotify_green">
          Start Tracking Artist
        </Button>
      </div>
      <MetricsIcons
        popularity={artist.popularity}
        followers={artist.followers.total.toLocaleString('en-US', {minimumFractionDigits: 2})}
      />
    </main>
  );
}
