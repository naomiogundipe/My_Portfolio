import React from "react";
import Header from "../Header";
import Hero from "../Hero/Hero";
import About from "../About/About";
import Skills from "../Skills/Skills";

const Portfolio = () => {
  return (
    <>
      <div className="bg-slate-200">
        <Header />
        <Hero />
        <About/>
        <Skills/>
      </div>
    </>
  );
};

export default Portfolio;
