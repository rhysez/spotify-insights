import SideNav from '@/app/ui/dashboard/sidenav';
import { getCurrentSession } from "@/app/lib/data";
 
export default async function Layout({ children }: { children: React.ReactNode }) {

  const user: any = await getCurrentSession();

  console.log("Logged in as", user.email);

  return (
    <>
      <div className="flex h-screen flex-col items-center md:items-stretch md:flex-row md:overflow-hidden">
        <div className="w-full flex-none md:w-64">
          <SideNav />
        </div>
        <div className="flex-grow p-6 md:overflow-y-auto md:p-12">    
          {children} 
        </div>
      </div>
    </>
  );
}