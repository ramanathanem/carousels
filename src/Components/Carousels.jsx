import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img1 from "../assets/images/bird1.jpg";
import img2 from "../assets/images/bird2.jpg";
import img3 from "../assets/images/bird3.jpg";
import img4 from "../assets/images/bird4.jpg"

export const Carousels = () => {
  const [data, setData] = useState([
    {
      img1: img1,
      img2: img2,
      content1: "content 1",
      content2: "content 2"
    },
    {
      img1: img3,
      img2: img4,
      content1: "content1",
      content2: "content2"
    }
  ]);

  return (
    <div className="row mt-5">
        <h1>Upcoming Events</h1>
      {data.map((item, index) => (
        <div key={index} className="col-sm-6">
          <Carousel data-bs-theme="dark">
            <Carousel.Item interval={1000}>
              <img src={item.img1 || item.img1} alt={`Slide ${index + 1}`} />
              <Carousel.Caption>
                <h5>{item.content1}</h5>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={1000}>
              <img src={item.img2} alt={`Slide ${index + 2}`} />
              <Carousel.Caption>
                <h5>{item.content1}</h5>
               
              </Carousel.Caption>
            </Carousel.Item> 
          </Carousel>
        </div>
      ))}
      
    </div>
  );
};
