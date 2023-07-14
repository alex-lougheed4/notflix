'use client';
import { searchMovies } from '@/utils/DataFetch';
import MovieCard from '../../components/MovieCard';
import TVSeriesCard from '../../components/TVSeriesCard';

export type DetailProps = {
  params: { data: string };
};
export default async function Page({ params: { data } }: DetailProps) {
  console.log(`In detail page: ${data}`);
  const res = await searchMovies(data);
  console.log(`res ${res}`);

  return (
    <>
      <h1>hello</h1>
      <h3>{data}</h3>
    </>
  );
}
