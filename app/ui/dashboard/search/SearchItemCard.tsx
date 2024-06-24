import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Image from 'next/image';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function SearchItemCard({ searchItem }: any) {
  const pathname = usePathname();

  return (
    <Link href={{
      pathname: '/dashboard/artist',
      query: { artist: searchItem.id }
      }}>
      <Card
        className={clsx(
          'block transform cursor-pointer border-none bg-spotify_dark_gray h-full transition-all duration-150 ease-in-out hover:bg-spotify_green',
        )}
      >
        <CardHeader>
          <CardTitle className="text-center text-slate-200">
            {searchItem.name}
          </CardTitle>
        </CardHeader>
        <CardContent>
          {searchItem.images[0] ? (
            <Image
              className="mx-auto p-[2px]"
              width={250}
              height={300}
              src={searchItem.images[0].url}
              alt="artist image"
            />
          ) : null}
        </CardContent>
      </Card>
    </Link>
  );
}
