import { useState } from "react";

function App() {
  const [BulbOn, setBulbOn] = useState(false);
  return (
    <>
      <div>
        <LightBulb BulbOn={BulbOn} setBulbOn={setBulbOn} />
      </div>
    </>
  );
}

function LightBulb({ BulbOn, setBulbOn }) {
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
