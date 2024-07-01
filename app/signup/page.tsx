import Icon from '@mdi/react';
import { mdiSpotify } from '@mdi/js';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import SignupForm from '../ui/signup-form';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col">
      <header className="h-30 flex flex-col md:flex-row shrink-0 items-center justify-center gap-2 bg-spotify_black p-4 md:h-48">
        <Icon className="text-green-500" path={mdiSpotify} size={5} />
        <h2 className="font-bold text-spotify_green md:text-5xl text-3xl text-center">Spotify Insights</h2>
      </header>
      <SignupForm />
    </main>
  );
}