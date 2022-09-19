import React from "react";
import styles from "./styles.module.css";
import Link from "next/link";

export default function Header() {
  return (
    <div className="w-full sticky top-0 left-0 z-20 shadow-md bg-white px-5 py-5 md:px-20 py-7">
      <div className={"flex justify-between"}>
        <div className={""}>
          <Link href="/">
            <div className="flex flex-row">
              <span className={""}>
                <img src="" alt="Logo here" />
              </span>
              <span className={""}>Website Name </span>
            </div>
          </Link>
        </div>
        <div className={"w-full md:w-1/2 lg:w-1/4 "}>
          <ul
            className="flex flex-row justify-between font-bold text-lg "
            typeof="none"
          >
            <li className="hover:underline cursor-pointer">Home</li>
            <li className="hover:underline cursor-pointer">About</li>
            <li className="hover:underline cursor-pointer">Contact us</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
