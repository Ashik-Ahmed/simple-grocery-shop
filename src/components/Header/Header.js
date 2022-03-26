import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <div>
            <Navbar className='fixed-top' bg="warning" expand="lg">
                <Container>
                    <Navbar.Brand className='fw-bold' href="#home">Daily Grocery Shop</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto ">
                            <Nav.Link className='btn text-black fw-bold' href="#home">Home</Nav.Link>
                            <Nav.Link className='btn text-black fw-bold' href="#link">Shop</Nav.Link>
                            <Nav.Link className='btn text-black fw-bold bg-danger' href="#link">Offers</Nav.Link>
                            <Nav.Link className='btn text-black fw-bold' href="#link">Contact Us</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;