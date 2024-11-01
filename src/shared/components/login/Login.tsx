import React from 'react';
import Link from 'next/link';
import classNames from 'classnames';
import { Button, Form } from 'react-bootstrap';

const Login = () => {
    return (
        <>
            <div className="auth-tag">
                <p>Login</p>
                <p></p>
            </div>
            <div className="auth-input-field">
                <Form>
                    <Form.Group
                        className="mb-1"
                        controlId="exampleForm.ControlInput1"
                    >
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter your email address"
                        />
                    </Form.Group>
                    <Form.Group
                        className="mb-1"
                        controlId="exampleForm.ControlInput1"
                    >
                        <Form.Label>password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Enter your password"
                        />
                    </Form.Group>
                    <Button className={classNames("auth-button", "rounded-pill")}>
                        Login
                    </Button>
                </Form>
            </div>
            <p className="mt-3 text-center mb-0">
                Do not have an account? <Link href="/signup">Sign Up</Link>
            </p>
        </>
    );
};

export default Login;