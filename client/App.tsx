import { ReactElement, useEffect, useState } from 'react';
import { Track } from '../shared/classes';
import Table from './components/table/Table';

const App = (): ReactElement => {
  const [tracks, setTracks] = useState<Track[]>();
  const [genres, setGenres] = useState<string[]>();

  const URL: string = 'http://localhost:3000';

  useEffect(() => {
    fetch(`${URL}/tracks`)
      .then((res) => res.json())
      .then((json) => setTracks(json))
      .catch((e) => console.log(e));

    fetch(`${URL}/genres`)
      .then((res) => res.json())
      .then((json) => setGenres(json))
      .catch((e) => console.log(e));
  }, []);

  const handleGenreSearch = (genre: string) => {
    fetch(`${URL}/search?genre=${genre}`)
      .then((res) => res.json())
      .then((json) => setTracks(json))
      .catch((e) => console.log(e));
  };

  const handleSort = (column: string, direction: string): void => {
    fetch(`${URL}/sort?column=${column}&direction=${direction}`)
      .then((res) => res.json())
      .then((json) => setTracks(json))
      .catch((e) => console.log(e));
  };

  const handleTestClick = function (): void {
    console.table(tracks);
    console.log(genres);
  };



  return (
    <>
      <h1>DJ Database</h1>
      <button onClick={handleTestClick}>TEST</button>
      {genres?.map((genre) => (<button key={genre} onClick={() => handleGenreSearch(genre)}>{genre}</button>))}
      {tracks && <Table tracks={tracks} handleSort={handleSort}></Table>}
    </>
  );
};

export default App;
