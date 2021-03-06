import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ScrollAnimation from 'react-animate-on-scroll';
import styled from 'styled-components';

const ContactText = styled.p`
  padding-bottom: 45px;
`;

const IconText = styled.div`
  text-align: center;
  font-size: 10pt;
  font-weight:bold;
  font-family: 'Roboto Mono', monospace;
`;

const Contact = () => {
  return (
    <div className='single-page' id='contact'>
      <Container className='content-container'>
        <Row className='justify-content-center'>
          <Col className='page-title'>
          <ScrollAnimation animateIn='bounceInLeft'>
            GET IN TOUCH
          </ScrollAnimation>
        </Col>
        </Row>
        <Row className='justify-content-center'>
          <Col xs={7}>
            <ContactText className='inner-text'>
            I am available for hire. <br/>If you want to discuss about an opportunity, a project collaboration or just say Hi,<br/>I will get back to you ASAP.
          </ContactText>
          </Col>
        </Row>
        <Row >
          <Col className='d-flex justify-content-end'>
            <ScrollAnimation animateIn='flipInY' delay={700}>
                <a className='media-link' href='mailto:mingwen314@gmail.com' rel='noopener noreferrer' target='_blank'><img className=' icon-button' src='../images/mail.png'/></a>
                <IconText>MESSAGE</IconText>
            </ScrollAnimation>
          </Col>
          <Col className='d-flex justify-content-center'>
            <ScrollAnimation animateIn='flipInY' delay={800}>
              <a className='media-link' href='https://github.com/mingwencode' rel='noopener noreferrer' target='_blank'><img className=' icon-button' src='../images/github.png'/></a>
              <IconText>CODE</IconText>
            </ScrollAnimation>
          </Col>
          <Col className='d-flex justify-content-start'>
            <ScrollAnimation animateIn='flipInY' delay={900}>
              <a className='media-link' href='https://www.linkedin.com/in/yimingwen/' rel='noopener noreferrer' target='_blank'><img className=' icon-button' src='../images/linkedIn.png'/></a>
              <IconText>CONNECT</IconText>
            </ScrollAnimation>
          </Col>
        </Row>
      </Container>
      <ScrollAnimation animateIn='fadeIn'>
        <footer>
          <div>Designed & Built by Ming Wen &#169; 2021</div>
        </footer>
      </ScrollAnimation>
    </div>
  )
};

export default Contact;