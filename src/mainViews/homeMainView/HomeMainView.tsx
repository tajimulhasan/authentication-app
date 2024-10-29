import React from 'react';
import Link from "next/link";
import { Button } from "react-bootstrap";

import styles from "./homeMainView.module.scss";

const HomeMainView = () => {
    return (
        <div>
            <div className={styles.card1}>
                <p className="mb-4">
                    You are not logged in! <br />
                    please login..
                </p>
                <p>
                    Already have an account?{" "}
                    <Link href="/login">
                        <Button variant="dark">Login</Button>
                    </Link>
                </p>
                <p>
                    Do not have an account?{" "}
                    <Link href="/signup">
                        <Button variant="dark">Sign Up</Button>
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default HomeMainView;