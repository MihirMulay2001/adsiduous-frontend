import React, { useState } from "react";
import Advert from "../../components/advert/Advert";
import useFetcher from "../../hooks/useFetcher";
import Header from "../../sections/header/Header";
import { useGetBlog } from "../../hooks/useGetBlogs";
import { useRouter } from "next/router";

// let ConvertStringToHTML = function (str) {
//   let parser = new DOMParser();
//   let doc = parser.parseFromString(str, "text/html");
//   return doc.body;
// };

export default function Blogs() {
  const router = useRouter();
  const { id } = router.query;
  const { loading, data, error } = useGetBlog(id);
  if (loading) return <div>Loading</div>;
  if (error) return <div>Error</div>;
  const blogData = data.post;
  console.log(blogData.content);

  return (
    <div>
      <Header />
      <div className="w-10/12 m-auto md:w-7/12">
        <div>
          <div className="text-xl font-semi-bold mt-20 mb-5 text-center underline md:text-3xl">
            {blogData.title}
          </div>
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
    </div>
  );
}
