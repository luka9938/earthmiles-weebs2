import React from "react";
import Link from "next/link";
import styles from "./Menu.module.css";

const Menu = () => {
  return (
    <div className={styles.menu}>
      <div className={styles.logo}>
        <Link href="/">
          <img src="/logowhite.png" alt="logo"></img>
        </Link>
      </div>
      <div className={styles.links}>
        <div className={styles.dropdown}>
          <button className={styles.dropbutten}>Menu</button>
          <div className={styles.dropdowncontent}>
            <Link className={styles.profile} href="/profil">
              Profil
            </Link>
            <Link className={styles.dashboard} href="/dashboard">
              Support
            </Link>
            <Link className={styles.faq} href="/#">
              FAQ
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
