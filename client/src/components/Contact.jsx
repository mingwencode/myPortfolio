import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ScrollAnimation from 'react-animate-on-scroll';

const Contact = () => {
  return (
    <div className='single-page' id='contact'>
      <Container className='content-container'>
        <Row className='justify-content-md-center'>
          <Col className='page-title'>
          <ScrollAnimation animateIn='bounceInLeft'>
            Get In Touch
          </ScrollAnimation>
        </Col>
        </Row>
        <Row className='justify-content-md-center'>
          <Col xs={7}>
            <p className='inner-text'>
            I am available for hire. If you want to talk to me about an opportunity, a project collaboration or just say Hi, I will get back to to ASAP.
          </p>
          </Col>
        </Row>
        <Row>
          <Col>
          <a className='media-link' href='mailto:mingwen314@gmail.com' rel='noopener noreferrer' target='_blank'>SEND MESSAGE</a>
          </Col>
          <Col>
            <a className='media-link' href='https://github.com/mingwencode' rel='noopener noreferrer' target='_blank'>GitHub</a>
          </Col>
          <Col>
            <a className='media-link' href='https://www.linkedin.com/in/yimingwen/' rel='noopener noreferrer' target='_blank'>LinkedIn</a>
          </Col>
        </Row>
      </Container>
    </div>
  )
};

export default Contact;