import Link from "next/link";
import gsap from "gsap";
import classNames from "classnames";
import { useEffect } from "react";
import { Button, Form } from "react-bootstrap";

import styles from "./styles.module.scss";

const Login = () => {
  useEffect(() => {
    gsap.fromTo(
      `.${styles.welcomeText}`,
      { opacity: 0, x: 50, filter: "blur(5px)" },
      { opacity: 1, x: 0, delay: 0.8, filter: "blur(0px)", duration: 0.8 }
    );

    gsap.fromTo(
      `.${styles.inputContainer}`,
      { opacity: 0, x: -50, filter: "blur(5px)" },
      { opacity: 1, x: 0, delay: 0.8, filter: "blur(0px)", duration: 0.8 }
    );

    gsap.fromTo(
      `.${styles.bgLayerRight}`,
      {
        opacity: 1,
        rotation: 0,
        width: "1500px",
        height: "1100px",
        bottom: 0,
        right: 0,
      },
      {
        opacity: 1,
        rotation: 55,
        bottom: "-309px",
        right: "-1100px",
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
          <div className={styles.bgLayerRight}></div>
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
          <div className={styles.welcomeText}>
            <p>Welcome Back!</p>
            <p className={styles.textIndentation}>
              <span>Lorem ipsum dolor, sit amet</span>
              <span>consectetur adipisicing</span>
              <span>elit Minima commodi</span>
              <span>sed do eiusmod</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
