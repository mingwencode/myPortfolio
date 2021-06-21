import React, { useState, useEffect } from 'react';

const Contact = () => {
  return (
    <div className='single-page' id='contact'>
      <div className='contact-page'>
        <h1>Get In Touch</h1>
        <a className='media-link' href='mailto:mingwen314@gmail.com' rel='noopener noreferrer' target='_blank'>Say Hello</a><br></br>
        <a className='media-link' href='https://github.com/mingwencode' rel='noopener noreferrer' target='_blank'>GitHub</a><br></br>
        <a className='media-link' href='https://www.linkedin.com/in/yimingwen/' rel='noopener noreferrer' target='_blank'>LinkedIn</a>
      </div>
    </div>

  )
};

export default Contact;