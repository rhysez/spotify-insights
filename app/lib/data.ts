import { sql } from '@vercel/postgres';
import { User } from './definitions';
import { unstable_noStore as noStore } from 'next/cache';
import { auth } from '@/auth';

export async function getCurrentSession() {
    const session = await auth();
    const user = session?.user;
    return user;
}

export async function getUser(email: string) {
  noStore();
  try {
    const user = await sql`SELECT * FROM users WHERE email=${email}`;
    return user.rows[0] as User;
  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw new Error('Failed to fetch user.');
  }
}

export async function getSpotifyToken() {
  noStore();
  try {
    const response = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization:
          'Basic ' +
          btoa(
            ((process.env.SPOTIFY_CLIENT_ID as string) +
              ':' +
              process.env.SPOTIFY_CLIENT_SECRET) as string,
          ),
      },
      body: 'grant_type=client_credentials',
    });

    const data = await response.json();
    return data.access_token;
  } catch (error) {
    console.error('Failed to fetch access token:', error);
    throw new Error('Failed to fetch access token.');
  }
}

export async function getFavourites(userId: string) {
  noStore();
  try {
    const favourites =
    await sql`
    SELECT * 
    FROM favourites 
    WHERE user_id=${userId} 
    `;
  
  if (favourites.rowCount) {
    return favourites.rows;
  } else {
    return [];
  }
  } catch(error) {
    console.log(error)
  }
}