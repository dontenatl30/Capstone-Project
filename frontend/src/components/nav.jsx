import React from "react";
import { Link } from "react-router-dom";
import { User } from 'phosphor-react'
import './navbar.css'
export const Navbar = () => {
  return (
    <>
      <div id="navBar" className="navbar fixed-top navbar-light bg-light">  
      <ul className="nav nav-pills nav-fill"> 
          <li className="nav-item">
            <a className="nav-link" href="/welcome">
              Start
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/home/theme">
              Play
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="/home/scoreboard">  
              Scoreboard
            </a> 
          </li> 
        </ul>  <Link to='/profile/userId'>My Profile</Link><Link to='/logout'>Logout</Link> <User size={32}  />
      </div> 
      


    </>
  );
};







