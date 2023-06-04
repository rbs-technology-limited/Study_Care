"use client";
import React, { useEffect, useState } from "react";

const ScrollToTop = () => {
  const isBrowser = () => typeof window !== "undefined"; //The approach recommended by Next.js

  const [isShow, setIsShow] = useState(false);
  const handleScrollToTop = (e) => {
    e.preventDefault();
    if (!isBrowser()) return;
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const scrollHeight = window.pageYOffset;
      if (scrollHeight > 300) {
        setIsShow(true);
      } else {
        setIsShow(false);
      }
    });

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  return (
    <>
      {/* hello */}
      {/* //circle lime green button with arrow up icon  */}
      {isShow && (
        <button
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
          }}
          className="bg-lime-500 hover:bg-lime-600 text-white font-bold py-2 px-2 rounded-full
            transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 border-2 border-white animate-ping
            shadow-lg  shadow-lime-800/50
            
            "
          onClick={(e) => {
            handleScrollToTop(e);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 inline-block animate-animate-bounce "
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 15l7-7 7 7"
            />
          </svg>
        </button>
      )}
    </>
  );
};

export default ScrollToTop;
