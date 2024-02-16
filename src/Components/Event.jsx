import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import tour1 from "../assets/images/tour1.jpg"
import tour2 from "../assets/images/tour2.jpg"
import tour3 from "../assets/images/tour3.jpg"
import tour4 from "../assets/images/tour4.jpg"
export const Event = () => {

  return (
<div >
    <Carousel data-bs-theme="dark">
    <Carousel.Item>
      <img
       src={tour1}
      />
      <Carousel.Caption>
        <h5>First slide label</h5>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
       src={tour2}
      />
      <Carousel.Caption>
        <h5>First slide label</h5>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    
    <Carousel.Item>
      <img
        src={tour3}
      />
      <Carousel.Caption>
        <h5>Second slide label</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
       src={tour4}
      />

      <Carousel.Caption>
        <h5>Third slide label</h5>
       
      </Carousel.Caption>
    </Carousel.Item>
    
  </Carousel>
  </div>
  )
}
