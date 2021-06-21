import React, { useState, useEffect } from 'react';
//import Modal from './Modal.jsx'
import PortfolioModal from './PortfolioModal.jsx';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const projects = [
  {
    name: 'Triceratops Republic',
    disPic: '../images/FEC_display.jpeg'
  },
  {
    name: 'Project Catwalk System Design',
    disPic: '../images/sdc_display_sm.jpg'
  },
  {
    name: 'sMove',
    disPic: '../images/smove_display_sm.jpg'
  },
  {
    name: 'handyHelpers',
    disPic: '../images/handy_display_sm.jpg'
  },
  {
    name: 'Virus Shooter',
    disPic: '../images/shooter_display_sm.jpg'
  }
]

const Portfolio = () => {

  // const showModal = (e, job) => {
  //   setModal(true);
  //   setCurrentProject(pic)
  // }

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
          return <img src={project.disPic} key={index} variant='primary' onClick={(e) => handleShow(e, project)} width='300' />
        })}
        <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>{currentProject.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <PortfolioModal />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary">Understood</Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>

  )
}
export default Portfolio;