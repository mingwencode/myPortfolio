import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ScrollAnimation from 'react-animate-on-scroll';

const About = () => {
  return (
    <div className='single-page' id='about'>
      <Container className='content-container' fluid>
        <Row>
          <Col className='page-title'>
          <ScrollAnimation animateIn='bounceInLeft'>
            ABOUT
          </ScrollAnimation>
          </Col>
        </Row>
        <Row>
          <Col>
            <ScrollAnimation animateIn='fadeIn'>
              <img src={'../images/profile_pic.jpeg'} width="400" />
            </ScrollAnimation>
          </Col>
          <Col xs={7}>
            <div className='inner-text-about'>Hi, I am Ming, a Software Engineer / Graphic Designer / Business Consultant. You probably wonder why this person worked in so many different roles? The truth is, they are all connected, their works are representing different forms of arts.
            </div><br />
            <div className='inner-text-about'>Software Engineers use a million lines of code to draw the human future. Designers express their feelings through colors. Business professionals see things no one else sees and bring them to life.</div><br />
            <div className='inner-text-about'>I am here to paint the future.</div><br />
            <div>Javascript | React | Node | Express | PostgreSQL | MongoDB | MySQL | Jest | React Testing Library | GraphQL | Docker | AWS | NGINX | Python</div>
          </Col>
        </Row>
      </Container>
    </div>

  )
};

export default About;