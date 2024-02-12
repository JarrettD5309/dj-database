import { ReactElement, useEffect, useState } from "react";
import { Track } from "../types/classes";
import Table from "./components/table/Table";

const App = (): ReactElement => {

  const [tracks, setTracks] = useState<Track[]>();

  useEffect(() => {
    fetch('http://localhost:3000/tracks')
      .then((res) => res.json())
      .then((json) => setTracks(json))
      .catch((e) => console.log(e));
  }, []);

  const handleTestClick = function (): void {
    console.log(tracks);
  };

  return (
    <>
      <h1>DJ Database</h1>
      <button onClick={handleTestClick}>TEST</button>
      {tracks && <Table tracks={tracks}></Table>}
    </>

  );
};

export default App;