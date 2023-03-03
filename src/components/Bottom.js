import React from 'react';
import './Bottom.css';
// Router-dom
import { Link } from 'react-router-dom';
// Bootstrap
import { Col } from 'react-bootstrap';
// Icons
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
// Imgs
import logo from '../assets/imgs/logo_white.png';


function Bottom() {
  return (
    <>
    <div className='bottom-container'>
        <row className='bottom-row'>
        <Link to='/'><AiIcons.AiFillHome id='home'/></Link>
        <Link to='/corpus'><FaIcons.FaBook id='book'/></Link>
        <Link to='/'>
          <img className='logo-bottom' src={logo}></img>
        </Link>
        <Link to='/maps'><FaIcons.FaMapMarkerAlt id='pin'/></Link>
        <Link to='/signin/profile'><FaIcons.FaUserAlt id='user'/></Link>
        </row>
    </div>
    </>
  )
}

export default Bottom