import Head from "next/head";
import styles from "../styles/home.module.css";
import Header from "../sections/header/Header";
import Footer from "../sections/footer/Footer";
import BlogCard from "../components/blogcard/BlogCard";
import data from "../data/data.json";
import Advert from "../components/advert/Advert";
import { useGetBlogs } from "../hooks/useGetBlogs";

export default function Home() {
  const { error, loading, data: blogdata } = useGetBlogs();
  if (loading) return <div>Loading</div>;
  if (error) return <div>Error</div>;
  const arr = blogdata.posts.nodes;
  console.log(arr);
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <div className={styles.main}>
        <ThreeContainer data={arr.slice(0, 3)} />
        <GridContent data={arr} />
      </div>
      <Footer />
    </div>
  );
}

function ThreeContainer({ data }) {
  return (
    <div className={styles.threecont}>
      <div className={styles.leftcont}>
        <BlogCard data={data[0]} size={"big"} orientation="vertical" />
      </div>
      <div className={styles.rightcont}>
        <BlogCard data={data[1]} size={"big"} orientation="horizontal" />
        <BlogCard data={data[2]} size={"big"} orientation="horizontal" />
      </div>
    </div>
  );
}

function GridContent({ data }) {
  return (
    <div className={styles.gridcont}>
      {data.map((_d) => (
        <BlogCard data={_d} orientation="vertical" size="small" key={_d.id} />
      ))}
    </div>
  );
}
