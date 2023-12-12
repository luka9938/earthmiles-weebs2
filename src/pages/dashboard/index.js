import styles from "./dashboard.module.css";
import Link from "next/link";
import { useState, useEffect } from "react";
import Menu from "@/components/Menu";

export default function Dashboard() {
  const [timeRemaining, setTimeRemaining] = useState(10); // 10 seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining((prevTime) => {
        if (prevTime === 0) {
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
    <main className={styles.background}>
      <div className={styles.background_green}>
        <Menu />
        <article className={styles.grid_container}>
          <article className={styles.big_element}>
            {timeRemaining === 0 ? (
              <>
                <h3 className={styles.h3}>Dashboard</h3>
                <div className={styles.earnings}>
                  <div>
                    <p className={styles.h4}>Salg fra alle kampagner</p>
                    <h2 className={styles.h2}>110 982 DKK</h2>
                  </div>
                  <div>
                    <p className={styles.h4}>Indløste rabatter</p>
                    <h2 className={styles.h2}>186/200</h2>
                  </div>
                </div>
                <div className={styles.campaigns}>
                  <Link
                    href="./campaigns"
                    className={`${styles.campaign_btn} ${styles.active}`}
                  >
                    <span className={styles.campaign_text}>
                      Aktive <br />1
                    </span>
                  </Link>
                  <Link
                    href="./campaigns"
                    className={`${styles.campaign_btn} ${styles.archive}`}
                  >
                    <span className={styles.campaign_text}>
                      Arkiveret <br />4
                    </span>
                  </Link>
                </div>
              </>
            ) : (
              <>
                <div className={styles.circle_container}>
                  <div
                    className={styles.rotating_text}
                    style={{ backgroundImage: "url(/logo1.png)" }}
                  ></div>
                </div>
                <div className={styles.verifying_container}>
                  <h2 className={styles.h2}>
                    Bliv hængende imens vi godkender din forretning
                  </h2>
                  <p className={styles.p}>
                    Du vil blive notificeret gennem email, når din ansøgning er
                    blevet læst igennem; Dette kan tage op til{" "}
                    {getFormattedTime()}
                  </p>
                  <p className={styles.p}>
                    I mellemtiden, hvorfor starter du ikke din første kampagne?
                  </p>
                </div>
              </>
            )}
          </article>
          <article className={styles.small_element1}>
            <h3 className={styles.h3}>Din Partner Profil</h3>
            <section className={styles.profile}>
              <section>
                <ul className={styles.ul}>
                  <li className={styles.li}>
                    <Link href="./profil" className={styles.p}>
                      Personlig information
                    </Link>
                  </li>
                  <li className={styles.li}>
                    <Link href="./faq" className={styles.p}>
                      FAQ
                    </Link>
                  </li>
                  <li className={styles.li}>
                    <Link href="./support" className={styles.p}>
                      Kontakt support
                    </Link>
                  </li>
                  <li className={styles.li}>
                    <Link href="./" className={styles.p}>
                      Log ud
                    </Link>
                  </li>
                  <li className={styles.li}>Regner & faktura</li>
                </ul>
              </section>
              <section>
                <img
                  src={"/logo1.png"}
                  alt="Image2"
                  className={styles.logo}
                ></img>
                <button className={styles.edit_btn}>Rediger</button>
                <p className={styles.h2}>Wedo Aps</p>
              </section>
            </section>
          </article>
          <article className={styles.small_element2}>
            <h2 className={styles.h2}>Vil du prøve noget nyt?</h2>
            <Link href="./newcampaign">
              <span className={styles.newcampaign_btn}>
                Start en ny kampagne her
              </span>
            </Link>
          </article>
        </article>
      </div>
    </main>
  );
}
