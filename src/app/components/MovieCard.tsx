'use client';
import { getMovieTrailer } from '@/utils/DataFetch';
import { MovieImage } from './MovieImage';
import { filterTrailer } from '@/utils/Utils';
import DetailedMovieCard from './DetailedMovieCard';
import { useEffect, useState } from 'react';
import { useOutsideClick } from '@/utils/useOutsideClick';

export type MovieCardProps = {
  movie: MovieData;
};

//onClick get Video and call filterTrailer, pass movie and trailer into showing detailed Videoo Card
export default function MovieCard({ movie }: MovieCardProps) {
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
  const [detailShown, setDetailShown] = useState(emptyDetail);
  async function handleClick() {
    //console.log('poster click');
    //console.log(`Movie data: ${JSON.stringify(movie)}`);
    const movieTrailer: VideoData = filterTrailer(await getMovieTrailer(movie.id));
    //console.log(`${JSON.stringify(movieTrailer)} (trailer) in moviecard`);
    setDetailShown(movieTrailer);
  }

  const ref = useOutsideClick(() => {
    //console.log('Clicked outside of MyComponent');
    setDetailShown(emptyDetail);
    //console.log(`In outside click handler ${detailShown.name}`);
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
            image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            name={movie.title}
            width={600}
            height={600}
          />
        </div>
      </div>
      <div ref={ref}>
        {detailShown.name ? <DetailedMovieCard movie={movie} video={detailShown} /> : null}
      </div>
    </>
  );
}
