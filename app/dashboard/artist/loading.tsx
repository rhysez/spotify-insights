
import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className="flex flex-col">
      <div className="mx-auto flex flex-col justify-center space-y-12 mt-12">
        <div className="space-y-2 text-center">
          <Skeleton className="h-52 w-64 rounded-lg mx-auto bg-spotify_dark_gray" />
        </div>
        <Skeleton className="h-[50px] w-[150px] mx-auto rounded-xl bg-spotify_dark_gray" />
        <Skeleton className="h-[400px] w-[500px] rounded-xl bg-spotify_dark_gray" />
      </div>
    </div>
  )
}