import React, { useState } from "react";

export const App = () => {
  return (
    <>
      <Counter />
    </>
  );
};

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      {count}
      <br />
      <Increase setCount={setCount} />
      <Decrease setCount={setCount} />
    </>
  );
};

const Increase = ({ setCount }) => {
  function increaseCount() {
    setCount((c) => c + 1);
  }
  return (
    <>
      <button onClick={increaseCount}>Increase</button>
    </>
  );
};
const Decrease = ({ setCount }) => {
  function decreaseCount() {
    setCount((c) => c - 1);
  }
  return (
    <>
      <button onClick={decreaseCount}>Decrease</button>
    </>
  );
};
