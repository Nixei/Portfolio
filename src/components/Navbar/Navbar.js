import React from 'react';
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
            id="education"
            text="EDUCATION"
          />
          <NavbarLink 
            id="projects"
            text="PROJECTS"
          />
          <NavbarLink 
            id="experience"
            text="EXPERIENCE"
          />
          <NavbarLink 
            id="skills"
            text="SKILLS"
          />
          <NavbarLink 
            id="home"
            text="HOME"
          />
      </NavbarNav>
    </NavbarContainer>
  );
};

export default Navbar