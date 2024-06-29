import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Image from 'next/image';

export default function ArtistAlbums({ albums }: any) {
  return (
    <>
    <h2 className="text-center font-bold text-5xl">Albums</h2>
      <Carousel className="md:w-[80%] w-[200px] mx-auto">
      <CarouselContent>
        {albums
          ? albums.items.map((album: any, index: any) => {
              return (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 relative">
                  <Image src={album.images[0].url} alt={"album art"} height={300} width={300} />
                  <p className="absolute left-30 bottom-0 font-bold text-2xl invisible hover:visible">{album.name}</p>
                </CarouselItem>
              );
            })
          : null}
      </CarouselContent>
      <CarouselPrevious className="text-spotify_white bg-spotify_green hover:text-spotify_green border-none" />
      <CarouselNext className="text-spotify_white bg-spotify_green hover:text-spotify_green border-none" />
    </Carousel>
    </>
  );
}
