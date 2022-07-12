import React from 'react'
import {NavbarContainer, NavbarNav, ThemeSwitch } from './ScNavbar'
import { HashLink as Link } from "react-router-hash-link";

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavbarNav>
        <ThemeSwitch />
        <Link to='#education'><li>EDUCATION</li></Link>
        <Link to='#projects'><li>PROJECTS</li></Link>
        <Link to='#experience'><li>EXPERIENCE</li></Link>
        <Link to='#skills'><li>SKILLS</li></Link>
        <Link to='#home'><li>HOME</li></Link>
      </NavbarNav>
    </NavbarContainer>
  );
};

export default Navbar