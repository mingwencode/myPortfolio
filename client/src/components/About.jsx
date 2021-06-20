import React, { useState, useEffect } from 'react';
const profilePic = '../images/profile_pic.jpeg';

const About = () => {
  return (
    <div className='single-page' id='about'>
      <div className='about-page'>
        <h1>About</h1>
        <img src={profilePic} width="100" />
        <p>Hi, I am Ming, a Software Engineer / Graphic Designer / Business Consultant. You probably wonder why this person worked in so many different roles? The truth is, they are all connected, their works are representing different forms of arts.

        Software Engineers use a million lines of code to draw the human future. Designers express their feelings through colors. Business professionals see things no one else sees and bring them to life.

        I am here to paint the future.

        As a Software Engineer, I am currently working with:
        Javascript | React | Node | Express | PostgreSQL | MongoDB | MySQL | Jest | React Testing Library | GraphQL | Docker | AWS | NGINX | Python</p>
      </div>
    </div>

  )
};

export default About;