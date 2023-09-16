import { ListNumbers, PuzzlePiece } from "phosphor-react";
import React from "react";
import { Navbar } from "./Nav";

export const MainPage = () => {
  
  return (
    <>
    <Navbar />
    <div className="container mt-5">
      <div className="jumbotron">
        <h1 className="display-4">Welcome to PuzzleCrafts</h1>
        <p className="lead">
          Explore a world of creativity through puzzles and crafts.
        </p>
        <PuzzlePiece size={75} /><PuzzlePiece size={75} /><PuzzlePiece size={75} />
        <hr className="my-4" />
        <p>
          PuzzleCrafts is your destination for fun and engaging puzzles and
          creative crafting projects. Join us on this exciting journey!
        </p>
        <a className="btn btn-primary btn-lg" href="/puzzle" role="button">
          Start Exploring
        </a>
      </div>
    </div>
    </>
  );
};