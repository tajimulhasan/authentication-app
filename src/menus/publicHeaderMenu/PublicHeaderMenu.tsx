import React from 'react';

import styles from "./publicHeaderMenu.module.scss";

const PublicHeaderMenu = () => {
    return (
        <nav className={styles.navbar}>
            <h2 className='text-center'>Header</h2>
        </nav>
    );
};

export default PublicHeaderMenu;