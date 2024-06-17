import SideNav from '@/app/ui/dashboard/sidenav';
import LoadingCategories from './categories/LoadingCategories';
import { Suspense } from 'react';
 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="flex h-screen flex-col items-center md:items-stretch md:flex-row md:overflow-hidden">
        <div className="w-full flex-none md:w-64">
          <SideNav />
        </div>
        <div className="flex-grow p-6 md:overflow-y-auto md:p-12">
          <Suspense fallback={<LoadingCategories />}>
            {children}
          </Suspense>
        </div>
      </div>
    </>
  );
}