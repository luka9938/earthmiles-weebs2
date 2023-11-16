import { useState, useEffect } from "react";
import styles from "./Home.module.css";

const App = () => {
  return (
    <div className={styles.homeBody} style={{ backgroundImage: "url(/foto2.jpeg)" }}>
      <div className={styles.homeText}>
        <h1>Earth Miles</h1>
        <h2>Velkommen til Earth Miles for partner</h2>
        <div className={styles.buttonContainer}>
          <button className={styles.button}>Login</button>
          <button className={styles.button}>Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default App;
