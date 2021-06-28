import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ScrollAnimation from 'react-animate-on-scroll';
import styled from 'styled-components';

const ColorText = styled.p`
  color: #C06014;
`;

const ResumeBtn = styled.a`
  &:hover {
    text-decoration-line: none;
  }
`;

const About = () => {
  return (
    <div className='single-page' id='about'>
      <Container className='content-container' fluid>
        <Row>
          <Col className='d-flex justify-content-center' md={5}>
            <ScrollAnimation animateIn='fadeIn' delay={100}>
              <img className='profile-pic' src={'../images/profile_pic.png'} width="450px" />
            </ScrollAnimation>
          </Col>
          <Col>
          <Container>
            <Row>
              <Col className='page-title'>
              <ScrollAnimation animateIn='bounceInRight'>
                ABOUT
              </ScrollAnimation>
              </Col>
            </Row>
            <Row>
              <Col className='d-flex justify-content-center'>
                <div>
                  <p className='inner-text-about'>Hi, I am Ming, a Software Engineer / Graphic Designer / Business Consultant. You probably wonder why this person worked in so many different roles? The truth is, they are all connected, their works are representing different forms of arts.
                  </p><br />
                  <p className='inner-text-about'>Software Engineers use a million lines of code to draw the human future. Designers express their feelings through colors. Business professionals see things no one else sees and bring them to life.</p><br />
                  <ColorText className='inner-text-about'>I am here to paint the future.</ColorText><br />
                </div>
              </Col>
            </Row>
            <Row className='about-tech-text'>
              <Col>
                <ul>
                <li>JavaScript</li>
                <li>React</li>
                <li>Node</li>
                <li>Express</li>
                <li>PostgreSQL</li>
                <li>MongoDB</li>
                </ul>
                <br />
              </Col>
              <Col>
                <ul>
                <li>MySQL</li>
                <li>Jest</li>
                <li>Docker</li>
                <li>AWS</li>
                <li>Niginx</li>
                <li>Python</li>
              </ul>
              <br />
              </Col>
            </Row>
            <Row>
              <Col>
                <ResumeBtn className='btnHome' href='./Ming_Wen_Resume.pdf' rel='noopener noreferrer' target='_blank'>Resume</ResumeBtn>
              </Col>
            </Row>
          </Container>
          </Col>
        </Row>
      </Container>
    </div>

  )
};

export default About;