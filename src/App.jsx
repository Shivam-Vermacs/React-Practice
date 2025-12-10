import React, { useState } from "react";
import { ButtonComponent } from "./Components/ButtonComponent";
import { InputComponent } from "./Components/InputComponent";

export const App = () => {
  return (
    <>
      <VerifyAgeComponent />
    </>
  );
};

function MyButton() {
  return (
    <>
      <div className="sm:grid grid-cols-3 ">
        <div className="bg-cyan-300">Button1</div>
        <div className="bg-cyan-400">Button2</div>
        <div className="bg-cyan-500">Button3</div>
      </div>
    </>
  );
}

const Response = () => {
  return (
    <>
      <div className="sm:bg-green-300 bg-red-400">Hey there!</div>
    </>
  );
};

const VerifyAgeComponent = () => {
  const [age, setAge] = useState("");
  function handleChange(e) {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      setAge(value);
    }
  }
  const isAgeValid = age >= 18;
  return (
    <>
      <div className="w-screen h-screen bg-zinc-900">
        <div className="flex flex-col justify-center items-center gap-4">
          <div className="text-4xl p-24 text-violet-400 ">Tailwind Hub</div>
          <div className="text-[30px] text-zinc-400">Verify Age</div>
          <p className="text-gray-500">Please Confirm Your Age</p>

          <InputComponent
            type={"text"}
            placeholder={"Enter Your Age"}
            value={age}
            onChange={handleChange}
          />
          <ButtonComponent disabled={!isAgeValid}>Continue</ButtonComponent>
        </div>
      </div>
    </>
  );
};
