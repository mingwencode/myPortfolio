import React, { useState, useEffect } from 'react';
import Typist from 'react-typist'

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
          <span>I am a cod<Typist.Delay ms={500} />er
          <Typist.Backspace count={5} delay={1000} />
          <Typist.Delay ms={750} />
          Software Engineer
          </span>
        </Typist>
        <button onClick = {handleClick}> View my work</button>
      </div>
    </div>




  )
}
export default Home;