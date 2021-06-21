import React, { useState, useEffect } from 'react';
import Modal from './Modal.jsx'

const displayPics = [
  {
    name: 'Triceratops Republic',
    disPic: '../images/FEC_display.jpeg'
  },
  {
    name: 'Project Catwalk System Design',
    disPic: '../images/sdc_display_sm.jpg'
  },
  {
    name: 'sMove',
    disPic: '../images/smove_display_sm.jpg'
  },
  {
    name: 'handyHelpers',
    disPic: '../images/handy_display_sm.jpg'
  },
  {
    name: 'Virus Shooter',
    disPic: '../images/shooter_display_sm.jpg'
  }
]

const Portfolio = () => {

  const showModal = (e, job) => {
    setModal(true);
    setCurrentProject(pic)
  }

  return (
    <div className='single-page' id='portfolio'>
      <div className='portfolio-page'>
        <h1>Portfolio</h1>
        {displayPics.map((pic,index) => {
          return <img src={pic.disPic} key={index} onClick={e => showModal(e, pic)} width='300' />
        })}
      </div>
    </div>

  )
}
export default Portfolio;