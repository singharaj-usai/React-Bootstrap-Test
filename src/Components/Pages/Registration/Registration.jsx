import React, { useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

function Registration() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    const password = useRef('');

    useEffect(() => {
        password.current = register('password', { required: true, minLength: 8 });
    }, [register]);


    return (
        <Container>
            <Row className="justify-content-center">
                <Col md={6}>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <h2>Sign up</h2>
                        <Form.Group controlId="formBasicUsername">
                            <Form.Label>Username</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter username"
                                {...register('username', { required: true, minLength: 4 })}
                            />
                            {errors.username && errors.username.type === 'required' && (
                                <p className="text-danger">Username is required</p>
                            )}
                            {errors.username && errors.username.type === 'minLength' && (
                                <p className="text-danger">Username must be at least 4 characters long</p>
                            )}
                        </Form.Group>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                                {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
                            />
                            {errors.email && errors.email.type === 'required' && (
                                <p className="text-danger">Email is required</p>
                            )}
                            {errors.email && errors.email.type === 'pattern' && (
                                <p className="text-danger">Invalid email address</p>
                            )}
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                {...register('password', { required: true, minLength: 8, value: '' })}
                                ref={(e) => {
                                    password.current = e;
                                }}
                            />
                            {errors.password && errors.password.type === 'required' && (
                                <p className="text-danger">Password is required</p>
                            )}
                            {errors.password && errors.password.type === 'minLength' && (
                                <p className="text-danger">Password must be at least 8 characters long</p>
                            )}
                        </Form.Group>

                        <Form.Group controlId="formBasicConfirmPassword">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Confirm Password"
                                {...register('confirmPassword', {
                                    required: true,
                                    validate: (value) => value === password.current.value,
                                })}
                            />

                            {errors.confirmPassword && errors.confirmPassword.type === 'required' && (
                                <p className="text-danger">Confirm Password is required</p>
                            )}
                            {errors.confirmPassword && errors.confirmPassword.type === 'validate' && (
                                <p className="text-danger">Passwords do not match</p>
                            )}
                        </Form.Group>

                        <Button variant="success" type="submit" className="btn-green w-100">
                            Sign Up
                        </Button>

                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default Registration;
