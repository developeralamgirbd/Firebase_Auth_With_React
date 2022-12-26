import React, {useContext} from 'react';
import google from '../../assets/images/google-logo.png'
import {Button, Image} from "react-bootstrap";
import {AuthContext} from "../../context/UserContext";
import {useNavigate} from "react-router-dom";

const LoginWithGoogle = () => {

    const { signInWithGoogle } = useContext(AuthContext);
    const handleGoogleSignIn = ()=>{
        signInWithGoogle()
            .then(result => {
                window.location.pathname = '/home';
            }).catch(err => {
                console.log(err)
        })
    }

    return (
         <Button onClick={handleGoogleSignIn} style={{ background: '#4081EC', borderRadius: '3px', border: 'none' }} className='p-1'>
             <Image src={google} className='img-fluid bg-white p-1' style={{width: '30px', height: '30px'}}/>
             <span className='social-login-btn'>Sign in with Google</span>
         </Button>
    );
};

export default LoginWithGoogle;