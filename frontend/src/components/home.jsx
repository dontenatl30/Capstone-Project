import { ListNumbers, PuzzlePiece } from "phosphor-react";
import React from "react";
// import { Navbar } from "./Nav";

export const MainPage = () => {
  return (
    <>
    {/* <Navbar /> */}
    <div className="container mt-5">
      <div className="jumbotron">
        <h1 className="display-4">Welcome to PuzzleCrafts</h1>
        <p className="lead">
          Explore a world of creativity through puzzles!
        </p>
        <PuzzlePiece size={75} /><PuzzlePiece size={75} /><PuzzlePiece size={75} />
        <hr className="my-4" />
        <p>
          PuzzleCrafts is a game designed and engineered by Donte LeBlanc and Eric Williams
        </p>
        <a className="btn btn-primary btn-lg" href="/register" role="button">
          Register Now
        </a>
      </div>
    </div>
    </>
  );
};