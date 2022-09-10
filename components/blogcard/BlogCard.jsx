import React, { useState } from "react";
import styles from "./styles.module.css";
import Image from "next/image";

export default function BlogCard(props) {
  const { orientation, size, data } = props;
  return (
    <>
      {orientation === "vertical" ? (
        <VerticalCard data={data} size={size} />
      ) : (
        <HorizontalCard data={data} size={size} />
      )}
    </>
  );
}

function VerticalCard({ data, size }) {
  const [expand, setExpand] = useState(false);
  const _size = size === "small";
  return (
    <div
      className={
        styles.vertcont + " " + (_size ? styles.smallcard : styles.bigcard)
      }
    >
      <div
        className={styles.box + " " + (expand && !_size ? styles.expand : "")}
        style={{ backgroundImage: `url(${data.img})` }}
      >
        <div
          className={styles.container}
          onMouseEnter={(e) => {
            setExpand(true);
          }}
          onMouseLeave={(e) => {
            setExpand(false);
          }}
        >
          <div className={styles.title}>{data.title}</div>
          <div className={styles.content}>{data.content}</div>
          <div className={styles.author}>
            <img src={data.author.img} alt="user" />
            <span>{data.author.username}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function HorizontalCard({ data, size }) {
  return (
    <div className={styles.horicont}>
      <div className={styles.box}>
        <div className={styles.leftimg}>
          <img src={data.img} alt="wow" />
        </div>
        <div className={styles.rightcontent}>
          <div className={styles.title}>{data.title}</div>
          <div className={styles.content}>{data.content}</div>
        </div>
      </div>
    </div>
  );
}
