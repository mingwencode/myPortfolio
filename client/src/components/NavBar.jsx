import React, { useState, useEffect } from 'react';

const NavBar = () => {
  const handleClick = (e) => {
    console.log('clicked')
  }
  return (
    <ul className='nav-bar'>
      <li>Home</li>
      <li>About</li>
      <li>Portfolio</li>
      <li>Contact</li>
    </ul>
  )
}
export default NavBar;