import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Reg } from './components/reg'
import { Login } from './components/login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='App'>
      <Router>
        {/* navbar goes here and included in all routes */}
        <Routes>
           <Route path='/register' element={<Reg />} />
           <Route path='/login' element={<Login />} />
          
        </Routes>
      </Router>
    </div>
    
    </>
  )
}

export default App
