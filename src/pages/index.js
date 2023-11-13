import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./Home.module.css";

const inter = Inter({ subsets: ["latin"] });

function Home() {
  return (
    <div className={styles.landingpage}>
      <img
        src="image.jpg"
        alt="Background Image"
        className="Background-image"
      ></img>
      <div className={styles.content}>
        <h1>Your heading</h1>
        <p>Your descriptive text goes here.</p>
        <div className="button">
          <a href="#" className="button">
            button 1
          </a>
          <a href="#" className="button">
            button 2
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
