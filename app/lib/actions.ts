'use server'
import { getSpotifyToken } from "./data";
import { signIn } from '@/auth';
import { AuthError } from 'next-auth';

export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    await signIn('credentials', formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.';
        default:
          return 'Something went wrong.';
      }
    }
    throw error;
  }
}

export async function getManyArtists(searchTerm: string) {
  if (!searchTerm) return;

  const token = await getSpotifyToken();
  try {
    const response = await fetch(
      `https://api.spotify.com/v1/search?q=${searchTerm}&type=artist`,
      {
        method: 'GET',
        headers: {
          Authorization: 'Bearer ' + token,
        },
      },
    );

    return await response.json();
  } catch (error) {
    console.error('Failed to fetch search data:', error);
  }
}

export async function getOneArtist(id: string) {
  if (!id) return;

  const token = await getSpotifyToken();
  try {
    const response = await fetch(
      `https://api.spotify.com/v1/artists/${id}`,
      {
        method: 'GET',
        headers: {
          Authorization: 'Bearer ' + token,
        },
      },
    );

    return await response.json();
  } catch (error) {
    console.error('Failed to fetch search data:', error);
  }
}

export async function getArtistAlbums(id: string) {
  if (!id) return;

  const token = await getSpotifyToken();
  try {
    const response = await fetch(
      `https://api.spotify.com/v1/artists/${id}/albums`,
      {
        method: 'GET',
        headers: {
          Authorization: 'Bearer ' + token,
        },
      },
    );

    return await response.json();
  } catch (error) {
    console.error('Failed to fetch search data:', error);
  }
}

export async function getArtistTopTracks(id: string) {
  if (!id) return;

  const token = await getSpotifyToken();
  try {
    const response = await fetch(
      `https://api.spotify.com/v1/artists/${id}/top-tracks`,
      {
        method: 'GET',
        headers: {
          Authorization: 'Bearer ' + token,
        },
      },
    );

    return await response.json();
  } catch (error) {
    console.error('Failed to fetch search data:', error);
  }
}