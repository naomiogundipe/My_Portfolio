import React from "react";

const Image = ({theme}) => {
  return (
    <>
      <div className={`${
          theme === "dark" ? "dark:bg-slate-900 shadow-none" : ""
        } lg:w-[350px] lg:h-[350px] w-[250px] h-[250px]  rounded-full bg-white shadow-md shadow-slate-600 mx-auto `}>
      <img src="" alt="" className="w-full h-full object-center object-cover rounded-full" />
      </div>
    </>
  );
};

export default Image;
