import React from 'react'
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Aboutus from './pages/Aboutus';
import Services from './pages/Services';
const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/'  element={<Home/>}/>
      <Route path='/aboutus'  element={<Aboutus/>}/>
      <Route path='/services'  element={<Services/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App