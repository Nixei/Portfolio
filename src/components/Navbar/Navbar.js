import React from 'react'
import {NavbarContainer, NavbarNav, ThemeSwitch } from './ScNavbar'
import { HashLink as Link } from "react-router-hash-link";

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavbarNav>
        <ThemeSwitch />
        <Link to=''><li>EDUCATION</li></Link>
        <Link to=''><li>PROJECTS</li></Link>
        <Link to=''><li>EXPERIENCE</li></Link>
        <Link to=''><li>SKILLS</li></Link>
        <Link to=''><li>HOME</li></Link>
      </NavbarNav>
    </NavbarContainer>
  );
};

export default Navbar