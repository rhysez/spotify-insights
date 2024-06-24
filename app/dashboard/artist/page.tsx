'use client'
import { useSearchParams } from 'next/navigation'
import { getOneArtist } from '@/app/lib/actions';
import { useEffect, useState } from 'react';
import { Artist } from '@/app/lib/definitions';
import Loading from '../loading';

export default function Page() {
  const searchParams = useSearchParams()
  const artistId: any = searchParams.get('artist');

  const [artist, setArtist] = useState<Artist | null>(null)
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchArtist(){
      try {
        const response = await getOneArtist(artistId);
        setArtist(response);
        setLoading(false);
      } catch(error) {
        console.log(error);
      }
    }

    fetchArtist();
  }, [])

  if (loading) {
    return <Loading />
  }

  return (
    <p>
      {
        artist ? artist.name : "Could not load artist"
      }
    </p>
  )
} 