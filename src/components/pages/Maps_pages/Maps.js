import React from 'react';
import '../../../App.css';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';


export default function Maps() {
    return (
        <>
        <div className='container-fluid'>
        <h1 className='maps'>Maps</h1>
        <p>IMMAGINEEEEEEEEEEEEEEEE CON TITOLO GRANDE SOPRA</p>
        <h2>Subtitle</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <div className='corpus-buttons'>
                    <Link to='../corpus'><Button className='corpus-button' variant="outline-dark">Button</Button></Link>
                    <Button className='corpus-button' variant="outline-dark">Button</Button>
                    <Button className='corpus-button' variant="outline-dark">Button</Button>
                </div>
        </div>
        </>
    )
}