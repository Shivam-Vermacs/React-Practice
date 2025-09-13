import { createContext, useState, useContext } from "react";

// Create Context for Bulb state
const BulbOnContext = createContext();
function App() {
  const [BulbOn, setBulbOn] = useState(false);
  return (
    <>
      <div>
        {/* Provide the Bulb state and setter to the context */}
        <BulbOnContext.Provider value={{ BulbOn, setBulbOn }}>
          <LightBulb />
        </BulbOnContext.Provider>
      </div>
    </>
  );
}

function LightBulb() {
  return (
    <>
      <BulbState />
      <Switch />
    </>
  );
}

function BulbState() {
  // Consume the Bulb state from context
  const { BulbOn } = useContext(BulbOnContext);
  return (
    <>
      <div>{BulbOn ? "Bulb on" : " Bulb off"}</div>
    </>
  );
}
// Consume the setter function from context to toggle the Bulb state
function Switch() {
  const { setBulbOn } = useContext(BulbOnContext);
  return (
    <>
      <div>
        <button onClick={() => setBulbOn((current) => !current)}>Toggle</button>
      </div>
    </>
  );
}
export default App;
