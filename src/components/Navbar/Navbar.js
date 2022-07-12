import React from 'react'
import {NavbarContainer, NavbarNav, ThemeSwitch } from './ScNavbar'
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavbarNav>
        <ThemeSwitch />
        <Link to='education' spy={true} smooth={true} offset={0} duration={500}><li className='navLinks'>EDUCATION</li></Link>
        <Link to='projects' spy={true} smooth={true} offset={0} duration={500}><li className='navLinks'>PROJECTS</li></Link>
        <Link to='experience' spy={true} smooth={true} offset={0} duration={500}><li className='navLinks'>EXPERIENCE</li></Link>
        <Link to='skills' spy={true} smooth={true} offset={0} duration={500}><li className='navLinks'>SKILLS</li></Link>
        <Link to='home' spy={true} smooth={true} offset={0} duration={500}><li className='navLinks'>HOME</li></Link>
      </NavbarNav>
    </NavbarContainer>
  );
};

export default Navbar