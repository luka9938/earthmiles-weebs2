import { useState, useEffect } from "react";
import styles from "./Home.module.css";
import Link from "next/link";

const App = () => {
  return (
    <div className={styles.homeBody} style={{ backgroundImage: "url(/foto2.jpeg)" }}>
      <div className={styles.homeText}>
        <h1>Earth Miles</h1>
        <h2>Velkommen til Earth Miles for partner</h2>
        <div className={styles.buttonContainer}>
          <Link href="./login" className={styles.button}>
            Login
          </Link>
          <Link href="./createaccount" className={styles.button}>
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default App;
