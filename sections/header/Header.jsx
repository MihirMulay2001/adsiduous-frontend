import React from "react";
import styles from "./styles.module.css";
import Link from "next/link";

export default function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <div className={styles.website}>
          <Link href="/">
            <div>
              <span className={styles.logo}>
                <img src="" alt="Logo here" />
              </span>
              <span className={styles.name}>Website Name </span>
            </div>
          </Link>
        </div>
        <div className={styles.navbar}>
          <ul typeof="none">
            <li>Home</li>
            <li>About</li>
            <li>Contact us</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
