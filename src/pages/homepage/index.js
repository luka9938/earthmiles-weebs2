import styles from "./homepage.module.css";

export default function Homepage() {
  return (
    <main>
      <article className={styles.background}>
        <div className={styles.grid_container}>
          <section className={styles.big_element}>
            <p>pik</p>
          </section>
          <section className={styles.small_element}>
            <p>pik</p>
          </section>
          <section className={styles.small_element}>
            <p>pik</p>
          </section>
        </div>
      </article>
    </main>
  );
}
