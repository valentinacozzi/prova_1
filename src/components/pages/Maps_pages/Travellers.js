import React from 'react';
import '../../../App.css';
// Router-dom
import { HashLink } from 'react-router-hash-link';
// Bootstrap
import Breadcrumb from 'react-bootstrap/Breadcrumb';
// Imgs
import bassi from '../../../assets/imgs/travellers/Laura_Bassi.jpg';
import dickens from "../../../assets/imgs/travellers/Dickens.jpg";
import figueroa from "../../../assets/imgs/travellers/Alvaro_Figueroa.png"
import lady from "../../../assets/imgs/travellers/lady_miller.PNG";
import moratin from "../../../assets/imgs/travellers/Leandro_Fernàndez_Moratìn.jpg";
// Multi-carousel
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import ScrollToTop from '../../ScrollToTop';


function Travellers() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
      slidesToSlide: 3
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3
    }
  };
  return (
    <>
    <ScrollToTop/>
    <div className='container-fluid'>
      <Breadcrumb>
        <Breadcrumb.Item><HashLink smooth to='/' id='crumb'>Home</HashLink></Breadcrumb.Item>
        <Breadcrumb.Item>
          <HashLink smooth to="/maps" id='crumb'>
          Maps
          </HashLink>
        </Breadcrumb.Item>
        <Breadcrumb.Item active>Travellers</Breadcrumb.Item>
      </Breadcrumb>
      <h1 className='travellers'>Travellers</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        {/*Slider*/}
        <h2>Slider</h2>
          <Carousel 
          responsive={responsive}
          infinite={true}
          >
            <div id="traveller-card" className='card'>
              <img id='fixed' className='product--image'
              src={bassi}></img>
              <h4 className='slider-h2'>Laura Bassi</h4>
              <p className='slider-p'>Italian</p>
              <p className='slider-p'>Some description...</p>
              <p>
                <button className='slider-button'>Button</button>
              </p>
            </div>
            <div className='card'>
              <img className='product--image'
              src={dickens}></img>
              <h4 className='slider-h2'>Charles Dickens</h4>
              <p className='slider-p'>British</p>
              <p className='slider-p'>Some description...</p>
              <p>
                <button className='slider-button'>Button</button>
              </p>
            </div>
            <div className='card'>
              <img className='product--image'
              src={figueroa}></img>
              <h4 className='slider-h2'> Alvaro Figueroa</h4>
              <p className='slider-p'>Nationality</p>
              <p className='slider-p'>Some description...</p>
              <p>
                <button className='slider-button'>Button</button>
              </p>
            </div>
            <div className='card'>
              <img className='product--image'
              src={lady}></img>
              <h4 className='slider-h2'>Lady Miller</h4>
              <p className='slider-p'>Nationality</p>
              <p className='slider-p'>Some description...</p>
              <p>
                <button className='slider-button'>Button</button>
              </p>
            </div>
            <div className='card'>
              <img className='product--image'
              src={moratin}></img>
              <h4 className='slider-h2'>Leandro Moratìn</h4>
              <p className='slider-p'>Nationality</p>
              <p className='slider-p'>Some description...</p>
              <p>
                <button className='slider-button'>Button</button>
              </p>
            </div>
          </Carousel>
        <br/>
    </div>
    </>
  )
}

export default Travellers