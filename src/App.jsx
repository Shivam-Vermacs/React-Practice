import { useState } from "react";

function App() {
  return (
    <>
      <div>
        <LightBulb />
      </div>
    </>
  );
}

function LightBulb() {
  const [BulbOn, setBulbOn] = useState(false);
  return (
    <>
      <BulbState BulbOn={BulbOn} />
      <Switch setBulbOn={setBulbOn} />
    </>
  );
}

function BulbState({ BulbOn }) {
  return (
    <>
      <div>{BulbOn ? "💡" : " 💤"}</div>
    </>
  );
}

function Switch({ setBulbOn }) {
  return (
    <>
      <div>
        <button onClick={() => setBulbOn((current) => !current)}>Toggle</button>
      </div>
    </>
  );
}
export default App;
