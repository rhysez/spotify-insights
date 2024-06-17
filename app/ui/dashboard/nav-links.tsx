'use client';
import { HomeIcon, MagnifyingGlassIcon, TagIcon, UserIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Home', href: '/dashboard', icon: HomeIcon },
  {
    name: 'Profile',
    href: '/dashboard/profile',
    icon: UserIcon,
  },
  {
    name: 'Categories',
    href: '/dashboard/categories',
    icon: TagIcon
  },
  {
    name: 'Search',
    href: '/dashboard/search',
    icon: MagnifyingGlassIcon
  },
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
              'flex h-[48px] grow items-center justify-center gap-2 bg-spotify_dark_gray p-3 text-sm font-medium text-slate-200 hover:bg-spotify_link_active hover:text-spotify_green md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'bg-spotify_link_active text-spotify_green md:border-r-2 border-spotify_green': pathname === link.href,
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
