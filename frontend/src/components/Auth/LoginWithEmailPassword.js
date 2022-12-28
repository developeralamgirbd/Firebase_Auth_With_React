import React, {useContext, useState} from 'react';
import {Button, Form} from "react-bootstrap";
import {Link, useNavigate} from "react-router-dom";
import {useAuth} from "../../hooks/useAuth";

const LoginWithEmailPassword = () => {
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const {signInUserEmailPassword} = useAuth();

    const handleSubmit = event=>{
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        if (email === ''){
            setEmailError('Email is required');
            return;
        }else {
            setEmailError('')
        }

        if (password === ''){
            setPasswordError('Password is required');
            return;
        }else {
            setPasswordError('');
        }

        signInUserEmailPassword(email, password)
            .then(result => {
                window.location.pathname = '/home';
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <Form onSubmit={handleSubmit}>

            <Form.Group className="mb-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name='email' />
                <Form.Text className="text-danger">
                    {emailError}
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name='password' />
                <Form.Text className="text-danger">
                    {passwordError}
                </Form.Text>
            </Form.Group>

            <div className='d-flex gap-2'>
                <Button variant="primary" type="submit">
                    Sign In
                </Button>
                <p><small>Register an account? Please <Link to='/register'>Register</Link></small></p>
            </div>
        </Form>
    );
};

export default LoginWithEmailPassword;