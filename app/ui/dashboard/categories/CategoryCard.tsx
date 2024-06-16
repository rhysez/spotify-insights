import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function CategoryCard({ category }: any) {

  console.log(category.icons[0])

  return (
    <Card className="bg-slate-900 border-none">
      <CardHeader>
        <CardTitle className="text-slate-200 text-center">{category.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <img className="hover:shadow-lg hover:shadow-green-400 hover:translate-y-1 cursor-pointer ease-in-out transition-all duration-100 rounded-xl" src={category.icons[0].url} alt="category icon" />
      </CardContent>
    </Card>
  );
}
