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
import { useState } from 'react';
import clsx from 'clsx';


export default function CategoryCard({ category }: any) {

  return (
      <Card className={clsx("bg-spotify_black border-none transition-opacity duration-150 ease-in-out")}>
        <CardHeader>
          <CardTitle className="text-slate-200 text-center">{category.name}</CardTitle>
        </CardHeader>
        <CardContent>
          <Image className="mx-auto p-[2px] hover:bg-spotify_green cursor-pointer ease-in-out transition-all duration-150" width={250} height={300} src={category.icons[0].url} alt="category icon" />
        </CardContent>
      </Card>
  );
}
