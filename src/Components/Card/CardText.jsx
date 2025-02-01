import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";
import { faEnvelope, faLink, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const CardText = () => {
  return (
    <>
      <div className="lg:w-1/2 h-full  text-white flex flex-col justify-center pe-5">
        <h1 className="text-6xl text-center ">
          Hi, I'm <span className="block font-bold">Naomi Ogundipe</span>
        </h1>
        <p className="text-center mt-5 mb-5 text-gray-500">
          Web Developer|Full-Stack Developer
        </p>
        <div className="flex flex-col gap-3  mx-auto ">
          <div className="bg-slate-600 group hover:bg-white hover:text-slate-800  w-full p-1 px-3 rounded-xl flex gap-4 items-center text-md hover:duration-300 hover:transition-all">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="text-xl border-2 border-white p-3 rounded-full group-hover:bg-slate-500 group-hover:border-slate-800 group-hover:text-black group-hover:duration-300 group-hover:transition-all bg-slate-800 text-gray-500"
            />
            <a href="mailto:ntdogundipe@gmail.com">ntdogundipe@gmail.com</a>
          </div>
          <div className="bg-slate-600 group hover:bg-white hover:text-slate-800 w-full p-1 rounded-xl px-3 flex gap-4 items-center text-md hover:duration-300 hover:transition-all ">
            <FontAwesomeIcon
              icon={faPhone}
              className="text-xl border-2 border-white p-3 rounded-full group-hover:bg-slate-500 group-hover:border-slate-800 group-hover:text-black group-hover:duration-300 group-hover:transition-all bg-slate-800 text-gray-500"
            />
            <a href="tel:+2347019436201">+2347019436201</a>
          </div>
          <div className="bg-slate-600 group hover:bg-white hover:text-slate-800 w-full p-1 rounded-xl px-3 flex gap-4 items-center text-md hover:duration-300 hover:transition-all ">
            <FontAwesomeIcon
              icon={faLink}
              className="text-xl border-2 border-white p-3 rounded-full group-hover:bg-slate-500 group-hover:border-slate-800 group-hover:text-black group-hover:duration-300 group-hover:transition-all bg-slate-800 text-gray-500"
            />
            <Link to={"/portfolio"}>Portfolio</Link>
          </div>
        </div>
        <div className="flex w-1/2 mx-auto justify-around text-2xl my-5">
          <div>
            <a href="https://github.com/naomiogundipe" target="_self">
              <FontAwesomeIcon
                icon={faGithub}
                className="border-3 p-2 border-white bg-white text-slate-800 rounded-full cursor-pointer hover:text-white hover:bg-transparent"
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
                className="border-3 p-2 border-white bg-white text-slate-800 rounded-full cursor-pointer hover:text-white hover:bg-transparent"
              />
            </a>
          </div>
          <div>
            <a href="mailto:ntdogundipe@gmail.com" target="_self">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="border-3 p-2 border-white bg-white text-slate-800 rounded-full cursor-pointer hover:text-white hover:bg-transparent"
              />
            </a>
          </div>
        </div>
        <p className="text-center text-gray-500">
          Teen Tech Enthusiast | Problem-Solving Web Developer | Building
          Websites that make an Impact
        </p>
      </div>
    </>
  );
};

export default CardText;
