import React from 'react'
import {NavbarContainer, NavbarNav, ThemeSwitch } from './ScNavbar'

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavbarNav>
        <ThemeSwitch />
        <li><a>EDUCATION</a></li>
        <li><a>PROJECTS</a></li>
        <li><a>EXPERIENCE</a></li>
        <li><a>SKILLS</a></li>
        <li><a>HOME</a></li>
        <li><a>HOME</a></li>
      </NavbarNav>
    </NavbarContainer>
  );
};

export default Navbar