import React, { useState, useEffect } from 'react';
import Typist from 'react-typist';
import Particles from "react-tsparticles";
import { Link } from 'react-scroll'

const Home = () => {
  const handleClick = (e) => {
    console.log('clicked')
  }

  return (
    <div className='single-page' id='home'>

      <div className='home-page'>
        <Typist cursor={{ hideWhenDone: true, hideWhenDoneDelay: 0, }}>
          <span>Hello, I am Ming Wen</span>
          <br />
          <span>I am a Design<Typist.Delay ms={500} />er
          <Typist.Backspace count={8} delay={1000} />
          <Typist.Delay ms={750} />
          Software Engineer
          </span>
        </Typist>
        <button><Link activeClass='active' to='portfolio' spy={true} smooth={true} duration={250}>View my work</Link></button>
      </div>
    </div>




  )
}
export default Home;