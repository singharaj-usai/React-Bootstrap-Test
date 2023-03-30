import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function AppNavbar(props) {
    const { brand, links } = props;

    return (
        <Navbar bg="light" expand="md" className="roblox-navbar">
            <Container>
                <Navbar.Brand href="#" className="roblox-brand">
                    {brand}
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto roblox-nav">
                        {links.map((link, index) => (
                            <Nav.Link
                                key={index}
                                as={Link}
                                to={link.url}
                                className="roblox-link"
                                activeStyle={{ borderBottom: '4px solid #0074E4', fontWeight: 'bold' }}
                            >
                                {link.title}
                            </Nav.Link>
                        ))}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default AppNavbar;
