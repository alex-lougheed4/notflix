/*
Centered Card covering whole page
Trailer at top 
Title beneath
Overview?
Release Date
Vote_average as rating
Cast Section on right
Genre's beneath

*/
import { useRef, useEffect, useState } from 'react';
import ReactPlayer from 'react-player/youtube';

export type DetailedMovieCardProps = {
  movie: MovieData;
  video: VideoData;
};

export default function DetailedMovieCard({ movie, video }: DetailedMovieCardProps) {
  return (
    <>
      <div className="fixed pb-10 bg-neutral-900 mb-12 justify-items-center text-center justify-self-center z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <ReactPlayer
          className=" justify-self-center top-0 left-0"
          url={`https://www.youtube.com/watch?v=${video.key}`}
          volume={0}
          muted={true}
          playing={true}
          width="100%"
          controls={true}
        />
        <h1 className="text-2xl">{movie.title}</h1>
        <p className="text-green-500">Score: {movie.vote_average}</p>
        <p>Released: {movie.release_date}</p>
        <p>{movie.overview}</p>
      </div>
    </>
  );
}
