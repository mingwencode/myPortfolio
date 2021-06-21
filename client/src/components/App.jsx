import React, { useState, useEffect } from 'react';
import NavBar from './NavBar';
import Home from './Home';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';

const App = () => {
  return (
    <>
      <NavBar />
      <div className='main'>
        <Home />
        <About />
        <Portfolio />
        <Contact/>
      </div>
    </>

  )
}
export default App;