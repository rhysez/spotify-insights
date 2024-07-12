import { getCurrentSession } from "@/app/lib/data";

export default async function Page() {

  const user: any = await getCurrentSession();

  return (
    <p>Stats</p>
  )
} 