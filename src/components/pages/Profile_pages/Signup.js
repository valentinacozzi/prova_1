import React, { useState } from 'react';
// Router-dom
import { Link, useNavigate } from 'react-router-dom';
//Bootstrap
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

import { UserAuth } from '../../../context/AuthContext';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const {createUser} = UserAuth();


    const handleSubmit = async(e) => {
        e.preventDefault();
        setError('')
        try {
            await createUser(email, password)
            navigate('./profile')

        } catch (e) {
            setError(e.message);
            console.log(e.message);
        }
    };


  return (
    <>
    <div className='container-fluid'>
        <h1>
            SIGN UP 
        </h1>
            <p>
                Already have an account? <Link to='/signin'>Sign In</Link>.
            </p>
        <Form onSubmit={handleSubmit}>
            <Form.Group className='mb-3'>
                <Form.Label>Email Address</Form.Label>
                <Form.Control onChange={(e) => setEmail(e.target.value)} type='email'></Form.Control>
            </Form.Group>
            <Form.Group className='mb-3'>
                <Form.Label>Password</Form.Label>
                <Form.Control onChange={(e) => setPassword(e.target.value)} type='password'></Form.Control>
            </Form.Group>
            <Button variant="primary">
                Sign Up
            </Button>
        </Form>
    </div>
    </>
  );
};

export default Signup;