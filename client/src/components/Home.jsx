import React, { useState, useEffect } from 'react';
import Typist from 'react-typist';
import Particles from "react-tsparticles";
import { Link } from 'react-scroll';
import Flip from 'react-reveal/Flip';

const Home = () => {

  const [showButton, setShowButton] = useState(false)
  const handleClick = (e) => {
    console.log('clicked')
  }

  const buttonState = () => {
  //   return <div><Wobble>
  //   <button><Link activeClass='active' to='portfolio' spy={true} smooth={true} duration={250}>View my work</Link></button>
  // </Wobble></div>
  setShowButton(true)
  }

  return (
    <div className='single-page' id='home'>

      <div className='home-page'>
        <Typist cursor={{ hideWhenDone: true, hideWhenDoneDelay: 0, }} onTypingDone={() => buttonState()}>
          <span>Hello, I am Ming Wen</span>
          <br />
          <span>I am a Designer<Typist.Delay ms={500} />
          <Typist.Backspace count={8} delay={500} />
          <Typist.Delay ms={300} />
          Software Engineer
          <Typist.Delay ms={200} />
          </span>
        </Typist>
        {showButton ? <Flip left><button className='btnHome'><Link activeClass='active' to='portfolio' spy={true} smooth={true} duration={250}>View my work</Link></button></Flip> : null}
      </div>
    </div>

  )
}
export default Home;