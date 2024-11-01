import React from 'react';

import styles from "./authCard.module.scss";

interface IAuthCard {
    children: React.ReactNode;
}

const AuthCard = (props: IAuthCard) => {
    const { children } = props;
    return (
        <div className={styles.container}>
            {children}
        </div>
    );
};

export default AuthCard;