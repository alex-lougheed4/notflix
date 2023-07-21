'use client';
import { filterTrailer } from '@/utils/Utils';
import { useOutsideClick } from '@/utils/useOutsideClick';
import { useState, useEffect } from 'react';
import { MovieImage } from './MovieImage';
import DetailedTVSeriesCard from './DetailedTVSeriesCard';
import { getSeriesTrailer } from '@/utils/DataFetch';

export type TVSeriesCardProps = {
  series: TVSeriesData;
};

export default function TVSeriesCard({ series }: TVSeriesCardProps) {
  const emptyDetail = {
    iso_639_1: '',
    iso_3166_1: '',
    name: '',
    key: '',
    site: '',
    size: '',
    type: '',
    official: false,
    published_at: '',
    id: '',
  };
  const errorDetail = {
    iso_639_1: '',
    iso_3166_1: '',
    name: 'error',
    key: '',
    site: '',
    size: '',
    type: '',
    official: false,
    published_at: '',
    id: '',
  };
  const [detailShown, setDetailShown] = useState(emptyDetail);
  async function handleClick() {
    console.log('poster click');
    const movieTrailer: VideoData = filterTrailer(await getSeriesTrailer(series.id));
    console.log(`${JSON.stringify(movieTrailer)} in seriescard`);
    if (movieTrailer.name != null) {
      setDetailShown(movieTrailer);
    } else {
      setDetailShown(errorDetail);
    }
    console.log(`In click handler ${detailShown.name}`);
  }

  const ref = useOutsideClick(() => {
    console.log('Clicked outside of MyComponent');
    setDetailShown(emptyDetail);
    console.log(`In outside click handler ${detailShown.name}`);
  });

  useEffect(() => {
    const html = document.querySelector('html');
    if (html) {
      html.style.overflow = detailShown.name ? 'hidden' : 'auto';
    }
  }, [detailShown]); // condition to watch to perform side effect

  return (
    <>
      <div className="group mb-12 text-center">
        <div
          onClick={handleClick}
          className="aspect-w-1 aspect-h-1 xl:aspect-w-7 xl:aspect-h-8 relative mx-auto h-48 w-48 overflow-hidden rounded-lg"
        >
          <MovieImage
            image={`https://image.tmdb.org/t/p/w500${series.poster_path}`}
            name={series.name}
            width={600}
            height={600}
          />
        </div>
      </div>
      <div ref={ref}>
        {detailShown.name ? <DetailedTVSeriesCard series={series} video={detailShown} /> : null}
      </div>
    </>
  );
}
