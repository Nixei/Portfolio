import React from 'react';
import { Link } from 'react-scroll';

const NavbarLink = ({toId, text}) => {
  return (
    <Link
        to={toId}
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
    >
        <li
            className='navLinks'
        >
            {text}
        </li>
    </Link>
  )
}

export default NavbarLink