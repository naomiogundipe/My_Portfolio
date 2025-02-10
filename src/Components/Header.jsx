import React from "react";
import { FaBars } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div
        className={`bg-slate-900 w-full  shadow-md shadow-black rounded-bl-xl rounded-br-xl py-4 px-12 sticky`}
      >
        <div
          className={`max-w-7xl text-white flex justify-between items-center mx-auto`}
        >
          <p className={`text-3xl font-bold`}>LOGO</p>
          <div className={`lg:flex gap-12 items-center justify-center text-lg hidden`}>
            <ul className={`flex gap-6 `}>
              <li className="hover:text-slate-500 font-semibold group relative">
                <Link to={"/"}>Home</Link>

                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300  group-hover:w-full "></span>
              </li>
              <li className="hover:text-slate-500 font-semibold group relative">
                About
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300  group-hover:w-full "></span>
              </li>
              <li className="hover:text-slate-500 font-semibold group relative">
                Projects
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300  group-hover:w-full "></span>
              </li>
              <li className="hover:text-slate-500 font-semibold group relative">
                Blog
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300  group-hover:w-full "></span>
              </li>
            </ul>
            <button
              className={`bg-white text-slate-800 py-2 px-6 rounded-lg hover:bg-transparent hover:outline-3 -outline-offset-2 hover:text-white font-semibold uppercase text-md transition-all duration-300`}
            >
              Contact
            </button>
          </div>
          <div className="lg:hidden block text-4xl">
          <FaBars/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
