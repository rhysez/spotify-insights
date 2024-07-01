import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import { Toaster } from "@/components/ui/toaster"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased bg-spotify_black text-slate-200`}>{children}</body>
      <Toaster />
    </html>
  );
}
