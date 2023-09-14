import React, { useState, useEffect } from 'react';
// import useApiFetcherThemeImages from "./Hooks/useApiFetcherThemeImages";
// import { createRoot } from 'react-dom';
import UserLogin from './components/Login';
import CreateUser from './components/CreateUser';
import UserLogout from './components/Logout';
import DeleteUser from './components/DeleteUser';
import EditUser from './components/EditUser';
import UserProfile from './components/UserProfile';
import { PuzzleComponent } from './components/PuzzlePage';
  import{ MainPage }from './components/Home';
// import PixabayImageFetcher from './Hooks/useApiFetcherThemeImages

// import withAuth from './withAuth';
import { Link } from 'react-router-dom'; // this link and the nav component for logout will need to be moved to be moved to the navbar upon merge
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Nav';
import { Scoreboard } from './components/ScoreBoard';
import { Theme } from './components/PuzzleTheme';
// import PuzzleImage from '../components/PuzzleImage';
// import PuzzlePiece from '../components/PuzzlePieces';
import PuzzleBoard from './components/PuzzleBoard';
// import PuzzleImage from './PuzzleImage';
import "./App.css";
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
        <Routes>
           <Route path='/register' element={<CreateUser />} />
           <Route path='/login' element={<UserLogin />} />
           <Route path='/logout' element= {<UserLogout />} />
           <Route path='/home' element={<MainPage />} />
           <Route index element={<Navbar/> }/>
           <Route path='/home/puzzle' element={<PuzzleComponent />} />
           <Route path='/home/scoreboard' element={<Scoreboard />} />
           <Route path='/home/theme' element={<Theme />} />
           <Route path='/profile/userId' element={<UserProfile />} />
           <Route path='/edit/:userId' element={<EditUser />} />
           <Route path='/delete/:userId' element={<DeleteUser />} />
           {/* <Route path='/useApiFetcherThemeImages' element={<PixabayImageFetcher />} /> */}
           <Route path='/PuzzleBoard' element={<PuzzleBoard />} />
           </Routes>
      </Router>
    </div>
    </>
  )
}
// const root = createRoot(document.getElementById('root')); // Create a root
// root.render(<App />); // Render the app inside the root
export default App