import React, { useState } from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import Link from "next/link";

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
    <Link href={`/blogs/${data.id}`}>
      <div
        className={
          styles.vertcont + " " + (_size ? styles.smallcard : styles.bigcard)
        }
      >
        <div
          className={styles.box + " " + (expand && !_size ? styles.expand : "")}
          style={{
            backgroundImage: `url(${
              data.featuredImage && data.featuredImage.node.mediaItemUrl
            })`,
          }}
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
            <div className={styles.author}>
              <img src={""} alt="user" />
              <span>{data.authorId}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

function HorizontalCard({ data, size }) {
  return (
    <div className={styles.horicont}>
      <div className={styles.box}>
        <div className={styles.leftimg}>
          <img
            src={data.featuredImage && data.featuredImage.node.mediaItemUrl}
            alt="wow"
          />
        </div>
        <div className={styles.rightcontent}>
          <div className={styles.title}>{data.title}</div>
          <div className={styles.content}>{data.authorId}</div>
        </div>
      </div>
    </div>
  );
}
