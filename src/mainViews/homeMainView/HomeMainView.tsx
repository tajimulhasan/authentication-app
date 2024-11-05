import React from 'react';
import Link from "next/link";
import { Button, Col, Container } from "react-bootstrap";

import Card from '@/shared/components/card/Card';

const HomeMainView = () => {
    return (
        <section>
            <Container>
                <Col xs={12} md={8} lg={4} className='mx-auto'>
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
                </Col>
            </Container>
        </section>
    );
};

export default HomeMainView;