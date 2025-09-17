import { useState, useEffect } from "react";

const useJsonFetch = () => {
  const [jsondata, setJsondata] = useState({});

  const getJsondata = async () => {
    const resp = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const data = await resp.json();
    setJsondata(data);
  };
  useEffect(() => {
    getJsondata();
  }, []);
  return {
    jsondata,
  };
};
// App Component
const App = () => {
  const { jsondata } = useJsonFetch();
  return (
    <>
      <div>
        {jsondata.title ? <h1>{jsondata.title}</h1> : <h1>Loading...</h1>}
      </div>
    </>
  );
};

export default App;
