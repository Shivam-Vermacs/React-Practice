import React, { useState } from "react";
import { useJsonFetch } from "./Components/hooks.jsx";
import { useFetch } from "./Components/hooks.jsx";
// App Component
const App = () => {
  const { jsondata } = useJsonFetch();
  const [url, setUrl] = useState(1);
  const { data, loading } = useFetch(
    `https://jsonplaceholder.typicode.com/todos/${url}`
  );
  if (loading) {
    return <h1>Loading...</h1>;
  }
  return (
    <>
      <div>
        {jsondata.title ? <h1>{jsondata.title}</h1> : <h1>Loading...</h1>}
      </div>
      <button onClick={() => setUrl(1)}>1</button>
      <button onClick={() => setUrl(2)}>2</button>
      <button onClick={() => setUrl(3)}>3</button>
      <div>{JSON.stringify(data)}</div>
    </>
  );
};

export default App;
