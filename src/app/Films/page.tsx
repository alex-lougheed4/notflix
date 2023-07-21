import { getMovieGenres, getTopRatedMovieData } from '@/utils/DataFetch';
import MovieCard from '@/app/components/MovieCard';
import { sortMoviesByGenre } from '@/utils/Utils';

export default async function Page() {
  const movieGenres = (await getMovieGenres()).genres;
  const moviesResponse = await getTopRatedMovieData();
  const movies = moviesResponse.results;
  const moviesByGenre: MoviesByGenre[] = sortMoviesByGenre(movieGenres, movies);
  const filteredMoviesByGenre: MoviesByGenre[] = moviesByGenre.filter(function (movies) {
    return movies.movies.length > 0;
  });
  return (
    <>
      {filteredMoviesByGenre.map((genre) => (
        <>
          <h3 className="mb-10 mt-5">{genre.genreName}</h3>
          <div className="flex gap-y-5 overflow-scroll no-scrollbar gap-x-5	">
            {genre.movies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        </>
      ))}
    </>
  );
}
