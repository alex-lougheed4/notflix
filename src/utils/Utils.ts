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
export function sortTVSeriesByGenre(genreList: Genre[], series: TVSeriesData[]) {
  let sortedSeriesList: TVSeriesByGenre[] = [];

  genreList.forEach(function (genre) {
    const sortedSeries = series.filter(function (series) {
      return series.genre_ids.includes(genre.id);
    });
    const temp = { genreName: genre.name, series: sortedSeries };
    sortedSeriesList.push(temp);
  });
  return sortedSeriesList;
}

export function sortMoviesByLanguage(language: Language, movies: MovieData[]) {
  const res = movies.filter(function (movie) {
    return movie.original_language === language.iso_639_1;
  });
  return res;
}

export function checkIfLanguageHasMovies(languages: Language[], movies: MovieData[]) {
  let res: Language[] = [];

  languages.map((language) => {
    const moviesByLanguage = sortMoviesByLanguage(language, movies);
    if (moviesByLanguage.length > 0) {
      res.push(language);
    }
  });
  return res;
}

export function filterTrailer(data: VideoResponse) {
  const res = data.results.filter((video) => {
    return video.type === 'Trailer';
  });
  return res[0];
}
