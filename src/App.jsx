import { useState } from "react";

const useCounter = () => {
  const [count, setCount] = useState(0);
  const IncreaseCount = () => {
    setCount((count) => count + 1);
  };
  return {
    count: count,
    IncreaseCount: IncreaseCount,
  };
};
// App Component
const App = () => {
  const { count, IncreaseCount } = useCounter();
  return (
    <>
      <div>
        <h1>Counter App</h1>
        <p>Current Count: {count}</p>
        <button onClick={IncreaseCount}>Increase </button>
      </div>
    </>
  );
};

export default App;
