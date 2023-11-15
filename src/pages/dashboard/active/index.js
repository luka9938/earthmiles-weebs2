import styles from "./active.module.css";
import Link from "next/link";
export default function Active() {
  return (
    <article className={styles.grid_container}>
      <article className={styles.big_element}>
        <Link href="/dashboard">
          <span className={styles.p}>back</span>
        </Link>
        <h3>Kampagne 1</h3>
        <h3>50% på din entré</h3>
        <section>
          <p>samlet salg fra denne kampagne</p>
          <p>11.000</p>
          <p>indløste rabatter</p>
          <p>290/500</p>
          <p>Earth Miles optjent</p>
          <p>1139</p>
        </section>
      </article>
      <article className={styles.big_element}>
        <button>Campaign 1</button>
      </article>
    </article>
  );
}
