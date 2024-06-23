import LoadingCategories from "./categories/LoadingCategories"
import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 space-y-12">
      <div className="mx-auto flex flex-col justify-center space-y-3 mt-12">
        <div className="space-y-2 text-center">
          <Skeleton className="h-4 w-[200px] bg-spotify_dark_gray" />
        </div>
        <Skeleton className="h-[300px] w-[250px] rounded-xl bg-spotify_dark_gray" />
      </div>
      <div className="mx-auto flex flex-col justify-center space-y-3">
        <div className="space-y-2 text-center">
          <Skeleton className="h-4 w-[200px] bg-spotify_dark_gray" />
        </div>
        <Skeleton className="h-[300px] w-[250px] rounded-xl bg-spotify_dark_gray" />
      </div>
      <div className="mx-auto flex flex-col justify-center space-y-3">
        <div className="space-y-2 text-center">
          <Skeleton className="h-4 w-[200px] bg-spotify_dark_gray" />
        </div>
        <Skeleton className="h-[300px] w-[250px] rounded-xl bg-spotify_dark_gray" />
      </div>
      <div className="mx-auto flex flex-col justify-center space-y-3">
        <div className="space-y-2 text-center">
          <Skeleton className="h-4 w-[200px] bg-spotify_dark_gray" />
        </div>
        <Skeleton className="h-[300px] w-[250px] rounded-xl bg-spotify_dark_gray" />
      </div>
      <div className="mx-auto flex flex-col justify-center space-y-3">
        <div className="space-y-2 text-center">
          <Skeleton className="h-4 w-[200px] bg-spotify_dark_gray" />
        </div>
        <Skeleton className="h-[300px] w-[250px] rounded-xl bg-spotify_dark_gray" />
      </div>
      <div className="mx-auto flex flex-col justify-center space-y-3">
        <div className="space-y-2 text-center">
          <Skeleton className="h-4 w-[200px] bg-spotify_dark_gray" />
        </div>
        <Skeleton className="h-[300px] w-[250px] rounded-xl bg-spotify_dark_gray" />
      </div>
      <div className="mx-auto flex flex-col justify-center space-y-3">
        <div className="space-y-2 text-center">
          <Skeleton className="h-4 w-[200px] bg-spotify_dark_gray" />
        </div>
        <Skeleton className="h-[300px] w-[250px] rounded-xl bg-spotify_dark_gray" />
      </div>
      <div className="mx-auto flex flex-col justify-center space-y-3">
        <div className="space-y-2 text-center">
          <Skeleton className="h-4 w-[200px] bg-spotify_dark_gray" />
        </div>
        <Skeleton className="h-[300px] w-[250px] rounded-xl bg-spotify_dark_gray" />
      </div>
      <div className="mx-auto flex flex-col justify-center space-y-3">
        <div className="space-y-2 text-center">
          <Skeleton className="h-4 w-[200px] bg-spotify_dark_gray" />
        </div>
        <Skeleton className="h-[300px] w-[250px] rounded-xl bg-spotify_dark_gray" />
      </div>
      <div className="mx-auto flex flex-col justify-center space-y-3">
        <div className="space-y-2 text-center">
          <Skeleton className="h-4 w-[200px] bg-spotify_dark_gray" />
        </div>
        <Skeleton className="h-[300px] w-[250px] rounded-xl bg-spotify_dark_gray" />
      </div>
      <div className="mx-auto flex flex-col justify-center space-y-3">
        <div className="space-y-2 text-center">
          <Skeleton className="h-4 w-[200px] bg-spotify_dark_gray" />
        </div>
        <Skeleton className="h-[300px] w-[250px] rounded-xl bg-spotify_dark_gray" />
      </div>
      <div className="mx-auto flex flex-col justify-center space-y-3">
        <div className="space-y-2 text-center">
          <Skeleton className="h-4 w-[200px] bg-spotify_dark_gray" />
        </div>
        <Skeleton className="h-[300px] w-[250px] rounded-xl bg-spotify_dark_gray" />
      </div>
    </div>
  )
}