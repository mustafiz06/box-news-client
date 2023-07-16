import React, { useContext } from 'react';
import { Button, ButtonGroup, ListGroup } from 'react-bootstrap';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { FaDiscord, FaDribbble, FaFacebook, FaLinkedinIn, FaTwitter, FaWhatsapp } from 'react-icons/fa';

import BrandCarousel from '../BrandCarousel/BrandCarousel';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';

const RightSideNav = () => {
    const { googleSignInHandler, githubSignInHandler } = useContext(AuthContext);
    //sign in with google
    const handleGoogleSignIn = () => {
        googleSignInHandler()
            .then((result) => {
                const user = result.user;
                // setUser(user);
                console.log(user, result);
            })
            .catch((error) => {
                console.error('Error', error)
            });
    }
    //sign in with Github
    const handleGithubSignIn = () => {
        githubSignInHandler()
            .then((result) => {
                const user = result.user;
                // setUser(user);
                console.log(user, result);
            })
            .catch((error) => {
                console.error('Error', error)
            });
    }

    return (
        <div>
            <ButtonGroup vertical>
                <h5>Login with</h5>
                <Button onClick={handleGoogleSignIn} variant="outline-primary mb-3"><FaGoogle /> Login with Google</Button>
                <Button onClick={handleGithubSignIn} variant="outline-dark"><FaGithub /> Login with Github</Button>
            </ButtonGroup>
            <div className='mt-3'>
                <ListGroup>
                    <h5>Find us on</h5>
                    <ListGroup.Item><FaFacebook /> Facebook</ListGroup.Item>
                    <ListGroup.Item><FaWhatsapp /> Whatsapp</ListGroup.Item>
                    <ListGroup.Item><FaTwitter /> Twitter </ListGroup.Item>
                    <ListGroup.Item><FaLinkedinIn /> LinkedIn</ListGroup.Item>
                    <ListGroup.Item><FaDiscord /> Discord</ListGroup.Item>
                    <ListGroup.Item><FaDribbble /> Dribble</ListGroup.Item>
                </ListGroup>
            </div>
            <BrandCarousel></BrandCarousel>
        </div>
    );
};

export default RightSideNav;