import React from 'react';
import NavBar from './NavBar';
import Home from './Home';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';

const App = () => {
  return (
    <div className='main'>
      <NavBar />
      <Home />
      <About />
      <Portfolio />
      <Contact/>
    </div>
  )
}
export default App;