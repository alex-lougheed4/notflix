'use client';
import { sortMoviesByLanguage } from '@/utils/Utils';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import React from 'react';
import { Fragment } from 'react';
import MovieCard from './MovieCard';

export type LanguageDropdownProps = {
  languages: Language[];
  movies: MovieResponse;
};

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function LanguageDropdown({ languages, movies }: LanguageDropdownProps) {
  const [language, setLanguage] = React.useState({ name: '', english_name: '', iso_639_1: '' });
  const handleLanguageSet = (val: Language) => {
    setLanguage(val);
  };

  const moviesByLanguage: MovieData[] = sortMoviesByLanguage(language, movies.results);
  return (
    <>
      <div className="flex">
        <p>{language.english_name}</p>
        <Menu as="div" className="fixed inline-block text-left right-1 h-10">
          <div>
            <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
              Languages
              <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
            </Menu.Button>
          </div>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute overflow-y-auto right-0 z-10 mt-2 h-20 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              {languages?.map((languageParam) => (
                <>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={classNames(
                          active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                          'block px-4 py-2 text-sm'
                        )}
                        onClick={() => {
                          handleLanguageSet(languageParam);
                        }}
                      >
                        {languageParam.english_name}
                      </button>
                    )}
                  </Menu.Item>
                </>
              ))}
            </Menu.Items>
          </Transition>
        </Menu>

        <div className="flex gap-y-5 mt-10 overflow-scroll no-scrollbar gap-x-5	">
          {moviesByLanguage.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </>
  );
}
