import React from "react";
import { Square } from "./Square";
import { useState } from "react";

const checkWinner = (square) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (square[a] && square[a] == square[b] && square[b] == square[c]) {
      return square[a];
    }
  }
  return null;
};
export const TicTacToe = () => {
  const [square, setSquare] = useState(Array(9).fill(null));

  //Tracking the first(X's) move
  const [xIsNext, SetXIsNext] = useState(true);
  //Square Click Logic
  const handleClick = (i) => {
    if (square[i] || checkWinner(square)) {
      return;
    }

    const nextSquare = square.slice();

    //Condition to change the values depending upon the boolean values
    if (xIsNext) {
      nextSquare[i] = "X";
    } else {
      nextSquare[i] = "O";
    }

    setSquare(nextSquare);
    SetXIsNext(!xIsNext);

    console.log(nextSquare);
    console.log(xIsNext);
  };
  const winner = checkWinner(square);
  let status1;
  if (winner) {
    status1 = `Winner ${winner}`;
  } else {
    status1 = `Next Player : ${xIsNext ? "X" : "O"}`;
  }
  return (
    <>
      <div className="w-screen h-screen flex flex-col justify-center items-center">
        <div>{status1}</div>
        <div className="flex">
          <Square value={square[0]} onSquareClick={() => handleClick(0)} />
          <Square value={square[1]} onSquareClick={() => handleClick(1)} />
          <Square value={square[2]} onSquareClick={() => handleClick(2)} />
        </div>
        <div className="flex">
          <Square value={square[3]} onSquareClick={() => handleClick(3)} />
          <Square value={square[4]} onSquareClick={() => handleClick(4)} />
          <Square value={square[5]} onSquareClick={() => handleClick(5)} />
        </div>
        <div className="flex">
          <Square value={square[6]} onSquareClick={() => handleClick(6)} />
          <Square value={square[7]} onSquareClick={() => handleClick(7)} />
          <Square value={square[8]} onSquareClick={() => handleClick(8)} />
        </div>
      </div>
    </>
  );
};
