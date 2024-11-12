import Link from 'next/link';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import clsx from 'clsx';
import Image from 'next/image';

export default function FavouritesList({ favourites }: any) {
  if (!favourites.length) return <p className="text-2xl font-bold text-center mt-8">Search for an artist to add them to your favourites</p>;
  return (
    <section className="mt-10 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-4">
      
        {favourites.map((favourite: any, index: number) => {
          return (
            <Link key={index} href={`/dashboard/artist?artist=${favourite.artist_id}`}>
              <Card
              className={clsx(
                'block h-full transform cursor-pointer border-none bg-spotify_black',
              )}
            >
              <CardHeader>
                <CardTitle className="text-center text-slate-200">
                  {favourite.artist_name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                {favourite.artist_image ? (
                  <Image
                    className="mx-auto p-[2px] transition-all duration-150 ease-in-out hover:bg-spotify_green"
                    width={250}
                    height={300}
                    src={favourite.artist_image}
                    alt="artist image"
                  />
                ) : null}
              </CardContent>
            </Card>
            </Link>
          );
        })}
      
    </section>
  );
}
