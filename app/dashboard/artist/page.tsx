import ArtistPage from "@/app/ui/dashboard/artist/ArtistPage";
import { getCurrentSession } from '@/app/lib/data';

export default async function Page() {

  const user: any = await getCurrentSession();

  return (
    <ArtistPage userId={user.id} />
  );
}
