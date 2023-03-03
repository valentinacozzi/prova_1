import React from 'react';
import '../App.css';
import './HeroSection.css';
// Bootstrap
import Carousel from 'react-bootstrap/Carousel';
// Imgs
import bolo from '../assets/imgs/bologna.jpg';
import torri from '../assets/imgs/bologna_torri.jpg';

function HeroSection() {
    return (
        <Carousel className='carousel'>
          <Carousel.Item interval={500}>
            <img
              className="d-block w-100"
              src={bolo}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p className='carousel-p'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img
              className="d-block w-100"
              src={torri}
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p className='carousel-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={bolo}
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p className='carousel-p'>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      );
    }

export default HeroSection;