import React from "react";
import { Navbar } from "./Nav";
import Stopwatch from "./Stopwatch";
// import PuzzleBoard from "./PuzzleBoard";
// import PuzzlePiece from "./PuzzlePieces";
// import PuzzleImage from "./PuzzleImage";
export const PuzzleComponent = () => {
  return (
    <>
            <Navbar />
            {/* Render the PuzzleBoard component below */}
            {/* <PuzzleImage /> */}
            <Stopwatch />
    </>
  );
};