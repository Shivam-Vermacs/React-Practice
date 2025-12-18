import React from "react";
import { Square } from "./Square";
import { useState } from "react";

export const TicTacToe = () => {
  const [square, setSquare] = useState(Array(9).fill(null));
  const onSquareClick = () => {};
  return (
    <>
      <div className="w-screen h-screen flex flex-col justify-center items-center">
        <div className="flex">
          <Square value={square[0]} onSquareClick={onSquareClick} />
          <Square value={square[1]} onSquareClick={onSquareClick} />
          <Square value={square[2]} onSquareClick={onSquareClick} />
        </div>
        <div className="flex">
          <Square value={square[3]} onSquareClick={onSquareClick} />
          <Square value={square[4]} onSquareClick={onSquareClick} />
          <Square value={square[5]} onSquareClick={onSquareClick} />
        </div>
        <div className="flex">
          <Square value={square[6]} onSquareClick={onSquareClick} />
          <Square value={square[7]} onSquareClick={onSquareClick} />
          <Square value={square[8]} onSquareClick={onSquareClick} />
        </div>
      </div>
    </>
  );
};
