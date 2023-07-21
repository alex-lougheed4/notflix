type MovieResponse = {
  page: number;
  results: MovieData[];
  total_pages: number;
  total_results: number;
};

type TVSeriesResponse = {
  page: number;
  results: TVSeriesData[];
  total_pages: number;
  total_results: number;
};

type VideoResponse = {
  id: number;
  results: VideoData[];
};
