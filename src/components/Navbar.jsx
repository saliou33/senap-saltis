import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import LogoIcon from '../assets/logo.svg';
import Hamburger from '../assets/hamburger.svg';

const links = ['home', 'infos', 'outil', 'contact'];
const linkStyle = 'hover:text-secondary hover:border-secondary border-transparent border-b-4 leading-[6rem]';
const linkStyleActive = 'text-primary hover:border-primary border-transparent border-b-4 leading-[6rem]';
const responsive = 'flex font-semibold text-lg gap-10 text-graydown xs:flex-col xs:bg-white xs:top-0 xs:right-0 xs:w-[15rem] xs:rounded-xl xs:h-screen xs:fixed xs:p-6 xs:gap-0 xs:pt-10 xs:z-[500] xs:border-1 xs:shadow'


const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  (() => {
    window.addEventListener('resize', () => {
      if(window.innerWidth > 768 ) setToggle(false);
    })
  })();

  const handleClick = () => {
    setToggle((prev) => !prev)
  }

  return (
    <div className='flex justify-between px-10 w-full items-center font-montserrat uppercase relative z-50'>
      <div className='flex items-center text-grayup text-2xl font-bold gap-2'>
        <img src={LogoIcon} alt="Logo car crash" className='w-[1.8rem]'/>
        <span className='leading-[6rem]'>SENAP</span>
      </div>

      <div className={toggle ? responsive: 'flex font-semibold text-lg gap-10 text-graydown xs:hidden md:flex'}>
        { links.map((v, i) => (
        <NavLink key={i} to={`/${v}`} className={({ isActive }) =>
        isActive ? linkStyleActive : linkStyle} >{v}</NavLink>
        ))}
      </div>

      <img src={Hamburger} alt="Hamburger" className="relative cursor-pointer md:hidden z-[1000]" onClick={handleClick}/> 
       
    </div>
  )
}

export default Navbar
