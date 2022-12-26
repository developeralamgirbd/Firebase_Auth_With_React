import React, {useContext} from 'react';
import {Button, Image} from "react-bootstrap";
import github from "../../assets/images/github-logo.png";
import {AuthContext} from "../../context/UserContext";
import {useNavigate} from "react-router-dom";

const LoginWIthGitHub = () => {

    const {signInWithGithub} = useContext(AuthContext);

    const navigate = useNavigate();

    const handleGithubSignIn = ()=>{
        signInWithGithub()
            .then(result => {
                const user = result.user;
                // navigate('/home')
                window.location.pathname = '/home';
            })
            .catch(err => {
                console.log(err);
            })
    }


    return (
        <Button onClick={handleGithubSignIn} style={{ background: '#71C156', borderRadius: '3px', border: "none" }} className='p-1'>
            <Image src={github} className='img-fluid bg-white p-1' style={{width: '30px', height: '30px'}}/>
            <span className='social-login-btn'>Sign in with GigHub</span>
        </Button>
    );
};

export default LoginWIthGitHub;