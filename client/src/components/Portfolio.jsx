import React, { useState, useEffect } from 'react';
import PortfolioModal from './PortfolioModal.jsx';
import projects from '../data/portfolioData.js';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import ScrollAnimation from 'react-animate-on-scroll';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styled from 'styled-components';

const ModalTitle = styled.p`
  color: #C06014;
  font-size: 15pt;
  margin: auto;
`;

const ModalText = styled.p`
  font-size: 10pt;
  margin: auto;
`;

const Back = styled.div`
  opacity: 0.3;
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-color: #CDCDCD;
  clip-path: polygon(0% 0%,0% 100%,100% 100%);
`;

const TitleText = styled.div`
  color: black;
  padding-top: 8px;
  font-size: 15pt;
  font-family: 'Lato',sans-serif;
  font-weight: 400;
`;

const Portfolio = () => {


  const [show, setShow] = useState(false);
  const [currentProject, setCurrentProject] = useState({});

  const handleClose = () => setShow(false);
  const handleShow = (e, project) => {
    setCurrentProject(project)
    setShow(true);
  }

  return (
    <div className='single-page' id='portfolio'>
       <Back className='back-patten'></Back>
      <Container fluid className='content-container'>
        <Row>
          <Col className='page-title'>
              <ScrollAnimation animateIn='bounceInRight'>PORTFOLIO</ScrollAnimation>
          </Col>
        </Row>
        <ScrollAnimation animateIn='bounceInLeft'>
        <Row>
          {projects.map((project,index) => {
            return <Col className='project-container'><div className='project-card'>
                <img className='project-display-pic' src={project.disPic} key={index}/>
                <div className='overlay'>
                  <div className='overlay-text'>
                    <div>{project.name}</div>
                    <div>{project.sum}</div>
                    <div>{project.tech}</div>
                    <button
                    className='btn-more'
                    variant='primary' onClick={(e) => handleShow(e, project)} >LEARN MORE</button>
                  </div>
                </div>
                <TitleText className='titleText'>{project.name}</TitleText>
              </div></Col>
          })}
        </Row>
        </ScrollAnimation>

        <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        // size="xl"
        dialogClassName="my-modal"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        >
          <Modal.Header closeButton>
            <Modal.Title><ModalTitle>{currentProject.name}</ModalTitle></Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ModalText>{currentProject.description}</ModalText>
          </Modal.Body>
          <Modal.Body>
            <PortfolioModal currentProject={currentProject}/>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </div>

  )
}
export default Portfolio;