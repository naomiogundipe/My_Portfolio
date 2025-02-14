import React from "react";
import Header from "../Header";
import Hero from "../Hero/Hero";
import About from "../About/About";
import Skills from "../Skills/Skills";
import Hproject from "../HomeProject/Hproject";
import Footer from "../Footer/Footer";


const Portfolio = () => {
  return (
    <>
      <div className="bg-slate-200">
        <Header />
        <Hero />
        <About/>
        <Skills/>
        <Hproject/>
        <Footer/>
      </div>
    </>
  );
};

export default Portfolio;
