'use client';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function SearchBar() {
  return (
    <div className="flex items-center justify-center space-x-2">
      <Input type="text" className="px-3 py-2 sm:w-80 rounded-full text-spotify_black border-2" placeholder="The Weeknd..." />
      <Button className="px-3 py-2 rounded-full bg-spotify_green text-spotify_white hover:bg-spotify_white hover:text-spotify_green">Search</Button>
    </div>
  )
}