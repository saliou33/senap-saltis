import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoIcon from '../assets/logo.svg';

const links = ['home', 'infos', 'outil', 'contact'];
const linkStyle = 'hover:text-secondary hover:border-secondary border-transparent border-b-4 leading-[6rem]';
const linkStyleActive = 'text-primary hover:border-primary border-transparent border-b-4 leading-[6rem]';

const Navbar = () => {
  return (
    <div className='flex justify-between px-10 w-full items-center font-montserrat uppercase relative z-20'>
      <div className='flex items-center text-grayup text-2xl font-bold gap-2'>
        <img src={LogoIcon} alt="Logo car crash" className='w-[1.8rem]'/>
        <span className='leading-[6rem]'>SENAP</span>
      </div>

      <div className='flex font-semibold text-lg gap-10 text-graydown navbar-links'>
        { links.map((v, i) => (
        <NavLink key={i} to={`/${v}`} className={({ isActive }) =>
        isActive ? linkStyleActive : linkStyle} >{v}</NavLink>
        ))}
       
      </div>
    </div>
  )
}

export default Navbar
