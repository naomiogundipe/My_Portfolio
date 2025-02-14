import React from "react";

const Secondarybtn = ({ link, text }) => {
  return (
    <>
      {text && (
        <button
          className={`bg-white text-slate-800 py-2 px-6 rounded-lg hover:bg-transparent hover:outline-3 -outline-offset-2 hover:text-white font-semibold uppercase text-md transition-all duration-300`}
        >
          <a href={link}>
            {text}
          </a>
        </button>
      )}
    </>
  );
};

export default Secondarybtn;
