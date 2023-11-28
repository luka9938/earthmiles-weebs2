import React, { useState } from "react";
import styles from "./Home.module.css";
import Link from "next/link";

const App = () => {
  const [clickCount, setClickCount] = useState(0);
  const [leftImageSource, setleftimageSource] = useState("/leftimage1.jpeg");

  const handleLeftImageClick = () => {
    if (clickCount < 2) {
      setClickCount(clickCount + 1);
    } else {
      setleftimageSource("/cutedog.jpg");
    }
  };

  return (
    <div className={styles.homeBody} style={{ backgroundImage: "url(/tog.jpg)" }}>
      <div className={styles.imageContainer}>
        <img
          src={leftImageSource}
          alt="Image1"
          className={styles.leftImage}
          onClick={handleLeftImageClick}
        ></img>
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
        <Link href="./createaccount" className={styles.button} role="button">
          Opret en konto
        </Link>

        <Link href="./login" className={styles.button} role="button">
          Login
        </Link>
      </div>
    </div>
  );
};

export default App;
