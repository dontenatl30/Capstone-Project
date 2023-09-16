// import React, { useState, useEffect } from 'react';
// import UserLogin from './components/Login';
// import CreateUser from './components/CreateUser';
// import UserLogout from './components/Logout';
// import DeleteUser from './components/DeleteUser';
// import EditUser from './components/EditUser';
// import UserProfile from './components/UserProfile';
// import { MainPage } from './components/home';
// import { Puzzle } from './components/PuzzlePage';
// // import withAuth from './withAuth';
// import { Link } from 'react-router-dom'; // this link and the nav component for logout will need to be moved to be moved to the navbar upon merge
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { Navbar } from '../components/Nav';
// import { Scoreboard } from '../components/ScoreBoard';
// import { Theme } from '../components/PuzzleTheme';
// // import { Theme } from './components/theme'
// import "./App.css";


// function App() {
//   // const fakeStoreUrl = "https://fakestoreapi.com/products"; // change the url to match the selected api once you have it on hand 
//   // const [activeTab, setActiveTab] = useState("items");
//   // const { data, error, loading } = useApiFetcherThemeImages(fakeStoreUrl); // change the url to match the selected api once you have it on hand

//   return (
//     <>

//     <div className='App'>
//       <Router>
//         <Routes>
//            <Route path='/register' element={<CreateUser />} />
//            <Route path='/login' element={<UserLogin />} />
//            <Route path='/home' element={<MainPage />} />
//            <Route path='/puzzle' element={<Puzzle />} />
//            <Route path='/scoreboard' element={<Scoreboard />} />
//            <Route path='/theme' element={<Theme />} />
//            <Route path='/profile/:userId' element={<UserProfile />} />
//            <Route path='/edit/:userId' element={<EditUser />} />
//            <Route path='/delete/:userId' element={<DeleteUser />} />
//            <Route path='/useApiFetcherThemeImages' element={<PixabayImageFetcher />} />

//         </Routes>
//       </Router>
//     </div>
//     </>
//   )
// }
// // const root = createRoot(document.getElementById('root')); // Create a root
// // root.render(<App />); // Render the app inside the root
// export default App


// import React, { useState } from 'react';
// import UserLogin from '../components/Login';
// import CreateUser from '../components/CreateUser';
// import UserLogout from '../components/Logout';
// import DeleteUser from '../components/DeleteUser';
// import EditUser from '../components/EditUser';
// import UserProfile from '../components/UserProfile';
// import { MainPage } from '../components/Home';
// import { Puzzle } from '../components/PuzzlePage';
// import PixabayImageFetcher from './Hooks/useApiFetcherThemeImages';
// // import withAuth from './withAuth';
// import { Link } from 'react-router-dom'; // this link and the nav component for logout will need to be moved to be moved to the navbar upon merge
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { Navbar } from '../components/Nav';
// import { Scoreboard } from '../components/ScoreBoard';
// import { Theme } from '../components/PuzzleTheme';
// // import { Theme } from './components/theme'
// import "./App.css";

// function App() {
//   return (
//     <>
//     <div className='App'>
//       <Router>
//         <Routes>
//            <Route path='/register' element={<CreateUser />} />
//            <Route path='/login' element={<UserLogin />} />
//            <Route path='/home' element={<MainPage />} />
//            <Route path='/puzzle' element={<Puzzle />} />
//            <Route path='/scoreboard' element={<Scoreboard />} />
//            <Route path='/theme' element={<Theme />} />
//            <Route path='/profile/:userId' element={<UserProfile />} />
//            <Route path='/edit/:userId' element={<EditUser />} />
//            <Route path='/delete/:userId' element={<DeleteUser />} />
//            <Route path='/PuzzleBoard' element={<PuzzleBoard />} />
//            </Routes>

//            <Route path='/useApiFetcherThemeImages' element={<PixabayImageFetcher />} />
//            <Route path='/MyJigsawPuzzle' element={<MyJigsawPuzzle />} /> PixabayImageFetcher
//            <Route path='/Hooks/useApiFetcherThemeImages' element={<PixabayImageFetcher />} />
//            </Routes>

//       </Router>
//     </div>
//     </>
//   )
// }
// export default App


import React, { useState, useEffect } from 'react';
import UserLogin from './components/Login';
import CreateUser from './components/CreateUser';
import UserLogout from './components/Logout';
import DeleteUser from './components/DeleteUser';
import EditUser from './components/EditUser';
import UserProfile from './components/UserProfile';
import { MainPage } from './components/home';
import { PuzzleComponent } from './components/PuzzlePage';
// import withAuth from './withAuth';
import { Link } from 'react-router-dom'; // this link and the nav component for logout will need to be moved to be moved to the navbar upon merge
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Scoreboard } from './components/ScoreBoard';
import { Theme } from './components/PuzzleTheme';
import PixabayImageFetcher from './Hooks/useApiFetcherThemeImages';
import MyJigsawPuzzle from './components/JigsawPuzzle';
import "./App.css";
// import { JigsawPuzzle } from "react-jigsaw-puzzle/lib";
// import "react-jigsaw-puzzle/lib/jigsaw-puzzle.css";
// import img from "./gfgg.png";

function App() {

   return (
    <>

        <div className='App'>
      <Router>
        <Routes>
           <Route path='/register' element={<CreateUser />} />
           <Route path='/login' element={<UserLogin />} />
           <Route path='/home' element={<MainPage />} />
           <Route path='/logout' element={<UserLogout/>} />
           <Route path='/home/puzzle' element={<PuzzleComponent />} />
           <Route path='/home/scoreboard' element={<Scoreboard />} />
           <Route path='/home/theme' element={<Theme />} />
           <Route path='/profile/:userId' element={<UserProfile />} />
           <Route path='/edit/:userId' element={<EditUser />} />
           <Route path='/delete/:userId' element={<DeleteUser />} />
           <Route path='/useApiFetcherThemeImages' element={<PixabayImageFetcher />} />
           <Route path='/MyJigsawPuzzle' element={<MyJigsawPuzzle />} /> PixabayImageFetcher
           <Route path='/Hooks/useApiFetcherThemeImages' element={<PixabayImageFetcher />} />
        </Routes>
      </Router>
    </div>
    </>
  )
}
export default App