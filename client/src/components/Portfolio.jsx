import React, { useState, useEffect } from 'react';
import PortfolioModal from './PortfolioModal.jsx';
import projects from '../data/portfolioData.js';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Flip from 'react-reveal/Flip';

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
      <div className='portfolio-page'>
        <h1>Portfolio</h1>
          {projects.map((project,index) => {
            return <Flip>
              <div className='project-card'>
                <img className='project-display-pic' src={project.disPic} key={index}/>
                <div className='overlay'>
                  <div>{project.name}</div>
                  <div>{project.tech}</div>
                  <button variant='primary' onClick={(e) => handleShow(e, project)} >LEARN MORE</button>
                </div>
              </div>
            </Flip>
          })}
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
      </div>
    </div>

  )
}
export default Portfolio;