import { useState } from 'react';
import useApiFetcherThemeImages from "./Hooks/useApiFetcherThemeImages";
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
// import { Theme } from './components/theme'
import "./App.css";

// import { JigsawPuzzle } from "react-jigsaw-puzzle/lib";
// import "react-jigsaw-puzzle/lib/jigsaw-puzzle.css";
// import img from "./gfgg.png";

// include nearly ALL components except for register/createUser page  
// function ProtectedComponent() {
//   return <div>This is a protected component.</div>;
// }

// export default withAuth(ProtectedComponent); 


function App() {
  // const fakeStoreUrl = "https://fakestoreapi.com/products"; // change the url to match the selected api once you have it on hand 
  // const [activeTab, setActiveTab] = useState("items");
  // const { data, error, loading } = useApiFetcherThemeImages(fakeStoreUrl); // change the url to match the selected api once you have it on hand

  return (
    <>

    <div className='App'>
      <Router>
        {/* navbar goes here and included in all routes */}
        <Navbar />
        <Routes>
           <Route path='/register' element={<CreateUser />} />
           <Route path='/login' element={<UserLogin />} />
           <Route path='/home' element={<MainPage />} />
           <Route path='/puzzle' element={<Puzzle />} />
           <Route path='/scoreboard' element={<Scoreboard />} />
           <Route path='/theme' element={<Theme />} />
           <Route path='/profile/:userId' element={<UserProfile />} />
           <Route path='/edit/:userId' element={<EditUser />} />
           <Route path='/delete/:userId' element={<DeleteUser />} />
           <Route path='/useApiFetcherThemeImages' element={<PixabayImageFetcher />} />

        </Routes>
      </Router>
    </div>
   
    </>
  )
}

export default App
