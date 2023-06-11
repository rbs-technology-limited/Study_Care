"use client";
import React from "react";
import { useTheme } from "next-themes";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";

const ThemeToggleButton = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <button
      onClick={() => (theme == "dark" ? setTheme("light") : setTheme("dark"))}
      className="btn btn-primary"
    >
      {currentTheme === "dark" ? <BsFillMoonFill /> : <BsFillSunFill />}
    </button>
  );
};

export default ThemeToggleButton;
