import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import Image from 'next/image';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function SearchItemCard({ searchItem }: any) {
  const pathname = usePathname();

  return (
    <TooltipProvider>
      <Tooltip delayDuration={1}>
        <TooltipTrigger>
          <Link
            href={{
              pathname: '/dashboard/artist',
              query: { artist: searchItem.id },
            }}
          >
            <Card
              className={clsx(
                'block h-full transform cursor-pointer border-none bg-spotify_dark_gray transition-all duration-150 ease-in-out hover:bg-spotify_green',
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
        </TooltipTrigger>
        <TooltipContent className="border-0 bg-transparent">
          {searchItem.genres.length ? (
            searchItem.genres.map((genre: any, index: number) => (
              <p className="m-2 rounded-full bg-gradient-to-r from-spotify_white to-spotify_green p-2 text-center font-semibold shadow-lg">
                {genre}
              </p>
            ))
          ) : (
            <p className="m-2 rounded-full bg-red-500 p-2 text-center font-semibold text-white shadow-lg">
              No genres listed
            </p>
          )}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
