import styles from "./homepage.module.css";
import Link from "next/link";

export default function Homepage() {
  return (
    <main>
      <article className={styles.background}>
        <div className={styles.grid_container}>
          <article className={styles.big_element}>
            <div className={styles.circle_container}>
              <h1 className={styles.rotating_text}>
                Earth Miles. Earth Miles. Earth Miles.
              </h1>
            </div>
            <h2 className={styles.h2}>
              Hold on tight while we are verifying your buisness
            </h2>
            <p className={styles.p}>
              You'll be notified via Email when it has been reviewed this can
              take up to 12 hours.
            </p>
            <p className={styles.p}>
              in the meantime why not start creating your first campaign?
            </p>
          </article>
          <article className={styles.small_element}>
            <h3 className={styles.h3}>Profile</h3>
            <section className={styles.profile}>
              <section>
                <img></img>
                <button>Edit</button>
                <p className={styles.p}>Wedo Aps</p>
                <p className={styles.p}>Earth Miles Partner</p>
              </section>
              <section>
                <ul className={styles.p}>
                  <li>Personal Info</li>
                  <li>How it works</li>
                  <li>Contact support</li>
                  <li>Log Out</li>
                  <li>Billing and invoices</li>
                </ul>
              </section>
            </section>
          </article>
          <article className={styles.small_element}>
            <h2 className={styles.h2}>Want to something new?</h2>
            <Link href="./login">
              <span className={styles.h2}>Start a new campaign here</span>
            </Link>
          </article>
        </div>
      </article>
    </main>
  );
}
