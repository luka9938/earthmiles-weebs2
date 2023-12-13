import React, { useState, useEffect } from "react";
import styles from "./Home.module.css";
import Link from "next/link";
import Menu from "@/components/Menu";

const App = () => {
  const [clickCount, setClickCount] = useState(0);
  const [leftImageSource, setLeftImageSource] = useState("/leftimage1.jpeg");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if the screen width is below 768 pixels
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check on mount
    handleResize();

    // Listen for resize events
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
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
        {/* Left image container */}
        <div className={styles.imageContainer}>
          <img
            src={leftImageSource}
            alt="Image1"
            className={styles.leftImage}
            onClick={handleLeftImageClick}
          />
        </div>

        {/* Second image container */}
        <div className={styles.imageContainer}>
          <img
            src={"/image30.png"}
            alt="Image2"
            className={styles.leftImage2}
          />
        </div>

        {/* Text and buttons */}
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
            <br /> der hver dag bruger{" "}
            <span className={styles.span}>bæredygtig</span> transport.
          </p>
        </div>

        {/* Button container */}
        <div className={styles.buttonContainer}>
          <Link href="./createaccount" className={styles.button} role="button">
            Opret en konto
          </Link>

          <Link href="./login" className={styles.button} role="button">
            Login
          </Link>
        </div>

        {/* Mobile message and download buttons */}
        {isMobile && (
          <div className={styles.mobileMessage}>
            <a
              href="link_to_app_store"
              className={styles.downloadButton}
              target="_blank"
              rel="noopener noreferrer"
            >
              Download on the App Store
            </a>
            <a
              href="link_to_google_play"
              className={styles.downloadButton}
              target="_blank"
              rel="noopener noreferrer"
            >
              Download on Google Play
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
