import React from 'react';
import {Card, Container, Row} from "react-bootstrap";
import LoginWithGoogle from "../../components/Auth/LoginWithGoogle";
import LoginWIthGitHub from "../../components/Auth/LoginWIthGitHub";
import RegisterWithEmailPassword from "../../components/Auth/RegisterWithEmailPassword";
import LoginWithFacebook from "../../components/Auth/LoginWithFacebook";

const SignUp = () => {
    return (
        <Container>
                <Row className='justify-content-center my-5'>
                    <Card style={{width: '600px'}} className='p-0'>
                        <Card.Header className='text-center text-black'>
                            Sign up with
                        </Card.Header>

                        <Card.Body className='p-4'>
                            <div className='d-flex align-items-center justify-content-center gap-2'>
                                <LoginWithGoogle/><LoginWIthGitHub/><LoginWithFacebook/>
                            </div>
                            <p className='text-center mt-5 text-black'>OR</p>
                            <RegisterWithEmailPassword/>
                        </Card.Body>

                    </Card>
                </Row>

        </Container>
    );
};

export default SignUp;