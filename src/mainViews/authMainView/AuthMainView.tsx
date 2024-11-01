import React, { useEffect } from 'react';
import gsap from "gsap";
import classNames from "classnames";

import { AUTH_PAGE_TYPE } from '@/shared/enums';
import Login from '@/shared/components/login/Login';
import Signup from '@/shared/components/signup/Signup';
import AuthCard from '@/shared/components/authCard/AuthCard';
import styles from "./authMainView.module.scss";

interface IInputContainerWrapper {
    children: React.ReactNode;
}
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

    const InputContainerWrapper: React.FC<IInputContainerWrapper> = ({ children }) => {
        return (
            <div className={styles.inputContainer}>
                {children}
            </div>
        )
    }

    if (authPageType == AUTH_PAGE_TYPE.SIGNUP) {
        return (
            <div className={styles.wrapper}>
                <AuthCard>
                    <div className={getByLayerClass[authPageType]}></div>
                    <WelcomeText
                        title='Signup page'
                        description='Lorem ipsum dolor, sit amet <br />consectetur adipisicing <br />elit. Minima commodi <br />sed do eiusmod'
                    />
                    <InputContainerWrapper>
                        <Signup />
                    </InputContainerWrapper>
                </AuthCard>
            </div>
        );
    }

    if (authPageType == AUTH_PAGE_TYPE.LOGIN) {
        return (
            <div className={styles.wrapper}>
                <AuthCard>
                    <div className={getByLayerClass[authPageType]}></div>
                    <InputContainerWrapper>
                        <Login />
                    </InputContainerWrapper>
                    <WelcomeText
                        title='Login Page!'
                        description='Lorem ipsum dolor, sit amet <br />consectetur adipisicing <br />elit. Minima commodi <br />sed do eiusmod'
                        isLoginWelcome
                    />
                </AuthCard>
            </div>
        );
    }
};

export default AuthMainView;