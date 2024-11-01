import React from 'react';
import Link from 'next/link';
import classNames from 'classnames';
import { Button, Form } from 'react-bootstrap';


const Signup = () => {
    return (
        <>
            <div className="auth-tag">
                <p>Sign Up</p>
                <p></p>
            </div >
            <div className="auth-input-field">
                <Form>
                    <Form.Group
                        className="mb-1"
                        controlId="exampleForm.ControlInput1"
                    >
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" placeholder="Enter your name" />
                    </Form.Group>
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
                        Sign Up
                    </Button>
                </Form>
            </div>
            <p className="mt-3 text-center mb-0 ps-2">
                Already have an account? <Link href="/login">Login</Link>
            </p>
        </>
    );
};

export default Signup;