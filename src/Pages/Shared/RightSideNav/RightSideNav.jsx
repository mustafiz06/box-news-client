import React from 'react';
import { Button, ButtonGroup, ListGroup } from 'react-bootstrap';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { FaDiscord, FaDribbble, FaFacebook, FaLinkedinIn, FaTwitter, FaWhatsapp } from 'react-icons/fa';

import BrandCarousel from '../BrandCarousel/BrandCarousel';

const RightSideNav = () => {
    return (
        <div>
            <ButtonGroup vertical>
                <h5>Login with</h5>
                <Button variant="outline-primary mb-3"><FaGoogle /> Login with Google</Button>
                <Button variant="outline-dark"><FaGithub /> Login with Github</Button>
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