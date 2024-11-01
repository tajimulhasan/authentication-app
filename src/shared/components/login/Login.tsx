import React from 'react';
import classNames from 'classnames';
import { Button, Form } from 'react-bootstrap';

const Login = () => {
    return (
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
    );
};

export default Login;