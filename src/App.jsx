import React from "react";
import { useDebounce } from "./Components/hooks.jsx";
// App Component
const App = () => {
  const debounced = useDebounce(fetchrequest);
  function fetchrequest() {
    fetch("https://jsonplaceholder.typicode.com/todos/1");
  }

  return (
    <>
      <input type="text" onChange={debounced} />
    </>
  );
};

export default App;
