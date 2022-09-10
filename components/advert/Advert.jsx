import React from "react";
import styles from "./styles.module.css";
export default function Advert(props) {
  return (
    <div className={styles.container}>
      {props.side === "both" && (
        <div className={styles.advert}>advertisement</div>
      )}
      <div className={styles.children}>{props.children}</div>
      <div className={styles.advert}>advertisement</div>
    </div>
  );
}
