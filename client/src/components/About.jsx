import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const About = () => {
  return (
    <div className='single-page' id='about'>
      <Container className='about-page'>
        <Row>
          <Col className='page-title'>About</Col>
        </Row>
        <Row>
          <Col>
            <img src={'../images/profile_pic.jpeg'} width="100" />
          </Col>
          <Col>
            <p>Hi, I am Ming, a Software Engineer / Graphic Designer / Business Consultant. You probably wonder why this person worked in so many different roles? The truth is, they are all connected, their works are representing different forms of arts.

            Software Engineers use a million lines of code to draw the human future. Designers express their feelings through colors. Business professionals see things no one else sees and bring them to life.

            I am here to paint the future.

            As a Software Engineer, I am currently working with:
            Javascript | React | Node | Express | PostgreSQL | MongoDB | MySQL | Jest | React Testing Library | GraphQL | Docker | AWS | NGINX | Python</p>
          </Col>
        </Row>

      </Container>
    </div>

  )
};

export default About;