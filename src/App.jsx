import React from "react";
import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";
import { counterAtom } from "./store/atoms/counter";
export const App = () => {
  return (
    <>
      <RecoilRoot>
        <Counter />
      </RecoilRoot>
    </>
  );
};

const Counter = () => {
  return (
    <>
      <CurrentCount />
      <br />
      <Increase />
      <Decrease />
    </>
  );
};

const CurrentCount = () => {
  const count = useRecoilValue(counterAtom);
  return <>{count}</>;
};
const Increase = () => {
  const setCount = useSetRecoilState(counterAtom);
  function increaseCount() {
    setCount((c) => c + 1);
  }
  return (
    <>
      <button onClick={increaseCount}>Increase</button>
    </>
  );
};
const Decrease = () => {
  const setCount = useSetRecoilState(counterAtom);
  function decreaseCount() {
    setCount((c) => c - 1);
  }
  return (
    <>
      <button onClick={decreaseCount}>Decrease</button>
    </>
  );
};
