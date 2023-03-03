import React from 'react';
import '../../../App.css';
import { Link } from 'react-router-dom';
// Bootstrap
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// Imgs
import uni from '../../../assets/imgs/uni2.jpeg';
import team from '../../../assets/imgs/team.jpg';
// Icons
import * as FaIcons from 'react-icons/fa';
import * as FiIcons from 'react-icons/fi';
// Reusable elements
import Team from './Team';

export default function About() {
    return (
        <>
        <img id='img-background' src={uni} className='img-fluid'/>
        <div className='img-content'>
          <h1 className='img-title'>ABOUT US</h1>
          <Link to='#'><Button className='corpus-button' variant="dark">Button</Button></Link>
        </div>
        <div className='container-fluid'>
        <h1 className='about'>About Us</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. 
                Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. 
                Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</p>
           {/* <Team/>*/}
            <h2 id='team'>Team</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <div id ="figurine" className="row g-4 justify-content-center">
              <div className="col-md-6 col-lg-3">
                <div className="card bg-light">
                  <div className="card-body text-center">
                    <img src={team} className="img-fluid"/>
                    <h4 className="card-title mb-3">Tizio</h4>
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                      <ul>
                        <li>Lorem ipsum</li>
                        <li>Lorem ipsum</li>
                        <li>Lorem ipsum</li>
                      </ul>
                    <Link className='fa-brands' to='#'><FaIcons.FaFacebook/></Link>
                    <Link className='fa-brands' to='#'><FaIcons.FaGithub/></Link>
                    <Link className='fa-brands' to='#'><FaIcons.FaEnvelope/></Link>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="card bg-light">
                  <div className="card-body text-center">
                    <img src={team} class="img-fluid"/>
                    <h4 className="card-title mb-3">Caio</h4>
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                      <ul>
                        <li>Lorem ipsum</li>
                        <li>Lorem ipsum</li>
                        <li>Lorem ipsum</li>
                      </ul>
                    <Link className='fa-brands' to='#'><FaIcons.FaFacebook/></Link>
                    <Link className='fa-brands' to='#'><FaIcons.FaGithub/></Link>
                    <Link className='fa-brands' to='#'><FaIcons.FaEnvelope/></Link>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="card bg-light">
                  <div className="card-body text-center">
                    <img src={team} className="img-fluid"/>
                    <h4 className="card-title mb-3">Sempronio</h4>
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                      <ul>
                        <li>Lorem ipsum</li>
                        <li>Lorem ipsum</li>
                        <li>Lorem ipsum</li>
                      </ul>
                    <Link className='fa-brands' to='#'><FaIcons.FaFacebook/></Link>
                    <Link className='fa-brands' to='#'><FaIcons.FaGithub/></Link>
                    <Link className='fa-brands' to='#'><FaIcons.FaEnvelope/></Link>
                  </div>
                </div>
              </div>
            </div>
            <br/>
            <div id ="figurine" className="row g-4 justify-content-center">
              <div className="col-md-6 col-lg-3">
                <div className="card bg-light">
                  <div className="card-body text-center">
                    <img src={team} className="img-fluid"/>
                    <h4 className="card-title mb-3">Nina</h4>
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                      <ul>
                        <li>Lorem ipsum</li>
                        <li>Lorem ipsum</li>
                        <li>Lorem ipsum</li>
                      </ul>
                    <Link className='fa-brands' to='#'><FaIcons.FaFacebook/></Link>
                    <Link className='fa-brands' to='#'><FaIcons.FaGithub/></Link>
                    <Link className='fa-brands' to='#'><FaIcons.FaEnvelope/></Link>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="card bg-light">
                  <div className="card-body text-center">
                    <img src={team} className="img-fluid"/>
                    <h4 className="card-title mb-3">Pinta</h4>
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                      <ul>
                        <li>Lorem ipsum</li>
                        <li>Lorem ipsum</li>
                        <li>Lorem ipsum</li>
                      </ul>
                    <Link className='fa-brands' to='#'><FaIcons.FaFacebook/></Link>
                    <Link className='fa-brands' to='#'><FaIcons.FaGithub/></Link>
                    <Link className='fa-brands' to='#'><FaIcons.FaEnvelope/></Link>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="card bg-light">
                  <div className="card-body text-center">
                    <img src={team} className="img-fluid"/>
                    <h4 className="card-title mb-3">Maria</h4>
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                      <ul>
                        <li>Lorem ipsum</li>
                        <li>Lorem ipsum</li>
                        <li>Lorem ipsum</li>
                      </ul>
                    <Link className='fa-brands' to='#'><FaIcons.FaFacebook/></Link>
                    <Link className='fa-brands' to='#'><FaIcons.FaGithub/></Link>
                    <Link className='fa-brands' to='#'><FaIcons.FaEnvelope/></Link>
                  </div>
                </div>
              </div>
            </div>
            <br/>
            <h2 className='partners'>Institutions and Partners</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <h2 className='contacts'>Contacts</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        </>
    )
}