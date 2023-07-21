import { getPopularMovieData, getPopularTVSeriesData } from '@/utils/DataFetch';
import MovieCard from '../components/MovieCard';
import TVSeriesCard from '../components/TVSeriesCard';

export default async function Page() {
  const popularTVSeriesResponse = await getPopularTVSeriesData();
  const popularMoviesResponse = await getPopularMovieData();

  return (
    <>
      <h3 className="mb-10 mt-5">Popular Movies</h3>
      <div className="flex gap-y-5 overflow-scroll no-scrollbar	">
        {popularMoviesResponse.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
      <h3 className="mb-10 mt-5">Popular Series</h3>
      <div className="flex gap-y-5 overflow-scroll no-scrollbar	">
        {popularTVSeriesResponse.results.map((series) => (
          <TVSeriesCard key={series.id} series={series} />
        ))}
      </div>
    </>
  );
}
