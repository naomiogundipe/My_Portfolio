import React from "react";
import TextBox from "./TextBox";
import ImageHolder from "../Card/ImageHolder";
const Hero = () => {
  return (
    <>
      <div className="w-full h-full  my-3 mt-10 flex p-3 flex-col-reverse items-center md:flex-row mx-auto justify-center gap-10 ">
        <TextBox />
        <ImageHolder />
      </div>
    </>
  );
};

export default Hero;
