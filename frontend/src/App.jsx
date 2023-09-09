
import { useState, useEffect } from 'react';
import useApiFetcherThemeImages from "./Hooks/useApiFetcherThemeImages";
// import { createRoot } from 'react-dom'; 
import Phaser from 'phaser';
import UserLogin from '../components/Login';
import CreateUser from '../components/CreateUser';
import UserLogout from '../components/Logout';
import DeleteUser from '../components/DeleteUser';
import EditUser from '../components/EditUser';
import UserProfile from '../components/UserProfile';
import { MainPage } from '../components/Home';
import { Puzzle } from '../components/PuzzlePage';
import PixabayImageFetcher from './Hooks/useApiFetcherThemeImages';
// import withAuth from './withAuth';
import { Link } from 'react-router-dom'; // this link and the nav component for logout will need to be moved to be moved to the navbar upon merge
// import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from '../components/Nav';
import { Scoreboard } from '../components/ScoreBoard';
import { Theme } from '../components/PuzzleTheme';
import PuzzleImage from '../components/PuzzleImage';
import PuzzlePiece from '../components/PuzzlePieces';
import PuzzleBoard from '../components/PuzzleBoard';
// import PuzzleImage from './PuzzleImage';
// import { Theme } from './components/theme'
import "./App.css";

// include nearly ALL components except for register/createUser page  
// function ProtectedComponent() {
//   return <div>This is a protected component.</div>;
// }

// export default withAuth(ProtectedComponent); 

function App() {
  useEffect(() => {
    // Create a Phaser game instance
    const game = new Phaser.Game({
      type: Phaser.AUTO, // Use the WebGL renderer
      width: 0, // Set your desired width
      height: 0, // Set your desired height
      // Add more configuration options as needed
    });

    // Define your game scenes, sprites, and logic here

    return () => {
      // Clean up the game instance when the component unmounts
      game.destroy(true);
    };
  }, []); // Empty dependency array ensures this runs only once on mount

  // const fakeStoreUrl = "https://fakestoreapi.com/products"; // change the url to match the selected api once you have it on hand 
  // const [activeTab, setActiveTab] = useState("items");
  // const { data, error, loading } = useApiFetcherThemeImages(fakeStoreUrl); // change the url to match the selected api once you have it on hand

  return (
    <>
    <div className='App'>
      <Router>
        <Routes>
           <Route path='/register' element={<CreateUser />} />
           <Route path='/login' element={<UserLogin />} />

           <Route path='/home' element={<Navbar />} >
          <Route index element={<MainPage/> }/> 
           <Route path='/home/puzzle' element={<Puzzle />} />
           <Route path='/home/scoreboard' element={<Scoreboard />} />
           <Route path='/home/theme' element={<Theme />} />
           </Route>


           <Route path='/profile/:userId' element={<UserProfile />} />
           <Route path='/edit/:userId' element={<EditUser />} />
           <Route path='/delete/:userId' element={<DeleteUser />} />
           <Route path='/useApiFetcherThemeImages' element={<PixabayImageFetcher />} />
           
           <Route path='/PuzzlePieces' element={<PuzzlePiece />} />
           <Route path='/PuzzleBoard' element={<PuzzleBoard />} />
           <Route path='/PuzzleImage' element={<PuzzleImage />} />
           </Routes>
      </Router>
    </div>
  
    </>
  )
}

// const root = createRoot(document.getElementById('root')); // Create a root
// root.render(<App />); // Render the app inside the root

export default App
