import React, { useState, useEffect } from 'react';
import {Link} from 'react-scroll'

const NavBar = () => {

  return (
    <div className='nav-bar-container'>
      <ul className='nav-bar'>
        <li><Link activeClass='active' to='home' spy={true} smooth={true} duration={250}>HOME</Link></li>
        <li><Link activeClass='active' to='about' spy={true} smooth={true} duration={250}>ABOUT</Link></li>
        <li><Link activeClass='active' to='portfolio' spy={true} smooth={true} duration={250}>PORTFOLIO</Link></li>
        <li><Link activeClass='active' to='contact' spy={true} smooth={true} duration={250}>CONTACT</Link></li>
      </ul>
    </div>

  )
}
export default NavBar;