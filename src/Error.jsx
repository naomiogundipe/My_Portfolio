import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <>
      <div className="h-screen w-full flex items-center justify-center lg:bg-[#111A3b] bg-gray-200">
        <div className="bg-gray-200 lg:w-3/4 lg:h-3/4 w-full h-full lg:shadow-md shadow-black lg:rounded-xl flex flex-col items-center gap-4 lg:justify-center text-center mt-50 lg:mt-0">
        <p className="text-[2rem] font-bold">404: This page took a nap</p>
          <p className="md:text-[3rem] font-semibold text-[1.5rem]">
            Looks like you found a secret passage!!!
          </p>
          <p className="text-lg italic text-gray-500">Click this link to get you back home</p>
          <div className="border-2 py-3 px-12 rounded-lg bg-[#111a3b] lg:bg-transparent text-white lg:text-black  font-semibold uppercase cursor-pointer hover:bg-[#111a3b] hover:text-white">
            <Link to={"/"}>Portfolio</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Error;
