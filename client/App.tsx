import React, { ReactElement, useEffect, useState } from "react";

const App = (): ReactElement => {

  const [records, setRecords] = useState();

  useEffect(() => {
    fetch('http://localhost:3000/records')
      .then((res) => res.json())
      .then((json) => setRecords(json))
      .catch((e) => console.log(e));
  }, []);

  const handleTestClick = function(): void {
    console.log(records);
  };

  return (
    <>
    <h1>DJ Database</h1>
    <button onClick={handleTestClick}>TEST</button>
    </>
    
  )
};

export default App;