import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserLogin from './components/Login';
import CreateUser from './components/CreateUser';
import UserLogout from './components/Logout';
import DeleteUser from './components/DeleteUser';
import EditUser from './components/EditUser';
import UserProfile from './components/UserProfile';
import { MainPage } from './components/home';
import { PuzzleComponent } from './components/PuzzlePage';
import { Scoreboard } from './components/ScoreBoard';
import { Theme } from './components/PuzzleTheme';
import PixabayImageFetcher from './Hooks/useApiFetcherThemeImages';
import MyJigsawPuzzle from './components/JigsawPuzzle';
import { Welcome } from './components/Welcome';
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
           <Route path='/register' element={<CreateUser />} />
           <Route path='/login' element={<UserLogin />} />
           <Route path='/' element={<MainPage />} />
           <Route path='/welcome' element={<Welcome />} />
           <Route path='/logout' element={<UserLogout/>} />
           <Route path='/home/puzzle/:difficulty' element={<PuzzleComponent />} />
           <Route path='/home/scoreboard' element={<Scoreboard />} />
           <Route path='/home/theme' element={<Theme />} />
           <Route path='/profile/:userId' element={<UserProfile />} />
           <Route path='/edit/:userId' element={<EditUser />} />
           <Route path='/delete/:userId' element={<DeleteUser />} />
           <Route path='/useApiFetcherThemeImages' element={<PixabayImageFetcher />} />
           <Route path='/MyJigsawPuzzle' element={<MyJigsawPuzzle />} /> PixabayImageFetcher
           <Route path='/Hooks/useApiFetcherThemeImages' element={<PixabayImageFetcher />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


