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
import { Suspense } from 'react';


export default function SearchItemCard({ searchItem }: any) {

  return (
      <Card className={clsx("bg-spotify_black border-none block hover:bg-spotify_green cursor-pointer transform transition-all duration-150 ease-in-out")}>
        <CardHeader>
          <CardTitle className="text-slate-200 text-center">{searchItem.name}</CardTitle>
        </CardHeader>
        <CardContent>
          {
            searchItem.images[0] ?
            <Image className="mx-auto p-[2px]" width={250} height={300} src={searchItem.images[0].url} alt="artist image" />
            :
            null
          }
        </CardContent>
      </Card>
  );
}