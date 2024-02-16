import { ReactElement, useEffect, useState } from "react";
import { Track } from "../shared/classes";
import Table from "./components/table/Table";

const App = (): ReactElement => {
  const [tracks, setTracks] = useState<Track[]>();
  const [genres, setGenres] = useState<string[]>();

  useEffect(() => {
    fetch("http://localhost:3000/tracks")
      .then((res) => res.json())
      .then((json) => setTracks(json))
      .catch((e) => console.log(e));

    // fetch genres and setGenres here
    fetch('http://localhost:3000/genres')
    .then((res) => res.json())
    .then((json) => setGenres(json))
    .catch((e) => console.log(e));
  }, []);

  const handleSort = (column: string, direction: string): void => {
    fetch(`http://localhost:3000/sort?column=${column}&direction=${direction}`)
      .then((res) => res.json())
      .then((json) => setTracks(json))
      .catch((e) => console.log(e));
  };

  const handleTestClick = function (): void {
    console.table(tracks);
    console.table(genres);
  };

  return (
    <>
      <h1>DJ Database</h1>
      <button onClick={handleTestClick}>TEST</button>
      {tracks && <Table tracks={tracks} handleSort={handleSort}></Table>}
    </>
  );
};

export default App;
