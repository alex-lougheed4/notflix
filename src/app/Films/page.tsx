import { getMovieGenres, getTopRatedMovieData } from '@/utils/DataFetch';
import MovieCard from '@/app/components/MovieCard';
import { sortMoviesByGenre } from '@/utils/Utils';

export default async function Page() {
  const movieGenres = (await getMovieGenres()).genres;
  const moviesResponse = await getTopRatedMovieData();
  const movies = moviesResponse.results;
  const moviesByGenre: MoviesByGenre[] = sortMoviesByGenre(movieGenres, movies);

  console.log(moviesByGenre);

  ////for each genre in movieGenrees
  //movieGenres.map((genre) =>
  //  //filter movies into new array if the movie's genre_ids include the genre.id
  //  moviesByGenre.find(genre.name).push(
  //    movies.filter(function (movie) {
  //      if (movie.genre_ids.includes(genre.id)) return movie;
  //    })
  //  )
  //);
  return (
    <>
      {moviesByGenre.map((genre) => (
        <>
          <h3 className="mb-10">{genre.genreName}</h3>
          <div className="flex gap-y-5 overflow-scroll gap-x-5	">
            {genre.movies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        </>
      ))}
    </>
  );
}
