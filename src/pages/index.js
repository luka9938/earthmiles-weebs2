import react from "react";
import styles from "./Home.module.css";
import Link from "next/link";

const App = () => {
  return (
    <div className={styles.homeBody}>
      <div className={styles.imageContainer}>
        <img src={"/leftimage1.jpeg"} alt="Image1" className={styles.leftImage}></img>
      </div>

      <div className={styles.imageContainer}>
        <img src={"/leftimage2.jpeg"} alt="Image2" className={styles.leftImage2}></img>
      </div>
      <div className={styles.homeText}>
        <h1>
          Earth Miles
          <br />
          for partner
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          <br />
          ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          <br /> quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo,
          <br />
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu.
          <br /> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.
        </p>
      </div>
      <div className={styles.buttonContainer}>
        <Link href="./login" className={styles.button}>
          Login
        </Link>
        <Link href="./createaccount" className={styles.button}>
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default App;
