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
// import testUpload from './components/theme';
import PixabayImageFetcher from './Hooks/useApiFetcherThemeImages';
import MyJigsawPuzzle from './components/JigsawPuzzle';

import "./App.css";


function App() {

// const cloudName = 'dmnqttmxn'; 
// const apiKey = '551963275716726'; 

// const imageUrl = `https://res.cloudinary.com/${cloudName}/image/upload/${publicId}.jpg?api_key=${apiKey}`;

// // Fetch the image using the constructed URL
// fetch(imageUrl)
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }
//     return response.blob();
//   })
//   .then((imageBlob) => {
//     // Use the imageBlob as needed (e.g., display it in an <img> element)
//     const imageUrlObject = URL.createObjectURL(imageBlob);
//     const imgElement = document.createElement('img');
//     imgElement.src = imageUrlObject;
//     document.body.appendChild(imgElement);
//   })
//   .catch((error) => console.error('Error fetching image:', error));

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
           {/* <Route path='/theme' element={<testUpload />} /> */}
        </Routes>
      </Router>
    </div>
    </>
  )
}
export default App