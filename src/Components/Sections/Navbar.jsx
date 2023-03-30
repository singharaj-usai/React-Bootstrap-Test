import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link, LinkProps } from 'react-router-dom';

interface NavlinkProps extends LinkProps {}

function Navlink(props: NavlinkProps) {
    return <Nav.Link as={Link} {...props} />;
}

function AppNavbar(props) {
    const { brand, links } = props;

    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#">{brand}</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    {links.map((link, index) => (
                        <Nav.Link key={index} as={Link} to={link.url}>
                            {link.title}
                        </Nav.Link>
                    ))}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default AppNavbar;