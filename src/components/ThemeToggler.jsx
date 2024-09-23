import React, { useState, useEffect } from "react";

import IconMoon from "../components/Icon/IconMoon";
import IconSun from "../components/Icon/IconSun";

const ThemeToggler = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <button
      onClick={toggleTheme}
      className="block p-2 rounded-full dark:text-white bg-white-light/40 dark:bg-dark/40  hover:bg-white-light/90 dark:hover:bg-dark/60"
    >
      {theme === "dark" ? <IconSun /> : <IconMoon />}
    </button>
  );
};

export default ThemeToggler;
