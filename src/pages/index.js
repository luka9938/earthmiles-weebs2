import React, { useState, useEffect } from "react";
import styles from "./Home.module.css";
import Link from "next/link";
import Menu from "@/components/Menu";

const App = () => {
  const [clickCount, setClickCount] = useState(0);
  const [leftImageSource, setLeftImageSource] = useState("/leftimage1.jpeg");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleLeftImageClick = () => {
    if (clickCount < 2) {
      setClickCount(clickCount + 1);
    } else {
      setLeftImageSource("/cutedog.jpg");
    }
  };

  return (
    <div className={styles.homeBody}>
      <Menu />
      <div className={styles.homeBodyShadow}>
        <div className={styles.imageContainer}>
          <img
            src={leftImageSource}
            alt="Image1"
            className={styles.leftImage}
            onClick={handleLeftImageClick}
          />
        </div>

        <div className={styles.imageContainer}>
          <img src={"/image30.png"} alt="Image2" className={styles.leftImage2} />
        </div>

        <div className={styles.homeText}>
          <h1>
            <span className={styles.span}>Earth Miles</span>
            <br />
            for partnere
          </h1>
          <p>
            Bliv en del af Earth miles og gør en forskel for{" "}
            <span className={styles.span}>miljøet!</span>
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

        {isMobile && (
          <div className={styles.mobileMessage}>
            <a
              href="https://apps.apple.com/"
              className={styles.downloadButton}
              target="_blank"
              rel="noopener noreferrer"
            >
              Download på App Store
            </a>
            <a
              href="https://play.google.com/store"
              className={styles.downloadButton}
              target="_blank"
              rel="noopener noreferrer"
            >
              Download på Google Play
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
