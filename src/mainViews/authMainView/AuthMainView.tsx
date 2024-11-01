import React, { useEffect } from 'react';
import gsap from "gsap";
import Link from 'next/link';
import classNames from "classnames";
import { Button, Form } from "react-bootstrap";
import { AUTH_PAGE_TYPE } from '@/shared/enums';

import styles from "./authMainView.module.scss";

interface IWelcomeText {
    title: string;
    description: string;
    isLoginWelcome?: boolean;
}

interface IAuthMainView {
    authPageType: AUTH_PAGE_TYPE;
}

const AuthMainView = (props: IAuthMainView) => {
    const { authPageType } = props;

    const getWelcomeTextXPosition = {
        [AUTH_PAGE_TYPE.SIGNUP]: -80,
        [AUTH_PAGE_TYPE.LOGIN]: 50,
    }

    const inputContainerXPosition = {
        [AUTH_PAGE_TYPE.SIGNUP]: 80,
        [AUTH_PAGE_TYPE.LOGIN]: -50,
    }

    const getFromToDynamicValues = {
        [AUTH_PAGE_TYPE.SIGNUP]: {
            opacity: 1,
            rotation: -55,
            left: "-720px",
            top: "-880px",
            duration: 1.2,
        },
        [AUTH_PAGE_TYPE.LOGIN]: {
            opacity: 1,
            rotation: 55,
            bottom: "-309px",
            right: "-1100px",
            duration: 1.2,
        },
    }

    const getByLayerClass = {
        [AUTH_PAGE_TYPE.LOGIN]: styles.bgLayerRight,
        [AUTH_PAGE_TYPE.SIGNUP]: styles.bgLayer
    }

    useEffect(() => {
        gsap.fromTo(
            `.${styles.welcomeText}`,
            { opacity: 0, x: getWelcomeTextXPosition[authPageType], filter: "blur(5px)" },
            { opacity: 1, x: 0, delay: 0.8, filter: "blur(0px)", duration: 0.8 }
        );

        gsap.fromTo(
            `.${styles.inputContainer}`,
            { opacity: 0, x: inputContainerXPosition[authPageType], filter: "blur(5px)" },
            { opacity: 1, x: 0, delay: 0.8, filter: "blur(0px)", duration: 0.8 }
        );

        gsap.fromTo(
            `.${getByLayerClass[authPageType]}`,
            {
                opacity: 1,
                rotation: 0,
                width: "1500px",
                height: "1100px",
                bottom: 0,
                right: 0,
            },
            getFromToDynamicValues[authPageType]
        );

        return () => {
            gsap.to(`.${getByLayerClass[authPageType]}`, {
                opacity: 1,
                rotation: 0,
                width: "1500px",
                height: "1100px",
                bottom: 0,
                right: 0,
                duration: 1.2,
            });
        };
    }, []);

    const WelcomeText: React.FC<IWelcomeText> = ({ title, description, isLoginWelcome }) => {
        return (
            <div className={classNames(styles.welcomeText, { [styles.rightAlign]: isLoginWelcome })}>
                <p>{title}</p>
                <p dangerouslySetInnerHTML={{ __html: description }} />
            </div>
        )
    }


    if (authPageType == AUTH_PAGE_TYPE.SIGNUP) {
        return (
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    <div className={getByLayerClass[authPageType]}></div>
                    <WelcomeText
                        title='Signup page'
                        description='Lorem ipsum dolor, sit amet <br />consectetur adipisicing <br />elit. Minima commodi <br />sed do eiusmod'
                    />
                    <div className={styles.inputContainer}>
                        <div className={styles.tag}>
                            <p>Sign Up</p>
                            <p></p>
                        </div>
                        <div className={styles.inputField}>
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
                                <Button className={classNames(styles.button, "rounded-pill")}>
                                    Sign Up
                                </Button>
                            </Form>
                        </div>
                        <p className="mt-3 text-center mb-0 ps-2">
                            Already have an account? <Link href="/login">Login</Link>
                        </p>
                    </div>
                </div>
            </div>
        );
    }


    if (authPageType == AUTH_PAGE_TYPE.LOGIN) {
        return (
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    <div className={getByLayerClass[authPageType]}></div>
                    <div className={styles.inputContainer}>
                        <div className={styles.tag}>
                            <p>Login</p>
                            <p></p>
                        </div>
                        <div className={styles.inputField}>
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
                                <Button className={classNames(styles.button, "rounded-pill")}>
                                    Login
                                </Button>
                            </Form>
                        </div>
                        <p className="mt-3 text-center mb-0">
                            Do not have an account? <Link href="/signup">Sign Up</Link>
                        </p>
                    </div>
                    <WelcomeText
                        title='Login Page!'
                        description='Lorem ipsum dolor, sit amet <br />consectetur adipisicing <br />elit. Minima commodi <br />sed do eiusmod'
                        isLoginWelcome
                    />
                </div>
            </div>
        );
    }
};

export default AuthMainView;