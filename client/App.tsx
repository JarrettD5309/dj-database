import React, { useEffect } from "react";

const App = (): React.JSX.Element => {

  useEffect(() => {
    fetch('http://localhost:3000/test')
      .then((res) => res.json())
      .then((json) => console.log(json));
  }, []);

  return (
    <h1>Typescript is okay</h1>
  )
};

export default App;