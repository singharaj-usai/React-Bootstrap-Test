import React from 'react';
import { Navbar, Nav, Container, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function AppNavbar(props) {
    const { brand, links } = props;

    return (
        <Navbar bg="light" expand="lg" className="roblox-navbar">
            <Container>
                <Navbar.Brand href="#" className="roblox-brand">
                    {brand}
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto roblox-nav me-auto my-2 my-lg-0">
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
                    <Form className="d-flex align-items-center">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <div className="d-flex align-items-center">
                            <Button variant="light" className="mx-1">
                                Search
                            </Button>
                            <Button variant="outline-primary" className="mx-1" as={Link} to="/register">
                                Login
                            </Button>
                            <Button variant="danger" className="mx-1" as={Link} to="/register">
                                Signup
                            </Button>
                        </div>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default AppNavbar;
