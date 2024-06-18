'use server'
import { getSpotifyToken } from "./data";

export async function searchSpotify(searchTerm: string) {
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