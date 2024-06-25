import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import clsx from 'clsx';

export default function ArtistTopTracks({ tracks }: any) {
  return (
    <>
    <h2 className="text-center font-bold text-5xl mb-10">Top Tracks</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-spotify_white">Track</TableHead>
            <TableHead className="text-spotify_white">Album</TableHead>
            <TableHead className="text-spotify_white">Released</TableHead>
            <TableHead className="text-spotify_white">Popularity</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tracks
            ? tracks.map((track: any, index: number) => {
                return (
                  <TableRow key={index}>
                    <TableCell className="bg-spotify_link_active bg-opacity-70 font-bold text-spotify_green">
                      {track.name}
                    </TableCell>
                    <TableCell className="bg-spotify_dark_gray">
                      {track.album.name}
                    </TableCell>
                    <TableCell className="bg-spotify_dark_gray">
                      {track.album.release_date}
                    </TableCell>
                    <TableCell
                      className={clsx('bg-spotify_green text-center font-bold', {
                        'bg-red-500': track.popularity < 50,
                      })}
                    >
                      {track.popularity}
                    </TableCell>
                  </TableRow>
                );
              })
            : null}
        </TableBody>
      </Table>
    </>
  );
}
