import React, {useContext, useState} from 'react';
import {Button, Form} from "react-bootstrap";
import {Link, useNavigate} from "react-router-dom";
import {AuthContext} from "../../context/UserContext";

const RegisterWithEmailPassword = () => {

    const [passwordError, setPasswordError] = useState('');
    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [success, setSuccess] = useState(false);

    const { createUserWithEmailPassword, loading } = useContext(AuthContext);

    const handleRegister = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;

        // Name Validation
        if (name === ''){
            setNameError('Name is required');
            return;
        }else {
            setNameError('');
        }
        // Email Validation
        if (email === ''){
            setEmailError('Email is required');
            return;
        }else if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
            setEmailError('Please provide a valid email address');
            return;
        }
        else {
            setEmailError('');
        }

        // Password Validation
        if (password === ''){
            setPasswordError("Password is required");
            return;
        }else if (!/^(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*].{8,20}$/.test(password)){
            setPasswordError(' min 8 , max 20 , At least one uppercase , At least one lowercase , At least one digit, At least one special character');
            return;
        }else if (password !== confirmPassword){
            setPasswordError("Password doesn't match");
            return;
        }else {
            setPasswordError("");
        }

        createUserWithEmailPassword(email, password)
            .then(result => {
                // navigate('/login')
                window.location.pathname = '/home'
            }).catch(err => {
                console.log(err.message)
            })

    }

    return (
        <Form onSubmit={handleRegister}>
            <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" name='name'/>
                <Form.Text className="text-danger">
                    {nameError}
                </Form.Text>
            </Form.Group>

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

            <Form.Group className="mb-3">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" name='confirmPassword' />
            </Form.Group>

            <div className='d-flex gap-2'>
                <Button variant="primary" type="submit" disabled={loading}>
                    {loading ? 'creating...' : 'Sign Up'}
                </Button>
                <p><small>Already have an account? Please <Link to='/login'>Log in</Link></small></p>
            </div>
        </Form>
    );
};

export default RegisterWithEmailPassword;