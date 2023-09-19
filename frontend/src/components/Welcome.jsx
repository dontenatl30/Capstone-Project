import React from "react";
import { PuzzlePiece } from "phosphor-react";
import { Navbar } from "./Nav";
import { Link } from "react-router-dom";

export const Welcome = () => {
    return (
      <>
      <Navbar />

      <div class="container mt-5">
  <div class="row">
    <div class="col-lg-8 offset-lg-2">
      <div class="card">
        <div class="card-header">
          <h1 class="text-center">Welcome!</h1>
          <PuzzlePiece size={75} />
          <PuzzlePiece size={75} />
          <PuzzlePiece size={75} />
          <h3>Please Read Carefully</h3>
        </div>
        <div class="card-body">
          <p>Welcome to PuzzleCrafts! Follow the instructions below to get started:</p>
          <ol>
            <li>Select Your Puzzle Theme</li>
            <li>Select Your Difficulty Level</li>
            <li>Review Image and Complete your Puzzle</li>
          </ol>
        </div>
        <div class="card-footer text-muted text-center">
          &copy; 2023 PuzzleCrafts
        </div>
      </div>
      <div class="text-center mt-3">
        <Link to="/home/theme" className="btn btn-primary">Explore Themes</Link>
      </div>
    </div>
  </div>
</div>
</>
      
    );
  };