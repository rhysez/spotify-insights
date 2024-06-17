"use client";
import Link from 'next/link';
import NavLinks from '@/app/ui/dashboard/nav-links';
import Icon from '@mdi/react';
import { mdiSpotify } from '@mdi/js';
import { PowerIcon } from '@heroicons/react/24/outline';

export default function SideNav() {
  return (
    <div className="flex h-full flex-col">
        <div className="flex justify-center items-center bg-spotify_dark_gray py-4 border-b-4 border-green-400">
          <Icon className="text-green-500" path={mdiSpotify} size={3} />
        </div>
      <div className="flex grow flex-row justify-between md:flex-col md:space-x-0">
        <NavLinks />
        <div className="hidden h-auto w-full grow bg-spotify_dark_gray md:block"></div>
        <form>
          <button className="flex h-[48px] w-full grow items-center justify-center gap-2 text-slate-200 bg-spotify_dark_gray p-3 text-sm font-medium md:border-t-2 border-spotify_green hover:bg-spotify_link_active hover:text-spotify_green md:flex-none md:justify-start md:p-2 md:px-3">
            <PowerIcon className="w-6" />
            <div className="hidden md:block">Sign Out</div>
          </button>
        </form>
      </div>
    </div>
  );
}
