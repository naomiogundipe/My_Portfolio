import React, { useState } from "react";
import ImageHolder from "./ImageHolder";
import CardText from "./CardText"
import { FaRegMoon, FaRegSun } from "react-icons/fa";


const Card = () => {
  const[toggle,setToggle]=useState(false)
  return (
    <>
      <div className="lg:w-3/4 lg:h-3/4 bg-slate-900 lg:shadow-md lg:shadow-black w-full h-full lg:rounded-4xl flex flex-col lg:flex-row relative">
      <ImageHolder/>
      <CardText/>
      <button className="absolute  top-[5%] left-[2%] text-5xl text-white" onClick={()=>setToggle(!toggle)}>
        {toggle ? <FaRegSun/> : <FaRegMoon/>}
      </button>
      </div>
    </>
  );
};

export default Card;
