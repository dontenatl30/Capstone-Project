import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <div className="navBar">
        <ul className="nav nav-pills nav-fill">
          <li className="nav-item">
            <a className="nav-link" href="./home">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="./theme">
              Theme
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="./puzzle">
              Puzzle
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="./scoreboard">
              Scoreboard
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};