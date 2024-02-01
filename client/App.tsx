import { ReactElement, useEffect, useState } from "react";
import { Record } from "../types/types";
import Table from "./components/table/Table";

const App = (): ReactElement => {

  const [records, setRecords] = useState<Record[]>();

  useEffect(() => {
    fetch('http://localhost:3000/records')
      .then((res) => res.json())
      .then((json) => setRecords(json))
      .catch((e) => console.log(e));
  }, []);

  const handleTestClick = function (): void {
    console.log(records);
  };

  return (
    <>
      <h1>DJ Database</h1>
      <button onClick={handleTestClick}>TEST</button>
      {records && <Table records={records}></Table>}
    </>

  );
};

export default App;