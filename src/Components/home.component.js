import React from "react";
import img1 from "../images/w1.jpg";
import img2 from "../images/w2.jpg";
import img3 from "../images/w3.jpg";
import img4 from "../images/w4.jpg";
import { Carousel } from "react-bootstrap";
export default function Home() {
  return (
    <>
      <div className='main-header'>
        <div className='main-header-left'>
          <p>Welcome to the Weather App</p>
          <h1>
            Get the latest <span className='weather-clr'>Weather</span> info of
            your City
          </h1>
          <a href='/weather'>
            <button>Check Now</button>
          </a>
        </div>
        <div className='main-header-right'>
          <Carousel>
            <Carousel.Item interval={2000}>
              <img className='d-block w-100' src={img1} alt='First slide' />
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <img className='d-block w-100' src={img2} alt='Second slide' />
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <img className='d-block w-100' src={img3} alt='Third slide' />
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <img className='d-block w-100' src={img4} alt='Fourth slide' />
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </>
  );
}
