import React from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

function Login() {
    return (
        <Container>
            <Row className="justify-content-center">
                <Col md={6}>
                    <Form>
                        <h2>Login</h2>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Login
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default Login;
