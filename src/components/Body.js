import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import './Section.css';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import * as FaIcons from 'react-icons/fa';
import placeholder from '../assets/imgs/placeholder.png';

{/* COMMENT */}
function Body() {
  return (
    <>
    <div className='container-fluid' id='section-container-white'>
    <h1 id='left' className='section'>UniVOCIttà</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <div>
        <Link to='../project'>
          <FaIcons.FaArrowAltCircleRight className='arrow_icon'/>
        </Link>
      </div>
    </div>

{/* Corpus Section */}
<div className='container-fluid' id='section-container-gray'>
      <h1 id='right' href='#'>Corpus</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
        <div className='corpus-buttons'>
          <Link to='../corpus'><Button className='corpus-button' variant="outline-dark">Button</Button></Link>
          <Button className='corpus-button' variant="outline-dark">Button</Button>
          <Button className='corpus-button' variant="outline-dark">Button</Button>
          <Button className='corpus-button' variant="outline-dark">Button</Button>
        </div>
        <Link to='../corpus'>
          <FaIcons.FaArrowAltCircleRight className='arrow_icon_right'/>
        </Link>
    </div>

{/* Routes Section */}
    <div className='container-fluid' id='section-container-white'>
      <h1 id='left' href='#'>Heritage Routes</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
          <div className='card-container'>
            <div className='row'>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={placeholder} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
            </div>
            </div>
          <div>
            <HashLink to='/Maps/#routes'>
              <FaIcons.FaArrowAltCircleRight className='arrow_icon'/>
            </HashLink>
          </div>
    </div>

{/* Travellers Section */}
    <div className='container-fluid' id='section-container-gray'>
      <h1 id='right' href='#'>Travellers</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            <div className='card-container'>
            <div className='row'>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={placeholder} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
            <Card style={{ width: '18rem', marginLeft: '1em', marginRight: '1em' }}>
            <Card.Img variant="top" src={placeholder}/>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={placeholder} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
            </div>
            </div>
            <Link to='../project'>
              <FaIcons.FaArrowAltCircleRight className='arrow_icon'/>
            </Link>
    </div>

{/* Places Section */}
    <div className='container-fluid' id='section-container-white'>
      <h1 id='left' href='#'>Places</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            <div className='card-container'>
            <div className='row'>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={placeholder}/>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
            </div>
            </div>
        <Link to='../project'>
          <FaIcons.FaArrowAltCircleRight className='arrow_icon'/>
        </Link>
    </div>
    </>
  );
}

export default Body;