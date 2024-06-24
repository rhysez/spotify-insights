'use client';
import { useSearchParams } from 'next/navigation';
import { getOneArtist } from '@/app/lib/actions';
import { useEffect, useState } from 'react';
import { Artist } from '@/app/lib/definitions';
import Loading from './loading';
import Image from 'next/image';
import Link from 'next/link';
import MetricsIcons from '@/app/ui/dashboard/artist/MetricsIcons';
import GenreList from '@/app/ui/dashboard/artist/GenreList';
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
        <h2 className="absolute bottom-2 left-0 right-0 mx-auto h-28 bg-gradient-to-r from-spotify_white from-10% via-spotify_green via-spotify_white via-30% to-spotify_green bg-clip-text text-center text-4xl font-bold text-transparent md:text-7xl">
          {artist.name}
        </h2>
      </section>
      <div className="flex justify-center gap-2">
        <Button className="border-2 border-transparent bg-spotify_green font-semibold hover:bg-spotify_white hover:text-spotify_green">
          Start Tracking Artist
        </Button>
        <Link href={"https://open.spotify.com/artist/" + artist.id}>
          <Button className="border-2 border-spotify_green bg-transparent font-semibold hover:bg-spotify_white hover:text-spotify_green">
            Go To Artist&apos;s Spotify
          </Button>
        </Link>
      </div>
      <MetricsIcons
        popularity={artist.popularity}
        followers={artist.followers.total.toLocaleString()}
      />
      <GenreList genres={artist.genres} />
    </main>
  );
}
