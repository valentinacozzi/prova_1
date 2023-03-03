import React from 'react';
import '../../../App.css';
// Router-dom
import { Link, useNavigate } from 'react-router-dom';
// Icons
import * as FaIcons from 'react-icons/fa';
import * as FiIcons from 'react-icons/fi';
//Bootstrap
import ListGroup from 'react-bootstrap/ListGroup';
// Imgs
import stylized from '../../../assets/imgs/stylized_background.jpg';

import { UserAuth } from '../../../context/AuthContext';
import {auth} from "../../../firebase";


const Profile = () => {
  const {user, logout} = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
      console.log('You are logged out')
    } catch (e) {
      console.log(e.message);
    }
  };


  return (
    <>
    <div className="img_wrap">
            <img id='img-background' src={stylized} alt='Credit: ......' className='img-fluid'/>
                <div className='img-content'>
                    <h1 className='img-title'>User Profile</h1>
                </div>
        </div>
    <div className='container-fluid'>
        <h1 className='profile'>HI, {user && user.email} </h1>
        <ListGroup>
          <ListGroup.Item><Link className='profile-link' to={'../signin/profile/details'}><FaIcons.FaUserAlt className='main-icon'/></Link>&nbsp; &nbsp;PROFILE DETAILS</ListGroup.Item>
          <ListGroup.Item><Link className='profile-link' to={'#'}><FaIcons.FaThumbtack className='secondary-icon'/></Link>&nbsp; &nbsp;Visited Places</ListGroup.Item>
          <ListGroup.Item><Link className='profile-link' to={'#'}><FaIcons.FaRegHeart className='secondary-icon'/></Link>&nbsp; &nbsp;Favourites</ListGroup.Item>
          <ListGroup.Item><Link className='profile-link' to={'#'}><FaIcons.FaBookmark className='secondary-icon'/></Link>&nbsp; &nbsp; Bookmarks</ListGroup.Item>
          <ListGroup.Item><Link className='profile-link' to={'#'}><FaIcons.FaRegCalendarAlt className='secondary-icon'/></Link>&nbsp; &nbsp; Plan your trip</ListGroup.Item>
          <ListGroup.Item><Link className='profile-link' to={'#'}><FaIcons.FaCog className='main-icon'/></Link>&nbsp; &nbsp;SETTINGS</ListGroup.Item>
          <ListGroup.Item><Link onClick={handleLogout} className='profile-link' to={'#'}><FiIcons.FiLogOut className='main-icon'/></Link>&nbsp; &nbsp;LOG OUT</ListGroup.Item>
      </ListGroup>
    </div>
    </>
  )
}

export default Profile;