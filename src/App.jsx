import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login.jsx'
import Signup from './pages/Signup.jsx'
import Netflix from './pages/Netflix.jsx'

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/Login" element={<Login />}/>
            <Route exact path="/Signup" element={<Signup />}/>
              <Route exact path="/" element={<Netflix />}/>
        </Routes>
      </BrowserRouter>

          </div>
          )
}
