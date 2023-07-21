import { getLanguages, getPopularMovieData } from '@/utils/DataFetch';
import LanguageDropdown from '../components/LanguageDropdown';
import React from 'react';
import { checkIfLanguageHasMovies } from '@/utils/Utils';

export default async function Page() {
  const languages = await getLanguages();
  const movies = await getPopularMovieData(); //can i get language passed here from LanguageDropdown?
  console.log(`Languages in page ${JSON.stringify(languages)}`);
  console.log(`Movies in page ${JSON.stringify(movies)}`);
  const languagesWithMovies = checkIfLanguageHasMovies(languages, movies); //only returns en and spanish as only one page of movie data is returned, really should have lanugage passed in
  return (
    <>
      <h1>Browse By Language Page</h1>
      <LanguageDropdown movies={movies} languages={languagesWithMovies} />
    </>
  );
}
