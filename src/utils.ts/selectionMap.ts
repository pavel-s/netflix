import { TMediaItem } from '../types';

const genres = [
  { title: 'Children', genre: 'children' },
  { title: 'Drama', genre: 'drama' },
  { title: 'Romance', genre: 'romance' },
  { title: 'Suspense', genre: 'suspense' },
  { title: 'Thriller', genre: 'thriller' },
];

/**
 * map films or series on genres
 */
export const selectionMap = (items: TMediaItem[]) => {
  const result: { [genre: string]: { title: string; items: TMediaItem[] } } =
    {};

  genres.forEach(({ genre, title }) => {
    result[genre] = {
      title,
      items: items.filter((item) => item.genre === genre),
    };
  });

  return result;
};
