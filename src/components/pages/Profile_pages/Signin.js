import React, { useState } from 'react';
// Router-dom
import { Link, useNavigate } from 'react-router-dom';
// Bootstrap
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Row } from 'react-bootstrap';
// React icons
import * as FcIcons from 'react-icons/fc';
import * as AiIcons from 'react-icons/ai';
// Identification
import { UserAuth } from '../../../context/AuthContext';
import { GoogleAuthProvider, FacebookAuthProvider, signInWithPopup, signInWithEmailAndPassword } from 'firebase/auth';
import {auth} from "../../../firebase";




const Signin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(''); 
    const navigate = useNavigate();

    const { signIn } = UserAuth();

    const handleSubmit = async(e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        navigate ('./profile')
        .then((userCredential) => {
            console.log(userCredential);
        })
        .catch((error) => {
            console.log(error);
        });
    };

        /*}
        setError('')
        try {
            await signIn(email, password)
            navigate ('./profile')
        } catch (e) {
            setError(e.message);
            console.log(e.message);
        }
*/
    //Google
    const googleProvider = new GoogleAuthProvider();
    const GoogleLogin = async () => {
        try{
            const result = await signInWithPopup(auth, googleProvider)
            navigate('./profile') // va nella pagina sbagliata
            console.log(result.user);
        } catch (error) {
            console.log(error);
        }
    }

    //Facebook
    const fbProvider = new FacebookAuthProvider();
    const FacebookLogin = async () => {
        try{
            const result = await signInWithPopup(auth, fbProvider)
            console.log(result.user);
        } catch (error) {
            console.log(error);
        }
    }
  return (
    <>
    <div className='container-fluid'>
        <h1>
            SIGN IN
        </h1>
            <p>
                Don't have an account yet? <Link to='/signup'>Sign Up</Link>.
            </p>
        <Form onSubmit={handleSubmit}>
            <Form.Group className='mb-3'>
                <Form.Label>Email Address</Form.Label>
                <Form.Control value={email} onChange={(e) => setEmail(e.target.value)} type='email'></Form.Control>
            </Form.Group>
            <Form.Group className='mb-3'>
                <Form.Label>Password</Form.Label>
                <Form.Control value={password} onChange={(e) => setPassword(e.target.value)} type='password'></Form.Control >
            </Form.Group>
            <Button type="submit" className='sign-in-button'variant="primary">
                Sign In
            </Button>
            <br/>
            <Row>
            <Button variant='light' className='google-button' onClick={GoogleLogin}>
                <FcIcons.FcGoogle/>&nbsp;Continue with Google
            </Button>
            </Row>
            <Row>
            <Button className='facebook-button' onClick={FacebookLogin}>
                <AiIcons.AiFillFacebook/>&nbsp;Continue with Facebook
            </Button>
            </Row>
        </Form>
    </div>
    </>
  )
}

export default Signin