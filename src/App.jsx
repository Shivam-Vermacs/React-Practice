import React from "react";
import { ButtonComponent } from "./Components/ButtonComponent";

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
  return (
    <>
      <div className="w-screen h-screen bg-slate-900">
        <div className="flex flex-col justify-center items-center gap-4">
          <div className="text-4xl p-24 text-red-400 ">Tailwind Hub</div>
          <div className="text-[30px] text-gray-300">Verify Age</div>
          <p className="text-gray-500">Please Confirm Your Age</p>
          <input
            type="text"
            className="px-8 py-2 rounded-md bg-transparent border border-gray-600 text-gray-100 "
            placeholder="Enter your Age"
          />
          <ButtonComponent disabled={true}>Continue</ButtonComponent>
        </div>
      </div>
    </>
  );
};
