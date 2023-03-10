import React from 'react';
import facebook from '../../assets/images/Facebook_Logo.png'
import {Button, Image} from "react-bootstrap";
import {useAuth} from "../../hooks/useAuth";

const LoginWithFacebook = () => {

    const { signInWithFacebook } = useAuth();

    const handleFacebookSignIn = ()=>{
        signInWithFacebook()
            .then(result => {
                const user = result.user;

                if (user){
                    window.location.pathname = '/home';
                }

            }).catch(err => {
                console.log(err)
        })
    }

    return (
         <Button onClick={handleFacebookSignIn} style={{ background: '#4081EC', borderRadius: '3px', border: 'none' }} className='p-1'>
             <Image src={facebook} className='img-fluid bg-white p-1' style={{width: '30px', height: '30px'}}/>
             <span className='social-login-btn'>Sign in with Facebook</span>
         </Button>
    );
};

export default LoginWithFacebook;