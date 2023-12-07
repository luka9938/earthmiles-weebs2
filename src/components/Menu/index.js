import React from "react";
import Link from "next/link";
import styles from "./Menu.module.css";

const Menu = () => {
  return (
    <div className={styles.menu}>
      <div className={styles.logo}>
        <Link href="/">
          <img src="/logo1.png" alt="logo"></img>
        </Link>
      </div>
      <Link className={styles.home} href="/">
        Home
      </Link>
      <Link className={styles.profile} href="/profil">
        Profile
      </Link>
      <Link className={styles.dashboard} href="/dashbord">
        Support
      </Link>
      <Link className={styles.faq} href="/#">
        FAQ
      </Link>
    </div>
  );
};

export default Menu;
