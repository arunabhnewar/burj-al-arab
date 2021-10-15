import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../Hooks/useAuth';
import img from '../../../images/icons/logo.png';

const Header = () => {
    const { user, logOut } = useAuth();
    console.log(user);
    return (
        <>
            <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg">
                <Container>
                    <img src={img} style={{ width: "50px" }} alt="" />
                    {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#rooms">Rooms</Nav.Link>
                        <Nav.Link as={HashLink} to="/club">Club</Nav.Link>
                        <Nav.Link as={HashLink} to="/event">Event</Nav.Link>

                        {user?.email ?
                            <Button onClick={logOut} variant="outline-primary">Log out</Button> :
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>}

                        <Navbar.Text>
                            <Nav.Link to="/login#login"> <FontAwesomeIcon icon={faUser} /> {user?.displayName}</Nav.Link>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;