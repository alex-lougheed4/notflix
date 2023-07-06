import { getTopRatedTVSeriesData } from '@/utils/DataFetch';
import TVShowCard from '../components/TVSeriesCard';

export default async function Page() {
  const tvSeriesResponse = await getTopRatedTVSeriesData();
  return (
    <>
      <div className="grid frid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {tvSeriesResponse.results.map((series) => (
          <TVShowCard key={series.id} series={series} />
        ))}
      </div>
    </>
  );
}
