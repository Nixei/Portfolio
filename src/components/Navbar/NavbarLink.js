import React from 'react';
import { Link } from 'react-scroll';

const NavbarLink = ({id, text}) => {

  return (
    <Link
        to={id}
        spy={true}
        smooth={true}
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