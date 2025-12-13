import React, { useState } from "react";
import { ButtonComponent } from "./ButtonComponent";
import { InputComponent } from "./InputComponent";
export const VerifyAgeComponent = () => {
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
