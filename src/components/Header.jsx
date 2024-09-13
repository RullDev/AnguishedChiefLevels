import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
    const [expanded, setExpanded] = useState(false);

    const handleToggle = () => {
        setExpanded(!expanded);
    };

    const handleNavClick = () => {
        setExpanded(false); // Menutup navbar setelah klik
    };

    return (
        <Navbar expanded={expanded} bg="dark" variant="dark" expand="lg" className="header-navbar">
            <Container>
                <Navbar.Brand href="#home" className="navbar-brand">Menfess Bot</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleToggle} className="navbar-toggle">
                    {expanded ? <FaTimes className="navbar-icon" /> : <FaBars className="navbar-icon" />}
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="#home" onClick={handleNavClick}>Home</Nav.Link>
                        <Nav.Link href="#about" onClick={handleNavClick}>About</Nav.Link>
                        <Nav.Link href="#features" onClick={handleNavClick}>Features</Nav.Link>
                        <Nav.Link href="#faq" onClick={handleNavClick}>FAQ</Nav.Link>
                        
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
