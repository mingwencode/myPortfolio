import React, { useState, useEffect } from 'react';

const Home = () => {
  const handleClick = (e) => {
    console.log('clicked')
  }
  return (
    <div className='single-page'>
      <div className='home-page'>
        <h1>Hello, I am Ming Wen</h1>
        <h1>I am a Software Engineer</h1>
        <button onClick = {handleClick}> View my work</button>
      </div>
    </div>




  )
}
export default Home;