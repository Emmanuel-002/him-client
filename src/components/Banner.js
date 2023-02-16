import React from 'react';
import { Carousel } from 'react-bootstrap';
import '../styles/styles.css';

const Banner = () => {
  return (
    <main id="home_banner">
      <Carousel>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src={'images/banner1.jpg'}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>041 CD Medical Center</h3>
            <p>A Medical Facility That You Can Trust</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src={'images/banner2.jpg'}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Meet The Best Experts</h3>
            <p>
              Every day is a new opportunity for you to do something for your
              heath
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src={'images/banner3.jpeg'}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Your health is important</h3>
            <p>
              Seek medical attention with us and be assured of a good health
              status
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </main>
  );
};

export default Banner;
