import React, { useState, useEffect } from 'react';

const Portfolio = () => {
  return (
    <div className='single-page' id='portfolio'>
      <div className='portfolio-page'>
        <h1>Portfolio</h1>
        <img src={'../images/FEC_display.jpeg'} width='300' />
        <img src={'../images/sdc_display_sm.jpg'} width='300' />
        <img src={'../images/smove_display_sm.jpg'} width='300' />
        <img src={'../images/handy_display_sm.jpg'} width='300' />
        <img src={'../images/shooter_display_sm.jpg'} width='300' />
      </div>
    </div>

  )
}
export default Portfolio;