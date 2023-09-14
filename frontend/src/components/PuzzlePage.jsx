import React from "react";
// import PuzzleBoard from "./PuzzleBoard";
// import PuzzlePiece from "./PuzzlePieces";
import MyJigsawPuzzle from "./JigsawPuzzle";


export const Puzzle = () => {
  return (
    <>
      <div className="puzzle">This is the puzzle page</div>
            {/* Render the PuzzleBoard component below */}
            <MyJigsawPuzzle />
    </>
  );
};