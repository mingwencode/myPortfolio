import React, { useState, useEffect } from 'react';
import PortfolioModal from './PortfolioModal.jsx';
import projects from '../data/portfolioData.js';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Fade from 'react-reveal/Fade';
import ScrollAnimation from 'react-animate-on-scroll';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
      <Container fluid className='content-container'>
        <Row>
          <Col className='page-title'>
              <ScrollAnimation animateIn='bounceInRight'>Portfolio</ScrollAnimation>
          </Col>
        </Row>
        <Row>
          <Col className='project-container'>
            <ScrollAnimation animateIn='bounceInLeft'>
              {projects.map((project,index) => {
                return <div className='project-card'>
                    <img className='project-display-pic' src={project.disPic} key={index}/>
                    <div className='overlay'>
                      <div>{project.name}</div>
                      <div>{project.tech}</div>
                      <button variant='primary' onClick={(e) => handleShow(e, project)} >LEARN MORE</button>
                    </div>
                  </div>
              })}
            </ScrollAnimation>
          </Col>
        </Row>

        <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        >
          <Modal.Header closeButton>
            <Modal.Title>{currentProject.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>{currentProject.description}</p>
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