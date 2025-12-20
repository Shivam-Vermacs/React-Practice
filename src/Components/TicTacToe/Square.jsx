import { useState } from "react";

export const Square = ({ value, onSquareClick }) => {
  return (
    <>
      <button
        onClick={onSquareClick}
        className="px-2 py-2 w-[50px] h-[50px] bg-gray-200 border border-gray-950"
      >
        {value}
      </button>
    </>
  );
};
