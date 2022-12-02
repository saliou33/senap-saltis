import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components';
import Paths from './assets/paths.png';
import Home from './pages/Home';
import Info from './pages/Info';
import Contact from './pages/Contact';
import Model from './pages/Model';
import './App.css';

const App = () => {
  return (
    <div className='relative flex flex-col min-h-screen gap-0 overflow-hidden font-[400]'>
       <Navbar/>
       <div className='main-bg rounded-t-[2.5rem] flex-1'>
        <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/outil" element={<Model />} />
            <Route path="/infos" element={<Info />} />
            <Route path="*" element= {<Navigate to="/home"/>} />
        </Routes>
       </div>

       <img src={Paths} alt="paths"  className='absolute -top-10 left-[10%] z-10' />
    </div>
  )
}

export default App;