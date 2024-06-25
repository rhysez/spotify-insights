import Icon from '@mdi/react';
import { mdiSpotify } from '@mdi/js';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="flex h-30 shrink-0 items-center bg-slate-800 p-4 md:h-52">
        <Icon className="text-green-500" path={mdiSpotify} size={4} />
      </div>
      <div className="flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
          <p className={`text-xl text-gray-800 md:text-3xl md:leading-normal`}>
            <strong>Spotify Insights</strong> <br />
            Delivering digestible artist analytics from Spotify.
          </p>
          <Link
            href="/login"
            className="flex items-center gap-5 self-start rounded-lg bg-slate-800 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-green-500 md:text-base"
          >
            <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          {/* Add Hero Images Here */}
        </div>
      </div>
    </main>
  );
}
