import React from "react";
import namedlogo from '../Card/namedlogo.jpg'



const Image = ({ theme }) => {
  return (
    <>
      <div
        className={`${
          theme === "dark" ? "shadow-md shadow-black" : ""
        } lg:w-[350px] lg:h-[350px] w-[250px] h-[250px]  rounded-full shadow-md shadow-black  mx-auto `}
      >
        <img
          src ={namedlogo }
          alt=""
          className="w-full h-full object-center object-cover rounded-full"
        />
      </div>
    </>
  );
};

export default Image;
