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
    <div className='relative flex flex-col min-h-screen gap-0 font-[400]'>
       <Navbar/>  
       <div className='main-bg rounded-t-[2.5rem] flex-1 sm:mx-8'>
        <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/outil" element={<Model />} />
            <Route path="/infos" element={<Info />} />
            <Route path="*" element= {<Navigate to="/home"/>} />
        </Routes>
       <img src={Paths} alt="paths"  className='absolute -top-20 left-[10%] z-10 xs:hidden sm:hidden lg:block' />
       </div>

    </div>
  )
}

export default App;