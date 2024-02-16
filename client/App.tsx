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
    fetch("http://localhost:3000/genres")
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
    console.log(genres);
    if (genres) {
      createGenreButtons(genres);
    } else {
      console.error("'genre' is null");
    }
  };

//create a button for each item in the array
  function createGenreButtons(btnNames: string[]): void {
    const buttonContainer = document.getElementById("button-container");

    if (!buttonContainer) {
      console.error("button-container div is null");
      return;
    }

    btnNames.forEach((btnName) => {
      const button = document.createElement("button");
      button.textContent = btnName;
      //show genre of clicked button in the console
      button.addEventListener("click", () => {
        console.log(btnName);
      });
      buttonContainer.appendChild(button);
    });
  }

  return (
    <>
      <h1>DJ Database</h1>
      <button onClick={handleTestClick}>TEST</button>
      <div id="button-container"></div>
      {tracks && <Table tracks={tracks} handleSort={handleSort}></Table>}
    </>
  );
};

export default App;
