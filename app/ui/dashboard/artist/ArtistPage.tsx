'use client';
import { useSearchParams } from 'next/navigation';
import {
  getOneArtist,
  getArtistAlbums,
  getArtistTopTracks,
  getFavourite,
  deleteFavourite,
  addToFavourites,
} from '@/app/lib/actions';
import { useEffect, useState } from 'react';
import { Artist } from '@/app/lib/definitions';
import Loading from '@/app/dashboard/artist/loading';
import Image from 'next/image';
import Link from 'next/link';
import MetricsIcons from '@/app/ui/dashboard/artist/MetricsIcons';
import GenreList from '@/app/ui/dashboard/artist/GenreList';
import { Button } from '@/components/ui/button';
import ArtistAlbums from '@/app/ui/dashboard/artist/ArtistAlbums';
import ArtistTopTracks from '@/app/ui/dashboard/artist/ArtistTopTracks';
import { useToast } from '@/components/ui/use-toast';
import { ArrowRightIcon, ArrowPathIcon } from '@heroicons/react/20/solid';

// TO DO: Refactor entire component
export default function ArtistPage({ userId }: any) {
  const searchParams = useSearchParams();
  const artistId: any = searchParams.get('artist');

  const [artist, setArtist] = useState<Artist | any>(null);
  const [albums, setAlbums] = useState<any>(null);
  const [topTracks, setTopTracks] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [favourite, setFavourite] = useState<boolean | 'pending'>('pending');

  const { toast } = useToast();

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
    async function fetchAlbums() {
      try {
        const response = await getArtistAlbums(artistId);
        setAlbums(response);
      } catch (error) {
        console.log(error);
      }
    }
    async function fetchTopTracks() {
      try {
        const response = await getArtistTopTracks(artistId);
        setTopTracks(response.tracks);
      } catch (error) {
        console.log(error);
      }
    }

    async function fetchFavourite() {
      try {
        const response = await getFavourite(artistId, userId);
        setFavourite(response);
      } catch (error) {
        console.log(error);
      }
    }

    fetchArtist();
    fetchTopTracks();
    fetchAlbums();
    fetchFavourite();
  }, []);

  const handleAddToFavourites = async () => {
    try {
      const favourite = await addToFavourites(userId, artist.id, artist.name);
      if (favourite) {
        toast({
          title: `${artist.name} has been added to your favourites!`,
          description: 'Now check your favourites tab',
        });
        setFavourite(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteFavourite = async () => {
    await deleteFavourite(artistId, userId);
    toast({
      title: `${artist.name} has been deleted from your favourites!`,
      description: 'You can always re-add them in the future',
    });
    setFavourite(false);
  };

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
        <h2 className="absolute bottom-2 left-0 right-0 mx-auto h-28 bg-gradient-to-r from-spotify_white from-10% via-spotify_green via-spotify_white via-20% to-spotify_green bg-clip-text text-center text-4xl font-bold text-transparent md:text-7xl">
          {artist.name}
        </h2>
      </section>
      <div className="flex justify-center gap-2">
        {!favourite ? (
          <Button
            onClick={handleAddToFavourites}
            className="border-2 border-transparent bg-spotify_green font-semibold hover:bg-spotify_white hover:text-spotify_green"
          >
            Add To Favourites
          </Button>
        ) : favourite == 'pending' ? (
          <Button
            disabled
            className="border-2 w-36 border-transparent bg-spotify_dark_gray font-semibold"
          >
            <ArrowPathIcon className="mx-auto h-6 w-6 animate-spin rounded-full text-center text-spotify_green" />
          </Button>
        ) : (
          <Button
            onClick={handleDeleteFavourite}
            className="border-2 border-transparent bg-red-500 font-semibold hover:bg-red-400"
          >
            Remove from favourites
          </Button>
        )}
        <Link href={'https://open.spotify.com/artist/' + artist.id}>
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

      <section className="mx-auto w-[80%]">
        <ArtistTopTracks tracks={topTracks} />
      </section>

      <ArtistAlbums albums={albums} />
    </main>
  );
}
