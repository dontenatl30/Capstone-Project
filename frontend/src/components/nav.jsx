// import React from "react";
// import { Link, } from "react-router-dom";
// import { User } from 'phosphor-react'
// import './navbar.css'
// export const Navbar = () => {
//   return (
//     <>
//       <div id="navBar" className="navbar fixed-top navbar-light bg-light">  
//       <ul className="nav nav-pills nav-fill"> 
//           <li className="nav-item">
//             <a className="nav-link" href="/home">
//               Home
//             </a>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link" href="/home/theme">
//               Theme
//             </a>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link" href="/home/puzzle">
//               Puzzle
//             </a>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link" href="/home/scoreboard">  
//               Scoreboard
//             </a> 
//           </li> 
//         </ul>  <Link to='/profile/userId'>My Profile</Link><Link to='/logout'>Logout</Link> <User size={32}  />
//       </div> 

//     </>
//   );
// };

import React from "react";
import { Link, NavLink } from "react-router-dom"; // Import NavLink for active link styling
import { User } from 'phosphor-react'
import './navbar.css'

export const Navbar = () => {
  return (
    <>
      <div id="navBar" className="navbar fixed-top navbar-light bg-light">  
        <ul className="nav nav-pills nav-fill"> 
          <li className="nav-item">
            <NavLink to="/home" className="nav-link">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/home/theme" className="nav-link">
              Theme
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/home/puzzle" className="nav-link">
              Puzzle
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/home/scoreboard" className="nav-link">
              Scoreboard
            </NavLink>
          </li> 
        </ul>
        <Link to='/profile/userId'>My Profile</Link>
        <Link to='/logout'>Logout</Link>
        <User size={32}  />
      </div> 
    </>
  );
};








