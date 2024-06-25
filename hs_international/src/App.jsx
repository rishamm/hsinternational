import React from 'react'
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Aboutus from './pages/Aboutus';
import Services from './pages/Services';
import Export from './pages/Export';
import Travel from './pages/Travel';
const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/'  element={<Home/>}/>
      <Route path='/aboutus'  element={<Aboutus/>}/>
      <Route path='/services'  element={<Services/>}/>
      <Route path="/services/export" element={<Export />} /> 
      <Route path="/services/travel "element={<Travel />} /> 
    </Routes>
    </BrowserRouter>
  )
}

export default App