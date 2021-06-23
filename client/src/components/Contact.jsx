import React, { useState, useEffect } from 'react';

const Contact = () => {
  return (
    <div className='single-page' id='contact'>
      <div className='contact-page'>
        <h1 className='page-title'>Get In Touch</h1>
        <div>
          I am available for hire. If you want to talk to me about an opportunity, a project collaboration or just say Hi, I will get back to to ASAP.
        </div>
        <a className='media-link' href='mailto:mingwen314@gmail.com' rel='noopener noreferrer' target='_blank'>SEND MESSAGE</a><br></br>
        <a className='media-link' href='https://github.com/mingwencode' rel='noopener noreferrer' target='_blank'>GitHub</a><br></br>
        <a className='media-link' href='https://www.linkedin.com/in/yimingwen/' rel='noopener noreferrer' target='_blank'>LinkedIn</a>
      </div>
    </div>

  )
};

export default Contact;