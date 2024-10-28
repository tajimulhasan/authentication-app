import { Button } from "react-bootstrap";
import Link from "next/link";

import styles from "./styles.module.scss";

export default function Home() {
  return (
    <div>
      <div className={styles.card1}>
        <p className="mb-4">
          You are not logged in! <br />
          please login
        </p>
        <p>
          Already have an account?{" "}
          <a href="/login" className="text-decoration-none text-white">
            <Button variant="dark">Login</Button>
          </a>
        </p>
        <p>
          Do not have an account?{" "}
          <Link href="/signup" className="text-decoration-none text-white">
            <Button variant="dark">Sign Up</Button>
          </Link>
        </p>
      </div>
    </div>
  );
}
