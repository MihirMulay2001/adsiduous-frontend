import React from "react";
import Advert from "../../components/advert/Advert";
import useFetcher from "../../hooks/useFetcher";
import Header from "../../sections/header/Header";
import styles from "../../styles/blogs.module.css";

export default function Blogs() {
  const { loading, data, error } = useFetcher("");

  if (loading) return <div>Loading</div>;
  if (error) return <div>Error</div>;
  return (
    <div>
      <Header />

      <div className={styles.heading}>
        <div>{data.title}</div>
        <div>{data.author.username}</div>
        <div>{data.date}</div>
        <div>
          <span>{data.likes}</span>
          <span>{data.comments}</span>
        </div>
      </div>
      <div>
        <Advert side="both">{data.content}</Advert>
      </div>
    </div>
  );
}
