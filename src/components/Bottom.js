import React from 'react';
import './Bottom.css';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import logo from '../assets/imgs/logo_white.png';
import { Link } from 'react-router-dom';

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
        <Link to='/profile'><FaIcons.FaUserAlt id='user'/></Link>
        </row>
    </div>
    </>
  )
}

export default Bottom