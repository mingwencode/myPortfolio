import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';

const test = [
  'First slide label',
  'Second slide label',
  'Third slide label'
]

const PortfolioModal = ({currentProject}) => {

  return (
    <>
      <Carousel>
        {currentProject.slides.map(item => {
         return  <Carousel.Item interval={10000}>
           <div className='card-container'>
            <img
                className="d-block w-100"
                src={item.pic}
              />
              <Carousel.Caption className='caption'>
                <h3>{item.name}</h3>
                <p className='card-info'>{item.info}</p>
              </Carousel.Caption>
           </div>


          </Carousel.Item>
        })}
      </Carousel>
    </>

  )
}
export default PortfolioModal;