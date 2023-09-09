import React from "react";
// import PuzzleBoard from "./PuzzleBoard";
// import PuzzlePiece from "./PuzzlePieces";
import PuzzleImage from "./PuzzleImage";


export const Puzzle = () => {
  return (
    <>
      <div className="puzzle">This is the puzzle page</div>
            {/* Render the PuzzleBoard component below */}
            <PuzzleImage />
    </>
  );
};