"use client"
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
import { Artist } from '@/app/lib/definitions';


export default function SearchItemCard({ searchItem }: any) {

  return (
      <Card className={clsx("bg-spotify_black border-none transition-opacity duration-150 ease-in-out")}>
        <CardHeader>
          <CardTitle className="text-slate-200 text-center">{searchItem.name}</CardTitle>
        </CardHeader>
        <CardContent>
          {
            searchItem.images[0] ?
            <Image className="mx-auto p-[2px] hover:bg-spotify_green cursor-pointer ease-in-out transition-all duration-150" width={250} height={300} src={searchItem.images[0].url} alt="artist image" />
            :
            null
          }
        </CardContent>
      </Card>
  );
}