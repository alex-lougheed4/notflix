const API_KEY = '841bcb6cf60c8d3d4d5808816b600621';

export async function getPopularMovieData() {
  const data: MovieData[] = [];
  for (let i = 1; i <= 5; i++) {
    //maybe move into generic function to do all
    const response = await api<MovieResponse>(
      'https://api.themoviedb.org/3/movie/popular?language=en-US&page=i'
    );
    //console.log(`In Data fetch in loop ${JSON.stringify(response.results)}`);
    data.push(...response.results);
  }
  //console.log(`Data in fetch out of loop ${JSON.stringify(data)}`);
  return data;
}

export async function getPopularTVSeriesData() {
  const data = await api<TVSeriesResponse>(
    'https://api.themoviedb.org/3/tv/popular?language=en-US&page=1'
  );
  return data;
}

export async function searchMovies(movieName: string) {
  const data = await api<MovieResponse>(
    `https://api.themoviedb.org/3/search/movie?query=${movieName}&include_adult=false&page=1`
  );
  return data;
}
export async function searchSeries(seriesName: string) {
  const data = await api<TVSeriesResponse>(
    `https://api.themoviedb.org/3/search/tv?query=${seriesName}&include_adult=false&page=1`
  );
  return data;
}

export async function getTopRatedMovieData() {
  const data = await api<MovieResponse>(
    'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1'
  );
  return data;
}

export async function getTopRatedTVSeriesData() {
  const data = await api<TVSeriesResponse>(
    'https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1'
  );
  return data;
}

export async function getMovieGenres() {
  const data = await api<GenreList>('https://api.themoviedb.org/3/genre/movie/list?language=en');
  return data;
}

export async function getTVSeriesGenres() {
  const data = await api<GenreList>('https://api.themoviedb.org/3/genre/tv/list?language=en');
  return data;
}

export async function getLanguages() {
  const data = await api<Language[]>('https://api.themoviedb.org/3/configuration/languages');
  return data;
}

export async function getMovieTrailer(movieId: number) {
  const data = await api<VideoResponse>(`https://api.themoviedb.org/3/movie/${movieId}/videos`);
  return data;
}

export async function getSeriesTrailer(seriesId: number) {
  const data = await api<VideoResponse>(`https://api.themoviedb.org/3/tv/${seriesId}/videos`);
  return data;
}

function api<T>(url: string): Promise<T> {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NDFiY2I2Y2Y2MGM4ZDNkNGQ1ODA4ODE2YjYwMDYyMSIsInN1YiI6IjY0YTJkOTI1MTEzODZjMDBhZGM3YTI2MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gagQViwUcwujgKM4K5rkOXSWMktlZmSt9nb3mZvp3Sw',
    },
  };
  return fetch(url, options)
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json() as Promise<{ data: T }>;
    })
    .then((data) => {
      //console.log(data);
      return data as T;
    });
}
