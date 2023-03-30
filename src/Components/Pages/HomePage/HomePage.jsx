import React from 'react';
import { Button, Carousel } from 'react-bootstrap';

function HomePage() {
    return (
        <div style={{ textAlign: 'center' }}>
            <h1>Home Page</h1>
            <p>Welcome to my home page!</p>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://via.placeholder.com/800x400?text=Carousel+Image+1"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>
                            Nulla vitae elit libero, a pharetra augue mollis interdum.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://via.placeholder.com/800x400?text=Carousel+Image+2"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://via.placeholder.com/800x400?text=Carousel+Image+3"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <div style={{ display: 'inline-block' }}>
                <Button variant="primary">Primary Button</Button>{" "}
                <Button variant="secondary">Secondary Button</Button>{" "}
                <Button variant="success">Success Button</Button>{" "}
                <Button variant="danger">Danger Button</Button>{" "}
                <Button variant="warning">Warning Button</Button>{" "}
                <Button variant="info">Info Button</Button>{" "}
                <Button variant="light">Light Button</Button>{" "}
                <Button variant="dark">Dark Button</Button>{" "}
            </div>
        </div>
    );
}

export default HomePage;
