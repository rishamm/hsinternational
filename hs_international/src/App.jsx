import React from 'react'
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Aboutus from './pages/Aboutus';
const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/'  element={<Home/>}/>
      <Route path='/aboutus'  element={<Aboutus/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App