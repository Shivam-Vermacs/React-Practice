import React, { useEffect, useState } from "react";
import { TodoList } from "./Components/TodoList";
import { NavbarMiniDemo } from "./Components/NavBarmini-demo";

function App() {
  const [showtimer, setShowTimer] = useState(true);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => setShowTimer((value) => !value), 500);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const intervalId = setInterval(
      () => setCounter((count) => count + 1),
      1000
    );
    return () => clearInterval(intervalId);
  }, []);

  return <div>{showtimer && <Timer counter={counter} />}</div>;
}

function Timer({ counter }) {
  return <div>{counter} Seconds</div>;
}

export default App;
