import React, { useState } from "react";
import Advert from "../../components/advert/Advert";
import useFetcher from "../../hooks/useFetcher";
import Header from "../../sections/header/Header";
import { useGetBlog } from "../../hooks/useGetBlogs";
import { useRouter } from "next/router";
import Head from "next/head";

import dynamic from "next/dynamic";
// const DynamicHeader = ({ url }) =>
//   dynamic(() => import(url.substring(23)), {
//     ssr: false,
//   });

let ConvertStringToHTML = function (str) {
  let parser = new DOMParser();
  let doc = parser.parseFromString(str, "text/html");
  return doc.body;
};

export default function Blogs() {
  const router = useRouter();
  const { id } = router.query;
  const { loading, data, error } = useGetBlog(id);
  if (loading) return <div>Loading</div>;
  if (error) return <div>Error</div>;
  // const [wpstyles, setWPStyles] = useState();
  const blogData = data.post;
  console.log(blogData.content);
  // blogData.enqueuedStylesheets.nodes.forEach((_s) => {
  //   if (_s.src) {
  //     console.log(_s);
  //     fetch(
  //       _s.src.charAt(0) === "/" ? "http://adsiduous1.local" + _s.src : _s.src,
  //       {
  //         mode: "no-cors",
  //       }
  //     ).then((res) =>
  //       res.json().then((data) => {
  //         console.log(data);
  //       })
  //     );
  //   }
  // });

  return (
    <div>
      {blogData.enqueuedStylesheets.nodes.map((_src, key) => {
        if (_src.src) {
          const newsrc =
            _src.src.charAt(0) === "/"
              ? "http://adsiduous1.local" + _src.src
              : _src.src;
          console.log(newsrc);
          return (
            <link rel="stylesheet" type="text/css" href={newsrc} key={key} />
          );
        }
      })}
      {/* {blogData.enqueuedStylesheets.nodes.map((_src, key) => {
        if (_src.src) {
          return (
            <DynamicHeader
              url={
                _src.src.charAt(0) === "/"
                  ? "http://adsiduous1.local" + _src.src
                  : _src.src
              }
              key={key}
            />
          );
        }
      })} */}

      <Header />

      <div>
        <div>{blogData.title}</div>
        <div>{blogData.date}</div>
        <div>
          <span>{blogData.commentCount}</span>
        </div>
      </div>
      <div
        dangerouslySetInnerHTML={{
          __html: blogData.content,
        }}
      ></div>
    </div>
  );
}
