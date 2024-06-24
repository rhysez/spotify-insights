export default function GenreList({ genres }: any) {
  return (
    <div className="flex flex-wrap justify-center lg:w-[65%] mx-auto">
      {genres.length ? (
        genres.map((genre: any, index: number) => {
          return (
            <p
              key={index}
              className="m-2 rounded-full bg-gradient-to-r from-spotify_white to-spotify_green p-2 text-center font-semibold text-spotify_dark_gray shadow-lg"
            >
              {genre}
            </p>
          );
        })
      ) : (
        <p className="m-2 rounded-full bg-red-500 p-2 text-center font-semibold text-white shadow-lg">
          No genres listed
        </p>
      )}
    </div>
  );
}
