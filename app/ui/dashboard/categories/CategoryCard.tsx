import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Image from 'next/image';

export default function CategoryCard({ category }: any) {

  return (
    <Card className="bg-spotify_black border-none ">
      <CardHeader>
        <CardTitle className="text-slate-200 text-center">{category.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <Image className="mx-auto p-1 hover:bg-spotify_green cursor-pointer ease-in-out transition-all duration-150" width={250} height={300} src={category.icons[0].url} alt="category icon" />
      </CardContent>
    </Card>
  );
}
