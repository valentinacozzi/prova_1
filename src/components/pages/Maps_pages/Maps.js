import React from 'react';
import '../../../App.css';
// Bootstrap
import Button from 'react-bootstrap/Button';
// Router-dom 
import { Link } from 'react-router-dom';
// Imgs 
import bologna2 from '../../../assets/imgs/bologna_2.png';
// Reusable elements 
import Map from './Map';


export default function Maps() {
    return (
        <>
        <div className="img_wrap">
            <img id='img-background' src={bologna2} className='img-fluid'/>
                <div className='img-content'>
                    <h1 className='img-title'>Maps</h1>
                </div>
        </div>
        <div id='map' className='container-fluid'>
            <h1 className='maps'>Maps</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <h2>Subtitle</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <div className='map-buttons'>
                        <Link to='../maps/Places'><Button className='corpus-button' variant="outline-dark">Places</Button></Link>
                        <Link to='../maps/Travellers'><Button className='corpus-button' variant="outline-dark">Travellers</Button></Link>
                        <Link to='../maps/Routes'><Button className='corpus-button' variant="outline-dark">Routes</Button></Link>
                    </div>
            <Map/>
        </div>

        </>
    )
}