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
        <img src={"/leftimage2.jpeg"} alt="Image2" className={styles.leftImage}></img>
      </div>
      <div className={styles.homeText}>
        <h1>
          Earth Miles
          <br />
          for partner
        </h1>
        <p>
          In your orange shirt We'll go for yogurt Wish I could paint you, oh whoa-whoa I'd never do
          you justice
          <br /> Oh yeah! Oh yeah! I only wanted to be near you I only wanted to be close to someone
          <br />I only wanted to be next to you I didn't think it through
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
