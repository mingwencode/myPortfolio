import React, { useState, useEffect } from 'react';
import Typist from 'react-typist';
import { Link } from 'react-scroll';
import Flip from 'react-reveal/Flip';
import styled from 'styled-components';

const NameDisplay = styled.span`
  color: #C06014;
`;

const Intro = styled.div`
  padding-bottom: 20px;
`;

const IntroContainer = styled.div`
  width: 50%;
  margin: auto;
  padding-top: 17%;
`;

const Home = () => {

  const [showButton, setShowButton] = useState(false)
  const handleClick = (e) => {
    console.log('clicked')
  }

  const buttonState = () => {
    setShowButton(true)
  }

  return (
    <div className='single-page' id='home'>
      <IntroContainer>
        <Intro>
          <Typist cursor={{ hideWhenDone: true, hideWhenDoneDelay: 0, }} onTypingDone={() => buttonState()}>
            <span>Hello, I am </span>
            <NameDisplay>Ming Wen</NameDisplay>
            <br />
            <span>I am a Designer<Typist.Delay ms={500} />
            <Typist.Backspace count={8} delay={500} />
            <Typist.Delay ms={300} />
            Software Engineer
            <Typist.Delay ms={200} />
            </span>
          </Typist>
        </Intro>
        {showButton ? <Link activeClass='active' to='portfolio' spy={true} smooth={true} duration={250} offset={1}><Flip left><button className='btnHome'>View my work</button></Flip></Link> : null}
      </IntroContainer>

    </div>
  )
}
export default Home;