import React from 'react';
import { Container } from 'react-bootstrap';

import styles from "./publicFooterMenu.module.scss";

const PublicFooterMenu = () => {
    return (
        <footer className={styles.footerWrapper}>
            <Container className='text-center'>
                <p>All right reserved &copy; 2024 - developed by Tajimul Hasan</p>
            </Container>
        </footer>
    );
};

export default PublicFooterMenu;