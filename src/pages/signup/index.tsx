import classNames from "classnames";
import gsap from "gsap";
import Link from "next/link";
import { useEffect } from "react";
import { Button, Form } from "react-bootstrap";

import styles from "./styles.module.scss";

const Signup = () => {
  useEffect(() => {
    gsap.fromTo(
      `.${styles.welcomeText}`,
      { opacity: 0, x: -80, filter: "blur(4px)" },
      { opacity: 1, x: 0, delay: 0.8, filter: "blur(0px)", duration: 0.8 }
    );
    gsap.fromTo(
      `.${styles.inputContainer}`,
      { opacity: 0, x: 80, filter: "blur(4px)" },
      { opacity: 1, x: 10, delay: 0.8, filter: "blur(0px)", duration: 0.8 }
    );

    gsap.fromTo(
      `.${styles.bgLayer}`,
      {
        opacity: 1,
        rotation: 0,
        width: "1500px",
        height: "1100px",
        left: 0,
        top: 0,
      },
      {
        opacity: 1,
        rotation: -55,
        left: "-720px",
        top: "-880px",
        duration: 1.2,
      }
    );

    return () => {
      gsap.to(`.${styles.bgLayerRight}`, {
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

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.bgLayer}></div>
          <div className={styles.welcomeText}>
            <p>Welcome Back!</p>
            <p>
              Lorem ipsum dolor, sit amet <br />
              consectetur adipisicing <br />
              elit. Minima commodi <br />
              sed do eiusmod
            </p>
          </div>
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
    </>
  );
};

export default Signup;
