import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { Reg } from './components/reg'
import { Login } from './components/login'
import { Navbar } from './components/nav'
import { Home } from './components/home'
import { Theme } from './components/theme'
import { Puzzle } from './components/puzzle'
import { Scoreboard } from './components/scoreboard'

function App() {


  return (
    <>
    <div className='App'>
      <Router>
        {/* navbar goes here and included in all routes */}
        
        <Navbar />
        
        <Routes>
           <Route path='/register' element={<Reg />} />
           <Route path='/login' element={<Login />} />
           <Route path='/home' element={<Home />} />
           <Route path='/theme' element={<Theme />} />
           <Route path='/puzzle' element={<Puzzle />} />
           <Route path='/scoreboard' element={<Scoreboard />} />
           
           
          
          
        </Routes>
      </Router>
    </div>
    
    </>
  )
}

export default App
