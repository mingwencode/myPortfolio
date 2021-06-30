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
        {currentProject.slides.map((item, index) => {
         return  <Carousel.Item key={index} interval={10000}>
           <div className='card-container'>
            <img
                className="d-block w-100"
                src={item.pic}
              />
              <Carousel.Caption className='caption'>
                <p>{item.name}</p>
              </Carousel.Caption>
           </div>
          </Carousel.Item>
        })}
      </Carousel>
    </>

  )
}
export default PortfolioModal;