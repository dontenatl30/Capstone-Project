import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <div class="navBar">
        <ul class="nav nav-pills nav-fill">
          <li class="nav-item">
            <a class="nav-link" href="./home">
              Home
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="./theme">
              Theme
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="./puzzle">
              Puzzle
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="./scoreboard">
              Scoreboard
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};
