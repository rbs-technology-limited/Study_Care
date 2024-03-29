"use client";
import React, { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import { Flowbite } from "flowbite-react";
import { ThemeProvider } from "next-themes";

const AOSProvider = ({ children }: { children: React.ReactNode }) => {
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);

  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: false,
      offset: 200,
      duration: 500,
    });
  }, []);

  
  if (!mounted) return null;
  return (
    <ThemeProvider attribute="class">
      <Flowbite>{children}</Flowbite>
    </ThemeProvider>
  );
};

export default AOSProvider;
