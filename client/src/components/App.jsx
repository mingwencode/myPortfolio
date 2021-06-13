import React, { useState, useEffect } from 'react';
import Home from './Home';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';

const App = () => {
  return (

    <div className='main'>
      <h1>In APP</h1>
      <Home />
      <About />
      <Portfolio />
      <Contact />
    </div>

  )
}
export default App;