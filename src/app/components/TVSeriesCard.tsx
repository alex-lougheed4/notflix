import { MovieImage } from './MovieImage';

export type TVSeriesCardProps = {
  series: TVSeriesData;
};

export default function TVSeriesCard({ series: { name, id, poster_path } }: TVSeriesCardProps) {
  return (
    <>
      <div className="group mb-12 text-center">
        <div className="aspect-w-1 aspect-h-1 xl:aspect-w-7 xl:aspect-h-8 relative mx-auto h-48 w-48 overflow-hidden rounded-lg">
          <MovieImage
            image={`https://image.tmdb.org/t/p/w500${poster_path}`}
            name={name}
            width={600}
            height={600}
          />
        </div>
        <h3 className="text-md mt-6 text-ab-white">{name}</h3>
      </div>
    </>
  );
}
