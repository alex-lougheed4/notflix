export function sortMoviesByGenre(genreList: Genre[], movies: MovieData[]) {
  let sortedMovieList: MoviesByGenre[] = [];

  genreList.forEach(function (genre) {
    const sortedMovies = movies.filter(function (movie) {
      return movie.genre_ids.includes(genre.id);
    });
    const temp = { genreName: genre.name, movies: sortedMovies };
    sortedMovieList.push(temp);
  });
  return sortedMovieList;
}

////for each genre in movieGenrees
//movieGenres.map((genre) =>
//  //filter movies into new array if the movie's genre_ids include the genre.id
//  moviesByGenre.find(genre.name).push(
//    movies.filter(function (movie) {
//      if (movie.genre_ids.includes(genre.id)) return movie;
//    })
//  )
//);
