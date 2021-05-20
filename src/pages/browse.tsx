import { useContent } from '../hooks';
import { selectionMap } from '../utils.ts/selectionMap';

const Browse = () => {
  const films = useContent('films');
  const series = useContent('series');
  console.log(selectionMap(films));

  return (
    <>
      <pre>{JSON.stringify(films, null, 2)}</pre>
      <pre>{JSON.stringify(series, null, 2)}</pre>
    </>
  );
};

export default Browse;
