import React from 'react';
import './Footer.css';
// Router-dom
import { Link } from 'react-router-dom';
// Bootstrap
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// Icons 
import * as FaIcons from 'react-icons/fa';
// Translation
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();
  return (
    <>
    <div className='footer-container'> 
    <Row>
      <Col>
        <h2 className='footer-title-1'>UniVOCIttà</h2>
          <Row>
            <ul className="list-unstyled d-flex flex-row justify-content-center">
              <li><Link className='fa-footer' to='#'><FaIcons.FaFacebook/></Link></li>
              <li><Link className='fa-footer' to='#'><FaIcons.FaInstagram/></Link></li>
              <li><Link className='fa-footer' to='#'><FaIcons.FaGithub/></Link></li>
            </ul>
          </Row>
      </Col>
      <Col>
        <h2 className='footer-title'>{t('footer_about')}</h2>
          <Row>
            <Link className='footer-links' to='#'>Link</Link>
            <Link className='footer-links' to='#'>Link</Link>
            <Link className='footer-links' to='#'>Link</Link>
          </Row>
      </Col>
      <Col>
        <h2 className='footer-title'>{t('footer_more')}</h2>
          <Row>
            <Link className='footer-links' to='#'>Link</Link>
            <Link className='footer-links' to='#'>Link</Link>
            <Link className='footer-links' to='#'>Link</Link>
          </Row>
      </Col>
    </Row>
    <hr className='footer-line'/>
    <small className="copyright">&copy; UniVOCIttà, 2023</small>
    </div>
    </>
  )
}

export default Footer