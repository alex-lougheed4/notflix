import { MovieImage } from './MovieImage';

export type MovieCardProps = {
  movie: MovieData;
};

export default function MovieCard({ movie: { title, id, poster_path } }: MovieCardProps) {
  return (
    <>
      <div className="group mb-10 text-center">
        <div className="aspect-w-1 aspect-h-1 xl:aspect-w-7 xl:aspect-h-8 relative mx-auto h-48 w-48 overflow-hidden rounded-lg">
          <MovieImage
            image={`https://image.tmdb.org/t/p/w500${poster_path}`}
            name={title}
            width={600}
            height={600}
          />
        </div>
        <h3 className="text-md mt-3 text-ab-white ">{title}</h3>
      </div>
    </>
  );
}
