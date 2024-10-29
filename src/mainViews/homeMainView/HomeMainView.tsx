import React from 'react';
import Link from "next/link";
import { Button } from "react-bootstrap";

import styles from "./homeMainView.module.scss";
import Card from '@/shared/components/card/Card';

const HomeMainView = () => {
    return (
        <div>
            <Card>
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
            </Card>
        </div>
    );
};

export default HomeMainView;