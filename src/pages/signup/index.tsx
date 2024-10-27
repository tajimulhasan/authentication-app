import { Button, Form } from "react-bootstrap";
import styles from "./styles.module.scss";
import classNames from "classnames";
import Link from "next/link";

const Signup = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.welcomeText}>
            <p>Welcome Back!</p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam
              quo tempore voluptas maxime molestias, quia deserunt ut repellat
              eveniet sapiente?
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
                <Form.Control type="email" placeholder="Enter your email address" />
              </Form.Group>
              <Form.Group
                className="mb-1"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>password</Form.Label>
                <Form.Control type="password" placeholder="Enter your password" />
              </Form.Group>
              <Button className={classNames(styles.button, "rounded-pill")}>Sign Up</Button>
            </Form>
           </div>
           <p className="mt-3 text-center mb-0">Already have an account? <Link href="/">Login</Link></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
