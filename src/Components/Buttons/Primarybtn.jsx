import React from "react";

const Primarybtn = ({ link, text }) => {
  return (
    <>
      {text && (
        <button
          className={`bg-slate-800 text-white max-w-max py-2 px-6 rounded-lg hover:bg-transparent hover:outline-3 -outline-offset-2  hover:outline-slate-800 hover:text-gray-400 font-semibold uppercase text-md transition-all duration-300`}
        >
          <a href={link} >
            {text}
          </a>
        </button>
      )}
    </>
  );
};

export default Primarybtn;
