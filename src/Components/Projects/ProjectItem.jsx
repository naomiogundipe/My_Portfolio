import React from "react";
import Primarybtn from "../Buttons/Primarybtn";
import Secondarybtn from "../Buttons/Secondarybtn";

const ProjectItem = (props) => {
  return (
    <>
      <div className="h-[600px] rounded-2xl pb-3  bg-slate-600 shadow-md shadow-black flex flex-col p-4 items-center text-white gap-2 justify-between md:min-w-[350px] ">
        <img
          src={props.srclink}
          alt=""
          className="w-full min-h-[62%] max-h-[70%] rounded-xl  bg-gray-200"
        />
        <p className="text-3xl uppercase font-semibold">{props.header}</p>
        <p className="text-center text-lg">{props.description}</p>
        <div className="flex gap-4">
          <Primarybtn text={"Github"} link={props.link} />
          <Secondarybtn text={"Live Demo"} link={props.link} />
        </div>
      </div>
    </>
  );
};

export default ProjectItem;
