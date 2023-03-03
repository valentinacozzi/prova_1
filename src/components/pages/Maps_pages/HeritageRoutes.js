import React, { useState } from 'react';
import '../../../App.css';
import { HashLink } from 'react-router-hash-link';
// Bootstrap
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Badge from 'react-bootstrap/Badge';
import { Row, Col, Button } from 'react-bootstrap';
// Icons
import * as BsIcons from 'react-icons/bs';
import * as RiIcons from 'react-icons/ri';
import * as GiIcons from 'react-icons/gi';
// Imgs
import placeholder from '../../../assets/imgs/placeholder.png';
// Reusable elements
import ScrollToTop from '../../ScrollToTop';
// Experiment
import routes from "./routes.json";


 
const HeritageRoutes = () => {
  const [data, setData]=useState(routes)
   const filterResult=(catItem)=> {
    const result = routes.filter((curData)=> {
      return curData.category === catItem;
    });
    setData(result);
  }
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
        <Breadcrumb.Item active>Heritage Routes</Breadcrumb.Item>
      </Breadcrumb>
      <h1 className='routes'>Heritage Routes</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
    
        <section className='heritage-routes'>
          <div className='container-fluid'>
            <div className='suggested'>
              <br/>
              <h2>Suggested routes</h2>
              <hr/>
              <div className='routes-filter-buttons'>
              <Button variant='dark' className='routes-filter' onClick={() => filterResult('Art')}>Art</Button>
              <Button variant='dark' className='routes-filter' onClick={() => filterResult('Literature')}>Literature</Button>
              <Button variant='dark' className='routes-filter'>Nature</Button>
              <Button variant='dark' className='routes-filter'>Spiritual</Button>
              </div>
              {routes.map (values => {
                return (
                <>
              <div className='suggested-route'>
                  <h3>{values.title}</h3>
                  <Row className='routes-icons'>
                    <Col>
                      <RiIcons.RiTimerLine className='routes-icon'/><span>&nbsp;{values.time}</span>
                    </Col>
                    <Col>
                      <GiIcons.GiPathDistance className='routes-icon'/><span>&nbsp;{values.km}</span>
                    </Col>
                    <Col>
                      <GiIcons.GiFootsteps className='routes-icon'/><span>&nbsp;{values.path}</span>
                    </Col>
                  </Row>
                  <img className='side-img'src={require("../../../assets/imgs/placeholder.png")}></img>
                  <p>{values.text}</p>
                  <p style={{textAlign: 'right'}}>Find out more&nbsp;<BsIcons.BsFillArrowRightCircleFill className='more-icon'/></p>
                  <div className='tag-buttons'>
                    <Badge pill bg="primary"  disabled>{values.tag.tag_1}</Badge>{' '}
                    <Badge pill bg="primary"  disabled>{values.tag.tag_2}</Badge>{' '}
                    <Badge pill bg="primary"  disabled>{values.tag.tag_3}</Badge>{' '}
                  </div>
              </div> 
              </>   
              )  
              })}  
            </div>
          </div>
        </section>
        </>
  )
}
export default HeritageRoutes 
