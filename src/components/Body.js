import React from 'react';
//Bootstrap
import Button from 'react-bootstrap/Button';
// CSS 
import './Body.css';
// Router-dom 
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
// Icons
import * as FaIcons from 'react-icons/fa';
// Imgs 
import placeholder from '../assets/imgs/placeholder.png';
// Carousel 
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
// Translation
import { useTranslation } from "react-i18next";
// Reusable elements
import Map from './pages/Maps_pages/Map';


function Body() {
  // Responsiveness of the imgs slider
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const { t } = useTranslation();
  return (
    <>
    <div className='container-fluid' id='section-container-white'>
    <h1 id='left' className='section'>UniVOCIttà</h1>
      <p>{t('univocitta_text')}</p>
      <div>
        <Link to='../project'>
          <FaIcons.FaArrowAltCircleRight className='arrow_icon'/>
        </Link>
      </div>
    </div>

    {/* Travellers Section */}
    <div className='container-fluid' id='section-container-gray'>
      <h1 id='right' href='#'>{t('travellers')}</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            {/*Carousel Slider*/}
          <Carousel className='img-carousel'
            responsive={responsive}
            infinite={true}
            centerMode={true}
            >
              <div className='card'>
                <img className='product--image'
                src={placeholder}></img>
                <h4 className='body-card-h'>Name</h4>
                <p>
                  <button className='body-slider-button'>Button</button>
                </p>
              </div>
              <div className='card'>
                <img className='product--image'
                src={placeholder}></img>
                <h4 className='body-card-h'>Name</h4>
                <p>
                  <button className='body-slider-button'>Button</button>
                </p>
              </div>
              <div className='card'>
                <img className='product--image'
                src={placeholder}></img>
                <h4 className='body-card-h'>Name</h4>
                <p>
                  <button className='body-slider-button'>Button</button>
                </p>
              </div>
              <div className='card'>
                <img className='product--image'
                src={placeholder}></img>
                <h4 className='body-card-h'>Name</h4>
                <p>
                  <button className='body-slider-button'>Button</button>
                </p>
              </div>
              <div className='card'>
                <img className='product--image'
                src={placeholder}></img>
                <h4 className='body-card-h'>Name</h4>
                <p>
                  <button className='body-slider-button'>Button</button>
                </p>
              </div>
          </Carousel>
            <Link to='../Maps/Travellers'>
              <FaIcons.FaArrowAltCircleRight className='arrow_icon_right'/>
            </Link>
            <br/>
            <br/>
    </div>
    {/* Routes Section */}
    <div className='container-fluid' id='section-container-white'>
      <h1 id='left' href='#'>{t('routes')}</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
          <div>
          {/*Carousel Slider*/}
          <Carousel className='img-carousel'
            responsive={responsive}
            infinite={true}
            >
              <div className='card'>
                <img className='product--image'
                src={placeholder}></img>
                <h4 className='body-card-h'>Title</h4>
                <p>
                  <button className='body-slider-button'>Button</button>
                </p>
              </div>
              <div className='card'>
                <img className='product--image'
                src={placeholder}></img>
                <h4 className='body-card-h'>Title</h4>
                <p>
                  <button className='body-slider-button'>Button</button>
                </p>
              </div>
              <div className='card'>
                <img className='product--image'
                src={placeholder}></img>
                <h4 className='body-card-h'>Title</h4>
                <p>
                  <button className='body-slider-button'>Button</button>
                </p>
              </div>
              <div className='card'>
                <img className='product--image'
                src={placeholder}></img>
                <h4 className='body-card-h'>Title</h4>
                <p>
                  <button className='body-slider-button'>Button</button>
                </p>
              </div>
              <div className='card'>
                <img className='product--image'
                src={placeholder}></img>
                <h4 className='body-card-h'>Title</h4>
                <p>
                  <button className='body-slider-button'>Button</button>
                </p>
              </div>
          </Carousel>
          </div>
          <div>
            <HashLink to='/Maps/Routes'>
              <FaIcons.FaArrowAltCircleRight className='arrow_icon'/>
            </HashLink>
          </div>
    </div>
  {/* Corpus Section */}
  <div className='container-fluid' id='section-container-gray'>
      <h1 id='right' href='#'>{t('corpus')}</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <div className='corpus-buttons'>
          <Link to='../corpus'><Button className='corpus-button' variant="outline-dark">Button</Button></Link>
          <Button className='corpus-button' variant="outline-dark">Button</Button>
          <Button className='corpus-button' variant="outline-dark">Button</Button>
          <Button className='corpus-button' variant="outline-dark">Button</Button>
        </div>
        <Link to='../corpus'>
          <FaIcons.FaArrowAltCircleRight className='arrow_icon_right'/>
        </Link>
       <br/>
       <br/>
    </div>
  {/* Places Section */}
    <div className='container-fluid' id='section-container-white'>
      <h1 id='left' href='#'>{t('places')}</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            {/*Mapr*/}
            <Map/>
        <Link to='../maps/places'>
          <FaIcons.FaArrowAltCircleRight className='arrow_icon'/>
        </Link>
    </div>
    </>
  );
}

export default Body;