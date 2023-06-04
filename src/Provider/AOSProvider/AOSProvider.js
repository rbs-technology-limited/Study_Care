"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const AOSProvider = ({ children }) => {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: false,
      offset: 200,
      duration: 500,
    });
  }, []);
  return <div>{children}</div>;
};

export default AOSProvider;
