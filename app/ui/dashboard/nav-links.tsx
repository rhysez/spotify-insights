'use client';
import {
  HomeIcon,
  MagnifyingGlassIcon,
  TagIcon,
  UserIcon,
  EyeIcon,
  HeartIcon
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const links = [
  { name: 'Search', href: '/dashboard', icon: MagnifyingGlassIcon },
  {
    name: 'Favourites',
    href: '/dashboard/favourites',
    icon: HeartIcon
  },
  {
    name: 'Your Stats',
    href: '/dashboard/stats',
    icon: TagIcon
  },
  {
    name: 'Profile',
    href: '/dashboard/profile',
    icon: UserIcon
  }
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex h-[48px] grow items-center justify-center gap-2 bg-spotify_dark_gray p-3 text-sm font-medium text-slate-200 transition-all ease-in-out hover:bg-spotify_link_active hover:text-spotify_green md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'border-spotify_green bg-spotify_link_active text-spotify_green md:border-r-2':
                  pathname === link.href,
              },
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
