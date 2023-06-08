import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import "./App.css"

import Home from './Component/Home'
import About from './Component/About'
import Service from './Component/Service'
import Appointment from './Component/Appointment'
import Contact from './Component/Contact'

const App = () => {
  return (
    <BrowserRouter>
    
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/About' element={<About />} /> 
      <Route path='/Service' element={<Service/>} />
      <Route path='/Appointment' element={<Appointment/>} />
      <Route path='/Contact' element={<Contact />} /> 
    </Routes>

    </BrowserRouter>
  )
}

export default App