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
            <Link className={styles.menuitem} href="/profil">
              Profil
            </Link>
            <Link className={styles.menuitem} href="/dashboard">
              Dashboard
            </Link>
            <Link className={styles.menuitem} href="/support">
              Support
            </Link>
            <Link className={styles.menuitem} href="/faq">
              FAQ
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
