import React from 'react';
import './carostyle.css'
import Carousel from 'react-bootstrap/Carousel'
import carousel1 from '../../images/carousel-1.png'
import carousel2 from '../../images/carousel-2.png'
import carousel3 from '../../images/carousel-3.png'




const CarosoulePart = () => {
    return (
       
            <div className="carousel-main  d-flex justify-content-center">
            
            <div className="carousel-dgn w-50 ">
            <div>
            <h3 className="carousel-title ">Here are Some of <span style={{color:'#7AB259'}}>our Works</span></h3>

            </div>
            <Carousel>
       <Carousel.Item interval={1000}>
    <img
      className="d-block cal-img"
      src={carousel1}
      alt="First slide"
    />
    
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block cal-img"
      src={carousel2}
      alt="Third slide"
    />
    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block cal-img"
      src={carousel3}
      alt="Third slide"
    />
    
  </Carousel.Item>
</Carousel>
            </div>
        </div>
       
    );
};

export default CarosoulePart;