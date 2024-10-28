"use client";

import { Button } from "react-bootstrap";
import styles from "./styles.module.scss";
import Link from "next/link";

export default function Home() {
  return (
    <div>
        <div className={styles.card1}>
             <p className="mb-4">You are not logged in! <br />please login</p>
             <p>Do you have account? <Button variant="dark"><a href="/login" className="text-decoration-none text-white">Login</a></Button></p>
             <p>Do not have account? <Button variant="dark"><Link href="/signup" className="text-decoration-none text-white">Sign Up</Link></Button></p>
          </div>  
    </div>
  );
}
