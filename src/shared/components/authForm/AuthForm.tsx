import React from 'react';
import Link from 'next/link';

import Login from '../login/Login';
import Signup from '../signup/Signup';
import { AUTH_PAGE_TYPE } from '@/shared/enums';

interface IAuthForm {
    authFormType: AUTH_PAGE_TYPE;
}

const AuthForm = (props: IAuthForm) => {
    const { authFormType } = props;

    const getAuthFormDynamicInfo = {
        [AUTH_PAGE_TYPE.LOGIN]: {
            title: "Login",
            path: "/signup",
            actionLabel: "Signup",
            msg: "Do not have an account?",
        },
        [AUTH_PAGE_TYPE.SIGNUP]: {
            title: "Login",
            path: "/login",
            actionLabel: "Login",
            msg: "Do you have any account?",
        }
    }

    return (
        <div>
            <div className="auth-tag">
                <p>{getAuthFormDynamicInfo[authFormType].title}</p>
                <p></p>
            </div>
            <div className="auth-input-field">
                {authFormType == AUTH_PAGE_TYPE.LOGIN && <Login />}
                {authFormType == AUTH_PAGE_TYPE.SIGNUP && <Signup />}
            </div>
            <p className="mt-3 text-center mb-0">
                {getAuthFormDynamicInfo[authFormType].msg} <Link href={getAuthFormDynamicInfo[authFormType].path}>{getAuthFormDynamicInfo[authFormType].actionLabel}</Link>
            </p>
        </div>
    );
};

export default AuthForm;