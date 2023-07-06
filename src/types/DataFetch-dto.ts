type MovieResponse = {
  page: number;
  results: MovieData[];
  total_pages: number;
  total_results: number;
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

type TVSeriesResponse = {
  page: number;
  results: TVSeriesData[];
  total_pages: number;
  total_results: number;
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
