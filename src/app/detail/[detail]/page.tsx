import MovieCard from '@/app/components/MovieCard';
import TVSeriesCard from '@/app/components/TVSeriesCard';
import { searchMovies, searchSeries } from '@/utils/DataFetch';

export type DetailProps = {
  params: { detail: string };
};
export default async function Page({ params }: DetailProps) {
  //add sort dropdown? e.g release date, rating etc
  const searchMovieResults = await searchMovies(params.detail as string);
  const searchSeriesResults = await searchSeries(params.detail as string);
  //console.log(`movies res ${JSON.stringify(searchMovieResults)}`);
  //console.log(`series res ${JSON.stringify(searchSeriesResults)}`);

  return (
    <>
      <h3 className="mb-10 mt-5">Movie Results</h3>
      <div className="flex gap-y-5 overflow-scroll no-scrollbar	">
        {searchMovieResults.results.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
      <h3 className="mb-10 mt-5">Series Results</h3>
      <div className="flex gap-y-5 overflow-scroll no-scrollbar	">
        {searchSeriesResults.results.map((series) => (
          <TVSeriesCard key={series.id} series={series} />
        ))}
      </div>
    </>
  );
}
