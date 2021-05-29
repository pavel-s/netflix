import { TMediaItem } from '../types';

const genres = [
  { title: 'Children', genre: 'children' },
  { title: 'Drama', genre: 'drama' },
  { title: 'Romance', genre: 'romance' },
  { title: 'Suspense', genre: 'suspense' },
  { title: 'Thriller', genre: 'thriller' },
  { title: 'Comedies', genre: 'comedies' },
  { title: 'Crime', genre: 'crime' },
  { title: 'Documentaries', genre: 'documentaries' },
  { title: 'Feel good', genre: 'feel-good' },
];

type TSelectionResultItem = { title: string; items: TMediaItem[] };

/**
 * map films or series on genres
 */
export const selectionMap = (items: TMediaItem[]) => {
  const result: TSelectionResultItem[] = [];

  genres.forEach(({ genre, title }) => {
    result.push({
      title,
      items: items.filter((item) => item.genre === genre),
    });
  });

  return result.filter((genre) => genre.items.length > 0);
};
