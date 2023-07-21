import { getPopularMovieData } from '@/utils/DataFetch';
import MovieCard from './components/MovieCard';

export default async function Home() {
  const moviesResponse = await getPopularMovieData();
  return (
    <>
      <div className="grid frid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {moviesResponse.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </>
  );
}
