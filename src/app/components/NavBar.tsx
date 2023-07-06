import * as React from 'react';

function NavBar() {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-black-500 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <svg
          className="fill-red-700 h-8 w-8 mr-2"
          width="54"
          height="54"
          viewBox="0 0 50 25"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M5.39.004l4.75 13.46v-.007l.376 1.06c2.088 5.908 3.21 9.075 3.216 9.082.004 0 .32.02.702.04 1.156.05 2.59.18 3.676.31.25.03.466.04.48.03l-4.71-13.36-.436-1.23-2.423-6.85c-.46-1.3-.85-2.408-.87-2.45L10.12 0H5.395zM13.898.012l-.01 5.306-.008 5.306-.437-1.232V9.39l-.565 11.81c.555 1.567.852 2.403.855 2.407.004.004.32.024.702.042 1.157.05 2.59.18 3.68.31.25.03.467.04.48.03s.02-5.42.017-12.01L18.604.01h-4.706zM5.39.002v11.99c0 6.594.007 11.995.015 12.003s.416-.03.907-.086c.49-.06 1.17-.13 1.51-.16.518-.05 2.068-.15 2.248-.15.052 0 .056-.27.063-5.08l.008-5.08.38 1.06.13.376.57-11.8-.19-.546-.88-2.44-.03-.087H5.39z" />
        </svg>
        <span className="font-semibold text-xl text-red-700 tracking-tight">Notflix</span>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          <a
            href="/"
            className="block mt-4 lg:inline-block lg:mt-0 text-white-200 hover:text-white mr-4"
          >
            Home
          </a>
          <a
            href="/Series"
            className="block mt-4 lg:inline-block lg:mt-0 text-white-200 hover:text-white mr-4"
          >
            Series
          </a>
          <a
            href="/Films"
            className="block mt-4 lg:inline-block lg:mt-0 text-white-200 hover:text-white mr-4"
          >
            Films
          </a>
          <a
            href="/Featured"
            className="block mt-4 lg:inline-block lg:mt-0 text-white-200 hover:text-white mr-4"
          >
            New & Popular
          </a>
          <a
            href="/List"
            className="block mt-4 lg:inline-block lg:mt-0 text-white-200 hover:text-white mr-4"
          >
            My List
          </a>
          <a
            href="/Language"
            className="block mt-4 lg:inline-block lg:mt-0 text-white-200 hover:text-white"
          >
            Browse by Language
          </a>
        </div>
      </div>
      <div className="mx-auto max-w-md">
        <form action="" className="relative mx-auto w-max">
          <input
            type="search"
            className="peer cursor-pointer relative z-10 h-12 w-12 rounded-full border bg-transparent pl-12 outline-none focus:w-full focus:cursor-text focus:border-red-300 focus:pl-16 focus:pr-4"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute inset-y-0 my-auto h-8 w-12 border-r border-transparent stroke-gray-500 px-3.5 peer-focus:border-red-300 peer-focus:stroke-red-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </form>
      </div>
    </nav>
  );
}
export default NavBar;
