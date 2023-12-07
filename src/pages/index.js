import React, { useState } from "react";
import styles from "./Home.module.css";
import Link from "next/link";
import Menu from "@/components/Menu";

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
    <div className={styles.homeBody} style={{ backgroundImage: "url(/placeholder1.jpg)" }}>
      <Menu />
      <div className={styles.homeBodyShadow}>
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
            <span className={styles.span}>Earth Miles</span>
            <br />
            for partner
          </h1>
          <p>
            join Earth miles og gør en forskel for <span className={styles.span}>miljøet!</span>
            <br />
            Promover din virksomhed til de tusindvis af rejsende,
            <br /> der hver dag bruger <span className={styles.span}>bæredygtig</span> transport.
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
    </div>
  );
};

export default App;
