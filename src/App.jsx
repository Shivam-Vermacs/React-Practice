import React, { useEffect, useState } from "react";
// import { useDebounce } from "./Components/hooks.jsx";
// App Component

const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);
  return debouncedValue;
};
const App = () => {
  const [input, setInput] = useState("");
  const debounced = useDebounce(input, 500);
  useEffect(() => {
    console.log("expensive operation");
  }, [debounced]);
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  return (
    <>
      <input type="text" onChange={handleChange} />
    </>
  );
};

export default App;
