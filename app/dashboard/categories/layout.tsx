import SideNav from '@/app/ui/dashboard/sidenav';
import LoadingCategories from './LoadingCategories';
import { Suspense } from 'react';
 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
 
          <Suspense fallback={<LoadingCategories />}>
            {children}
          </Suspense>
      
  );
}