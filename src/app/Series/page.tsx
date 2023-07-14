import { getTVSeriesGenres, getTopRatedTVSeriesData } from '@/utils/DataFetch';
import { sortTVSeriesByGenre } from '@/utils/Utils';
import TVSeriesCard from '../components/TVSeriesCard';

export default async function Page() {
  const seriesGenres = (await getTVSeriesGenres()).genres;
  const seriesResponse = await getTopRatedTVSeriesData();
  const series = seriesResponse.results;
  const seriesByGenre: TVSeriesByGenre[] = sortTVSeriesByGenre(seriesGenres, series);

  return (
    <>
      {seriesByGenre.map((genre) => (
        <>
          <h3 className="mb-10 mt-5">{genre.genreName}</h3>
          <div className="flex gap-y-5 overflow-scroll no-scrollbar gap-x-5	">
            {genre.series.map((series) => (
              <TVSeriesCard key={series.id} series={series} />
            ))}
          </div>
        </>
      ))}
    </>
  );
}
