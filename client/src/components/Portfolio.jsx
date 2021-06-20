import React, { useState, useEffect } from 'react';
const FEC = '../images/FEC_display.jpeg'

const Portfolio = () => {
  return (
    <div className='single-page' id='portfolio'>
      <div className='portfolio-page'>
        <h1>Portfolio</h1>
        <img src={FEC} width='300' />
      </div>
    </div>

  )
}
export default Portfolio;