import React from "react";
import { PuzzlePiece } from "phosphor-react";
import { Navbar } from "./Nav";
import { Link } from "react-router-dom";

export const Welcome = () => {
    return (
      <>
      <Navbar />

      <div className="container mt-5">
  <div className="row">
    <div className="col-lg-8 offset-lg-2">
      <div className="card">
        <div className="card-header">
          <h1 className="text-center">Welcome!</h1>
          <PuzzlePiece size={75} />
          <PuzzlePiece size={75} />
          <PuzzlePiece size={75} />
          <h3>Please Read Carefully</h3>
        </div>
        <div className="card-body">
          <p>Welcome to PuzzleCrafts! Follow the instructions below to get started:</p>
          <ol>
            <li>Select Your Puzzle Theme</li>
            <li>Select Your Difficulty Level</li>
            <li>Review Image and Complete your Puzzle</li>
          </ol>
        </div>
        <div className="card-footer text-muted text-center">
          &copy; 2023 PuzzleCrafts
        </div>
      </div>
      <div className="text-center mt-3">
        <Link to="/home/theme" className="btn btn-primary">Explore Themes</Link>
      </div>
    </div>
  </div>
</div>
</>
      
    );
  };