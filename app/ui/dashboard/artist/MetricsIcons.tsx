import { ArrowTrendingUpIcon, HeartIcon } from "@heroicons/react/24/solid";
import clsx from "clsx";


export default function MetricsIcons({popularity, followers}: any) {
  return (
    <section className="flex flex-col justify-around gap-10 md:flex-row md:justify-center md:gap-20">
        <div className="flex-col items-center space-y-4">
          <HeartIcon className="mx-auto w-10 text-spotify_green md:w-16" />
          <p className="text-center text-5xl font-bold">Popularity</p>
          <p className="text-center text-xl">
            <span
              className={clsx('font-bold text-spotify_green', {
                'text-red-500': popularity <= 50,
              })}
            >
              {popularity}
            </span>{' '}
            out of 100
          </p>
        </div>
        <div className="space-y-4">
          <ArrowTrendingUpIcon className="mx-auto w-10 text-spotify_green md:w-16" />
          <p className="text-center text-5xl font-bold">Followers</p>
          <p className="text-center text-xl">{followers}</p>
        </div>
      </section>
  )
}