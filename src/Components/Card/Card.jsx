import React, { useState, useEffect } from "react";
import ImageHolder from "./ImageHolder";
import CardText from "./CardText";
import { FaRegMoon, FaRegSun } from "react-icons/fa";


const Card = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <>
      <div
        className={`lg:w-3/4 lg:h-3/4 h-full bg-[#111a3b] transition-all duration-300  justify-around items-center ${
          theme === "dark" ? "dark:bg-slate-400" : ""
        } lg:shadow-md lg:shadow-black w-full lg:rounded-4xl flex flex-col lg:flex-row relative`}
      >
        <ImageHolder theme={theme}/>
        <CardText theme={theme}/>
        <button
          className={`absolute top-[5%] left-[2%] text-5xl text-white ${
            theme === "dark" ? "dark:text-[#111a3b]" : ""
          }  `}
          onClick={toggleTheme}
        >
          {theme === "light" ? <FaRegSun /> : <FaRegMoon />}
        </button>
      </div>
    </>
  );
};

export default Card;
