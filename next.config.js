/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: 'export',
  // Optional: Add a trailing slash to all paths `/about` -> `/about/`
  // trailingSlash: true,
  // Optional: Change the output directory `out` -> `dist`
  // distDir: 'dist',
};

module.exports = nextConfig;

module.exports = {
  images: {
    domains: ['tmdb.org', 'themoviedb.org', 'image.tmdb.org'],
  },
};
