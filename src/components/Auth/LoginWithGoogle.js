import React, {useContext} from 'react';
import google from '../../assets/images/google-logo.png'
import {Button, Image} from "react-bootstrap";
import {AuthContext} from "../../context/UserContext";
import {useNavigate} from "react-router-dom";

const LoginWithGoogle = () => {

  /*  const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();

    const handleGoogleSignIn = ()=> {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user;
                console.log(result)
                console.log(user)
            }).catch(err => {
            console.log(err)
        })
    }*/

    const { signInWithGoogle } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleGoogleSignIn = ()=>{
        signInWithGoogle()
            .then(result => {
                const user = result.user;
                console.log(user)
                navigate('/home')
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