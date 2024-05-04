import { ReactElement, useEffect, useState } from 'react';
import { Track } from '../shared/classes';
import Table from './components/table/Table';
import GenreButtons from './components/genre-buttons/GenreButtons';
import './style.css';

const App = (): ReactElement => {
  const [tracks, setTracks] = useState<Track[]>();
  const [genres, setGenres] = useState<string[]>([]);
  const [currentGenre, setCurrentGenre] = useState<string>('');  

  const URL: string = 'http://localhost:3000';

  useEffect(() => {
    fetchTracks();

    fetch(`${URL}/genres`)
      .then((res) => res.json())
      .then((json) => setGenres(json))
      .catch((e) => console.log(e));
  }, []);

  const fetchTracks = () => {
    fetch(`${URL}/tracks`)
    .then((res) => res.json())
    .then((json) => setTracks(json))
    .catch((e) => console.log(e));    
  };

  const handleGenreSearch = (genre: string) => {
    fetch(`${URL}/search?genre=${genre}`)
      .then((res) => res.json())
      .then((json) => setTracks(json))
      .catch((e) => console.log(e));
  };

  const handleGenreClick = (genre: string) => {
    handleGenreSearch(genre);
    setCurrentGenre(genre);
  };

  const handleSort = (column: string, direction: string): void => {
    fetch(`${URL}/sort?column=${column}&direction=${direction}&genre=${currentGenre}`)
      .then((res) => res.json())
      .then((json) => setTracks(json))
      .catch((e) => console.log(e));
  };

  const handleTestClick = function (): void {
    // fetchTracks();
    console.table(tracks);
    console.log(genres);
    console.log('currentGenre', currentGenre);
  };



  return (
    <>
      <h1>DJ Database</h1>
      <button onClick={handleTestClick}>TEST</button>
      <GenreButtons genres={genres} handleGenreClick={handleGenreClick}></GenreButtons>
      {tracks && <Table tracks={tracks} handleSort={handleSort}></Table>}
    </>
  );
};

export default App;
