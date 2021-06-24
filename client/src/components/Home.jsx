import React, { useState, useEffect, useRef } from 'react';
import Typist from 'react-typist';
import { Link } from 'react-scroll';
import Flip from 'react-reveal/Flip';
import styled from 'styled-components';
import ParticlesBg from 'particles-bg';
import BIRDS from 'vanta/dist/vanta.birds.min'
import GLOBE from 'vanta/dist/vanta.globe.min'

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
  const [vantaEffect, setVantaEffect] = useState(0)
  const myRef = useRef(null)

  useEffect(() => {
    if (!vantaEffect) {
      // setVantaEffect(GLOBE({
      //   el: myRef.current,
      //   mouseControls: true,
      //   touchControls: true,
      //   gyroControls: false,
      //   minHeight: 200.00,
      //   minWidth: 200.00,
      //   scale: 1.00,
      //   scaleMobile: 1.00,
      //   color: 0xc06014,
      //   color2: 0x0,
      //   backgroundColor: 0xf4f4f4
      // }))
      setVantaEffect(BIRDS({
        el: myRef.current,
        backgroundColor: 0xf4f4f4
      }))
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])

  const handleClick = (e) => {
    console.log('clicked')
  }

  const buttonState = () => {
    setShowButton(true)
  }

  return (
    <div ref={myRef}>
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

      {/* <ParticlesBg color='#EDDBCD' num={8} type='circle' bg={true} /> */}
      {/* <ParticlesBg color={['#EDDBCD','#CDCDCD']} num={13} type='circle' bg={true} /> */}
      {/* <ParticlesBg color='#C06014' type='cobweb' num={150} bg={true} /> */}

    </div>
    </div>
  )
}
export default Home;