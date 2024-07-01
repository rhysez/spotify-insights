'use server';
import { getSpotifyToken } from './data';
import { signIn, signOut } from '@/auth';
import { AuthError } from 'next-auth';
import { sql } from '@vercel/postgres';
const bcrypt = require('bcrypt');
import { redirect } from 'next/navigation';

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
    const response = await fetch(`https://api.spotify.com/v1/artists/${id}`, {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + token,
      },
    });

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

export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    console.log(formData);
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

export const signOutAction = async () => await signOut();

export async function createAccount(
  name: string,
  username: string,
  email: string,
  password: string,
) {
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await sql`
      INSERT INTO users (name, username, email, password)
      VALUES (${name}, ${username}, ${email}, ${hashedPassword})
    `;
    return user;
  } catch (error) {
    console.error('Failed to create account:', error);
    throw new Error('Failed to create account.');
  }
}

export async function addToFavourites(user_id: string, artist_id: string, artist_name: string){
  try {
    return await sql`
    INSERT INTO favourites (user_id, artist_id, artist_name)
    VALUES (${user_id}, ${artist_id}, ${artist_name})
  `;
  } catch (error) {
    console.error('Failed to add artist to favourites:', error);
    throw new Error('Failed to add artist to favourites');
  }
}

export async function getFavourite(artistId: string, userId: string) {
  const favourite =
    await sql`SELECT * FROM favourites WHERE artist_id = ${artistId} AND user_id = ${userId}`;
  
  if (favourite) {
    return true;
  } else {
    return false;
  }
}

export async function deleteFavourite(artistId: string, userId: string) {
  const favourite =
    await sql`DELETE FROM favourites WHERE artist_id=${artistId} AND user_id = ${userId}`;
  
  return true;
}

