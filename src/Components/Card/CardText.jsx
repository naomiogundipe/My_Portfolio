import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";
import { faEnvelope, faLink, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const CardText = ({ theme }) => {
  return (
    <>
      <div
        className={`lg:w-1/2 lg:h-full w-full items-center  text-white flex flex-col justify-center lg:pe-5 ${
          theme === "dark" ? "dark:text-[#111a3b]" : ""
        }`}
      >
        <h1 className="xl:text-5xl lg:text-3xl md:text-2xl  text-center ">
          Hi, I'm <span className="block font-bold">Naomi Ogundipe</span>
        </h1>
        <p
          className={`text-center mt-5 mb-5 text-gray-500 ${
            theme === "dark" ? "dark:text-gray-500" : ""
          }`}
        >
          Web Developer
        </p>
        <div className="flex flex-col gap-3  lg:mx-auto ">
          <div
            className={`bg-slate-600 group hover:bg-white hover:text-[#111a3b]  w-full p-1 px-3 rounded-xl flex gap-4 items-center text-md hover:duration-300 hover:transition-all ${
              theme === "dark"
                ? "dark:bg-[#111a3b] text-white shadow-md shadow-black"
                : ""
            }`}
          >
            <FontAwesomeIcon
              icon={faEnvelope}
              className={`text-xl border-2 border-white p-3 rounded-full group-hover:bg-[#111a3b] group-hover:border-[#111a3b] group-hover:text-white group-hover:duration-300 group-hover:transition-all bg-[#111a3b] text-gray-500 ${
                theme === "dark"
                  ? "dark:bg-white text-gray-800 border-0 -outline-offset-3 "
                  : ""
              }`}
            />
            <a href="mailto:ntdogundipe@gmail.com">ntdogundipe@gmail.com</a>
          </div>
          <div
            className={`bg-slate-600 group hover:bg-white hover:text-[#111a3b]  w-full p-1 px-3 rounded-xl flex gap-4 items-center text-md hover:duration-300 hover:transition-all ${
              theme === "dark"
                ? "dark:bg-[#111a3b] text-white shadow-md shadow-black"
                : ""
            }`}
          >
            <FontAwesomeIcon
              icon={faPhone}
              className={`text-xl border-2 border-white p-3 rounded-full group-hover:bg-[#111a3b] group-hover:border-[#111a3b] group-hover:text-white group-hover:duration-300 group-hover:transition-all bg-[#111a3b] text-gray-500 ${
                theme === "dark"
                  ? "dark:bg-white text-gray-800 border-0 -outline-offset-3 "
                  : ""
              }`}
            />
            <a href="tel:+2347019436201">+2347019436201</a>
          </div>
          <div
            className={`bg-slate-600 group hover:bg-white hover:text-[#111a3b]  w-full p-1 px-3 rounded-xl flex gap-4 items-center text-md hover:duration-300 hover:transition-all ${
              theme === "dark"
                ? "dark:bg-[#111a3b] text-white shadow-md shadow-black"
                : ""
            }`}
          >
            <FontAwesomeIcon
              icon={faLink}
              className={`text-xl ${
                theme === "dark"
                  ? "dark:bg-white text-gray-800 border-0 -outline-offset-3 "
                  : ""
              } border-2 border-white p-3 rounded-full group-hover:bg-[#111a3b] group-hover:border-[#111a3b] group-hover:text-white group-hover:duration-300 group-hover:transition-all bg-[#111a3b] text-gray-500`}
            />
            <Link to={"/portfolio"}>Portfolio</Link>
          </div>
        </div>
        <div className="flex lg:w-1/2 mx-auto justify-around text-2xl my-5 gap-6   lg:gap-0">
          <div>
            <a href="https://github.com/naomiogundipe" target="_self">
              <FontAwesomeIcon
                icon={faGithub}
                className={`border-3 p-2 border-white bg-white text-[#111a3b] rounded-full cursor-pointer hover:text-white hover:bg-transparent ${
                  theme === "dark"
                    ? "dark:bg-[#111a3b] text-white border-0 hover:text-[#111a3b] hover:bg-[#111a3b]"
                    : ""
                }`}
              />
            </a>
          </div>
          <div>
            <a
              href="https://www.linkedin.com/in/naomi-ogundipe-a4667b333?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
              target="_self"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                className={`border-3 p-2 border-white bg-white text-[#111a3b] rounded-full cursor-pointer hover:text-white hover:bg-transparent ${
                  theme === "dark"
                    ? "dark:bg-[#111a3b] text-white border-0 hover:text-[#111a3b] hover:bg-[#111a3b]"
                    : ""
                }`}
              />
            </a>
          </div>
          <div>
            <a href="mailto:ntdogundipe@gmail.com" target="_self">
              <FontAwesomeIcon
                icon={faEnvelope}
                className={`border-3 p-2 border-white bg-white text-[#111a3b] rounded-full cursor-pointer hover:text-white hover:bg-transparent ${
                  theme === "dark"
                    ? "dark:bg-[#111a3b] text-white border-0 hover:text-[#111a3b] hover:bg-[#111a3b]"
                    : ""
                }`}
              />
            </a>
          </div>
        </div>
        <p className="text-center text-gray-500">
          Tech Enthusiast | Problem-Solving Full-Stack Developer | Building
          Websites that make an Impact
        </p>
      </div>
    </>
  );
};

export default CardText;
