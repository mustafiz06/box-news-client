import React, { useContext } from 'react';
import { Button, Container, Image, Nav, Navbar } from 'react-bootstrap';
import LeftSideNav from '../LeftSideNav/LeftSideNav';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import { FaUser } from 'react-icons/fa';

const Header = () => {
    const { user } = useContext(AuthContext);
    const { logOutUser } = useContext(AuthContext)
    const signOutHandler = (event) => {
        event.preventDefault();

        //logout user..........................................
        logOutUser()
            .then(() => alert("Logged out"))
            .catch((error) => (alert(`Failed to logout for ${error}`)))
    }

    return (
        <div>
            <Navbar collapseOnSelect expand="lg" style={{ 'backgroundColor': 'whitesmoke' }}>
                <Container>
                    <Navbar.Brand><Link to='/'>Dragon</Link></Navbar.Brand>     

                    <Nav className='d-flex justify-content-center align-items-center'>
                        
                        <Nav.Link>
                            {
                                user?.photoURL ?
                                    <Image src={user.photoURL} roundedCircle style={{ height: '40px' }} />
                                    :
                                    <span className='d-flex' style={{ height: '40px' ,border:'2px solid gray',borderRadius:'50%', padding:'10px'}}>
                                        <FaUser/>
                                    </span>                                    
                            }
                        </Nav.Link>
                        <Nav.Link>
                            {user?.displayName}
                        </Nav.Link>
                        <Nav.Link className='d-none d-lg-block'>
                        {
                            user?.uid ?
                            <Button onClick={signOutHandler} variant="outline-primary">Logout</Button>
                            :
                            <Button variant="outline-primary"><Link to='/login'>Login</Link></Button>
                        }
                        </Nav.Link>

                    </Nav>


                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <div className='d-lg-none'>
                            <LeftSideNav></LeftSideNav>
                            {
                                user?.email ?
                                    <Button onClick={signOutHandler} variant="outline-primary">Logout</Button>
                                    :
                                    <Button variant="outline-primary"><Link to='/login'>Login</Link></Button>
                            }
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;