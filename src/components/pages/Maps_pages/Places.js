import React from 'react';
import '../../../App.css';
// Router-dom
import { HashLink } from 'react-router-hash-link';
//Bootstrap
import Breadcrumb from 'react-bootstrap/Breadcrumb';
// Imgs
import bologna2 from '../../../assets/imgs/bologna_2.png';

import ScrollToTop from '../../ScrollToTop';


function Places() {
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
        <Breadcrumb.Item active>Places</Breadcrumb.Item>
      </Breadcrumb>
      <h1 className='places'>Places</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <h2>Subtitle</h2>
          <div id ="figurine" className="row g-4 justify-content-center">
              <div className="col-md-6 col-lg-3">
                <div className="card bg-light">
                  <div className="card-body text-center">
                    <img src={bologna2} className="img-fluid"/>
                    <h4 id='places-card-title' className="card-title">Place</h4>
                    <p id='places-card-text'className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="card bg-light">
                  <div className="card-body text-center">
                    <img src={bologna2} class="img-fluid"/>
                    <h4 id='places-card-title' className="card-title">Place</h4>
                    <p id='places-card-text'className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="card bg-light">
                  <div className="card-body text-center">
                    <img src={bologna2} className="img-fluid"/>
                    <h4 id='places-card-title' className="card-title">Place</h4>
                    <p id='places-card-text'className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </div>
                </div>
              </div>
            </div>
            <br/>
    </div>
    </>
  )
}

export default Places