import styles from "./dashboard.module.css";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Dashboard() {
  const [content, setContent] = useState("Initial content");
  const [timeRemaining, setTimeRemaining] = useState(10); // 5 minutes in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining((prevTime) => {
        if (prevTime === 0) {
          setContent("Updated content after 5 minutes");
          clearInterval(timer);
          return prevTime;
        }
        return prevTime - 1;
      });
    }, 1000); // Update every second

    return () => clearInterval(timer);
  }, []); // Run this effect only once when the component mounts

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${
      remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds
    }`;
  };

  const getFormattedTime = () => {
    return formatTime(timeRemaining);
  };

  return (
    <main>
      <article className={styles.background}>
        <div className={styles.grid_container}>
          <article className={styles.big_element}>
            {timeRemaining === 0 ? (
              <div>
                <h3 className={styles.h3}>Your Dashboard</h3>
                <p className={styles.p}>Total sales from all campaigns</p>
                <h2 className={styles.h2}>110 982 DKK</h2>
                <p className={styles.p}>Redeemed discounts</p>
                <h2 className={styles.h2}>186/200</h2>
                <div className={styles.campaigns}>
                  <Link href="./active">
                    <span className={styles.h2}>
                      Active <br />1
                    </span>
                  </Link>
                  <Link href="./archived">
                    <span className={styles.h2}>
                      Archived <br />4
                    </span>
                  </Link>
                </div>
              </div>
            ) : (
              <div>
                <div className={styles.circle_container}>
                  <h1 className={styles.rotating_text}>
                    Earth Miles. Earth Miles. Earth Miles.
                  </h1>
                </div>
                <h2 className={styles.h2}>
                  Hold on tight while we are verifying your business
                </h2>
                <p className={styles.p}>
                  You'll be notified via Email when it has been reviewed; this
                  can take up to {getFormattedTime()}.
                </p>
                <p className={styles.p}>
                  In the meantime, why not start creating your first campaign?
                </p>
              </div>
            )}
          </article>
          <article className={styles.small_element}>
            <h3 className={styles.h3}>Profile</h3>
            <section className={styles.profile}>
              <section>
                <img alt="Profile" />
                <button>Edit</button>
                <p className={styles.h2}>Wedo Aps</p>
                <p className={styles.p}>Earth Miles Partner</p>
              </section>
              <section>
                <ul className={styles.ul}>
                  <li className={styles.li}>Personal Info</li>
                  <li className={styles.li}>How it works</li>
                  <li className={styles.li}>Contact support</li>
                  <li className={styles.li}>Log Out</li>
                  <li className={styles.li}>Billing and invoices</li>
                </ul>
              </section>
            </section>
          </article>
          <article className={styles.small_element}>
            <h2 className={styles.h2}>Want to try something new?</h2>
            <Link href="./login">
              <span className={styles.h2}>Start a new campaign here</span>
            </Link>
          </article>
        </div>
      </article>
    </main>
  );
}
