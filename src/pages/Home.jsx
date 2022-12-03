import React from 'react';
import { NavLink } from 'react-router-dom';
import Chevron from '../assets/chevron-right.svg';
import Accident from '../assets/accident.png';

const Home = () => {
  return (
    <div className='relative z-20 flex font-montserrat px-16 py-32 justify-between '>
      <div>
        <h3 className='text-white font-roboto font-bold text-[2.5rem] uppercase'>SEN ~ Accident Prediction</h3>
        <h1 className=' uppercase text-grayup'>
          <span className='text-[2.7rem] font-[700]'>Vous Conduisez?</span>
          <span className='font-[800] block text-[2.9rem]'>prediction <br/> d’accidents</span>
        </h1>

        <p className='w-[30rem] text-grayup'>
        SENAP est basé sur un modéle d’intelligence Artificielle qui permet de savoir la gravité d’un éventuel accident. 
        </p> 

        <NavLink to='/outil' className='rounded-full px-6 py-3 bg-white flex items-center justify-between gap-6 w-[10rem] font-bold uppercase text-primary mt-8 hover:text-secondary'> 
          <span>Tester</span>
          <img src={Chevron} alt="Chevron" className='inline'/>
        </NavLink>
      </div>

      <div>
        <img src={Accident} alt="Accident image"/>
      </div>
    </div>
  )
}

export default Home;
