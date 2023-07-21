type MoviesByGenre = {
  genreName: string;
  movies: MovieData[];
};

type TVSeriesByGenre = {
  genreName: string;
  series: TVSeriesData[];
};

type TVSeriesData = {
  backdrop_path: string;
  first_air_date: string;
  genre_ids: number[];
  id: number;
  name: string;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  vote_average: number;
  vote_count: number;
};

type GenreList = {
  genres: Genre[];
};

type Genre = {
  id: number;
  name: string;
};

type Language = {
  iso_639_1: string;
  english_name: string;
  name: string;
};

type MovieData = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

type VideoData = {
  iso_639_1: string;
  iso_3166_1: string;
  name: string;
  key: string;
  site: string;
  size: string;
  type: string;
  official: boolean;
  published_at: string;
  id: string;
};
