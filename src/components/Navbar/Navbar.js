import React from 'react'
import NavbarLink from './NavbarLink';
import {NavbarContainer, NavbarNav, ThemeSwitch } from './ScNavbar';

const Navbar = ({toggleTheme}) => {
  return (
    <NavbarContainer>
      <NavbarNav>
        <ThemeSwitch
          title='Switch the Theme!'
          className='themeSwitchButton'
          onClick={() => toggleTheme()}
        />
          <NavbarLink 
            toId="education"
            text="EDUCATION"
          />
          <NavbarLink 
            toId="projects"
            text="PROJECTS"
          />
          <NavbarLink 
            toId="experience"
            text="EXPERIENCE"
          />
          <NavbarLink 
            toId="skills"
            text="SKILLS"
          />
          <NavbarLink 
            toId="home"
            text="HOME"
          />
      </NavbarNav>
    </NavbarContainer>
  );
};

export default Navbar