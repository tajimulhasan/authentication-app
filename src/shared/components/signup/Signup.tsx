import React from 'react';
import classNames from 'classnames';
import { Button, Form } from 'react-bootstrap';


const Signup = () => {
    return (
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
    );
};

export default Signup;