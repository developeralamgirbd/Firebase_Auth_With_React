import React from 'react';
import {Button, Container, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";
import {useAuth} from "../../hooks/useAuth";

const Header = () => {

    const { currentUser, logOut } = useAuth();
    const handleSignOut = ()=>{
        logOut()
            .then(() => {
                console.log('sign out success')
                window.location.pathname = '/login'
            }).catch(err => {
                console.log(err)
            })
    }

    return (
        <Navbar>
            <Container>
                <Navbar.Brand href="#home">Firebase Authentication</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end gap-2">
                    {currentUser?.userID ? (
                        <>
                            <Navbar.Text>
                                <img src={currentUser.photoURL} alt={currentUser.name} className='rounded-circle' style={{ border: '1px solid red', width: '35px', height: '35px'}}/> {currentUser.name}
                            </Navbar.Text>
                            <Navbar.Text>
                                <Button onClick={handleSignOut}>Sign Out</Button>
                            </Navbar.Text>
                        </>

                    ): (
                        <>
                            <Navbar.Text>
                                <Link to='/login' className='btn btn-primary text-white'>Login</Link>
                            </Navbar.Text>
                            <Navbar.Text>
                                <Link to='/register' className='btn btn-primary text-white' >Register</Link>
                            </Navbar.Text>
                        </>
                    )}

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;