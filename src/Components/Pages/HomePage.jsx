import React from 'react';
import { Button } from 'react-bootstrap';

function HomePage() {
    return (
        <div style={{ textAlign: 'center' }}>
            <h1>Home Page</h1>
            <p>Welcome to my home page!</p>
            <div style={{ display: 'inline-block' }}>
                <Button variant="primary">Primary Button</Button>{' '}
                <Button variant="secondary">Secondary Button</Button>{' '}
                <Button variant="success">Success Button</Button>{' '}
                <Button variant="danger">Danger Button</Button>{' '}
                <Button variant="warning">Warning Button</Button>{' '}
                <Button variant="info">Info Button</Button>{' '}
                <Button variant="light">Light Button</Button>{' '}
                <Button variant="dark">Dark Button</Button>{' '}
            </div>
        </div>
    );
}

export default HomePage;
