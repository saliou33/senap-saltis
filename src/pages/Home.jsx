import React from 'react';
import { NavLink } from 'react-router-dom';
import Chevron from '../assets/chevron-right.svg';
import Accident from '../assets/accident.png';

const Home = () => {
  return (
    <div className='relative z-20 flex font-montserrat xs:p-4 xs:py-16 xs:items-center md:px-16 md:py-32 justify-between xs:flex-col lg:flex-row xs:gap-*'>
      <div className='flex flex-col gap-3'>
        <h3 className='text-white font-roboto font-bold md:text-[2.5rem] xs:text-[1.5rem] uppercase'>SEN ~ Accident Prediction</h3>
        <h1 className=' uppercase text-grayup'>
          <span className='xs:text-[2rem] md:text-[2.7rem] font-[700]'>Vous Conduisez?</span>
          <span className='font-[800] block xs:text-[2.1rem] md:text-[2.9rem]'>prediction <br/> d’accidents</span>
        </h1>

        <p className='text-grayup break-words'>
        SENAP est basé sur un modéle d’intelligence Artificielle qui permet de savoir la gravité d’un éventuel accident. 
        </p> 

        <NavLink to='/outil' className='rounded-full px-6 py-3 bg-white flex items-center justify-between gap-6 w-[10rem] font-bold uppercase text-primary mt-8 hover:text-secondary'> 
          <span>Tester</span>
          <img src={Chevron} alt="Chevron" className='inline'/>
        </NavLink>
      </div>

      <div>
        <img src={Accident} alt="Accident image"  className='sm:w-[30rem] lg:w-[35rem]'/>
      </div>
    </div>
  )
}

export default Home;
